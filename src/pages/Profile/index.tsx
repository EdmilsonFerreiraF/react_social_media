import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router-dom";

import { removeFriend, useGetUser } from "apiCalls";
import MainAppBar from "components/MainAppBar";
import MessagesBar from "components/MessagesBar";
import Progress from "components/Progress";
import Sidebar from "components/Sidebar";
import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useProtectPage } from "hooks/useProtectPage";
import { useRequestData } from "hooks/useRequestData";
import { useRequestImage } from "hooks/useRequestImage";
import noCoverImg from "img/no_image.webp";
import noProfileImg from "img/no_person.webp";
import styles from "./style.module.css";
import feedStyles from "../../components/Feed/style.module.css";

import { initializeApp } from "firebase/app";
import { IconButton, MenuItem } from "@mui/material";
import { Delete, PersonAdd } from "@mui/icons-material";
import { addFriend } from "apiCalls";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const Feed = lazy(() => import("components/Feed"));

const Profile = () => {
  useProtectPage();

  const handleError = useErrorHandler();

  const [friends, setFriends] = useState<[] | any>([]);
  const { username } = useParams();

  const { user: currUser, dispatch } = useContext(
    AuthContext
  ) as AuthContextInterface;
  const visitedUser = useRequestData(
    username ? `${baseUrl}/user/${username}` : null,
    {}
  );

  const initialFriends = useRequestData(
    visitedUser &&
      visitedUser.id &&
      `${baseUrl}/user/${visitedUser.id}/friends`,
    []
  );

  useEffect(() => {
    setFriends(initialFriends);
  }, [friends]);

  const token = localStorage.getItem("token") as string;

  useGetUser(currUser, token, dispatch, handleError);

  const user = visitedUser ?? currUser;

  const profilePicture = useRequestImage("profile", user?.profilePicture);
  const coverPicture = useRequestImage("cover", user?.coverPicture);

  const handleAddFriend = async () => {
    const newFriend = await addFriend(visitedUser.id);

    setFriends((friends: any) => [...friends, newFriend]);
  };

  const handleRemoveFriend = async () => {
    const newFriend = await removeFriend(visitedUser.id);

    setFriends((friends: any) => [
      ...friends.filter((friendId: any) => friendId !== newFriend),
    ]);
  };

  const LazyFeed = () => (
    <Suspense
      fallback={
        <main data-testid="feed" className={feedStyles.feedContainer}>
          <Progress />
        </main>
      }
    >
      <Feed otherUserId={user?.id} />
    </Suspense>
  );

  return (
    <>
      <MainAppBar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileHeader}>
            <div className={styles.profileCover}>
              <img
                src={coverPicture ?? noCoverImg}
                className={styles.profileCoverImg}
                alt="User cover"
              />
              <img
                className={styles.profileUserImg}
                src={profilePicture ?? noProfileImg}
                alt="User profile"
              />
            </div>
            <div className={styles.profileButtons}>
              <MenuItem
                className={styles.addFriend}
                onClick={
                  friends.find((friend: any) => friend.id === currUser.id)
                    ? handleRemoveFriend
                    : handleAddFriend
                }
              >
                <IconButton
                  size="medium"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  sx={{
                    padding: "10px 12px 10px 0px",
                  }}
                >
                  <PersonAdd />
                </IconButton>
                <p className={styles.addFriendText}>
                  {friends.find((friend: any) => friend.id === currUser.id)
                    ? "Remove friend"
                    : "Add friend"}
                </p>
              </MenuItem>
              <MenuItem className={styles.addFriend}>
                <IconButton
                  size="medium"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  sx={{
                    padding: "10px 12px 10px 0px",
                  }}
                >
                  <PersonAdd />
                </IconButton>
                <p className={styles.addFriendText}>
                  {friends.find((friend: any) => friend.id === visitedUser.id)
                    ? "Remove friend"
                    : "Add friend"}
                </p>
              </MenuItem>
            </div>
            <div className={styles.profileInfo}>
              <h4
                data-testid="user profile username"
                className={styles.profileInfoName}
              >
                {user?.username}
              </h4>
              <span
                data-testid="user profile description"
                className={styles.profileInfoDesc}
              >
                {user?.description}
              </span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <LazyFeed />
          </div>
        </div>
        <MessagesBar user={user} />
      </div>
    </>
  );
};

export default Profile;

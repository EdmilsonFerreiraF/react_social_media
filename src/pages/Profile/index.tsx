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
import { CoPresentOutlined, Delete, PersonAdd } from "@mui/icons-material";
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
  const [initialFriends, setInitialFriends] = useState<[] | any>([]);
  const { username } = useParams();

  const { user: currUser, dispatch } = useContext(
    AuthContext
  ) as AuthContextInterface;
  const visitedUser = useRequestData(
    username ? `${baseUrl}/user/${username}` : null,
    {}
  );

  const friendList = useRequestData(
    visitedUser?.id ? `${baseUrl}/user/${visitedUser.id}/friends` : null,
    []
  );

  useEffect(() => {
    setFriends(initialFriends);
  }, [initialFriends]);

  useEffect(() => {
    setInitialFriends(friendList);
  }, [friendList]);

  const token = localStorage.getItem("token") as string;

  useGetUser(currUser, token, dispatch, handleError);

  // const user = visitedUser ?? currUser;

  const profilePicture = useRequestImage(
    "profile",
    visitedUser?.profilePicture ?? currUser?.profilePicture
  );
  const coverPicture = useRequestImage(
    "cover",
    visitedUser?.coverPicture ?? currUser?.coverPicture
  );

  const handleAddFriend = async () => {
    const newFriend = await addFriend(visitedUser.id);

    setFriends((friends: any) => [...friends, newFriend]);
  };

  const handleRemoveFriend = async () => {
    const newFriend = await removeFriend(visitedUser.id);

    setFriends((friends: any) => [
      ...friends.filter((friend: any) => friend.id !== newFriend),
    ]);

    console.log("friends", friends);
  };

  console.log(
    "friends.find((friend: any) => friend.id === currUser.id)",
    friends.find((friend: any) => friend.id === currUser.id)
  );

  console.log("friends", friends);

  const LazyFeed = () => (
    <Suspense
      fallback={
        <main data-testid="feed" className={feedStyles.feedContainer}>
          <Progress />
        </main>
      }
    >
      <Feed otherUserId={visitedUser?.id ?? currUser?.id} />
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
                {visitedUser?.username ?? currUser?.username}
              </h4>
              <span
                data-testid="user profile description"
                className={styles.profileInfoDesc}
              >
                {visitedUser?.description ?? currUser?.description}
              </span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <LazyFeed />
          </div>
        </div>
        <MessagesBar user={visitedUser ?? currUser} friends={friends} />
      </div>
    </>
  );
};

export default Profile;

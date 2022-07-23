import React, { lazy, Suspense, useContext } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router-dom";

import { useGetUser } from "apiCalls";
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

const Feed = lazy(() => import("components/Feed"));

const Profile = () => {
  useProtectPage();

  const handleError = useErrorHandler();

  const { username } = useParams();

  const { user: currUser, dispatch } = useContext(
    AuthContext
  ) as AuthContextInterface;
  const visitedUser = useRequestData(
    username ? `${baseUrl}/user/${username}` : null,
    {}
  );

  const token = localStorage.getItem("token") as string;

  useGetUser(currUser, token, dispatch, handleError);

  const user = visitedUser ?? currUser;

  const profilePicture = useRequestImage("profile", user?.profilePicture);
  const coverPicture = useRequestImage("cover", user?.coverPicture);

  const LazyFeed = () => (
    <Suspense fallback={<Progress />}>
      <Feed otherUserId={user?.id} />
    </Suspense>
  );

  return (
    <>
      <MainAppBar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div>
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

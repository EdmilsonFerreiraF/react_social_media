import { initializeApp } from "firebase/app";
import React, { lazy, Suspense, useContext } from "react";
import { useErrorHandler } from "react-error-boundary";

import { useGetUser } from "apiCalls";
import MainAppBar from "components/MainAppBar";
import MessagesBar from "components/MessagesBar";
import Progress from "components/Progress";
import Sidebar from "components/Sidebar";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useProtectPage } from "hooks/useProtectPage";
import styles from "./style.module.css";
import feedStyles from "../../components/Feed/style.module.css";
import { useRequestData } from "hooks/useRequestData";
import { baseUrl } from "constants/baseUrl";

const Feed = lazy(() => import("components/Feed"));

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

const Home = () => {
  useProtectPage();
  const handleError = useErrorHandler();

  const { user, dispatch } = useContext(AuthContext) as AuthContextInterface;
  const token = localStorage.getItem("token") as string;
  useGetUser(user, token, dispatch, handleError);

  const friends = useRequestData(
    user?.id ? `${baseUrl}/user/${user.id}/friends` : null,
    []
  );

  const LazyFeed = () => (
    <Suspense
      fallback={
        <main data-testid="feed" className={feedStyles.feedContainer}>
          <Progress />
        </main>
      }
    >
      <Feed />
    </Suspense>
  );

  return (
    <>
      <MainAppBar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <LazyFeed />
        <MessagesBar friends={friends} />
      </div>
    </>
  );
};

export default Home;

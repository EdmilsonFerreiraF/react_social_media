import { initializeApp } from "firebase/app";
import React, { lazy, ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Progress from "components/Progress";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const ErrorPage = lazy(() => import("pages/Error"));
const HomePage = lazy(() => import("pages/Home"));
const SignupPage = lazy(() => import("pages/Signup"));
const LoginPage = lazy(() => import("pages/Login"));
const ProfilePage = lazy(() => import("pages/Profile"));

const routeList = [
  [0, "*", { ErrorPage }],
  [1, "/", { HomePage }],
  [2, "/signup", { SignupPage }],
  [3, "/login", { LoginPage }],
  [4, "/profile/:username", { ProfilePage }],
];

const App = () => {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route
          key={route[0] as number}
          path={route[1] as string}
          element={
            <Suspense fallback={<Progress />}>{route[2] as ReactNode}</Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default App;

// import { initializeApp } from "firebase/app";
import { lazy, ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "App.module.css";
import Progress from "components/Progress";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// initializeApp(firebaseConfig);

const ErrorPage = lazy(() => import("pages/Error"));
const HomePage = lazy(() => import("pages/Home"));
const SignupPage = lazy(() => import("pages/Signup"));
const LoginPage = lazy(() => import("pages/Login"));
const ProfilePage = lazy(() => import("pages/Profile"));

const routeList = [
  [0, "*", <ErrorPage />],
  [1, "/", <HomePage />],
  [2, "/signup", <SignupPage />],
  [3, "/login", <LoginPage />],
  [4, "/profile/:username", <ProfilePage />],
];

const App = () => {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route
          key={route[0] as number}
          path={route[1] as string}
          element={
            <Suspense fallback={<Progress />}>
              <div className={styles.fontFamilyRoboto}>
                {route[2] as ReactNode}
              </div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default App;

import React, { lazy, Suspense } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

import { initializeApp } from "firebase/app"
// import dotenv from 'dotenv'

// dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig)

const ErrorPage = lazy(() => import('pages/Error'))
const HomePage = lazy(() => import('pages/Home'))
const SignupPage = lazy(() => import('pages/Signup'))
const LoginPage = lazy(() => import('pages/Login'))
const ProfilePage = lazy(() => import('pages/Profile'))

const routeList: any = [
  ["*", <ErrorPage />],
  ["/", <HomePage />],
  ["/signup", <SignupPage />],
  ["/login", <LoginPage />],
  ["/profile/:username", <ProfilePage />],
]

const App = () => {
  return (
    <Routes>
      {routeList.map((route: any) => (
        <Route
          path={route[0]}
          element={
            <Suspense fallback={<CircularProgress />}>
              {route[1]}
            </Suspense>}
        />
      ))}
    </Routes>
  );
}

export default App;

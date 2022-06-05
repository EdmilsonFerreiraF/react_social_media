import React, { lazy, Suspense } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

import { initializeApp } from "firebase/app"

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

const ErrorPage = lazy(() => import('pages/Error'))
const HomePage = lazy(() => import('pages/Home'))
const SignupPage = lazy(() => import('pages/Signup'))
const LoginPage = lazy(() => import('pages/Login'))
const ProfilePage = lazy(() => import('pages/Profile'))

const App = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense fallback={<CircularProgress />}>
            <ErrorPage />
          </Suspense>}
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<CircularProgress />}>
            <HomePage />
          </Suspense>}
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<CircularProgress />}>
            <SignupPage />
          </Suspense>}
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<CircularProgress />}>
            <LoginPage />
          </Suspense>}
      />
      <Route
        path="/profile/:username"
        element={
          <Suspense fallback={<CircularProgress />}>
            <ProfilePage />
          </Suspense>}
      />
    </Routes>
  );
}

export default App;

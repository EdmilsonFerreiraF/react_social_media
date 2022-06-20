import React, { lazy, Suspense, useContext } from "react";
import { useErrorHandler } from 'react-error-boundary'
import { initializeApp } from "firebase/app"
import dotenv from 'dotenv'

import MainAppBar from 'components/MainAppBar'
import Sidebar from 'components/Sidebar'
import MessagesBar from 'components/MessagesBar'
import Progress from "components/Progress";
import { useProtectPage } from 'hooks/useProtectPage'
import { AuthContext, AuthContextInterface } from 'context/AuthContext'
import styles from "./style.module.css"
import { useGetUser } from 'apiCalls'

const Feed = lazy(() => import('components/Feed'))

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

initializeApp(firebaseConfig)

const Home = () => {
  useProtectPage()
  const handleError = useErrorHandler()

  const { user, dispatch } = useContext(AuthContext) as AuthContextInterface
  const token = localStorage.getItem('token') as string
  useGetUser(user, token, dispatch, handleError)

  const LazyFeed = () => (
    <Suspense fallback={<Progress />}>
      <Feed />
    </Suspense>
  )

  return (
    <>
      <MainAppBar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <LazyFeed />
        <MessagesBar />
      </div>
    </>
  )
}

export default Home
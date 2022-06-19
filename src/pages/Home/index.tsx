import React, { useContext } from "react";
import { useGetUser } from 'apiCalls'
import { useErrorHandler } from 'react-error-boundary'

import MainAppBar from 'components/MainAppBar'
import Sidebar from 'components/Sidebar'
import Feed from 'components/Feed'
import MessagesBar from 'components/MessagesBar'
import { useProtectPage } from 'hooks/useProtectPage'
import { AuthContext, AuthContextInterface } from 'context/AuthContext'
import styles from "./style.module.css"
import { initializeApp } from "firebase/app"
import dotenv from 'dotenv'

dotenv.config()

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

const Home = () => {
  useProtectPage()
  const handleError = useErrorHandler()

  const { user, dispatch } = useContext(AuthContext) as AuthContextInterface
  const token = localStorage.getItem('token') as string
  useGetUser(user, token, dispatch, handleError)

  return (
    <>
      <MainAppBar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <MessagesBar />
      </div>
    </>
  )
}

export default Home
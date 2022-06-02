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
import MainAppBar from 'components/MainAppBar'
import Sidebar from 'components/Sidebar'
import Feed from 'components/Feed'
import MessagesBar from 'components/MessagesBar'
import { useProtectPage } from 'hooks/useProtectPage'

import styles from "./style.module.css"
import { useContext } from "react";

import { useEffect, useState } from 'react'

import { AuthContext } from 'context/AuthContext'

import axios from 'axios'

import { baseUrl } from 'constants/baseUrl'
import { useErrorHandler } from 'react-error-boundary'
import { v4 } from 'uuid'
import { useGetUser } from 'apiCalls'

const Home = () => {
  useProtectPage()
  const handleError = useErrorHandler()

  const { user, dispatch } = useContext(AuthContext)

  const token = localStorage.getItem('token')

  useGetUser(user, token, dispatch, handleError)

  console.log('user - Home', user)
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
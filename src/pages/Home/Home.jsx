import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'
import { useProtectPage } from '../../hooks/useProtectPage'

import styles from "./Home.module.css"
import { useContext } from "react";

import { useEffect, useState } from 'react'

import { AuthContext } from '../../context/AuthContext'

import axios from 'axios'

import { baseUrl } from '../../constants/baseUrl'
import { useErrorHandler } from 'react-error-boundary'



const Home = () => {
    useProtectPage()
    const handleError = useErrorHandler()

    // const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const { user, dispatch } = useContext(AuthContext)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: "LOGIN_START" })

       const res = await axios
        .get(`${baseUrl}/user`, {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        })
        .catch(err => {
          dispatch({ type: "LOGIN_FAILED", payload: err })
          console.log(err)
        handleError(err)

        })

        return res
    }

    if (!user && token) {
      getUser()
    }
  }, [user, token])

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
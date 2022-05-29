import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getStorage, getDownloadURL, ref } from "firebase/storage";

import MainAppBar from 'components/MainAppBar'
import Sidebar from 'components/Sidebar'
import Feed from 'components/Feed'
import MessagesBar from 'components/MessagesBar'
import { baseUrl } from 'constants/baseUrl'
import { v4 } from 'uuid'
import { useProtectPage } from 'hooks/useProtectPage'

import styles from "./style.module.css"
import { useRequestImage } from "hooks/useRequestImage"
import { useRequestData } from 'hooks/useRequestData';
import { useContext } from 'react'

import { AuthContext } from 'context/AuthContext'
import { useErrorHandler } from 'react-error-boundary'
import noCoverImg from 'img/person/no_cover.jpg'
import noProfileImg from 'img/person/no_person.jpg'

const Profile = () => {
  useProtectPage()
  const handleError = useErrorHandler()

  const username = useParams().username
  const imgId = v4()

  const { user: currUser, dispatch } = useContext(AuthContext)

  const visitedUser = useRequestData(`${baseUrl}/user/${username}`, {})

  console.log('visitedUser - Profile', visitedUser)
  console.log('currUser - Profile', currUser)
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

    if (!currUser && token) {
      getUser()
    }
  }, [currUser, token])
  const user = visitedUser ?? currUser
  
  const profilePicture = useRequestImage("profile", user?.profilePicture)
  const coverPicture = useRequestImage("cover", user?.coverPicture)

  return (
    <>
      <MainAppBar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                src={coverPicture
                  ??
                  noCoverImg}
                className={styles.profileCoverImg}
                alt="User cover" />
              <img className={styles.profileUserImg}
                src={profilePicture
                  ??
                  noProfileImg}
                alt="User profile" />
            </div>
            <div className={styles.profileInfo}>
              <h4 data-testid="user profile username" className={styles.profileInfoName}>
                {user?.username}
              </h4>
              <span data-testid="user profile description" className={styles.profileInfoDesc}>
                {user?.description}
              </span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed otherUserId={user?.id} />
          </div>
        </div>
        <MessagesBar user={user} />
      </div>
    </>
  )
}

export default Profile
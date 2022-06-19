import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useErrorHandler } from 'react-error-boundary'

import MainAppBar from 'components/MainAppBar'
import Sidebar from 'components/Sidebar'
import Feed from 'components/Feed'
import MessagesBar from 'components/MessagesBar'
import { baseUrl } from 'constants/baseUrl'
import { useProtectPage } from 'hooks/useProtectPage'
import { useRequestImage } from "hooks/useRequestImage"
import { useRequestData } from 'hooks/useRequestData'
import { AuthContext, AuthContextInterface } from 'context/AuthContext'
import { useGetUser } from 'apiCalls'
import styles from "./style.module.css"
import noCoverImg from 'img/person/no_cover.jpg'
import noProfileImg from 'img/person/no_person.jpg'

const Profile = () => {
  useProtectPage()
  const handleError = useErrorHandler()

  const username = useParams().username

  const { user: currUser, dispatch } = useContext(AuthContext) as AuthContextInterface
  const visitedUser = useRequestData(`${baseUrl}/user/${username}`, {})

  const token = localStorage.getItem('token') as string

  useGetUser(currUser, token, dispatch, handleError)

  const user = visitedUser ?? currUser

  const profilePicture = useRequestImage("profile", user?.profilePicture)
  const coverPicture = useRequestImage("cover", user?.coverPicture)

  return (
    <>
      <MainAppBar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div>
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
              <h4 data-testid="user profile username"
                className={styles.profileInfoName}>
                {user?.username}
              </h4>
              <span data-testid="user profile description"
                className={styles.profileInfoDesc}>
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
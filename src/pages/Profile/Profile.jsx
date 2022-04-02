import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getStorage, getDownloadURL, ref } from "firebase/storage";

import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'
import { baseUrl } from '../../constants/baseUrl'
import { v4 } from 'uuid'
import { useProtectPage } from '../../hooks/useProtectPage'

import styles from "./Profile.module.css"
import { useRequestImage } from "../../hooks/useRequestImage"

const Profile = () => {
    useProtectPage()

    const [user, setUser] = useState({})
    const username = useParams().username
    const imgId = v4()

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const token = localStorage.getItem("token")
    
    useEffect(() => {
        const fetchUser = async () => {
            await axios.get(`${baseUrl}/user/${username}`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                setUser(res.data)
            })
        }
        
        if (username) {
            console.log('username', username)
            fetchUser()
        }
    }, [username, token])

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
                            src={coverPicture ?? `${publicFolder}/person/no_cover.jpg`}
                            className={styles.profileCoverImg} alt="Post content" />
                            <img src={profilePicture ?? `${publicFolder}/person/no_person.jpg`} className={styles.profileUserImg} alt="Post content" />
                        </div>
                        <div className={styles.profileInfo}>
                            <h4 className={styles.profileInfoName}>
                                {user?.username}
                            </h4>
                            <span className={styles.profileInfoDesc}>
                                {user?.description}
                            </span>
                        </div>
                    </div>
                    <div className={styles.profileRightBottom}>
                        <Feed otherUserId={user?.id } />
                        <MessagesBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
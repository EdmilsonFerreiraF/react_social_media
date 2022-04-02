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

const Profile = () => {
    useProtectPage()

    const [user, setUser] = useState({})
    const username = useParams().username
    const imgId = v4()

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const [profilePicture, setProfilePicture] = useState("")
    const [coverPicture, setCoverPicture] = useState("")

    let getProfilePic
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

    useEffect(() => {
        const getProfilePic = async (picture) => {
            const storage = getStorage();

            getDownloadURL(ref(storage, "picture/" + picture))
            .then((url) => {
                setProfilePicture(url)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        if (user?.profilePicture) {
            console.log('profilePicture', profilePicture)
            getProfilePic(user?.profilePicture)
        }
    }, [user?.profilePicture, setProfilePicture, imgId])
    
    useEffect(() => {
        const getCoverPicture = async (picture) => {
            const storage = getStorage();

            getDownloadURL(ref(storage, "cover/" + picture))
            .then((url) => {
                setCoverPicture(url)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        if (user?.coverPicture) {
            getCoverPicture(user?.coverPicture)
        }
    }, [user?.coverPicture, setProfilePicture, imgId])

    return (
        <>
            <MainAppBar />
            <div className={styles.profile}>
                <Sidebar />
                <div className={styles.profileRight}>
                    <div className={styles.profileRightTop}>
                        <div className={styles.profileCover}>
                            <img
                            // src={user.coverPicture ? `${publicFolder}person/${user.coverPicture}` : `${publicFolder}person/no_cover.jpg`}
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
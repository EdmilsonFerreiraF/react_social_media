import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'
import { baseUrl } from '../../constants/baseUrl'
import { v4 } from 'uuid'

import styles from "./Profile.module.css"

const Profile = () => {
    const [user, setUser] = useState({})
    const username = useParams().username
    const imgId = v4()

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    let getProfilePic

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${baseUrl}users?username=${username}`)

            setUser(res.data)

           
        }

        if (user.profilePicture) {
            getProfilePic = async(path, picture, property) => {
                const storage = getStorage();
                const storageRef = ref(storage, 'posts/' + imgId);
    
                getDownloadURL(ref(storage, path + picture))
                .then((url) => {
                    setUser(prevUser => ({...prevUser,
                        [property]: url}))
                })
                .catch((error) => {
                // Handle any errors
                console.log(error)
                });
            }

            console.log('profilePicture', user.profilePicture)
            getProfilePic("profile/", user.profilePicture, "profilePicture")
        }

        if (user.coverPicture) {
            getProfilePic("cover/", user.coverPicture, "coverPicture")
        }

        console.log('user', user)
        
        fetchUser()
    }, [])
     
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
                            src={user.coverPicture && user.coverPicture !== "" ? user.coverPicture : `${publicFolder}person/no_cover.jpg`}
                            className={styles.profileCoverImg} alt="Post content" />
                            {console.log('user',user)}
                            <img src={user.profilePicture && user.profilePicture !== "" ? user.profilePicture : `${publicFolder}person/no_person.jpg`} className={styles.profileUserImg} alt="Post content" />
                        </div>
                        <div className={styles.profileInfo}>
                            <h4 className={styles.profileInfoName}>
                                {user.username}
                            </h4>
                            <span className={styles.profileInfoDesc}>
                                {user.description}
                            </span>
                        </div>
                    </div>
                    <div className={styles.profileRightBottom}>
                        <Feed username={username} />
                        <MessagesBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
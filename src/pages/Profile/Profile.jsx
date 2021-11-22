import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'

import styles from "./Profile.module.css"
import { baseUrl } from '../../constants/baseUrl'

const Profile = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${baseUrl}users?username=${username}`)
            console.log('res', res)
            setUser(res.data)
            // return res.data
        }

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
                            <img src={user.coverPicture ? `${publicFolder}person/${user.coverPicture}` : `${publicFolder}person/no_cover.jpg`} className={styles.profileCoverImg} alt="Post content" />
                            <img src={user.profilePicture ? `${publicFolder}person/${user.profilePicture}` : `${publicFolder}person/no_person.jpg`} className={styles.profileUserImg} alt="Post content" />
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
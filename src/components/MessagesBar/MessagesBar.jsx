import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import FollowingList from "./FollowingList/FollowingList"
import FriendList from "./FriendList/FriendList"
import InfoList from "./InfoList/InfoList"
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import styles from "./MessagesBar.module.css"
import axios from "axios"
import { baseUrl } from "../../constants/baseUrl"

const MessagesBar = ({ user }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    // const { user } = useContext(AuthContext)
    const [friends, setFriends] = useState([])

    const token = localStorage.getItem("token")

    useEffect(() => {
        const getFriends = async () => {
            await axios.get(`${baseUrl}/user/${user?.id}/friends`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }

        if (user?.id) {
            console.log('user?.id', user?.id)
            getFriends()
        }
    }, [user, token])

    const HomeMessagesBar = () => {
        return (
            <>
                <div className={styles.birthdayContainer}>
                    <img className={styles.birthdayImg} src={`${publicFolder}/gift.png`} alt="" />
                    <span className={styles.birthdayText}>
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className={styles.messagesBarAd} src={`${publicFolder}/ad.png`} alt="" />
                <h4 className={styles.messagesBarTitle}>
                    Online Friends
                </h4>
                <FriendList user={user} />
            </>
        )
    }

    const ProfileMessagesBar = () => {
        return (
            <>
                <h4 className={styles.messagesBarTitle}>User information</h4>
                <InfoList user={user} />
                <h4 className={styles.messagesBarTitle}>User friends</h4>
                <FollowingList friends={friends} />
            </>
        )
    }
            
    return (
        <div className={styles.messagesBarContainer}>
            <div className={styles.messagesBar}>
                { user ? <ProfileMessagesBar /> : <HomeMessagesBar /> }
            </div>
        </div>
    )
}

export default MessagesBar
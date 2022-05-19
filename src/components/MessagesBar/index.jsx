import FollowingList from "./FollowingList"
import InfoList from "./InfoList"

import styles from "./style.module.css"
import { baseUrl } from "constants/baseUrl"
import { useRequestData } from "hooks/useRequestData"
import giftImg from 'img/gift.png'
import adImg from 'img/ad.png'
import { useContext } from "react"
import { AuthContext } from "context/AuthContext"

const MessagesBar = ({ user: visitedUser }) => {
    const token = localStorage.getItem("token")
    const { user: currUser, dispatch } = useContext(AuthContext)

    const user = visitedUser ?? currUser

    const friends = useRequestData(user && user.id && `${baseUrl}/user/${user.id}/friends`, [])

    console.log('friends - MessagesBar', friends)
    const HomeMessagesBar = () => {
        return (
            <aside aria-labelledby="messages-bar">
                <div className={styles.birthdayContainer}>
                    <img className={styles.birthdayImg}
                        src={giftImg}
                        alt="Birthday gift" />
                    <span className={styles.birthdayText}>
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <div className={styles.birthdayAd}>
                    <img className={styles.messagesBarAd}
                        src={adImg}
                        alt="Ad" />
                </div>
                <h4 className={styles.messagesBarTitle}>
                    Online Friends
                </h4>
                <FollowingList friends={friends} />
            </aside>
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
                {user ? <ProfileMessagesBar /> : <HomeMessagesBar />}
            </div>
        </div>
    )
}

export default MessagesBar
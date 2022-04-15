import FollowingList from "./FollowingList/FollowingList"
import FriendList from "./FriendList/FriendList"
import InfoList from "./InfoList/InfoList"

import styles from "./MessagesBar.module.css"
import { baseUrl } from "../../constants/baseUrl"
import { useRequestData } from "../../hooks/useRequestData"

const MessagesBar = ({ user }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const token = localStorage.getItem("token")

    const friends = useRequestData(user?.id && `${baseUrl}/user/${user?.id}/friends`, [])

    const HomeMessagesBar = () => {
        return (
            <>
                <div className={styles.birthdayContainer}>
                    <img className={styles.birthdayImg}
                        src={`${publicFolder}/gift.png`}
                        alt="" />
                    <span className={styles.birthdayText}>
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <div className={styles.birthdayAd}>
                    <img className={styles.messagesBarAd}
                        src={`${publicFolder}/ad.png`}
                        alt="" />
                </div>
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
                {user ? <ProfileMessagesBar /> : <HomeMessagesBar />}
            </div>
        </div>
    )
}

export default MessagesBar
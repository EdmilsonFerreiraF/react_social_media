import { Home } from "@material-ui/icons"
import FollowingList from "./FollowingList/FollowingList"
import FriendList from "./FriendList/FriendList"
import InfoList from "./InfoList/InfoList"

import styles from "./MessagesBar.module.css"

const MessagesBar = ({ profile }) => {
    const HomeMessagesBar = () => {
        return (
            <>
                <div className={styles.birthdayContainer}>
                    <img className={styles.birthdayImg} src="assets/gift.png" alt="" />
                    <span className={styles.birthdayText}>
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>

                <img className={styles.messagesBarAd} src="assets/ad.png" alt="" />

                <h4 className={styles.messagesBarTitle}>
                    Online Friends
                </h4>

                <FriendList />
            </>
        )
    }

    const ProfileMessagesBar = () => {
        return (
            <>
                <h4 className={styles.messagesBarTitle}>User information</h4>
                <InfoList />
                <h4 className={styles.messagesBarTitle}>User friends</h4>
                <FollowingList />
            </>
        )
    }
            
    return (
        <div className={styles.messagesBarContainer}>
            <div className={styles.messagesBar}>
                { profile ? <ProfileMessagesBar /> : <HomeMessagesBar /> }
            </div>
        </div>
    )
}

export default MessagesBar
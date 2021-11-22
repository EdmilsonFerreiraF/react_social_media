import FriendList from "./FriendList/FriendList"

import styles from "./MessagesBar.module.css"

const MessagesBar = () => {
    return (
        <div className={styles.messagesBarContainer}>
            <div className={styles.messagesBar}>
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
            </div>
            
        </div>
    )
}

export default MessagesBar
import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'

import styles from "./Profile.module.css"

const Profile = () => {
    return (
        <>
            <MainAppBar />
            <div className={styles.profile}>
                <Sidebar />
                <div className={styles.profileRight}>
                    <div className={styles.profileRightTop}>
                        <div className={styles.profileCover}>
                            <img src="assets/post/3.jpeg" className={styles.profileCoverImg} alt="Post content" />
                            <img src="assets/person/7.jpeg" className={styles.profileUserImg} alt="Post content" />
                        </div>
                        <div className={styles.profileInfo}>
                            <h4 className={styles.profileInfoName}>
                                Edmilson Ferreira
                            </h4>
                            <span className={styles.profileInfoDesc}>
                                Hello my friends!
                            </span>
                        </div>
                    </div>
                    <div className={styles.profileRightBottom}>
                        <Feed />
                        <MessagesBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
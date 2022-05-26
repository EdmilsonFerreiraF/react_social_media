import styles from "./style.module.css"
import { useRequestImage } from 'hooks/useRequestImage'


const FriendItem = ({ friend }) => {
    const profilePicture = useRequestImage("profile", friend?.profilePicture)
    console.log('friend?.profilePicture - FriendItem', friend?.profilePicture)

    return (
        <li data-testid="friendItem" className={styles.friend}>
            <img className={styles.friendImg}
            src={profilePicture}
            alt="Friend profile" />
            <span data-testid="sidebarFriendName" className={styles.friendName}>
                {friend?.username}
            </span>
        </li>
    )
}

export default FriendItem
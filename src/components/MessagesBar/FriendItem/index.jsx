import styles from "./style.module.css"
import { useRequestImage } from "hooks/useRequestImage";

const FriendItem = ({ friend }) => {
    const profilePicture = useRequestImage("profile", friend?.profilePicture)

    return (
        <li className={styles.friend}>
            <img className={styles.friendImg}
                src={profilePicture}
                alt="Friend profile" />
            <span className={styles.friendName}>
                {friend?.username}
            </span>
        </li>
    )
}

export default FriendItem
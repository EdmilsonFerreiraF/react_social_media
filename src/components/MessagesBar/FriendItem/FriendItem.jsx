import styles from "./FriendItem.module.css"

const FriendItem = ({ friend }) => {
    return (
        <li className={styles.friend}>
            <img className={styles.friendImg}
                src={`img/${friend?.profilePicture}`}
                alt="Friend profile" />
            <span className={styles.friendName}>
                {friend.username}
            </span>
        </li>
    )
}

export default FriendItem
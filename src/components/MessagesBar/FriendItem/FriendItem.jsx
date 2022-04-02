import styles from "./FriendItem.module.css"

const FriendItem = ({ friend }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className={styles.friend}>
            <img className={styles.friendImg} src={`${publicFolder}/${friend?.profilePicture}`} alt="Friend profile" />
            <span className={styles.friendName}>
                {friend.username}
            </span>
        </li>
    )
}

export default FriendItem
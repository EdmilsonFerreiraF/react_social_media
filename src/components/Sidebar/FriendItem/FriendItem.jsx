import styles from "./FriendItem.module.css"

const FriendItem = (props) => {
    return (
        <li className={styles.friend}>
            <img className={styles.friendImg} src={props.img} alt="Friend profile" />
            <span className={styles.friendName}>
                {props.name}
            </span>
        </li>
    )
}

export default FriendItem
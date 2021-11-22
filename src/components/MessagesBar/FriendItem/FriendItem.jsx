import styles from "./FriendItem.module.css"

const FriendItem = (props) => {
    return (
        <li className={styles.friendItem}>
            <div className={styles.friendImgContainer}>
                <img className={styles.friendProfileImg} src={props.img} alt="Friend profile" />
                <span className={styles.friendOnlineIcon}></span>
            </div>
            
            <span className={styles.friendUsername}>
                {props.name}
            </span>
        </li>
    )
}

export default FriendItem
import styles from "./FollowingItem.module.css"

const FollowingItem = (props) => {
    return (
        <div className={styles.followingItem}>
            <img src={props.img} className={styles.followingImg} alt="Post content" />
            <span className={styles.followingName}>
                {props.name}
            </span>
        </div>
    )
}

export default FollowingItem
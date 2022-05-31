import FollowingItem from "../FollowingItem"
import styles from "./style.module.css"

const FollowingList = ({ friends }) => {
    return (
        <div className={styles.followingList}>
            {friends.map(friend => (
                <FollowingItem
                    key={friend?.id}
                    friend={friend}
                />
            ))}
        </div>
    )
}

export default FollowingList
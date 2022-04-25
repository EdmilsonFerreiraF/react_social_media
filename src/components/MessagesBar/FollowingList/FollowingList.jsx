import FollowingItem from "../FollowingItem/FollowingItem"

import styles from "./FollowingList.module.css"

const FollowingList = ({ friends }) => {
    return (
        <div className={styles.followingList}>
            {friends.map(friend => <FollowingItem
                                    key={friend.id}
                                    friend={friend} />
            )}
        </div>
    )
}

export default FollowingList
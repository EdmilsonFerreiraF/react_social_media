import FollowingItem from "../FollowingItem/FollowingItem"

import styles from "./FollowingList.module.css"

const FollowingList = ({ friends }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={styles.followingList}>
            {friends.map(friend => <FollowingItem key={friend.id} friend={friend} />
            )}
        </div>
    )
}

export default FollowingList
import React from "react"
import FollowingItem from "../FollowingItem"
import styles from "./style.module.css"

{/* @ts-ignore */}
const FollowingList = ({ friends }) => {
    return (
        <div className={styles.followingList}>
            {/* @ts-ignore */}
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
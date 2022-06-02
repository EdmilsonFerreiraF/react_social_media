import React from "react"
import FollowingItem from "../FollowingItem"
import { Friend } from "../FriendItem"
import styles from "./style.module.css"

const FollowingList = ({ friends }: { friends: Friend[] }) => {
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
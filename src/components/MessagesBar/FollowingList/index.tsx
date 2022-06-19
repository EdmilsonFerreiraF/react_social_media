import React from "react"

import { User } from "context/AuthContext"
import FollowingItem from "../FollowingItem"
import styles from "./style.module.css"

const FollowingList = ({ friends }: { friends: User[] }) => {
    return (
        <div className={styles.followingList}>
            {friends.length ? friends.map(friend => (
                <FollowingItem
                    key={friend?.id}
                    friend={friend}
                />
            )) : null}
        </div>
    )
}

export default FollowingList
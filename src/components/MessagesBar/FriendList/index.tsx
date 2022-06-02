import React from "react"

import FriendItem, { Friend } from "../FriendItem"
import styles from "./style.module.css"

const FriendList = ({ friends }:  { friends?: Friend[] }) => {
    return (
        <ul className={styles.friendList}>
            {friends?.map(friend => (
                <FriendItem
                    key={friend?.id}
                    friend={friend}
                />
            ))}
        </ul>
    )
}

export default FriendList
import { User } from "context/AuthContext"
import React from "react"

import FriendItem from "../FriendItem"
import styles from "./style.module.css"

const FriendList = ({ friends }:  { friends?: User[] }) => {
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
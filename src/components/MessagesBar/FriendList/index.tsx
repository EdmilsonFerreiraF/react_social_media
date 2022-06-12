import { User } from "context/AuthContext"
import React from "react"

import FriendItem from "../FriendItem"
import styles from "./style.module.css"

const FriendList = ({ friends }:  { friends: User[] }) => {
    return (
        <ul className={styles.friendList} data-testid="messagesBarFriendLIst">
            {friends.length ? friends.map(friend => (
                <FriendItem
                    key={friend?.id}
                    friend={friend}
                />
            ), []) : null}
        </ul>
    )
}

export default FriendList
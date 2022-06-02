import React, { useContext } from 'react'

import styles from "./style.module.css"
import { baseUrl } from "constants/baseUrl"
import { AuthContext, AuthContextInterface, User } from "context/AuthContext"
import { useRequestData } from "hooks/useRequestData"
import FriendItem from "../FriendItem"

const FriendList = () => {
    const { user } = useContext(AuthContext) as AuthContextInterface

    const friends = useRequestData(`${baseUrl}/user/${user?.id}/friends`, [])

    console.log('friends', friends)

    return (
        <ul className={styles.friendList} data-testid="friendList">
            {friends.map((friend: User) => <FriendItem
                key={friend?.id}
                friend={friend}
            />
            )}
        </ul>
    )
}

export default FriendList
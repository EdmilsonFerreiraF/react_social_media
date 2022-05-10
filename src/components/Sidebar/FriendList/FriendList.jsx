import FriendItem from "../FriendItem/FriendItem"

import { Users } from "dummyData"

import styles from "./FriendList.module.css"
import { baseUrl } from "constants/baseUrl"

import { AuthContext } from "context/AuthContext"

import { useContext } from 'react'

import { useRequestData } from "hooks/useRequestData"

const FriendList = () => {
    const { user } = useContext(AuthContext)

    const url = `${baseUrl}/user/${user?.id}/friends`
    console.log('user.id', user?.id)
    const friends = useRequestData(user && url, [])

    console.log('friends', friends)
    
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendItem
                    key={friend?.id}
                    friend={friend} />
            ))}
        </ul>
    )
}

export default FriendList
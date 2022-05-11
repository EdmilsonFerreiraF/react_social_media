import FriendItem from "../FriendItem"

import { Users } from "dummyData"

import styles from "./style.module.css"

const FriendList = ({ friends }) => {
    console.log('friends - FriendList', friends)

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
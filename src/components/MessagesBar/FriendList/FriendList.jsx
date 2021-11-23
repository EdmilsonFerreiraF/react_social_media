import FriendItem from "../FriendItem/FriendItem"

import { Users } from "../../../dummyData"

import styles from "./FriendList.module.css"

const FriendList = ({ user }) => {
    return (
        <ul className={styles.friendList}>
            {Users.map(friend => (
                <FriendItem key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}

export default FriendList
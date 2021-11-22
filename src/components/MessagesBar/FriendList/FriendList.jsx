import FriendItem from "../FriendItem/FriendItem"

import styles from "./FriendList.module.css"

const FriendList = ({ users }) => {
    return (
        <ul className={styles.friendList}>
            {users.map(friend => (
                <FriendItem key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}

export default FriendList
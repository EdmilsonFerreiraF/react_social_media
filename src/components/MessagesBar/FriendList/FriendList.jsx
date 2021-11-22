import FriendItem from "../FriendItem/FriendItem"

import styles from "./FriendList.module.css"

const FriendList = () => {
    return (
        <ul className={styles.friendList}>
            <FriendItem name="John Carter" img="/assets/person/3.jpeg" />
            <FriendItem name="John Carter" img="/assets/person/3.jpeg" />
            <FriendItem name="John Carter" img="/assets/person/3.jpeg" />
            <FriendItem name="John Carter" img="/assets/person/3.jpeg" />
            <FriendItem name="John Carter" img="/assets/person/3.jpeg" />
        </ul>
    )
}

export default FriendList
import FriendItem from "../FriendItem/FriendItem"

import styles from "./FriendList.module.css"

const FriendList = () => {
    return (
        <ul className={styles.friendList}>
            <FriendItem name="Jane Doe" img="/assets/person/2.jpeg" />
            <FriendItem name="Jane Doe" img="/assets/person/2.jpeg" />
            <FriendItem name="Jane Doe" img="/assets/person/2.jpeg" />
            <FriendItem name="Jane Doe" img="/assets/person/2.jpeg" />
            <FriendItem name="Jane Doe" img="/assets/person/2.jpeg" />
        </ul>
    )
}

export default FriendList
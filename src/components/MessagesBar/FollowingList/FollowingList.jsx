import FollowingItem from "../FollowingItem/FollowingItem"

import styles from "./FollowingList.module.css"

const FollowingList = () => {
    return (
        <div className={styles.followingList}>
            <FollowingItem name="John Carter" img="assets/person/1.jpeg" />
            <FollowingItem name="John Carter" img="assets/person/2.jpeg" />
            <FollowingItem name="John Carter" img="assets/person/3.jpeg" />
            <FollowingItem name="John Carter" img="assets/person/4.jpeg" />
            <FollowingItem name="John Carter" img="assets/person/5.jpeg" />
            <FollowingItem name="John Carter" img="assets/person/6.jpeg" />
        </div>
    )
}

export default FollowingList
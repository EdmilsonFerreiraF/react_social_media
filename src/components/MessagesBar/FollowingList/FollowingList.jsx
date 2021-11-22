import FollowingItem from "../FollowingItem/FollowingItem"

import styles from "./FollowingList.module.css"

const FollowingList = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={styles.followingList}>
            <FollowingItem name="John Carter" img={`${publicFolder}person/1.jpeg`} />
            <FollowingItem name="John Carter" img={`${publicFolder}person/2.jpeg`} />
            <FollowingItem name="John Carter" img={`${publicFolder}person/3.jpeg`} />
            <FollowingItem name="John Carter" img={`${publicFolder}person/4.jpeg`} />
            <FollowingItem name="John Carter" img={`${publicFolder}person/5.jpeg`} />
            <FollowingItem name="John Carter" img={`${publicFolder}person/6.jpeg`} />
        </div>
    )
}

export default FollowingList
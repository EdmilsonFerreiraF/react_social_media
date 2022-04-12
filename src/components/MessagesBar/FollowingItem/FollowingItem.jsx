import { useNavigate } from "react-router"
import styles from "./FollowingItem.module.css"

import { useRequestImage } from "../../../hooks/useRequestImage";

const FollowingItem = ({ friend }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const profilePicture = useRequestImage("profile", friend?.profilePicture)

    const navigate = useNavigate()
    
    const goToFriendProfile = () => {
        navigate(`/profile/${friend?.username}`)
    }
    
    return (
        <div className={styles.followingItem} onClick={goToFriendProfile}>
            <img src={profilePicture ?? `${publicFolder}/person/no_person.jpg`} className={styles.followingImg} alt="Friend profile" />
            <span className={styles.followingName}>
                {friend?.name}
            </span>
        </div>
    )
}

export default FollowingItem
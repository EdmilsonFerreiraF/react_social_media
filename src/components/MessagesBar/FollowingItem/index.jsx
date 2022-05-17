import { useNavigate } from "react-router"
import styles from "./style.module.css"
import noProfilePicture from 'img/person/no_person.jpg'

import { useRequestImage } from "hooks/useRequestImage";

const FollowingItem = ({ friend }) => {
    const profilePicture = useRequestImage("profile", friend?.profilePicture)

    const navigate = useNavigate()

    const goToFriendProfile = () => {
        navigate(`/profile/${friend?.username}`)
    }

    return (
        <div className={styles.followingItem} onClick={goToFriendProfile}>
            <img className={styles.followingImg}
                src={profilePicture ?? noProfilePicture}
                alt="Friend profile" />
            <span className={styles.followingName}>
                {friend?.name}
            </span>
        </div>
    )
}

export default FollowingItem
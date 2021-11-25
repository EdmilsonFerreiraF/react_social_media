import { useNavigate } from "react-router"
import styles from "./FollowingItem.module.css"

const FollowingItem = (props) => {
    const navigate = useNavigate()
    
    const goToFriendProfile = () => {
        navigate(`/profile/${props.name}`)
    }
    
    return (
        <div className={styles.followingItem} onClick={goToFriendProfile}>
            {console.log('props.name', props.name)}

            <img src={props.img} className={styles.followingImg} alt="Post content" />
            <span className={styles.followingName}>
                {props.name}
            </span>
        </div>
    )
}

export default FollowingItem
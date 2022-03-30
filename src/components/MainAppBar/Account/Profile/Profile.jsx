import { useNavigate } from "react-router"
import styles from "./Profile.module.css"

const Profile = ({ user }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    let navigate = useNavigate();

    const goToUserProfile = () => {
        navigate(`/profile${user?.username}`)
    }

    return (
        <img src={`${
            user?.profilePicture
            ? publicFolder + user?.profilePicture
            : user?.profilePicture + "person/no_avatar.jpg"
        }`} alt="User profile" className={styles.profileImg} onClick={goToUserProfile}/>
    )
}

export default Profile
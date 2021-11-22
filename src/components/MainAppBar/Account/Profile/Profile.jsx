import styles from "./Profile.module.css"

const Profile = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <img src={`${publicFolder}person/1.jpeg`} alt="User profile" className={styles.profileImg}/>
    )
}

export default Profile
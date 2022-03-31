import { useNavigate } from "react-router"
import styles from "./Profile.module.css"
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid'
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext"

const Profile = () => {
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    let navigate = useNavigate();
    let [profilePicture, setProfilePicture] = useState("")

    const goToUserProfile = () => {
        navigate(`/profile/${user?.username}`)
    }

    const imgId = v4()

    useEffect(() => {
        let getProfilePic

        getProfilePic = async(path, picture, property) => {
            const storage = getStorage();
            const storageRef = ref(storage, 'posts/' + imgId);

            getDownloadURL(ref(storage, path + picture))
            .then((url) => {
                setProfilePicture(url)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        if (user?.profilePicture) {
            getProfilePic("profile/", user?.profilePicture, "profilePicture")
        }
    }, [user?.profilePicture])

    return (
        <img src={profilePicture} alt="User profile" className={styles.profileImg} onClick={goToUserProfile}/>
    )
}

export default Profile
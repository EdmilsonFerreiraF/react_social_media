import { useNavigate } from "react-router"
import styles from "./FollowingItem.module.css"
import { useContext, useEffect, useState } from 'react'


import { getStorage, getDownloadURL, ref } from "firebase/storage";

const FollowingItem = ({ friend }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [profilePicture, setProfilePicture] = useState("")

    useEffect(() => {
        const getPostsPic = async(picture) => {
            const storage = getStorage();

            getDownloadURL(ref(storage, "picture/" + picture))
            .then((url) => {
                setProfilePicture(url)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        if (friend?.profilePicture) {
            getPostsPic(friend?.profilePicture)
        }
    }, [friend?.profilePicture])

    console.log('friend?.profilePicture', friend?.profilePicture)
    const navigate = useNavigate()
    
    const goToFriendProfile = () => {
        navigate(`/profile/${friend?.name}`)
    }
    
    return (
        <div className={styles.followingItem} onClick={goToFriendProfile}>
            <img src={profilePicture ?? `${publicFolder}/person/no_cover.jpg`} className={styles.followingImg} alt="Post content" />
            <span className={styles.followingName}>
                {friend?.name}
            </span>
        </div>
    )
}

export default FollowingItem
import { useNavigate } from "react-router"
import styles from "./FollowingItem.module.css"
import { useContext, useEffect, useState } from 'react'


import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useRequestImage } from "../../../hooks/useRequestImage";

const FollowingItem = ({ friend }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const profilePicture = useRequestImage("profile", friend?.profilePicture)

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
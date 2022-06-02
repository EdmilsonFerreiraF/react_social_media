import { useNavigate } from "react-router"

import { useRequestImage } from "hooks/useRequestImage";
import styles from "./style.module.css"
import noProfilePicture from 'img/person/no_person.jpg'
import React from "react";

{/* @ts-ignore */}
const FollowingItem = ({ friend }) => {
    const profilePicture = useRequestImage("profile", friend?.profilePicture)

    const navigate = useNavigate()

    const goToFriendProfile = () => {
        navigate(`/profile/${friend?.username}`)
    }

    return (
        <div
            className={styles.followingItem}
            onClick={goToFriendProfile}
        >
            <img
                className={styles.followingImg}
                src={profilePicture ?? noProfilePicture}
                alt="Friend profile"
            />
            <span
                data-testid="online friend name"
            >
                {friend?.username}
            </span>
        </div>
    )
}

export default FollowingItem
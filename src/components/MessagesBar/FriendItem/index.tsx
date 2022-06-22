import React from "react";

import styles from "./style.module.css"
import { useRequestImage } from "hooks/useRequestImage"
import { User } from "context/AuthContext"

const FriendItem = ({ friend }: { friend: User }) => {
    const profilePicture = useRequestImage("profile_small", friend?.profilePicture)

    return (
        <li className={styles.friend}>
            <img className={styles.friendImg}
                src={profilePicture}
                alt="Friend profile"
            />
            <span
                data-testid="friend name"
                >
                {friend?.username}
            </span>
        </li>
    )
}

export default FriendItem
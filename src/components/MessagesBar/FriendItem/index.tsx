import React from "react";

import styles from "./style.module.css"
import { useRequestImage } from "hooks/useRequestImage";

export type Friend = {
    id: string,
    userId: string,
    username: string,
    description: string,
    image: string,
    likes: string,
    profilePicture: string
}

const FriendItem = ({ friend }: { friend: Friend }) => {
    const profilePicture = useRequestImage("profile", friend?.profilePicture)

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
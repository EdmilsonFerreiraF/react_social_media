import { User } from "context/AuthContext"
import React from "react"

import InfoList from "../InfoList"
import FollowingList from "../FollowingList"
import styles from "./style.module.css"

type Props = {
    user: User
    friends: User[]
}

const ProfileMessagesBar = ({ user, friends }: Props) => {
    return (
        <div data-testid="profileMessagesBar">
            <h4 className={styles.messagesBarTitle}>User information</h4>
            <InfoList user={user} />
            <h4 className={styles.messagesBarTitle}>User friends</h4>
            <FollowingList friends={friends} />
        </div>
    )
}

export default ProfileMessagesBar
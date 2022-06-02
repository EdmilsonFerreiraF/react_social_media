import React, { useContext } from "react"

import { baseUrl } from "constants/baseUrl"
import { useRequestData } from "hooks/useRequestData"
import { AuthContext, AuthContextInterface } from "context/AuthContext"
import FollowingList from "./FollowingList"
import InfoList from "./InfoList"
import styles from "./style.module.css"
import giftImg from 'img/gift.png'
import adImg from 'img/ad.png'

{/* @ts-ignore */}
const MessagesBar = ({ user: visitedUser }) => {
    const { user: currUser } = useContext(AuthContext) as AuthContextInterface

    const user = visitedUser ?? currUser

    const friends = useRequestData(
        user && user.id && `${baseUrl}/user/${user.id}/friends`,
        []
    )

    const HomeMessagesBar = () => {
        return (
            <aside data-testid="homeMessagesBar" aria-labelledby="messages-bar">
                <div className={styles.birthdayContainer}>
                    <img className={styles.birthdayImg}
                        src={giftImg}
                        alt="Birthday gift" />
                    <span className={styles.birthdayText}>
                        <b>Pola Foster</b>
                        and <b>3 other friends</b>
                        have a birthday today.
                    </span>
                </div>
                <div className={styles.birthdayAd}>
                    <img className={styles.messagesBarAd}
                        src={adImg}
                        alt="Ad" />
                </div>
                <h4 className={styles.messagesBarTitle}>
                    Online Friends
                </h4>
                <FollowingList
                    friends={friends}
                />
            </aside>
        )
    }

    const ProfileMessagesBar = () => {
        return (
            <div data-testid="profileMessagesBar">
                <h4 className={styles.messagesBarTitle}>User information</h4>
                <InfoList user={user} />
                <h4 className={styles.messagesBarTitle}>User friends</h4>
                <FollowingList friends={friends} />
            </div>
        )
    }

    return (
        <div className={styles.messagesBarContainer}>
            <div className={styles.messagesBar}>
                {visitedUser
                    ?
                    <ProfileMessagesBar />
                    :
                    <HomeMessagesBar />
                }
            </div>
        </div>
    )
}

export default MessagesBar
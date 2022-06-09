import React, { useContext } from "react"

import { baseUrl } from "constants/baseUrl"
import { useRequestData } from "hooks/useRequestData"
import { AuthContext, AuthContextInterface, User } from "context/AuthContext"
import FollowingList from "./FollowingList"
import InfoList from "./InfoList"
import styles from "./style.module.css"
import giftImg from 'img/gift.png'
import adImg from 'img/ad.png'

const MessagesBar = ({ user: visitedUser }: { user?: User}) => {
    const { user: currUser } = useContext(AuthContext) as AuthContextInterface

    const user = visitedUser ?? currUser

    console.log('user', user)
    console.log('user.id', user.id)
    const friends = useRequestData(
        (user && user.id !== '' && `${baseUrl}/user/${user.id}/friends`) as string,
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
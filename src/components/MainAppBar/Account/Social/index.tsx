import React from 'react'
import { Person, Chat, Notifications } from "@mui/icons-material"

import SocialItem from "./SocialItem"

import styles from "./style.module.css"

const Social = () => {
    return (
        <div data-testid="social"
            role="menu"
            className={styles.social}>
            <SocialItem badge={1}>
                <Person />
            </SocialItem>
            <SocialItem badge={2}>
                <Chat />
            </SocialItem>
            <SocialItem badge={3}>
                <Notifications />
            </SocialItem>
        </div>
    )
}

export default Social
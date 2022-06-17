import React from 'react'
import { Person, Chat, Notifications } from "@mui/icons-material"

import SocialItem from "./SocialItem"
import styles from "./style.module.css"

const Social = () => {
    const socialItems = [
        <Person />,
        <Chat />,
        <Notifications />
    ]

    return (
        <div data-testid="social"
            role="menu"
            className={styles.social}
        >
            {socialItems.map((icon, idx) => (
                <SocialItem badge={idx + 1}>
                    {icon}
                </SocialItem>
            ))}
        </div>
    )
}

export default Social
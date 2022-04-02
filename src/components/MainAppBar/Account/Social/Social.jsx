import { Person, Chat, Notifications } from "@mui/icons-material"

import SocialItem from "./SocialItem/SocialItem"

import styles from "./Social.module.css"

const Social = () => {
    return (
        <div className={styles.social}>
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
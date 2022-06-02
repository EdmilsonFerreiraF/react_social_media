import { User } from "context/AuthContext"
import React from "react"

import InfoItem from "../InfoItem"
import styles from "./style.module.css"

const InfoList = ({ user }: { user: User }) => {
    return (
        <div className={styles.messagesBarInfo}>
            <InfoItem
                title="City"
                text={user?.city as string} />
            <InfoItem
                title="From"
                text={user?.from as string} />
            <InfoItem
                title="Relationship"
                text={user?.relationship === 0
                    ?
                    "Single"
                    :
                    user?.relationship === 1
                    ? "Married"
                    :
                    "-"
                } />
        </div>
    )
}

export default InfoList
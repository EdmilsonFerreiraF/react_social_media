import React from "react"

import { User } from "context/AuthContext"
import InfoItem from "../InfoItem"
import styles from "./style.module.css"

const InfoList = ({ user }: { user: User }) => {
    const infoItems = [
        ["City", user?.city as string],
        ["From", user?.from as string],
        ["Relationship", user?.relationship === 0
            ?
            "Single"
            :
            user?.relationship === 1
                ? "Married" : "-"
        ]
    ]

    return (
        <div className={styles.messagesBarInfo}>
            {infoItems.map((infoItem: any) => (
                <InfoItem
                    title={infoItem[0]}
                    text={infoItem[1]} />
            ))
            }
        </div>
    )
}

export default InfoList
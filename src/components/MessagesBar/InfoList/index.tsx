import React from "react"

import InfoItem from "../InfoItem"
import styles from "./style.module.css"

{/* @ts-ignore */}
const InfoList = ({ user }) => {
    return (
        <div className={styles.messagesBarInfo}>
            <InfoItem
                title="City"
                text={user?.city} />
            <InfoItem
                title="From"
                text={user?.from} />
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
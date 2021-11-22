import InfoItem from "../InfoItem/InfoItem"

import styles from "./InfoList.module.css"

const InfoList = ({ user }) => {
    return (
        <div className={styles.messagesBarInfo}>
            <InfoItem title="City" text={user.city} />
            <InfoItem title="From" text={user.from} />
            <InfoItem title="Relationship" text={user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"} />
        </div>
    )
}

export default InfoList
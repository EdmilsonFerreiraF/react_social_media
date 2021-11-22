import InfoItem from "../InfoItem/InfoItem"

import styles from "./InfoList.module.css"

const InfoList = () => {
    return (
        <div className={styles.messagesBarInfo}>
            <InfoItem title="City:" text="New York"/>
            <InfoItem title="From" text="Madrid" />
            <InfoItem title="Relantionship" text="Single" />
        </div>
    )
}

export default InfoList
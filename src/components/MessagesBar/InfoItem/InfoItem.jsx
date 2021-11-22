import styles from "./InfoItem.module.css"

const InfoItem = (props) => {
    return (
        <div className={styles.messagesBarInfoItem}>
            <span className={styles.messagesBarInfoKey}>
                {props.title}:
            </span>
            <span className={styles.messagesBarInfoValue}>
                {props.text}
            </span>
        </div>
    )
}

export default InfoItem
import styles from "./style.module.css"

const InfoItem = (props) => {
    return (
        <div className={styles.messagesBarInfoItem}>
            <span data-testid="info name" className={styles.messagesBarInfoKey}>
                {props.title}:
            </span>
            <span data-testid="info value" className={styles.messagesBarInfoValue}>
                {props.text}
            </span>
        </div>
    )
}

export default InfoItem
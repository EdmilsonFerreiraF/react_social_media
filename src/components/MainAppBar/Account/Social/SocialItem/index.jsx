import styles from "./style.module.css"

const SocialItem = (props) => {
    return (
        <div className={styles.socialItem}>
            {props.children}
            <span className={styles.socialItemBadge}>
                {props.badge}
            </span>
        </div>
    )
}

export default SocialItem
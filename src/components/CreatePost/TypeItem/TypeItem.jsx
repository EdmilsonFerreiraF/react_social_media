import styles from "./TypeItem.module.css"

const TypeItem = (props) => {
    return (
        <li className={styles.typeItem}>
            <div className={styles.typeItemIcon}>
                {props.children}
            </div>
            <span className={styles.typeItemTitle}>
                Photo or Video
            </span>
        </li>
    )
}

export default TypeItem
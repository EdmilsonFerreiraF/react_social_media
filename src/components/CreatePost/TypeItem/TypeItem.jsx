import styles from "./TypeItem.module.css"

const TypeItem = props => {
    return (
        <label htmlFor={props.typeItem} className={styles.typeItem}>
            <div className={styles.typeItemIcon}>
                {props.children}
            </div>
            <span className={styles.typeItemTitle}>
                {props.title}
            </span>
            <input type={props.inputType} id={props.inputId}
                accept={props.inputType === "file" ?? props.inputAccept}
                className={styles[props.className]}
                onChange={props.onChange}
            />
        </label>
    )
}

export default TypeItem
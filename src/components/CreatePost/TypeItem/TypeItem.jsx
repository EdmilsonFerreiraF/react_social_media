import styles from "./TypeItem.module.css"

const TypeItem = props => {
    return (
        <label className={styles.typeItem}
            htmlFor={props.typeItem}
        >
            <div className={styles.typeItemIcon}>
                {props.children}
            </div>
            <span className={styles.typeItemTitle}>
                {props.title}
            </span>
            <input className={styles.typeItemInput}
                type={props.inputType}
                id={props.inputTitle}
                accept={props.inputType === "file" ?? props.inputAccept}
                onChange={props.onChange}
            />
        </label>
    )
}

export default TypeItem
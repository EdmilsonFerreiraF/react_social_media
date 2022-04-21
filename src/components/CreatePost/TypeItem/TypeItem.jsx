import styles from "./TypeItem.module.css"

const TypeItem = props => {
    return (
        <div className={styles.typeItem}>
            <label className={styles.typeItemTitle}
                htmlFor={props.typeItem}
            >
                {props.title}
            </label>
            <div className={styles.typeItemIcon}>
                {props.children}
            </div>
            <input className={styles.typeItemInput}
                name={props.typeItem}
                type={props.inputType}
                id={props.inputTitle}
                accept={props.inputType === "file" ?? props.inputAccept}
                onChange={props.onChange}
            />
        </div>
    )
}

export default TypeItem
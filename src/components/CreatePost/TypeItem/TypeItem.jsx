import styles from "./TypeItem.module.css"

const TypeItem = props => {
    return (
        <div className={styles.typeItem}>
            <label className={styles.typeItemTitle}
                    htmlFor={props.title}
            >
                {props.title}
                <div className={styles.typeItemIcon}>
                    {props.children}
                </div>
            </label>
            <input className={styles.typeItemInput}
                    name={props.title}
                    type={props.inputType}
                    id={props.title}
                    accept={props.inputType === "file" ?? props.inputAccept}
                    onChange={props.onChange}
            />
        </div>
    )
}

export default TypeItem
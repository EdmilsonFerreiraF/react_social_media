import styles from "./style.module.css"

const TypeItem = props => {
    return (
        <li className={styles.typeItem}>
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
                    data-testid="typeItem input"
            />
        </li>
    )
}

export default TypeItem
import styles from "./NavigationItem.module.css"

const NavigationItem = (props) => {
    return (
        <span className={styles.navigationItemLink}>
            {props.title}
        </span>
    )
}

export default NavigationItem
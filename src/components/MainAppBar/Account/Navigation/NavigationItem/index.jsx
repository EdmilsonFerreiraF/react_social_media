import styles from "./style.module.css"

const NavigationItem = (props) => {
    return (
        <span className={styles.navigationItem}>
            {props.title}
        </span>
    )
}

export default NavigationItem
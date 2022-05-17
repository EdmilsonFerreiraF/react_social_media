import styles from "./style.module.css"

const NavigationItem = ({ title, href }) => {
    return (
        <div className={styles.navigationItem} href={href} role="link">
            {title}
        </div>
    )
}

export default NavigationItem
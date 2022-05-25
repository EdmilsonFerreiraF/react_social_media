import styles from "./style.module.css"

const NavigationItem = ({ title, href }) => {
    return (
        <a className={styles.navigationItem} href={href} data-testid="link">
            {title}
        </a>
    )
}

export default NavigationItem
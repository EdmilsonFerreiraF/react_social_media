import styles from "./style.module.css"

const NavigationItem = ({ title, href, dataTestId }) => {
    return (
        <a className={styles.navigationItem} href={href} data-testid={dataTestId}>
            {title}
        </a>
    )
}

export default NavigationItem
import styles from "./style.module.css"

const NavigationItem = ({ title, href, dataTestId, handleClick }) => {
    return (
        <div className={styles.navigationItem}
            onClick={handleClick}
            data-testid={dataTestId}
        >
            {title}
        </div>
    )
}

export default NavigationItem
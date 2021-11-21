import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <span className={styles.logo}>Lamasocial</span>
        </div>
    )
}

export default Logo
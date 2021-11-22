import styles from "./Logo.module.css"
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <Link to="/" style={{textDecoration: "none"}}>
                <span className={styles.logo}>Lamasocial</span>
            </Link>
        </div>
    )
}

export default Logo
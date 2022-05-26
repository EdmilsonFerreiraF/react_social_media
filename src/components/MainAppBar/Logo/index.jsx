import styles from "./style.module.css"
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className={styles.logoContainer} data-testid="logo">
            <Link to="/" style={{textDecoration: "none"}}>
                <span className={styles.logo} data-testid="logoImage">Lamasocial</span>
            </Link>
        </div>
    )
}

export default Logo
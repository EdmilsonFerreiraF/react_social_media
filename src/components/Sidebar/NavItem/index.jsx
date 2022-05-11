import styles from "./style.module.css"

const NavItem = (props) => {
    return (
        <li className={styles.navItem}>
            <div className={styles.navItemIcon}>
                {props.children}
            </div>
            <span className={styles.navItemText}>
                {props.title}
            </span>
        </li>
    )
}

export default NavItem
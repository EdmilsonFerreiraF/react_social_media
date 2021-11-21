import NavigationItem from "./NavigationItem/NavigationItem"

import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <NavigationItem title="Homepage"/>
            <NavigationItem title="Timeline"/>
        </nav>
    )
}

export default Navigation
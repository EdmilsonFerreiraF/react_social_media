import Logo from './Logo'
import SearchBar from "./SearchBar"
import Account from "./Account"

import styles from "./style.module.css"

const MainAppBar = () => {
    return (
        <nav className={styles.mainAppBar}>
            <Logo />
            <SearchBar />
            <Account />
        </nav>
    )
}

export default MainAppBar
import Logo from './Logo/Logo'
import SearchBar from "./SearchBar/SearchBar"
import Account from "./Account/Account"

import styles from "./MainAppBar.module.css"

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
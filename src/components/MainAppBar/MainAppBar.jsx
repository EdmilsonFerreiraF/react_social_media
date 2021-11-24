import { useContext } from 'react'

import Logo from './Logo/Logo'
import SearchBar from "./SearchBar/SearchBar"
import Account from "./Account/Account"
import { AuthContext } from '../../context/AuthContext'

import styles from "./MainAppBar.module.css"

const MainAppBar = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)

    return (
        <div className={styles.mainAppBar}>
            <Logo />
            <SearchBar />
            <Account user={user} />
        </div>
    )
}

export default MainAppBar
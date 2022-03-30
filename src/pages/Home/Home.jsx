import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'
import { useProtectPage } from '../../hooks/useProtectPage'

import styles from "./Home.module.css"

const Home = () => {
    useProtectPage()
    
    return (
        <>
            <MainAppBar />
            <div className={styles.homeContainer}>
                <Sidebar />
                <Feed />
                <MessagesBar />
            </div>
        </>
    )
}

export default Home
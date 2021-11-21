import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'

import styles from "./Home.module.css"

const Home = () => {
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
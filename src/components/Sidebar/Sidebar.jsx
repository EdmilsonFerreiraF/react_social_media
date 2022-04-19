import FriendList from "./FriendList/FriendList"
import NavList from "./NavList/NavList"

import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <aside className={styles.sidebar} aria-labelledby="sidebar">
            <div className={styles.sidebarContainer}>
                <NavList />
                                
                <button className={styles.sidebarButton}>
                    Show more
                </button>
                <hr className={styles.sidebarDivision}/>
                <FriendList />
            </div>
        </aside>
    )
}

export default Sidebar
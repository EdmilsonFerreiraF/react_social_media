import FriendList from "./FriendList"
import NavList from "./NavList"
import styles from "./style.module.css"

const Sidebar = () => {
    return (
        <aside
            data-testid="sidebar"
            aria-label="sidebarnavigation"
            className={styles.sidebar}
            aria-labelledby="sidebarnavigation"
        >
            <div className={styles.sidebarContainer}>
                <NavList />

                <button className={styles.sidebarButton}>
                    Show more
                </button>
                <hr className={styles.sidebarDivision} />
                <FriendList />
            </div>
        </aside>
    )
}

export default Sidebar
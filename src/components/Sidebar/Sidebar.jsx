import styles from "./Sidebar.module.css"
import { Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, Event, School, RssFeed, WorkOutline } from "@material-ui/icons"

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <RssFeed className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Feed
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Chat className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Chats
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <PlayCircleFilledOutlined className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Videos
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Group className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Groups
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Bookmark className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Bookmarks
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <HelpOutline className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Questions
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <WorkOutline className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Jobs
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Event className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Events
                        </span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <School className={styles.sidebarIcon}/>
                        <span className={styles.sidebarListItemText}>
                            Courses
                        </span>
                    </li>
                </ul>
                
                <button className={styles.sidebarButton}>
                    Show more
                </button>
                <hr className={styles.sidebarDivision}/>
                <ul className={styles.sidebarFriendList}>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                    <li className={styles.sidebarFriend}>
                        <img className={styles.sidebarFriendImg} src="/assets/person/2.jpeg" alt="" />
                        <span className={styles.sidebarFriendName}>
                            Jane Doe
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
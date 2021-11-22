import { Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, Event, School, RssFeed, WorkOutline } from "@material-ui/icons"

import NavItem from "../NavItem/NavItem"

import styles from "./NavList.module.css"

const NavList = () => {
    return (
        <ul className={styles.navList}>
            <NavItem title="Feed">
                <RssFeed />
            </NavItem>
            <NavItem title="Chats">
                <Chat />
            </NavItem>
            <NavItem title="Videos">
                <PlayCircleFilledOutlined />
            </NavItem>
            <NavItem title="Groups">
                <Group />
            </NavItem>
            <NavItem title="Bookmarks">
                <Bookmark />
            </NavItem>
            <NavItem title="Questions">
                <HelpOutline />
            </NavItem>
            <NavItem title="Jobs">
                <WorkOutline />
            </NavItem>
            <NavItem title="Events">
                <Event />
            </NavItem>
            <NavItem title="Courses">
                <School />
            </NavItem>
        </ul>
    )
}

export default NavList
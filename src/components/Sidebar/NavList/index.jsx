import { Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, Event, School, RssFeed, WorkOutline } from "@mui/icons-material"
import { Container } from '@mui/material'

import NavItem from "../NavItem"

import styles from "./style.module.css"

const NavList = () => {
    return (
        <Container data-testid="navList"
        sx={{
            padding: 0,
            '@media (min-width: 600px)': {
                padding: 0
            },
            '@media (max-width: 535px)': {
                '.MuiSvgIcon-root': {
                    padding: 0,
                    fontSize: '1.4em'
                }
            }
        }}
        >
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
        </Container>
    )
}

export default NavList
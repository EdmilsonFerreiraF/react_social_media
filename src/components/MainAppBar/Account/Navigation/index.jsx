import NavigationItem from "./NavigationItem"
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import styles from "./style.module.css"
import ArticleIcon from '@mui/icons-material/Article';
import { useContext } from "react";

import { AuthContext } from 'context/AuthContext'

const Navigation = (props) => {
    const { user, dispatch } = useContext(AuthContext)

    const NavigationMenu = (
        <nav data-testid="navigation menu" className={styles.navigation}>
            <NavigationItem dataTestId="homepageLink" title="Homepage" href="/" />
            <NavigationItem dataTestId="timelineLink" title="Timeline" href={`/${user?.username}`} />
        </nav>
    )

    const NavigationMobileMenu = (
        <div data-testid="navigation mobile menu">
            <MenuItem
                data-testid="navigationMenuItem"
                onClick={props.handleProfileMenuOpen}
                
                >
                <IconButton
                    data-testid="navigationIconButton"
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <HomeIcon />
                </IconButton>
                <NavigationItem dataTestId="mobileHomepageLink" title="Homepage" />
            </MenuItem>
            <MenuItem
                data-testid="navigationMenuItem"
                onClick={props.handleProfileMenuOpen}
                
                >
                <IconButton
                    data-testid="navigationIconButton"
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ArticleIcon />
                </IconButton>
                <NavigationItem dataTestId="mobileTimelineLink" title="Timeline" />
            </MenuItem>
        </div>
    )

    return (
        props.isMobileMenuOpen ?
            NavigationMobileMenu :
            NavigationMenu
    )
}

export default Navigation
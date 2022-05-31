import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { AuthContext } from 'context/AuthContext'
import { goToIndex, goToProfile } from "routes/coordinator";
import NavigationItem from "./NavigationItem"
import styles from "./style.module.css"

const Navigation = (props) => {
    const { user } = useContext(AuthContext)
    const navigation = useNavigate()

    const handleHomepageClick = () => {
        goToIndex(navigation)
    }

    const handleTimelineClick = () => {
        goToProfile(navigation, user?.username)
    }

    const NavigationMenu = (
        <nav
            data-testid="navigation menu"
            className={styles.navigation}
        >
            <NavigationItem
                handleClick={handleHomepageClick}
                dataTestId="homepageLink"
                title="Homepage"
            />
            <NavigationItem
                handleClick={handleTimelineClick}
                dataTestId="timelineLink"
                title="Timeline"
            />
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
                <NavigationItem
                    dataTestId="mobileHomepageLink"
                    title="Homepage"
                />
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
                <NavigationItem
                    dataTestId="mobileTimelineLink"
                    title="Timeline"
                />
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
import NavigationItem from "./NavigationItem/NavigationItem"
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import styles from "./Navigation.module.css"
import ArticleIcon from '@mui/icons-material/Article';

const Navigation = (props) => {
    const NavigationMenu = (
                <nav className={styles.navigation}>

            <NavigationItem title="Homepage" />

            <NavigationItem title="Timeline" />
        </nav>
    )

    const NavigationMobileMenu = (
        <>
            <MenuItem onClick={props.handleProfileMenuOpen}>
                <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <HomeIcon />
                </IconButton>
                <NavigationItem title="Homepage" />
            </MenuItem>
            <MenuItem onClick={props.handleProfileMenuOpen}>
                <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ArticleIcon />
                </IconButton>
                <NavigationItem title="Timeline" />
            </MenuItem>
            </>
    )

    return (
        props.isMobileMenuOpen ?
        NavigationMobileMenu :
        NavigationMenu
    )
}

export default Navigation
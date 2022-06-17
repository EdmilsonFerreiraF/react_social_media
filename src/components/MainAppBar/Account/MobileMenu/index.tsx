import React from 'react'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Navigation from "../Navigation"

type IProps = {
    mobileMoreAnchorEl: Element,
    mobileMenuId: string,
    isMobileMenuOpen: boolean,
    handleMobileMenuClose: () => void,
    handleMenuClose: () => void,
    handleProfileClick: () => void,
}

const MobileMenu = (props: IProps) => {
    return (
        <Menu
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={props.mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.isMobileMenuOpen}
            onClose={props.handleMobileMenuClose}
            data-testid="accountmobilemenu"
        >
            <Navigation
                isMobileMenuOpen={props.isMobileMenuOpen}
                handleProfileMenuOpen={props.handleMenuClose} />

            <MenuItem onClick={props.handleProfileClick}>
                <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>

            <MenuItem>
                <IconButton
                    size="medium"
                    aria-label="show 4 new mails"
                    color="inherit">
                    <Badge
                        badgeContent={4}
                        color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>

            <MenuItem>
                <IconButton
                    size="medium"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge
                        badgeContent={17}
                        color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>
    )
}

export default MobileMenu
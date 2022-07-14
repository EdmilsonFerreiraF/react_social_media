import React, { FormEvent } from 'react'
import {
    IconButton,
    Badge,
    Menu,
    MenuItem
} from '@mui/material'
import {
    AccountCircle,
    Mail,
    Notifications,
} from '@mui/icons-material'
import Navigation from "../Navigation"

export type handleMenuOpening = (
    value: null | FormEvent,
    anchor: string,
    closeMobileMenu?: boolean)
    => void

type Props = {
    mobileMoreAnchorEl: Element
    mobileMenuId: string
    handleMenuOpening: handleMenuOpening
    handleProfileClick: () => void
}

const MobileMenu = (props: Props) => {
    const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl)

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
            open={isMobileMenuOpen}
            onClose={() => props.handleMenuOpening(
                null,
                "mobileMoreAnchorEl"
            ) as (
                (
                    event: {}, reason: "backdropClick" |
                        "escapeKeyDown"
                ) => void) | undefined
            }
            data-testid="accountmobilemenu"
        >
            <Navigation
                isMobileMenuOpen={
                    isMobileMenuOpen
                }
                handleProfileMenuOpen={
                    props.handleMenuOpening
                } />

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
                        <Mail />
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
                        <Notifications />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>
    )
}

export default MobileMenu
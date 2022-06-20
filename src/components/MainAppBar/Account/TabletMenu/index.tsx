import React from "react"
import { Menu } from '@mui/material'

import Navigation from "../Navigation"
import Social from "../Social"
import Profile from "../Profile"
import { handleMenuOpening } from "../MobileMenu"

type Props = {
    anchorEl: Element
    tabletMenuId: string
    isMenuOpen: boolean
    handleMenuOpening: handleMenuOpening
    handleProfileClick: () => void
}

const TabletMenu = (props: Props) => {
    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={props.tabletMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.isMenuOpen}
            onClose={() => props.handleMenuOpening(
                null,
                "anchorEl",
                true
                ) as ((
                    event: {}, reason: "backdropClick" |
                        "escapeKeyDown") => void
                ) | undefined
            }
            data-testid="accountdesktopmenu"
        >
            <Navigation />
            <Social />
            <Profile />
        </Menu>
    )
}

export default TabletMenu
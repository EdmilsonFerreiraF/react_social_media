import React from "react";
import Menu from '@mui/material/Menu';

import Navigation from "../Navigation"
import Social from "../Social"
import Profile from "../Profile"

type IProps = {
    anchorEl: Element
    tabletMenuId: string
    isMenuOpen: boolean
    handleMenuClose: () => void
}

const TabletMenu = (props: IProps) => {
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
            onClose={props.handleMenuClose}
            data-testid="accountdesktopmenu"
        >
            <Navigation />
            <Social />
            <Profile />
        </Menu>
    )
}

export default TabletMenu
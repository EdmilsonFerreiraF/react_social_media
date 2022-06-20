import React, { MouseEventHandler } from 'react'
import {
    Home,
    Article
 } from '@mui/icons-material'
import {
    MenuItem,
    IconButton
 } from '@mui/material'

import NavigationItem from '../NavigationItem'
import { handleMenuOpening } from '../../MobileMenu'

type Props = {
    handleProfileMenuOpen: handleMenuOpening
}

const MobileNavigation = ({
    handleProfileMenuOpen
}: Props) => {
    return (
        <div data-testid="navigation mobile menu">
            <MenuItem
                data-testid="navigationMenuItem"
                onClick={() => handleProfileMenuOpen &&
                    handleProfileMenuOpen(
                        null, "anchorEl", true
                    ) as
                    MouseEventHandler<HTMLLIElement> |
                    undefined
                }
            >
                <IconButton
                    data-testid="navigationIconButton"
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Home />
                </IconButton>
                <NavigationItem
                    dataTestId="mobileHomepageLink"
                    title="Homepage"
                />
            </MenuItem>
            <MenuItem
                data-testid="navigationMenuItem"
                onClick={
                    () => handleProfileMenuOpen(
                        null,
                        "anchorEl",
                        true
                    ) as
                        MouseEventHandler<HTMLLIElement> |
                        undefined
                }
            >
                <IconButton
                    data-testid="navigationIconButton"
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Article />
                </IconButton>
                <NavigationItem
                    dataTestId="mobileTimelineLink"
                    title="Timeline"
                />
            </MenuItem>
        </div>
    )
}

export default MobileNavigation
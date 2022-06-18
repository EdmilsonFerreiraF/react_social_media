import React, { MouseEventHandler } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

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
                    <HomeIcon />
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
                    <ArticleIcon />
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
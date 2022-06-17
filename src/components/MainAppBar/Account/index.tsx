import React, { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

import { useForm } from "hooks/useForm"
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { goToProfile } from "routes/coordinator";
import Navigation from "./Navigation"
import Social from "./Social"
import Profile from "./Profile"
import styles from "./style.module.css"
import MobileMenu from "./MobileMenu";
import TabletMenu from "./TabletMenu";

const Account = () => {
  const { form, onChange } = useForm({
    anchorEl: null,
    mobileMoreAnchorEl: null
  })

  const { user } = useContext(AuthContext) as AuthContextInterface

  const isMenuOpen = Boolean(form.anchorEl)
  const isMobileMenuOpen = Boolean(form.mobileMoreAnchorEl)
  const navigate = useNavigate()

  const handleProfileClick = () => {
    goToProfile(navigate, user?.username)
  }

  const handleMobileMenuClose = () => {
    onChange(null, "mobileMoreAnchorEl")
  }

  const handleMenuClose = () => {
    onChange(null, "anchorEl")
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (e: FormEvent) => {
    onChange(e.currentTarget, "mobileMoreAnchorEl")
  };

  const tabletMenuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div data-testid="account">
      <Box data-testid="accountmenubox" className={styles.account}
        sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Navigation />
        <Social />
        <Profile />
      </Box>
      <Box data-testid="accountmenubox"
        sx={{
          display: { xs: 'flex', md: 'none' },
          flex: 1.4,
          flexFlow: 'row-reverse'
        }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>

      <MobileMenu
        mobileMoreAnchorEl={form.mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleMenuClose={handleMenuClose}
        handleProfileClick={handleProfileClick} />
      <TabletMenu
        anchorEl={form.anchorEl}
        tabletMenuId={tabletMenuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </div>
  )
}

export default Account
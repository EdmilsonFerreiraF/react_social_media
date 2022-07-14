import { MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { goToProfile } from "routes/coordinator";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Social from "./Social";
import styles from "./style.module.css";
import TabletMenu from "./TabletMenu";

const Account = () => {
  const { form, onChange } = useForm({
    anchorEl: null,
    mobileMoreAnchorEl: null,
  });

  const { user } = useContext(AuthContext) as AuthContextInterface;

  const isMenuOpen = Boolean(form.anchorEl);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    goToProfile(navigate, user?.username);
  };

  const handleMobileMenuClose = () => {
    onChange(null, "mobileMoreAnchorEl");
  };

  const handleMenuOpening = (
    value: null | FormEvent,
    anchor: string,
    closeMobileMenu: boolean = false
  ) => {
    onChange(value, anchor);

    if (closeMobileMenu) {
      handleMobileMenuClose();
    }
  };

  const tabletMenuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div data-testid="account">
      <Box
        data-testid="accountmenubox"
        className={styles.account}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Navigation />
        <Social />
        <Profile />
      </Box>
      <Box
        data-testid="accountmenubox"
        sx={{
          display: { xs: "flex", md: "none" },
          flex: 1.4,
          flexFlow: "row-reverse",
        }}
      >
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={(e) => handleMenuOpening(e, "mobileMoreAnchorEl")}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
      </Box>

      <MobileMenu
        mobileMoreAnchorEl={form.mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        handleMenuOpening={handleMenuOpening}
        handleProfileClick={handleProfileClick}
      />
      <TabletMenu
        anchorEl={form.anchorEl}
        tabletMenuId={tabletMenuId}
        isMenuOpen={isMenuOpen}
        handleMenuOpening={handleMenuOpening}
        handleProfileClick={handleProfileClick}
      />
    </div>
  );
};

export default Account;

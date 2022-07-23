import { useRequestImage } from "hooks/useRequestImage";
import {
  AccountCircle,
  Logout,
  Mail,
  MoreVert,
  Navigation,
  Notifications,
} from "@mui/icons-material";
import { Badge, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { goToProfile } from "routes/coordinator";

import styles from "./style.module.css";
import { handleMenuOpening } from "../MobileMenu";

type Props = {
  profileAnchorEl: Element;
  profileMenuId: string;
  handleMenuOpening: handleMenuOpening;
  handleProfileClick: () => void;
};

const Profile = (props: Props) => {
  const isMenuOpen = Boolean(props.profileAnchorEl);
  const { user } = useContext(AuthContext) as AuthContextInterface;
  const profilePicture = useRequestImage("profile", user?.profilePicture);

  const menu = (
    <Menu
      anchorEl={props.profileAnchorEl}
      anchorOrigin={{
        vertical: 150,
        horizontal: "right",
      }}
      id={props.profileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 100,
        horizontal: "right",
      }}
      sx={{}}
      open={isMenuOpen}
      onClose={() =>
        props.handleMenuOpening(null, "profileAnchorEl") as
          | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
          | undefined
      }
      data-testid="accountmobilemenu"
    >
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
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Logout />
          </Badge>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={props.profileMenuId}
        aria-haspopup="true"
        onClick={(e) => props.handleMenuOpening(e, "profileAnchorEl")}
        color="inherit"
      >
        <img
          className={styles.profileImg}
          src={profilePicture}
          alt="My profile"
        />
      </IconButton>
      {menu}
    </>
  );
};

export default Profile;

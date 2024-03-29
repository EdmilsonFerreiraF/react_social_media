import { AccountCircle, Logout } from "@mui/icons-material";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { useRequestImage } from "hooks/useRequestImage";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext, AuthContextInterface } from "context/AuthContext";
import noProfilePicture from "img/no_person.webp";
import { goToLogin } from "routes/coordinator";

import { handleMenuOpening } from "../MobileMenu";
import styles from "./style.module.css";
import "menu.css";

type Props = {
  profileAnchorEl?: Element;
  profileMenuId?: string;
  handleMenuOpening?: handleMenuOpening;
  handleProfileClick?: () => void;
};

const Profile = (props: Props) => {
  const isMenuOpen = Boolean(props.profileAnchorEl);
  const { user } = useContext(AuthContext) as AuthContextInterface;
  const profilePicture = useRequestImage("profile", user?.profilePicture);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  };

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
      open={isMenuOpen}
      onClose={() =>
        props.handleMenuOpening &&
        (props.handleMenuOpening(null, "profileAnchorEl") as
          | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
          | undefined)
      }
      data-testid="accountmobilemenu"
      classes={{
        paper: "menu-paper",
      }}
    >
      <MenuItem
        sx={{
          padding: "5px 15px",
        }}
        onClick={props.handleProfileClick}
      >
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          sx={{
            padding: "10px 12px 10px 0px",
          }}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem
        sx={{
          padding: "5px 15px",
        }}
        onClick={handleLogoutClick}
      >
        <IconButton
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{
            padding: "10px 12px 10px 0px",
          }}
        >
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
        onClick={(e) =>
          props.handleMenuOpening &&
          props.handleMenuOpening(e.currentTarget, "profileAnchorEl")
        }
        color="inherit"
        sx={{
          padding: "10px 12px 10px 0px",
        }}
      >
        <img
          className={styles.profileImg}
          src={profilePicture ?? noProfilePicture}
          alt="My profile"
        />
      </IconButton>
      {menu}
    </>
  );
};

export default Profile;

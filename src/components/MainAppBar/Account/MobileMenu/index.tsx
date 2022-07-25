import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { FormEvent } from "react";
import Navigation from "../Navigation";
import "menu.css";

export type handleMenuOpening = (
  value: null | FormEvent,
  anchor: string,
  closeMobileMenu?: boolean
) => void;

type Props = {
  mobileMoreAnchorEl: Element;
  mobileMenuId: string;
  handleMenuOpening: handleMenuOpening;
  handleProfileClick: () => void;
};

const MobileMenu = (props: Props) => {
  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);

  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 150,
        horizontal: "right",
      }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 100,
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={() =>
        props.handleMenuOpening(null, "mobileMoreAnchorEl") as
          | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
          | undefined
      }
      data-testid="accountmobilemenu"
      classes={{
        paper: "menu-paper",
      }}
    >
      <Navigation isMobile handleMenuOpening={props.handleMenuOpening} />

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
          <Badge badgeContent={17} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;

import { Menu } from "@mui/material";

import { handleMenuOpening } from "../MobileMenu";
import Navigation from "../Navigation";
import Profile from "../Profile";
import Social from "../Social";
import "menu.css";

type Props = {
  anchorEl: Element;
  tabletMenuId: string;
  isMenuOpen: boolean;
  handleMenuOpening: handleMenuOpening;
  handleProfileClick: () => void;
};

const TabletMenu = (props: Props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={props.tabletMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={props.isMenuOpen}
      onClose={() =>
        props.handleMenuOpening(null, "anchorEl", true) as
          | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
          | undefined
      }
      data-testid="accountdesktopmenu"
      classes={{
        paper: "menu-paper",
      }}
    >
      <Navigation />
      <Social />
      <Profile />
    </Menu>
  );
};

export default TabletMenu;

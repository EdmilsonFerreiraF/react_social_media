import { Article } from "@mui/icons-material";
import { IconButton, MenuItem } from "@mui/material";
import { MouseEventHandler } from "react";

import { handleMenuOpening } from "../../MobileMenu";
import NavigationItem from "../NavigationItem";

type Props = {
  handleMenuOpening: handleMenuOpening;
};

const MobileNavigation = ({ handleMenuOpening }: Props) => {
  return (
    <div data-testid="navigation mobile menu">
      <MenuItem
        data-testid="navigationMenuItem"
        onClick={() =>
          handleMenuOpening(null, "anchorEl", true) as
            | MouseEventHandler<HTMLLIElement>
            | undefined
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
        <NavigationItem dataTestId="mobileTimelineLink" title="Timeline" />
      </MenuItem>
    </div>
  );
};

export default MobileNavigation;

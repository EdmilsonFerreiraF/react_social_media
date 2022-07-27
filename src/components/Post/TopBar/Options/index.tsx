import { Bookmark, Delete, Edit, ManageAccounts } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
// import "menu.css";

export type handleMenuOpening = (
  value: (EventTarget & HTMLButtonElement) | null,
  anchor: string,
  closeOptionsMenu?: boolean
) => void;

type Props = {
  optionsMenuAnchorEl: Element;
  optionsMenuId: string;
  handleMenuOpening: handleMenuOpening;
  optionsButton: string;
  postId: string;
};

const Options = (props: Props) => {
  const isOptionsMenuOpen = Boolean(props.optionsMenuAnchorEl);

  return (
    <Menu
      anchorEl={props.optionsMenuAnchorEl}
      anchorOrigin={{
        vertical: 0,
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: -50,
        horizontal: "right",
      }}
      id={props.optionsMenuId}
      //   keepMounted
      MenuListProps={{
        "aria-labelledby": props.optionsButton,
      }}
      aria-haspopup="true"
      open={isOptionsMenuOpen}
      onClose={() =>
        props.handleMenuOpening(null, "optionsMenuAnchorEl") as
          | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
          | undefined
      }
      data-testid="accountoptionsmenu"
      //   classes={{
      //     paper: "menu-paper",
      //   }}
    >
      <MenuItem
        sx={{
          padding: "5px 15px",
        }}
      >
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspop="true"
          color="inherit"
          sx={{
            padding: "10px 12px 10px 0px",
          }}
        >
          <Edit />
        </IconButton>
        <p>Edit</p>
      </MenuItem>

      <MenuItem
        sx={{
          padding: "5px 15px",
        }}
      >
        <IconButton
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{
            padding: "10px 12px 10px 0px",
          }}
        >
          <Bookmark />
        </IconButton>
        <p>Save</p>
      </MenuItem>

      <MenuItem
        sx={{
          padding: "5px 15px",
        }}
      >
        <IconButton
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{
            padding: "10px 12px 10px 0px",
          }}
        >
          <ManageAccounts />
        </IconButton>
        <p>Change public</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="medium"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{
            padding: "10px 12px 10px 0px",
          }}
        >
          <Delete />
        </IconButton>
        <p>Delete</p>
      </MenuItem>
    </Menu>
  );
};

export default Options;

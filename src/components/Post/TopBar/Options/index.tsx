import { Bookmark, Delete, Edit, ManageAccounts } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  deletePost,
  deletePostBookmark,
  getUserBookmarks,
  savePostBookmark,
} from "apiCalls";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { MouseEventHandler, useContext, useEffect } from "react";
// import "menu.css";

export type handleMenuOpening = (
  value: (EventTarget & HTMLButtonElement) | null,
  anchor: string,
  closeMenu?: boolean
) => void;

type Props = {
  optionsMenuAnchorEl: Element;
  optionsMenuId: string;
  handleMenuOpening: handleMenuOpening;
  optionsButton: string;
  postId: string;
  handlePostEditing: () => void;
};

const Options = (props: Props) => {
  const isOptionsMenuOpen = Boolean(props.optionsMenuAnchorEl);
  const { user } = useContext(AuthContext) as AuthContextInterface;
  const { form, onChange } = useForm({
    bookmarks: [],
  });

  useEffect(() => {
    (async () => {
      const bookmarks = await getUserBookmarks();
      console.log("bookmarks", bookmarks);
      onChange(bookmarks, "bookmarks");
    })();
  }, []);
  console.log("form.bookmarks", form.bookmarks);

  const handleDeletePost = async () => {
    console.log("handleDeletePost");
    props.handleMenuOpening(null, "anchorEl", true) as
      | MouseEventHandler<HTMLLIElement>
      | undefined;
    await deletePost(props.postId);
  };

  const handleBookmarkPost = async () => {
    props.handleMenuOpening(null, "anchorEl", true) as
      | MouseEventHandler<HTMLLIElement>
      | undefined;

    if (
      form.bookmarks.length &&
      form.bookmarks.find((bookmark: any) => bookmark.postId === props.postId)
    ) {
      await deletePostBookmark(props.postId);
      return;
    }

    await savePostBookmark(props.postId);
  };

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
        onClick={() => handleBookmarkPost()}
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
        <p>
          {form.bookmarks.length &&
          form.bookmarks.find(
            (bookmark: any) => bookmark.postId === props.postId
          )
            ? "Remove"
            : "Save"}
        </p>
      </MenuItem>

      <MenuItem
        onClick={() => props.handlePostEditing()}
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
        onClick={() =>
          props.handleMenuOpening(null, "anchorEl", true) as
            | MouseEventHandler<HTMLLIElement>
            | undefined
        }
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

      <MenuItem onClick={() => handleDeletePost()}>
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

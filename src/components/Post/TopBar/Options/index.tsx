import { Bookmark, Delete, Edit, ManageAccounts } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  Audience,
  changePostAudience,
  deletePost,
  deletePostBookmark,
  getUserBookmarks,
  savePostBookmark,
} from "apiCalls";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import {
  FormEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import AudienceList from "./Audience";
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

  const options = ["Public", "Friends", "Friend of friends", "Only me"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  type AudienceType = keyof typeof Audience;

  const selectedOptionToAudience = () => {
    const upperSnakedOption = options[selectedIndex]
      .split(" ")
      .join("_")
      .toUpperCase() as AudienceType;

    console.log("upperSnakedOption", upperSnakedOption);
    return Audience[upperSnakedOption];
  };

  const handleMenuItemClick = (event: FormEvent, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const handlePostAudience = async () => {
    props.handleMenuOpening(null, "anchorEl", true) as
      | MouseEventHandler<HTMLLIElement>
      | undefined;
    await changePostAudience(props.postId, selectedOptionToAudience());
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
      {/* 
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
        <p>Change audience</p>
      </MenuItem> */}
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <AudienceList
        options={options}
        setAnchorEl={setAnchorEl}
        selectedIndex={selectedIndex}
        open={open}
      />

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

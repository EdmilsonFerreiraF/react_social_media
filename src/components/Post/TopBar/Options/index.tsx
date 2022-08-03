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
import { useForm } from "hooks/useForm";
import { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import AudienceList from "./AudienceButton";

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
  postAudience: Audience;
  handlePostEditing: () => void;
  hasAuthorization: boolean;
};

const Options = (props: Props) => {
  const isOptionsMenuOpen = Boolean(props.optionsMenuAnchorEl);

  const options = ["Public", "Friends", "Friend of friends", "Only me"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setSelectedIndex(audienceToSelectedOption());
  }, []);

  useEffect(() => {
    changePostAudience(props.postId, selectedOptionToAudience());
  }, [selectedIndex]);

  type AudienceType = keyof typeof Audience;

  const selectedOptionToAudience = () => {
    const upperSnakedOption = options[selectedIndex as number]
      .split(" ")
      .join("_")
      .toUpperCase() as AudienceType;

    return Audience[upperSnakedOption];
  };

  const audienceToSelectedOption = () => {
    let normalizedAudience = props.postAudience
      .split("_")
      .join(" ")
      .toLowerCase();
    normalizedAudience = `${normalizedAudience[0].toUpperCase()}${normalizedAudience.slice(
      1
    )}`;

    return options.indexOf(normalizedAudience);
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

      setBookmarks(bookmarks);
    })();
  }, []);

  const handleDeletePost = async () => {
    props.handleMenuOpening(null, "anchorEl", true) as
      | MouseEventHandler<HTMLLIElement>
      | undefined;
    await deletePost(props.postId);
  };

  const handleCreateBookmark = async () => {
    props.handleMenuOpening(null, "anchorEl", true) as
      | MouseEventHandler<HTMLLIElement>
      | undefined;

    if (
      bookmarks.length &&
      bookmarks.find((bookmark: any) => bookmark.postId === props.postId)
    ) {
      await deletePostBookmark(props.postId);
      return;
    }

    const newBookmark = await savePostBookmark(props.postId);

    setBookmarks(newBookmark);
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
      keepMounted
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
    >
      <MenuItem
        onClick={() => handleCreateBookmark()}
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
          {bookmarks.length &&
          bookmarks.find((bookmark: any) => bookmark.postId === props.postId)
            ? "Remove"
            : "Save"}
        </p>
      </MenuItem>

      {props.hasAuthorization && (
        <div>
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
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
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
        </div>
      )}
    </Menu>
  );
};

export default Options;

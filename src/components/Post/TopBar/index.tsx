import { MoreVert } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { FormEvent, useContext } from "react";

import { useForm } from "hooks/useForm";

import styles from "./style.module.css";
import { Box, IconButton } from "@mui/material";
import Options from "./Options";
import { handleMenuOpening } from "components/MainAppBar/Account/MobileMenu";
import { Audience } from "apiCalls";

type Props = {
  postId: string;
  username: string;
  profilePicture: string;
  noProfilePicture: string;
  createdAt: Date;
  isEditing: boolean;
  handlePostEditing: () => void;
  handleMenuOpening: handleMenuOpening;
  optionsMenuAnchorEl: Element;
  postAudience: Audience;
};

const TopBar = (props: Props) => {
  const isOptionsMenuOpen = Boolean(props.optionsMenuAnchorEl);

  const optionsMenuId = "options-menu";
  const optionsButton = "options-button";

  return (
    <div className={styles.topbar}>
      <div className={styles.contentImg}>
        <Link to={`profile/${props.username}`}>
          <img
            src={props.profilePicture ?? props.noProfilePicture}
            className={styles.profileImg}
            alt="Post user profile"
          />
        </Link>
        <span data-testid="post username" className={styles.username}>
          {props.username}
        </span>
        <span data-testid="post date" className={styles.date}>
          {format(props.createdAt)}
        </span>
      </div>
      <div data-testid="post options" className={styles.options}>
        <Box
          data-testid="optionsmenubox"
          sx={{
            // display: { xs: "flex", md: "none" },
            flex: 1.4,
            flexFlow: "row-reverse",
          }}
        >
          <IconButton
            id={optionsButton}
            aria-controls={isOptionsMenuOpen ? optionsMenuId : undefined}
            // aria-controls={optionsMenuId}
            aria-haspopup="true"
            aria-expanded={isOptionsMenuOpen ? "true" : undefined}
            size="large"
            aria-label="post options"
            onClick={(e) =>
              props.handleMenuOpening(e.currentTarget, "optionsMenuAnchorEl")
            }
            color="inherit"
          >
            <MoreVert />
          </IconButton>
        </Box>
        <Options
          optionsMenuAnchorEl={props.optionsMenuAnchorEl}
          optionsMenuId={optionsMenuId}
          postId={props.postId}
          handleMenuOpening={props.handleMenuOpening}
          optionsButton={optionsButton}
          handlePostEditing={props.handlePostEditing}
          postAudience={props.postAudience}
        />
      </div>
    </div>
  );
};

export default TopBar;

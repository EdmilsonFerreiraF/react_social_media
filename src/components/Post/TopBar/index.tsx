import { MoreVert } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

import styles from "./style.module.css";

type Props = {
  username: string;
  profilePicture: string;
  noProfilePicture: string;
  createdAt: Date;
};

const TopBar = (props: Props) => {
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
        <MoreVert />
      </div>
    </div>
  );
};

export default TopBar;

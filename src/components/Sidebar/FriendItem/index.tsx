import React from "react";

import { User } from "context/AuthContext";
import { useRequestImage } from "hooks/useRequestImage";
import styles from "./style.module.css";

const FriendItem = ({ friend }: { friend: User }) => {
  const profilePicture = useRequestImage(
    "profile_small",
    friend?.profilePicture
  );

  return (
    <li data-testid="friendItem" className={styles.friend}>
      <img
        className={styles.friendImg}
        src={profilePicture}
        alt="Friend profile"
      />
      <span data-testid="sidebarFriendName">{friend?.username}</span>
    </li>
  );
};

export default FriendItem;

import React from "react";
import { useNavigate } from "react-router";

import { User } from "context/AuthContext";
import { useRequestImage } from "hooks/useRequestImage";
import noProfilePicture from "img/no_person.webp";
import styles from "./style.module.css";

const FollowingItem = ({ friend }: { friend: User }) => {
  const profilePicture = useRequestImage(
    "profile_small",
    friend?.profilePicture
  );

  const navigate = useNavigate();

  const goToFriendProfile = () => {
    navigate(`/profile/${friend?.username}`);
  };

  return (
    <div className={styles.followingItem} onClick={goToFriendProfile}>
      <img
        className={styles.followingImg}
        src={profilePicture ?? noProfilePicture}
        alt="Friend profile"
      />
      <span data-testid="online friend name">{friend?.username}</span>
    </div>
  );
};

export default FollowingItem;

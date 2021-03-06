import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useRequestImage } from "hooks/useRequestImage";

import styles from "./style.module.css";

const Profile = () => {
  const { user } = useContext(AuthContext) as AuthContextInterface;

  let navigate = useNavigate();

  const goToUserProfile = () => {
    navigate(`/profile/${user?.username}`);
  };

  const profilePicture = useRequestImage("profile", user?.profilePicture);

  return (
    <img
      className={styles.profileImg}
      src={profilePicture}
      alt="My profile"
      onClick={goToUserProfile}
    />
  );
};

export default Profile;

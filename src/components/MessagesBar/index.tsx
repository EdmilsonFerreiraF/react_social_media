import React, { useContext } from "react";

import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface, User } from "context/AuthContext";
import { useRequestData } from "hooks/useRequestData";
import HomeMessagesBar from "./HomeMessagesBar";
import ProfileMessagesBar from "./ProfileMessagesBar";
import styles from "./style.module.css";

const MessagesBar = ({ user: visitedUser }: { user?: User }) => {
  const { user: currUser } = useContext(AuthContext) as AuthContextInterface;

  const user = visitedUser ?? currUser;

  const friends = useRequestData(
    user && user.id && `${baseUrl}/user/${user.id}/friends`,
    []
  );

  return (
    <div className={styles.messagesBarContainer}>
      <div className={styles.messagesBar}>
        {visitedUser ? (
          <ProfileMessagesBar user={user} friends={friends} />
        ) : (
          <HomeMessagesBar friends={friends} />
        )}
      </div>
    </div>
  );
};

export default MessagesBar;

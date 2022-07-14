import React, { useContext } from "react";
// import { useErrorHandler } from 'react-error-boundary'

import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface, User } from "context/AuthContext";
import { useRequestData } from "hooks/useRequestData";
import FriendItem from "../FriendItem";
import styles from "./style.module.css";

const FriendList = () => {
  const { user } = useContext(AuthContext) as AuthContextInterface;

  const friends = useRequestData(
    user && user.id && `${baseUrl}/user/${user.id}/friends`,
    []
  );

  return (
    <ul className={styles.friendList} data-testid="friendList">
      {friends && friends.length
        ? friends.map((friend: User) => (
            <FriendItem key={friend?.id} friend={friend} />
          ))
        : null}
    </ul>
  );
};

export default FriendList;

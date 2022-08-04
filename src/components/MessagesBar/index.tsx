import React, { useContext, useEffect, useState } from "react";

import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface, User } from "context/AuthContext";
import { useRequestData } from "hooks/useRequestData";
import HomeMessagesBar from "./HomeMessagesBar";
import ProfileMessagesBar from "./ProfileMessagesBar";

import { Container } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import styles from "./style.module.css";

const MessagesBar = ({ user: visitedUser }: { user?: User }) => {
  const [friends, setFriends] = useState([])
  
  const { user: currUser } = useContext(AuthContext) as AuthContextInterface;

  const user = visitedUser ?? currUser;

  const initialFriends = useRequestData(
    user && user.id && `${baseUrl}/user/${user.id}/friends`,
    []
  );
  
  useEffect(() => {
    setFriends(initialFriends);
  }, [initialFriends]);

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  const mobile = (
    <>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        {visitedUser ? (
          <ProfileMessagesBar user={user} friends={friends} />
        ) : (
          <HomeMessagesBar friends={friends} />
        )}
      </SwipeableDrawer>
    </>
  );

  const desktop = (
    <Container
      sx={{
        display: { xs: "none", md: "flex" },
      }}
      disableGutters={true}
    >
      {visitedUser ? (
        <ProfileMessagesBar user={user} friends={friends} />
      ) : (
        <HomeMessagesBar friends={friends} />
      )}
    </Container>
  );

  return (
    <div className={styles.messagesBar}>
      {mobile}
      {desktop}
    </div>
  );
};

export default MessagesBar;

import React, { useContext } from "react";

import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface, User } from "context/AuthContext";
import { useRequestData } from "hooks/useRequestData";
import HomeMessagesBar from "./HomeMessagesBar";
import ProfileMessagesBar from "./ProfileMessagesBar";

import { Container } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import styles from "./style.module.css";

const MessagesBar = ({ user: visitedUser }: { user?: User }) => {
  const { user: currUser } = useContext(AuthContext) as AuthContextInterface;

  const user = visitedUser ?? currUser;

  const friends = useRequestData(
    user && user.id && `${baseUrl}/user/${user.id}/friends`,
    []
  );

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
        SwipeAreaProps={{
          sx: {
            display: { xs: "flex", md: "none" },
          },
        }}
      >
        <div className={styles.messagesBar}>
          {visitedUser ? (
            <ProfileMessagesBar user={user} friends={friends} />
          ) : (
            <HomeMessagesBar friends={friends} />
          )}
        </div>
      </SwipeableDrawer>
    </>
  );

  const desktop = (
    <Container
      className={styles.messagesBar}
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
    <div className={styles.messagesBarContainer}>
      {mobile}
      {desktop}
    </div>
  );
};

export default MessagesBar;

import React from "react";

import { Container } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FriendList from "./FriendList";
import NavList from "./NavList";
import styles from "./style.module.css";

const Sidebar = () => {
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
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          display: { xm: "flex", md: "none" },
        }}
      >
        <div className={styles.sidebarContainer}>
          <NavList />

          <button className={styles.sidebarButton}>Show more</button>
          <hr
            data-testid="showMoreDivision"
            className={styles.sidebarDivision}
          />
          <FriendList />
        </div>
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
      <div className={styles.sidebarContainer}>
        <NavList />

        <button className={styles.sidebarButton}>Show more</button>
        <hr data-testid="showMoreDivision" className={styles.sidebarDivision} />
        <FriendList />
      </div>
    </Container>
  );

  return (
    <aside
      data-testid="sidebar"
      aria-label="sidebarnavigation"
      className={styles.sidebar}
      aria-labelledby="sidebarnavigation"
    >
      {mobile}
      {desktop}
    </aside>
  );
};

export default Sidebar;

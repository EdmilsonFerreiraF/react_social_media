import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import { Container } from "@mui/material";
import React from "react";

import NavItem from "../NavItem";
import styles from "./style.module.css";

const NavList = () => {
  type NavList = [number, string, JSX.Element];

  const navList: NavList[] = [
    [0, "Feed", <RssFeed />],
    [1, "Chats", <Chat />],
    [2, "Videos", <PlayCircleFilledOutlined />],
    [3, "Groups", <Group />],
    [4, "Bookmarks", <Bookmark />],
    [5, "Questions", <HelpOutline />],
    [6, "Jobs", <WorkOutline />],
    [7, "Events", <Event />],
    [8, "Courses", <School />],
  ];

  return (
    <Container
      data-testid="navList"
      sx={{
        padding: 0,
        "@media (min-width: 600px)": {
          padding: 0,
        },
        "@media (max-width: 535px)": {
          ".MuiSvgIcon-root": {
            padding: 0,
            fontSize: "1.4em",
          },
        },
      }}
    >
      <ul className={styles.navList}>
        {navList.map((navItem: NavList) => {
          return (
            <NavItem key={navItem[0]} title={navItem[1]}>
              {navItem[2]}
            </NavItem>
          );
        })}
      </ul>
    </Container>
  );
};

export default NavList;

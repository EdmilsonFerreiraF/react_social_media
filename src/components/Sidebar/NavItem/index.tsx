import { Button, IconButton } from "@mui/material";
import React from "react";

import styles from "./style.module.css";

type IProps = {
  children?: JSX.Element;
  title: string;
};

const NavItem = (props: IProps) => {
  return (
    <Button type="submit">
      <li className={styles.navItem}>
        <div className={styles.navItemIcon}>{props.children}</div>
        <span className={styles.navTitle}>{props.title}</span>
      </li>
    </Button>
  );
};

export default NavItem;

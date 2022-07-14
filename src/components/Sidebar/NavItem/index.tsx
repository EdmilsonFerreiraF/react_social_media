import React from "react";

import styles from "./style.module.css";

type IProps = {
  children?: JSX.Element;
  title: string;
};

const NavItem = (props: IProps) => {
  return (
    <li className={styles.navItem}>
      <div className={styles.navItemIcon}>{props.children}</div>
      <span>{props.title}</span>
    </li>
  );
};

export default NavItem;

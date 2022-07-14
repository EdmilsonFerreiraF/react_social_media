import React from "react";

import Account from "./Account";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

import styles from "./style.module.css";

const MainAppBar = () => {
  return (
    <nav
      data-testid="mainappbar"
      aria-label="navigation"
      className={styles.mainAppBar}
    >
      <Logo />
      <SearchBar />
      <Account />
    </nav>
  );
};

export default MainAppBar;

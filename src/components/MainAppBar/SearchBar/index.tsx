import { Search } from "@mui/icons-material";
import React from "react";

import styles from "./style.module.css";

const SearchBar = () => {
  return (
    <div data-testid="searchbar" className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <Search data-testid="searchIcon" className={styles.searchBarIcon} />
        <input
          type="text"
          data-testid="search"
          placeholder="Search for friends, posts or videos"
          className={styles.searchBarInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;

import { Search } from "@mui/icons-material"

import styles from "./style.module.css"

const SearchBar = () => {
    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
                <Search className={styles.searchBarIcon}/>
                <input type="text" placeholder="Search for friends, posts or videos" className={styles.searchBarInput}/>
            </div>
        </div>
    )
}

export default SearchBar
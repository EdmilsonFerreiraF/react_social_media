import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"
import Profile from "./Profile/Profile"

import styles from "./Account.module.css"

const Account = () => {
    return (
        <div className={styles.account}>
            <Navigation />
            <Social />
            <Profile />
        </div>
    )
}

export default Account
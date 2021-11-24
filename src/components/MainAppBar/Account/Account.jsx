import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"
import Profile from "./Profile/Profile"

import styles from "./Account.module.css"

const Account = ({ user }) => {
    return (
        <div className={styles.account}>
            <Navigation />
            <Social />
            <Profile user={user} />
        </div>
    )
}

export default Account
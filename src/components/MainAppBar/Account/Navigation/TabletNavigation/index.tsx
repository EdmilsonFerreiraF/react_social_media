import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import {
    AuthContext,
    AuthContextInterface
} from 'context/AuthContext'
import { goToIndex, goToProfile } from "routes/coordinator"
import styles from "./style.module.css"
import NavigationItem from "../NavigationItem"

const TabletNavigation = () => {
  const { user } = useContext(AuthContext) as
        AuthContextInterface
    const navigation = useNavigate()

    const handleHomepageClick = () => {
        goToIndex(navigation)
    }

    const handleTimelineClick = () => {
        goToProfile(navigation, user?.username)
    }

    return (
        <nav
            data-testid="navigation menu"
            className={styles.navigation}
        >
            <NavigationItem
                handleClick={handleHomepageClick}
                dataTestId="homepageLink"
                title="Homepage"
            />
            <NavigationItem
                handleClick={handleTimelineClick}
                dataTestId="timelineLink"
                title="Timeline"
            />
        </nav>
    )
}

export default TabletNavigation
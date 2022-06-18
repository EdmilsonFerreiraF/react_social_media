import React from "react"

import { handleMenuOpening } from '../MobileMenu'
import MobileNavigation from "./MobileNavigation"
import TabletNavigation from "./TabletNavigation"

type IProps = {
    handleProfileMenuOpen?: handleMenuOpening,
    isMobileMenuOpen?: boolean
}

const Navigation = (props: IProps) => {
    return (
        props.isMobileMenuOpen ?
            <MobileNavigation handleProfileMenuOpen={
                props.handleProfileMenuOpen as handleMenuOpening 
            }
            /> :
            <TabletNavigation />
    )
}

export default Navigation
import React from "react"
import styles from "./style.module.css"

type IProps = {
    children: JSX.Element
    badge: number
}

const SocialItem = (props: IProps) => {
    return (
        <div data-testid="socialItem"
            className={styles.socialItem}
            role="menuitem"
        >
            {props.children}
            <span className={styles.socialItemBadge}>
                {props.badge}
            </span>
        </div>
    )
}

export default SocialItem
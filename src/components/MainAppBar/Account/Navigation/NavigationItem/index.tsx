import React, { MouseEventHandler } from "react"
import styles from "./style.module.css"

type IProps = {
    title: string
    dataTestId: string
    handleClick: MouseEventHandler<HTMLDivElement>
}

const NavigationItem = ({
    title,
    dataTestId,
    handleClick
}: IProps) => {
    return (
        <div className={styles.navigationItem}
            onClick={handleClick}
            data-testid={dataTestId}
        >
            {title}
        </div>
    )
}

export default NavigationItem
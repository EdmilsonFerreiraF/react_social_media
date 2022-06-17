import React from "react"
import styles from './style.module.css'

type Props = {
    idx: number
    error: string
}

const Error = ({idx, error}: Props) => {
    return (
        <p className={styles.error}
            data-testid="error line"
            key={idx}
            id={`error${idx + 1}`}
        >
            {error}
        </p>
    )
}

export default Error
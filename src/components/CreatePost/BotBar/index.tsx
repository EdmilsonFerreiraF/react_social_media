import React from "react"

import ElementList from "../ElementList"
import styles from "./style.module.css"

type Props = {
    inputFileHandler?: (
        (e: React.FormEvent<HTMLInputElement>)
            => void
    )
    inputHandler?: (
        e: React.FormEvent<HTMLInputElement>)
        => void
    form: any
}

const BotBar = (props: Props) => {
    return (
        <div aria-labelledby="create-post"
            className={styles.botBar}
        >
            <ElementList
                inputFileHandler={props.inputFileHandler}
                inputHandler={props.inputHandler} />

            <button className={styles.createButton}
                type="submit"
                disabled={
                    (!props.form.description ||
                        props.form.description === ""
                    ) &&
                    !props.form.file
                }
            >
                Create
            </button>
        </div>
    )
}

export default BotBar
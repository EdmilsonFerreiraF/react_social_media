import Input from "components/Input"
import React, { ChangeEventHandler } from "react"

import styles from "./style.module.css"

type Props = {
    className: string,
    title: string,
    inputType?: string,
    inputAccept?: string,
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
    children?: JSX.Element,
}

const ElementItem = (props: Props): JSX.Element => {
    return (
        <li className={styles.elementItem}>
            <label className={styles.elementItemTitle}
                htmlFor={props.title}
            >
                {props.title}
                <div className={styles.elementItemIcon}>
                    {props.children}
                </div>
            </label>
            <input className={styles.elementItemInput}
                name={props.title}
                type={props.inputType}
                id={props.title}
                accept={
                    props.inputAccept
                }
                onChange={props.onChange}
                data-testid="elementItem input"
            />

            <Input className={styles.elementItemInput}
                name={props.title}
                type={props.inputType as string}
                placeholder="Email"
                required
                accept={
                    props.inputAccept
                }
                handleInputChange={props.onChange as ChangeEventHandler<HTMLInputElement>}
            />
        </li>
    )
}

export default ElementItem
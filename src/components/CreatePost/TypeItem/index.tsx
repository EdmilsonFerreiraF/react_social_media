import React from "react"

import styles from "./style.module.css"

type Props = {
    className: string,
    title: string,
    inputType: string,
    inputAccept: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    children: JSX.Element,
}

const TypeItem = (props: Props): JSX.Element => {
    return (
        <li className={styles.typeItem}>
            <label className={styles.typeItemTitle}
                htmlFor={props.title}
            >
                {props.title}
                <div className={styles.typeItemIcon}>
                    {props.children}
                </div>
            </label>
            <input className={styles.typeItemInput}
                name={props.title}
                type={props.inputType}
                id={props.title}
                accept={
                    props.inputAccept
                }
                onChange={props.onChange}
                data-testid="typeItem input"
            />
        </li>
    )
}

export default TypeItem
import React, { FormEvent, useContext } from 'react'
import { ClickAwayListener } from "@mui/material"

import noProfilePicture from 'img/person/no_person.jpg'
import { useForm } from "hooks/useForm"
import { useRequestImage } from 'hooks/useRequestImage'
import {
    AuthContext,
    AuthContextInterface
}
    from "context/AuthContext"
import styles from "./style.module.css"

type Props = {
    inputHandler: (e: FormEvent) => void
}

const Content = (props: Props) => {
    const { user } = useContext(AuthContext) as
        AuthContextInterface

    const { form, onChange } = useForm({
        isInputActive: false
    })

    const activeCreationHandler = () => {
        onChange(!form.isInputActive, "isInputActive")
    }

    const handleClickAway = () => {
        onChange(false, "isInputActive")
    }

    const profilePicture = useRequestImage(
        "profile",
        user?.profilePicture
    )

    return (
        <div className={styles.content}>
            <img className={styles.profileImg}
                id="profileImg"
                src={
                    profilePicture ?? noProfilePicture
                }
                alt="CreatePost user profile" />
            <ClickAwayListener onClickAway={
                handleClickAway
            }>
                <textarea placeholder={form.isInputActive ?
                    "" :
                    `What's in your mind ${user?.username}?`}
                    name="description"
                    rows={form.isInputActive ? 4 : 1}
                    onFocus={activeCreationHandler}
                    className={
                        `${styles.descriptionInput} ${form.isInputActive ?
                            styles.activeInput :
                            ""
                        }`}
                    value={form.description}
                    onChange={props.inputHandler} />
            </ClickAwayListener>
        </div>
    )
}

export default Content
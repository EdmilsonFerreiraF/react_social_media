import React, { FormEvent } from "react"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

import ElementItem from "../ElementItem"
import styles from "./style.module.css"

type Props = {
    setFile: (file: FileList[0], inputType: string) => void,
    inputHandler: (e: React.FormEvent<HTMLInputElement>) => void
}

const ElementList = (props: Props): JSX.Element => {
    return (
        <ul className={styles.elementList}>
            <ElementItem
                className="elementItemInput"
                title="Photo or Video"
                inputType="file"
                inputAccept="image/*"
                onChange={(e: FormEvent) => {
                    const target = e.target as HTMLInputElement;
                    const file: File = (target.files as FileList)[0];

                    props.setFile(file, "file")
                }}
            >
                <PermMedia htmlColor="tomato" />
            </ElementItem>

            <ElementItem
                className="elementItemInput"
                title="Tag"
                inputType="text"
                onChange={props.inputHandler}
            >
                <Label htmlColor="blue" />
            </ElementItem>

            <ElementItem
                className="elementItemInput"
                title="Location"
                inputType="text"
                onChange={props.inputHandler}
            >
                <Room htmlColor="green" />
            </ElementItem>

            <ElementItem
                className="elementItemInput"
                title="Feelings"
                inputType="text"
                onChange={props.inputHandler}
            >
                <EmojiEmotions htmlColor="goldenrod" />
            </ElementItem>
        </ul>
    )
}

export default ElementList
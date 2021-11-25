import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { createRef, useRef, useState } from "react"

import TypeItem from "../TypeItem/TypeItem"

import styles from "./TypeList.module.css"

const TypeList = (props) => {
    const description = createRef()
    
    return (
        <ul className={styles.typeList}>
            <TypeItem ref={description} title="Photo or Video" inputType="file"
            inputId="file" inputAccept=".png, .jpeg, .jpg"
            className="typeItemInputFile"
             onChange={e => {props.setFile(e.target.files[0]); console.log('e.target.files[0]', e.target.files[0])}}
              inputHandler={props.inputHandler}>
                <PermMedia htmlColor="tomato" />
            </TypeItem>
            <TypeItem title="Tag" inputType="" inputId="" inputAccept=""
             inputHandler={props.inputHandler}
             className="typeItemInput"
             >
                <Label htmlColor="blue" />
            </TypeItem>
            <TypeItem title="Location" inputType="" inputId="" inputAccept=""
             inputHandler={props.inputHandler}
             className="typeItemInput"
             >
                <Room htmlColor="green" />
            </TypeItem>
            <TypeItem title="Feelings" inputType="" inputId="" inputAccept=""
             inputHandler={props.inputHandler}
             className="typeItemInput"
             >
                <EmojiEmotions htmlColor="goldenrod" />
            </TypeItem>
        </ul>
    )
}

export default TypeList
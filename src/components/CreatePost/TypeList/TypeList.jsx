import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import { createRef } from "react"

import TypeItem from "../TypeItem/TypeItem"

import styles from "./TypeList.module.css"

const TypeList = (props) => {
    const description = createRef()
    
    return (
        <ul className={styles.typeList}>
            <TypeItem ref={description} title="Photo or Video" inputType="file"
            inputId="file" inputAccept=".png, .jpeg, .jpg"
            className="typeItemInput"
             onChange={e => {props.setFile(e.target.files[0]); console.log('e.target.files[0]', e.target.files[0])}}
              >
                <PermMedia htmlColor="tomato" />
            </TypeItem>

            <TypeItem ref={description} title="Tag" inputType="text"
            inputId="tag"
            className="typeItemInput"
             onChange={props.inputHandler}
              >
                <Label htmlColor="blue" />
            </TypeItem>

            <TypeItem ref={description} title="Location" inputType="text"
            inputId="location"
            className="typeItemInput"
             onChange={props.inputHandler}
              >
                <Room htmlColor="green" />
            </TypeItem>

            <TypeItem ref={description} title="Feelings" inputType="text"
            inputId="feelings"
            className="typeItemInput"
             onChange={props.inputHandler}
              >
                <EmojiEmotions htmlColor="goldenrod" />
            </TypeItem>
        </ul>
    )
}

export default TypeList
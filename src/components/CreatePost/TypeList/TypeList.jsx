import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { createRef } from "react"

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

            <TypeItem ref={description} title="Tag" inputType="text"
            inputId="file" inputAccept=".png, .jpeg, .jpg"
            className="typeItemInputFile"
             onChange={e => {console.log('e', e.target.value)}}
              inputHandler={props.inputHandler}>
                <Label htmlColor="blue" />
            </TypeItem>

            <TypeItem ref={description} title="Location" inputType="text"
            inputId="file" inputAccept=".png, .jpeg, .jpg"
            className="typeItemInputFile"
             onChange={e => {console.log('e', e.target.value)}}
              inputHandler={props.inputHandler}>
                <Room htmlColor="green" />
            </TypeItem>

            <TypeItem ref={description} title="Feelings" inputType="text"
            inputId="file" inputAccept=".png, .jpeg, .jpg"
            className="typeItemInputFile"
             onChange={e => {console.log('e', e.target.value)}}
              inputHandler={props.inputHandler}>
                <EmojiEmotions htmlColor="goldenrod" />
            </TypeItem>
        </ul>
    )
}

export default TypeList
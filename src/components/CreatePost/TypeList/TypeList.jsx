import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

import TypeItem from "../TypeItem/TypeItem"

import styles from "./TypeList.module.css"

const TypeList = (props) => {
    return (
        <ul className={styles.typeList}>
            <TypeItem title="Photo or Video" inputType="file"
            inputId="file" inputAccept=".png, .jpeg, .jpg"
            className="typeItemInput"
             onChange={e => {props.setFile(e.target.files[0], "file"); console.log('e.target.files[0]', e.target.files[0])}}
              >
                <PermMedia htmlColor="tomato" />
            </TypeItem>

            <TypeItem title="Tag" inputType="text"
            inputId="tag"
            className="typeItemInput"
             onChange={props.inputHandler}
              >
                <Label htmlColor="blue" />
            </TypeItem>

            <TypeItem title="Location" inputType="text"
            inputId="location"
            className="typeItemInput"
             onChange={props.inputHandler}
              >
                <Room htmlColor="green" />
            </TypeItem>

            <TypeItem title="Feelings" inputType="text"
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
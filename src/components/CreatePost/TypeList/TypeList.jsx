import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

import TypeItem from "../TypeItem/TypeItem"

import styles from "./TypeList.module.css"

const TypeList = (props) => {
    return (
        <ul className={styles.typeList}>
            <TypeItem
                className="typeItemInput"
                title="Photo or Video"
                inputId="file"
                inputType="file"
                inputAccept="image/*"
                onChange={e => {
                    props.setFile(e.target.files[0], "file");
                    
                    console.log('e.target.files[0]', e.target.files[0])
                }}
            >
                <PermMedia htmlColor="tomato" />
            </TypeItem>

            <TypeItem
                className="typeItemInput"
                title="Tag"
                inputId="tag"
                inputType="text"
                onChange={props.inputHandler}
            >
                <Label htmlColor="blue" />
            </TypeItem>

            <TypeItem
                className="typeItemInput"
                title="Location"
                inputId="location"
                inputType="text"
                onChange={props.inputHandler}
            >
                <Room htmlColor="green" />
            </TypeItem>

            <TypeItem
                className="typeItemInput"
                title="Feelings"
                inputId="feelings"
                inputType="text"
                onChange={props.inputHandler}
            >
                <EmojiEmotions htmlColor="goldenrod" />
            </TypeItem>
        </ul>
    )
}

export default TypeList
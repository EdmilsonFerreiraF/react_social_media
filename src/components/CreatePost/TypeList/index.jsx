import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

import ElementItem from "../ElementItem"
import styles from "./style.module.css"

const TypeList = (props) => {
    return (
        <ul className={styles.typeList}>
            <ElementItem
                className="elementItemInput"
                title="Photo or Video"
                inputType="file"
                inputAccept="image/*"
                onChange={e => {
                    props.setFile(e.target.files[0], "file")
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

export default TypeList
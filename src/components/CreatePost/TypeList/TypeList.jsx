import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

import TypeItem from "../TypeItem/TypeItem"

import styles from "./TypeList.module.css"

const TypeList = () => {
    return (
        <ul className={styles.typeList}>
            <TypeItem title="Photo or Video">
                <PermMedia htmlColor="tomato" />
            </TypeItem>
            <TypeItem title="Tag">
                <Label htmlColor="blue" />
            </TypeItem>
            <TypeItem title="Location">
                <Room htmlColor="green" />
            </TypeItem>
            <TypeItem title="Feelings">
                <EmojiEmotions htmlColor="goldenrod" />
            </TypeItem>
        </ul>
    )
}

export default TypeList
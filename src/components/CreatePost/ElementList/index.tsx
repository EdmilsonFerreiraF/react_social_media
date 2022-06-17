import React from "react"
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions
} from "@mui/icons-material"

import ElementItem from "../ElementItem"
import styles from "./style.module.css"

type Props = {
    inputFileHandler?: (
        (e: React.FormEvent<HTMLInputElement>)
            => void
    ),
    inputHandler?: (
        e: React.FormEvent<HTMLInputElement>)
        => void
}

type Element = [
    string,
    string,
    string | null,
    JSX.Element
]

const ElementList = (props: Props): JSX.Element => {
    const elementList: Element[] = [
        ["Photo or Video", "file", "image/*",
            <PermMedia htmlColor="tomato" />
        ],
        ["Tag", "text", null,
            <Label htmlColor="blue" />
        ],
        ["Location", "text", null,
            <Room htmlColor="green" />
        ],
        ["Feelings", "text", null,
            <EmojiEmotions htmlColor="goldenrod" />
        ]
    ]

    return (
        <ul className={styles.elementList}>
            {elementList.map((element: Element) => (
                <ElementItem
                    className="elementItemInput"
                    title={element[0]}
                    inputType={element[1]}
                    inputAccept={element[2] as string}
                    onChange={
                        element[1] === "text" ?
                            props.inputHandler :
                            props.inputFileHandler
                    }
                >
                    {element[3]}
                </ElementItem>
            )
            )}
        </ul>
    )
}

export default ElementList
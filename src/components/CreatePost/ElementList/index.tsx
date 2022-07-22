import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import React from "react";

import ElementItem from "../ElementItem";
import styles from "./style.module.css";

type Props = {
  inputFileHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
  inputHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
};

type Element = [number, string, string | undefined, string | undefined, JSX.Element];

const ElementList = (props: Props): JSX.Element => {
  const elementList: Element[] = [
    [0, "Photo or Video", "file", "image/*", <PermMedia htmlColor="tomato" />],
    [1, "Tag", , , <Label htmlColor="blue" />],
    [2, "Location", , , <Room htmlColor="green" />],
    [3, "Feelings", , , <EmojiEmotions htmlColor="goldenrod" />],
  ];

  return (
    <ul className={styles.elementList}>
      {elementList.map((element: Element) => (
        <ElementItem
          key={element[0]}
          title={element[1]}
          inputType={element[2]}
          inputAccept={element[3] as string}
          onChange={
            element[2] === "text" ? props.inputHandler : props.inputFileHandler
          }
        >
          {element[4]}
        </ElementItem>
      ))}
    </ul>
  );
};

export default ElementList;

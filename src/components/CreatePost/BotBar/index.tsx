import { Button } from "@mui/material";
import React from "react";

import ElementList from "../ElementList";
import styles from "./style.module.css";

type Props = {
  inputChangeHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
  form: any;
};

const BotBar = (props: Props) => {
  return (
    <div aria-labelledby="create-post" className={styles.botBar}>
      <ElementList inputChangeHandler={props.inputChangeHandler} />

      <Button
        className={styles.createButton}
        type="submit"
        variant="contained"
        disabled={
          (!props.form.description || props.form.description === "") &&
          !props.form.file
        }
      >
        Create
      </Button>
    </div>
  );
};

export default BotBar;

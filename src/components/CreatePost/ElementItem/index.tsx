import React, { ChangeEventHandler } from "react";

import Input from "components/Input";
import styles from "./style.module.css";

type Props = {
  title: string;
  inputType?: string;
  inputAccept?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: JSX.Element;
};

const ElementItem = (props: Props): JSX.Element => {
  const inputProps = {
    className: "elementItemInput",
    name: props.title,
    type: props.inputType as string,
    placeholder: "Email",
    accept: props.inputAccept,
    inputChangeHandler: props.onChange as ChangeEventHandler<HTMLInputElement>,
  };

  const nameLoweredSnaked = props.title.split(" ").join("_").toLowerCase();

  return (
    <li className={styles.elementItem}>
      <label className={styles.elementItemTitle} htmlFor={nameLoweredSnaked}>
        {props.title}
        <div className={styles.elementItemIcon}>{props.children}</div>
      </label>

      <Input {...inputProps} />
    </li>
  );
};

export default ElementItem;

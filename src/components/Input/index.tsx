import { ChangeEventHandler } from "react";

import styles from "./style.module.css";

type IProps = {
  className?: string;
  name: string;
  type: string;
  inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  invalid?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
  accept?: string | undefined;
};

const Input = (props: IProps): JSX.Element => {
  const className = props.className as keyof typeof styles;
  const nameCapitalized =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);
  const nameLoweredSnaked = props.name.split(" ").join("_").toLowerCase();

  const inputProps = {
    className: `${styles.input} ${styles[className]}`,
    id: nameLoweredSnaked,
    type: props.type ?? props.name,
    name: props.name,
    onChange: props.inputChangeHandler,
    value: props.value,
    placeholder: props.placeholder ?? nameCapitalized,
    "aria-invalid": props.invalid,
    "data-testid": `${props.name}-input`,
    accept: props.accept,
  };

  return <input {...inputProps} />;
};

export default Input;

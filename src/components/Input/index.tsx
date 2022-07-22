import { ChangeEventHandler } from "react";

import styles from "./style.module.css";

type IProps = {
  className?: string;
  name: string;
  type: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder: string;
  invalid?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
  accept?: string | undefined;
};

const Input = (props: IProps): JSX.Element => {
  const className = props.className as keyof typeof styles;
  const nameCapitalized =
    props.type ?? props.name.charAt(0).toUpperCase() + props.name.slice(1);

    
  const inputProps = {
    className: `${styles.input} ${styles[className]}`,
    id: props.name.toLowerCase(),
    type:
      props.type ?? nameCapitalized,
    name: props.name,
    onChange: props.handleInputChange,
    value: props.value,
    placeholder:
      props.placeholder ??
      nameCapitalized,
    "aria-invalid": props.invalid,
    "data-testid": "input",
    accept: props.accept,
  };

  return <input {...inputProps} />;
};

export default Input;

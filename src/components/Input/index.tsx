import React, { ChangeEventHandler } from "react"

import styles from "./style.module.css"

type IProps = {
  className: string;
  name: string;
  type: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
  invalid: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
}

const Input = (props: IProps): JSX.Element => {
  const className = props.className as keyof typeof styles
  
  return (
    <input className={
      `${styles.input} ${styles[className] ?? ''}`
    }
      id={props.name.toLowerCase()}
      type={props.type}
      name={props.name}
      onChange={props.handleInputChange}
      value={props.value}
      placeholder={props.placeholder}
      aria-invalid={props.invalid}
      data-testid="input"
    />
  )
}

export default Input
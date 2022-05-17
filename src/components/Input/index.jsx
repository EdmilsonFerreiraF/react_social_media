import { forwardRef } from "react";
import styles from "./style.module.css"

const Input = props => {
    return (
      <input className={`${styles.input} ${styles[props.className] ?? ''}`}
            type={props.type}
            name={props.name}
            onChange={props.handleInputChange}
            value={props.value}
            placeholder={props.placeholder}
            aria-invalid={props.invalid}
            aria-errormessage={props.errorIndex}
      />
  );
}

export default Input;

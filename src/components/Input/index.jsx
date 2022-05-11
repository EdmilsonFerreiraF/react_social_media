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
      />
  );
}

export default Input;

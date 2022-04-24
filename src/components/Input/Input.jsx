import { forwardRef } from "react";
import styles from "./Input.module.css"

const Input = props => {
    return (
      <input className={styles.input}
            type={props.type}
            name={props.name}
            onChange={props.handleInputChange}
            value={props.value}
            placeholder={props.placeholder}
      />
  );
}

export default Input;

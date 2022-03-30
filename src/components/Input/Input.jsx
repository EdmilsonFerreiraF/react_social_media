import { forwardRef } from "react";
import styles from "./Input.module.css"

const Input = props => {
    return (
      <input type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder} className={styles.input} />
  );
}

export default Input;

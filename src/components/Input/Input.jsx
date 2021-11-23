import { forwardRef } from "react";
import styles from "./Input.module.css"

const Input = forwardRef((props, ref) => {
    return (
        <input type={props.type} ref={ref} placeholder={props.placeholder} className={styles.input} />
  );
})

export default Input;

import styles from "./style.module.css"

const Input = props => {
  return (
    <input className={
      `${styles.input} ${styles[props.className] ?? ''}`
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
  );
}

export default Input;

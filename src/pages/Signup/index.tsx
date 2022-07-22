import { useUnprotectPage } from "hooks/useUnprotectPage";
import styles from "./style.module.css";
import Form from "./Form";
import Header from "./Header";

const Signup = () => {
  useUnprotectPage();

  return (
    <div className={styles.signup}>
      <div className={styles.signupWrapper}>
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Signup;

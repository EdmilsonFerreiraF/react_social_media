import { useUnprotectPage } from "hooks/useUnprotectPage";
import Form from "./Form";
import Header from "./Header";
import styles from "./style.module.css";

const Login = () => {
  useUnprotectPage();

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Login;

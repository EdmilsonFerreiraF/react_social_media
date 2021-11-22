import styles from "./Login.module.css"
import Input from '../../components/Input/Input'

const Login = () => {
  return (
    <div className={styles.login}>
        <div className={styles.loginWrapper}>
            <div className={styles.loginLeft}>
                <h3 className={styles.loginLogo}>
                    Lamasocial
                </h3>
                <span className={styles.loginDesc}>
                    Connect with friends and the world around you on Lamasocial
                </span>
            </div>
            <div className={styles.loginRight}>
                <div className={styles.loginBox}>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <button className={styles.loginButton}>
                        Log in
                    </button>
                    <span className={styles.loginForgot}>
                        Forgot password?
                    </span>
                    <button className={styles.loginRegisterButton}>
                        Create a new account
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;

import { createRef, useContext } from "react"
import { CircularProgress } from "@material-ui/core"

import Input from '../../components/Input/Input'
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"

import styles from "./Login.module.css"
import { useUnprotectPage } from '../../hooks/useUnprotectPage'

const Login = () => {
    useUnprotectPage()

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const email = createRef()
    const password = createRef()
    
    const handleSubmit = e => {
        e.preventDefault()

        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }
    
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
                <form className={styles.loginBox} onSubmit={handleSubmit}>
                    <Input type="email" placeholder="Email" required ref={email} minLength="6" />
                    <Input type="password" placeholder="Password" required ref={password} />
                    <button className={styles.loginButton} type="submit" disabled={isFetching}>
                        {isFetching ? <CircularProgress color="white" size="20px" /> : "Log in"}
                    </button>
                    <span className={styles.loginForgot}>
                        Forgot password?
                    </span>
                    <button className={styles.loginRegisterButton}>
                        {isFetching ? <CircularProgress color="white" size="20px" /> : "Create a new account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;

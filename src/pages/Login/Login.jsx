import { createRef, useContext, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

import Input from '../../components/Input/Input'
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"

import styles from "./Login.module.css"
import { useUnprotectPage } from '../../hooks/useUnprotectPage'
import { useNavigate } from "react-router-dom"

const Login = () => {
    useUnprotectPage()
    const navigate = useNavigate()

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const [email, setEmail] = useState("user_email33@email.com")
    const [password, setPassword] = useState("user_password")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        loginCall({ email, password }, dispatch, navigate)
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
                    <Input type="email" placeholder="Email" required value={email} onChange={handleEmailChange} minLength="6" />
                    <Input type="password" placeholder="Password" required value={password} onChange={handlePasswordChange} />
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

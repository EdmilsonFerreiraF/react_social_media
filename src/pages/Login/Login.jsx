import { useContext } from "react"
import CircularProgress from '@mui/material/CircularProgress';

import Input from '../../components/Input/Input'
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"

import styles from "./Login.module.css"
import { useUnprotectPage } from '../../hooks/useUnprotectPage'
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import FormErrors from "../../components/FormErrors/FormErrors";

const Login = () => {
    useUnprotectPage()
    const navigate = useNavigate()

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const { form, onChange } = useForm({
        email: 'user_email33@email.com',
        password: 'user_password',
        formErrors: {
        email: '',
        password: ''
    } })

    const handleInputChange = e => {
        onChange(e.target.value, e.target.name)
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log('email, password', form.email, form.password)
        loginCall({ email: form.email, password: form.password }, dispatch, navigate)
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
                    <form className={styles.loginBox}
                        onSubmit={handleSubmit}>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            onChange={handleInputChange}
                            minLength="6" />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required value={form.password}
                            onChange={handleInputChange} />

                        <button className={styles.loginButton}
                            type="submit"
                            disabled={isFetching}>
                            {isFetching
                                ?
                                <CircularProgress
                                    color="white"
                                    size="20px" />
                                :
                                "Log in"}
                        </button>
                        <span className={styles.loginForgot}>
                            Forgot password?
                        </span>
                        <button className={styles.loginRegisterButton}>
                            {isFetching
                                ?
                                <CircularProgress
                                    color="white"
                                    size="20px" />
                                :
                                "Create a new account"}
                        </button>
                        <div className="panel panel-default">
                            <FormErrors formErrors={form.formErrors} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

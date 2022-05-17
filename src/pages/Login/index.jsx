import { useCallback, useContext, useEffect } from "react"
import CircularProgress from '@mui/material/CircularProgress';

import Input from 'components/Input'
import { loginCall } from "apiCalls"
import { AuthContext } from "context/AuthContext"

import styles from "./style.module.css"
import { useUnprotectPage } from 'hooks/useUnprotectPage'
import { useNavigate } from "react-router-dom"
import { useForm } from "hooks/useForm"
import FormErrors from "components/FormErrors";
import { goToSignup } from "routes/coordinator";

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
        },
        emailValid: false,
        passwordValid: false,
        formValid: false
    })

    const formValidation = {
        emailValid: false,
        passwordValid: false
    }

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        onChange(value, name)
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        loginCall({ email: form.email, password: form.password }, dispatch, navigate)
    }

    useEffect(() => {
        let emailValid = form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

        onChange(!!emailValid, "emailValid")
        console.log('form.emailValid', form.emailValid)
    }, [form.email])

    useEffect(() => {
        let passwordValid = form.password.length >= 6

        onChange(passwordValid, "passwordValid")
    }, [form.password])

    useEffect(() => {
        let formErrors = {
            email: '',
            password: ''
        }

        formErrors.email = form.emailValid ? '' : ' is invalid'
        formErrors.password = form.passwordValid ? '' : ' is too short'

        onChange(formErrors, "formErrors")
    }, [form.emailValid, form.passwordValid])

    const handleRegisterButton = () => {
        goToSignup(navigate)
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginWrapper}>
                <div className={styles.loginLeft}>
                    <h3 className={styles.loginLogo} role="img">
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
                            className={form.formErrors.email.length ? 'input--invalid' : ''}
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            handleInputChange={handleInputChange}
                            minLength="6"
                            invalid={!!form.formErrors.email.length}
                            errorIndex="error1"
                            />
                        <Input
                            className={form.formErrors.password.length ? 'input--invalid' : ''}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            value={form.password}
                            handleInputChange={handleInputChange}
                            invalid={!!form.formErrors.password.length}
                            errorIndex="error2"
                            />
                        <div className="panel panel-default">
                            <FormErrors formErrors={form.formErrors} />
                        </div>
                        <button className={styles.loginButton}
                            type="submit"
                            disabled={isFetching}>
                            {isFetching
                                ?
                                <CircularProgress
                                    size="20" />
                                :
                                "Login"
                            }
                        </button>
                        <span className={styles.loginForgot}>
                            Forgot password?
                        </span>
                        <button onClick={handleRegisterButton} className={styles.loginRegisterButton}>
                            {isFetching
                                ?
                                <CircularProgress
                                    size="20" />
                                :
                                "Create a new account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

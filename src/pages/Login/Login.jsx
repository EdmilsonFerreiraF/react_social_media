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
        },
        emailValid: false,
        passwordValid: false,
        formValid: false
    })

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        onChange(value, name, () => { validateField(name, value) })
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log('email, password', form.email, form.password)
        loginCall({ email: form.email, password: form.password }, dispatch, navigate)
    }

    const validateField = (fieldName, value) => {
        let fieldValidationErrors = form.formErrors
        let emailValid = form.emailValid
        let passwordValid = form.passwordValid

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                fieldValidationErrors.email = emailValid ? '' : ' is invalid'
                break;
            case 'password':
                passwordValid = value.length >= 6
                fieldValidationErrors.password = passwordValid ? '' : ' is too short'
                break;
            default:
                break;
        }

        onChange(fieldValidationErrors, "formErrors")
        onChange(emailValid, "emailValid")
        onChange(passwordValid, "passwordValid")
        onChange(validateForm, "validateForm")
    }

    const validateForm = () => {
        onChange(form.emailValid && form.passwordValid, "formValid");
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
                                <button type="submit" className="btn btn-primary"
                                    disabled={!form.formValid}>Sign up</button>
                            }
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

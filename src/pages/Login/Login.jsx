import { useCallback, useContext, useEffect } from "react"
import CircularProgress from '@mui/material/CircularProgress';

import Input from 'components/Input/Input'
import { loginCall } from "apiCalls"
import { AuthContext } from "context/AuthContext"

import styles from "./Login.module.css"
import { useUnprotectPage } from 'hooks/useUnprotectPage'
import { useNavigate } from "react-router-dom"
import { useForm } from "hooks/useForm"
import FormErrors from "components/FormErrors/FormErrors";
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

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        // validateField(value, name)
        onChange(value, name)
    }

    const handleSubmit = e => {
        e.preventDefault()

        loginCall({ email: form.email, password: form.password }, dispatch, navigate)
    }



    useEffect(() => {
        let formErrors = {
            email: '',
            password: ''
        }
        let emailValid

        emailValid = form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        console.log('emailValid', emailValid)

        // if (emailValid) {
        onChange(!!emailValid, "emailValid")
        // }
        console.log('form.emailValid', form.emailValid)
    }, [form.email])

    useEffect(() => {

        let passwordValid

        passwordValid = form.password.length >= 6

        // if (passwordValid) {
        onChange(passwordValid, "passwordValid")
        // }

    }, [
        form.password])

    useEffect(() => {
        let formErrors = {
            email: '',
            password: ''
        }
        console.log('form.emailValid', form.emailValid)
        console.log(form.formErrors, "formErrors")
        // validateForm()
        formErrors.email = form.emailValid ? '' : ' is invalid'
        formErrors.password = form.passwordValid ? '' : ' is too short'
        onChange(formErrors, "formErrors")

        console.log(formErrors, 'formErrors')
    }, [form.emailValid, form.passwordValid])

    console.log(form.emailValid, 'form.emailValid')
    console.log(form.passwordValid, 'form.passwordValid')
    const validateField = (value, name) => {
        let formErrors = {
            email: '',
            password: ''
        }
        let emailValid = false
        let passwordValid = false

        switch (name) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                formErrors.email = emailValid ? '' : ' is invalid'

                onChange(!!emailValid, "emailValid")
                break
            case 'password':
                passwordValid = value.length >= 6
                formErrors.password = passwordValid ? '' : ' is too short'
                onChange(passwordValid, "passwordValid")
                break
            default:
                break
        }

        console.log('form.emailValid', form.emailValid)
        onChange(formErrors, "formErrors")
        validateForm()
    }

    const handleRegisterButton = () => {
        goToSignup(navigate)
    }

    console.log(form.formErrors, "formErrors")

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
                            className={form.formErrors.email.length ? 'input--invalid' : ''}
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            handleInputChange={handleInputChange}
                            minLength="6"
                            />
                        <Input
                            className={form.formErrors.password.length ? 'input--invalid' : ''}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            value={form.password}
                            handleInputChange={handleInputChange}
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
                                    color="white"
                                    size="20px" />
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
                                    color="white"
                                    size="20px" />
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

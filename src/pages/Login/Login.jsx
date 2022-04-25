import { useCallback, useContext, useEffect } from "react"
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

        onChange(value, name)
        validateField(value, name)
    }

    const handleSubmit = e => {
        e.preventDefault()

        loginCall({ email: form.email, password: form.password }, dispatch, navigate)
    }

    let formErrors =  {
        email: '',
        password: ''
    }
    let emailValid = false
    let passwordValid = false

    
    useCallback(() => {
       onChange(formErrors, "formErrors") 
       onChange(emailValid, "emailValid") 
       onChange(passwordValid, "passwordValid") 

       console.log(formErrors, 'formErrors')
console.log(emailValid, 'emailValid')
console.log(passwordValid, 'passwordValid')
    }, [formErrors,
        emailValid,
        passwordValid])

    const validateField = (value, name) => {


        switch (name) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                formErrors.email = emailValid ? '' : ' is invalid'

                // onChange(!!emailValid, "emailValid")
                break
            case 'password':
                passwordValid = value.length >= 6
                formErrors.password = passwordValid ? '' : ' is too short'
                // onChange(passwordValid, "passwordValid")
                break
            default:
                break
        }

        // onChange(formErrors, "formErrors")
        // onChange({
        //     email: ' is invalid',
        //     password: ' is too short',
        // }, "formErrors")
        // console.log('formErrors', formErrors)
        // console.log(`${name}Valid`, value)
        // validateForm()
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
                            handleInputChange={handleInputChange}
                            minLength="6" />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            value={form.password}
                            handleInputChange={handleInputChange} />

                        <button className={styles.loginButton}
                            type="submit"
                            disabled={isFetching || !form.formValid}>
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

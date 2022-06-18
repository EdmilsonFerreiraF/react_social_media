import React, { FormEvent, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';

import Input from 'components/Input'
import FormErrors from "components/FormErrors";
import { AuthContext, AuthContextInterface } from "context/AuthContext"
import { useUnprotectPage } from 'hooks/useUnprotectPage'
import { useForm } from "hooks/useForm"
import { goToSignup } from "routes/coordinator";
import { loginCall } from "apiCalls"
import styles from "./style.module.css"

const Login = () => {
    useUnprotectPage()
    const navigate = useNavigate()

    const { isFetching, dispatch } = useContext(AuthContext) as AuthContextInterface

    const { form, onChange } = useForm({
        email: '',
        password: '',
        formErrors: {
            email: '',
            password: ''
        }
    })

    const handleInputChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement

        const name: string = target.name;
        const value: string = target.value;

        onChange(value, name)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        loginCall({
            email: form.email,
            password: form.password
        },
            dispatch,
            navigate
        )
    }

    const validateFields = () => {
        let emailValid = form.email
            .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        let passwordValid = form.password.length >= 6

        return {
            emailValid,
            passwordValid
        }
    }

    useEffect(() => {
        const validFields = validateFields();

        const isEmailValid = form.email === '' ||
            validFields.emailValid ?
            '' : ' is invalid'
        const isPasswordValid = form.password === '' ||
            validFields.passwordValid ?
            '' : ' is too short'

        let formErrors = {
            email: '',
            password: ''
        }

        formErrors.email = isEmailValid
        formErrors.password = isPasswordValid

        onChange(formErrors, "formErrors")
    }, [form.email, form.password])

    const handleRegisterButton = () => {
        goToSignup(navigate)
    }

    const hasError = (entity: any) => form.formErrors[entity].length

    const inputControls = [
        [hasError("email") ? 'inputInvalid' : '',
            "email",
            "email",
            "Email",
        form.email,
        !!hasError("email"),
            handleInputChange
        ],
        [hasError("password") ? 'inputInvalid' : '',
            "password",
            "password",
            "Password",
        form.password,
        !!hasError("password"),
            handleInputChange,
        ]
    ]

    return (
        <div className={styles.login}>
            <div className={styles.loginWrapper}>
                <div className={styles.loginLeft}>
                    <h3 data-testid="loginLogo"
                        className={styles.loginLogo}>
                        Lamasocial
                    </h3>
                    <h2 className={styles.loginDesc}>
                        Connect with friends and the world around you on Lamasocial
                    </h2>
                </div>
                <div className={styles.loginRight}>
                    <form className={styles.loginBox}
                        onSubmit={handleSubmit}>
                        {
                            inputControls.map((navItem: any) => {
                                return (
                                    <>
                                        <label className={styles.fieldLabel}
                                            htmlFor={navItem[2]}>
                                            {navItem[1]}
                                        </label>

                                        <Input
                                            className={navItem[0]}
                                            name={navItem[1]}
                                            type={navItem[2]}
                                            placeholder={navItem[3]}
                                            required
                                            value={navItem[4]}
                                            invalid={navItem[5]}
                                            handleInputChange={navItem[6]} />
                                    </>
                                )
                            })
                        }

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
                        <button onClick={handleRegisterButton}
                            className={styles.loginRegisterButton}>
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

import React, {
    FormEvent,
    useContext,
} from "react"
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
        const name: string = target.name
        const value: string = target.value

        onChange(value, name)
        validateFields(value, name)
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

    const validateFields = (value: any, name: any) => {
        let emailValid = value
            .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        let passwordValid = value.length >= 6

        const formErrors = {...form.formErrors}

        if (name === "email") {
            formErrors.email = value === '' ||
                emailValid ?
                '' : ' is invalid'
        }

        if (name === "password") {
            formErrors.password = value === '' ||
                passwordValid ?
                '' : ' is too short'
        }

        onChange(formErrors, "formErrors")
    }

    const handleRegisterButton = () => {
        goToSignup(navigate)
    }

    const hasError = (entity: any) => form.formErrors[entity].length

    const inputControls = [
        [0, hasError("email") ? 'inputInvalid' : '',
            "email",
            "email",
            "Email",
            form.email,
            !!hasError("email"),
            handleInputChange
        ],
        [1, hasError("password") ? 'inputInvalid' : '',
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
                            inputControls.map((navItem: any) => (
                                <div className={styles.field} key={navItem[0]}>
                                    <label className={styles.fieldLabel}
                                        htmlFor={navItem[3]}>
                                        {navItem[2]}
                                    </label>

                                    <Input
                                        className={navItem[1]}
                                        name={navItem[2]}
                                        type={navItem[3]}
                                        placeholder={navItem[4]}
                                        required
                                        value={navItem[5]}
                                        invalid={navItem[6]}
                                        handleInputChange={navItem[7]} />
                                </div>
                            ))
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

import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from 'components/Input'
import FormErrors from 'components/FormErrors'
import { baseUrl } from 'constants/baseUrl'
import { useUnprotectPage } from 'hooks/useUnprotectPage'
import { useForm } from "hooks/useForm"
import { signup } from 'apiCalls'
import styles from "./style.module.css"

const Signup = () => {
    useUnprotectPage()

    const { form, onChange } = useForm({
        username: '',
        email: '',
        password: '',
        passwordAgain: '',
        formErrors: {
            username: '',
            email: '',
            password: '',
            passwordAgain: ''
        }
    })

    const navigate = useNavigate()

    const handleInputChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement

        const name = target.name;
        const value = target.value;

        onChange(value, name)
        validatefields(value, name)
    }

    const validatefields = (value: any, name: any) => {
        let usernameValid = value
            .match(/^([\w]{5,15})$/i)
        let emailValid = value
            .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let passwordValid = value
            .length > 8
        let passwordAgainValid = value === form.password

        const formErrors = {...form.formErrors}

        if (name === "username") {
            formErrors.username = value === '' ||
                usernameValid ? '' : ' is invalid';
        }

        if (name === "email") {
            formErrors.email = value === '' ||
                emailValid ? '' : ' is invalid';
        }

        if (name === "password") {
            formErrors.password = value === '' ||
                passwordValid ? '' : ' is too short';
        }

        if (name === "passwordAgain") {
            formErrors.passwordAgain = value === '' ||
                passwordAgainValid ? '' : ' passwords don\'t match';
        }

        onChange(formErrors, "formErrors")
    }

    const handleLoginButton = () => {
        navigate("/login")
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const user = {
            username: form.username,
            email: form.email,
            password: form.password,
            isAdmin: false
        }

        const url = `${baseUrl}/user/signup`
        const data = user

        signup(url, data)
    }

    const hasError = (entity: any) => form.formErrors[entity].length

    const inputControls = [
        [0, hasError("username") ? 'inputInvalid' : '',
            "username",
            "text",
            "Username",
            form.username,
            !!hasError("username"),
            handleInputChange],
        [1, hasError("email") ? 'inputInvalid' : '',
            "email",
            "email",
            "Email",
            form.email,
            !!hasError("email"),
            handleInputChange
        ],
        [2, hasError("password") ? 'inputInvalid' : '',
            "password",
            "password",
            "Password",
            form.password,
            !!hasError("password"),
            handleInputChange,
        ],
        [3, hasError("passwordAgain") ? 'inputInvalid' : '',
            "passwordAgain",
            "password",
            "Password again",
            form.passwordAgain,
            !!hasError("passwordAgain"),
            handleInputChange,
        ],
    ]

    return (
        <div className={styles.signup}>
            <div className={styles.signupWrapper}>
                <div className={styles.signupLeft}>
                    <div data-testid="signuplogo"
                        className={styles.signupLogo}>
                        Lamasocial
                    </div>
                    <span className={styles.signupDesc}>
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className={styles.signupRight}>
                    <form className={styles.signupBox}
                        onSubmit={handleSubmit}>
                        {
                            inputControls.map((navItem: any) => (
                                <div className={styles.field} key={navItem[0]}>
                                    <label className={styles.fieldLabel}
                                        htmlFor={navItem[3]}>
                                        {navItem[4]}
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
                        <button className={styles.signupButton}
                            type="submit">
                            Sign up
                        </button>
                        <button onClick={handleLoginButton}
                            className={styles.signupRegisterButton}>
                            Log into account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

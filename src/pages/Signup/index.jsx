import { createRef, useEffect } from 'react'
import axios from 'axios'

import Input from 'components/Input'
import { baseUrl } from 'constants/baseUrl'

import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom'
import { useUnprotectPage } from 'hooks/useUnprotectPage'
import { useForm } from "hooks/useForm"
import { sendData, signup } from 'apiCalls'
import FormErrors from 'components/FormErrors'

const Signup = () => {
    useUnprotectPage()

    const { form, onChange } = useForm({
        username: 'user_username40',
        email: 'user_email40@email.com',
        password: 'user_password',
        passwordAgain: 'user_password',
        usernameValid: true,
        emailValid: true,
        passwordValid: true,
        passwordAgainValid: true,
        formErrors: {
            username: '',
            email: '',
            password: '',
            passwordAgain: ''
        }
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        onChange(value, name)
    }

    useEffect(() => {
        let username = form.username;
        let usernameValid = username.match(/^([\w]{5,15})$/i)
        onChange(usernameValid, "usernameValid")

        console.log('form.emailValid', form.emailValid)
    }, [form.username])

    useEffect(() => {
        let email = form.email;
        let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        onChange(emailValid, "emailValid")
    }, [form.email])

    useEffect(() => {
        let password = form.password;
        let passwordValid = password.length >= 6;

        onChange(passwordValid, "passwordValid")
    }, [form.password])

    useEffect(() => {
        let password = form.password;
        let passwordAgain = form.passwordAgain;
        let passwordAgainValid = passwordAgain === password

        onChange(passwordAgainValid, "passwordAgainValid")
    }, [form.passwordAgain, form.passwordAgain])

    useEffect(() => {
        const formValidation = {
            usernameValid: form.usernameValid,
            emailValid: form.emailValid,
            passwordValid: form.passwordValid,
            passwordAgainValid: form.passwordAgainValid,
        }

        let formErrors = form.formErrors;

        formErrors.username = formValidation.usernameValid ? '' : ' is invalid';
        formErrors.email = formValidation.emailValid ? '' : ' is invalid';
        formErrors.password = formValidation.passwordValid ? '' : ' is too short';
        formErrors.passwordAgain = formValidation.passwordAgainValid === formValidation.passwordValid ? '' : ' passwords don\'t match';

        onChange(formErrors, "formErrors")
    }, [
        form.usernameValid,
        form.emailValid,
        form.passwordValid,
        form.passwordAgainValid,
        form.formErrors
    ])

    const handleLoginButton = () => {
        navigate("/login")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.passwordAgain !== form.password) {
            form.passwordAgain.setCustomValidity("Passwords don't match!")
        } else {
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
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signupWrapper}>
                <div className={styles.signupLeft}>
                    <h3 className={styles.signupLogo}>
                        Lamasocial
                    </h3>
                    <span className={styles.signupDesc}>
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className={styles.signupRight}>
                    <form className={styles.signupBox} onSubmit={handleSubmit}>
                        <Input
                            className={form.formErrors.username.length ? 'input--invalid' : ''}
                            name="username"
                            type="text"
                            placeholder="Username"
                            required
                            value={form.username}
                            handleInputChange={handleInputChange} />
                        <Input
                            className={form.formErrors.email.length ? 'input--invalid' : ''}
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            handleInputChange={handleInputChange} />
                        <Input
                            className={form.formErrors.password.length ? 'input--invalid' : ''}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            minLength="6"
                            value={form.password}
                            handleInputChange={handleInputChange} />
                        <Input
                            className={form.formErrors.passwordAgain.length ? 'input--invalid' : ''}
                            name="passwordAgain"
                            type="password"
                            placeholder="Password again"
                            required
                            value={form.passwordAgain}
                            handleInputChange={handleInputChange} />
                        <div className="panel panel-default">
                            <FormErrors formErrors={form.formErrors} />
                        </div>
                        <button className={styles.signupButton}
                            type="submit">
                            Sign up
                        </button>
                        <button onClick={handleLoginButton} className={styles.signupRegisterButton}>
                            Log into account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

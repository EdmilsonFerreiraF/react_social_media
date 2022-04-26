import { createRef, useEffect } from 'react'
import axios from 'axios'

import Input from 'components/Input/Input'
import { baseUrl } from 'constants/baseUrl'

import styles from "./Signup.module.css"
import { useNavigate } from 'react-router-dom'
import { useUnprotectPage } from 'hooks/useUnprotectPage'
import { useForm } from "hooks/useForm"
import { sendData } from 'apiCalls'
import FormErrors from 'components/FormErrors/FormErrors'

const Signup = () => {
    useUnprotectPage()

    const { form, onChange } = useForm({
        username: '',
        email: '',
        password: '',
        passwordAgain: '',
        usernameValid: false,
        emailValid: false,
        passwordValid: false,
        passwordAgainValid: false,
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

    const validateField = (fieldName, value) => {
        let fieldValidationErrors = form.formErrors;
        let usernameValid = form.usernameValid;
        let emailValid = form.emailValid;
        let passwordValid = form.passwordValid;
        let passwordAgainValid = form.passwordAgainValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.match(/^([\w]{5,15})$/i)
                fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid.length ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'passwordAgain':
                passwordAgainValid = value.length >= 6;
                fieldValidationErrors.passwordAgain = passwordAgainValid === passwordValid ? '' : ' passwords doesn\'t match';
                break;
            default:
                break;
        }

        onChange(fieldValidationErrors, "formErrors")
        onChange(emailValid, "emailValid")
        onChange(passwordValid, "passwordValid")
    }

    useEffect(() => {
        let username = form.username;
        let usernameValid;

        usernameValid = username.match(/^([\w]{5,15})$/i)
        onChange(usernameValid, "usernameValid")

        console.log('form.emailValid', form.emailValid)
    }, [form.username])

    useEffect(() => {
        let email = form.email;
        let emailValid

        emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        onChange(emailValid, "emailValid")
    }, [form.email])

    useEffect(() => {
        let password = form.password;
        let passwordValid

        passwordValid = password.length >= 6;

        onChange(passwordValid, "passwordValid")
    }, [form.password])

    useEffect(() => {
        let password = form.password;
        let passwordAgain = form.passwordAgain;
        let passwordAgainValid

        passwordAgainValid = passwordAgain === password

        onChange(passwordAgainValid, "passwordAgainValid")
    }, [form.passwordAgain, form.passwordAgain])

    useEffect(() => {
        let usernameValid = form.usernameValid
        let emailValid = form.emailValid
        let passwordValid = form.passwordValid
        let passwordAgainValid = form.passwordAgainValid

        let formErrors = form.formErrors;

        formErrors.username = usernameValid ? '' : ' is invalid';
        formErrors.email = emailValid ? '' : ' is invalid';
        formErrors.password = passwordValid ? '' : ' is too short';
        formErrors.passwordAgain = passwordAgainValid === passwordValid ? '' : ' passwords don\'t match';

        onChange(formErrors, "formErrors")
    }, [
        form.usernameValid,
        form.emailValid,
        form.passwordValid,
        form.passwordAgainValid,
        form.formErrors
    ])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.passwordAgain !== form.password) {
            form.passwordAgain.setCustomValidity("Passwords don't match!")
        } else {
            const user = {
                username: form.username,
                email: form.email,
                password: form.password,
            }

            // await axios.post(`${baseUrl}/user/signup`, user)

            const url = `${baseUrl}/user/signup`
            const data = user

            sendData(url, "post", data)

            navigate("/login")
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
                            name="username"
                            type="text"
                            placeholder="Username"
                            required
                            value={form.username}
                            handleInputChange={handleInputChange} />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            handleInputChange={handleInputChange} />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            minLength="6"
                            value={form.password}
                            handleInputChange={handleInputChange} />
                        <Input
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
                        <button className={styles.signupRegisterButton}>
                            Log into account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

import { useEffect } from 'react'
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

    const validateFields = () => {
        let usernameValid = form.username
            .match(/^([\w]{5,15})$/i)
        let emailValid = form.email
            .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let passwordValid = form.password
            .length > 8
        let passwordAgainValid = form.passwordAgain === form.password

        return {
            usernameValid,
            emailValid,
            passwordValid,
            passwordAgainValid,
        }
    }

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        onChange(value, name)
    }

    useEffect(() => {
        const validFields = validateFields()

        const formErrors = {
            username: '',
            email: '',
            password: '',
            passwordAgain: '',
        }

        formErrors.username = form.username === '' ||
            validFields.usernameValid ? '' : ' is invalid';
        formErrors.email = form.email === '' ||
            validFields.emailValid ? '' : ' is invalid';
        formErrors.password = form.password === '' ||
            validFields.passwordValid ? '' : ' is too short';
        formErrors.passwordAgain = form.passwordAgain === '' ||
            validFields.passwordAgainValid ? '' : ' passwords don\'t match';

        onChange(formErrors, "formErrors")
    }, [form.username, form.email, form.password, form.passwordAgain])

    const handleLoginButton = () => {
        navigate("/login")
    }

    const handleSubmit = async (e) => {
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
                        <label className={styles.fieldLabel}
                            htmlFor="email">
                            Username
                        </label>

                        <Input
                            className={form.formErrors.username.length ?
                                'inputInvalid'
                                :
                                ''}
                            name="username"
                            type="text"
                            placeholder="Username"
                            required
                            value={form.username}
                            invalid={!!form.formErrors.email.length}
                            errorIndex="error1"
                            handleInputChange={handleInputChange} />
                        <label className={styles.fieldLabel}
                            htmlFor="email">
                            Email
                        </label>

                        <Input
                            className={form.formErrors.email.length ?
                                'inputInvalid'
                                :
                                ''}
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            invalid={!!form.formErrors.email.length}
                            errorIndex="error2"
                            handleInputChange={handleInputChange} />
                        <label className={styles.fieldLabel}
                            htmlFor="email">
                            Password
                        </label>

                        <Input
                            className={form.formErrors.password.length
                                ? 'inputInvalid'
                                :
                                ''}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            minLength="6"
                            value={form.password}
                            invalid={!!form.formErrors.email.length}
                            errorIndex="error3"
                            handleInputChange={handleInputChange} />
                        <label className={styles.fieldLabel}
                            htmlFor="email">
                            Password again
                        </label>

                        <Input
                            className={form.formErrors.passwordAgain.length
                                ? 'inputInvalid'
                                :
                                ''}
                            name="passwordAgain"
                            type="password"
                            placeholder="Password again"
                            required
                            value={form.passwordAgain}
                            invalid={!!form.formErrors.email.length}
                            errorIndex="error4"
                            handleInputChange={handleInputChange} />
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

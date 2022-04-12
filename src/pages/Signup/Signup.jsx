import { createRef } from 'react'
import axios from 'axios'

import Input from '../../components/Input/Input'
import { baseUrl } from '../../constants/baseUrl'

import styles from "./Signup.module.css"
import { useNavigate } from 'react-router-dom'
import { useUnprotectPage } from '../../hooks/useUnprotectPage'
import { useForm } from "../../hooks/useForm"

const Signup = () => {
    useUnprotectPage()

    const { form, onChange } = useForm({
        username: '',
        email: '',
        password: '',
        passwordAgain: '',
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        onChange(e.target.value, e.target.name)
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
            }

            try {
                await axios.post(`${baseUrl}/user/signup`, user)
                navigate("/login")
            } catch (err) {
                console.log(err)
            }
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
                        <Input name="text" type="text" placeholder="Username" required value={form.username} onChange={handleInputChange} />
                        <Input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleInputChange} />
                        <Input name="password" type="password" placeholder="Password" required minLength="6" value={form.password} onChange={handleInputChange} />
                        <Input name="password" type="password" placeholder="Password again" required value={form.passwordAgain} onChange={handleInputChange} />

                        <button className={styles.signupButton} type="submit">
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

import { createRef } from 'react'
import axios from 'axios'

import Input from '../../components/Input/Input'
import { baseUrl } from '../../constants/baseUrl'

import styles from "./Signup.module.css"
import { useNavigate } from 'react-router-dom'
import { useUnprotectPage } from '../../hooks/useUnprotectPage'

const Signup = () => {
    useUnprotectPage()

  const username = createRef()
  const email = createRef()
  const password = createRef()
  const passwordAgain = createRef()

  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!")
    } else {
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        try {
            await axios.post(`${baseUrl}/user/signup`, user)
            navigate("/login")
        } catch(err) {
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
                    <Input type="text" placeholder="Username" required ref={username}/>
                    <Input type="email" placeholder="Email" required ref={email}/>
                    <Input type="password" placeholder="Password" required minLength="6" ref={password}/>
                    <Input type="password" placeholder="Password again" required ref={passwordAgain}/>
                    
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

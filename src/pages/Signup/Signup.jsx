import Input from '../../components/Input/Input'

import styles from "./Signup.module.css"

const Signup = () => {
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
                <div className={styles.signupBox}>
                    <Input type="text" placeholder="Username"/>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Input type="password" placeholder="Password again"/>
                    
                    <button className={styles.signupButton}>
                        Sign up
                    </button>
                    <button className={styles.signupRegisterButton}>
                        Log into account
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;

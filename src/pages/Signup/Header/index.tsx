import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.signupLeft}>
      <div data-testid="signuplogo" className={styles.signupLogo}>
        Lamasocial
      </div>
      <span className={styles.signupDesc}>
        Connect with friends and the world around you on Lamasocial
      </span>
    </div>
  );
};

export default Header;

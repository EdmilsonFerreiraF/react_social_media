import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.loginLeft}>
      <h3 data-testid="loginLogo" className={styles.loginLogo}>
        Lamasocial
      </h3>
      <h2 className={styles.loginDesc}>
        Connect with friends and the world around you on Lamasocial
      </h2>
    </div>
  );
};

export default Header;

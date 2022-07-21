import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import styles from "./style.module.css";

import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { goToSignup } from "routes/coordinator";

const Buttons = () => {
  const navigate = useNavigate();

  const { isFetching, dispatch } = useContext(
    AuthContext
  ) as AuthContextInterface;

  const handleRegisterButton = () => {
    goToSignup(navigate);
  };

  return (
    <>
      <button
        className={styles.loginButton}
        type="submit"
        disabled={isFetching}
      >
        {isFetching ? <CircularProgress size="20" /> : "Login"}
      </button>
      <span className={styles.loginForgot}>Forgot password?</span>
      <button
        onClick={handleRegisterButton}
        className={styles.loginRegisterButton}
      >
        {isFetching ? <CircularProgress size="20" /> : "Create a new account"}
      </button>
    </>
  );
};

export default Buttons;

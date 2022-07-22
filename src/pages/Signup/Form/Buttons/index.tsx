import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  };

  return (
    <>
      <button className={styles.signupButton} type="submit">
        Sign up
      </button>
      <button
        onClick={handleLoginButton}
        className={styles.signupRegisterButton}
      >
        Log into account
      </button>
    </>
  );
};

export default Buttons;

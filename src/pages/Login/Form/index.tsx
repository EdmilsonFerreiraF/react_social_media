import { CircularProgress } from "@mui/material";
import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginCall } from "apiCalls";
import FormErrors from "components/FormErrors";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { goToSignup } from "routes/coordinator";
import Fields from "./Fields";
import styles from "./style.module.css";

const Form = () => {
  const navigate = useNavigate();

  const { isFetching, dispatch } = useContext(
    AuthContext
  ) as AuthContextInterface;

  const { form, onChange } = useForm({
    email: "",
    password: "",
    formErrors: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    loginCall(
      {
        email: form.email,
        password: form.password,
      },
      dispatch,
      navigate
    );
  };

  const handleRegisterButton = () => {
    goToSignup(navigate);
  };

  return (
    <div className={styles.loginRight}>
      <form className={styles.loginBox} onSubmit={handleSubmit}>
        <Fields form={form} onChange={onChange} />

        <div className="panel panel-default">
          <FormErrors formErrors={form.formErrors} />
        </div>
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
      </form>
    </div>
  );
};

export default Form;

import { useForm } from "hooks/useForm";
import { FormEvent } from "react";

import { signup } from "apiCalls";
import FormErrors from "components/FormErrors";
import { baseUrl } from "constants/baseUrl";
import Buttons from "./Buttons";
import Fields from "./Fields";
import styles from "./style.module.css";

const Form = () => {
  const { form, onChange } = useForm({
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
    formErrors: {
      username: "",
      email: "",
      password: "",
      passwordAgain: "",
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const user = {
      username: form.username,
      email: form.email,
      password: form.password,
      isAdmin: false,
    };

    const url = `${baseUrl}/user/signup`;
    const data = user;

    signup(url, data);
  };

  return (
    <div className={styles.signupRight}>
      <form className={styles.signupBox} onSubmit={handleSubmit}>
        <Fields form={form} onChange={onChange} />

        <div className="panel panel-default">
          <FormErrors formErrors={form.formErrors} />
        </div>
        <Buttons />
      </form>
    </div>
  );
};

export default Form;

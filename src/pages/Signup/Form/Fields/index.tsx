import Input from "components/Input";
import { hasError, SignupFields } from "helpers/hasError";
import { FormEvent } from "react";
import styles from "./style.module.css";

export type Form = {
  username: string;
  email: string;
  password: string;
  passwordAgain: string;
  formErrors: {
    username: string;
    email: string;
    password: string;
    passwordAgain: string;
  };
};

type Props = {
  form: Form;
  onChange: (value: any, name: string) => void;
};

const Fields = ({ form, onChange }: Props) => {
  const handleInputChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;

    const name = target.name;
    const value = target.value;

    onChange(value, name);
    validatefields(value, name);
  };

  const validatefields = (value: any, name: string) => {
    let usernameValid = value.match(/^([\w]{5,15})$/i);
    let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let passwordValid = value.length > 8;
    let passwordAgainValid = value === form.password;

    const formErrors = { ...form.formErrors };

    if (name === "username") {
      formErrors.username = value === "" || usernameValid ? "" : " is invalid";
    }

    if (name === "email") {
      formErrors.email = value === "" || emailValid ? "" : " is invalid";
    }

    if (name === "password") {
      formErrors.password =
        value === "" || passwordValid ? "" : " is too short";
    }

    if (name === "passwordAgain") {
      formErrors.passwordAgain =
        value === "" || passwordAgainValid ? "" : " passwords don't match";
    }

    onChange(formErrors, "formErrors");
  };

  type InputControls = [
    number,
    string,
    string,
    string | undefined,
    string | undefined,
    any,
    boolean,
    (e: FormEvent) => void
  ];

  const checkError = (entity: keyof SignupFields) =>
    hasError(entity, form.formErrors);

  const inputControls: InputControls[] = [
    [
      0,
      checkError("username") ? "inputInvalid" : "",
      "username",
      "text",
      ,
      form.username,
      !!checkError("username"),
      handleInputChange,
    ],
    [
      1,
      checkError("email") ? "inputInvalid" : "",
      "email",
      ,
      ,
      form.email,
      !!checkError("email"),
      handleInputChange,
    ],
    [
      2,
      checkError("password") ? "inputInvalid" : "",
      "password",
      ,
      ,
      form.password,
      !!checkError("password"),
      handleInputChange,
    ],
    [
      3,
      checkError("passwordAgain") ? "inputInvalid" : "",
      "passwordAgain",
      "password",
      "Password again",
      form.passwordAgain,
      !!checkError("passwordAgain"),
      handleInputChange,
    ],
  ];

  return (
    <>
      {inputControls.map((inputControl: InputControls) => {
        const inputProps = {
          className: inputControl[1],
          name: inputControl[2],
          type: inputControl[3] as string,
          placeholder: inputControl[4] as string,
          value: inputControl[5],
          invalid: inputControl[6],
          handleInputChange: inputControl[7],
        };

        return (
          <div className={styles.field} key={inputControl[0]}>
            <label className={styles.fieldLabel} htmlFor={inputControl[3]}>
              {inputControl[4]}
            </label>

            <Input {...inputProps} />
          </div>
        );
      })}
    </>
  );
};

export default Fields;

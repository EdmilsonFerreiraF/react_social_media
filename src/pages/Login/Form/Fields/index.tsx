import Input from "components/Input";
import { hasError, SignupFields } from "helpers/hasError";
import { FormEvent } from "react";
import styles from "./style.module.css";

export type Form = {
  email: string;
  password: string;
  formErrors: {
    email: string;
    password: string;
  };
};

type Props = {
  form: Form;
  onChange: (value: any, name: string) => void;
};

const Fields = ({ form, onChange }: Props) => {
  const handleInputChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const name: string = target.name;
    const value: string = target.value;

    onChange(value, name);
    validateFields(value, name);
  };

  const validateFields = (value: any, name: string) => {
    let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let passwordValid = value.length >= 6;

    const formErrors = { ...form.formErrors };

    if (name === "email") {
      formErrors.email = value === "" || emailValid ? "" : " is invalid";
    }

    if (name === "password") {
      formErrors.password =
        value === "" || passwordValid ? "" : " is too short";
    }

    onChange(formErrors, "formErrors");
  };

  type inputFields = [
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

  const inputFields: inputFields[] = [
    [
      0,
      checkError("email") ? "inputInvalid" : "",
      "email",
      ,
      ,
      form.email,
      !!checkError("email"),
      handleInputChange,
    ],
    [
      1,
      checkError("password") ? "inputInvalid" : "",
      "password",
      ,
      ,
      form.password,
      !!checkError("password"),
      handleInputChange,
    ],
  ];

  return (
    <>
      {inputFields.map((navItem: any) => {
        const inputProps = {
          className: navItem[1],
          name: navItem[2],
          type: navItem[3],
          placeholder: navItem[4],
          value: navItem[5],
          invalid: navItem[6],
          handleInputChange: navItem[7],
        };

        return (
          <div className={styles.field} key={navItem[0]}>
            <label className={styles.fieldLabel} htmlFor={navItem[3]}>
              {navItem[2]}
            </label>

            <Input {...inputProps} />
          </div>
        );
      })}
    </>
  );
};

export default Fields;

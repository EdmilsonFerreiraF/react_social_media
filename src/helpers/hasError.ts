import { Form } from "pages/Login/Form/Fields";

export type SignupFields = { username?: string, email: string, password: string, passwordAgain?: string }

export const hasError = (entity: keyof SignupFields, formErrors: SignupFields) =>
    formErrors[entity]?.length;
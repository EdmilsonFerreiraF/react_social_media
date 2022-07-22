import { Form } from "pages/Login/Form/Fields";

type SignupErrors = { email: string, password: string, username?: string, passwordAgain?: string }

export const hasError = (entity: keyof SignupErrors, formErrors: SignupErrors) =>
    formErrors[entity]?.length;
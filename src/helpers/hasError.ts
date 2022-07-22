import { Form } from "pages/Login/Form/Fields";

export const hasError = (entity: keyof Form["formErrors"], formErrors: Form["formErrors"]) =>
    formErrors[entity].length;
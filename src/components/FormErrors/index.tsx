import React from 'react'

import styles from './style.module.css'

type LoginErrors = {
    email: string;
    password: string;
}

type SignupErrors = {
    username: string;
    email: string;
    password: string;
    passwordAgain: string;
}

type IFormErrors = LoginErrors | SignupErrors

const FormErrors = ({ formErrors }: { formErrors: IFormErrors }) => {
    const formErrorsKeys = Object.keys(formErrors) as Array<keyof IFormErrors>

    return (
        <div className={styles.formErrors}>
            {
                formErrorsKeys.map(
                    (fieldName: keyof IFormErrors, i: number) => {
                        if (formErrors[fieldName].length > 0) {
                            return (
                                <p className={styles.errorItem}
                                    data-testid="error line"
                                    key={i}
                                    id={`error${i + 1}`}
                                >
                                    {fieldName} {formErrors[fieldName]}
                                </p>
                            )
                        } else {
                            return ''
                        }
                    }
                )
            }
        </div>
    )
}

export default FormErrors
import React from 'react'
import styles from './FormErrors.module.css'

const FormErrors = ({ formErrors }) => {
    return (
        <div className={styles.formErrors}>
            {Object.keys(formErrors).map((fieldName, i) => {
                if (formErrors[fieldName].length > 0) {
                    return (
                        <p className={styles.errorItem} key={i}>{fieldName} {formErrors[fieldName]}</p>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    )
}

export default FormErrors
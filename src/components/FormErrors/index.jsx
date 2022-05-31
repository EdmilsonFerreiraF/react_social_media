import React from 'react'

import styles from './style.module.css'

const FormErrors = ({ formErrors }) => {
    return (
        <div className={styles.formErrors}>
            {Object.keys(formErrors).map((fieldName, i) => {
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
                    return '';
                }
            })}
        </div>
    )
}

export default FormErrors
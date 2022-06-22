import React from 'react'
import styles from './style.module.css'
import errorImg from 'img/error.webp'

type Props = {
  error: any,
  resetErrorBoundary: () => void
}

const ErrorFallback = ({
  error,
  resetErrorBoundary
}: Props): JSX.Element => {
  return (
    <div role="alert" className={styles.errorFallback}>
      <p className={styles.error}>
        Something went wrong:
      </p>
      <img className={styles.errorImage}
        src={errorImg} alt="Broken robot error" />
      <pre data-testid="error message"
        className={styles.errorMessage}>
        {error.message}
      </pre>
      <button className={styles.tryAgainBtn}
        onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
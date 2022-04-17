import styles from './ErrorFallback.module.css'

const ErrorFallback = ({error, resetErrorBoundary}) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div role="alert" className={styles.errorFallback}>
      <p className={styles.error}>Something went wrong:</p>
      <img className={styles.errorImage} src={`${publicFolder}/error.png`} alt="Broken robot error" />
      <pre className={styles.errorMessage}>{error.message}</pre>
      <button className={styles.tryAgainBtn} onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback
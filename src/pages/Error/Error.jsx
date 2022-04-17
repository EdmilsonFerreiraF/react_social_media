import { goToIndex } from '../../routes/coordinator'
import styles from './Error.module.css'

const Error = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  const handleBackToHome = () => {
      goToIndex()
  }

  return (
    <div role="alert" className={styles.errorPage}>
      <p className={styles.error}>This page did not exists</p>
      <img className={styles.errorImage} src={`${publicFolder}/error404.png`} alt="Broken robot 404 error" />
      <button className={styles.backToHomeBtn} onClick={handleBackToHome}>Back to home</button>
    </div>
  )
}

export default Error
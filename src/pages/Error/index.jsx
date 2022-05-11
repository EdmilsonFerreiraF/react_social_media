import { goToIndex } from 'routes/coordinator'
import styles from './style.module.css'
import error404Img from 'img/error404.png'

const Error = () => {
  const handleBackToHome = () => {
      goToIndex()
  }

  return (
    <div role="alert" className={styles.errorPage}>
      <p className={styles.error}>This page did not exists</p>
      <img className={styles.errorImage} src={error404Img} alt="Broken robot 404 error" />
      <button className={styles.backToHomeBtn} onClick={handleBackToHome}>Back to home</button>
    </div>
  )
}

export default Error
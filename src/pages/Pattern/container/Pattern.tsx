import UploadImage from '@/common/components/UploadImage'
import styles from './Pattern.module.scss'

const Pattern = () => {
  // console.log('aaa')
  return (
    <div className={styles.wrapper}>
      <h1>Common Components</h1>
      <div className={styles.components}>
        <UploadImage />
      </div>
    </div>
  )
}

export default Pattern

import styles from './UploadImage.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'
import useUploadImage from './hooks/useUploadImage'

const UploadImage = () => {
  const { urlImgBase64, convertToBase64 } = useUploadImage()

  const hdUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    convertToBase64(e)
  }

  return (
    <div className={styles.wrapper}>
      <h3>Upload Image</h3>
      <div className={styles.pictureContainer}>
        <label htmlFor='mypicture'>
          <FontAwesomeIcon icon={faCloudArrowUp} />
          <span>Upload image preview</span>
          {urlImgBase64 && <img src={urlImgBase64} className={styles.picturePreview} />}
        </label>
        <input type='file' hidden id='mypicture' onChange={hdUploadImage} />
      </div>
    </div>
  )
}

export default UploadImage

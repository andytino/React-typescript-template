import { useState } from 'react'

const useUploadImage = () => {
  const [urlImgBase64, setUrlImgBase64] = useState<string | null | undefined>(null)

  const convertToBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length > 0) {
      const file = e.target.files[0]
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onloadend = function (file) {
        const textBase64 = file.target?.result as string
        setUrlImgBase64(textBase64)
      }
    }
  }

  return {
    convertToBase64,
    urlImgBase64
  }
}

export default useUploadImage

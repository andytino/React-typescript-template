import styles from './Avatar.module.scss'

interface IAvatarProps {
  username: string
  src?: string | null
}

const Avatar = ({ src, username }: IAvatarProps) => {
  return (
    <>
      {src ? (
        <img src={src} className={styles.avatar} />
      ) : (
        <span data-letters={username.charAt(0)}></span>
      )}
    </>
  )
}

export default Avatar

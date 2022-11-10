import { Button } from '../../Button'
import styles from './Header.module.scss'

type User = {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin?: () => void
  onLogout: () => void
  onCreateAccount?: () => void
}

export const Header = ({ user, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div>
          {/* Logo */}
          <div></div>
          {/* Name Page */}
          <h1></h1>
        </div>
        <div>
          {user ? (
            <>
              <span className={styles.welcome}>
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size='small' onClick={onLogout} label='Log out' />
            </>
          ) : (
            <>
              {/* <Button size='small' onClick={onLogin} label='Log in' /> */}
              <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

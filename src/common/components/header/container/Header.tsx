import { USER_ROLES } from '@/common/ts/enums'
import { IUserState } from '@/store/user'
import { Button } from '../../Button'
import styles from './Header.module.scss'

interface HeaderProps {
  user?: IUserState
  onLogin?: () => void
  onLogout: () => void
  onCreateAccount?: () => void
  layout: string
}

export const Header = ({ user, onLogout, onCreateAccount, layout }: HeaderProps) => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div>
          {/* Logo */}
          <div></div>
          {/* Name Page */}
          <h1></h1>

          {/*---- Info Test ---- */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontWeight: '500' }}>layout: {layout}</span>
            <span style={{ fontWeight: '500' }}>
              role: {user?.role && USER_ROLES[user.role].toLowerCase()}
            </span>
          </div>
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

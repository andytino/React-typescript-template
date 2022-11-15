import clsx from 'clsx'
import styles from './button.module.scss'
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary'
  return (
    <button
      type='button'
      className={clsx(styles.button, styles[mode], styles[`button--${size}`])}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

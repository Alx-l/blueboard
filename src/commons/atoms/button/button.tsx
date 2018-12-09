import * as styles from './button.scss'

import * as React from 'react'
import classnames from 'classnames'

type Props = {
  label: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
  isSubmit?: boolean
}

export const Button = (props: Props) => {
  const { label, isSubmit } = props
  const className = classnames(styles.root, props.className)

  return (
    <button type={isSubmit ? 'submit' : 'button'} className={className}>
      {label}
    </button>
  )
}

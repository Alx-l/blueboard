import * as styles from './icon.scss'

import classnames from 'classnames'

import * as React from 'react'

type Props = {
  svg: React.ReactElement<{}>
  size?: number
  className?: string
  tabIndex?: number
  onClick?: () => void
  onKeyDown?: (e: React.KeyboardEvent) => void
}

export const Icon = (props: Props) => {
  const { className: classNameProp, size = 24, svg, onClick: onclick, onKeyDown ,tabIndex } = props

  const className = classnames(styles.root, classNameProp)

  return (
    <span
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      onClick={onclick}
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {svg}
    </span>
  )
}

import * as styles from './title.scss'

import * as React from 'react'
import classnames from 'classnames'

type Props = React.Props<{}> & {
  label: string
  description: string
  hasEllipsis?: boolean
  className?: string
  invertedColors?: boolean
}

export const Title = (props: Props) => {
  const { label, description, hasEllipsis, invertedColors } = props

  const className = classnames(props.className, invertedColors && styles.isColorInverted)
  const ellipsis = hasEllipsis && <span className={styles.ellipsis}>....</span>

  return (
    <div className={className}>
      <div className={styles.label}>{label}</div>
      <div className={styles.description}>
        {description}
        {ellipsis}
      </div>
    </div>
  )
}

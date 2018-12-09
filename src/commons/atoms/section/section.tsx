import * as styles from './section.scss'

import * as React from 'react'
import classnames from 'classnames'

import { Title } from 'commons/atoms/title'

type Props = React.Props<{}> & {
  label: string
  description: string
  hasEllipsis?: boolean
  isInverted?: boolean
  backgroundSize?: 'cover' | 'contain'
  backgroundUrl: string
}

export const Section = (props: Props) => {
  const {
    children,
    label,
    description,
    hasEllipsis,
    backgroundSize = 'cover',
    isInverted,
    backgroundUrl
  } = props

  const triangleShape = (
    <svg
      className={classnames(styles.shape, isInverted && styles.isInverted)}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon fill="#ff6d6d" points="0,100 100,0 100,100" />
    </svg>
  )

  const contentBlock = (
    <div className={styles.content} key="contentBlock">
      <div className={styles.children}>
        <Title
          className={styles.title}
          label={label}
          description={description}
          hasEllipsis={hasEllipsis}
        />
        {children}
      </div>
    </div>
  )

  const bgStyles = { backgroundImage: `url(${backgroundUrl})`, backgroundSize }

  const backgroundBlock = (
    <div key="backgroundBlock" style={bgStyles} className={styles.background}>
      {triangleShape}
    </div>
  )

  const blocks = [contentBlock, backgroundBlock]

  return (
    <section className={styles.root}>{isInverted ? blocks.reverse() : blocks}</section>
  )
}

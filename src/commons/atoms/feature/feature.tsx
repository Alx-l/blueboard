import * as styles from './feature.scss'

import * as React from 'react'

type Props = React.Props<{}> & {
  iconUrl: string
  title: string
}

export const Feature = (props: Props) => {
  const { iconUrl, title, children } = props

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <img src={iconUrl} alt="icon" />
      </div>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  )
}

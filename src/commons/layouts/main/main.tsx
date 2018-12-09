import * as styles from './main.scss'

import * as React from 'react'

export const Main = (props: React.Props<{}>) => (
  <div className={styles.root}>
    <div className={styles.children}>{props.children}</div>
  </div>
)

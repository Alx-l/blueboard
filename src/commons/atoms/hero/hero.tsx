import * as styles from './hero.scss'

import * as React from 'react'
import classnames from 'classnames'

type Props = React.Props<{}> & {
  className?: string
}

export const Hero = (props: Props) => {
  const className = classnames(styles.root, props.className)

  return <div className={className}>{props.children}</div>
}

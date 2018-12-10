import * as styles from './errorTransition.scss'
const timeout = parseInt(styles.timeout, 10)

import * as React from 'react'

import { CSSAnimate } from 'commons/atoms/animate'

type Props = {
  toggle: boolean
}

export class ErrorTransition extends React.PureComponent<Props, {}> {
  render() {
    const { children, toggle } = this.props

    return (
      <CSSAnimate
        onEnterClassName={() => styles.slideDown}
        appear={true}
        timeout={timeout}
        toggle={toggle}
      >
        <div className={styles.root}>{children}</div>
      </CSSAnimate>
    )
  }
}

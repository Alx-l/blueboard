import * as styles from './errorTransition.scss'

import * as React from 'react'

import { CSSAnimate } from 'commons/atoms/animate'

const timeout = 250

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

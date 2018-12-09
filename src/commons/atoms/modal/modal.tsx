import * as styles from './modal.scss'

import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'

import { Icon } from 'commons/atoms/icon'
import { Close } from 'commons/svg'
import { CSSAnimate } from 'commons/atoms/animate'

type Props = {
  shouldShowModal: boolean
  onClose: () => void
}

type State = {
  showModal: boolean
}

export class Modal extends React.Component<Props, State> {
  modalRoot = document.getElementById('modal')
  el = document.createElement('div')
  state: Readonly<State> = {
    showModal: false
  }

  componentDidMount() {
    if (this.modalRoot) {
      this.modalRoot.appendChild(this.el)
    }
  }

  componentWillUnmount() {
    if (this.modalRoot) {
      this.modalRoot.removeChild(this.el)
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { props, state } = this
    const propsHaveChanged = prevProps.shouldShowModal !== props.shouldShowModal
    if (propsHaveChanged && props.shouldShowModal && !state.showModal) {
      this.setState({ showModal: true })
    }
  }

  handleClose = () => {
    this.setState({ showModal: false })
    this.props.onClose()
  }

  render() {
    const { children } = this.props
    const { showModal } = this.state

    showModal
      ? (document.documentElement.style.overflow = 'hidden')
      : (document.documentElement.style.overflow = 'initial')

    return (
      <CSSAnimate
        onEnterClassName={() => styles.fadeIn}
        onExitClassName={() => styles.fadeOut}
        appear={true}
        timeout={250}
        toggle={showModal}
      >
        {createPortal(
          <div className={styles.root}>
            <div className={classnames(styles.children, !showModal && styles.exitUp)}>
              <Icon
                onclick={this.handleClose}
                className={styles.icon}
                svg={Close('#ff6d6d')}
                size={40}
              />
              {children}
            </div>
          </div>,
          this.el
        )}
      </CSSAnimate>
    )
  }
}

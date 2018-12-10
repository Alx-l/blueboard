import * as styles from './modal.scss'

import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'

import { Icon } from 'commons/atoms/icon'
import { Close } from 'commons/svg'
import { CSSAnimate } from 'commons/atoms/animate'

type Props = {
  showModal: boolean
  onClose: () => void
}

export class Modal extends React.Component<Props> {
  modalRoot = document.getElementById('modal')

  handleClick = () => this.props.onClose()

  handleKeyDown = (e: React.KeyboardEvent) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.props.onClose()
  }

  handleScrolling = (action: 'prevent' | 'allow') => {
    const html = document.documentElement
    const body = document.body
    const { top } = body.getBoundingClientRect()

    if (action === 'allow') {
      html.classList.remove(styles.noScroll)
      body.classList.remove(styles.noScroll)
      window.scroll(0, top * -1)
    } else {
      html.classList.add(styles.noScroll)
      body.classList.add(styles.noScroll)
      html.style.top = `${top}px`
    }
  }

  render() {
    const { children, showModal } = this.props

    this.handleScrolling(showModal ? 'prevent' : 'allow')

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
                tabIndex={1}
                onKeyDown={this.handleKeyDown}
                onClick={this.handleClick}
                className={styles.icon}
                svg={Close('#ff6d6d')}
                size={40}
              />
              {children}
            </div>
          </div>,
          this.modalRoot as HTMLElement
        )}
      </CSSAnimate>
    )
  }
}

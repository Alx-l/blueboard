import * as React from 'react'
import * as ReactTransition from 'react-transition-group'
import { Option } from 'space-lift'

type AnimateProps = {
  onEnter?: (el: HTMLElement) => void
  onExit?: (el: HTMLElement) => void
  onExited?: (el: HTMLElement) => void
  toggle: boolean
  appear?: boolean
  timeout: number
  children: React.ReactNode
}

export class Animate extends React.Component<AnimateProps> {
  render() {
    const {
      onEnter,
      onExit,
      onExited,
      timeout,
      toggle,
      children,
      appear = false
    } = this.props

    return (
      <ReactTransition.Transition
        in={toggle}
        appear={appear}
        onEnter={onEnter}
        onExit={onExit}
        onExited={onExited}
        timeout={timeout}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <>{children}</>
      </ReactTransition.Transition>
    )
  }
}

type CSSAnimateProps = {
  onEnterClassName?: () => string
  onExitClassName?: () => string
  onExited?: (el: HTMLElement) => void
  toggle: boolean
  appear?: boolean
  timeout: number
  children: React.ReactNode
}

export class CSSAnimate extends React.Component<CSSAnimateProps> {
  maybeEnterClassName: Option<string>
  maybeExitClassName: Option<string>
  constructor(props: CSSAnimateProps) {
    super(props)
    const { onEnterClassName, onExitClassName } = props
    // Save the returned values of the "onEnterClassName" and "onExitClassname" functions,
    // to avoid having "typestyle" re-generate the <style> tag inside the head
    // on the fly everytime, potentially leading to some visual glitches
    this.maybeEnterClassName = Option(onEnterClassName).map(onEnter => onEnter())
    this.maybeExitClassName = Option(onExitClassName).map(onExit => onExit())
  }

  render() {
    const { onExited, children, toggle, appear, timeout } = this.props
    const { maybeEnterClassName, maybeExitClassName } = this

    return (
      <Animate
        toggle={toggle}
        onEnter={el => {
          maybeEnterClassName.map(cls => el.classList.add(cls))
          maybeExitClassName.map(cls => el.classList.remove(cls))
        }}
        onExit={el => {
          maybeExitClassName.map(cls => el.classList.add(cls))
          maybeEnterClassName.map(cls => el.classList.remove(cls))
        }}
        onExited={onExited}
        timeout={timeout}
        appear={appear}
      >
        <>{children}</>
      </Animate>
    )
  }
}

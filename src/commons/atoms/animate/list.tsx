import * as React from 'react'
import * as ReactTransition from 'react-transition-group'

type Props<T> = {
  list: T[]
  timeout: number
  placeholder?: React.ReactElement<{}>
  setKey: (item: T) => string | number
  renderItem: (item: T) => React.ReactElement<{}>
  onEnter?: (el: HTMLElement, index: number) => void
  onExit?: (el: HTMLElement, index: number) => void
  appear?: boolean
}

type ReactTransitionClassNames = {
  onEnter?: string
  onExit?: string
}

type State = {
  showPlaceholder: boolean
}

export class AnimateList<T> extends React.Component<Props<T>, State> {
  state: Readonly<State> = {
    showPlaceholder: false
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.setState({ showPlaceholder: true })
    }
  }

  render() {
    const {
      list,
      timeout,
      setKey,
      renderItem,
      onEnter,
      onExit,
      appear = true,
      placeholder = <span>nothing</span>
    } = this.props

    // this empty "_classNames" object is used as a placeholder,
    // because it is required inside the "CSSTransition" component
    const _classNames: ReactTransitionClassNames = {}
    const { showPlaceholder } = this.state

    return showPlaceholder ? (
      placeholder
    ) : (
      <ReactTransition.TransitionGroup component={null} appear={appear}>
        {list.map((item: T, index) => (
          <ReactTransition.CSSTransition
            timeout={timeout}
            key={setKey(item)}
            onEnter={onEnter ? el => onEnter(el, index) : undefined}
            onExit={onExit ? el => onExit(el, index) : undefined}
            onExited={() => {
              if (list.length === 1) {
                // the last item is about to be removed
                this.setState({ showPlaceholder: true })
              }
            }}
            classNames={{
              enterActive: _classNames.onEnter,
              exitActive: _classNames.onExit
            }}
          >
            {renderItem(item)}
          </ReactTransition.CSSTransition>
        ))}
      </ReactTransition.TransitionGroup>
    )
  }
}

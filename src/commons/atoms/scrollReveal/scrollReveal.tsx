import * as styles from './scrollReveal.scss'

import * as React from 'react'
import { Provider, Subscribe } from 'unstated'

import { ScrollStore, scrollStore as _scrollStore, Direction } from './store'

type Props = {
  slideFrom: Direction
  replayAnimation?: boolean
  children?: React.ReactNode
}

class ScrollComponent extends React.PureComponent<
  Props & { scrollStore: ScrollStore },
  {}
> {
  root = React.createRef<HTMLDivElement>()

  componentDidMount() {
    const { scrollStore, slideFrom, replayAnimation = true } = this.props
    const { root } = this

    if (root.current) {
      scrollStore.addItem({
        node: root.current,
        slideFrom,
        replayAnimation
      })
    }
  }

  componentWillUnmount() {
    const { root } = this
    const { scrollStore } = this.props

    if (root.current) {
      scrollStore.removeItem(root.current.getAttribute('data-id') || '')
    }
  }

  render() {
    return (
      <div className={styles.root} ref={this.root}>
        {this.props.children}
      </div>
    )
  }
}

const Subscription = (props: Props) => (
  <Subscribe to={[ScrollStore]}>
    {(scrollStore: ScrollStore) => (
      <ScrollComponent {...props} scrollStore={scrollStore} />
    )}
  </Subscribe>
)

export const ScrollReveal = (props: Props) => (
  <Provider inject={[_scrollStore]}>
    <Subscription {...props} />
  </Provider>
)

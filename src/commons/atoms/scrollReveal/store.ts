import * as styles from './styles.scss'

import { Container } from 'unstated'
import lift, { update } from 'space-lift'

import { throttle } from 'utils'

type Item = {
  node: HTMLElement
  id?: string
  slideFrom: Direction
  shouldReplayAnimation: boolean
}

type Store = {
  items: Item[]
  isTicking: boolean
}

export type Direction = 'top' | 'right' | 'bottom' | 'left'

export class ScrollStore extends Container<Store> {
  constructor() {
    super()
    this.state = {
      items: [],
      isTicking: false
    }

    document.addEventListener('scroll', this.requestTick, { passive: true })
  }

  requestTick = throttle(() => {
    if (!this.state.isTicking) {
      window.requestAnimationFrame(this.handleScroll)
      this.setState({ isTicking: true })
    }
  }, 250)

  handleScroll = async () => {
    const { items } = this.state
    items.forEach(async ({ node, slideFrom, shouldReplayAnimation = true }) => {
      const documentHeight = document.body.offsetHeight
      const { top, bottom } = node.getBoundingClientRect()
      const isIntoView = documentHeight - top > 0 && bottom > 0

      if (isIntoView) {
        node.classList.add(styles[slideFrom])
      } else {
        if (shouldReplayAnimation) node.classList.remove(styles[slideFrom])
      }

      await this.setState({ isTicking: false })
    })
  }

  addItem = async (item: Item) => {
    await this.setState(state => {
      const id = `${Date.now()}-${state.items.length}`
      item.node.setAttribute('data-id', id)

      return {
        items: [
          ...state.items,
          update(item, {
            id
          })
        ]
      }
    })

    // call handleScroll on init to let the animations kick in when user lands on the page,
    // before he had a chance to scroll
    this.handleScroll()
  }

  removeItem = async (id: string) => {
    const { items } = this.state
    const updatedItems = lift(items)
      .findIndex(item => item.id === id)
      .map(index => lift(items).removeAt(index))
      .getOrElse(items)

    await this.setState({ items: updatedItems })

    if (items.length === 0) {
      document.removeEventListener('scroll', this.requestTick)
    }
  }
}

export const scrollStore = new ScrollStore()

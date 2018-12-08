import { Container } from 'unstated'

type Store = {
  count: number
}

export class CounterStore extends Container<Store> {
  state: Readonly<Store> = {
    count: 0
  }

  incrementBy = (val: number) => {
    this.setState(state => ({ count: state.count + val }))
  }
}

export const counterStore = new CounterStore()

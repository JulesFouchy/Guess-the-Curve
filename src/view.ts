import { h } from 'hyperapp'
import type { State } from './state'
import Plot from './components/Plot'

export default (state: State) => h('div', {}, [
    Plot(state.functions[0], state.functions[1]),
])
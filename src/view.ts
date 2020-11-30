import { h } from 'hyperapp'
import type { State } from './state'
import Plot from './components/Plot'

export default (state: State) => {
    return h(
        'div', {}, 
        [
            h('h1', {}, "Can you make the blue curve match the red one ?"),
            h('h2', {}, "Type in any expression and press enter when you're done"),
            Plot(state.functions[0], state.functions[1]),
        ]
    )
}
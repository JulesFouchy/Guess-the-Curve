import { h } from 'hyperapp'
import type { State } from '../state'
import MyFunction from '../components/Function'

export default (state: State) => h('div', {}, [
    MyFunction(state.func1, 'func1'),
    MyFunction(state.func2, 'test2'),
])
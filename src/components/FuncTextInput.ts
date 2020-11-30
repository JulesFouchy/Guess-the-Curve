import { h } from 'hyperapp'
import type { State } from '../state'

export default (funcVarName: String, initialValue: String) => h('input', {
    oninput: (state: State, event) => {
        const stateCopy: State = {...state}
        stateCopy[funcVarName] = event.target.value
        return stateCopy
    },
    value: initialValue
}, [])

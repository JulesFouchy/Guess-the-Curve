import { h } from 'hyperapp'
import type { State } from '../state'
import type { Func } from '../types/Func'

window.d3 = require("d3")
const functionPlot = require("function-plot")

const Input = (func: Func) => h('input', {
    oninput: (state: State, event) => {
        const stateCopy: State = {...state}
        stateCopy.functions[func.index].value = event.target.value
        return stateCopy
    },
    value: func.value
}, [])

const Plot = (myFunc: Func, targetFunc: Func) => {
    const id = 'main-function-plot'
    setTimeout(() =>
        functionPlot({
            target: '#'+id,
            width: 400,
            height: 400,
            disableZoom: true,
            grid: true,
            data: [
                { fn: myFunc.value },
                { fn: targetFunc.value },
            ]
        }),
    0)

    return h('div', {id, class: 'functionPlot'}, [])
}

export default (myFunc: Func, targetFunc: Func) => h('div', {}, [
    Plot (myFunc, targetFunc),
    Input(myFunc),
])
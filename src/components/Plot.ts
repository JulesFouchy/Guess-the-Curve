import { h } from 'hyperapp'
import type { State } from '../state'
import type { Func } from '../types/Func'

window.d3 = require("d3")
const functionPlot = require("function-plot")

const setPlotErrorMessage = (msg: string) => {
    document.getElementById('plot-error').innerHTML = msg
}

const ParseFunc = (func: string): string => {
    // replace "pi" by its value
    return func.replaceAll("pi", "3.141592653590")
}

const Input = (func: Func) => h('input', {
    oninput: (state: State, event) => {
        setPlotErrorMessage('')
        const stateCopy: State = {...state}
        stateCopy.functions[func.index].value = event.target.value
        return stateCopy
    },
    value: func.value
}, [])

const Plot = (myFunc: Func, targetFunc: Func) => {
    const id = 'main-function-plot'
    setTimeout(() => {
        try {
            functionPlot({
                target: '#'+id,
                width: 400,
                height: 400,
                disableZoom: true,
                grid: true,
                data: [
                    { fn: ParseFunc(myFunc.value) },
                    { fn: ParseFunc(targetFunc.value) },
                ]
            })
        }
        catch(e) {
            setPlotErrorMessage(e)
        }
    }
    , 0)

    return h('div', {id, class: 'functionPlot'}, [])
}

export default (myFunc: Func, targetFunc: Func) => {
    return h(
        'div', {}, 
        [
            Plot (myFunc, targetFunc),
            Input(myFunc),
            h('div', 
            {
                id: 'plot-error'
            }
            ),
        ]
    )
}
import { h } from 'hyperapp'
import type { State } from '../state'
import type { Func } from '../types/Func'
import FunctionsAreEqual from '../helper/FunctionsAreEqual'
import ShowSolution from '../actions/ShowSolution'
import SendFunction from '../actions/SendFunction'

// @ts-expect-error
window.d3 = require("d3")
const functionPlot = require("function-plot")

const setPlotErrorMessage = (msg: string) => {
    document.getElementById('plot-error').innerHTML = msg
}

const ParseFunc = (func: string): string => {
    let str = func
    // @ts-expect-error
    str = str.replaceAll("pi", "3.141592653590")
    // @ts-expect-error
    str = str.replaceAll("racine", "sqrt")
    return str
}

const Input = (func: Func) => h(
    'input', 
    {
        class: 'function-input',
        spellcheck: false,
        oninput: (state: State, event) => {
            setPlotErrorMessage('')
            const stateCopy: State = { ...state }
            stateCopy.myFunction.value = event.target.value
            stateCopy.areFunctionsEqual = FunctionsAreEqual(
                ParseFunc(stateCopy.myFunction.value),
                stateCopy.functionsToGuess[stateCopy.funcToGuessIdx].value
            )
            return stateCopy
        },
        value: func.value
    }
)

const Plot = (myFunc: Func, targetFunc: Func) => {
    const id = 'main-function-plot'
    setTimeout(() => {
        try {
            functionPlot({
                target: '#'+id,
                width: 400,
                height: 400,
                // disableZoom: true,
                grid: true,
                data: [
                    { fn: ParseFunc(myFunc.value) },
                    { fn: ParseFunc(targetFunc.value) },
                ],
                xAxis: { domain: targetFunc.xDomain },
                yAxis: { domain: targetFunc.xDomain },
            })
        }
        catch(e) {
            if (e != "Error: there are no statements saved in this generator, make sure you parse an expression before compiling it")
            setPlotErrorMessage(e)
        }
    }
    , 0)

    return h('div', {id, class: 'function-plot'}, [])
}

export default (myFunc: Func, targetFunc: Func, areFunctionsEqual: boolean, isSendingCurves: boolean) => {
    return h(
        'div', 
        {
            class: 'plot-and-input'
        }, 
        [
            Plot (myFunc, !isSendingCurves ? targetFunc : {value: "0"}),
            h('div',
            {
                id: 'input-and-solution-button'
            },
                h('div',
                {
                    id: 'function-input-wrapper',
                    class: areFunctionsEqual ? 'success' : '',
                },
                    Input(myFunc),
                ),
                !isSendingCurves && h('button', 
                {
                    onclick: ShowSolution
                },
                    'Voir la solution'
                ),
                isSendingCurves && h('button', 
                {
                    onclick: SendFunction
                },
                    'Envoyer cette courbe'
                ),
            ),
            h('div', 
            {
                id: 'plot-error'
            }
            ),
        ]
    )
}
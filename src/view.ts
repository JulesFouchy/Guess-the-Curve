import { h } from 'hyperapp'
import type { State } from './state'
import Plot from './components/Plot'
import Progress from './components/Progress'
import Solution from './components/Solution'
import SelectMode from './components/SelectMode'

export default (state: State) => {
    return h(
        'div', {}, 
        [
            SelectMode(),
            h('div', {id: "column-1"}),
            h('div', {id: "column-2"}, [
                h('h2', {}, !state.sendingCurves ? "Peux-tu reproduire la courbe rouge ?" : "A ton tour d'imaginer des fonctions"),
                h('h3', {}, !state.sendingCurves ? "Entre une expression et fait ENTREE quand c'est bon !" : "Et de me les envoyer"),
                Plot(state.myFunction, state.functionsToGuess[state.funcToGuessIdx], state.areFunctionsEqual, state.sendingCurves),
            ]),
            h('div', {id: "column-3"}, [
                !state.sendingCurves && Progress(state.score, state.funcToGuessIdx + (state.finished ? 1 : 0), state.functionsToGuess.length),
            ]),
            state.solution !== '' && Solution(state.solution),
        ]
    )
}
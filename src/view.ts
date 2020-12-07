import { h } from 'hyperapp'
import type { State } from './state'
import Plot from './components/Plot'
import Progress from './components/Progress'
import Solution from './components/Solution'

export default (state: State) => {
    return h(
        'div', {}, 
        [
            h('div', {id: "column-1"}),
            h('div', {id: "column-2"}, [
                h('h2', {}, "Peux-tu reproduire la courbe rouge ?"),
                h('h3', {}, "Entre une expression et fait ENTREE quand c'est bon !"),
                Plot(state.myFunction, state.functionsToGuess[state.funcToGuessIdx], state.areFunctionsEqual),
            ]),
            h('div', {id: "column-3"}, [
                Progress(state.score, state.funcToGuessIdx + (state.finished ? 1 : 0), state.functionsToGuess.length),
            ]),
            state.solution !== '' && Solution(state.solution)
        ]
    )
}
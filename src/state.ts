import type { Func } from './types/Func'
import { FuncToGuess } from './types/FuncToGuess'

interface State {
    myFunction: Func,
    functionsToGuess: FuncToGuess[],
    funcToGuessIdx: number,
    areFunctionsEqual: boolean,
    score: number,
}

const state: State = {
    myFunction: {value: '0'},
    functionsToGuess: [
        {value: 'x', explanation: ''},
        {value: 'x^2', explanation: ''},
        {value: 'exp(x)', explanation: ''},
    ],
    funcToGuessIdx: 0,
    areFunctionsEqual: false,
    score: 0,
}

export default state
export type { State }
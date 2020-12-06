import type { Func } from './types/Func'
import { FuncToGuess } from './types/FuncToGuess'

interface State {
    myFunction: Func,
    functionsToGuess: FuncToGuess[],
    funcToGuessIdx: number,
    areFunctionsEqual: boolean,
    score: number,
    finished: boolean,
    solution: string,
}

const state: State = {
    myFunction: {value: '0'},
    functionsToGuess: [
        {value: 'x', explanation: "Bah c'est x"},
        {value: 'x^2', explanation: "Là c'est x^2"},
        {value: 'exp(x)', explanation: "La réciproque de ln"},
    ],
    funcToGuessIdx: 0,
    areFunctionsEqual: false,
    score: 0,
    finished: false,
    solution: '',
}

export default state
export type { State }
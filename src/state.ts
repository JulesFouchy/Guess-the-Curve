import type { Func } from './types/Func'
import { FuncToGuess } from './types/FuncToGuess'
import functionsToGuess from './functionsToGuess'

interface State {
    myFunction: Func,
    functionsToGuess: FuncToGuess[],
    funcToGuessIdx: number,
    areFunctionsEqual: boolean,
    score: number,
    finished: boolean,
    solution: string,
    shouldEarnPoints: boolean,
    sendingCurves: boolean,
}

const state: State = {
    myFunction: {value: '0'},
    functionsToGuess,
    funcToGuessIdx: 0,
    areFunctionsEqual: false,
    score: 0,
    finished: false,
    solution: '',
    shouldEarnPoints: true,
    sendingCurves: false,
}

export default state
export type { State }
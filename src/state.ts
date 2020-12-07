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
    shouldEarnPoints: boolean,
}

const state: State = {
    myFunction: {value: '0'},
    functionsToGuess: [
        {value: 'x', explanation: "On voit que c'est une droite ; elle a une pente de 1 et passe par l'origine, donc c'est x"},
        {value: 'x^2', explanation: "Ca ressemble vachement à une parabole ! (C'est-à-dire la famille des ax^2 + bx + c) On peut vérifier quelques valeurs (f(0) = 0, f(2) = 4) pour se convaincre que c'est bien x^2 tout court."},
        {value: 'exp(x)', explanation: "La réciproque de ln"},
    ],
    funcToGuessIdx: 0,
    areFunctionsEqual: false,
    score: 0,
    finished: false,
    solution: '',
    shouldEarnPoints: true,
}

export default state
export type { State }
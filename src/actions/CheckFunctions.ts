import type { State } from '../state'

export default (state: State): State => {
    if (state.areFunctionsEqual) {
        if (state.funcToGuessIdx < state.functionsToGuess.length - 1) {
            return {
                ...state,
                funcToGuessIdx: state.funcToGuessIdx+1,
                areFunctionsEqual: false,
                score: state.score+1,
            }
        }
        else {
            return {
                ...state,
                score: state.score+1,
                finished: true,
            }
        }
    }
    else {
        return state
    }
} 
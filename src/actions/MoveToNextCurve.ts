import type { State } from '../state'

export default (state: State, success: boolean): State => {
    if (!state.finished) {
        const score = state.score + (success ? 1 : 0)
        if (state.funcToGuessIdx < state.functionsToGuess.length - 1) {
            return {
                ...state,
                funcToGuessIdx: state.funcToGuessIdx+1,
                areFunctionsEqual: false,
                score: score,
            }
        }
        else {
            return {
                ...state,
                finished: true,
                score: score,
            }
        }
    }
    else {
        return state
    }
}
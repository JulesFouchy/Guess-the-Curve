import type { State } from '../state'

export default (state: State): State => {
    if (!state.finished) {
        const score = state.score + (state.shouldEarnPoints ? 1 : 0)
        if (state.funcToGuessIdx < state.functionsToGuess.length - 1) {
            return {
                ...state,
                funcToGuessIdx: state.funcToGuessIdx+1,
                areFunctionsEqual: false,
                score: score,
                shouldEarnPoints: true,
            }
        }
        else {
            return {
                ...state,
                finished: true,
                score: score,
                shouldEarnPoints: true,
            }
        }
    }
    else {
        return state
    }
}
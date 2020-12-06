import type { State } from '../state'

export default (state: State): State => {
    return {
        ...state,
        solution: state.functionsToGuess[state.funcToGuessIdx].explanation,
    }
} 
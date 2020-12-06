import type { State } from '../state'
import MoveToNextCurve from './MoveToNextCurve'

export default (state: State): State => {
    if (state.solution === '' && state.areFunctionsEqual) {
        return MoveToNextCurve(state, true)
    }
    else {
        return state
    }
} 
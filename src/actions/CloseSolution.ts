import type { State } from '../state'
import MoveToNextCurve from './MoveToNextCurve'

export default (state: State): State => {
    return {
        ...state,
        solution: '',
        shouldEarnPoints: false,
    }
}
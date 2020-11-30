import type { Func } from './types/Func'

interface State {
    functions: Func[]
}

const state: State = {
    functions: [
        {value: '0', index: 0},
        {value: 'x', index: 1},
    ]
}

export default state
export type { State }
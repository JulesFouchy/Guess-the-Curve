import type { Func } from './types/Func'

interface State {
    functions: Func[],
    areFunctionsEqual: boolean,
}

const state: State = {
    functions: [
        {value: '0', index: 0},
        {value: 'x', index: 1},
    ],
    areFunctionsEqual: false,
}

export default state
export type { State }
import type { State } from '../state'

const eFetchJSONData = (dispatch, options) => {
    fetch(options.url)
        .then(response => response.json())
        .then(data => dispatch(options.onresponse, data))
        .catch(() => dispatch(options.onresponse, {}))
}

const ecFetchFunctionsToGuess = () => [
    eFetchJSONData,
    {
        url: 'https://guess-the-curve.herokuapp.com/',
        onresponse: (state: State, res): State => {
            return {
                ...state,
                functionsToGuess: res.map(func => ({
                    value: func.value,
                    explanation: func.explanation
                })),
                funcToGuessIdx: 0,
                areFunctionsEqual: false,
                score: 0,
                finished: false,
                solution: '',
                shouldEarnPoints: true,
                sendingCurves: false,
            }
        },
    }
]

export default (state: State) => {
    return [state, ecFetchFunctionsToGuess()]
}
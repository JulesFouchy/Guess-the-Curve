import type { State } from '../state'

const shuffle = (_arr) => {
    let arr = [..._arr]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

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
                functionsToGuess: shuffle(res).map(func => ({
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
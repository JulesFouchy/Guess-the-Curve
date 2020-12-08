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
        onresponse: (state: State): State => {
            console.log("okay")
            return state
        },
    }
]

export default (state: State) => {
    console.log('go')
    return [state, ecFetchFunctionsToGuess()]
}
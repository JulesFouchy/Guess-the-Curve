import type { State } from '../state'
import axios from 'axios'

export default (state: State): State => {
    axios.put('https://guess-the-curve.herokuapp.com/',{
        value: state.myFunction.value,
        explanation: state.myFunction.value,
    })
    return {
        ...state,
        myFunction: {value: '0'} 
    }
}
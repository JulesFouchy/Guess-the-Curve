import { h } from 'hyperapp'

import axios from 'axios'
import funcToGuess from '../functionsToGuess'
import { State } from '../state'
import GetFunctions from '../actions/GetFunctions'

export default () => {
    return h(
        'div', 
        {
            id: 'modes-header'
        }, 
        [
            h('button',
            {
                onclick: (state): State => {
                    return {
                        ...state,
                        functionsToGuess: funcToGuess,
                        funcToGuessIdx: 0,
                        areFunctionsEqual: false,
                        score: 0,
                        finished: false,
                        solution: '',
                        shouldEarnPoints: true,
                        sendingCurves: false,
                    }
                }
            },
            "Jouer avec les courbes par défaut"
            ),
            h('button',
            {
                onclick: GetFunctions
            },
            "Jouer avec les courbes personnalisées"
            ),
            h('button',
            {
                onclick: (state) => {
                    // axios.put('https://guess-the-curve.herokuapp.com/',{
                    //     value: 'x^1',
                    //     explanation: "bonjour",
                    // }).then(a=>console.log(a.data==="success"))
                    return {
                        ...state,
                        sendingCurves: true,
                    }
                }
            },
            "Envoyer des courbes personnalisées"
            ),
        ]
    )
}
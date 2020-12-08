import { h } from 'hyperapp'

import funcToGuess from '../functionsToGuess'
import { State } from '../state'
import GetFunctions from '../actions/GetFunctions'
import SendFunction from '../actions/SendFunction'

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
                onclick: (state) => ({
                    ...state,
                    sendingCurves: true,
                })
            },
            "Envoyer des courbes personnalisées"
            ),
        ]
    )
}
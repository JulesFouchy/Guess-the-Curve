import { h } from 'hyperapp'

export default (myScore: number, currCurve: number, nbCurves: number) => {
    return h(
        'div', 
        {
            class: 'scores'
        }, 
        [
            h('p',
            {

            },
            [
                `${currCurve} / ${nbCurves} Courbes finies`
            ]
            ),
            h('p',
            {

            },
            [
                `${myScore} points`
            ]
            ),
        ]
    )
}
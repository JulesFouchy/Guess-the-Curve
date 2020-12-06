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
                `Curve : ${currCurve} / ${nbCurves}`
            ]
            ),
            h('p',
            {

            },
            [
                `Score : ${myScore}`
            ]
            ),
        ]
    )
}
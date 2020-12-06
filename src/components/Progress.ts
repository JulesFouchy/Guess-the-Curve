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
                `Finished Curves : ${currCurve} / ${nbCurves}`
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
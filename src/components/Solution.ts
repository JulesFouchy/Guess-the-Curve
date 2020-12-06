import { h } from 'hyperapp'
import CloseSolution from '../actions/CloseSolution'

export default (solution: string) => {
    return h(
    'div',
    {
        id: 'blurred-background',
    },
    [
        h('div',
        {
            id: 'solution',
        },
        [
            solution,
            h('button',
            {
                onclick: CloseSolution
            },
                'Got it !'
            )
        ]
        )
    ]
    )
}
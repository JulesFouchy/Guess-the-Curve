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
            h('p', {}, solution),
            h('button',
            {
                onclick: CloseSolution
            },
                'Okay !'
            )
        ]
        )
    ]
    )
}
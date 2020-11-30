import { h } from 'hyperapp'

window.d3 = require("d3")
const functionPlot = require("function-plot")

export default (funcStr: String, id: String) => {
    setTimeout(() =>
    functionPlot({
        target: '#'+id,
        width: 400,
        height: 400,
        // disableZoom: true,
        grid: true,
        data: [
            { fn: funcStr },
            { fn: 'x' },
        ]
      }),
      0)

    return h('div', {id: id, class: 'functionPlot'}, [])
}
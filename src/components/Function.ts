import { h } from 'hyperapp'
import FuncTextInput from './FuncTextInput'
import Plot from './Plot'

export default (initialValue: String, funcVarName: String, ) => h('div', {}, [
    Plot(initialValue, funcVarName),
    FuncTextInput(funcVarName, initialValue),
])
// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//
import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"
//
import state from './state'
import view from './view'
import CheckFunctions from './actions/CheckFunctions'

const keySub = (dispatch, props) => {
    const handler = (ev) => {
        if (ev.key === 'Enter') {
            dispatch(props.action)
        }
    }
    window.addEventListener("keydown", handler)
  
    // Cleanup function
    return () => window.removeEventListener("keydown", handler)
  }
  
const key = (props) => [keySub, props]

app({ 
  init: state,
  view: view,
  node: document.getElementById("app"),
  subscriptions: (state) => [
    key({
      action: CheckFunctions,
    }),
  ],
//   middleware: process.env.DEBUG==='true' && logger,
})
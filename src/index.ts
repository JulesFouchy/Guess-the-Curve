// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//
import state from './state'
import mainView from './views/MainView'

import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

app({ 
  init: state,
  view: mainView,
  node: document.getElementById("app"),
  middleware: process.env.DEBUG==='true' && logger,
})
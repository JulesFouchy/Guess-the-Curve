// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//
import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"
//
import state from './state'
import view from './view'


app({ 
  init: state,
  view: view,
  node: document.getElementById("app"),
  middleware: process.env.DEBUG==='true' && logger,
})
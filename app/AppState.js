import { Jot } from "./models/Jot.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  Jots = []

  /** @type {Jot} */
  activeJot = null


}

export const AppState = createObservableProxy(new ObservableAppState())
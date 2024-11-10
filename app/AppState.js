import { Jot } from "./models/Jot.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  Jots = [
    new Jot({ name: 'Console Logging Correctly🖊', createdOn: '11/8/2024', body: ' To console log something to a webpage, you typically use the console.log() function in your script. If you want to display output directly on the webpage, one might use the document.write() method, as well. Both of these features prove quite useful and are extremely helpful, in that sense.' }),

    new Jot({ name: 'The definition of MVC 📊', createdOn: '11/9/2024', body: 'MVCSA is an acronym commonly expanded as Model-View-Controller-Service-Action. This is an architectural pattern used for structuring web applications. It allows for separation of concerns and organized code flow.Model represents the data layer, handling storage and retrieval of information. View is responsible for displaying the UI, interpreting the models state.' }),
  ]

  /** @type {Jot} */
  activeJot = null


}

export const AppState = createObservableProxy(new ObservableAppState())
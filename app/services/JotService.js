import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"



// NOTE REMINDER: Jots is your array!

class JotService {
  selectCreateJot(jotName) {
    console.log('service', jotName)
    const selectedJot = AppState.Jots.find(jot => jotName == jot.name)
    console.log('selected Jot')
    AppState.activeJot = selectedJot
    // FIXME SELECTED works, but is unable to pull up the jot objects under APPSTATE??
  }

  createJot(jotData) {
    // const jot = new Jot(jotData);
    // console.log('service', jotData);
    AppState.Jots.push(new Jot(jotData))
    console.log(AppState.Jots);
    this.saveJots()
  }


  saveJots() {
    saveState('Jots', AppState.Jots)
  }

  loadJots() {
    AppState.Jots = loadState('jots', [Jot])

  }
}








export const jotService = new JotService()






import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"

const SAVE_KEY = 'NO_TYPOS'

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

  deleteJot() {

    // what is the currently active jot?
    const indexToRemove = AppState.Jots.indexOf(AppState.activeJot)
    console.log('what is the index of the active jot?', indexToRemove)
    AppState.Jots.splice(indexToRemove, 1)

    this.saveJots()

    AppState.activeJot = null


  }


  saveJots() {
    saveState(SAVE_KEY, AppState.Jots)
  }

  loadJots() {
    AppState.Jots = loadState(SAVE_KEY, [Jot])

  }
}








export const jotService = new JotService()






import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"



// NOTE REMINDER: Jots is your array!

class JotService {

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






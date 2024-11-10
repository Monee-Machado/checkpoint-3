import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"



// NOTE REMINDER: Jots is your array!

class JotService {

  createJot(jotData) {
    // const jot = new Jot(jotData)
    AppState.Jots.push(new Jot(jotData))
    console.log(AppState.Jots);
    this.saveJots()
  }


  saveJots() {
    saveState('jots', AppState.Jots)
  }

  loadJots() {
    const jots = loadState('jots', [Jot])
    if (jots.length == 0) {
      AppState.emit('Jots')
    }
    else {
      AppState.Jots = jots

    }
  }

}






export const jotService = new JotService()






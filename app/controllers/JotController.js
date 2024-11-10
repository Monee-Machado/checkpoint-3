import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { jotService } from "../services/JotService.js"






export class JotController {

  constructor() {
    console.log('Jot controller connected 📝');
    this.drawJot()
    // jotService.loadJots() <------- loading goes LAST!!!!
    AppState.on('drawJot', () => console.log('Jot added'))
    AppState.on('jots', this.drawJot)
    AppState.on('activeDrawJot', this.drawActiveJot)
    jotService.loadJots()
    // FIXME UNABLE TO REGISTER LISTENER FOR 'jots' (SIDE NAV)
    // FIXME UNABLE TO REGISTER LISTENER FOR 'drawJot' (SIDE NAV)
    // FIXME UNABLE TO REGISTER LISTENER FOR 'activeDrawJot' (SIDE NAV)
    // FIXME SAVES DON'T WORK
  }

  // NOTE Turning off ^^^this.draw turns off the html display on the webpage

  // SECTION Drawing JOTS to the SIDE NAV
  drawJot() {

    console.log('✏📝📝')
    const jotListElm = document.getElementById('jotlist')
    jotListElm.innerHTML = ''
    AppState.Jots.forEach(jot => jotListElm.innerHTML += jot.jotDisplay)

    // NOTE jot-count EQUALS 0 or more jots on the corner of side nav
    const jotCountElm = document.getElementById('jot-count')
    jotCountElm.innerHTML = AppState.Jots.length.toString()

    // const jots = AppState.Jots
    // let jotHtml = ''
    // jots.forEach(jot => jotHtml += jot.jotDisplay)
    // setHTML('jotlist', jotHtml)
  }
  // SECTION CREATING jots on the side nav

  // NOTE active-jot EQUALS side nav display
  drawActiveJot() {
    console.log('✏👉📃')
    const activeJotElm = document.getElementById('active-jot')
    activeJotElm.innerHTML = ''
    AppState.Jots.forEach(jot => activeJotElm.innerHTML += jot.activeDisplay)

    // FIXME NOT working with ACTIVE display HTML???
    activeJotElm.innerHTML = AppState.activeJot.activeDisplay
  }



  createJot() {
    console.log('Creating Jot');
    event.preventDefault()
    const formElm = event.target
    const formData = {

      // @ts-ignore
      name: formElm.name.value,
      // @ts-ignore
      createdOn: formElm.createdOn.value
    }

    console.log(formData)
    jotService.createJot(formData)
    // this.drawActiveJot()
    // NOTE does something GO IN HERE to make something display on the webpage??



    // const formElem = event.target
    // const jotData = getFormData(formElem)
    // jotService.createJot(jotData)
  }

  drawCreateJot() {

  }



  // SECTION writing jots in the giant form
  jotSave() {
    console.log('Saving Jot')
    event.preventDefault()

  }


  deleteJot() {
    console.log('Deleting Jot')
    event.preventDefault()
  }


  jotWordCount() {
    const wordCountElm = document.getElementById('word-count')
    wordCountElm.innerHTML = ''

  }


}

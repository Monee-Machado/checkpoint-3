import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { jotService } from "../services/JotService.js"






export class JotController {

  constructor() {
    console.log('Jot controller connected 📝');
    this.drawJot()
    // jotService.loadJots() <------- loading goes LAST!!!!
    // AppState.on('drawJot', () => console.log('Jot added'))
    AppState.on('Jots', this.drawJot)
    AppState.on('activeJot', this.drawActiveFullJot)
    jotService.loadJots()
    this.drawActiveFullJot()

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
  drawJotList() {
    console.log('✏👉📃')
    const activeJotElm = document.getElementById('active-jot')
    activeJotElm.innerHTML = ''
    AppState.Jots.forEach(jot => activeJotElm.innerHTML += jot.activeDisplay)

    activeJotElm.innerHTML = AppState.activeJot.activeDisplay
  }


  drawActiveFullJot() {
    console.log('✏👉📝');
    const activeFullJotElm = document.getElementById('active-display')
    activeFullJotElm.innerHTML = AppState.activeJot?.activeDisplay || ''

  }


  // TODO start with getting this fixed up
  // the names are undefined, there is no color present
  // and the user should not need to put in a date
  createJot() {
    console.log('Creating Jot');
    event.preventDefault()
    const formElm = event.target
    const formData = {
      // @ts-ignore
      name: formElm.name.value,
      // @ts-ignore
      color: formElm.color.value
    }

    console.log(formData)
    jotService.createJot(formData)
    // this.drawActiveJot()
    // NOTE does something GO IN HERE to make something display on the webpage??



    // const formElem = event.target
    // const jotData = getFormData(formElem)
    // jotService.createJot(jotData)
  }


  // TODO this will need to work with IDs instead of names, but test once the create is done, once they can be created properly, can those new ones be selected too.
  selectCreateJot(jotName) {
    console.log('👉✏', jotName);
    jotService.selectCreateJot(jotName)
  }





  // SECTION writing jots in the giant form
  // TODO writing into the body of the active jot, and saving it
  // try to get the text out of the textarea in the form
  // pass that data to the service
  // Reference Redacted for this.
  jotSave() {
    console.log('Saving Jot')
    event.preventDefault()

  }


  deleteJot() {
    console.log('Deleting Jot')
    event.preventDefault()
    jotService.deleteJot()
  }


  jotWordCount() {
    const wordCountElm = document.getElementById('word-count')
    wordCountElm.innerHTML = ''

  }


}

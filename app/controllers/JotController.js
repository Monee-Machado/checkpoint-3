import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { jotService } from "../services/JotService.js"






export class JotController {

  constructor() {
    console.log('Jot controller connected 📝');
    this.drawJot()
    // AppState.on('jots', this.drawJot)
    // jotService.loadJots()
  }

  // NOTE Turning off ^^^this.draw turns off the html display on the webpage

  // SECTION Drawing JOTS to the SIDE NAV
  drawJot() {

    console.log('✏📝📝')
    const jotListElm = document.getElementById('jotlist')
    jotListElm.innerHTML = ''
    AppState.Jots.forEach(jot => jotListElm.innerHTML += jot.jotDisplay)

    const jotCountElm = document.getElementById('jot-count')
    jotCountElm.innerHTML = AppState.Jots.length.toString()

    // const jots = AppState.Jots
    // let jotHtml = ''
    // jots.forEach(jot => jotHtml += jot.jotDisplay)
    // setHTML('jotlist', jotHtml)
  }
  // SECTION CREATING jots on the side nav

  drawActiveJot() {
    console.log('✏👉📃')
    const activeJotElm = document.getElementById('active-jot')
    activeJotElm.innerHTML = ''
    AppState.Jots.forEach(jot => activeJotElm.innerHTML += jot.activeDisplay)

    // activeJotElm.innerHTML = AppState.activeJot.activeDisplay
  }



  createJot() {
    console.log('Creating Jot')
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



    // const formElem = event.target
    // const jotData = getFormData(formElem)
    // jotService.createJot(jotData)
  }



  // SECTION SUBMITTING jots in the giant form
  jotSubmit() {
    console.log('Submitting Jot')
    event.preventDefault()

  }


  deleteJot() {
    console.log('Deleting Jot')
    event.preventDefault()
  }



}
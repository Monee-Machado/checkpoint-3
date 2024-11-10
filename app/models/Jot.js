import { generateId } from "../utils/GenerateId.js"



export class Jot {

  constructor(data) {
    this.name = data.name
    this.body = data.body
    this.createdOn = data.createdOn == undefined ? new Date() : new Date(data.createdOn)
    this.lastUpdated = data.lastUpdated == undefined ? new Date() : new Date(data.lastUpdated)
    // NOTE check again IF lastUpdated belongs in arrays too in case if it doesnt work
  }

  get jotDisplay() {
    return `<div class="p-3 mt-4 mb-3 d-flex justify-content-between">
                <span class="fw-bold">${this.name}</span><span>${this.createdOn}</span>
              </div>`
  }


  // FIXME NOT WORKING WITH DRAW ACTIVE JOT??
  get activeDisplay() {
    return `
    
    
          </div>
      <div class="col-md-8 jumble-card shadow mt-5">
        <div class="row d-flex">
          <div class="mt-2 p-3">
            <h2 class="sea-button">${this.name}</h2>
          </div>
          <p>${this.createdOn}</p>
          <div class="col-md-3">
            <p>${this.lastUpdated}</p>
          </div>
          <div class="col-md-3">
            <form onsubmit="app.JotController.deleteJot()"><button class="btn btn-outline-danger">Delete</button></form>

          </div>
          <div class="col-md-3">
            <button class="btn btn-outline-light">Save</button>
          </div>
        </div>
        <!-- SECTION this is where we create new jots -->
        <form class="text-center mt-3">
          <div class="form-group mt-2">
            <textarea class="form-control textarea bg-dark" style="color:aquamarine" id="" name="body"
              placeholder="Start Jotting" rows="25" required></textarea>
          </div>
          <div class="p-2">
            <!-- NOTE preventing default not working on the jotsubmit for some reason?? -->
            <form onsubmit="app.JotController.jotSubmit()"><button class="btn btn-info w-50 shadow mt-2">Submit
                -></button></form>

          </div>
        </form>
      </div>
    `


  }





}

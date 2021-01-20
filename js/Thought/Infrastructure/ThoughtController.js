import { SessionStorage } from "./SessionStorage.js";

export class ThoughtController {
  constructor() {
    this.listerBtnInsert();
  }
  listerBtnInsert() {
    document
      .getElementById("btnInsert")
      .addEventListener("click", this.controller.bind(this));
  }
  controller() {
    var dataForm = this.getDataOfForm();
    var data = dataForm;
    data.date = this.getDateTime();
    new SessionStorage("thougthss").create(data);
    debugger;
  }
  getDataOfForm() {
    var user = document.getElementById("user").value;
    var thought = document.getElementById("thought").value;
    return { user: user, thought: thought };
  }
  getDateTime(){
      return Date.now();
  }

}

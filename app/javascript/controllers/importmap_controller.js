import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["counter"];

  connect() {
    console.log("importmap_controller.js");
  }

  increment() {
    this.counterTarget.value = this.counterValue + 1;
  }

  decrement() {
    this.counterTarget.value = this.counterValue - 1;
  }

  get counterValue() {
    return Number(this.counterTarget.value);
  }
}

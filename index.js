import ShortenForm from "./components/shortenForm.js";

class App {
  $containerEl;
  $shortenForm;
  $shortenDomain;

  constructor() {
    this.$containerEl = document.createElement("div");
    this.$containerEl.setAttribute(
      "class",
      "w-1/4 bg-slate-200 py-4 px-4 mx-auto top-20 px-4 rounded-xl"
    );

    this.$shortenForm = new ShortenForm();
  }

  render() {
    this.$containerEl.appendChild(this.$shortenForm.render());

    return this.$containerEl;
  }
}

let appContainer = document.getElementById("root");

const app = new App();

appContainer.appendChild(app.render());

import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MonstersController } from "./controllers/MonstersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [MonstersController],
    view: /*html*/`
    <div class="container-fluid">
    <button onclick="app.MonstersController.getMonsters()" class="btn btn-success"> get all monsters again </button>
    <section id="monsters" class="row g-1">
      

    </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]
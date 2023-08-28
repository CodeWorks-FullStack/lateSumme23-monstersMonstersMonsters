import { AppState } from "../AppState.js"
import { monstersService } from "../services/MonstersService.js"
import { setHTML } from "../utils/Writer.js"

function _drawMonsterCards() {
  console.log('drawing monsters')
  // NOTE sort is only necessary if you want things to show up in an order that the api doesn't provide 
  let monsters = AppState.monsters.sort((m1, m2) => m1.id - m2.id)
  let content = ''
  monsters.forEach(m => content += m.MonsterCard)
  setHTML('monsters', content)
}

export class MonstersController {
  constructor() {
    console.log('monster time!')
    this.getMonsters()
    AppState.on('monsters', _drawMonsterCards)
  }


  async getMonsters() {
    await monstersService.getMonsters()
    // _drawMonsterCards() this isn't that cool
  }

  async getMonstersByLocation(location) {
    console.log('location', location)
    await monstersService.getMonstersByLocation(location)
  }
}
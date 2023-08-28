import { AppState } from "../AppState.js"
import { Monster } from "../models/Monster.js"


class MonstersService {
  async getMonsters() {
    console.log('getting monsters')
    // WAIT for the fetch to comeback before you console log the response
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    const data = await response.json()
    // console.log(response)
    // REVIEW make sure to console log the data your looking for at the level it is
    console.log(data.data)
    // NOTE need to take the POJO from the api and convert them to fit our model
    let newMonsters = data.data.map(monster => new Monster(monster))
    console.log('👹', newMonsters)
    AppState.monsters = newMonsters
  }

  async getMonstersByLocation(location) {
    // NOTE another way to get data
    const response = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    console.log(response.data.data)
    let newMonsters = response.data.data.map(monster => new Monster(monster))
    // REVIEW whoops this api doesn't support queries for monsters??? so we are creating our own
    let filtered = newMonsters.filter(monster => monster.locations.includes(location))
    AppState.monsters = filtered
  }
}

export const monstersService = new MonstersService()
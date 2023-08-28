


export class Monster {
  // NOTE you can call the properties whatever you want but you HAVE to take in the data using their naming conventions
  constructor({ id, name, image, description, drops, common_locations, dlc }) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.drops = drops
    this.locations = common_locations || []
    this.dlc = dlc
  }

  get MonsterCard() {
    return `
<div class="col-6 col-md-4">
  <div class=" card p-0">
    <h4 class="text-center fw-bold text-primary">${this.name}</h4>
    <img class="img-fluid" src="${this.image}"
      alt="picture of ${this.name}">
    <div class="px-2">
      <p class="text-center fw-bold mb-1">🗺️ ${this.LocationButtons}</p>
      <p class="text-center fw-bold">💼${this.drops}</p>
      <p>${this.description}</p>
    </div>
  </div>
</div>
    `
  }

  get LocationButtons() {
    if (!this.locations.length) return 'No locations'
    // if there are locations this will run instead
    let locationsContent = ''
    this.locations.forEach(l => locationsContent += `
    <button onclick="app.MonstersController.getMonstersByLocation('${l}')" class="btn selectable">${l}</button>
    `)
    return locationsContent
  }
}
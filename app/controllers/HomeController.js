import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    console.log('This is the Home Controller')
    this.start()
  }

  async start() {
    // NOTE async promise demo
    try {
      // NOTE try catch runs code, and if an error occurs, it will stop where the error happened and jump to the 'catch'
      console.log(1);
      // NOTE a promise creates a function to pause the standard synchronous running of code. 
      let prom = new Promise((resolve, reject) => { // got get me a tootsie pop
        let randomTime = Math.random() * 5000

        setTimeout(() => {
          console.log('bzzzzzt⏲️', 2)
          resolve() // ok i have returned with your tootsie pop
        }, randomTime)
      })

      // NOTE awaiting a promise pauses the code on the line until the promise either resolves or rejects
      await prom // the await here is what makes the code hold
      console.log(3);
      console.log(await Pop.confirm())
      console.log(4);
      // console.log(2);

      const x = 6
      // x = 7

    } catch (error) {
      Pop.toast('Whoops an error occured')
      console.error(error)
    }
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}
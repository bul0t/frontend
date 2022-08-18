import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {
      // const data30 = data.slice(0, 30)
      let rows = 30
      templateLoop(data, rows)
    })
}

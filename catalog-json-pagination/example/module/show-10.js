import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {
      // const data10 = data.slice(0, 10)
      let rows = 10
      templateLoop(data, rows)
    })
}

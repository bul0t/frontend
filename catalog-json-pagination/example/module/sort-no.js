import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {
      let rows = 30
      templateLoop(data, rows)
    })
}

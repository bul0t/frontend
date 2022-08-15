import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {
      const data30 = data.slice(0, 30)
      templateLoop(data30)
    })
}

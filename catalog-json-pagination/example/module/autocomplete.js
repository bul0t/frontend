import templateLoop from './templateLoop.js'

export default function(value) {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {
      let dataAutocomplete = data.filter(function(elem) {
        const regex = new RegExp(`^${value}`, 'gi')
        return elem.Name.match(regex)
      })
      let rows = 30
      templateLoop(dataAutocomplete, rows)
    })
}

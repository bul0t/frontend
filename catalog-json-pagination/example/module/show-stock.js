import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {
      const dataStock = data.filter(function(elem) {
        return elem.Stock
      })
      let rows = 30
      templateLoop(dataStock, rows)
    })
}

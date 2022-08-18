import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {

      data.sort(function(a, b){
        return b.Price - a.Price
      })

      let rows = 30
      templateLoop(data, rows)
    })
}

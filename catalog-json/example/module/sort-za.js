import templateLoop from './templateLoop.js'

export default function() {
  const request = fetch(`data.json`)
    .then(response => response.json())
    .then(data => {

      data.sort(function compare(a, b) {
        if (a.Name < b.Name)
          return 1;
        if (a.Name > b.Name)
            return -1;
        return 0;
      })

      templateLoop(data)
    })
}

const list_element = document.getElementById('list') // контейнер для элементов
const pagination_element = document.getElementById('pagination') // контейнер для элементов пагинации

let current_page = 1 // текущая страница, на которой мы находимся
let rows = 30 // количество элементов на странице

// Функция для обображения элементов

const request = fetch(`data.json`)
  .then(response => response.json())
  .then(list_items => {
    function displayList(items, wrapper, rows_per_page, page) {
      wrapper.innerHTML = ''
      page--

      let start = rows_per_page * page
      let end = start + rows_per_page
      let paginatedItems = items.slice(start, end)

      paginatedItems.forEach((elem, i) => {
        console.log(elem.Name)
        let template = `
          <div class="item">${elem.Name} - (${elem.Manufacturer_ID})</div>
        `
        wrapper.insertAdjacentHTML('beforeend', template)
      })
    }

    function setupPagination(items, wrapper, rows_per_page) {
      wrapper.innerHTML = ''

      let page_count = Math.ceil(items.length / rows_per_page);
      
      for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationButton(i, items)
        wrapper.appendChild(btn)
      }
    }

    function paginationButton (page, items) {
      let button = document.createElement('button')
      button.innerText = page
      if (current_page == page) button.classList.add('active')

      button.addEventListener('click', function() {
        current_page = page
        displayList(items, list_element, rows, current_page)
      })

      return button
    }

    displayList(list_items, list_element, rows, current_page)
    setupPagination(list_items, pagination_element, rows)

  })

// list_items > items - массив
// list_element > - контейнер для элементов
// rows - количество элементов на странице
// current_page - текущая страница

// items.forEach((elem, i) => {
//   let template = `
//     <div class="item"><span class="list__number">${++i}</span> ${elem.Name}</div>
//   `
//   wrapper.insertAdjacentHTML('beforeend', template)
// })

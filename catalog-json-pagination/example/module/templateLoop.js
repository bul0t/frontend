export default function (data, rows) {
  const jsShowElements = document.querySelector('.js-show-elements')
  const listHeader = document.querySelector('.js-list-header')
  const pagination = document.querySelector('.js-pagination')

  /* Переменные для пагинации */
  let current_page = 1 // текущая страница, на которой мы находимся
  //let rows = 30 // количество элементов на странице

  /* Работаем с количеством товаров */
  listHeader.innerHTML = ''
  const listHeaderTemplate = `
    <h2 class="list__title">Вывод товаров</h2>
    <div class="list__amount">Всего элементов <span>${data.length}</span> шт.</div>
    <!-- <div class="list__amount-page">На странице <span>${rows}</span> шт.</div> -->`
  listHeader.insertAdjacentHTML('afterbegin', listHeaderTemplate)

  /* Работаем с пагинацией */
  pagination.innerHTML = ''
  const paginationTemplate = `
    <div class="pagination__element">Пагинация</div>`
  pagination.insertAdjacentHTML('afterbegin', paginationTemplate)

  // Выводим элементы
  function displayList(data, jsShowElements, rows, current_page) {
    jsShowElements.innerHTML = ''
    current_page--

    let start = rows * current_page
    let end = start + rows
    let paginatedItems = data.slice(start, end)

    paginatedItems.forEach((elem, i) => {
      if (!elem.Image) elem.Image = "https://avtoalfa.com/img/icons/no_photo.svg"

      const elementTemplate = `
        <div class="element">
          <div class="element__img">
            <img src="${elem.Image}" width="204" height="136" />
          </div> <!-- element__img -->
          <div class="element__description">
            <div class="element__name">${elem.Name}</div>
            <div class="element__manufacturer">
              <img class="element__manufacturer-logo" src="${elem.logo}" />
              <div class="element__manufacturer-txt">${elem.Manufacturer}</div>
            </div>
            <div class="element__articul"><b>Артикул:</b> ${elem.Articul}</div>
          </div> <!-- element__description -->
          <div class="element__sale">
            <div class="element__price">${elem.Price}</div>
            <div class="element__your-price">Ваша цена</div>
            <div class="cart">
              <div class="stock">
                <div class="stock__description">На складе:</div>
                <div class="stock__amount">${elem.Stock} ${elem.unit}.</div>
              </div> <!-- stock -->
              <div class="count">
                <div class="count__wrap">
                  <button class="count__minus button">&ndash;</button>
                  <input class="count__in" type="text" value="1" />
                  <button class="count__plus button">+</button>
                </div>
                <button class="count__cart button">В корзину</button>
              </div> <!-- count -->
            </div> <!-- cart -->
          </div> <!-- element__sale -->
        </div> <!-- element -->
      `
      jsShowElements.insertAdjacentHTML('beforeend', elementTemplate)
    })
  }

  function setupPagination(data, pagination, rows) {
    pagination.innerHTML = ''
    let page_count = Math.ceil(data.length / rows);

    for (let i = 1; i < page_count + 1; i++) {
      let btn = paginationButton(i, data)
      pagination.appendChild(btn)
    }
  }

  function paginationButton (i, data) {
    let button = document.createElement('button')
    button.classList.add('pagination__element')
    button.innerText = i
    if (current_page == i) button.classList.add('active')

    button.addEventListener('click', function() {
      current_page = i
      displayList(data, jsShowElements, rows, current_page)
    })

    return button
  }

  displayList(data, jsShowElements, rows, current_page)
  setupPagination(data, pagination, rows)
}

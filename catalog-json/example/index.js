import sortNo from './module/sort-no.js'
import sortAZ from './module/sort-az.js'
import sortZA from './module/sort-za.js'
import sortPriceAZ from './module/sort-price-az.js'
import sortPriceZA from './module/sort-price-za.js'
import show10 from './module/show-10.js'
import show30 from './module/show-30.js'
import showAll from './module/show-all.js'
import showStock from './module/show-stock.js'
import autocomplete from './module/autocomplete.js'

sortNo() // загрузка JSON-данных по-умолчанию при открытии страницы

// Сортировка от A до Я
const jsSortAZ = document.querySelector('.js-sort-az')
jsSortAZ.addEventListener('click', function () {
  sortAZ()
})

// Сортировка от Я до А
const jsSortZA = document.querySelector('.js-sort-za')
jsSortZA.addEventListener('click', function () {
  sortZA()
})

// Сортировка по цене от наименьшего к большему
const jsSortPriceAZ = document.querySelector('.js-sort-price-az')
jsSortPriceAZ.addEventListener('click', function () {
  sortPriceAZ()
})

// Сортировка по цене от большего к меньшему
const jsSortPriceZA = document.querySelector('.js-sort-price-za')
jsSortPriceZA.addEventListener('click', function () {
  sortPriceZA()
})

// Показать 10 элементов
const jsShow10 = document.querySelector('.js-show-10')
jsShow10.addEventListener('click', function () {
  show10()
})

// Показать 30 элементов
const jsShow30 = document.querySelector('.js-show-30')
jsShow30.addEventListener('click', function () {
  show30()
})

// Показать все элементы
const jsShowAll = document.querySelector('.js-show-all')
jsShowAll.addEventListener('click', function () {
  showAll()
})

// Показать по наличию на складе
const jsShowStock = document.querySelector('.js-show-stock')
jsShowStock.addEventListener('click', function () {
  showStock()
})

// Автокомплит по названию элемента
const jsAutocomplete = document.querySelector('.js-autocomplete')
jsAutocomplete.addEventListener('input', function() {
  autocomplete(this.value)
})

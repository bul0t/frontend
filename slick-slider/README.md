# slick.js
Слайдер slick.js:
- Адрес сайта: https://kenwheeler.github.io/slick/
- Качаем slick.js по ссылке `get in now`
- В архиве нам нужна папка `slick`

## Размещаем верстку слайдера

    <div class="my-slider">
        <div>Контент</div>
        <div>Контент</div>
        <div>Контент</div>
    </div>

## Подключаем слайдер
- в head помещаем стили слайдера:
    - `<link rel="stylesheet" type="text/css" href="slick/slick.css"/>`
- в head помещаем стили слайдера темы по-умолчанию (необязательно, добавляются стрелки по бокам):
    - `<link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>`
- перед тегом body подключаем jquery:
    - `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js" integrity="sha512-6ORWJX/LrnSjBzwefdNUyLCMTIsGoNP6NftMy2UAm1JBm6PRZCO1d7OHBStWpVFZLO+RerTvqX/Z9mBFfCJZ4A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`
- после jquery вставляем slick.js:
    - `<script src="slick/slick.min.js"></script>`

## Инициализируем слайдер
Код инициализации размещаем после подключения слайдера:

    $(document).ready(function(){
        $('.my-slider').slick();
    });

Можно добавить настройки:

    $(document).ready(function(){
        $('.my-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    });

## Разное
- jquery.slim.js - убран устаревший код, анимации и AJAX

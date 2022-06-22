# fancybox.js
Модальное окно fancybox.js:
- Адрес сайта:
    - старый: http://fancybox.net/
    - новый: https://kenwheeler.github.io/slick/
- Качаем fancybox.js по ссылке `Version 1.3.4 (2010/11/11)`
- В архиве нам нужна папка `fancybox`

## Размещаем верстку для fancybox
Обрамить изображение или контент, ссылкой:

    <a class="modal__item" href="img/1.jpg">
        <img class="modal__image" src="img/1-small.jpg" alt=""/>
    </a>

## Подключаем fancybox
- в head помещаем стили fancybox:
    - `<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css" />`
- перед тегом body подключаем jquery:
    - `<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>`
- после jquery вставляем fancybox.js:
    - `<script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>`

## Инициализируем fancybox
Код инициализации размещаем после подключения слайдера:

    $(document).ready(function(){
        $(".modal__item").fancybox();
    });

Можно использовать настройки для галереи:

    $(document).ready(function(){
        $(".modal__item").fancybox({

        });
    });

## Группируем изображения
Можно сгруппировать несколько изображений чтобы они листались в модальном окне:
- добавляем в ссылку атрибут `rel="group"`
- инициализируем: `$(".modal-gallery__item").fancybox();`

## Разное
- jquery.slim.js - убран устаревший код, анимации и AJAX

console.log ('Самопроверка:\nЗадание выполнено на 110 из 110 баллов\nФинальный результат 100 баллов');
console.log ('1.Вёрстка валидная +10');
console.log ('2.Вёрстка семантическая +20\nПрисутствуют:\n- <header>, <main>, <footer> +3\n- четыре элемента <section> +3\n- только один заголовок <h1> +3\n- три заголовка <h2> +3\n- один элемент <nav> +3\n- два списка ul > li > a +3\n- четыре кнопки <button? +2');
console.log ('3.Вёрстка соответствует макету +48\n- блок <header> +6\n- секция preview +9\n- секция steps +9\n- секция destinations +9\n- секция stories +9\n- блок <footer> +6');
console.log ('4.Требования к css + 12\n- для построения сетки используются флексы или гриды +2\n- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n- фоновый цвет тянется на всю ширину страницы +2\n- иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n- изображения добавлены в формате .jpg +2\n- есть favicon +2');
console.log ('5.Интерактивность, реализуемая через css +20\n- плавная прокрутка по якорям +5\n- иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается доабвление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\n- интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5');


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const nav = document.querySelector('.menu__list');
function toggleMenu() {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.classList.toggle('lock');
}
burger.addEventListener('click', toggleMenu);


function closeMenu(event) {
if (event.target.classList.contains('menu__link') || event.target.classList.contains('menu__close')
|| event.target.classList.contains('menu__close-button')) {
    burger.classList.remove('open');
    menu.classList.remove('open');
    document.body.classList.remove('lock');
  }
}

nav.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);


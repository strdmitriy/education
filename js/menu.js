'use strict';
(function() {
var navToggle = document.querySelector('.toggle');
var menuToggle = document.querySelector('.main-navigation--visible');
var toggleBtn = document.querySelector('.toggle');
var btnSearch = document.querySelector('.btn-search');
var searchForm = document.querySelector('.search-form');
var headerBackground = document.querySelector('.main-header');
var modalClose = document.querySelector('#modal_close');
var go = document.querySelector('#go');
var faooterBtn = document.querySelector('.page-footer__subscribe-button')
navToggle.addEventListener('click', toggle);
function toggle(e) {
  e.preventDefault();
  menuToggle.classList.toggle('main-navigation--visible');
  toggleBtn.classList.remove('.toggle2');
  navToggle.classList.toggle('toggle--opened');
}

btnSearch.addEventListener('click', function (e) {
  searchForm.classList.toggle('searchflex');
  headerBackground.classList.toggle('headerbackground');

});

$(window).scroll(function() {
    var $block = $('.main-header');
    var $block2 = $('.toggle');
     // ID шапки
    if($(window).scrollTop() > 0) { // Тут идея в том, что блок привязывается к верху, как только "прилипает" к верху окна браузера. Замените $block.offset().top на любое значение и получится, что когда вы проскроллили на большее кол-во пиксейлей, чем указали, добавиться класс к шапке.
        $block.addClass('fixed');
        $block2.addClass('.toggle2');
         // Добавляем класс fixed. В стилях указываем для него position:fixed, height и прочее, чтобы сделать шапку фиксированной.
    } else {
        $block.removeClass('fixed');
         // удаляем класс
    }
});

go.addEventListener('click',function(event){ // лoвим клик пo ссылки с id="go"
 event.preventDefault(); // выключaем стaндaртную рoль элементa
 $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
   function(){ // пoсле выпoлнения предъидущей aнимaции
     $('#modal_form')
       .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
       .animate({opacity: 1, top: '3539px'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
 });
});
/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
modalClose.addEventListener('click',function(){ // лoвим клик пo крестику или пoдлoжке
 $('#modal_form')
   .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
     function(){ // пoсле aнимaции
       $(this).css('display', 'none'); // делaем ему display: none;
       $('#overlay').fadeOut(400); // скрывaем пoдлoжку
     }
   );
});
})();
$(document).ready(function() {
  $('.page-footer__subscribe-input').blur(function() {
    if($(this).val() != '') {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      if(pattern.test($(this).val())){
        $(this).css({'border' : '1px solid #569b44'});
        $('#email').attr('placeholder', 'Спасибо вы подписаны!').css({'color': 'grey'});
      } else {
        $(this).css({'border' : '1px solid #ff0000'});
        $('#email').attr('placeholder', 'Некорректный e-mail').css({'color': 'red'});
      }
    } else {
      $(this).css({'border' : '1px solid #ff0000'});
    }
  });
});

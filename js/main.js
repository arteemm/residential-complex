$(document).ready(function () {
  var currentFloor = 2; //переменная где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); // кнопка увеличения этажа
  var counterDown = $(".counter-down"); // кнопка уменьшения этажа

   // функция при наведении мышью на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor') ; // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
  });
  
  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () { 
    // проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) { 
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажем, чтобы было 01 а не 1
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor') ;// удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

   // отслеживаем клик по кнопке ввниз
  counterDown.on('click', function () {
    // проверяем значение этажа, оно не должно быть меньше 2
    if (currentFloor > 2) {
      currentFloor--; // вычитаем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});// форматируем переменную с этажем, чтобы было 01 а не 1
      $('.counter').text(usCurrentFloor);// записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor') ;// удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсвечиваем текущий этаж
    }
  });
});
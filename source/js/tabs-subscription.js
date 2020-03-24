'use strict';

(function () {
  var listTime = document.querySelectorAll('.list-tick-time li');
  var listProducts = document.querySelectorAll('.list-products li');
  var activeLine = document.querySelector('.subscription__line--active');

  var oneInfoPrices = [
    '5000',
    '1700',
    '2700'
  ];
  var twoInfoPrices = [
    '30000',
    '10200',
    '16200'
  ];
  var threeInfoPrices = [
    '60000',
    '20400',
    '32400'
  ];

  var oneInfoTimeDecriptions = [
    '12 занятий',
    'с 8:00 до 17:00',
    'с 8:00 до 22:00'
  ];

  var twoInfoTimeDecriptions = [
    '72 занятия',
    'с 8:00 до 17:00',
    'с 8:00 до 22:00'
  ];

  var threeInfoTimeDecriptions = [
    '144 занятий',
    'с 8:00 до 17:00',
    'с 8:00 до 22:00'
  ];


  var toggleitem = function (evt) {
    var arrayListTime = Array.prototype.slice.call(listTime, 0);
    arrayListTime.forEach(function (itemTime, i) {
      var widthItemTime = itemTime.offsetWidth;
      if (itemTime.classList.contains('list-tick-time__item--active') === evt.target) {
        return;
      }

      if (itemTime.classList.contains('list-tick-time__item--active')) {
        itemTime.classList.remove('list-tick-time__item--active');
      }

      if (evt.target === itemTime) {
        itemTime.classList.add('list-tick-time__item--active');
        activeLine.style.width = widthItemTime + 'px';
        activeLine.style.left = (itemTime.offsetLeft - 589) + 'px';

        var arrayInfos = Array.prototype.slice.call(listProducts, 0);
        arrayInfos.forEach(function (listProduct, b) {
          var itemTimeDescription = listProduct.querySelector('.list-products__item-time');
          var itemPrice = listProduct.querySelector('.list-products__price-number');
          if (i === 0) {
            itemPrice.textContent = oneInfoPrices[b];
            itemTimeDescription.textContent = oneInfoTimeDecriptions[b];
          }
          if (i === 1) {
            itemPrice.textContent = twoInfoPrices[b];
            itemTimeDescription.textContent = twoInfoTimeDecriptions[b];
          }
          if (i === 2) {
            itemPrice.textContent = threeInfoPrices[b];
            itemTimeDescription.textContent = threeInfoTimeDecriptions[b];
          }
        });
      }
    });
  };

  Array.prototype.forEach.call(listTime, function (itemTime) {
    itemTime.addEventListener('click', toggleitem);
  });
})();

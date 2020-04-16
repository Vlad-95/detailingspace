
$(document).ready(function () {

  //меню в мобилке
  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.mobile-menu').slideToggle();
  });
  $('.mobile-menu li a').click(function () {
    $('.burger').removeClass('active');
    $('.mobile-menu').slideUp();
  });


    //слайдер надписей "что такое детейлинг"
	$('.clouds-slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 3,
		centerMode: false,
		centerPadding: '60px',
		autoplay: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 319,
				settings: {
					centerMode: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {

					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: "unslick"
			}

		]
	});
	$('.clouds-slider .item').matchHeight();


	$(".input").mask("+7(999)999-99-99");


	/*плавный скролл*/
  $(function(){
    $(".mobile-nav li a[href^='#'], .header__nav a[href^='#'], .footer__menu a[href^='#']").click(function(e){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      e.preventDefault();
      return false;
    });
  });


  //цены
  $priceItem = $('.prices-table .item');

  $priceItem.click(function (evt) {
    if (evt.target.classList.contains('js-toggle')) {
      $priceItem.not($(this)).removeClass('active');
      $(this).toggleClass('active');
    }
  });


  // отображение знака вопроса, если есть описание
  $priceItem.each(function () {
    $(this).find('.item-content').each(function () {
      if ($(this).find('.descr-content').length) {
        $(this).find('.descr-toggle').addClass('show');
      }
    });
  });

  // клик по знаку вопроса
  $(document).click(function (evt) {
    var target = $(evt.target);

    if (target.is('.descr-toggle')) {
      target.next('.descr-content').fadeIn();
    } else {
      $('.descr-content').fadeOut()
    }


  });

  // портфолио
  $('.portfolio__slider').slick({
    dots: false,
    arrows: false
  });

  //картинки портфолио
  $('.portfolio__slider .img').imagefill();


    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
        // Создание карты.
    var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
      center: [59.8970972944156,30.409829623787257],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
      zoom: 15
    });

        // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([59.8970972944156,30.409829623787257],{}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map.png',
      iconImageSize: [130, 107],
      iconImageOffset: [-65, -107]
    });

    myMap.behaviors.disable('scrollZoom');

        // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    }




});

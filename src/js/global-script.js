$( document ).ready(function() {

  $("#main-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    center: true
  });

  $("#partners-carousel").owlCarousel({
    items: 4,
    nav: true,
    margin: 30,
    dots: true,
    loop: true
  });

  $("#about-gellery").owlCarousel({
    items: 4,
    nav: true,
    margin: 30,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    dots: false,
    loop: true
  });

  //toggle catalog filter
  $('.tags__item').click(function () {
    $(this).toggleClass('tags__item--active')
  });

  //toggle catalog filter end
  $('.delivery-form__item .delivery-form__item-var').click(function () {
    $(".delivery-form__item").removeClass("delivery-form__item--active");
    $(this).parent().toggleClass('delivery-form__item--active');
  });

  //toggle delivery-form

  //toggle delivery-form end

  // toggler main blocks
  $('.btn-get').click(function () {
    $(this).closest('.c-card__buy').find('.c-card__get').hide();
    $(this).closest('.c-card__buy').find('.c-card__incr').show();
  });

  //increment field
	$('.incr__minus').click(function () {
        var $input = $(this).parent().find('.incr__val span');
        var count = parseInt($input.html()) - 1;
        count = count < 1 ? 0 : count;
        $input.html(count);
    });

	$('.incr--one .incr__minus').click(function () {
        var $input = $(this).parent().find('.incr__val span');
        var count = parseInt($input.html()) - 1;
        count = count < 1 ? 1 : count;
        $input.html(count);
    });

	$('.incr__plus').click(function () {
	    var $input = $(this).parent().find('.incr__val span');
	    var count = parseInt($input.html()) + 1;
	    count = count > 100 ? 100 : count;
	    $input.html(count);
	});

  $(function() {
    $('nav#menu').mmenu();
  });

});

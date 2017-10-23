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

  //toggle catalog filter
  $('.tags__item').click(function () {
    $(this).toggleClass('tags__item--active')
  })
  //toggle catalog filter end

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

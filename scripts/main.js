$(window).on('load', function() {

  // FANCY BOX

  // const $gallery = $('[data-fancybox="gallery"]');
  //
  // if ($gallery.length) {
  //   $gallery.fancybox({
  //     protect: true
  //   });
  // }


  const $container = $('.grid');
  // initialize
  $container.masonry({
    //columnWidth: 200,
    itemSelector: '.item'
});

  $('.item > a').removeAttr('href');

// ScrollReveal().reveal('.item', { delay: 500 });
ScrollReveal().reveal('.item', { easing: 'steps(10)' });
ScrollReveal().reveal('.item', { interval: 100 });
ScrollReveal().reveal('.item', {
    distance: '0px',
    opacity: 0.8
});


});

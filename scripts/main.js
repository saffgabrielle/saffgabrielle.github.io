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
  })
  $('.item > a').removeAttr('href');




});

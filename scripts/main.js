$(() => {

  new TypeIt('#hero-text-subtext', {
    strings: ["photographing beautiful people and places"],
    speed: 50,
    breakLines: true,
    autoStart: true,
  });

//   $(window).('scroll', function() {
//      if ($(window).scrollTop() > 5) {
//          $('.hero-text-title').hide();
//      }
//      else {
//          $('.hero-text-title').show();
//      }
// });

  $('#grid2 img').each(function(){
      var $this = $(this);
      $this.wrap('<div class="item"><a></a></div>');
      $('a').removeAttr('href');
  });
  $('#grid2').addClass('effect-2');

  $(window).load(function(){
    var $container = $('.grid');
    // initialize
    $container.masonry({
      //columnWidth: 200,
      itemSelector: '.item'
    })
    $('.item > a').removeAttr('href')
  })


});

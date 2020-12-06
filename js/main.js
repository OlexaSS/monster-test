  $(function(){
    //   slick slider
    $('.testimonials__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'testimonials__slider-dots',
        arrows: false,
      });

    // scroll to top
      let btn = $('#toTop');
      $(window).scroll(function() {     
        if ($(window).scrollTop() > 300) {
           btn.addClass('show');
         } else {
           btn.removeClass('show');
         }
       });

       btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

    // accordeon
    $('.faq__item .faq-btn').on('click', f_acc);
    function f_acc(){
        $(this).toggleClass('close-btn');
        $(this).next().slideToggle(500);
    }

    ///// header btn
    $('.header-btn').on('click', function(){
      $('.navbar-nav').addClass('active');
      $('.header-close-btn').addClass('active');
      $('.header-btn').addClass('disable');
    });

    $('.header-close-btn').on('click', function(){
      $('.navbar-nav').removeClass('active');
      $('.header-close-btn').removeClass('active');
      $('.header-btn').removeClass('disable');
    });
});
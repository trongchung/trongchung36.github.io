$(function() {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
        overlay =$("<div class='overlay'></div> ");


    // Nav toggle
    navToggle.on('click', function(e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });

    $( "body" ).prepend(overlay);
    overlay.click(function(){
        navToggle.trigger('click');
        // $(this).toggle();
    })

    // Nav dropdown toggle
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function(e) {
        e.stopPropagation();
    });


});


$( window ).load(function() {
    render_size();
    var url = window.location.href;
    $('.menu-item  a[href="' + url + '"]').parent().addClass('active');
});

$( window ).resize(function() {
    render_size();
});



function render_size(){

    var h_7065 = $('.h_7065 img').width();
    $('.h_7065 img').height( 0.7065 * parseInt(h_7065));

}


if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('clearfix');
        } else {
            $('.sticky-header').removeClass('clearfix');
        }
    });
}


$(function () {
      // search dropdown button
      $('.btn_search').click(function (e) {
          e.preventDefault();
          $(this).parents('.search_drop').find('.form_search').toggleClass('open')
      })
      $(document).click(function (event) {
          // Check if clicked outside target
          if (!($(event.target).closest(".search_drop").length)) {
              // Hide target
              $(".form_search").removeClass('open');
          }
      });
    })


$(function() {
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=200) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });
    }, 0);

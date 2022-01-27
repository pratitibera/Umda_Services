// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

$(document).ready(function () {
    // AOS Instance
    AOS.init();

    $('#servicesSection').owlCarousel({
        loop: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('#productSection').owlCarousel({
        loop: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        rtl: true,
        navText: [$('.owl-navigation-products .owl-nav-next'), $('.owl-navigation-products .owl-nav-prev')],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            960: {
                items: 6
            }
        }
    });

    $('#clients').owlCarousel({
        loop: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation-clients .owl-nav-prev'), $('.owl-navigation-clients .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },
            960: {
                items: 6
            }
        }
    });
});

$(".navbar-nav > li").click(function () {
    // To collapse navbar in mobile view when some link item is selected / clicked
    $(".navbar-nav > li > a").removeClass('active');
    $(this).children('a').addClass('active');
    $(".collapse").collapse('hide');

    // To handle the bar and cross icon at the same time
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(".about_topics > li").click(function () {
    $(".about_topics > li").removeClass('active');
    $(this).addClass('active');
    $(".collapse").collapse('hide');
    $(".about_topic_section").addClass('d-none');
    $(".about_topic_section").removeClass('d-block');
    var id = (this.id).split('_')[1];
    $("#about_" + id).addClass('d-block');
});


function prevBlog(){
    v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) - 1;
    if(v < 1){
      v = 5;
    }
    document.getElementById('s' + v).checked = true;
  }

  function nextBlog(){
    v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) + 1;
    if(v > 5){
      v = 1;
    }
    document.getElementById('s' + v).checked = true;
  }
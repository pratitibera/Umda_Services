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

$("#desktop_work > div > a").click(function () {
    $(".worksection").addClass("d-none");
    var id = $(this).attr('href');
    $(id).removeClass("d-none");
});
$("#mobile_work > li > a").click(function () {
    $(".worksection").addClass("d-none");
    var id = $(this).attr('href');
    $(id).removeClass("d-none");
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


function prevBlog() {
    v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) - 1;
    if (v < 1) {
        v = 5;
    }
    document.getElementById('s' + v).checked = true;
}

function nextBlog() {
    v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) + 1;
    if (v > 5) {
        v = 1;
    }
    document.getElementById('s' + v).checked = true;
}


//selecting all required elements
if (screen.width > 500) {
    var filterItem = document.querySelector(".itemsdesktop");
    var filterImg = document.querySelectorAll(".gallery .image");
} else {
    var filterItem = document.querySelector(".itemsmob");
    var filterImg = document.querySelectorAll(".gallery .image");
}

window.onload = () => { //after window loaded
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name"); //getting image data-name value
                //if user selected item data-name value is equal to images data-name value
                //or user selected item data-name value is equal to "all"
                if ((filterImges == filterName) || (filterName == "all")) {
                    image.classList.remove("hide"); //first remove the hide class from the image
                    image.classList.add("show"); //add show class in image
                } else {
                    image.classList.add("hide"); //add hide class in image
                    image.classList.remove("show"); //remove show class from the image
                }
            });
        }
    }
}
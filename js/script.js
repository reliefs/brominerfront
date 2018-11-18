$(document).ready(function(){

    // main-slider
    var swiper = new Swiper('.swiper-main', {
        loop: true,
		autoplay: true,
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination-main',
            clickable: true
        },
        navigation: {
            nextEl: '.next-main',
            prevEl: '.prev-main'
        },
        breakpoints: {
            939: {
                autoHeight: true
            }
        }
    });
    var swiper = new Swiper('.swiper-partners', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.next-partners',
            prevEl: '.prev-partners'
        },
        breakpoints: {
            1023: {
                spaceBetween: 20
            },
            939: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            560: {
                spaceBetween: 10,
                slidesPerView: 1
            }
        }
    });
    var swiper = new Swiper('.swiper-press', {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.next-press',
            prevEl: '.prev-press'
        },
        breakpoints: {
            992: {
                autoHeight: true
            },
            939: {
                slidesPerView: 1
            }
        }
    });
    var swiper = new Swiper('.swiper-news', {
        spaceBetween: 20,
        speed: 1000,
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
            nextEl: '.next-news',
            prevEl: '.prev-news'
        },
        breakpoints: {
            992: {
                autoHeight: true
            },
            560: {
                spaceBetween: 10,
                slidesPerView: 1
            }
        }
    });

    // faq
    $('.question').click(function(){
        $(this).parents('.faq-item').find('.answer').slideToggle(400);
        $(this).parents('.faq-item').toggleClass('active');
    });

    // select
    $('select').fancySelect();

    /* tabs
    (function($) {
        $(function() {
            $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.wrap_tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
            });
            var tabIndex = window.location.hash.replace('#tab','')-1;
            if (tabIndex != -1) $('ul.tabs_caption li').eq(tabIndex).click();
            $('a[href*=#tab]').click(function() {
                var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
                $('ul.tabs_caption li').eq(tabIndex).click();
            });
        });
    })(jQuery);*/

    // screen-level-2 hover
    $(function(){
        $(".screen-level-2").hover(
            function() {
                $(this).parent(".main-slide-right-4").addClass("active")
            }, function() {
                $(this).parent(".main-slide-right-4").removeClass("active")
            }
        );
    });

    // scroll to block
    $(".wrapper").on("click","nav a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // mob nav
    $('.open-nav').click(function(){
        $('.wrap-nav').addClass('open');
    });
    $('.close-nav, nav a').click(function(){
        $('.wrap-nav').removeClass('open');
        e.preventDefault();
    });


});


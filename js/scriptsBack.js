/*
*   ALL SCRIPTS JS
 */


/*
Toggle Mobile menu
 */
$('.m_menu').on('click', function () {
    $('#header').toggleClass('menuOpened');
});

/*
Fixed Header
 */
if ($(window).scrollTop() > 0) {
    $('#header').addClass('scrolled');
} else {
    $('#header').removeClass('scrolled');
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('#header').addClass('scrolled');
    } else {
        $('#header').removeClass('scrolled');
    }
});

/*
Smooth Scroll
 */
$("body").on("click","a.anchore, .anchore a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});

/*
Sripts Modals
 */
$('.kd__modal-bg').on('click', function(){
    $('.kd__modal,.kd__modal-bg').removeClass('modal-opened');
});
function modalOpen(modal) {
    $(modal+',.kd__modal-bg').addClass('modal-opened');
}
function modalClose(modal) {
    $(modal+',.kd__modal-bg').removeClass('modal-opened');
}

/*
Slider

$('.solutions').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    prevArrow: '<button id="prev" type="button" class="slick-arrow"><i class="icon-arrow-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button" class="slick-arrow"><i class="icon-arrow-right" aria-hidden="true"></i></button>'
});
$('.solutions').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var elem = $(slick.$slides[nextSlide]);
    $('.bg2__subheader').html(elem.data('subheader'));
}); */

/*
Remove Composer Css
 */
//$('#js_composer_front-css').remove();

/*
Select LAng
 */
$('#head__langs').fancySelect().on('change.fs', function () {
    window.location.replace(this.value);
});

$('#bg2 li.blue-btn').on('click', function(){
    var nth = $(this).data('tab');
    $('#bg2 .tabs_content, #bg2 li.blue-btn').removeClass('active');
    $('#bg2 .tabs_content:nth-of-type('+nth+')').addClass('active');
    $(this).addClass('active');
});
var foundersWrap = $('.active-founders-block');
foundersWrap.on('click', '.tabs_caption li', function(){
    var nth = $(this).data('tab');
    foundersWrap.find('.tabs_content, li.blue-btn').removeClass('active');
    foundersWrap.find('.tabs_content:nth-of-type('+nth+')').addClass('active');
    $(this).addClass('active');
});

var first = $('.road-map');
var second = $('.road-map-item:nth-of-type(5)');
var height = second.offset().top - first.offset().top;
$('.roadmap__centerline').css({'height':height});
function showRoadMap() {
    $('.road-map').addClass('show');
    $('.road-map-block .center-btn').hide();
    var first = $('.road-map');
    var second = $('.road-map-item:last-child');
    var height = second.offset().top - first.offset().top;
    $('.roadmap__centerline').css({'height':height});
}

/*
particles
 */
var width = 0;
if(screen.width > width) {
    particlesJS("header__particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {"enable": true, "value_area": 710.2328774690454}
            },
            "color": {"value": "#046184"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {"enable": false, "speed": 5, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#046184", "opacity": 0.4, "width": 6},
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 721.5354273894853, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": false, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 5},
                "repulse": {"distance": 97.44926547616141, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    particlesJS("planet__particles-js", {
        "particles": {
            "number": {
                "value": 150,
                "density": {"enable": true, "value_area": 710.2328774690454}
            },
            "color": {"value": "#046184"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 3},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {"enable": false, "speed": 5, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 5.684540486109416, "sync": false}
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#046184",
                "opacity": 0.4,
                "width": 2.4051180912982844
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 962.0472365193136, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": false, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 5},
                "repulse": {"distance": 146.17389821424212, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    particlesJS("planet2__particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {"enable": true, "value_area": 710.2328774690454}
            },
            "color": {"value": "#046184"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 3},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {"enable": false, "speed": 5, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 5.684540486109416, "sync": false}
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#046184",
                "opacity": 0.4,
                "width": 2.4051180912982844
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 962.0472365193136, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": false, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 5},
                "repulse": {"distance": 146.17389821424212, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
}
/*
Calc
 */
 function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if( isNaN(decimals = Math.abs(decimals)) ){
        decimals = 2;
    }
    if( dec_point == undefined ){
        dec_point = ",";
    }
    if( thousands_sep == undefined ){
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if( (j = i.length) > 3 ){
        j = j % 3;
    } else{
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}
function count( mixed_var, mode ) {	// Count elements in an array, or properties in an object
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	  input by: _argos

    var key, cnt = 0;

    if( mode == 'COUNT_RECURSIVE' ) mode = 1;
    if( mode != 1 ) mode = 0;

    for (key in mixed_var){
        cnt++;
        if( mode==1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object) ){
            cnt += count(mixed_var[key], 1);
        }
    }

    return cnt;
}
var calcData = JSON.parse($('#calc__data').html());

// rangeSlider
var rangeSlider1 = document.getElementById('slider-range1');
var rangeSlider1Min = 100;
var rangeSlider1Max = 100000;
var rangeSlider1Start = 10000;
noUiSlider.create(rangeSlider1, {
    start: [ rangeSlider1Start ],
    connect: [true, false],
    tooltips: false,
    update: function(){alert(1)},
    format: wNumb({
        decimals: 0,
        thousand: '',
        postfix: ''
    }),
    range: {
        'min': [ rangeSlider1Min ],
        'max': [ rangeSlider1Max ]
    }
});
var rangeSlider2 = document.getElementById('slider-range2');
noUiSlider.create(rangeSlider2, {
    start: [ 2 ],
    connect: [true, false],
    tooltips: false,
    format: wNumb({
        decimals: 0,
        thousand: '',
        postfix: ''
    }),
    range: {
        'min': [  0 ],
        'max': [ count(calcData)-1 ]
    }
});

var wrap = $('.why-fox');
var invest__value = wrap.find('.invest__value');
var price_for_one__value = wrap.find('.price-for-one__value');
var count__value = wrap.find('.count__value');
var expected_price__value = wrap.find('.expected-price__value');
var calc_time__value = wrap.find('.calc-time__value');
var roi_total__value = wrap.find('.roi-total__value');
var roi_proc__value = wrap.find('.roi-proc__value');
var expected_divident_fox__value = wrap.find('.expected-divident-fox__value');
var expected_divident_dollar__value = wrap.find('.expected-divident-dollar__value');
var bonus__value = wrap.find('.bonus__value');
function updateCalc(){
    var i = calc_time__value.data('value');

    roi_total__value.data('value', invest__value.data('value') / 100 * calcData[i].roi);
    roi_total__value.html(number_format(invest__value.data('value') / 100 * calcData[i].roi, 0, '', ', '));
	var roi_proc__value_data = ( roi_total__value.data('value') - invest__value.data('value') ) / invest__value.data('value') * 100;
    roi_proc__value.data('value', roi_proc__value_data);
    roi_proc__value.html(number_format(roi_proc__value_data, 0, '', ' '));
    //expected_divident_fox__value.data('value', count__value.data('value'));
    //expected_divident_fox__value.html(parseInt(count__value.data('value')));
    if(count__value.data('value') > 6000) {
		expected_divident_dollar__value.data('value', number_format(calcData[i].mesicni_dividenda * count__value.data('value'), 0, '', ', '));
		expected_divident_dollar__value.html(number_format(parseInt(calcData[i].mesicni_dividenda * count__value.data('value')), 0, '', ', '));
	} else {
		expected_divident_dollar__value.data('value', 0);
		expected_divident_dollar__value.html(0);
	}
	if(count__value.data('value') > 200000) {
		bonus__value.data('value', number_format(calcData[i].master_node_mesicni_bonus, 0, '', ', '));
		bonus__value.html(number_format(parseInt(calcData[i].master_node_mesicni_bonus), 0, '', ', '));
	} else {
		bonus__value.data('value', 0);
		bonus__value.html(0);
	}
}

rangeSlider2.noUiSlider.on('update', function ( values, handle ) {
    calc_time__value.data('value', values);
    calc_time__value.html(calcData[values].datum_cas); //Квартал выбранный
    expected_price__value.data('value', calcData[values].ocekavana_cena_fox);
    expected_price__value.html(number_format(calcData[values].ocekavana_cena_fox, 2, ', ', ' '));

    updateCalc();
});
//on change
rangeSlider1.noUiSlider.on('slide', function ( values, handle ) {
    invest__value.data('value', values);
    invest__value.html(number_format(values, 0, '', '')); //Сумма инвестиций
    count__value.data('value', values / parseFloat(price_for_one__value.html()));
    count__value.html(number_format(values / parseFloat(price_for_one__value.html()), 0, '', ', ')); //Колличество фоксов на эту сумму

    var proc = values / (rangeSlider1Max / 100);
    wrap.find('.range-img .line_full').css({'width':proc+'%'});

    updateCalc();
});

//default
invest__value.data('value', rangeSlider1Start);
invest__value.html(number_format(rangeSlider1Start, 0, '', '')); //Сумма инвестиций
count__value.data('value', rangeSlider1Start / parseFloat(price_for_one__value.html()));
count__value.html(number_format(rangeSlider1Start / parseFloat(price_for_one__value.html()), 0, '', ', ')); //Колличество фоксов на эту сумму
var proc = rangeSlider1Start / (rangeSlider1Max / 100);
wrap.find('.range-img .line_full').css({'width':proc+'%'});
updateCalc();

var limit = 7;
$('.top-schedule-number-value span.invest__value').keypress(function(e) {
    if( !isNumeric(e.key) ) {
        return false;
    }
    return this.innerHTML.length < limit;
}).on({
    'paste': function(e) {
        var len = this.innerHTML.length,
            cp = e.originalEvent.clipboardData.getData('text');
        if (len < limit)
            this.innerHTML += cp.substring(0, limit - len);
        return false;
    },
    'drop': function(e) {
        e.preventDefault();
        e.stopPropagation();
    },
    'input': function(){
        var value = parseInt(this.innerHTML);
        if( value > rangeSlider1Max ) {
            value = rangeSlider1Max;
        } else if( value < rangeSlider1Min ) {
            value = rangeSlider1Min;
        }
        
        rangeSlider1.noUiSlider.set(value);
        
        invest__value.data('value', value);
        count__value.data('value', value / parseFloat(price_for_one__value.html()));
        count__value.html(number_format(value / parseFloat(price_for_one__value.html()), 0, '', ', ')); //Колличество фоксов на эту сумму
        
        var proc = value / (rangeSlider1Max / 100);
        wrap.find('.range-img .line_full').css({'width':proc+'%'});
        
        updateCalc();
    }
});


/* meets */
function showMeets(){
    $('#meets').addClass('show');
    $('#meets .center-btn').remove()
}

$('.download-file select').fancySelect().on('change.fs', function () {
    window.open(this.value);
});
$('.download-file select').on('change', function(){
	window.open(this.value);
});

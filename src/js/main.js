    jQuery(document).ready(function($) {
            $('.header-slider__list').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            fade: true,
            touchMove: true,
            // prevArrow: $('.nav_icon_prev'),
            // nextArrow: $('.nav_icon_next'),
            swipe: true,
            autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true
        });

        $('.events-galery__list').slick({
            dots: false,
            infinite: true,
            speed: 300,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            touchMove: true,
            prevArrow: $('.events-galery__prev'),
            nextArrow: $('.events-galery__next'),
            swipe: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
        $('.recall__list').slick({
            dots: false,
            infinite: true,
            speed: 300,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            touchMove: true,
            prevArrow: $('.recall__prev'),
            nextArrow: $('.recall__next'),
            swipe: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    });

    $('.round-counter').each(function() {
        var datavalue = $(this).data('value');
        var datacolor = $(this).data('color');
        var datavaluedop = datavalue * 0.2;
        var datavaluepart = (datavalue - datavaluedop)/ 100;
        var ctx = $(this).get(0).getContext('2d');
        var al = 0; // amount loaded
        var start = 4.72; // circle start point. start on at 12 o'clock position
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height -25;
        var diff;
        function progressSim() {
            diff = ((al / (datavalue + datavaluedop)) * Math.PI*2*10).toFixed(2);
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = 10;
            ctx.fillStyle = '#' + datacolor + '';
            ctx.strokeStyle = '#' + datacolor + '';
            ctx.textAlign = 'center';
            ctx.fontWeight = 'bold';
            ctx.font = '50px Roboto, sans-serif';
            ctx.fillText(Math.ceil(al) + '', cw*0.5, ch*0.5+11, cw);
            ctx.beginPath();
            ctx.arc(135, 145, 120, start, diff/10+start, false);
            ctx.stroke();
            al = al + datavaluepart; // increment amount loadet +1 every 50sec
            if(al > datavalue) {
                clearTimeout(sim);
                // Pregress copmlete
            }
        }
        var sim = setInterval(progressSim, 40);
    });






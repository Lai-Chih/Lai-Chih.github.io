$(document).ready(function(){
    
    $('header').on('click', '.openBtn',function(){
        $(this).addClass('close');
        $('nav').slideDown(200);
    });
    $('header').on('click', '.close',function(){
        $(this).removeClass('close');
        $('nav').slideUp(100);
    });

    $('body').on('click', '.fixBar span', function(){
         var x = $(this).attr('x');
//        alert(v);
        if(x == 0){
            $(this).parent('.fixBar').addClass('onclick');
            $(this).attr('x',1);
        }else if(x == 1){
            $(this).parent('.fixBar').removeClass('onclick');
            $(this).attr('x',0);
        }

    });
    $('.wrapper').on('click', function(){
         $('.fixBar').removeClass('onclick');
         $('.fixBar span').attr('x',0);
    });


    function mq() {
        var query = Modernizr.mq('(max-width: 768px)');
        if (query) {
            $('nav').slideUp(0);

            // JavaScript here
            // 當CSS media query計算的視窗寬度小於769px時執行
        } else {
            $('nav').slideDown(0);

            // JavaScript here
            // 當CSS media query計算的視窗寬度大於等於769px時執行
        }
    };
    $(window).resize(function() {
        $('.openBtn').removeClass('close');
        mq();
    });
    mq();

    var tl = new TimelineLite();
    TweenMax.set(".search", {x:420});
    tl.to(".search", 1.5, { ease: Elastic.easeInOut.config(1, 0.75), x:0, delay:0.5});
    $('.loading, .loadingBg').fadeOut(200);

});
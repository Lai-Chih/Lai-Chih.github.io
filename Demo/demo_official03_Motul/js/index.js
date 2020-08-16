$(document).ready(function(){
    var slider = $('.bxslider02').bxSlider();
    $('.wrapper').offset().top;
    $('.bxslider').bxSlider({
          auto: true,
          nextText: '',
          prevText: '',
          pause: 3000,
          adaptiveHeight: true
      });
//      $('.bxslider02').bxSlider({
//          auto: true,
//          nextText: '〉',
//          prevText: '〈',
//          speed: 200
//
//      });
    function mq() {
        var query = Modernizr.mq('(max-width: 768px)');

        if (query) {
            slider.destroySlider();
            $('.bxslider02').bxSlider({
              auto: true,
              nextText: '〉',
              prevText: '〈',
              speed: 200

          });

            // JavaScript here
            // 當CSS media query計算的視窗寬度小於769px時執行
        } else {
            // JavaScript here
            // 當CSS media query計算的視窗寬度大於等於769px時執行
        }
    };
    $(window).resize(function() {
        
        mq();
    });
    mq();

    
    
//    alert(bodyH);
    
    
//    function getScrollTop(){
//      var bodyTop = 0;
//      if (typeof window.pageYOffset != "undefined") {
//        bodyTop = window.pageYOffset;
//
//      } else if (typeof document.compatMode != "undefined"
//                 && document.compatMode != "BackCompat") {
//        bodyTop = document.documentElement.scrollTop;
//
//      } else if (typeof document.body != "undefined") {
//        bodyTop = document.body.scrollTop;
//      }
//      /*顯示出捲動後的高度值*/
////      document.getElementById("jsScrollTop").innerHTML = bodyTop;
//      $('.wrapper').innerHTML = bodyTop;
//    };

    
    $(window).scroll(function(){
        scroll();
    });
//    scroll();
    var evolution = $('.evolution > *'),
        introduction = $('.introduction > *'),
        blogger = $('.blogger > *');
    var Box = evolution.find('.Box > *');
    
     TweenMax.set(evolution, {y:200, opacity:0});
     TweenMax.set(introduction, {y:200, opacity:0});
     TweenMax.set(blogger, {y:200, opacity:0});
     TweenMax.set(blogger, {y:200, opacity:0});
     TweenMax.set(Box, {scale:0.1, opacity:0});
    
    
//    $('.evolution, .introduction, .blogger').fadeOut(0);
    
    function scroll(){
        var bodyH = $('.wrapper').height();
        var bodyTop = 0;
        if (typeof window.pageYOffset != "undefined") {
            bodyTop = window.pageYOffset;

        } else if (typeof document.compatMode != "undefined"
                 && document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;

        } else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
        }
        $('.wrapper').innerHTML = bodyTop;
        
        var percent = bodyTop / bodyH * 100;
        var x = Math.floor(percent);
//        alert(x);
        
         var t1 = new TimelineLite();
         var t2 = new TimelineLite();
         var t3 = new TimelineLite();
        
        var wd = $(window).width();
        
        switch(x){
            case 1:                
            case 2:                
            case 3:                
            case 4:                
            case 5:                
            case 6:                
            case 7:                
            case 8:                
            case 9:                
            case 10:                
            case 11:                
            case 12:                
            case 13:                
            case 14:                
            case 15:                
            case 16:                
            case 17:                
            case 18:                
            case 19:                
            case 20:                
            case 21:                
            case 22:                
            case 23:                
            case 24:
                t1.to(evolution, 0.8, {y:0, opacity:1})
                 .to(".Box02 img", 0.5, {scale:1, opacity:1},"-=0.3")
                 .to(".Box02 p", 0.5, {scale:1, opacity:1},"-=0.3")
                 .to(".Box01 img", 0.5, {scale:1, opacity:1},"-=0.4")
                 .to(".Box01 p", 0.5, {scale:1, opacity:1},"-=0.3")                 
                 .to(".Box03 img", 0.5, {scale:1, opacity:1},"-=0.3")
                 .to(".Box03 p", 0.5, {scale:1, opacity:1},"-=0.3");
            break;
            case 25:                
            case 26:                
            case 27:                
            case 28:                
            case 29:                
            case 30:                
            case 31:                
            case 32:                
            case 33:                
            case 34:                
                 t1.to(evolution, 0.8, {y:0, opacity:1})
                 .to(".Box02 img", 0.5, {scale:1, opacity:1},"-=0.3")
                 .to(".Box02 p", 0.5, {scale:1, opacity:1},"-=0.3")
                 .to(".Box01 img", 0.5, {scale:1, opacity:1},"-=0.4")
                 .to(".Box01 p", 0.5, {scale:1, opacity:1},"-=0.3")                 
                 .to(".Box03 img", 0.5, {scale:1, opacity:1},"-=0.3")
                 .to(".Box03 p", 0.5, {scale:1, opacity:1},"-=0.3");
                if(wd<768){t2.to(introduction, 1.2, {y:0, opacity:1},0.3);}
                
            break;
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
                          
                t2.to(introduction, 1.2, {y:0, opacity:1});
            break;
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:  
            case 47:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:            
                t2.to(introduction, 1.2, {y:0, opacity:1});
                if(wd<768){t3.to(blogger, 1.2, {y:0, opacity:1},0.3);}
            break;
            
            case 57:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
                t3.to(blogger, 1.2, {y:0, opacity:1});
            break;
        };
    
    };
    
    
    
    
    
    
    
    
    
    
    
    
});





















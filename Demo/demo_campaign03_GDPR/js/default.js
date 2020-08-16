$(document).ready(function(){
    /**/
    var wdh = $(window).width()
    var ffBox = $('.sec_04').find('.ffBox')
    var ffBoxP = ffBox.find('p')
    var toggleBtn = $('.sec_04').find('.toggleBtn')
    var toggleBtnI = toggleBtn.find('i')
    
    
    /**/
    var procedure = $('.sec_06').find('.procedure')
    var pro01 = $('.sec_06').find('.pro01')
    var pro02 = $('.sec_06').find('.pro02')
    var pro03 = $('.sec_06').find('.pro03')
    var pro04 = $('.sec_06').find('.pro04')
    var tent = $('.sec_06').find('.tent')
    var tent01 = $('.sec_06').find('.tent01')
    var tent02 = $('.sec_06').find('.tent02')
    var tent03 = $('.sec_06').find('.tent03')
    var tent04 = $('.sec_06').find('.tent04')
    var respoSlid01 = $('.respoSlid01')
    
    /* sec_06 桌機版 頁籤 */
    pro01.addClass('open')
    procedure.on('mouseenter', function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('hover').siblings('.hover').removeClass('hover')
        }
    }).on('mouseleave', function(){
        $(this).removeClass('hover')
    })
    
    procedure.on('click', function(){
        if(!$(this).hasClass('open')){
            $(this).removeClass('hover').addClass('open').siblings('.open').removeClass('open')
            tent.fadeOut(0)
            var dataT = $($(this).data('tent'))
//            alert(dataT)
            dataT.fadeIn(400).css({display:''})
        }
    })
    
    /* sec_04 m版開合 */
    toggleBtn.on('click', function(){
        if(!$(this).find('i').hasClass('icon_angleUp')){
            ffBoxP.slideUp(100)
            toggleBtnI.removeClass('icon_angleUp').addClass('icon_angleDown')
            $(this).prev('p').delay(100).slideDown(300)
            $(this).find('i').removeClass('icon_angleDown').addClass('icon_angleUp')
        }else if($(this).find('i').hasClass('icon_angleUp')){
            ffBoxP.slideUp(100)
            toggleBtnI.removeClass('icon_angleUp').addClass('icon_angleDown')
        }

    })
    

    
    
    $(window).resize(function(){
        
        var wdh_rwd = $(window).width()
//        console.log(wdh_rwd)
        if(wdh_rwd < 769){
//            $('.respoSlid01').slick({
//                slidesToShow: 1,
//                infinite: true,
//                dots: true,
//                speed: 300,
//                autoplay: true,
//                autoplaySpeed: 3000
//            });
//            $('.respoSlid02').slick({
//                slidesToShow: 1,
//                infinite: true,
//                dots: true,
//                speed: 300,
//                autoplay: true,
//                autoplaySpeed: 3000
//            });
            
            /* sec_06 桌機版 頁籤 */
            tent.fadeIn(0)
            
            /* sec_04 m版開合 */
            ffBoxP.slideUp(0)
            
            
        }else if(wdh_rwd > 768){
            
            
            /* sec_06 桌機版 頁籤 */
            procedure.removeClass('open')
            pro01.addClass('open')
            tent.fadeOut(0)
            tent01.fadeIn(0)
            
            /* sec_04 m版開合 */
            ffBoxP.slideDown(0)
            toggleBtnI.removeClass('icon_angleUp').addClass('icon_angleDown')
            

//            $('.respoSlid01').slick('unslick');
//            $('.respoSlid02').slick('unslick');
        }
    }).resize()
    
    $('.respoSlid01').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.respoSlid02').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    
    
    /* sec_06 m版 slide dot */
//    $('.respoSlid03').slick({
//        slidesToShow: 4,
//        slidesToScroll: 1,
//        arrows: true,
//        fade: false,
//        asNavFor: '.respoSlid02',
//        focusOnSelect: true
//    });
//   
//    $('.respoSlid03 .dotLi span').on('click', function(){
//        if(!$(this).hasClass('click')){
//            $('.respoSlid03 .dotLi span').removeClass('click')
//            $(this).addClass('click')
//        }
//    })
    
    
    
    
    /* gotopBtn ******************/
    $('.goTop').click(function(){
        // 讓捲軸用動畫的方式移動到 #header 的 top 位置
        // 並加入動畫效果
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 800);

        return false;
    });
    
    
    
    
    
    
    
    
});
$(function(){
    var knowSKS = $('.knowSKS');
    var secUlBG = $('.secUlBG');
    var secUl = $('.secUl');
    
    
    
    
    $('.navBtn').on('click', function(){        
        secUl.slideUp(0)
        knowSKS.removeClass('open')
        knowSKS.children('a').removeClass('active')
        $('#aboutus, #clients, #employee, #insurance, #locations, #security, #sks').find('.knowSKS > a').addClass('active')
        
        if(!$(this).hasClass('open')){
            $(this).addClass('open')
            $('nav').slideDown(200)
            $('.fstUl').delay(150).slideDown(250)
        }else{
            $('.fstUl').slideUp(150)
            $('nav').delay(100).slideUp(150)            
            $(this).removeClass('open')
        }
        
    })    
    
    $('#clients a.anchor, #service a.anchor').on('click', function(){
        // 讓捲軸用動畫的方式移動到 #header 的 top 位置
        // 並加入動畫效果        
        var $anchor = $($(this).attr('href'))
        console.log($anchor)
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: $anchor.offset().top
        }, 800);

        return false;
    });
    
    function mq() {
        var query = Modernizr.mq('(max-width: 768px)');
        if (query) {
            /* 主選單開合 */
            $('.navBtn').removeClass('open')
            $('nav').slideUp(0)
            $('.fstUl').slideUp(0)
            secUlBG.slideUp(0)
            
            /* 選單 scrollBox */
            $('.scrollBox').mCustomScrollbar({
                axis:'y', // horizontal scrollbar
                theme: 'minimal',
                mouseWheel:{ scrollAmount: 60 },
                autoDraggerLength: false,
            });
            
            /* 次選單開合 */
            knowSKS.off('click');
            knowSKS.on('click', function(){
//                console.log('yoooo')                
                if(!$(this).hasClass('open')){            
                    $(this).children('a').addClass('active').css({color:''})
                    $('#aboutus, #clients, #employee, #insurance, #locations, #security, #sks').find('.knowSKS > a').addClass('active')
                    secUl.stop().slideDown(200)
                    $(this).addClass('open')
                }else{            
                    $(this).children('a').removeClass('active').css({color:'#ffffff'})
                    $('#aboutus, #clients, #employee, #insurance, #locations, #security, #sks').find('.knowSKS > a').addClass('active')
                    secUl.stop().slideUp(100)
                    $(this).removeClass('open')
                }       

            });
            // JavaScript here
            // 當CSS media query計算的視窗寬度小於769px時執行
        } else {
            /* 主選單開合 */
            $('.navBtn').removeClass('open')
            $('nav').slideDown(0)
            $('.fstUl').slideDown(0)
            
            $('#aboutus, #clients, #employee, #insurance, #locations, #security, #sks').find('.knowSKS').addClass('open').children('a').addClass('active')
            $('#aboutus, #clients, #employee, #insurance, #locations, #security, #sks').find(secUlBG).slideDown(0)
            $('#aboutus, #clients, #employee, #insurance, #locations, #security, #sks').find(secUl).slideDown(0)
            
            /* 選單 scrollBox */
            $(".scrollBox").mCustomScrollbar("destroy");
            
            /* 次選單開合 */
            knowSKS.off('click');
            knowSKS.on('click', function(){        
                if(!$(this).hasClass('open')){            
                    $(this).children('a').addClass('active')
                    secUlBG.stop().slideDown(150)
                    secUl.stop().delay(50).slideDown(250)
                    $(this).addClass('open')
                }else{            
                    $(this).children('a').removeClass('active')
                    secUl.stop().slideUp(150)
                    secUlBG.stop().delay(50).slideUp(250)
                    $(this).removeClass('open')
                }       

            });
            
            // JavaScript here
            // 當CSS media query計算的視窗寬度大於等於769px時執行
        }
    };
    $(window).resize(function() {
        mq();
    });
    mq();
    
    
});

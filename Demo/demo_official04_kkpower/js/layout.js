$(function(){
	
	
	// 錨點
	$('a.anchor').click(function(){
		var anchorHref = $(this).attr('href')
		var _anchorHref = $(anchorHref)
		
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		// 並加入動畫效果
		
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		if(anchorHref=='#header'){
			$body.animate({
				scrollTop: 0
			}, 800);
		}else{
			$body.animate({
				scrollTop: _anchorHref.offset().top
			}, 800);
		}
		
		return false;
	});
	var goTop = $('.goTopBtn')
	var closetime = 3000;//不滾動時，2秒自動消失
    var setTimeoutId = null;
    var scrolling = false;
    jQuery(function($) {
        $(window).on('scroll', function() {
            scrolling = true;
            if (!!setTimeoutId) {
                clearTimeout(setTimeoutId);
            }

            setTimeoutId = setTimeout(function() {
                scrolling = false;
            }, closetime); 
        });

        setInterval(function() {
            if(scrolling == false){
                goTop.removeClass('active')
            }
        }, 500);
    });
	
	function scrollDirect() {
		var beforeScrollTop = $(window).scrollTop()
		$(window).on('scroll', function () {			
			var afterScrollTop = $(this).scrollTop()
			var delta = afterScrollTop - beforeScrollTop;
			if( delta == 0 ){
				return false;
			}else if(delta > 0 || afterScrollTop < 300){
//				console.log('down')
				if(goTop.hasClass('active')){
					goTop.removeClass('active')
				}
			}else{
//				console.log('up')
				if(!goTop.hasClass('active')){
					goTop.addClass('active')
				}
			}
			beforeScrollTop = afterScrollTop;
		})
	}
	scrollDirect()
	
	// header 下滾
	var header = $('header')
	$(window).on('scroll', function(){
		var winTop = $(window).scrollTop()
		if(winTop != 0){
			if(!header.hasClass('down')){
				header.addClass('down')
//				console.log('yoooo')
		   	}
		}else{
			header.removeClass('down')
		}
	}).scroll()
	
	// m版頂部選單
	var headerBtn = $('.headerBtn')
	var nav = $('nav')
	headerBtn.on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open')
			$(this).parents(header).addClass('open')
			nav.slideDown(300)
		}else{
			$(this).removeClass('open')
			$(this).parents(header).removeClass('open')
			nav.slideUp(200)
		}
	})
	
	function mq() {
		var query = Modernizr.mq('(max-width: 768px)');
		if (query) {
			nav.slideUp(0)
			// 當CSS media query計算的視窗寬度小於769px時執行
		} else {
			nav.slideDown(250)
			// 當CSS media query計算的視窗寬度大於等於769px時執行
		}
	};
	$(window).resize(function() {
		header.removeClass('open')
		headerBtn.removeClass('open')
		mq();
	}).resize()
	
})
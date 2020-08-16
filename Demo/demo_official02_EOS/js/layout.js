$(function(){
	
	// 登錄錨點
	$('a.anchor').on('click', function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		var anchor = $($(this).attr('href'))
		var pageH
//		alert(anchor)
		
		if($(this).attr('href') == '#header'){
			pageH = 0
		}else{
			pageH = 110
		}
		$body.animate({
			scrollTop: anchor.offset().top - pageH
		}, 500);
 
		return false;
	});
	
	
	// goTop
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
	
	
	
	// cookiesAlert
	var cookiesAlert = $('.cookiesAlert')
	var alreadyKnow = $('.alreadyKnow')
	
//	cookiesAlert.delay(1000).slideDown(350)
//	alreadyKnow.on('click', function(){
//		cookiesAlert.delay(300).slideUp(300)
//	})
	
	
	
	
	
})
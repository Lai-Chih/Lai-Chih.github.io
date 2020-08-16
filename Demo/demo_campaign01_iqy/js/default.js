$(function(){
	
	// 傳送後，提示訊息
	var para = location.search	  
	switch(para)
	{
		case '?success':
			alert('恭喜您！資料傳送成功！')
			break;
		case '?fail':
			alert('很抱歉…資料傳送失敗，請過幾分鐘再試一次，謝謝您的耐心')
			break;
	}
	
	
	
	// 登錄錨點
	$('a.anchor').on('click', function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		var anchor = $($(this).attr('href'))
//		alert(anchor)
		$body.animate({
			scrollTop: anchor.offset().top
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
	
	
	
	// lightBox
	var lbBtn = $('.lbBtn')
	var lightBox = $('.lightBox')
	var tentBox = $('.tentBox')
	var closeMask = $('.closeMask, .clostBtn')
	
	lbBtn.on('click', function(){
		tentBox.css({'max-width':'', width: ''})
		var dataLB = $(this).data('lb')
		lightBox.fadeIn(250)
		if(dataLB.indexOf(".tentPic")!=-1){
			tentBox.css({'max-width':'90%', width: 'auto'})
		}
		$(dataLB).delay(50).fadeIn(150)
	})
	
	closeMask.on('click', function(){
		$('.tentPic, .tentTxt, .tentRule').fadeOut(150)
		lightBox.delay(50).fadeOut(150)
		
	})
	
	
	// 詳細活動辦法 scroll
	
	$('.scrollBox').mCustomScrollbar({
		theme: 'minimal-dark'
	});
	
	
	
})
$(function(){
	var toggleBox = $('.toggleBox')
//	var boxOpen = $('.boxOpen')
	var toggleInner = $('.toggleInner')
	var toggleBtn = $('.toggleBtn')
	
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	
	toggleBtn.on('click', function(){
		if(!$(this).hasClass('open')){
			var tgH = $(this).prev(toggleBox).find(toggleInner).height()
			$(this).addClass('open')
			$(this).text('收合')
			$(this).prev(toggleBox).addClass('boxOpen')
			$(this).prev(toggleBox).css({height: tgH})
		}else{
			$(this).removeClass('open')
			$(this).text('展開')
			$(this).prev(toggleBox).removeClass('boxOpen').css({height: ''})
			var yyy = $($(this).parents('.container'))
			$body.animate({
				scrollTop: yyy.offset().top-110
			}, 500);
//			console.log(yyy)
		}
	})
	
	
	var navBtn = $('.navBtn')
	var nav = $('nav')
	var Anchor = $('a.anchor')
	
	
	navBtn.on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open')
			nav.slideDown(300)
		}else{
			$(this).removeClass('open')
			nav.slideUp(150)
		}
	})
	
	function navAN(){
		navBtn.removeClass('open')
		nav.slideUp(150)
	}
	
	
	function mq() {
		var query = Modernizr.mq('(max-width: 768px)');
		if (query) {
			if(!navBtn.hasClass('open')){
				nav.slideUp(0)
			}else{
				nav.slideDown(300)
			}
			Anchor.on('click', navAN)
			// 當CSS media query計算的視窗寬度小於769px時執行
		} else {
			nav.slideDown(0)
			Anchor.off('click', navAN)
			// 當CSS media query計算的視窗寬度大於等於769px時執行
		}		
	};
	$(window).resize(function() {
		mq();
		if(toggleBox.hasClass('boxOpen')){
			$('.toggleBox.boxOpen').css({height: ''})
//			$(this).css({color: 'red'})
//			console.log('yooo')
		}
		
	});
	mq();
	
})
$(document).ready(function(){
	var nav = $('nav')
	var secUlBtn = $('.secUlBtn')
	var secUlBtnIcon = $('.secUlBtn i.icon')
	var secUl = $('.secUl')
	var navBtn_m =$('.navBtn_m')
	
	
	// 次選單收合
	secUl.slideUp(0)
	secUlBtn.on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open')
			secUl.slideDown(150)
		}else{
			$(this).removeClass('open')
			secUl.slideUp(100)
		}
	})
	
	
	// m版選單收合
	
	navBtn_m.on('click', function(){
		if(!$(this).hasClass('open')){
			nav.slideDown(250)
			navBtn_m.addClass('open')
		}else{
			nav.slideUp(150)
			navBtn_m.removeClass('open')
		}
	})
	
	function mq() {
		navBtn_m.removeClass('open')
		
		var query = Modernizr.mq('(max-width: 768px)');
		if (query) {
			nav.slideUp(0)
			secUlBtn.removeClass('open')
			secUl.slideUp(0)
			// 當CSS media query計算的視窗寬度小於769px時執行
		} else {
			nav.slideDown(0)
			// 當CSS media query計算的視窗寬度大於等於769px時執行
		}
	};
	$(window).resize(function() {
		mq();
	});
	mq();
	
	
})
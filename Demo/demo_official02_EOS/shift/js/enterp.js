$(function(){
	var bigCircle = $('.bigCircle')
	var smallCircle = $('.smallCircle')
	
	function cirHeight(){
		
	}
	
	
	function mq() {
		var query = Modernizr.mq('(max-width: 768px)');
		if (query) {
			bigCircle.css({height: ''})
			smallCircle.css({height: ''})
			// 當CSS media query計算的視窗寬度小於769px時執行
		} else {
			var bcW = bigCircle.width()
			bigCircle.css({height: bcW})
			var scW = smallCircle.width()
			smallCircle.css({height: scW})
			// 當CSS media query計算的視窗寬度大於等於769px時執行
		}
	};
	
	
	$(window).resize(function(){
		mq()
	}).resize()
})
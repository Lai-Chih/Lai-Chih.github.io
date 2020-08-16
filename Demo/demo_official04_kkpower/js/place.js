$(function(){
	
	TweenMax.set('.twLine', {scale:0, opacity:0});
	TweenMax.set('.mapLine', {opacity:0});
	TweenMax.set('.redDot', {opacity:0});
	TweenMax.set('.mapAdTxt, .mapTip', {y:30, opacity:0});
	TweenMax.set('.adT, .adB', {width:0});
	TweenMax.set('.adL, .adR', {height:0});
	TweenMax.set('.companyPic', {scale:0, opacity:0});
	
	function parallaxHandler(){
		var winH = $(window).height()
		var winH2 = winH/4*3
		var winT = $(window).scrollTop()
		var wrapperH = $('.wrapper').height()
//		alert(winH2)
		
		$('.parallax').each(function(){
			var _thisH = $(this).height()
			var offTop = $(this).offset().top
			var x = offTop - winH2 -winT
			var y = offTop + _thisH
			var dataName = $(this).data('name');
			
			var tl = new TimelineLite();
			if( y>winT && x<0){
				switch (dataName){
					case 'twLine':
						tl.to($(this), 0.6, {scale:1, opacity:1})
							.to($(this).find('.redDot'), 0.6, {opacity:1},'-=0.3')
							.to('.adL', 0.4, {height:'100%', opacity:1},'-=0.3')
							.to('.adB', 0.3, {width:'100%', opacity:1},'-=0.1')
							.to('.adR', 0.4, {height:'100%', opacity:1},'-=0.1')
							.to('.adT', 0.4, {width:'100%', opacity:1},'-=0.1')
							.to('.mapTip', 0.8, {y:0, opacity:1},'-=0.2')
							.to('.mapAdTxt', 0.8, {y:0, opacity:1},'-=0.4')
						break;
					case 'mapLine':
						tl.to($(this), 0.6, {opacity:1})
							.to($(this).find('.redDot'), 0.6, {opacity:1},'-=0.3')
							.to('.companyPic', 0.6, {scale:1, opacity:1},'-=0.3')
						break;
					
				}
			}
		})
	}
	
	$(window).on('scroll', function(){
		parallaxHandler()
	}).scroll()
})
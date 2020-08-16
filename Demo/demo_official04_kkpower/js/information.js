$(function(){
	
	TweenMax.set('.repo', {x:150, opacity:0});
	
	
	
	function parallaxHandler_year(){
		var tl2 = new TimelineLite();
		TweenMax.set($('.yearTableBox .repo'), {x:150, opacity:0});
		tl2.staggerTo($('.yearTableBox .repo'), 0.6, {x:0, opacity:1},0.2)
	}
	
	function parallaxHandler_month(){
		var tl2 = new TimelineLite();
		TweenMax.set($('.monthTableBox .repo'), {x:150, opacity:0});
		tl2.staggerTo($('.monthTableBox .repo'), 0.6, {x:0, opacity:1},0.2)
	}
	
	
	function parallaxHandler2(){
		
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
					case 'yearRepo':
						tl.staggerTo($(this).find('.repo'), 0.6, {x:0, opacity:1},0.2)
						break;
					case 'monthRepo':
						tl.staggerTo($(this).find('.repo'), 0.6, {x:0, opacity:1},0.1)
						break;
					
				}
			}
		})
	}
	
	$(window).on('scroll', function(){
		parallaxHandler2()
	}).scroll()
	
	
})
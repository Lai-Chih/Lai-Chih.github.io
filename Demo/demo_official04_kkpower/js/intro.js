$(function(){
	
	TweenMax.set('.kkPic', {scale:0, opacity:0});	
	TweenMax.set('.ulBox li', {x:150, opacity:0});
	TweenMax.set('.photoBox img', {scale:0, opacity:0});
	TweenMax.set('.boxImg', {scale:0, opacity:0});
	
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
					case 'kkPic':
						tl.to($(this),0.4, {scale:1, opacity:1})
							.staggerTo('.ulBox li', 0.6, {x:0, opacity:1},0.05, '-=0.2')
						break;
					case 'phB01':
						tl.staggerTo($(this).find('img'), 0.4, {scale:1, opacity:1},0.1)
						break;
					case 'phB02':
						tl.staggerTo($(this).find('img'), 0.4, {scale:1, opacity:1},0.1)
						break;
					case 'phB03':
						tl.staggerTo($(this).find('img'), 0.4, {scale:1, opacity:1},0.1)
						break;
					case 'sec04':
						tl.staggerTo('.boxImg', 0.8, {scale:1, opacity:1}, 0.5)
						break;
					
				}
			}
		})
	}
	
	$(window).on('scroll', function(){
		parallaxHandler()
	}).scroll()
	
	
	$('.slick').slick({
		autoplay: true,
		arrows: false,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 800,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false
	});
})
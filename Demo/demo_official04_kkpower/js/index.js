$(function(){
	
	TweenMax.set('.p01', {y:150, opacity:0});
    TweenMax.set('.p02', {y:150, opacity:0});
    TweenMax.set('.pic01', {y:150, opacity:0});
    TweenMax.set('.yearBox', {y:150, opacity:0});
    TweenMax.set('.triPic img', {y:150, opacity:0});
	
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
					case 'sec01Box':
						tl.to('.p01', 0.8, {y:0, opacity:1})
							.to('.p02', 0.8, {y:0, opacity:1}, '-=0.3')
							.to('.pic01', 0.8, {y:0, opacity:1}, '-=0.5')
						break;
					case 'yearBlock':
						tl.staggerTo('.yearBox', 0.8, {y:0, opacity:1},0.2)
							.staggerTo('.triPic img', 0.8, {y:0, opacity:1},0.3)
						break;
					case 'triPic':
						tl.staggerTo('.triPic img', 0.8, {y:0, opacity:1},0.3)
						break;
					
				}
			}
		})
	}
	
	$(window).on('scroll', function(){
		parallaxHandler()
	}).scroll()
})
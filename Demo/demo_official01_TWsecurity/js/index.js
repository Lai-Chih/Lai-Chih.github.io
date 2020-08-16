$(function(){
    
    
    TweenMax.set('.kvHuman', {y:400, opacity:0});
    TweenMax.set('.ATM', {x:400, opacity:0});
    TweenMax.set('.indexHuman01', {y:400, opacity:0});
    TweenMax.set('.sBox > span.span01', {scaleX:0});
    TweenMax.set('.sBox > span.span02', {scaleY:0, y:-285});
    TweenMax.set('.circleIcon span', {scaleY:0});
    TweenMax.set('.circleIcon', {transform: 'rotateY(90deg)'});
    TweenMax.set('.bankHouse', {y:400, opacity:0});
    TweenMax.set('.indexHuman02', {y:400, opacity:0});
    TweenMax.set('.cars', {x:-800, opacity:0});
    TweenMax.set('.indexHuman03', {y:400, opacity:0});
    TweenMax.set('.mask_blue', {width:'0%'});

//    alert($(window).scrollTop()+$(window).height())
//    alert($('.kvHuman').offset().top)
	var whh = $(window).height()
    function parallaxHandler(){
//		var distn = $(window).scrollTop()+$(window).height()*0.8;
        if (whh > 900) {
			var distn = $(window).scrollTop()+whh*0.8;
        }else if(whh > 780){
            var distn = $(window).scrollTop()+whh*1.2;
        }else if(whh > 480){
			var distn = $(window).scrollTop()+whh*1.5;
		}else{
			var distn = $(window).scrollTop()+whh*1.7;
		}
		
		$('.parallax').each(function(){
			var $this = $(this);                
			var tl = new TimelineLite();
			var distnX = $this.offset().top-$(window).scrollTop();			
			if($this.offset().top < distn && distnX>0){
				var x = $this.data('name');
//                    alert(x)
				switch (x){
					case 'kvHuman':
						tl.to($this, 1.2, {y:0, opacity:1});
						break;
					case 'ATM':
						tl.to($this, 1, {x:0, opacity:1})
							.to('.sec_01 .sBox > span', 0.6, {scaleX:1},'-=1')
							.to('.sec_01 .circleIcon', 0.4, {transform: 'rotateY(0deg)'})
							.to('.sec_01 .circleIcon span', 0.5, {scaleY:1},'-=0.4')
							.to('.indexHuman01', 0.6, {y:0, opacity:1},'-=0.4');
						break;
					case 'indexHuman02':
						tl.to('.bankHouse', 0.6, {y:0, opacity:1})
							.to('.sec_02 .sBox > span', 0.4, {scaleX:1},'-=0.8')
							.to('.sec_02 .circleIcon', 0.4, {transform: 'rotateY(0deg)'})
							.to('.sec_02 .circleIcon span', 0.5, {scaleY:1},'-=0.4')
							.to($this, 0.6, {y:0, opacity:1},'-=0.4');
						break;
					case 'satellite':
						tl.to('.cars', 1.5, {x:0, opacity:1})
							.to('.sec_03 .sBox > span.span01', 0.6, {scaleX:1},'-=1.5')
							.to('.sec_03 .sBox > span.span02', 0.4, {scaleY:1, y:0},'-=0.3')
							.to('.indexHuman03', 0.6, {y:0, opacity:1}, '-=0.3');
						break;
					case 'sec04chp':
						tl.to('.mask_blue', 0.4, {width:'100%'})
							.to('.mask_blue', 0.8, {width:'54%'});
						$('.sec_04 .chapter').data('name', '')
						break;                          
						 }
			}
		})
            
    }
	
	 $(window).on('scroll', function(){
    	parallaxHandler()
	 }).scroll()
//    parallaxHandler()
    
})
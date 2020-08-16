$(function(){
	var img01 = $('img.img01')    
    
    TweenMax.set(img01, {y:-200, x:-50});
	
	var whh = $(window).height()
    function parallaxHandler(){
		var distn = $(window).scrollTop()+$(window).height()*0.8;
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
			var sec_02 = $('.sec_02')
			var tl = new TimelineLite();
			var distnX = sec_02.offset().top-$(window).scrollTop();
			if($this.offset().top < distn && distnX>0){
				tl.to($this, 3.5, {y:0, x:0, ease: Power4.easeOut});
			}
		})
            
    }
	
	
	
	// kv 轉圈圈
	var compuBox = $('.compuBox')
	var compuPic01 = $('.compuPic01')
	var compuPic02 = $('.compuPic02')
	var compuPic03 = $('.compuPic03')
	var compuPic04 = $('.compuPic04')
	var circleTime = 5000
	var dataNum01 = 1
	var dataNum02 = 2
	var dataNum03 = 3
	var dataNum04 = 4
	var i
	
	var arrow = $('.arrow')
	var arr_L = $('.arr_L')
	var arr_R = $('.arr_R')
	
	
	function kvCircle(){
		compuPic01.removeClass('kv0'+dataNum01)
		compuPic02.removeClass('kv0'+dataNum02)
		compuPic03.removeClass('kv0'+dataNum03)
		compuPic04.removeClass('kv0'+dataNum04)
		dataNum01++
		dataNum02++
		dataNum03++
		dataNum04++
		if(dataNum01>4){ dataNum01=1}
		if(dataNum02>4){ dataNum02=1}
		if(dataNum03>4){ dataNum03=1}
		if(dataNum04>4){ dataNum04=1}
		compuBox.removeClass('start')
		compuPic01.addClass('kv0'+dataNum01)
		compuPic02.addClass('kv0'+dataNum02)
		compuPic03.addClass('kv0'+dataNum03)
		compuPic04.addClass('kv0'+dataNum04)
		
		
	}
	
	var runTimer = setInterval(kvCircle, circleTime)
	
	arrow.on('click', function(){
		clearInterval(runTimer)
		compuBox.removeClass('start')
		
		
		if($(this).hasClass('arr_L')){
			compuPic01.removeClass('kv0'+dataNum01)
			compuPic02.removeClass('kv0'+dataNum02)
			compuPic03.removeClass('kv0'+dataNum03)
			compuPic04.removeClass('kv0'+dataNum04)
			dataNum01 = dataNum01-1
			dataNum02 = dataNum02-1
			dataNum03 = dataNum03-1
			dataNum04 = dataNum04-1
			if(dataNum01<1){ dataNum01=4}
			if(dataNum02<1){ dataNum02=4}
			if(dataNum03<1){ dataNum03=4}
			if(dataNum04<1){ dataNum04=4}
			compuPic01.addClass('kv0'+dataNum01)
			compuPic02.addClass('kv0'+dataNum02)
			compuPic03.addClass('kv0'+dataNum03)
			compuPic04.addClass('kv0'+dataNum04)
		}else{
			kvCircle()
		}		
			
		
		runTimer = setInterval(kvCircle, circleTime)
	})
	
	
	// 視差背景圖
//	$('.sec_01').scrollingParallax();
	var parallaxBox = $('.parallaxBox')
	var sec_01 = $('.sec_01')
	var bottomNum = 100
	var winTop_1 = 0
	
	function scrollParallax(){
		var winTop_2 = $(window).scrollTop();
		var wTop = $(window).scrollTop()+$(window).height()
		var sec_03Top = sec_01.offset().top
		var x = sec_03Top - wTop
		
		
		
		
		
		
		if(x<=0){
			
			if(winTop_2>winTop_1){
				bottomNum = bottomNum - 2.5
				if(bottomNum<=0){ bottomNum=0}
				
			}else if(winTop_2<winTop_1){
				bottomNum = bottomNum + 2.5
				if(bottomNum>=100){ bottomNum=100}
			}
			parallaxBox.css({ bottom: '-'+bottomNum+'%'})
			
//			alert(topNum)
		}
		
		winTop_1 = $(window).scrollTop();
		
	}
	
	
	$(window).on('scroll', function(){
		parallaxHandler()
		scrollParallax()
	}).scroll()
	
	
	//m 版輪播
	$('.sliderBox').slick({
		dots: false,
		arrow: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
//		centerMode: true,
//		variableWidth: true,
//		autoplay: true,
		autoplaySpeed: 3000
	});
	
})
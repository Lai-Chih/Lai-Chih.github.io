$(function(){
	var img01 = $('img.img01')    
    
    TweenMax.set(img01, {y:-100, x:-50});
	
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
	
	
	// 錨點
	var anchorSec = 800
	
	$('a.anchor').click(function(){
		
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		var anchor = $(this).attr('href')
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $(anchor).offset().top
		}, anchorSec);
 
		return false;
	});
	
	var defaultAnchor = $('.anchorBtn')
	var footTent = $('footer .container')
	var anchorTabLi = $('.anchorBtn li')
		
	anchorTabLi.find('a').on('click', function(){
		if(!$(this).parent('li').hasClass('active')){
			anchorTabLi.removeClass('active')
			$(this).parent('li').addClass('active')
		}else{
			return false
		}
		setTimeout(function(){anchorTabLi.removeClass('active')},anchorSec)
	})
	
	
	function scrollAnchor(event){
		var section = $('section[class^="sec_0"]')
		
		section.each(function(){
			var toTop = $(this).offset().top //區塊到top的距離
			var _thisHt = $(this).height() //區塊高度
			var wrapperH = $('.wrapper').height() //網頁高度
			var wdH = $(window).height() //視窗高度
			var winTop = $(window).scrollTop() //網頁往上捲了多少
			var anX = toTop - winTop //區塊捲到top的距離
			var anX2 = toTop + _thisHt - winTop //區塊是否捲完
			var anY = winTop + wdH - wrapperH //網頁是否捲到bottom了
			var didAcitve = $(this).attr('id')
			
			var sec01Top = $('.sec_01').offset().top
			
//			alert(anX)
			if(winTop<=sec01Top){
				$('a[href="#sec01"]').addClass('active')
			}else if(anY >= 0){
				$('a[href="#'+didAcitve+'"]').removeClass('active')
				$('a[href="#sec05"]').addClass('active')
			}else if( anX <= 1 && anX2 > 1 ){
				$('a[href="#'+didAcitve+'"]').addClass('active')
			}else{
				$('a[href="#'+didAcitve+'"]').removeClass('active')
			}
			
//			console.log(anY)
		})
		
		
	}
	
	
	
	var X
	var right
	
	function anchorLocation(){
		if(X > 0){
			defaultAnchor.css({right: X - right})
		}else{
			defaultAnchor.css({right: ''})
		}
	}
	function mq() {
		var query = Modernizr.mq('(max-width: 1580px)');
		var query2 = Modernizr.mq('(max-width: 1380px)');
//		right=200
		if (query2) {
			right=30
			// 當CSS media query計算的視窗寬度小於769px時執行
		}else if(query){
			right=100
		} else{
			right=200
			// 當CSS media query計算的視窗寬度大於等於769px時執行
		}
		anchorLocation()
//		console.log(right)
	};
	
	
	// m版錨點
	var defaultAnchor_m = $('.defaultAnchor_m')
	var anchorBoxImg = $('.anchorBoxImg')
	var defaultAnchor_mUl = defaultAnchor_m.find('ul')
	var defaultAnchor_mUlA = defaultAnchor_m.find('a')
	
	defaultAnchor_mUl.slideUp(0)
	anchorBoxImg.on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open')
			defaultAnchor_mUl.slideDown(250)
		}else{
			$(this).removeClass('open')
			defaultAnchor_mUl.slideUp(150)
		}
		
	})
	defaultAnchor_mUlA.on('click', function(){
//		console.log('yes')
		anchorBoxImg.removeClass('open')
		defaultAnchor_mUl.slideUp(150)
	})
	
	
	
	
	$(window).on('resize', function(){
		var wdw = $(window).width()
		var footTentW = footTent.width()
		X = (wdw - footTentW)/2
		
		mq()
		
	}).resize()
	
	$(window).on('scroll', function(){
		parallaxHandler()
		scrollAnchor()
	}).scroll()
	
	
})
$(document).ready(function(){
	
	// 進場動態
	var kvT01 = $('.kvT01')
	var kvT02 = $('.kvT02')
	var kvT03 = $('.kvT03')
	var rollingHeadBox = $('.rollingHeadBox')
	$('.kvT01, .kvT02, .kvT03').css({ opacity: 1})
	
	var tl = new TimelineLite();
	tl.from( kvT01, 0.5, {x:-1500, ease: Back.easeOut.config(2), y: 80, opacity:0})
		.from( kvT02, 0.5, {x:-1200, ease: Elastic.easeInOut.config(2.5, 1), y: 80, opacity:0}, '-=0.3')
		.from( kvT03, 0.3, {x:-300, scaleX:0, y:40, ease: Circ.easeIn, opacity:0}, '-=0.2')
//		.from( rollingHeadBox, 0.4, {scale:0, ease: Circ.easeIn, opacity:0}, '-=0.2')
	
	
	// youtube lightbox
	var fakeImg = $('.fxB01 .fakeImg, .fxB03 .fakeImg')
	var youBMask = $('.youBMask, .youBcloseBtn')
	var youBBlock = $('.youBBlock')
	var teenger = $('.teenger')
	var youbFrame= $('.youBcontent iframe')
	var frameLink
	
	youbFrame.hide()
	fakeImg.on('click', function(){
		var data_youB = $(this).data('youb')
		youBBlock.fadeIn(150)
//		alert(data_youB)
		
		switch(data_youB)
		{
		case '.teenager01':
		  frameLink = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/hzCcwHdFNd4?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>'
		  break;
		case '.teenager02':
		  frameLink = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9t5hejhYGtw?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>'
		  break;
		case '.teenager03':
		  frameLink = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3_rkqO2stjI?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>'
		  break;
		default:
		  
		}
		teenger.append(frameLink)
	})
	youBBlock.on('click', youBMask, function(){
		youBBlock.fadeOut(150)
		$(this).find('iframe').remove()
	})
	
	
	// lightbox scroll
	$('.scrollTent').mCustomScrollbar({
		theme:'minimal-dark'
	});
	
	
	// 活動辦法 lightbox
	var openLB = $('.openLB')
	var LBBox = $('.LBBox')
	var LBmask = $('.LBmask')
	var LBcloseBtn = $('.LBcloseBtn')
	var LBclose = $('.LBcloseBtn, .LBmask')
	var PIDBox = $('.PIDBox')
	var activityBox = $('.activityBox')
	
	LBBox.fadeOut(0)
	openLB.on('click', function(){
		var data_id = $(this).data('id')
		
		LBBox.fadeIn(250)
		
		switch(data_id)
	    {
		case 'normal':
		  activityBox.show()
		  break;
		case 'PID':
		  activityBox.hide()
		  break;
		default:
		  activityBox.show()
		}
	})
	
	LBclose.on('click', function(){
		LBBox.fadeOut(150)
		activityBox.show()
	})
	
	
	// 錨點
	$('a.anchor').click(function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		// 並加入動畫效果
		var anchorTarget = $($(this).attr('href'))		
		
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: anchorTarget.offset().top
		}, 800);
		
		anchorBlock.removeClass('open')
		anchorBox.slideUp(350)
 
		return false;
	});
	
	// 錨點 樣式
	var anchorBlock = $('.anchorBlock')
	var anchorBox = $('.anchorBox')
	var container= $('.main .container')
	
	function anchorB_r(){
		var wdH = $(window).width()
		var containW = container.width()
		var right_n = wdH - containW
		anchorBlock.css({right: right_n/2})
	}
	
//	anchorBox.slideUp(0)
	anchorBlock.on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open')
			anchorBox.slideDown(250);
		}else{
			$(this).removeClass('open')
			anchorBox.slideUp(150);
		}
	})
	
	
	$(window).resize(function() {
		anchorB_r()
	}).resize()
	
	
})
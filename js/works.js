$(function(){
    
    //svg 動態
    var polyline = document.querySelector('polyline'); // 準確路徑
		var length = polyline.getTotalLength(); //線段長度
	
    $('#polyCube').addClass('show')
    
    
    // 大標進場
    TweenMax.set('.TltTxt', {scaleX:0})
    var tl = new TimelineLite()
    tl.to('.TltTxt', 1.5, {ease: Elastic.easeOut.config(1, 0.3), scaleX:1}, '+=3.1')
    
    
    // 視差
    var $scene = $('#scene');
    $scene.parallax();
    
    
    // 錨點
	$('a.anchor').click(function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var anchor = $($(this).attr('href'))
        
		$body.animate({
			scrollTop: anchor.offset().top
		}, 800);
 
		return false;
	})
    
		var goTop = $('.goTopBtn')
		var closetime = 3000;//不滾動時，3秒自動消失
    var setTimeoutId = null;
    var scrolling = false;
    jQuery(function($) {
        $(window).on('scroll', function() {
            scrolling = true;
            if (!!setTimeoutId) {
                clearTimeout(setTimeoutId);
            }

            setTimeoutId = setTimeout(function() {
                scrolling = false;
            }, closetime); 
        });

        setInterval(function() {
            if(scrolling == false){
                goTop.removeClass('active')
            }
        }, 500);
    });
	
	function scrollDirect() {
		var beforeScrollTop = $(window).scrollTop()
		$(window).on('scroll', function () {			
			var afterScrollTop = $(this).scrollTop()
			var delta = afterScrollTop - beforeScrollTop;
			if( delta == 0 ){
				return false;
			}else if(delta > 0 || afterScrollTop < 300){
//				console.log('down')
				if(goTop.hasClass('active')){
					goTop.removeClass('active')
				}
			}else{
//				console.log('up')
				if(!goTop.hasClass('active')){
					goTop.addClass('active')
				}
			}
			beforeScrollTop = afterScrollTop;
		})
	}
	scrollDirect()
    
    
    
    
    // 瀑布流
    var $grid = $('.grid').imagesLoaded( function() {
        // init Masonry after all images have loaded
        $grid.masonry({
            //set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            animationOptions: { queue: true, duration: 350 },
            // use element for option
//            columnWidth: '.grid-item',
            isAnimated: true,
            percentPosition: true
        });
    });
    
    
    
    // 頁籤切換
    var activeType = $($('.workTab span.active').data('webtype'))
	
		var para = location.search
//		console.log(para)
		if(para == '?practice'){
			activeType = $('.practice')
			$('.workTab span').removeClass('active')
			$('.workTab').eq(0).find('span').addClass('active')
		}
    
		activeType.addClass('show')
    
    var workTab = $('.workTab span')
    var gridBox = $('.gridBox')
    
    workTab.on('click', function(){
        var showGrid = $($(this).data('webtype'))
        if(!$(this).hasClass('active')){
            workTab.removeClass('active')
            $(this).addClass('active')
            gridBox.removeClass('show')
            showGrid.addClass('show')
        }
    })
    
    
    
    // KV高度
    var mainTent = $('.mainTent')
    
    $(window).resize(function(){
//        var wh = $(window).height()
//        mainTent.css({height: wh})
    }).resize()
    
    
    // 滾動 noTop
		var navBtn = $('.navBtn')
    $(window).on('scroll', function(){
			var wh = $(window).height()/3
			var scrollT = $(window).scrollTop()
			
			if( scrollT > wh*2 && !navBtn.hasClass('noTop')){
				navBtn.addClass('noTop')
			}else if(scrollT < wh*2){
				navBtn.removeClass('noTop')
			}
		}).scroll()
    
    
    
    
    
    
})
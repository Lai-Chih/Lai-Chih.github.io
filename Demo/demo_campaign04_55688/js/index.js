//$(window).on('load', function(){
//	$('.NAVsecUl').slideUp(0)
//})
$(document).ready(function(){	
	var wrapper = $('.wrapper')
	var anchorA = $('.anchor, .joinAnchor')
	var joinBtn = $('.joinBtn')
	var goTop = $('.goTop')
	var applyBtn = $('.applyBtn')
	var applyBtnA = applyBtn.find('.aTag')
	var formMask = $('.formMask')
	var formBlock = $('.formBlock')
	var formTxt = $('.formTxt')
	var data_formName = $('input.formName')
	
	formMask.fadeOut(0)
	formBlock.fadeOut(0)
	
	
	// 錨點	
	anchorA.on('click', function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		var anTarget = $($(this).data('anchor'))
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: anTarget.offset().top
		}, 800);
		
		return false;
	})
	
    var closetime = 3000;//不滾動時，2秒自動消失
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
	
	
	// 申請表 scroller
    $('.forms').mCustomScrollbar({
        theme:'minimal-dark'
    });
	
	// 申請表
	var welcome01 = '誠摯歡迎已持有必須證照的您，加入台灣大車隊多元計程車！請填寫聯絡資訊，我們將有專人儘速與您聯繫：'
	var welcome02 = '歡迎加入台灣大車隊多元計程車！沒有執業登記證沒關係，我們將全程免費輔導您考取，請填寫聯絡資訊，我們將有專人儘速與您聯繫：'
	var welcome03 = '歡迎加入台灣大車隊多元計程車！沒有小客車職業駕照沒關係，我們將全程免費輔導您考取，請填寫聯絡資訊，我們將有專人儘速與您聯繫：'
	var welcome04 = '歡迎加入台灣大車隊多元計程車！我們將全程免費輔導您考取小客車職業駕照及執業登記證，請填寫聯絡資訊，我們將有專人儘速與您聯繫：'
	
	function openForm(){
		/* 表單樣式 */
		var formName = $(this).data('form')
		data_formName.attr('value', formName)
		switch(formName){
			case 'have both':
				formTxt.text(welcome01)
				break;
			case 'have license':
				formTxt.text(welcome02)
				break;
			case 'have certification':
				formTxt.text(welcome03)
				break;
			case 'have nothing':
				formTxt.text(welcome04)
				break;
		}
		
		/* 動態 */
		formMask.fadeIn(300)
		formBlock.addClass('open')
		TweenMax.from(formBlock, 0.35, {scale:0.5});
	}
	
	
	applyBtnA.on('click', function(){
		openForm()
	})
	$(document).on('click', '.clickBox, .formCloseBtn', function(){
		formMask.delay(200).fadeOut(150)
//		TweenMax.to(formBlock, 0.5, {scale:0.5});
		formBlock.removeClass('open')
	})
	
	
	// textarea 字數限制
	$('.textAreaBox textarea').keyup(function() {
//		var limitLength = $( this ).attr( "maxlength" ) || 100;
		var limitLength = 200
		var txt = $(this).val()
		var curLength = $(this).val().length;
//		var nowChr = 0;
//		for(var i=0;i<curLength;i++){
//			txt.charCodeAt(i)<256?nowChr++:nowChr+=2;
//		}	
		
		if (curLength > limitLength) {
			var str = $(this).val().substr(0, limitLength);
			$(this).val(str);
			alert("留言上限為 200 字");
		}
	});
	$('.picBox .inP input[type="file"]').on('change', function(){
		if(!$(this).val()==''){
			var x = $(this).val()
//		alert(x)
			$('.picBox input[type="file"] + label').text(x).attr('title', x)
		}
		
	})
	
	
	// apple ********************************************
	if( navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         ){
		applyBtnA.on('touchend', function(){
			openForm()
		})
		
      }
	
})
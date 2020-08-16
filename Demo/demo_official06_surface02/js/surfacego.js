$(function(){
	
	// 大頁籤
	var tabBtn = $('.tabBtn')
	var h3 = $('.kv h3')
	var h3P = $('.tltBox p')
	var tabBox = $('.eduBox, .companyBox')
	
	$('.tab_l').addClass('active')
	
	var txt ={
		txt_l:['第一線員工的最佳工作夥伴','外型時尚、功能完備的 Surface Go，助員工展現專業形象、提升行動力，是企業最好的投資'],
		txt_r:['翻轉吧！教室','學生對新科技有天生的好奇心，Surface Go 激發學習的熱情，讓學生發揮最大潛力，是教師最好的教學工具']
	}
	
	tabBtn.on('click', function(){
		var dataTab = $(this).data('tab')
		var _dataTab = $(dataTab)
		
		if(!$(this).hasClass('active')){
			tabBtn.removeClass('active')
			$(this).addClass('active')
			tabBox.fadeOut(0)
			if(dataTab=='.companyBox'){
				h3.html(txt.txt_l[0])
				h3P.html(txt.txt_l[1])
			}else{
				h3.html(txt.txt_r[0])
				h3P.html(txt.txt_r[1])
			}
			
			_dataTab.fadeIn(250)
		}else{
			return false
		}
		
		
	})
	
	// 技術規格區 收合
	var sec09H4 = $('.sec_09 h4')
	var techBox = $('.techBox')
	
	techBox.slideUp(0)
	sec09H4.on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open')
			techBox.slideDown(250)
		}else{
			$(this).removeClass('open')
			techBox.slideUp(150)
		}
	})
})
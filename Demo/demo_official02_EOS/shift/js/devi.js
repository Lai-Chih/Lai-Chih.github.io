$(function(){
	
	//computerTab
	var compuTabBox = $('.compuTabBox')
	var compuTentBox = $('.compuTentBox')
	var compuTab = $('.compuTab')
	var compuFadeBox = $('.compuFadeBox')
	var compu = $('.compu')
	
	compuTabBox.each(function(){
		$(this).find(compuTab).eq(0).addClass('active')
	})
	compuTentBox.each(function(){
		$(this).find(compuFadeBox).eq(0).show()
	})
	
	compu.on('click', function(){
		var compuShow = $($(this).data('compu'))
		
		if(!$(this).hasClass('active')){
			if(!$(this).parent(compuTab).hasClass('active')){
				$(this).parent(compuTab).addClass('active').siblings(compuTab).removeClass('active')
			}
			$(this).parent(compuTab).parent(compuTabBox).find(compu).removeClass('active')
			$(this).addClass('active')
			$(this).parents('.compuTabBox').next(compuTentBox).find(compuFadeBox).hide()
			compuShow.fadeIn(150)
		}
		
		
	})
	
	
	
	
})
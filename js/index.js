$(function(){
    
    //svg 動態
    var polyline = document.querySelector('polyline'); // 準確路徑
	var length = polyline.getTotalLength(); //線段長度
//	alert(length)	
//	d3.select('svg').append('use').attr('xlink:href', '#ph01')
	
    $('#polyCube').addClass('show')
//	$('#polyCube').fadeOut(0).delay(1000).fadeIn(0).addClass('show')
    
    
    
    //視差
    var $scene = $('#scene');
    $scene.parallax();
    
    
    
})
$(function(){
    
    // navOpen
    var footer = $('footer')
    var navBtn = $('.navBtn')
    
    navBtn.on('click', function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('open')
            footer.addClass('open')
            $(this).prev('header').addClass('navOpen')
            
        }else{
            $(this).removeClass('open')
            footer.removeClass('open')
            $(this).prev('header').removeClass('navOpen')
        }
    })
})
$(window).on('load', function(){
	$('.loadingPage').fadeOut(300)
})
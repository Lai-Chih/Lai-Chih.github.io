$(window).load(function(){
    var wrapper = $('.wrapper'),
        main = wrapper.find('main'),
        selec = main.find('.selec'),
        gridItem = selec.find('.grid-item'),
        VideoLink;
    
    gridItem.each(function(){
        $(this).find('a.lookVideo').click(function(){
            var VideoLink = $(this).attr('href');
            lb_video();
            

    
    //alert(VideoLink);
    
    function lb_video(){
      var videolb_layout = '<div id="videoLightbox" class="wrapper videoLB table">';
        videolb_layout += '     <div class="tr">';
        videolb_layout += '      <div class="td">';
        videolb_layout += '                <div class="mainLB">';
        videolb_layout += '                    <div class="closeBtn">';
        videolb_layout += '                        <a href="javascript:;"><span></span></a>';
        videolb_layout += '                    </div>';
        videolb_layout += '                    <img src="images/casestudy/video_block.gif" alt="">';
        videolb_layout += '                    <iframe class="youtube-player" type="text/html" width="100%" height="100%" src=" '+ VideoLink +'&autoplay=1" frameborder="0" allowfullscreen></iframe>';
        videolb_layout += '                </div>';
        videolb_layout += '            </div>';
        videolb_layout += '        </div>';
        videolb_layout += '</div>';
        
        $('body').append(videolb_layout);
        TweenMax.set('#videoLightbox', { opacity: 0});
        TweenMax.to('#videoLightbox', .4, { opacity: 1}); 
        $("#videoLightbox").click(function () {
            if( !$(event.target).is('.mainLB') && !$(event.target).is('.mainLB div, input, a, span') ){
                $('#videoLightbox').fadeOut(400, function(){
                    $('#videoLightbox').remove();
                });
            }
        });
        $('.closeBtn').click(function(){
            $('#videoLightbox').fadeOut(400, function(){
                    $('#videoLightbox').remove();
                });
        });
    };
            
            
            return false;
        });
    });
    
})
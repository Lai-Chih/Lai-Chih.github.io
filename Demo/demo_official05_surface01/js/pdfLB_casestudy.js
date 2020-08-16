$(window).load(function(){
    
     if( navigator.userAgent.match(/Android/i)
                     || navigator.userAgent.match(/webOS/i)
                     || navigator.userAgent.match(/iPhone/i)
                     || navigator.userAgent.match(/iPad/i)
                     || navigator.userAgent.match(/iPod/i)
                     || navigator.userAgent.match(/BlackBerry/i)
                     || navigator.userAgent.match(/Windows Phone/i)
                     ){
         return false;}else{
    
    var wrapper = $('.wrapper'),
        main = wrapper.find('main'),
        selec = main.find('.selec'),
        gridItem = selec.find('.grid-item');
    
   
    
    gridItem.each(function(){
        $(this).find('a.lookMore').click(function(){
            var pdfLink = $(this).attr('href');
            lb_pdf();
            $('a.media').media({width:'100%', height:'100%'});
            //lert(pdfLink);
    
    
    
    function lb_pdf(){
      var pdflb_layout = '<div id="pdfLightbox" class="wrapper pdfLB table">';
        pdflb_layout += '     <div class="tr">';
        pdflb_layout += '      <div class="td relative">';
        pdflb_layout += '                <div class="mainLB">';
        pdflb_layout += '                    <div class="closeBtn">';
        pdflb_layout += '                        <a href="javascript:;"><span></span></a>';
        pdflb_layout += '                    </div>';
        //pdflb_layout += '                    <img src="images/casestudy/video_block.gif" alt="">';
        pdflb_layout += '                    <a class="media" href="'+ pdfLink +'"></a>';
        pdflb_layout += '                </div>';
        pdflb_layout += '            </div>';
        pdflb_layout += '        </div>';
        pdflb_layout += '</div>';
        
        $('body').append(pdflb_layout);
        TweenMax.set('#pdfLightbox', { opacity: 0});
        TweenMax.to('#pdfLightbox', .4, { opacity: 1}); 
        $("#pdfLightbox").click(function () {
            if( !$(event.target).is('.mainLB') && !$(event.target).is('.mainLB div, input, a, span') ){
                $('#pdfLightbox').fadeOut(400, function(){
                    $('#pdfLightbox').remove();
                });
            }
        });
        $('.closeBtn').click(function(){
            $('#pdfLightbox').fadeOut(400, function(){
                    $('#pdfLightbox').remove();
                });
        });
    };
            
            
            return false;
        });
    });
    
   };     
    
})
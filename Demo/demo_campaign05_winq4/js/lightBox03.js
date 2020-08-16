$(function(){
    /***** 得獎名單02 *****************************/
            var LB03 = $('body').find('.lightbox5'),
                scrollBox03 = LB03.find('.scrollBox5'),
                open03 = $('body').find('.sec05Btn03 a');
            var wdh = $(window).width();
            scrollBox03.mCustomScrollbar({
                theme: "minimal-dark",
                mouseWheel:{ scrollAmount: 200 },
                autoDraggerLength: false,
            });

            scrollBox03.css({ height:'80%'});
            TweenMax.set(LB03, { opacity: 0, height: 0, width: 0, top: '-20%'});
            if(wdh>350){
               open03.click(function(){
                TweenMax.to(LB03, 0.8, { opacity: 1, height:'80%', 'max-height': '780px', width:'80%', top: '5%', ease: Elastic.easeOut.config(1, 0.6)});
                   return false;
               });
            }else if(wdh<=350){
              open03.click(function(){
                TweenMax.to(LB03, 0.8, { opacity: 1, height:'80%', 'max-height': '780px', width:'96%', top: '5%', ease: Elastic.easeOut.config(1, 0.6)});
                  return false;
              });   
            };

            $('body').on('click', function(){
                if( !$(event.target).is(LB03) && !$(event.target).is(LB03.find('h3, h4, p, ul, li, b, span, div, table, tr, td, img')) && !$(event.target).is(open03)){
                    TweenMax.to(LB03, 0.3, { opacity: 0, height: 0, width: 0, top: '-20%'});
                }
            });
            scrollBox03.find('table tr:nth-child(even)').addClass('gray');

            $(window).resize(function(){
                var rwdh = $(window).width();
                if(rwdh>350){ 
                    open03.click(function(){
                    TweenMax.to(LB03, 0.8, { opacity: 1, height:'80%', 'max-height': '780px', width:'80%', top: '5%', ease: Elastic.easeOut.config(1, 0.6)});
                        return false;
                   });
                    LB03.css({height:'80%', 'max-height': '780px', width:'80%'});
                }else if(rwdh<=350){
                    open03.click(function(){
                    TweenMax.to(LB03, 0.8, { opacity: 1, height:'80%', 'max-height': '780px', width:'96%', top: '5%', ease: Elastic.easeOut.config(1, 0.6)});
                        return false;
                  });
                    LB03.css({height:'80%', 'max-height': '780px', width:'96%'});
                }    
//                console.log(rwdh)
            });
            
            /***** 得獎名單02 *****************************/
});
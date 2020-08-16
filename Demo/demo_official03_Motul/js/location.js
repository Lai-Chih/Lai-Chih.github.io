$(document).ready(function(){
    
    var v;
    $('.icon_angleDown').click(function(){
        v = $(this).attr('v');
//        alert(v);
        if(v == 0){
            $(this).parent('p').next('.toggle').slideDown(200);
            $(this).css({'transform':'rotate(180deg)'});
            $(this).attr('v',1);
        }else if(v == 1){
            $(this).parent('p').next('.toggle').slideUp(200);
            $(this).css({'transform':'rotate(0deg)'});
            $(this).attr('v',0);
        }
        
        
    });    
    
    function mq() {
        var query = Modernizr.mq('(max-width: 768px)');
        if (query) {
            $('.toggle').slideUp(0);
            $('.icon_angleDown').attr('v',0);
            $('.icon_angleDown').css({'transform':'rotate(0deg)'});

            // JavaScript here
            // 當CSS media query計算的視窗寬度小於769px時執行
        } else {
            $('.toggle').slideDown(0);
            $('.icon_angleDown').attr('v',1);

            // JavaScript here
            // 當CSS media query計算的視窗寬度大於等於769px時執行
        }
    };
    $(window).resize(function() {
        mq();
    });
    mq();

    

});




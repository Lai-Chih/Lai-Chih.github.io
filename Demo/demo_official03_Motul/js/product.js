$(document).ready(function(){
    var productListBox =$('.productListBox'),
        oList = $('.oilList'),
        oListUl = $('.oilList ul'),
        m_pdList = $('.m_pdList'),
        oilBox = $('.oilBox'),
        choiceSortName = $('.choiceSortName'),
        fstNameTarget = $('.fstNameTarget');
    
    
    
    m_pdList.on('click', function(){
        oilBox.slideToggle(200);
    });
    
    
    function mq() {
        var query = Modernizr.mq('(max-width: 768px)');

        if (query) {
            oilBox.slideUp(0);
            oList.off('mouseenter');
            $('.oilList ul.pc').fadeOut(0);
            $('.ulBox').fadeOut(0);
            $('.oilList li').off('click');
            
            
            
            $('.oilCloseBtn').click(function(){
                $('.ulBox').fadeOut(200);
            });
            
            
            $('.productListBox').on('click', '.oilList', function(){
                oilBox.slideUp(100);
                var ulBoxName =  $(this).attr('ulBoxName');
//                alert(ulBoxName)
                $('.ulBox.'+ulBoxName).fadeIn(200);
            });
            
            $('.firstSortName').on('click', function(){
                var firstSortName_m = $(this).text();
                $('.ulBox li').click(function(){
                    fstNameTarget.html('<span>»</span>'+firstSortName_m);
                });
                
            });
            
            
            // JavaScript here
            // 當CSS media query計算的視窗寬度小於769px時執行
        } else {
            oilBox.slideDown(0);
            oListUl.slideUp(0);
            $('.productListBox').off('click')
            $('.firstSortName').off('click')
            
            
            oList.on('mouseenter', function(){
                $(this).children('.oilList ul.pc').slideDown(200);
            }).on('mouseleave', function(){
                $(this).children('.oilList ul.pc').slideUp(100);
            });
            
            
            $('.oilList li').on('click', function(){
                var firstSortName = $(this).parent('ul').prevAll('.firstSortName').text();
//                alert(firstSortName);
                fstNameTarget.html('<span>»</span>'+firstSortName);
                
            });
            
            
            // JavaScript here
            // 當CSS media query計算的視窗寬度大於等於769px時執行
        }
    };
    $(window).resize(function() {
        mq();
    });
    mq();
    
    
    /* scollBox */
    $('.scollBox').mCustomScrollbar({
        theme: "light-thin",
        mouseWheel:{ scrollAmount: 200 },
        autoDraggerLength: false
    });
    
    
    
    
    /* filters */
    // external js: isotope.pkgd.js

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.filters-button-group').on( 'click', '.oilList li, .ulBox li', function() {
        $('.loading, .loadingBg').fadeIn(0);
        $('.loading, .loadingBg').delay(500).fadeOut(200);
        var listName = $(this).text();
        choiceSortName.text(listName);
        $('.ulBox').fadeOut(0);
        
//        alert(listName)
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', '.oilList li, .ulBox li', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    
    
    
});




$(window).load(function(){
    
    /* filterBox */
    var main = $('main'),
        filterBox = main.find('.filterBox'),
        closefilter = filterBox.find('.closefilter'),
        openFilter = main.find('.openFilter'),
        filters = filterBox.find('#filters'),
        Li = filters.find('li'),
        LiA = Li.find('a');
    
    TweenMax.set(filterBox, {left:110+'%', width:20+'%'});
    openFilter.click(function(){
        TweenMax.to(filterBox, 0.8, {left:0, width:100+'%', ease: Elastic.easeOut.config(1, 0.75)});
    });
    closefilter.click(function(){
        TweenMax.to(filterBox, 0.2, {left:110+'%', width:30+'%'});
    });
    LiA.click(function(){
        TweenMax.to(filterBox, 0.2, {left:110+'%', width:30+'%'});
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: $('#selec').offset().top-40
        }, 600);
    });
    
    $(window).resize(function(){
        var wdh = $(window).width();
        if(768<wdh){
            Li.find('a.showhand').click();
        }
    });
    
});



$(document).ready(function(){
    
    /* 瀑布element
    --------------------------------------------------*/
    var $grid = $('main .selec').find('.grid');
    $grid.isotope({ 
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item'
        },
        getSortData: {
        
        
      }
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
    
    // filter items on button click
    $('#filters').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      // use filter function if value matches
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    
    
    
    
    
});
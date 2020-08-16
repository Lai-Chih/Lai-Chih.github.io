$(function(){
    var len = 400; // newsText limit
    var newsClickShow = 15 // the number of showing newsList
    var slideDsec = 300 // nav slideDown time
    var slideUsec = 250 // nav slideUp time
    
    
    //ajax
    function ajaxV(){
        $.ajax({        
            url:'./js/news.json'
        }).then(function(res){
            console.log('success!')
            
            //bind to Vue
            vm.newsBox = res
        },function(err){
            console.log('error!')
        })
    }
    ajaxV()
    
    // vue.js
    var vm = new Vue({
        el: '#vueBox',        
        data: {
            renderAmount: newsClickShow,
            keyword: '',
            noNews: false,
            newsBox:[]
        },
        methods: {
            //newsTxtLimit
            newsTxtLimit(news){
                if(news.newsTxt.length > len){
                    var text = news.newsTxt.substring(0, len-1)+'...'
                    return text
                }else{
                   return news.newsTxt 
                }
            },
            // search all newsList
            enterSearch(){
                this.keyword = this.$refs.searchInput.value
                $('.loadMoreBtn').addClass('end')
                if(this.keyword==''){
                    this.renderAmount = newsClickShow
                    $('.loadMoreBtn').removeClass('end')
                }else{
                    this.renderAmount = this.newsBox.length
                }
            },
            // key-in searching keyword
            filterNews(newsBox, keyword){
                var matchItem = newsBox.filter(function(news){
                    return news.title.toLowerCase().indexOf(keyword.toLowerCase())!=-1 || news.newsTxt.toLowerCase().indexOf(keyword.toLowerCase())!=-1
                })
                matchItem.length!=0 ? this.noNews=false : this.noNews=true
                return matchItem.reverse()
            },
            // click to show more newsList
            showMore(){
                if(this.renderAmount < this.newsBox.length){
                    this.renderAmount += newsClickShow
                }
                this.renderAmount >= this.newsBox.length ? $('.loadMoreBtn').addClass('end'):''
            },
            // navToggle
            navToggle(){
                if(!$('.navBtn').hasClass('open')){
                    $('.navBtn').addClass('open')
                    $('nav ul.flexBox').slideDown(slideDsec)
                }else{
                    $('.navBtn').removeClass('open')
                    $('nav ul.flexBox').slideUp(slideUsec)
                }
            }
        }
    })
    
    // nav togggle
    function mq() {
        var query = Modernizr.mq('(max-width: 520px)');
        if (query) {
            if($('.navBtn').hasClass('open')){
                $('nav ul.flexBox').slideDown(0)
            }
            // CSS media query < 520px
        } else {
            $('nav ul.flexBox').css({display: ''})
            // CSS media query > 520px
        }
    };
    $(window).resize(function() {
        mq();
    }).resize()
})
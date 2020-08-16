$(document).ready(function(){

    
    /* blog */
    TweenMax.set('.essayArt .essay', {y:200, opacity:0});
    TweenMax.set('.essayArt .sortBox', {x:200, opacity:0});
    var tBlog = new TimelineLite();
    tBlog.to('.essayArt .essay', 0.8, {y:0, opacity:1})
        .to('.essayArt .sortBox', 0.8, {x:0, opacity:1}, "-=0.5");
    
    /* location */
    TweenMax.set('.storeSearchBox', {x:200, opacity:0});
    TweenMax.set('.searchResult', {x:-200, opacity:0});
    TweenMax.set('.distribuBox .container', {x:200, opacity:0});
    var tloca = new TimelineLite();
    tloca.to('.storeSearchBox', 0.8, {x:0, opacity:1})
        .to('.searchResult', 0.8, {x:0, opacity:1}, "-=0.6")
        .to('.distribuBox .container', 0.8, {x:0, opacity:1}, "-=0.6");
    
    /* location_inner */
    TweenMax.set('.storeBox .container > * > *', {scale:0.5, opacity:0});
    var tloca_in = new TimelineLite();
    tloca_in.to('.storeBox .container > * > *', 0.7, {scale:1, opacity:1}, "-=0.6");
    
    
    /* news */
    TweenMax.set('.blogBox > *', {x:200, opacity:0});
    var tNews = new TimelineLite();
//    tNews.staggerTo('.blogBox > *', 0.7, {x:0, opacity:1});
    tNews.staggerTo('.blogBox .blogTxt', 0.7, {x:0, opacity:1}, 0.2)
        .to('.blogBox .newsPager', 0.7, {x:0, opacity:1}, "-=0.5");
    
    
    /* news_inner */
    TweenMax.set('.blogTent', {scale:0.8, opacity:0});
    var tNews_in = new TimelineLite();
    tNews_in.to('.blogTent', 0.5, {scale:1, opacity:1});
    
    
    
});



webpackJsonp([1],{"/5Jc":function(e,t){},"5h7c":function(e,t,n){(function(e){e(document).ready(function(){var t=e(".pages .slickBox").find(".slickImg");e(window).resize(function(){e(".pages .slickBox").height(),t.each(function(){var t=e(window).height(),n=e(window).width(),i=e(this).find("img"),a=e(this).data("dir");n>=t&&"vertical"==a?i.css({height:"100%",width:"auto"}):i.css({height:"auto",width:"100%"})})}).resize()})}).call(t,n("7t+N"))},"991W":function(e,t){},AcvE:function(e,t,n){"use strict";(function(e){var t=n("pFYg"),i=n.n(t);!function(t,n,a){function s(e,t){return(void 0===e?"undefined":i()(e))===t}function o(e){var t=T.className,n=x._config.classPrefix||"";if(L&&(t=t.baseVal),x._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),L?T.className.baseVal=t:T.className=t)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):L?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function c(e,t,i,a){var s,o,c,l,d="modernizr",u=r("div"),f=function(){var e=n.body;return e||((e=r(L?"svg":"body")).fake=!0),e}();if(parseInt(i,10))for(;i--;)(c=r("div")).id=a?a[i]:d+(i+1),u.appendChild(c);return(s=r("style")).type="text/css",s.id="s"+d,(f.fake?f:u).appendChild(s),f.appendChild(u),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),u.id=d,f.fake&&(f.style.background="",f.style.overflow="hidden",l=T.style.overflow,T.style.overflow="hidden",T.appendChild(f)),o=t(u,e),f.fake?(f.parentNode.removeChild(f),T.style.overflow=l,T.offsetHeight):u.parentNode.removeChild(u),!!o}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){if("object"==(void 0===e?"undefined":i()(e)))for(var n in e)B(e,n)&&d(n,e[n]);else{var a=(e=e.toLowerCase()).split("."),s=x[a[0]];if(2==a.length&&(s=s[a[1]]),void 0!==s)return x;t="function"==typeof t?t():t,1==a.length?x[a[0]]=t:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=t),o([(t&&0!=t?"":"no-")+a.join("-")]),x._trigger(e,t)}return x}function u(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(e,n,i){var a;if("getComputedStyle"in t){a=getComputedStyle.call(t,e,n);var s=t.console;if(null!==a)i&&(a=a.getPropertyValue(i));else if(s){s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else a=!n&&e.currentStyle&&e.currentStyle[i];return a}function h(e,n){var i=e.length;if("CSS"in t&&"supports"in t.CSS){for(;i--;)if(t.CSS.supports(p(e[i]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var s=[];i--;)s.push("("+p(e[i])+":"+n+")");return c("@supports ("+(s=s.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return a}function v(e,t,n,i){function o(){d&&(delete D.style,delete D.modElem)}if(i=!s(i,"undefined")&&i,!s(n,"undefined")){var c=h(e,n);if(!s(c,"undefined"))return c}for(var d,f,p,m,v,g=["modernizr","tspan","samp"];!D.style&&g.length;)d=!0,D.modElem=r(g.shift()),D.style=D.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=D.style[m],u(m,"-")&&(m=l(m)),D.style[m]!==a){if(i||s(n,"undefined"))return o(),"pfx"!=t||m;try{D.style[m]=n}catch(e){}if(D.style[m]!=v)return o(),"pfx"!=t||m}return o(),!1}function g(e,t,n,i,a){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+P.join(o+" ")+o).split(" ");return s(t,"string")||s(t,"undefined")?v(r,t,i,a):function(e,t,n){var i;for(var a in e)if(e[a]in t)return!1===n?e[a]:s(i=t[e[a]],"function")?f(i,n||t):i;return!1}(r=(e+" "+M.join(o+" ")+o).split(" "),t,n)}function y(e,t,n){return g(e,a,a,t,n)}var w=[],C=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},x=function(){};x.prototype=b,(x=new x).addTest("ie8compat",!t.addEventListener&&!!n.documentMode&&7===n.documentMode),x.addTest("queryselector","querySelector"in n&&"querySelectorAll"in n);var k=t.CSS;x.addTest("cssescape",!!k&&"function"==typeof k.escape);var T=n.documentElement;x.addTest("cssall","all"in T.style);var L="svg"===T.nodeName.toLowerCase();L||function(t,n){function a(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function s(){var e=x.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=b[e[w]];return t||(t={},C++,e[w]=C,b[C]=t),t}function r(e,t,i){return t||(t=n),h?t.createElement(e):(i||(i=o(t)),!(a=i.cache[e]?i.cache[e].cloneNode():y.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e)).canHaveChildren||g.test(e)||a.tagUrn?a:i.frag.appendChild(a));var a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return x.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+s().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(x,t.frag)}function l(e){e||(e=n);var t=o(e);return!x.shivCSS||m||t.hasCSS||(t.hasCSS=!!a(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||c(e,t),e}function d(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,a=RegExp("^(?:"+s().join("|")+")$","i"),o=[];i--;)t=n[i],a.test(t.nodeName)&&o.push(t.applyElement(u(t)));return o}function u(e){for(var t,n=e.attributes,i=n.length,a=e.ownerDocument.createElement(T+":"+e.nodeName);i--;)(t=n[i]).specified&&a.setAttribute(t.nodeName,t.nodeValue);return a.style.cssText=e.style.cssText,a}function f(e){for(var t,n=e.split("{"),i=n.length,a=RegExp("(^|[\\s,>+~])("+s().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+T+"\\:$2";i--;)(t=n[i]=n[i].split("}"))[t.length-1]=t[t.length-1].replace(a,o),n[i]=t.join("}");return n.join("{")}function p(e){function t(){clearTimeout(s._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,i,s=o(e),r=e.namespaces,c=e.parentWindow;return!L||e.printShived?e:(void 0===r[T]&&r.add(T),c.attachEvent("onbeforeprint",function(){t();for(var s,o,r,c=e.styleSheets,l=[],u=c.length,p=Array(u);u--;)p[u]=c[u];for(;r=p.pop();)if(!r.disabled&&k.test(r.media)){try{o=(s=r.imports).length}catch(e){o=0}for(u=0;o>u;u++)p.push(s[u]);try{l.push(r.cssText)}catch(e){}}l=f(l.reverse().join("")),i=d(e),n=a(e,l)}),c.attachEvent("onafterprint",function(){(function(e){for(var t=e.length;t--;)e[t].removeNode()})(i),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m,h,v=t.html5||{},g=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",C=0,b={};!function(){try{var e=n.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,h=1==e.childNodes.length||function(){n.createElement("a");var e=n.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){m=!0,h=!0}}();var x={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==v.shivCSS,supportsUnknownElements:h,shivMethods:!1!==v.shivMethods,type:"default",shivDocument:l,createElement:r,createDocumentFragment:function(e,t){if(e||(e=n),h)return e.createDocumentFragment();for(var i=(t=t||o(e)).frag.cloneNode(),a=0,r=s(),c=r.length;c>a;a++)i.createElement(r[a]);return i},addElements:function(e,t){var n=x.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),x.elements=n+" "+e,l(t)}};t.html5=x,l(n);var k=/^$|\b(?:all|print)\b/,T="html5shiv",L=!h&&function(){var e=n.documentElement;return!(void 0===n.namespaces||void 0===n.parentWindow||void 0===e.applyElement||void 0===e.removeNode||void 0===t.attachEvent)}();x.type+=" print",x.shivPrint=p,p(n),"object"==i()(e)&&e.exports&&(e.exports=x)}(void 0!==t?t:this,n);var S="Moz O ms Webkit",M=b._config.usePrefixes?S.toLowerCase().split(" "):[];b._domPrefixes=M,x.addTest("audio",function(){var e=r("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),x.addTest("video",function(){var e=r("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t});var _=function(){var e=!("onblur"in n.documentElement);return function(t,n){var i;return!!t&&(n&&"string"!=typeof n||(n=r(n||"div")),!(i=(t="on"+t)in n)&&e&&(n.setAttribute||(n=r("div")),n.setAttribute(t,""),i="function"==typeof n[t],n[t]!==a&&(n[t]=a),n.removeAttribute(t)),i)}}();b.hasEvent=_,x.addTest("pointerevents",function(){var e=!1,t=M.length;for(e=x.hasEvent("pointerdown");t--&&!e;)_(M[t]+"pointerdown")&&(e=!0);return e});var j=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=j,x.addTest("csscalc",function(){var e="width:",t=r("a");return t.style.cssText=e+j.join("calc(10px);"+e),!!t.style.length}),x.addTest("cubicbezierrange",function(){var e=r("a");return e.style.cssText=j.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length});var E={elem:r("modernizr")};x._q.push(function(){delete E.elem}),x.addTest("csschunit",function(){var e,t=E.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(t){e=!1}return e}),x.addTest("cssexunit",function(){var e,t=E.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(t){e=!1}return e});var N="CSS"in t&&"supports"in t.CSS,z="supportsCSS"in t;x.addTest("supports",N||z);var A=function(){var e=t.matchMedia||t.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var n=!1;return c("@media "+e+" { #modernizr { position: absolute; } }",function(e){n="absolute"==(t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle).position}),n}}();b.mq=A,x.addTest("mediaqueries",A("only all"));var B,I=b.testStyles=c;x.addTest("hiddenscroll",function(){return I("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),x.addTest("touchevents",function(){var e;if("ontouchstart"in t||t.DocumentTouch&&n instanceof DocumentTouch)e=!0;else{var i=["@media (",j.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");I(i,function(t){e=9===t.offsetTop})}return e}),x.addTest("checked",function(){return I("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=r("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),I("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,x.addTest("displaytable",t,{aliases:["display-table"]})},2),function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}()?x.addTest("fontface",!1):I('@font-face {font-family:"font";src:url("https://")}',function(e,t){var i=n.getElementById("smodernizr"),a=i.sheet||i.styleSheet,s=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",o=/src/i.test(s)&&0===s.indexOf(t.split(" ")[0]);x.addTest("fontface",o)}),I("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){x.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),function(){var e={}.hasOwnProperty;B=s(e,"undefined")||s(e.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),x.hasOwnProperty(e)&&setTimeout(function(){x._trigger(e,x[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},x._q.push(function(){b.addTest=d}),d("htmlimports","import"in r("link"));var P=b._config.usePrefixes?S.split(" "):[];b._cssomPrefixes=P;var O=function(e){var n,i=j.length,s=t.CSSRule;if(void 0===s)return a;if(!e)return!1;if((n=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in s)return"@"+e;for(var o=0;i>o;o++){var r=j[o];if(r.toUpperCase()+"_"+n in s)return"@-"+r.toLowerCase()+"-"+e}return!1};b.atRule=O;var D={style:E.elem.style};x._q.unshift(function(){delete D.style}),b.testAllProps=g;var $=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?O(e):(-1!=e.indexOf("-")&&(e=l(e)),t?g(e,t,n):g(e,"pfx"))};x.addTest("fullscreen",!(!$("exitFullscreen",n,!1)&&!$("cancelFullScreen",n,!1))),b.testAllProps=y,x.addTest("cssanimations",y("animationName","a",!0)),x.addTest("backgroundsize",y("backgroundSize","100%",!0)),x.addTest("borderimage",y("borderImage","url() 1",!0)),x.addTest("boxshadow",y("boxShadow","1px 1px",!0)),x.addTest("boxsizing",y("boxSizing","border-box",!0)&&(n.documentMode===a||n.documentMode>7)),function(){x.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=y("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[i])),x.addTest("csscolumns."+e,t)}(),x.addTest("displayrunin",y("display","run-in"),{aliases:["display-runin"]}),x.addTest("ellipsis",y("textOverflow","ellipsis")),x.addTest("cssfilters",function(){if(x.supports)return y("filter","blur(2px)");var e=r("a");return e.style.cssText=j.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===a||n.documentMode>9)}),x.addTest("cssmask",y("maskRepeat","repeat-x",!0)),function(){var e,t,n,i,a,o;for(var r in C)if(C.hasOwnProperty(r)){if(e=[],(t=C[r]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=s(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(o=e[a].split(".")).length?x[o[0]]=i:(!x[o[0]]||x[o[0]]instanceof Boolean||(x[o[0]]=new Boolean(x[o[0]])),x[o[0]][o[1]]=i),w.push((i?"":"no-")+o.join("-"))}}(),o(w),delete b.addTest,delete b.addAsyncTest;for(var R=0;R<x._q.length;R++)x._q[R]();t.Modernizr=x}(window,document)}).call(t,n("f1Eh")(e))},"Bko/":function(e,t){},CTtL:function(e,t){},"I51/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=n("mtWM"),s=n.n(a),o=n("Rf8U"),r=n.n(o),c=n("xJD8"),l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{mainOpen:e.navOC},attrs:{id:"app"}},[i("div",{staticClass:"mask"}),e._v(" "),i("header",[i("nav",{staticClass:"flexBox"},[i("ul",[i("li",{staticClass:"homePage btn indexNow"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("PKyW"),alt:"HomePage"}})])],1),e._v(" "),i("li",{staticClass:"makeupBtn btn makeup"},[i("router-link",{attrs:{to:"/makeup"}},[e._v("Makeup")])],1),e._v(" "),i("li",{staticClass:"ediBtn btn editorial"},[i("router-link",{attrs:{to:"/editorial"}},[e._v("Editorial")])],1),e._v(" "),i("li",{staticClass:"adverBtn btn advertising"},[i("router-link",{attrs:{to:"/advertising"}},[e._v("Advertising")])],1),e._v(" "),i("li",{staticClass:"groomingBtn btn mens_grooming"},[i("router-link",{attrs:{to:"/mens_grooming"}},[e._v("Men's grooming")])],1),e._v(" "),i("li",{staticClass:"weddingBtn btn wedding"},[i("router-link",{attrs:{to:"/wedding"}},[e._v("Wedding")])],1),e._v(" "),i("li",{staticClass:"videoBtn btn videos"},[i("router-link",{attrs:{to:"/videos"}},[e._v("Videos")])],1),e._v(" "),i("li",{staticClass:"aboutBtn btn aboutme"},[i("router-link",{attrs:{to:"/aboutme"}},[e._v("About Me")])],1)]),e._v(" "),i("div",{staticClass:"navLogo absolute"},[i("router-link",{attrs:{to:"/",title:"Return To Homepage"}},[i("img",{staticClass:"showUp",attrs:{src:n("dze5"),alt:"Mineva's Website"}})])],1)])]),e._v(" "),i("div",{staticClass:"toggleBtn",class:{open:e.navOC},on:{click:e.navShow}},[i("span")]),e._v(" "),i("transition",{attrs:{name:"page",mode:"out-in"}},[i("router-view",{key:e.$route.path})],1),e._v(" "),i("footer",{class:e.footerId()},[e._m(0),e._v(" "),i("div",{staticClass:"mainLogoBG"}),e._v(" "),i("div",{staticClass:"mainLogo"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"showUp",attrs:{src:n("uCQt"),alt:"Mineva's Website"}}),e._v(" "),i("img",{staticClass:"hideUp",attrs:{src:n("dze5"),alt:"Mineva's Website"}})]),e._v(" "),i("h2",{staticClass:"pageTlt"},[e._v(e._s(e.pageTlt()))])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"copyright"},[this._v("© 2019 Mineva H. All Rights Reserved")])])}]};var d=function(e){n("dz1K")},u=n("VU/8")(c.a,l,!1,d,null,null).exports,f=n("/ocq"),p=n("vBWZ"),m={data:function(){return{slickList:[],slickOptions:{autoplay:!0,autoplaySpeed:3e3,speed:500,dots:!1,pauseOnFocus:!1,adaptiveHeight:!0}}},components:{slick:p.a},beforeUpdate:function(){this.$refs.slickIndex&&this.$refs.slickIndex.destroy()},updated:function(){this.$refs.slickIndex&&!this.$refs.slickIndex.$el.classList.contains("slick-initialized")&&this.$refs.slickIndex.create()},methods:{getSlickList:function(){var e=this;this.axios.get("../static/json/index.json").then(function(t){e.slickList=t.data,console.log("data correct")}).catch(function(e){console.log("data error")})}},mounted:function(){this.getSlickList()}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"indexPage",attrs:{id:"main"}},[t("div",{staticClass:"container flexBox"},[t("div",{staticClass:"BigBox"},[t("slick",{ref:"slickIndex",staticClass:"slickBox",attrs:{options:this.slickOptions}},this._l(this.slickList,function(e){return t("div",[t("router-link",{attrs:{to:e.link,"data-cid":e.cid}},[t("img",{attrs:{src:e.imgUrl,alt:e.alt,title:e.alt}})])],1)}),0)],1)])])},staticRenderFns:[]};var v=n("VU/8")(m,h,!1,function(e){n("NWbS")},"data-v-123610e4",null).exports,g=n("w/U7");n("5h7c");i.a.use(g.a);var y={data:function(){return{sbOpen:!1,masonryList:[],slickList:[],slickOptions:{speed:500,dots:!1,pauseOnFocus:!1,itemSelector:".grid-item",initialSlide:"0"},slideBH:"500",jsonLink:""}},components:{slick:p.a},beforeUpdate:function(){this.$refs.slickPage&&this.$refs.slickPage.destroy()},updated:function(){this.$refs.slickPage&&!this.$refs.slickPage.$el.classList.contains("slick-initialized")&&this.$refs.slickPage.create()},methods:{changePath:function(){switch(this.$route.path){case"/editorial":this.jsonLink="../static/json/editorial.json";break;case"/advertising":this.jsonLink="../static/json/advertising.json";break;case"/mens_grooming":this.jsonLink="../static/json/mens_grooming.json";break;case"/wedding":this.jsonLink="../static/json/wedding.json"}},getMasonryList:function(){var e=this;this.changePath(),this.axios.get(this.jsonLink).then(function(t){e.masonryList=t.data,e.slickList=t.data,console.log("data correct")}).catch(function(e){console.log("data error")})},LBclick:function(e){this.slickOptions.initialSlide=e,this.$refs.slickPage.reSlick(),this.sbOpen=!this.sbOpen},LBclose:function(){this.sbOpen=!this.sbOpen}},mounted:function(){this.getMasonryList()}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"pages",class:this.$route.path.slice(1),attrs:{id:"main"}},[n("div",{staticClass:"container flexBox"},[n("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"picBox grid",attrs:{"transition-duration":"0.3s","item-selector":".grid-item"}},e._l(e.masonryList,function(t,i){return n("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"grid-item",attrs:{"data-dir":t.direction,"data-cid":t.cid},on:{click:function(t){e.LBclick(i)}}},[n("div",[n("img",{attrs:{src:t.imgUrl,alt:t.alt}})])])}),0)]),e._v(" "),n("div",{staticClass:"slickBlock",class:{open:e.sbOpen}},[n("div",{staticClass:"slicBig"},[n("slick",{ref:"slickPage",staticClass:"slickBox",attrs:{options:e.slickOptions}},e._l(e.slickList,function(e,t){return n("div",{staticClass:"slickImg",attrs:{"data-num":e.cid,"data-dir":e.direction}},[n("div",{staticClass:"masoImg",style:{"background-image":"url("+e.imgUrl+")"},attrs:{"data-cid":e.cid,alt:e.alt}})])}),0),e._v(" "),n("div",{staticClass:"slickBlock_closeBtn",on:{click:e.LBclose}},[n("span")])],1)])])},staticRenderFns:[]};var C=n("VU/8")(y,w,!1,function(e){n("haJA")},"data-v-462231e3",null).exports;i.a.use(f.a);var b=new f.a({routes:[{path:"/",name:"indexPage",component:v},{path:"/editorial",name:"editorial",component:C},{path:"/advertising",name:"advertising",component:C},{path:"/mens_grooming",name:"mens_grooming",component:C},{path:"/wedding",name:"wedding",component:C}]});n("991W"),n("/5Jc"),n("Bko/"),n("I51/"),n("OEtt"),n("CTtL"),n("AcvE"),n("QOb0");i.a.use(r.a,s.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:b,components:{App:u},template:"<App/>"})},NWbS:function(e,t){},OEtt:function(e,t){},PKyW:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuaWhyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyNi45ODhweCIgaGVpZ2h0PSIyMi4xNDZweCIgdmlld0JveD0iMCAwIDI2Ljk4OCAyMi4xNDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2Ljk4OCAyMi4xNDYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE0LjI1NCwwLjI2OGMtMC40MTgtMC4zNTctMS4xMDItMC4zNTctMS41MiwwTDAuMjU0LDExLjIzMWMtMC40MTgsMC4zNTctMC4zMSwwLjkxNiwwLjI0LDAuOTE2aDMNCgljMC41NSwwLDEtMC4wOCwxLDAuNDcxdjhjMCwwLjU1LDAuNDUsMS41MjksMSwxLjUyOWg0YzAuNTUsMCwxLTAuOTc5LDEtMS41Mjl2LTRjMC0wLjU1MSwwLjQ1LTAuNDcxLDEtMC40NzFoNA0KCWMwLjU1LDAsMS0wLjA4LDEsMC40NzF2NGMwLDAuNTUsMC40NSwxLjUyOSwxLDEuNTI5aDRjMC41NSwwLDEtMC45NzksMS0xLjUyOXYtOGMwLTAuNTUxLDAuNDUtMC40NzEsMS0wLjQ3MWgzDQoJYzAuNTUsMCwwLjY1OC0wLjU1OSwwLjI0LTAuOTE2TDE0LjI1NCwwLjI2OHoiLz4NCjwvc3ZnPg0K"},QOb0:function(e,t,n){(function(e){e(function(){var t=e(".loadTxt"),n=["L","o","a","d","i","n","g"," ."," ."," .",""],i="",a=0;!function e(){setTimeout(function(){i+=n[a],t.html(i),++a==n.length-1?(a=0,i="",e()):e()},600)}(),e(window).resize(function(){var t;t=e(window).height(),(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&t<=480&&(e("nav").css({"overflow-y":"scroll"}),e("nav > ul").css({"padding-top":"2rem","padding-bottom":"1rem"}))}).resize()}),e(window).on("load",function(){e(".loadingBar").delay(1e3).fadeOut(300)})}).call(t,n("7t+N"))},dz1K:function(e,t){},dze5:function(e,t,n){e.exports=n.p+"static/img/mineva_hover.cde6eda.svg"},haJA:function(e,t){},uCQt:function(e,t,n){e.exports=n.p+"static/img/mineva.98b3115.svg"},xJD8:function(e,t,n){"use strict";(function(e){t.a={name:"App",data:function(){return{nowPage:"",navOC:!1}},methods:{footerId:function(){var e=this.$route.path.slice(1);return""==e&&(e="index"),e},navShow:function(){this.navOC=!this.navOC},pageTlt:function(){return this.$route.path.slice(1).toLowerCase().replace(/( |^)[a-z]/g,function(e){return e.toUpperCase()})},navActF:function(){e("nav .btn").removeClass("active");var t=this.$route.path.slice(1);""==t&&(t="indexNow"),e("."+t+".btn").addClass("active")}},mounted:function(){this.navActF()},watch:{$route:function(){this.navActF()}}}}).call(t,n("7t+N"))}},["NHnr"]);
//# sourceMappingURL=app.4e8dba60be3122925b9e.js.map
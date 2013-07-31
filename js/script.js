var structure, control;

(function() {

/* PubSub*/
     var o = $( {} );
    $.each({
        on: 'subscribe',
        trigger: 'publish',
        off: 'unsubscribe' 
    }, function( key, api ) {
        $[api] = function() {
            o[key].apply( o, arguments );
        }
    });

    window.Mousetrap=function(){function a(a,b,c){if(a.addEventListener)return a.addEventListener(b,c,!1);a.attachEvent("on"+b,c)}function b(a){var a=a||{},b=!1,c;for(c in m)a[c]?b=!0:m[c]=0;b||(p=!1)}function c(a,b,c,d){var e,f,g=[];if(!k[a])return[];if("keyup"==c&&(15<a&&19>a||91==a))b=[a];for(e=0;e<k[a].length;++e)f=k[a][e],!(f.seq&&m[f.seq]!=f.level)&&c==f.action&&b.sort().join(",")===f.modifiers.sort().join(",")&&(d&&k[a].splice(e,1),g.push(f));return g}function d(a,d,e){var f;f=e.target||e.srcElement;var g=f.tagName;f=-1<(" "+f.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==g||"SELECT"==g||"TEXTAREA"==g;if(!f){f=[];e.shiftKey&&f.push(i.shift);e.altKey&&f.push(i.alt);e.ctrlKey&&f.push(i.ctrl);e.metaKey&&f.push(i.command);f=c(a,f,d);for(var h={},j=!1,g=0;g<f.length;++g)if(f[g].seq)j=!0,h[f[g].seq]=1,f[g].callback(e);else if(!j&&!p){f[g].callback(e);break}d==p&&!(15<a&&19>a||91==a)&&b(h)}}function e(a){d(93==a.keyCode||224==a.keyCode?91:a.keyCode,"keydown",a)}function f(a){o===a.keyCode?o=!1:d(93==a.keyCode||224==a.keyCode?91:a.keyCode,"keyup",a)}function g(a,c,d,e){m[a]=0;var f=function(){p=e;++m[a];clearTimeout(n);n=setTimeout(b,1e3)},g=function(a){d(a);"keydown"===e&&(o=a.keyCode);setTimeout(b,10)},i;for(i=0;i<c.length;++i)h(c[i],i<c.length-1?f:g,e,a,i)}function h(a,b,d,e,f){var a=a.replace(/\s+/g," "),h=a.split(" "),l,m=[];if(1<h.length)return g(a,h,b,d);h="+"===a?["+"]:a.split("+");for(a=0;a<h.length;++a)l=h[a],j[l]&&(m.push(i.shift),l=j[l]),l=i[l]||l.toUpperCase().charCodeAt(0),(15<l&&19>l||91==l)&&m.push(l);k[l]||(k[l]=[]);c(l,m,d,!e);k[l][e?"unshift":"push"]({callback:b,modifiers:m,action:d,seq:e,level:f})}for(var i={backspace:8,tab:9,enter:13,"return":13,shift:16,ctrl:17,alt:18,option:18,capslock:20,esc:27,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:46,meta:91,command:91,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},j={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},k={},l={},m={},n,o=!1,p=!1,q=1;20>q;++q)i["f"+q]=111+q;return{bind:function(a,b,c){for(var c=c||"keydown",d=a instanceof Array?a:a.split(","),e=c,f=0;f<d.length;++f)h(d[f],b,e);l[a+":"+c]=b},trigger:function(a,b){l[a+":"+(b||"keydown")]()},addEvent:function(b,c,d){a(b,c,d)},reset:function(){k={};l={}},init:function(){a(document,"keydown",e);a(document,"keyup",f)}}}();Mousetrap.addEvent(window,"load",Mousetrap.init)


;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.borderradius=function(){return F("borderRadius")},q.boxshadow=function(){return F("boxShadow")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

(function(c){c.jGestures={};c.jGestures.defaults={};c.jGestures.defaults.thresholdShake={requiredShakes:10,freezeShakes:100,frontback:{sensitivity:10},leftright:{sensitivity:10},updown:{sensitivity:10}};c.jGestures.defaults.thresholdPinchopen=0.05;c.jGestures.defaults.thresholdPinchmove=0.05;c.jGestures.defaults.thresholdPinch=0.05;c.jGestures.defaults.thresholdPinchclose=0.05;c.jGestures.defaults.thresholdRotatecw=5;c.jGestures.defaults.thresholdRotateccw=5;c.jGestures.defaults.thresholdMove=20;c.jGestures.defaults.thresholdSwipe=100;c.jGestures.data={};c.jGestures.data.capableDevicesInUserAgentString=["iPad","iPhone","iPod","Mobile Safari"];c.jGestures.data.hasGestures=(function(){var k;for(k=0;k<c.jGestures.data.capableDevicesInUserAgentString.length;k++){if(navigator.userAgent.indexOf(c.jGestures.data.capableDevicesInUserAgentString[k])!==-1){return true}}return false})();c.hasGestures=c.jGestures.data.hasGestures;c.jGestures.events={touchstart:"jGestures.touchstart",touchendStart:"jGestures.touchend;start",touchendProcessed:"jGestures.touchend;processed",gesturestart:"jGestures.gesturestart",gestureendStart:"jGestures.gestureend;start",gestureendProcessed:"jGestures.gestureend;processed"};jQuery.each({orientationchange_orientationchange01:"orientationchange",gestureend_pinchopen01:"pinchopen",gestureend_pinchclose01:"pinchclose",gestureend_rotatecw01:"rotatecw",gestureend_rotateccw01:"rotateccw",gesturechange_pinch01:"pinch",gesturechange_rotate01:"rotate",touchstart_swipe13:"swipemove",touchstart_swipe01:"swipeone",touchstart_swipe02:"swipetwo",touchstart_swipe03:"swipethree",touchstart_swipe04:"swipefour",touchstart_swipe05:"swipeup",touchstart_swipe06:"swiperightup",touchstart_swipe07:"swiperight",touchstart_swipe08:"swiperightdown",touchstart_swipe09:"swipedown",touchstart_swipe10:"swipeleftdown",touchstart_swipe11:"swipeleft",touchstart_swipe12:"swipeleftup",touchstart_tap01:"tapone",touchstart_tap02:"taptwo",touchstart_tap03:"tapthree",touchstart_tap04:"tapfour",devicemotion_shake01:"shake",devicemotion_shake02:"shakefrontback",devicemotion_shake03:"shakeleftright",devicemotion_shake04:"shakeupdown"},function(l,k){jQuery.event.special[k]={setup:function(){var r=l.split("_");var o=r[0];var m=r[1].slice(0,r[1].length-2);var p=jQuery(this);var q;var n;if(!p.data("ojQueryGestures")||!p.data("ojQueryGestures")[o]){q=p.data("ojQueryGestures")||{};n={};n[o]=true;c.extend(true,q,n);p.data("ojQueryGestures",q);if(c.hasGestures){switch(m){case"orientationchange":p.get(0).addEventListener("orientationchange",a,false);break;case"shake":case"shakefrontback":case"shakeleftright":case"shakeupdown":case"tilt":p.get(0).addEventListener("devicemotion",b,false);break;case"tap":case"swipe":case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":p.get(0).addEventListener("touchstart",h,false);break;case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":p.get(0).addEventListener("gesturestart",e,false);p.get(0).addEventListener("gestureend",i,false);break;case"pinch":case"rotate":p.get(0).addEventListener("gesturestart",e,false);p.get(0).addEventListener("gesturechange",f,false);break}}else{switch(m){case"tap":case"swipe":p.bind("mousedown",h);break;case"orientationchange":case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":case"pinch":case"rotate":case"shake":case"tilt":break}}}return false},add:function(n){var m=jQuery(this);var o=m.data("ojQueryGestures");o[n.type]={originalType:n.type};return false},remove:function(n){var m=jQuery(this);var o=m.data("ojQueryGestures");o[n.type]=false;m.data("ojQueryGestures",o);return false},teardown:function(){var r=l.split("_");var o=r[0];var m=r[1].slice(0,r[1].length-2);var p=jQuery(this);var q;var n;if(!p.data("ojQueryGestures")||!p.data("ojQueryGestures")[o]){q=p.data("ojQueryGestures")||{};n={};n[o]=false;c.extend(true,q,n);p.data("ojQueryGestures",q);if(c.hasGestures){switch(m){case"orientationchange":p.get(0).removeEventListener("orientationchange",a,false);break;case"shake":case"shakefrontback":case"shakeleftright":case"shakeupdown":case"tilt":p.get(0).removeEventListener("devicemotion",b,false);break;case"tap":case"swipe":case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":case"swipeleftup":p.get(0).removeEventListener("touchstart",h,false);p.get(0).removeEventListener("touchmove",g,false);p.get(0).removeEventListener("touchend",j,false);break;case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":p.get(0).removeEventListener("gesturestart",e,false);p.get(0).removeEventListener("gestureend",i,false);break;case"pinch":case"rotate":p.get(0).removeEventListener("gesturestart",e,false);p.get(0).removeEventListener("gesturechange",f,false);break}}else{switch(m){case"tap":case"swipe":p.unbind("mousedown",h);p.unbind("mousemove",g);p.unbind("mouseup",j);break;case"orientationchange":case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":case"pinch":case"rotate":case"shake":case"tilt":break}}}return false}}});function d(k){k.startMove=(k.startMove)?k.startMove:{startX:null,startY:null,timestamp:null};var l=new Date().getTime();var m;var n;if(k.touches){n=[{lastX:k.deltaX,lastY:k.deltaY,moved:null,startX:k.screenX-k.startMove.screenX,startY:k.screenY-k.startMove.screenY}];m={vector:k.vector||null,orientation:window.orientation||null,lastX:((n[0].lastX>0)?+1:((n[0].lastX<0)?-1:0)),lastY:((n[0].lastY>0)?+1:((n[0].lastY<0)?-1:0)),startX:((n[0].startX>0)?+1:((n[0].startX<0)?-1:0)),startY:((n[0].startY>0)?+1:((n[0].startY<0)?-1:0))};n[0].moved=Math.sqrt(Math.pow(Math.abs(n[0].startX),2)+Math.pow(Math.abs(n[0].startY),2))}return{type:k.type||null,originalEvent:k.event||null,delta:n||null,direction:m||{orientation:window.orientation||null,vector:k.vector||null},duration:(k.duration)?k.duration:(k.startMove.timestamp)?l-k.timestamp:null,rotation:k.rotation||null,scale:k.scale||null,description:k.description||[k.type,":",k.touches,":",((n[0].lastX!=0)?((n[0].lastX>0)?"right":"left"):"steady"),":",((n[0].lastY!=0)?((n[0].lastY>0)?"down":"up"):"steady")].join("")}}function a(l){var k=["landscape:clockwise:","portrait:default:","landscape:counterclockwise:","portrait:upsidedown:"];c(window).triggerHandler("orientationchange",{direction:{orientation:window.orientation},description:["orientationchange:",k[((window.orientation/90)+1)],window.orientation].join("")})}function b(r){var k;var t=jQuery(window);var o=t.data("ojQueryGestures");var m=c.jGestures.defaults.thresholdShake;var n=o.oDeviceMotionLastDevicePosition||{accelerationIncludingGravity:{x:0,y:0,z:0},shake:{eventCount:0,intervalsPassed:0,intervalsFreeze:0},shakeleftright:{eventCount:0,intervalsPassed:0,intervalsFreeze:0},shakefrontback:{eventCount:0,intervalsPassed:0,intervalsFreeze:0},shakeupdown:{eventCount:0,intervalsPassed:0,intervalsFreeze:0}};var q={accelerationIncludingGravity:{x:r.accelerationIncludingGravity.x,y:r.accelerationIncludingGravity.y,z:r.accelerationIncludingGravity.z},shake:{eventCount:n.shake.eventCount,intervalsPassed:n.shake.intervalsPassed,intervalsFreeze:n.shake.intervalsFreeze},shakeleftright:{eventCount:n.shakeleftright.eventCount,intervalsPassed:n.shakeleftright.intervalsPassed,intervalsFreeze:n.shakeleftright.intervalsFreeze},shakefrontback:{eventCount:n.shakefrontback.eventCount,intervalsPassed:n.shakefrontback.intervalsPassed,intervalsFreeze:n.shakefrontback.intervalsFreeze},shakeupdown:{eventCount:n.shakeupdown.eventCount,intervalsPassed:n.shakeupdown.intervalsPassed,intervalsFreeze:n.shakeupdown.intervalsFreeze}};var p;var s;var l;for(k in o){switch(k){case"shake":case"shakeleftright":case"shakefrontback":case"shakeupdown":p=[];s=[];p.push(k);if(++q[k].intervalsFreeze>m.freezeShakes&&q[k].intervalsFreeze<(2*m.freezeShakes)){break}q[k].intervalsFreeze=0;q[k].intervalsPassed++;if((k==="shake"||k==="shakeleftright")&&(q.accelerationIncludingGravity.x>m.leftright.sensitivity||q.accelerationIncludingGravity.x<(-1*m.leftright.sensitivity))){p.push("leftright");p.push("x-axis")}if((k==="shake"||k==="shakefrontback")&&(q.accelerationIncludingGravity.y>m.frontback.sensitivity||q.accelerationIncludingGravity.y<(-1*m.frontback.sensitivity))){p.push("frontback");p.push("y-axis")}if((k==="shake"||k==="shakeupdown")&&(q.accelerationIncludingGravity.z+9.81>m.updown.sensitivity||q.accelerationIncludingGravity.z+9.81<(-1*m.updown.sensitivity))){p.push("updown");p.push("z-axis")}if(p.length>1){if(++q[k].eventCount==m.requiredShakes&&(q[k].intervalsPassed)<m.freezeShakes){t.triggerHandler(k,d({type:k,description:p.join(":"),event:r,duration:q[k].intervalsPassed*5}));q[k].eventCount=0;q[k].intervalsPassed=0;q[k].intervalsFreeze=m.freezeShakes+1}else{if(q[k].eventCount==m.requiredShakes&&(q[k].intervalsPassed)>m.freezeShakes){q[k].eventCount=0;q[k].intervalsPassed=0}}}break}l={};l.oDeviceMotionLastDevicePosition=q;t.data("ojQueryGestures",c.extend(true,o,l))}}function h(l){var k=jQuery(l.currentTarget);k.triggerHandler(c.jGestures.events.touchstart,l);if(c.hasGestures){l.currentTarget.addEventListener("touchmove",g,false);l.currentTarget.addEventListener("touchend",j,false)}else{k.bind("mousemove",g);k.bind("mouseup",j)}var n=k.data("ojQueryGestures");var m=(l.touches)?l.touches[0]:l;var o={};o.oLastSwipemove={screenX:m.screenX,screenY:m.screenY,timestamp:new Date().getTime()};o.oStartTouch={screenX:m.screenX,screenY:m.screenY,timestamp:new Date().getTime()};k.data("ojQueryGestures",c.extend(true,n,o))}function g(t){var v=jQuery(t.currentTarget);var s=v.data("ojQueryGestures");var q=!!t.touches;var l=(q)?t.changedTouches[0].screenX:t.screenX;var k=(q)?t.changedTouches[0].screenY:t.screenY;var r=s.oLastSwipemove;var o=l-r.screenX;var n=k-r.screenY;var u;if(!!s.oLastSwipemove){u=d({type:"swipemove",touches:(q)?t.touches.length:"1",screenY:k,screenX:l,deltaY:n,deltaX:o,startMove:r,event:t,timestamp:r.timestamp});v.triggerHandler(u.type,u)}var m={};var p=(t.touches)?t.touches[0]:t;m.oLastSwipemove={screenX:p.screenX,screenY:p.screenY,timestamp:new Date().getTime()};v.data("ojQueryGestures",c.extend(true,s,m))}function j(r){var v=jQuery(r.currentTarget);var x=!!r.changedTouches;var u=(x)?r.changedTouches.length:"1";var p=(x)?r.changedTouches[0].screenX:r.screenX;var o=(x)?r.changedTouches[0].screenY:r.screenY;v.triggerHandler(c.jGestures.events.touchendStart,r);if(c.hasGestures){r.currentTarget.removeEventListener("touchmove",g,false);r.currentTarget.removeEventListener("touchend",j,false)}else{v.unbind("mousemove",g);v.unbind("mouseup",j)}var m=v.data("ojQueryGestures");var y=(Math.abs(m.oStartTouch.screenX-p)>c.jGestures.defaults.thresholdMove||Math.abs(m.oStartTouch.screenY-o)>c.jGestures.defaults.thresholdMove)?true:false;var B=(Math.abs(m.oStartTouch.screenX-p)>c.jGestures.defaults.thresholdSwipe||Math.abs(m.oStartTouch.screenY-o)>c.jGestures.defaults.thresholdSwipe)?true:false;var A;var t;var n;var l;var k;var q;var w=["zero","one","two","three","four"];var s;for(A in m){t=m.oStartTouch;n={};p=(x)?r.changedTouches[0].screenX:r.screenX;o=(x)?r.changedTouches[0].screenY:r.screenY;l=p-t.screenX;k=o-t.screenY;q=d({type:"swipe",touches:u,screenY:o,screenX:p,deltaY:k,deltaX:l,startMove:t,event:r,timestamp:t.timestamp});s=false;switch(A){case"swipeone":if(x===false&&u==1&&y===false){break}if(x===false||(u==1&&y===true&&B===true)){s=true;q.type=["swipe",w[u]].join("");v.triggerHandler(q.type,q)}break;case"swipetwo":if((x&&u==2&&y===true&&B===true)){s=true;q.type=["swipe",w[u]].join("");v.triggerHandler(q.type,q)}break;case"swipethree":if((x&&u==3&&y===true&&B===true)){s=true;q.type=["swipe",w[u]].join("");v.triggerHandler(q.type,q)}break;case"swipefour":if((x&&u==4&&y===true&&B===true)){s=true;q.type=["swipe",w[u]].join("");v.triggerHandler(q.type,q)}break;case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":case"swipeleftup":if(x&&y===true&&B===true){s=true;q.type=["swipe",((q.delta[0].lastX!=0)?((q.delta[0].lastX>0)?"right":"left"):""),((q.delta[0].lastY!=0)?((q.delta[0].lastY>0)?"down":"up"):"")].join("");v.triggerHandler(q.type,q)}break;case"tapone":case"taptwo":case"tapthree":case"tapfour":if((y!==true&&s!==true)&&(w[u]==A.slice(3))){q.description=["tap",w[u]].join("");q.type=["tap",w[u]].join("");v.triggerHandler(q.type,q)}break}var z={};v.data("ojQueryGestures",c.extend(true,m,z));v.data("ojQueryGestures",c.extend(true,m,z))}v.triggerHandler(c.jGestures.events.touchendProcessed,r)}function e(l){var k=jQuery(l.currentTarget);k.triggerHandler(c.jGestures.events.gesturestart,l);var m=k.data("ojQueryGestures");var n={};n.oStartTouch={timestamp:new Date().getTime()};k.data("ojQueryGestures",c.extend(true,m,n))}function f(l){var k=jQuery(l.currentTarget);var p,m,r,o;var q=k.data("ojQueryGestures");var n;for(n in q){switch(n){case"pinch":p=l.scale;if(((p<1)&&(p%1)<(1-c.jGestures.defaults.thresholdPinchclose))||((p>1)&&(p%1)>(c.jGestures.defaults.thresholdPinchopen))){m=(p<1)?-1:+1;o=d({type:"pinch",scale:p,touches:null,startMove:q.oStartTouch,event:l,timestamp:q.oStartTouch.timestamp,vector:m,description:["pinch:",m,":",((p<1)?"close":"open")].join("")});k.triggerHandler(o.type,o)}break;case"rotate":p=l.rotation;if(((p<1)&&(-1*(p)>c.jGestures.defaults.thresholdRotateccw))||((p>1)&&(p>c.jGestures.defaults.thresholdRotatecw))){m=(p<1)?-1:+1;o=d({type:"rotate",rotation:p,touches:null,startMove:q.oStartTouch,event:l,timestamp:q.oStartTouch.timestamp,vector:m,description:["rotate:",m,":",((p<1)?"counterclockwise":"clockwise")].join("")});k.triggerHandler(o.type,o)}break}}}function i(l){var k=jQuery(l.currentTarget);k.triggerHandler(c.jGestures.events.gestureendStart,l);var n;var o=k.data("ojQueryGestures");var m;for(m in o){switch(m){case"pinchclose":n=l.scale;if((n<1)&&(n%1)<(1-c.jGestures.defaults.thresholdPinchclose)){k.triggerHandler("pinchclose",d({type:"pinchclose",scale:n,vector:-1,touches:null,startMove:o.oStartTouch,event:l,timestamp:o.oStartTouch.timestamp,description:"pinch:-1:close"}))}break;case"pinchopen":n=l.scale;if((n>1)&&(n%1)>(c.jGestures.defaults.thresholdPinchopen)){k.triggerHandler("pinchopen",d({type:"pinchopen",scale:n,vector:+1,touches:null,startMove:o.oStartTouch,event:l,timestamp:o.oStartTouch.timestamp,description:"pinch:+1:open"}))}break;case"rotatecw":n=l.rotation;if((n>1)&&(n>c.jGestures.defaults.thresholdRotatecw)){k.triggerHandler("rotatecw",d({type:"rotatecw",rotation:n,vector:+1,touches:null,startMove:o.oStartTouch,event:l,timestamp:o.oStartTouch.timestamp,description:"rotate:+1:clockwise"}))}break;case"rotateccw":n=l.rotation;if((n<1)&&(-1*(n)>c.jGestures.defaults.thresholdRotateccw)){k.triggerHandler("rotateccw",d({type:"rotateccw",rotation:n,vector:-1,touches:null,startMove:o.oStartTouch,event:l,timestamp:o.oStartTouch.timestamp,description:"rotate:-1:counterclockwise"}))}break}}k.triggerHandler(c.jGestures.events.gestureendProcessed,l)}})(jQuery);


pipwerks.SCORM.version = "1.2";
var success = pipwerks.SCORM.init();
if (success) {
    scorm  = pipwerks.SCORM;
}

control = {
    openSlide: function(sec, art) {
        if ( $("#long").is(".clicked") ) {
            $("section").eq(sec).show().children("article").eq(art).ScrollTo();
            return;
        }
        var self = this;
        $("section, article").hide();
        $("section").eq(sec).show().children("article").eq(art).show();
        this.curSec = sec;
        this.curArt = art;
        $.publish('change');
    },
	next: function() {
		var self = this;
		if ( self.curArt < structure[self.curSec].length-1 ) {
		//	$("div#counter>span").html( parseInt($("div#counter>span").html())+1);

			$("section")
				.eq(self.curSec)
				.children("article")
				.eq(self.curArt++)
				.hide()
				.next()
				.show();

		} else if (self.curSec < structure.length-1 ) {
			$("section")
				.eq(self.curSec++)
				.hide()
				.children("article")
				.last()
				.hide()

			$("section")
				.eq(self.curSec)
				.show()
				.children("article")
				.eq(self.curArt=0)
				.show();
			initBreadCrums(); 
		//	$("div#counter>span").html( parseInt($("div#counter>span").html())+1);
			$("header>span").html( $("section>h1").eq(self.curSec).html() );
	/*		$("#slider>li")
				.filter(".current")
				.removeClass("current")
				.addClass("passed")
				.end()
				.eq(self.curSec)
				.addClass("current");*/

		}
	},
	prev: function() {
		var self = this;
		if ( self.curArt > 0 ) {
		//	$("div#counter>span").html( parseInt($("div#counter>span").html())-1);

			$("section")
				.eq(self.curSec)
				.children("article")
				.eq(self.curArt--)
				.hide()
				.prev()
				.show();
		} else if (self.curSec > 0 ) {
		//	$("div#counter>span").html( parseInt($("div#counter>span").html())-1);

			$("section")
				.eq(self.curSec--)
				.hide()
				.children("article")
				.first()
				.hide()

			$("section")
				.eq(self.curSec)
				.show()
				.children()
				.eq(self.curArt=structure[self.curArt].length-1)
				.show();

		/*	$("#slider>li")
				.filter(".current")
				.removeClass("current")
				.addClass("passed")
				.end()
				.eq(self.curSec)
				.addClass("current");*/
				initBreadCrums(); 
			$("header>span").html( $("section>h1").eq(self.curSec).html() );
		}
	},
	curSec: 0,
	curArt: 0,
	$curSec: function() {
		var self = this;
		return $("section").eq(this.curSec);
	},
	$curArt: function() {
		var self = this;
		return self.$curSec().children("article").eq(self.curArt);
	}
}

$(document).ready(function() {
    // for (index in slider) {
    //     $("#slider li").eq(index).addClass(slider[index])
    // }
	var length =  $("section").length,
		footered_ul = "";
		$('body').removeClass('hide')
	structure = {
        "length": length
    }
	while (length--) {
		structure[length] = new Array( $("section").addClass("js").eq(length).children("article").addClass("js").length );

	}
    $("footer").addClass("js");
    $("#short").addClass("clicked");
    try {
        temp_str = JSON.parse( scorm.get("cmi.suspend_data") );
        structure = temp_str;
        control.curSec = temp_str.settings.curSec;
        control.curArt = temp_str.settings.curArt;
        control.openSlide(structure.settings.curSec, structure.settings.curArt);
        initBreadCrums();
        $("#slider").find("li").eq(temp_str.settings.curSec).addClass("current");
    } catch(err) {
        initBreadCrums();
    }
        $("footer").addClass("js");
        $("#short").addClass("clicked");
	$("div#counter>span").after(" / " + $("section").length)
})

	
function initBreadCrums() {
    var li = "";
    if (structure) {
        $.each(structure[control.curSec], function(ind, el) {
            li+= (el=="passed")?"<li class=\"passed\"></li>":"<li></li>";
        })
    } else return false;
    $("footer>nav>ul").empty().append(li);
}



$("ul.test").on("click", function(e) {
	var $target = $(e.target), $li = $target.closest("li");
	if ( $target.is("input") ) {
        var tr  = $(this).closest("ul").data("trying");
        if (!tr) {
            tr = 0;
            $(this).closest("ul").data("trying", tr+=1);
            $li.siblings($li.hasClass("r_answer")?".right":".wrong").show()
            $li.siblings($li.hasClass("r_answer")?".wrong":".right").hide()
        } else {
           $li.siblings($li.hasClass("r_answer")?".right":".wrong").show();
           $li.siblings($li.hasClass("r_answer")?".wrong":".right").hide()
           $(this).closest("ul").data("trying", tr+=1);
        }
        if (tr==3) {
            $li.siblings(".wrong").hide().siblings(".right").show();
            $li.siblings("li").find("input").attr("disabled", "disabled")
        }
		if ($li.hasClass("r_answer"))  $li.siblings("li").find("input").attr("disabled", "disabled")
	/*	if ( $li.hasClass("r_answer") ) {
			$li.siblings("li.right").fadeIn();
		} else {
			$li.siblings("li.wrong").fadeIn();
		}*/
	//$li.siblings('.'($li.hasClass("r_answer"))?"li.right":"li.wrong")).show();




	}
})

$(".next, .prev").on("click", function() {
	control[ $(this).data("type") ]();
	$.publish('change')
})

$.subscribe('change',function(){
	control.$curArt().addClass('seenArt')
    $('.current').removeClass('current')
    $("footer ul li").eq(control.$curArt().index()-1).addClass('current')
	$("div#counter>span").html(control.curSec+1);

	cCsCa = control.$curSec().children('article');
	$.each($('footer ul li'),function(i,v){
	if(cCsCa.eq(i).hasClass('seenArt')) {$(this).addClass('passed')}
	})

    structure[control.curSec][control.curArt] = "passed";
    scorm.set( "cmi.score.raw", $("#slider").find("li.passed").length );
    structure.settings = {};
    structure.settings.curSec = control.curSec;
    structure.settings.curArt = control.curArt;
    scorm.set( "cmi.suspend_data", JSON.stringify(structure) )
    scorm.save();

})
$('footer ul').on('click', 'li', function(){
	theIndex = $(this).index();
	control.curArt = theIndex
	control.$curSec().find('article').hide().eq(theIndex).show();
		$.publish('change')
	
})

$("#long").on("click", function() {
	$(this).addClass("clicked").siblings("a").removeClass("clicked");
	$("article, section, footer").removeClass("js");
	$("footer>nav").hide();
    $("section, article").show(function() {
        $(this).children("h1").show();
       // $("section").eq( control.curSec ).children("article").eq( control.curArt ).ScrollTo();
        //$(window).scrollTop( $("section").eq( control.curSec ).children("article").eq( control.curArt ).offset().top )
    })
    setTimeout(function() {
        $("section").eq( control.curSec ).children("article").eq( control.curArt ).ScrollTo();
    }, 1000)

})

$("#short").on("click", function() {
	$(this).addClass("clicked").siblings("a").removeClass("clicked");
	$("article, section, footer").addClass("js");
	$("section, article, section>h1").hide();
	$("section").eq( control.curSec ).show().children("article").eq( control.curArt ).show();
	$("footer>nav").show();
})

if($('html').hasClass('touch')) {

jQuery('body').bind('swipeone',function(e,data){
    e.preventDefault();



 var dir = data.description.split(':')[2],
 	dir2 = data.description.split(':')[3];

if(dir==="left") control.next();
if(dir==="right") control.prev();
    $.publish('change')

});

}

})();
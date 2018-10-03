

/*compiled*/
/*! jQuery v1.8.2 jquery.com | jquery.org/license v1 */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("? ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jq$=a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);(function(window,WA,undefined){if(!window.WaAttachmentsUploadControl){window.WaAttachmentsUploadControl=AttachmentsUploadControl;}function AttachmentsUploadControl(){var imageType=/^image\//,maxFileSize=20000000,maxFilesCount=20,resources={"errorLargeFile":"File %FILE% exceeds maximum size of 20Mb","errorFilesCountExceeded":"Attachments number exceeded. You can upload up to 20 files.","errorHasAlreadyBeenUploaded":"File %FILE% has already been uploaded","errorUnableToDeleteFile":"Unable to delete file %FILE%","errorUnableToUploadFile":'Unable to upload file "%FILE%"'},service=new WaAttachmentsUploadService(),uploadedFiles={};function deleteFile(elementId,fileName){var id,input,li,ul;li=document.getElementById(elementId);id=li.getAttribute("data-resource-id");if(id in uploadedFiles){service.deleteFile({domElementId:elementId,id:id,name:fileName});}else{input=document.createElement("input");input.name="detachedFiles";input.type="hidden";input.value=id;ul=li.parentNode;ul.parentNode.appendChild(input);removeElement(elementId);}}function init(){waMetricsGlobalHandler({module:"Forum",object:"AttachmentsUpload",operation:"Init"});if(WA.Browser.isMSIE8||WA.Browser.isMSIE9){document.querySelector(".attachmentsUploadContainer").style.display="none";}var attachmentsContainer=document.getElementById("idEditModeAttachmentsContainer"),inputFile=document.getElementById("idInputUploadFile");WA.addHandler(inputFile,"click",onInputFileClicked);WA.addHandler(inputFile,"change",onInputFileChanged);WA.addHandler(attachmentsContainer,"click",onContainerClick);service.fileUploaded.addHandler(onFileUploaded);service.fileUploadFailed.addHandler(onFileUploadFailed);service.fileUploadProgressUpdated.addHandler(onFileUploadProgressUpdated);service.fileDeleted.addHandler(onFileDeleted);service.fileDeleteFailed.addHandler(onFileDeleteFailed);}function removeElement(elementId){jq$("#"+elementId).hide("slow",function(){$(this).remove();});}function waMetrics(operation,f){var params={module:"Forum",object:"AttachmentsUpload",operation:operation};if(f){params[(typeof f==="string")?"file":"files"]=f;}waMetricsGlobalHandler(params);}function onContainerClick(e){var fileName,i,li,target=WA.getEventTarget(e);if(WA.Dom.containsClassName(target,"deleteButton")){li=WA.Dom.getFirstParentByTagName(target,"li");fileName=li.getAttribute("data-resource-name");waMetrics("DeleteAttempt",fileName);deleteFile(li.id,fileName);}}function onFileDeleted(sender,args){var elementId=args.domElementId,id=args.id,fileName=args.name,i;waMetrics("Deleted",fileName);if(id in uploadedFiles){delete uploadedFiles[id];}removeElement(elementId);}function onFileDeleteFailed(sender,args){var fileName=args.name;waMetrics("DeleteFailed",fileName);alert(args.message||resources.errorUnableToDeleteFile.replace("%FILE%",fileName));}function onFileUploadProgressUpdated(sender,args){if(args.isImage){return false;}var elementId=args.domElementId,progressBar,progressPercent=args.percent;progressBar=document.getElementById(elementId).querySelector(".fileUploadProgressBarFill");progressBar.style.width=progressPercent+"%";}function onFileUploadFailed(sender,args){var element,elementId=args.domElementId,fileName=args.name,message=resources.errorUnableToUploadFile.replace("%FILE%",fileName);waMetrics("UploadFailed",fileName);element=document.getElementById(elementId);element.parentNode.removeChild(element);alert(args.message?message+": "+args.message:message);}function onFileUploaded(sender,args){var elementId=args.domElementId,fileId=args.id,fileLastModified=args.lastModified,fileLink=args.url,fileName=args.name,fileSize=args.size,isImage=args.isImage,a,input,li;waMetrics("Uploaded",fileName);li=document.getElementById(elementId);li.setAttribute("data-resource-id",fileId);li.setAttribute("data-resource-name",fileName);uploadedFiles[fileId]={name:fileName,size:fileSize,lastModified:fileLastModified,domElementId:elementId};if(isImage){li.className="photosContainerLi";li.querySelector(".photoLink").href=fileLink;}else{li.className="linksContainerLi";a=document.createElement("a");a.className="fileName";a.innerHTML=fileName;a.href=fileLink;a.setAttribute("target","_blank");li.insertBefore(a,li.firstChild);}input=document.createElement("input");input.name="uploadedFiles";input.type="hidden";input.value=fileId;li.appendChild(input);}function onInputFileClicked(){waMetrics("UploadButtonClicked");this.value=null;}function onInputFileChanged(){var fileList=this.files,names=[],file,i;for(i=0;i<fileList.length;i++){file=fileList[i];if(isFilesCountExceeded()){alert(resources.errorFilesCountExceeded);break;}if(isLargeFile(file)){alert(resources.errorLargeFile.replace("%FILE%",file.name));continue;}if(isFileAlreadyUploaded(file)){alert(resources.errorHasAlreadyBeenUploaded.replace("%FILE%",file.name));continue;}names[i]=file.name;if(imageType.test(file.type)){processImageUpload(file);}else{processFileUpload(file);}}if(fileList.length>20){names.push("...");}waMetrics("Upload",names);}function processImageUpload(file){var reader=new FileReader(),elementId=WA.getRandomId(),img=document.createElement("img"),photosContainerUl=document.querySelector(".photosContainerUl"),photosContainerLi=document.createElement("li"),photosContainerLiHTML='<div class="photoContainer"><div class="photoInnerContainer"><a href="#" class="photoLink" data-lightbox="attachments"></a><div class="deleteButton"></div></div></div><div class="throbberContainer"></div>';waMetrics("ImageUpload",file.name);photosContainerLi.className="photosContainerLi uploading";photosContainerLi.id=elementId;photosContainerLi.innerHTML=photosContainerLiHTML;photosContainerLi.querySelector(".photoInnerContainer a").appendChild(img);photosContainerUl.appendChild(photosContainerLi);reader.onload=(function(aImg){return function(e){aImg.src=e.target.result;};})(img);reader.readAsDataURL(file);service.uploadFile({"file":file,"domElementId":elementId,"isImage":true});}function processFileUpload(file){var elementId=WA.getRandomId(),linksContainerUl=document.querySelector(".linksContainerUl"),linksContainerLi=document.createElement("li"),linksContainerLiHTML='<span class="fileName"></span><span class="fileSize"></span><span class="fileUploadProgressBar"><span class="fileUploadProgressBarFill"></span></span><span class="deleteButton"></span>';waMetrics("FileUpload",file.name);linksContainerLi.className="linksContainerLi uploading";linksContainerLi.id=elementId;file.sizeReadable="("+file.size+" B)";for(var aMultiples=["KB","MB","GB"],nMultiple=0,nApprox=file.size/1024;nApprox>1;nApprox/=1024,nMultiple++){file.sizeReadable="("+nApprox.toFixed(2)+" "+aMultiples[nMultiple]+")";}linksContainerLi.innerHTML=linksContainerLiHTML;linksContainerLi.querySelector(".fileName").innerHTML=file.name;linksContainerLi.querySelector(".fileSize").innerHTML=file.sizeReadable;linksContainerUl.appendChild(linksContainerLi);service.uploadFile({"file":file,"domElementId":elementId,"isImage":false});}function isLargeFile(file){return file.size>maxFileSize;}function isFilesCountExceeded(){var imagesCount=document.querySelectorAll(".photosContainerUl .photosContainerLi").length,filesCount=document.querySelectorAll(".linksContainerUl .linksContainerLi").length;return(imagesCount+filesCount>=maxFilesCount);}function isFileAlreadyUploaded(file){var id,uploadedFile;for(id in uploadedFiles){uploadedFile=uploadedFiles[id];if(uploadedFile.name===file.name&&uploadedFile.lastModified===file.lastModified&&uploadedFile.size===file.size){return true;}}return false;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaAttachmentsUploadService){window.WaAttachmentsUploadService=AttachmentsUploadService;}function AttachmentsUploadService(){var pThis=this;pThis.deleteFile=deleteFile;pThis.uploadFile=uploadFile;pThis.fileUploaded=WA.Tools.EventHandlers.createHandlers(pThis,{id:"ufisogaFileUploaded"});pThis.fileUploadFailed=WA.Tools.EventHandlers.createHandlers(pThis,{id:"ufisogaFileUploadFailed"});pThis.fileUploadProgressUpdated=WA.Tools.EventHandlers.createHandlers(pThis,{id:"ufisogaFileUploadProgressUpdated"});pThis.fileDeleted=WA.Tools.EventHandlers.createHandlers(pThis,{id:"ufisogaFileDeleted"});pThis.fileDeleteFailed=WA.Tools.EventHandlers.createHandlers(pThis,{id:"ufisogaFileDeleteFailed"});function deleteFile(model){var domElementId=model.domElementId,name=model.name,id=model.id;jq$.ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify({resourceId:id}),dataType:"json",processData:false,type:"POST",url:"/Sys/FileSystem/Delete",success:function(response){pThis.fileDeleted.fireHandlers({domElementId:domElementId,id:id,name:name});},error:function(request){pThis.fileDeleteFailed.fireHandlers({domElementId:domElementId,id:id,message:request.responseText||request.statusText,name:name});}});}function uploadFile(model){var file=model.file,domElementId=model.domElementId,isImage=model.isImage;if(window.FormData!==undefined){var data=new FormData();data.append("file",file);jq$.ajax({contentType:false,data:data,processData:false,type:"POST",url:"/Sys/FileSystem/Upload",xhr:function(){var xhr=jq$.ajaxSettings.xhr();if(xhr.upload){xhr.upload.addEventListener("progress",function(event){var percent=0,position=event.loaded||event.position,total=event.total;if(event.lengthComputable){percent=Math.ceil(position/total*100);pThis.fileUploadProgressUpdated.fireHandlers({domElementId:domElementId,isImage:isImage,fileName:file.name,percent:percent});}},false);}return xhr;},success:function(response){var args={domElementId:domElementId,id:response.id,isImage:isImage,lastModified:file.lastModified,name:file.name,size:file.size,thumbnailUrl:response.thumbnailUrl,url:response.url};pThis.fileUploaded.fireHandlers(args);},error:function(request){pThis.fileUploadFailed.fireHandlers({domElementId:domElementId,isImage:isImage,name:file.name,message:request.responseText||request.statusText});}});}else{pThis.fileUploadFailed.fireHandlers({"domElementId":domElementId,"isImage":isImage,"fileName":file.name,"message":"This browser doesn't support HTML5 file uploads!"});}}}})(window,window.WA);(function(window,document,undefined){var defaults={messages:{required:"The %s field is required.",matches:"The %s field does not match the %s field.","default":"The %s field is still set to default, please change.",valid_email:"The %s field must contain a valid email address.",valid_emails:"The %s field must contain all valid email addresses.",min_length:"The %s field must be at least %s characters in length.",max_length:"The %s field must not exceed %s characters in length.",exact_length:"The %s field must be exactly %s characters in length.",greater_than:"The %s field must contain a number greater than %s.",less_than:"The %s field must contain a number less than %s.",alpha:"The %s field must only contain alphabetical characters.",alpha_numeric:"The %s field must only contain alpha-numeric characters.",alpha_dash:"The %s field must only contain alpha-numeric characters, underscores, and dashes.",numeric:"The %s field must contain only numbers.",integer:"The %s field must contain an integer.",decimal:"The %s field must contain a decimal number.",is_natural:"The %s field must contain only positive numbers.",is_natural_no_zero:"The %s field must contain a number greater than zero.",valid_ip:"The %s field must contain a valid IP.",valid_base64:"The %s field must contain a base64 string.",valid_credit_card:"The %s field must contain a valid credit card number.",is_file_type:"The %s field must contain only %s files.",valid_url:"The %s field must contain a valid URL.",greater_than_date:"The %s field must contain a more recent date than %s.",less_than_date:"The %s field must contain an older date than %s.",greater_than_or_equal_date:"The %s field must contain a date that's at least as recent as %s.",less_than_or_equal_date:"The %s field must contain a date that's %s or older."},onSubmit:function(errors){},onBlurField:function(errors){}};var ruleRegex=/^(.+?)\[(.+)\]$/,numericRegex=/^[0-9]+$/,integerRegex=/^\-?[0-9]+$/,decimalRegex=/^\-?[0-9]*\.?[0-9]+$/,emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,alphaRegex=/^[a-z]+$/i,alphaNumericRegex=/^[a-z0-9]+$/i,alphaDashRegex=/^[a-z0-9_\-]+$/i,naturalRegex=/^[0-9]+$/i,naturalNoZeroRegex=/^[1-9][0-9]*$/i,ipRegex=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,base64Regex=/[^a-zA-Z0-9\/\+=]/i,numericDashRegex=/^[\d\-\s]+$/,urlRegex=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,dateRegex=/\d{4}-\d{1,2}-\d{1,2}/;var self;var FormValidator=function(options){var formNameOrNode=options.form,autoConfig=!!options.autoConfig||true,fields=options.fields,validateOnBlur=!!options.validateOnBlur||false,onSubmit=options.onSubmit,onBlurField=options.onBlurField;self=this;this.onSubmit=onSubmit||defaults.onSubmit;this.onBlurField=onBlurField||defaults.onBlurField;this.errors=[];this.fields={};this.form=this._formByNameOrNode(formNameOrNode)||{};this.messages={};this.handlers={};this.conditionals={};this.validateOnBlur=validateOnBlur;if(autoConfig){fields=this._generateFieldParams();}this._buildMasterFieldsArray(fields);var _onsubmit=this.form.onsubmit;this.form.onsubmit=(function(evt){try{return self._validateForm(evt)&&(_onsubmit===undefined||_onsubmit());}catch(e){}});};attributeValue=function(element,attributeName){var i;if((element.length>0)&&(element[0].type==="radio"||element[0].type==="checkbox")){for(i=0,elementLength=element.length;i<elementLength;i++){if(element[i].checked){return element[i][attributeName];}}return;}return element[attributeName];};FormValidator.prototype.setMessage=function(rule,message){this.messages[rule]=message;return this;};FormValidator.prototype.registerCallback=function(name,handler){if(name&&typeof name==="string"&&handler&&typeof handler==="function"){this.handlers[name]=handler;}return this;};FormValidator.prototype.registerConditional=function(name,conditional){if(name&&typeof name==="string"&&conditional&&typeof conditional==="function"){this.conditionals[name]=conditional;}return this;};FormValidator.prototype.validateForm=function(){return this._validateForm();};FormValidator.prototype._formByNameOrNode=function(formNameOrNode){return(typeof formNameOrNode==="object")?formNameOrNode:document.forms[formNameOrNode];};FormValidator.prototype._generateFieldParams=function(){return jq$("input[data-validate]").map(function(i,el){return{name:jq$(el).attr("name"),display:jq$('[for="'+jq$(el).attr("id")+'"]').text(),rules:jq$(el).data("validate")};}).get();};FormValidator.prototype._buildMasterFieldsArray=function(fields){for(var i=0,fieldLength=fields.length;i<fieldLength;i++){var field=fields[i];if((!field.name&&!field.names)||!field.rules){console.warn("basic validate: The following field is being skipped due to a misconfiguration: "+field);continue;}if(field.names){for(var j=0,fieldNamesLength=field.names.length;j<fieldNamesLength;j++){this._addField(field,field.names[j]);}}else{this._addField(field,field.name);}if(this.validateOnBlur){var fieldElement=this.form.querySelector("[name="+field.name+"]");if(fieldElement!==null){fieldElement.addEventListener("blur",this._onFieldBlur);}}}};FormValidator.prototype._onFieldBlur=function(evt){self.errors=[];var key=evt.target.getAttribute("name");self._preValidateField(key);if(typeof self.onBlurField==="function"){self.onBlurField(self.errors,evt);}};FormValidator.prototype._addField=function(field,nameValue){this.fields[nameValue]={name:nameValue,display:field.display||nameValue,rules:field.rules,depends:field.depends,id:null,element:null,type:null,value:null,checked:null};};FormValidator.prototype._validateForm=function(evt){this.errors=[];for(var key in this.fields){this._preValidateField(key);}if(typeof this.onSubmit==="function"){this.onSubmit(this.errors,evt);}if(this.errors.length>0){WA.stopEventDefault(evt);return false;}return true;};FormValidator.prototype._preValidateField=function(key){if(this.fields.hasOwnProperty(key)){var field=this.fields[key]||{},element=this.form[field.name];if(element&&element!==undefined){field.id=attributeValue(element,"id");field.element=element;field.type=(element.length>0)?element[0].type:element.type;field.value=attributeValue(element,"value");field.checked=attributeValue(element,"checked");if(field.depends&&typeof field.depends==="function"){if(field.depends.call(this,field)){this._validateField(field);}}else{if(field.depends&&typeof field.depends==="string"&&this.conditionals[field.depends]){if(this.conditionals[field.depends].call(this,field)){this._validateField(field);}}else{this._validateField(field);}}}}};FormValidator.prototype._validateField=function(field){var i,j,rules=field.rules.split("|"),indexOfRequired=field.rules.indexOf("required"),isEmpty=(!field.value||field.value===""||field.value===undefined);for(i=0,ruleLength=rules.length;i<ruleLength;i++){var method=rules[i],param=null,failed=false,parts=ruleRegex.exec(method);if(indexOfRequired===-1&&method.indexOf("!callback_")===-1&&isEmpty){continue;}if(parts){method=parts[1];param=parts[2];}if(method.charAt(0)==="!"){method=method.substring(1,method.length);}if(typeof this._hooks[method]==="function"){if(!this._hooks[method].apply(this,[field,param])){failed=true;}}else{if(method.substring(0,9)==="callback_"){method=method.substring(9,method.length);if(typeof this.handlers[method]==="function"){if(this.handlers[method].apply(this,[field.value,param,field])===false){failed=true;}}}}if(failed){var source=this.messages[field.name+"."+method]||this.messages[method]||defaults.messages[method],message="An error has occurred with the "+field.display+" field.";if(source){message=source.replace("%s",field.display);if(param){message=message.replace("%s",(this.fields[param])?this.fields[param].display:param);}}var existingError;for(j=0;j<this.errors.length;j+=1){if(field.id===this.errors[j].id){existingError=this.errors[j];}}var errorObject=existingError||{id:field.id,display:field.display,element:field.element,name:field.name,message:message,messages:[],rule:method};errorObject.messages.push(message);if(!existingError){this.errors.push(errorObject);}}}};FormValidator.prototype._getValidDate=function(date){if(!date.match("today")&&!date.match(dateRegex)){return false;}var validDate=new Date(),validDateArray;if(!date.match("today")){validDateArray=date.split("-");validDate.setFullYear(validDateArray[0]);validDate.setMonth(validDateArray[1]-1);validDate.setDate(validDateArray[2]);}return validDate;};FormValidator.prototype._hooks={required:function(field){var value=field.value;if((field.type==="checkbox")||(field.type==="radio")){return(field.checked===true);}return(value!==null&&value!=="");},"default":function(field,defaultName){return field.value!==defaultName;},matches:function(field,matchName){var el=this.form[matchName];if(el){return field.value===el.value;}return false;},valid_email:function(field){return emailRegex.test(field.value);},valid_emails:function(field){var result=field.value.split(/\s*,\s*/g);for(var i=0,resultLength=result.length;i<resultLength;i++){if(!emailRegex.test(result[i])){return false;}}return true;},min_length:function(field,length){if(!numericRegex.test(length)){return false;}return(field.value.length>=parseInt(length,10));},max_length:function(field,length){if(!numericRegex.test(length)){return false;}return(field.value.length<=parseInt(length,10));},exact_length:function(field,length){if(!numericRegex.test(length)){return false;}return(field.value.length===parseInt(length,10));},greater_than:function(field,param){if(!decimalRegex.test(field.value)){return false;}return(parseFloat(field.value)>parseFloat(param));},less_than:function(field,param){if(!decimalRegex.test(field.value)){return false;}return(parseFloat(field.value)<parseFloat(param));},alpha:function(field){return(alphaRegex.test(field.value));},alpha_numeric:function(field){return(alphaNumericRegex.test(field.value));},alpha_dash:function(field){return(alphaDashRegex.test(field.value));},numeric:function(field){return(numericRegex.test(field.value));},integer:function(field){return(integerRegex.test(field.value));},decimal:function(field){return(decimalRegex.test(field.value));},is_natural:function(field){return(naturalRegex.test(field.value));},is_natural_no_zero:function(field){return(naturalNoZeroRegex.test(field.value));},valid_ip:function(field){return(ipRegex.test(field.value));},valid_base64:function(field){return(base64Regex.test(field.value));},valid_url:function(field){return(urlRegex.test(field.value));},valid_credit_card:function(field){if(!numericDashRegex.test(field.value)){return false;}var nCheck=0,nDigit=0,bEven=false;var strippedField=field.value.replace(/\D/g,"");for(var n=strippedField.length-1;n>=0;n--){var cDigit=strippedField.charAt(n);nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9){nDigit-=9;}}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)===0;},is_file_type:function(field,type){if(field.type!=="file"){return true;}var ext=field.value.substr((field.value.lastIndexOf(".")+1)),typeArray=type.split(","),inArray=false,i=0,len=typeArray.length;for(i;i<len;i++){if(ext.toUpperCase()==typeArray[i].toUpperCase()){inArray=true;}}return inArray;},greater_than_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate>validDate;},less_than_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate<validDate;},greater_than_or_equal_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate>=validDate;},less_than_or_equal_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate<=validDate;}};window.FormValidator=FormValidator;})(window,document);(function(window,WA,undefined){if(!window.WaBasicWizard){window.WaBasicWizard=BasicWizard;}function BasicWizard(userOptions){if(!userOptions||!userOptions.element){return;}var defaults={selected:0,stepsBarContainer:"ul",stepsElements:"> * > .step",pagesContainer:".pagesContainer",pagesElements:"*",backButtonSupport:true,useURLhash:true,showStepURLhash:true,anchorSettings:{anchorClickable:true,enableAllAnchors:false,markDoneStep:true,markAllPreviousStepsAsDone:true,removeDoneStepOnNavigateBack:false,enableAnchorOnDoneStep:true},disabledSteps:[]};var self=this,options=$.extend(true,{},defaults,userOptions),main=jq$(options.element),nav=main.children(options.stepsBarContainer),steps=jq$(options.stepsElements,nav),container=main.find(options.pagesContainer),pages=container.children(options.pagesElements),currentIndex=null;init();function init(){setElements();var idx=options.selected;idx=getSelectedStepFromUrl(idx);if(idx>0&&options.anchorSettings.markDoneStep&&options.anchorSettings.markAllPreviousStepsAsDone){steps.eq(idx).parent().prevAll().addClass("done");}showStep(idx);}function getSelectedStepFromUrl(idx){if(!options.useURLhash){return idx;}var hash=window.location.hash;if(!hash||hash.length==0){return idx;}var elm=jq$('.step[href*="'+hash+'"]',nav);if(elm.length){var id=steps.index(elm);idx=id>=0?id:idx;}return idx;}function setElements(){main.addClass("basicWizward_main");nav.addClass("bw_nav bw_navTabs bw_stepAnchor");if(options.anchorSettings.enableAllAnchors!==false&&options.anchorSettings.anchorClickable!==false){steps.parent().addClass("clickable");}container.addClass("bw_container bw_tabContent");pages.addClass("bw_stepContent");if(options.disabledSteps&&options.disabledSteps.length>0){jq$.each(options.disabledSteps,function(i,n){steps.eq(n).parent().addClass("disabled");});}return true;}function setEvents(){jq$(steps).on("click",function(e){e.preventDefault();if(options.anchorSettings.anchorClickable===false){return true;}var idx=steps.index(this);if(options.anchorSettings.enableAnchorOnDoneStep===false&&steps.eq(idx).parent().hasClass("done")){return true;}if(idx!==currentIndex){if(options.anchorSettings.enableAllAnchors!==false&&options.anchorSettings.anchorClickable!==false){showStep(idx);}else{if(steps.eq(idx).parent().hasClass("done")){showStep(idx);}}}});if(options.backButtonSupport){jq$(window).on("hashchange",function(e){if(!options.useURLhash){return true;}if(window.location.hash){var elm=jq$('.step[href*="'+window.location.hash+'"]',nav);if(elm&&elm.length>0){e.preventDefault();showStep(steps.index(elm));}}});}return true;}function showNext(){var si=currentIndex+1;for(var i=si;i<steps.length;i++){if(!steps.eq(i).parent().hasClass("disabled")){si=i;break;}}if(steps.length<=si){return false;}showStep(si);return true;}function showPrevious(){var si=currentIndex-1;for(var i=si;i>=0;i--){if(!steps.eq(i).parent().hasClass("disabled")){si=i;break;}}if(0>si){return false;}showStep(si);return true;}function showStep(idx){if(!steps.eq(idx)){return false;}if(idx==currentIndex){return false;}loadStepContent(idx);return true;}function loadStepContent(idx){var curTab=steps.eq(currentIndex);var stepDirection="";var elm=steps.eq(idx);if(currentIndex!==null&&currentIndex!==idx){stepDirection=currentIndex<idx?"forward":"backward";}if(currentIndex!==null&&triggerEvent("leaveStep",[curTab,currentIndex,stepDirection])===false){return false;}transitPage(idx);return true;}function transitPage(idx){var curTab=steps.eq(currentIndex);var curPage=curTab.length>0?jq$(curTab.attr("href"),main):null;var selTab=steps.eq(idx);var selPage=selTab.length>0?jq$(selTab.attr("href"),main):null;var stepDirection="";if(currentIndex!==null&&currentIndex!==idx){stepDirection=currentIndex<idx?"forward":"backward";}var stepPosition="middle";if(idx===0){stepPosition="first";}else{if(idx===steps.length-1){stepPosition="final";}}if(curPage&&curPage.length>0){curPage.hide();}selPage.show();setURLHash(selTab.attr("href"));setAnchor(idx);currentIndex=idx;triggerEvent("showStep",[selTab,currentIndex,stepDirection,stepPosition]);return true;}function setAnchor(idx){steps.eq(currentIndex).parent().removeClass("active loading");if(options.anchorSettings.markDoneStep!==false&&currentIndex!==null){steps.eq(currentIndex).parent().addClass("done");if(options.anchorSettings.removeDoneStepOnNavigateBack!==false){steps.eq(idx).parent().nextAll().removeClass("done");}}steps.eq(idx).parent().removeClass("done loading").addClass("active");return true;}function triggerEvent(name,params){var e=jq$.Event(name);main.trigger(e,params);if(e.isDefaultPrevented()){return false;}return e.result;}function setURLHash(hash){if(options.showStepURLhash&&window.location.hash!==hash){window.location.hash=hash;}}self.next=next;self.prev=prev;self.getStep=getStep;self.reset=reset;self.showModalStep=showModalStep;self.hideModalStep=hideModalStep;function next(){showNext();}function prev(){showPrevious();}function getStep(){return +currentIndex;}function reset(){if(triggerEvent("beginReset")===false){return false;}pages.hide();currentIndex=null;setURLHash(steps.eq(options.selected).attr("href"));steps.removeClass();steps.parents().removeClass();steps.data("has-content",false);init();triggerEvent("endReset");}function showModalStep(name){pages.hide();steps.hide();jq$(name,main).show();}function hideModalStep(name){reset();}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaGoogleMapsGadgetsManager){window.WaGoogleMapsGadgetsManager=new GoogleMapsGadgetsManager();}function GoogleMapsGadgetsManager(){if(!WA){return;}var pThis=this,typeName="WaGoogleMapsGadgetsManager";pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.GoogleMapsApiLoaded=WA.Tools.EventHandlers.createHandlers(pThis,{id:"GoogleMapsApiLoaded",type:WA.Tools.EventHandlers.Type.Long});pThis.createGadget=createGadget;pThis.onGoogleMapsApiLoaded=onGoogleMapsApiLoaded;var gadgets={},isDisposed=false,apiUrlTemplate="https://maps.googleapis.com/maps/api/js?"+"key={key}"+"&libraries={libraries}"+"&callback={callback}",apiLoadOptions={key:"",callback:typeName+".onGoogleMapsApiLoaded",libraries:[]},apiScriptId="id_waGoogleApiScript";function onGadgetDispose(sender,args){delete gadgets[args&&args.id];}function createGadget(gadgetConstructor,model,args){model=model||{};args=args||{};var gadgetId=model.id;if(gadgets.hasOwnProperty(gadgetId)&&gadgets[gadgetId].dispose){gadgets[gadgetId].dispose();}args.parentComponent=pThis;gadgets[gadgetId]=new gadgetConstructor(model,args);gadgets[gadgetId].Dispose.addHandler(onGadgetDispose);if(!(window.google&&window.google.maps)&&!WA.$(apiScriptId,window)){loadGoogleMapsApi(model);}}function loadGoogleMapsApi(model){var apiScript=document.createElement("script");apiLoadOptions.key=model.apiKey||apiLoadOptions.key;apiLoadOptions.libraries=(model.libraries||apiLoadOptions.libraries).join(",");apiScript.id=apiScriptId;apiScript.src=WA.String.formatNamed(apiUrlTemplate,apiLoadOptions);document.getElementsByTagName("head")[0].appendChild(apiScript);}function onGoogleMapsApiLoaded(){pThis.GoogleMapsApiLoaded.fireHandlers();}function init(){if(window.google&&window.google.maps){onGoogleMapsApiLoaded();}}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers();window[typeName]=null;gadgets=null;pThis.Dispose=null;pThis.GoogleMapsApiLoaded=null;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);!function($,window,document){function Linkified(element,options){this._defaults=defaults,this.element=element,this.setOptions(options),this.init();}var defaults={tagName:"a",newLine:"\n",target:"_blank",linkClass:null,linkClasses:[],linkAttributes:null};Linkified.prototype={constructor:Linkified,init:function(){1===this.element.nodeType?Linkified.linkifyNode.call(this,this.element):this.element=Linkified.linkify.call(this,this.element.toString());},setOptions:function(options){this.settings=Linkified.extendSettings(options,this.settings);},toString:function(){return this.element.toString();}},Linkified.extendSettings=function(options,settings){var prop;settings=settings||{};for(prop in defaults){settings[prop]||(settings[prop]=defaults[prop]);}for(prop in options){settings[prop]=options[prop];}return settings;},Linkified.linkMatch=new RegExp(["(",'\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^',")(?:","(","[a-zA-Z0-9\\+_\\-]+","(?:","\\.[a-zA-Z0-9\\+_\\-]+",")*@",")?(","http:\\/\\/|https:\\/\\/|ftp:\\/\\/",")?(","(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)",")(","(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})",")(","(?::\\d{1,5})",")?(","(?:","[\\/|\\?]","(?:","[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*",")*",")","[\\-\\/a-zA-Z0-9_%#*&+=~]","|","\\/?",")?",")(",'[^a-zA-Z0-9\\+_\\/"\\<\\-]|$',")"].join(""),"g"),Linkified.emailLinkMatch=/(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,Linkified.linkify=function(text,options){var attr,settings,linkClasses,linkReplace=[];this.constructor===Linkified&&this.settings?(settings=this.settings,options&&(settings=Linkified.extendSettings(options,settings))):settings=Linkified.extendSettings(options),linkClasses=settings.linkClass?settings.linkClass.split(/\s+/):[],linkClasses.push.apply(linkClasses,settings.linkClasses),text=text.replace(/</g,"&lt;").replace(/(\s)/g,"$1$1"),linkReplace.push("$1<"+settings.tagName,'href="http://$2$4$5$6$7"'),linkReplace.push('class="linkified'+(linkClasses.length>0?" "+linkClasses.join(" "):"")+'"'),settings.target&&linkReplace.push('target="'+settings.target+'"');for(attr in settings.linkAttributes){linkReplace.push([attr,'="',settings.linkAttributes[attr].replace(/\"/g,"&quot;").replace(/\$/g,"&#36;"),'"'].join(""));}return linkReplace.push(">$2$3$4$5$6$7</"+settings.tagName+">$8"),text=text.replace(Linkified.linkMatch,linkReplace.join(" ")),text=text.replace(Linkified.emailLinkMatch,"$1mailto:$3"),text=text.replace(/(\s){2}/g,"$1"),text=text.replace(/\n/g,settings.newLine);},Linkified.linkifyNode=function(node){var children,childNode,childCount,dummyElement,i;if(node&&"object"==typeof node&&1===node.nodeType&&"a"!==node.tagName.toLowerCase()&&!/[^\s]linkified[\s$]/.test(node.className)){for(children=[],dummyElement=Linkified._dummyElement||document.createElement("div"),childNode=node.firstChild,childCount=node.childElementCount;childNode;){if(3===childNode.nodeType){for(;dummyElement.firstChild;){dummyElement.removeChild(dummyElement.firstChild);}for(dummyElement.innerHTML=Linkified.linkify.call(this,childNode.textContent||childNode.innerText||childNode.nodeValue),children.push.apply(children,dummyElement.childNodes);dummyElement.firstChild;){dummyElement.removeChild(dummyElement.firstChild);}}else{1===childNode.nodeType?children.push(Linkified.linkifyNode(childNode)):children.push(childNode);}childNode=childNode.nextSibling;}for(;node.firstChild;){node.removeChild(node.firstChild);}for(i=0;i<children.length;i++){node.appendChild(children[i]);}}return node;},Linkified._dummyElement=document.createElement("div"),$.fn.linkify=function(options){return this.each(function(){var linkified;(linkified=$.data(this,"plugin-linkify"))?(linkified.setOptions(options),linkified.init()):$.data(this,"plugin-linkify",new Linkified(this,options));});},$.fn.linkify.Constructor=Linkified,$(window).on("load",function(){$("[data-linkify]").each(function(){var $target,$this=$(this),target=$this.attr("data-linkify"),options={tagName:$this.attr("data-linkify-tagname"),newLine:$this.attr("data-linkify-newline"),target:$this.attr("data-linkify-target"),linkClass:$this.attr("data-linkify-linkclass")};for(var option in options){"undefined"==typeof options[option]&&delete options[option];}$target="this"===target?$this:$this.find(target),$target.linkify(options);});}),$("body").on("click",".linkified",function(){var $link=$(this),url=$link.attr("href"),isEmail=/^mailto:/i.test(url),target=$link.attr("target");return isEmail?window.location.href=url:window.open(url,target),!1;});}(jQuery,window,document);(function(){function activeStateIeFix(){var authenticateLoginLink=jq$("a.wa-authenticateLoginLink");authenticateLoginLink.mouseup(function(){jq$(this).addClass("activeState");});authenticateLoginLink.mouseout(function(){jq$(this).removeClass("activeState");});}jq$(document).ready(activeStateIeFix);})();jq$.iFormValidate={build:function(user_options){var defaults={showSummary:true,validateOnLoad:false,errorMessageHeader:null};return jq$(this).each(function(){var options=jq$.extend(defaults,user_options);var $validators=jq$(this).find("span").filter(function(){var validator=jq$(this).attr("validatorType");return validator!=null;});var $suppressValidationControls=jq$(this).find("input").filter(function(){var causesValidation=jq$(this).attr("causesValidation");return causesValidation=="false";});jq$(this).submit(function(){var isValid=jq$.iFormValidate.validateForm($validators,options.showSummary,options.errorMessageHeader);return isValid;});jq$.iFormValidate.setValidators($validators);jq$.iFormValidate.createValidatorsCollection($validators,$suppressValidationControls);if(options.validateOnLoad){jq$.iFormValidate.validateForm($validators,false);}else{var $onLoadValidators=$validators.filter(function(){var validator=jq$(this).attr("validateOnLoad");return(validator!=null&&validator=="true");});if($onLoadValidators!=null&&$onLoadValidators.length>0){jq$.iFormValidate.validateForm($onLoadValidators,false);}}});},suppressValidation:false,validatorCollection:{},createValidatorsCollection:function($validators,$suppressValidationControls){$validators.each(putIntoCollection);$suppressValidationControls.each(suppressValidation);function putIntoCollection(){var id=jq$(this).attr("controlToValidate");if(id!=null&&id.length>0){if(jq$.iFormValidate.validatorCollection[id]==null||jq$.iFormValidate.validatorCollection[id]=="undefined"){jq$.iFormValidate.validatorCollection[id]=jq$([]);}jq$.iFormValidate.validatorCollection[id].push($(this));}}function suppressValidation(){jq$(this).click(function(){jq$.iFormValidate.suppressValidation=true;});}},setValidators:function($validators){var alreadySet=[];$validators.each(setDefaultAttributes);$validators.each(setValidator);function setDefaultAttributes(){var type=jq$(this).attr("validatorType");if(type=="required"){if(jq$(this).attr("validateOnType")!="false"){jq$(this).attr("validateOnType","true");}}if(type=="minLength"||type=="email"||type=="passwordCompare"){if(jq$(this).attr("validateOnBlur")!="false"){jq$(this).attr("validateOnBlur","true");}}}function setValidator(){var id=jq$(this).attr("controlToValidate");var testErrorMessage=jq$(this).attr("errorMessage");if(id==null||id=="undefined"||id.length==0){throw ("Undefined controlToValidate attribute. ValidatorType: "+jq$(this).attr("validatorType"));}if(testErrorMessage==null||testErrorMessage=="undefined"||testErrorMessage.length==0){throw ("Undefined errorMessage attribute. ValidatorType: "+jq$(this).attr("validatorType"));}if(alreadySet[id]==null){alreadySet[id]={};var $control=jq$("#"+id);$control.keyup(function(){jq$.iFormValidate.validateControl(this,"validateOnType");});$control.blur(function(){jq$.iFormValidate.validateControl(this,"validateOnBlur");});$control.filter("select").change(function(){jq$.iFormValidate.validateControl(this);});}}},validateControl:function(inputObject,validationEventName){var $validators=jq$.iFormValidate.validatorCollection[inputObject.id];if(validationEventName){$validators=$validators.filter(function(){var attribute=jq$(this).attr(validationEventName);return attribute!=null&&attribute=="true";});}if($validators!=null&&$validators.length>0){jq$.iFormValidate.validateForm($validators,false);}},validateForm:function($validators,showSummaryAlert,errorMessageHeader){if(jq$.iFormValidate.suppressValidation){return true;}var isValid=false;var errorMessage="";$validators.each(jq$.iFormValidate.validate);var $errors=$validators.filter(function(){return $(this).attr("invalid")!=null;});if($errors.length>0){if(showSummaryAlert){if(errorMessageHeader!=null){errorMessage+=errorMessageHeader+"\n\n";}$errors.each(collectErrors);alert(errorMessage);var $errorControl=jq$("#"+$errors.first().attr("controlToValidate"));if($errorControl!=null){$errorControl.trigger("focus");}}isValid=false;}else{isValid=true;}function collectErrors(){var message=jq$(this).attr("errorMessage");if(message!=null&&message.length>0){errorMessage+="- "+message+"\n";}}return isValid;},validate:function(){var $controlToValidate=jq$("#"+$(this).attr("controlToValidate"));var validatorType=jq$(this).attr("validatorType");var error=null;switch(validatorType){case"passwordCompare":error=new jq$.iFormValidate.validator.passwordCompare(jq$(this),$controlToValidate).validate();break;case"email":error=new jq$.iFormValidate.validator.email(jq$(this),$controlToValidate).validate();break;case"minLength":error=new jq$.iFormValidate.validator.minLength(jq$(this),$controlToValidate).validate();break;case"required":error=new jq$.iFormValidate.validator.required(jq$(this),$controlToValidate).validate();break;case"date":error=new jq$.iFormValidate.validator.date(jq$(this),$controlToValidate).validate();break;default:throw ("Validator type not supported: "+validatorType);}if(error!=null&&error.length>0){jq$(this).attr("invalid","true");setErrorStyle(jq$(this));}else{jq$(this).removeAttr("invalid");setNormalStyle(jq$(this));}function setErrorStyle($validator){var displayType=$validator.attr("display");switch(displayType){case"dynamic":$validator.css("display","block");default:$validator.css("visibility","visible");break;}}function setNormalStyle($validator){var displayType=$validator.attr("display");switch(displayType){case"dynamic":$validator.css("display","none");default:$validator.css("visibility","hidden");break;}}},validator:{passwordCompare:function($validator,$controlToValidate){var pThis=this;var val=$controlToValidate.val();var $compareWithControl=jq$("#"+$validator.attr("compareWith"));var compareWithValue=$compareWithControl.val();pThis.validate=validate;function init(){if($compareWithControl==null){throw ("Invalid compareWith attribute");}if(compareWithValue==null||compareWithValue=="undefined"){throw ("Invalid compareWith attribute");}}function validate(){if(val!=null&&compareWithValue!=null&&val!="undefined"&&compareWithValue!="undefined"&&val===compareWithValue){return"";}return $validator.attr("errorMessage");}init();},minLength:function($validator,$controlToValidate){var pThis=this;var val=$controlToValidate.val();var minLengthValue=parseInt($validator.attr("minLengthValue"),10);pThis.validate=validate;function init(){if(isNaN(minLengthValue)||minLengthValue<0){throw ("Invalid minLengthValue");}}function validate(){if(val==null||val.length==0||val.length>=minLengthValue){return"";}return $validator.attr("errorMessage");}init();},email:function($validator,$controlToValidate){var pThis=this;var Regex=/^\s*[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\s*$/;var val=$controlToValidate.val();pThis.validate=validate;function validate(){if(val==null||val.length==0||Regex.test(val)){return"";}return $validator.attr("errorMessage");}},date:function($validator,$controlToValidate){var pThis=this;var Regex=/^([\d]|1[0,1,2]|0[1-9])(\-|\/|\.)([0-9]|[0,1,2][0-9]|3[0,1])(\-|\/|\.)\d{4}$/;var val=$controlToValidate.val();pThis.validate=validate;function validate(){if(Regex.test(val)){return"";}return $validator.attr("errorMessage");}},required:function($validator,$controlToValidate){var pThis=this;var val=$controlToValidate.val();pThis.validate=validate;function validate(){if(val!=null&&val!="undefined"&&val.length>0){return"";}return $validator.attr("errorMessage");}}}};jq$.fn.FormValidate=jq$.iFormValidate.build;/*
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
(function(root,factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{if(typeof exports==="object"){module.exports=factory(require("jquery"));}else{root.lightbox=factory(root.jQuery);}}}(this,function($){function Lightbox(options){this.album=[];this.currentImageIndex=void 0;this.init();this.options=$.extend({},this.constructor.defaults);this.option(options);}Lightbox.defaults={albumLabel:"Image %1 of %2",fadeDuration:600,fitImagesInViewport:true,imageFadeDuration:600,positionFromTop:50,resizeDuration:200,showImageNumberLabel:false,wrapAround:false,disableScrolling:false,showDownloadButton:false,sanitizeTitle:false};Lightbox.prototype.option=function(options){$.extend(this.options,options);};Lightbox.prototype.imageCountLabel=function(currentImageNum,totalImages){return this.options.albumLabel.replace(/%1/g,currentImageNum).replace(/%2/g,totalImages);};Lightbox.prototype.init=function(){var self=this;$(document).ready(function(){self.enable();self.build();});};Lightbox.prototype.enable=function(){var self=this;$("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(event){self.start($(event.currentTarget));return false;});};Lightbox.prototype.build=function(){var self=this;$('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="wa-lb-nav"><a class="wa-lb-prev"></a><a class="wa-lb-next"></a></div><div class="lb-waIconsContainer"><a class="lb-download">&#xf019;</a><a class="lb-close">&#xf00d;</a></div><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div></div></div></div>').appendTo($("body"));this.$lightbox=$("#lightbox");this.$overlay=$("#lightboxOverlay");this.$outerContainer=this.$lightbox.find(".lb-outerContainer");this.$container=this.$lightbox.find(".lb-container");this.$image=this.$lightbox.find(".lb-image");this.$nav=this.$lightbox.find(".lb-nav");this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)};this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)};this.$overlay.hide().on("click",function(){self.end();return false;});this.$lightbox.hide().on("click",function(event){if($(event.target).attr("id")==="lightbox"){self.end();}return false;});this.$outerContainer.on("click",function(event){if($(event.target).attr("id")==="lightbox"){self.end();}return false;});this.$lightbox.find(".lb-prev, .wa-lb-prev").on("click",function(){if(self.currentImageIndex===0){self.changeImage(self.album.length-1);}else{self.changeImage(self.currentImageIndex-1);}return false;});this.$lightbox.find(".lb-next, .wa-lb-next").on("click",function(){if(self.currentImageIndex===self.album.length-1){self.changeImage(0);}else{self.changeImage(self.currentImageIndex+1);}return false;});this.$nav.on("mousedown",function(event){if(event.which===3){self.$nav.css("pointer-events","none");self.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto");}.bind(self),0);});}});this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){self.end();return false;});};Lightbox.prototype.start=function($link){var self=this;var $window=$(window);$window.on("resize",$.proxy(this.sizeOverlay,this));$("select, object, embed").css({visibility:"hidden"});this.sizeOverlay();this.album=[];var imageNumber=0;function addToAlbum($link){self.album.push({link:$link.attr("href"),title:$link.attr("data-title")||$link.attr("title")});}var dataLightboxValue=$link.attr("data-lightbox");var $links;if(dataLightboxValue){$links=$($link.prop("tagName")+'[data-lightbox="'+dataLightboxValue+'"]');for(var i=0;i<$links.length;i=++i){addToAlbum($($links[i]));if($links[i]===$link[0]){imageNumber=i;}}}else{if($link.attr("rel")==="lightbox"){addToAlbum($link);}else{$links=$($link.prop("tagName")+'[rel="'+$link.attr("rel")+'"]');for(var j=0;j<$links.length;j=++j){addToAlbum($($links[j]));if($links[j]===$link[0]){imageNumber=j;}}}}if(this.options.disableScrolling){$("body").addClass("lb-disable-scrolling");}this.changeImage(imageNumber);};Lightbox.prototype.changeImage=function(imageNumber){var self=this;this.disableKeyboardNav();var $image=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration);$(".lb-loader").fadeIn("slow");this.$lightbox.find(".lb-image, .lb-nav, .wa-lb-nav, .lb-prev, .lb-next, .wa-lb-prev, .wa-lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide();this.$outerContainer.addClass("animating");var preloader=new Image();preloader.onload=function(){var $preloader;var imageHeight;var imageWidth;var maxImageHeight;var maxImageWidth;var windowHeight;var windowWidth;var $window=$(window);$image.attr("src",self.album[imageNumber].link);$preloader=$(preloader);$image.width(preloader.width);$image.height(preloader.height);if(self.options.fitImagesInViewport){windowWidth=$(window).width();windowHeight=$(window).height();maxImageWidth=windowWidth-self.containerPadding.left-self.containerPadding.right-self.imageBorderWidth.left-self.imageBorderWidth.right-20;maxImageHeight=windowHeight-self.containerPadding.top-self.containerPadding.bottom-self.imageBorderWidth.top-self.imageBorderWidth.bottom-120;if(self.options.maxWidth&&self.options.maxWidth<maxImageWidth){maxImageWidth=self.options.maxWidth;}if(self.options.maxHeight&&self.options.maxHeight<maxImageWidth){maxImageHeight=self.options.maxHeight;}if((preloader.width>maxImageWidth)||(preloader.height>maxImageHeight)){if((preloader.width/maxImageWidth)>(preloader.height/maxImageHeight)){imageWidth=maxImageWidth;imageHeight=parseInt(preloader.height/(preloader.width/imageWidth),10);$image.width(imageWidth);$image.height(imageHeight);}else{imageHeight=maxImageHeight;imageWidth=parseInt(preloader.width/(preloader.height/imageHeight),10);$image.width(imageWidth);$image.height(imageHeight);}}}var top=$window.scrollTop()+parseInt((windowHeight-$image.height())/2);var left=$window.scrollLeft();self.$lightbox.css({top:top+"px",left:left+"px"}).fadeIn(self.options.fadeDuration);self.sizeContainer($image.width(),$image.height());};preloader.src=this.album[imageNumber].link;this.currentImageIndex=imageNumber;};Lightbox.prototype.sizeOverlay=function(){this.$overlay.width($(document).width()).height($(document).height());};Lightbox.prototype.sizeContainer=function(imageWidth,imageHeight){var self=this;var oldWidth=this.$outerContainer.outerWidth();var oldHeight=this.$outerContainer.outerHeight();var newWidth=imageWidth+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right;var newHeight=imageHeight+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;function postResize(){self.$lightbox.find(".lb-dataContainer").width(newWidth);self.$lightbox.find(".lb-prevLink").height(newHeight);self.$lightbox.find(".lb-nextLink").height(newHeight);self.showImage();}if(oldWidth!==newWidth||oldHeight!==newHeight){this.$outerContainer.animate({width:newWidth,height:newHeight},this.options.resizeDuration,"swing",function(){postResize();});}else{postResize();}};Lightbox.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(true).hide();this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration);this.updateNav();this.updateDetails();this.updateDownloadButton();this.preloadNeighboringImages();this.enableKeyboardNav();};Lightbox.prototype.updateDownloadButton=function(){var showDownloadButton=this.options.showDownloadButton;if(showDownloadButton){var imgSrc=this.$image.attr("src"),downloadButton=this.$lightbox.find(".lb-download");if(downloadButton.length){downloadButton.attr("href","/download?url="+imgSrc);downloadButton.show();}}};Lightbox.prototype.updateNav=function(){var isTouchDevice=false;try{document.createEvent("TouchEvent");isTouchDevice=true;}catch(e){}this.$lightbox.find(".lb-nav").show();this.$lightbox.find(".wa-lb-nav").show();if(this.album.length>1){if(this.options.wrapAround){if(isTouchDevice){this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1");}else{this.$lightbox.find(".wa-lb-prev, .wa-lb-next").show().css("opacity","1");}this.$lightbox.find(".lb-prev, .lb-next").show();}else{if(this.currentImageIndex>0){this.$lightbox.find(".lb-prev").show();if(isTouchDevice){this.$lightbox.find(".lb-prev").css("opacity","1");}else{this.$lightbox.find(".wa-lb-prev").show().css("opacity","1");}}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find(".lb-next").show();if(isTouchDevice){this.$lightbox.find(".lb-next").css("opacity","1");}else{this.$lightbox.find(".wa-lb-next").show().css("opacity","1");}}}}};Lightbox.prototype.updateDetails=function(){var self=this;if(typeof this.album[this.currentImageIndex].title!=="undefined"&&this.album[this.currentImageIndex].title!==""){var $caption=this.$lightbox.find(".lb-caption");if(this.options.sanitizeTitle){$caption.text(this.album[this.currentImageIndex].title);}else{$caption.html(this.album[this.currentImageIndex].title);}$caption.fadeIn("fast").find("a").on("click",function(event){if($(this).attr("target")!==undefined){window.open($(this).attr("href"),$(this).attr("target"));}else{location.href=$(this).attr("href");}});}if(this.album.length>1&&this.options.showImageNumberLabel){var labelText=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(labelText).fadeIn("fast");}else{this.$lightbox.find(".lb-number").hide();}this.$outerContainer.removeClass("animating");this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return self.sizeOverlay();});};Lightbox.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var preloadNext=new Image();preloadNext.src=this.album[this.currentImageIndex+1].link;}if(this.currentImageIndex>0){var preloadPrev=new Image();preloadPrev.src=this.album[this.currentImageIndex-1].link;}};Lightbox.prototype.enableKeyboardNav=function(){$(document).on("keyup.keyboard",$.proxy(this.keyboardAction,this));};Lightbox.prototype.disableKeyboardNav=function(){$(document).off(".keyboard");};Lightbox.prototype.keyboardAction=function(event){var KEYCODE_ESC=27;var KEYCODE_LEFTARROW=37;var KEYCODE_RIGHTARROW=39;var keycode=event.keyCode;var key=String.fromCharCode(keycode).toLowerCase();if(keycode===KEYCODE_ESC||key.match(/x|o|c/)){this.end();}else{if(key==="p"||keycode===KEYCODE_LEFTARROW){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1);}else{if(this.options.wrapAround&&this.album.length>1){this.changeImage(this.album.length-1);}}}else{if(key==="n"||keycode===KEYCODE_RIGHTARROW){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1);}else{if(this.options.wrapAround&&this.album.length>1){this.changeImage(0);}}}}}};Lightbox.prototype.end=function(){this.disableKeyboardNav();$(window).off("resize",this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);$("select, object, embed").css({visibility:"visible"});if(this.options.disableScrolling){$("body").removeClass("lb-disable-scrolling");}};return new Lightbox();}));(function(window,jQuery,BonaPage){jQuery(document).ready(init);function init(){var spins=new Object();var CONST_maxSpins=1000;if(BonaPage&&BonaPage.isWidgetMode){setTimeout(hideElementsForWidget,100);setTimeout(resizeScreen,100);}function resizeScreen(){var primaryContentContainer=document.getElementById("idPrimaryContentContainer");var contentContainer=document.getElementById("idContentContainer");var mainContainer=document.getElementById("idMainContainer");var clipMainContainer=document.getElementById("idClipMainContainer");var primaryContentBlock1=document.getElementById("idPrimaryContentBlock1");if(!mainContainer||!contentContainer||!primaryContentContainer||!clipMainContainer||!primaryContentBlock1){setTimeout(resizeScreen,100);return;}document.body.style.width=clipMainContainer.style.width=contentContainer.style.width=mainContainer.style.width=primaryContentContainer.clientWidth+"px";document.body.style.margin=clipMainContainer.style.margin=contentContainer.style.margin=mainContainer.style.margin="0";document.body.style.padding=clipMainContainer.style.padding=contentContainer.style.padding=mainContainer.style.padding="0";if(window.idGoogleAdSenseDiv){var googleAdSenseDiv=document.getElementById(window.idGoogleAdSenseDiv);if(!googleAdSenseDiv){return;}googleAdSenseDiv.style.width=primaryContentContainer.clientWidth+"px";googleAdSenseDiv.style.height="auto";googleAdSenseDiv.style.overflow="hidden";}}function hideElementsForWidget(){hideElementForWidget("idHeaderContainer");hideElementForWidget("idFooterContainer");hideElementForWidget("idHeaderSeparator");hideElementForWidget("idFooterSeparator");hideElementForWidget("idFooterPoweredByContainer");hideElementForWidget("idLoginContainer");hideElementForWidget("idMainMenuContainer");hideElementForWidget("idNavigationContainer");}function hideElementForWidget(elementId){var element=document.getElementById(elementId);if(!element){if(!spins[elementId]){spins[elementId]=1;}else{++spins[elementId];}if(spins[elementId]>CONST_maxSpins){return;}setTimeout(function(){hideElementForWidget(elementId);},100);return;}element.style.display="none";}}})(window,window.jQuery,window.BonaPage);(function(){if(!window.Captcha){window.Captcha=new Object();}Captcha.captchaStart=captchaStart;Captcha.captchaLoadSound=captchaLoadSound;Captcha.captchaReloadImage=captchaReloadImage;Captcha.closeWindowAndShowErrorMessage=closeWindowAndShowErrorMessage;var captchaImg=null;var captchaNewImg=null;var captchaParent=null;var captchaPrompt=null;var captchaReload=null;function captchaStart(imgId,prompt){captchaImg=document.getElementById(imgId);if(!captchaImg){return;}captchaImg.alt=prompt;}function captchaLoadSound(imgId,soundPlaceholderId){captchaImg=document.getElementById(imgId);if(!captchaImg){return;}var src=captchaImg.src;var i=src.indexOf("?get=image");var newSrc=src.substr(0,i)+"?get=sound"+src.substr(i+10);i=newSrc.indexOf("&di=");if(i>0){newSrc=newSrc.substr(0,i);}newSrc+="&d="+captchaGetTimestamp();var placeholder=document.getElementById(soundPlaceholderId);var a=new Array();a.push("<object id='captchaSound' classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95' height='0' width='0' style='width:0; height:0;'><param name='AutoStart' value='1' /><param name='Volume' value='0' /><param name='PlayCount' value='1' /><param name='FileName' value='");a.push(newSrc);a.push("' /><embed id='captchaSoundEmbed' src='");a.push(newSrc);a.push("' autoplay='true' hidden='true' volume='100' type='");a.push(captchaGetMimeType());a.push("' style='display:inline;' /></object>");var objectSrc=a.join("");placeholder.innerHTML="";placeholder.innerHTML=objectSrc;}function captchaGetTimestamp(){var d=new Date();return(d.getTime()+(d.getTimezoneOffset()*60000));}function captchaGetMimeType(){return"audio/x-wav";}function captchaReloadImage(anchor,imgId,id,prompt){captchaReload=anchor;if(!captchaReload){return;}captchaReload.disabled=true;captchaImg=document.getElementById(imgId);if(!captchaImg){captchaReload.disabled=false;return;}var src=captchaImg.src;var idvalue=document.getElementById(id).value;var newSrc=src.substr(0,src.indexOf(idvalue))+idvalue+"&clear=1"+"&d"+captchaGetTimestamp();captchaNewImg=document.createElement("img");captchaNewImg.onload=captchaShowImage;captchaNewImg.id=captchaImg.id;captchaNewImg.alt=captchaImg.alt;captchaNewImg.src=newSrc;captchaPrompt=document.createElement("span");captchaPrompt.appendChild(document.createTextNode(prompt));captchaParent=captchaImg.parentNode;captchaParent.removeChild(captchaImg);captchaParent.appendChild(captchaPrompt);}function captchaShowImage(){if(captchaReload&&captchaNewImg&&captchaParent&&captchaPrompt){captchaParent.removeChild(captchaPrompt);captchaParent.appendChild(captchaNewImg);captchaReload.disabled=false;}}function closeWindowAndShowErrorMessage(btnId,txtId,reloadLinkId,errorMessageText){if(window.opener!=null){var btn=window.opener.document.getElementById(btnId);var txt=window.opener.document.getElementById(txtId);if(btn){btn.disabled=false;}if(txt){var errorMessageId="spanErrorMessageId";var newErrorMessageElement=window.opener.document.getElementById(errorMessageId);var spanCssClassName="validationError";var reloadCapthaLink=window.opener.document.getElementById(reloadLinkId);if(reloadCapthaLink){reloadCapthaLink.click();}if(!newErrorMessageElement){if(BonaPage.Browser.isIE){var parent=txt.parentNode;var a=new Array();a.push(parent.innerHTML);a.push('<span id="'+errorMessageId+'" class="'+spanCssClassName+'">');a.push(errorMessageText);a.push("</span>");parent.innerHTML=a.join("");}else{var span=document.createElement("span");span.setAttribute("id",errorMessageId);span.setAttribute("class",spanCssClassName);sometext=document.createTextNode(errorMessageText);span.appendChild(sometext);txt.parentNode.appendChild(span);}}}}var windowObject=window.self;windowObject.opener=window.self;var bodyes=document.getElementsByTagName("body");for(var i=0;i<bodyes.length;i++){bodyes[i].innerHTML="";}windowObject.close();}})();(function(jq$){if(!window.OAuthButtons){window.OAuthButtons=OAuthButtons;}function OAuthButtons(args){if(!args.id){throw new Error("id was not defined!");}var container,form;function onContainerClick(e){var attr=e.target.getAttribute("provider");if(!attr){return;}switch(attr){case"Facebook":case"GooglePlus":submitExternalAuthForm(attr);break;default:throw new Error("unsupported provider: "+attr);}}function submitExternalAuthForm(providerName){var providerField=jq$(form).find(".oAuthProvider");providerField.val(providerName);jq$(form).submit();}function init(){var containerId=args.id+"_container";container=document.getElementById(containerId);form=document.getElementById(args.formId);var browserCapabilitiesField=document.getElementById(args.id+"_browserCapabilities");var browserData=browserInfo.getBrowserCapabilitiesData();browserCapabilitiesField.value=browserData;if(!container){throw new Error("Could not find container by id: "+containerId);}if(!form){throw new Error("Could not find form by id: "+args.formId);}jq$(container).click(onContainerClick);}init();}})(window.jq$);(function(window){if(window.BlogHelper){return;}window.BlogHelper=new Object();var hiddenFormFormCommentExists=null;var commentBottom=null;var formDisabled=false;var commentLengthValidator=null;var oldValidatorMessage;window.BlogHelper.previousReplyLink=null;function setUrlFragment(value,w){var wnd=w||window;if(!wnd.location){return"";}var match=(/#([^#]*)$/gi).exec(wnd.location.toString()),activeUrl=wnd.location.toString(),newUrl=match?activeUrl.replace(/#([^#]+)$/gi,"#"+value):activeUrl+"#"+value;wnd.location.replace(newUrl);}BlogHelper.replyToComment=function(replyLink){var comment=BlogHelper.getCommentContainer(replyLink);if(!comment){return;}var messageId=comment.getAttribute("messageId");if(!messageId){return false;}var addNewCommentFormContainer=WA.$("idAddNewCommentFormContainer",window);var replyToCommentHidden=WA.$(BlogHelper.idReplyToCommentId,window);if(formDisabled){return;}if(DataChangeWatcher){var checkResult=DataChangeWatcher.confirmIfDataChanged();DataChangeWatcher.resumeWatching();if(!checkResult){return;}}if(commentBottom){commentBottom.style.display="";}var commentBottom=BlogHelper.getCommentBottomBlock(comment);var replyFormContainer=comment;do{replyFormContainer=replyFormContainer.nextSibling;}while(replyFormContainer&&replyFormContainer.nodeType!=1);if(commentBottom){commentBottom.style.display="none";}if(window.BlogHelper.previousReplyLink){window.BlogHelper.previousReplyLink.style.display="inline";}window.BlogHelper.previousReplyLink=replyLink;window.BlogHelper.replyingOnCommentId=getReplyId();if(!replyToCommentHidden){replyToCommentHidden=WA.$(BlogHelper.idReplyToCommentId,window);}replyToCommentHidden.value=messageId;commentLengthValidator=window.setTimeout("BlogHelper.validateCommentLength()",300);};BlogHelper.showReplyIfAwailable=function(replyLink){var comment=BlogHelper.getCommentContainer(replyLink);if(!comment){return true;}var messageId=comment.getAttribute("messageId");if(!messageId){return true;}if(window.BlogHelper.replyingOnCommentId!=messageId){return true;}WA.$("idAddNewCommentFormContainer",window).style.display="";return false;};BlogHelper.hideButtonsIfJsEnabled=function(){var commentsContainer=WA.$("idBlogCommentsListContainer",window);var buttons=commentsContainer.getElementsByTagName("INPUT");var links=commentsContainer.getElementsByTagName("A");for(var i=0;i<buttons.length;i++){if(buttons[i].attributes["HideIfJsEnabled"]){buttons[i].style.display="none";}}for(var i=0;i<links.length;i++){if(links[i].attributes["ShowIfJsEnabled"]){links[i].style.display="";}}};BlogHelper.hideCommentForm=function(){var addNewCommentFormContainer=WA.$("idAddNewCommentFormContainer",window);var commentText=WA.$(BlogHelper.idCommentText,window);if(WA.String.gtrim(commentText.value).length>0){DataChangeWatcher.setChanged();}else{DataChangeWatcher.setNotChanged();}if(DataChangeWatcher&&DataChangeWatcher.confirmIfDataChanged()){addNewCommentFormContainer.style.display="none";commentText.value="";if(commentLengthValidator){window.clearTimeout(commentLengthValidator);}if(commentBottom){commentBottom.style.display="";}if(window.BlogHelper.previousReplyLink){window.BlogHelper.previousReplyLink.style.display="";}return true;}return true;};BlogHelper.validateComment=function(){var commentText,commentLength,message,captchaCode;commentText=WA.$(BlogHelper.idCommentText,window);commentLength=BlogHelper.getCommentLength();message="";if(commentText.value.trim().length==0){message=BlogHelper.strCommentIsEmpty;}if(commentLength>BlogHelper.intMaxCommentLength){message=BlogHelper.strCommentLengthExeededAlertMessage;}captchaCode=WA.$(BlogHelper.idCaptchaCodeId,window);if(captchaCode&&captchaCode.value.trim().length==0){if(message!=""){message+="\r\n";}message+=BlogHelper.strCaptchaCodeIsEmpty;}if(message!=""){alert(message);return false;}Page_IsValid=true;Page_BlockSubmit=false;return true;};BlogHelper.validateCommentLength=function(){var commentText,commentLength,errorContainer,errorText,newValidatorMessage;if(!(commentText=WA.$(BlogHelper.idCommentText,window))){return;}commentLength=BlogHelper.getCommentLength();errorText=WA.$("errorMessage",window);errorContainer=WA.$(BlogHelper.idErrorMessageContainer,window);newValidatorMessage=commentLength>BlogHelper.intMaxCommentLength?BlogHelper.strCommentLengthExeededValidatorMessage.toString().replace(/\[0\]/,commentLength):"";if(oldValidatorMessage!=newValidatorMessage){oldValidatorMessage=errorText.innerHTML=newValidatorMessage;}errorContainer.style.display=errorText.innerHTML!=""?"block":"none";commentLengthValidator=window.setTimeout("BlogHelper.validateCommentLength()",300);};BlogHelper.getCommentLength=function(){return WA.$(BlogHelper.idCommentText,window).value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n").length;};BlogHelper.disableCommentForm=function(){if(DataChangeWatcher){DataChangeWatcher.pauseWatching();}window.setTimeout(function(){WA.$(BlogHelper.idPostCommentButton,window).disabled=true;WA.$(BlogHelper.idCommentText,window).disabled=true;var captchaCode=WA.$(BlogHelper.idCaptchaCodeId,window);var captchaReload=WA.$(BlogHelper.idCaptchaReloadId,window);var anonimousAuthorTextBox=WA.$(BlogHelper.idAnonimousAuthorTextBoxId,window);if(captchaCode){captchaCode.disabled=true;}if(captchaReload){captchaReload.style.display="none";}if(anonimousAuthorTextBox){anonimousAuthorTextBox.disabled=true;}formDisabled=true;},10);};BlogHelper.disablePostForm=function(){if(DataChangeWatcher){DataChangeWatcher.pauseWatching();}window.setTimeout(function(){if(Page_IsValid){formDisabled=true;}},100);};BlogHelper.deleteComment=function(){};BlogHelper.stokeComment=function(anyCommentInnerObject,enabled){var comment;if(comment=BlogHelper.getCommentContainer(anyCommentInnerObject)){comment.className=enabled?"commentViewContainer Stoked":"commentViewContainer";}};BlogHelper.getCommentContainer=function(innerObject){var comment=innerObject;if(!comment){return null;}while(!comment.getAttribute("messageId")&&comment.tagName!="BODY"){comment=comment.parentNode;}return(comment.tagName!="BODY")?comment:null;};BlogHelper.getCommentBottomBlock=function(comment){var elements,i;if(comment.className=="commentBottom"||comment.className=="postBottom"){return comment;}elements=comment.getElementsByTagName("DIV");for(i=0;i<elements.length;i++){if(elements[i].className=="commentBottom"||elements[i].className=="postBottom"){return elements[i];}}};BlogHelper.AutoexpandReplyFormIfNeeded=function(){var replyId=getReplyId();var commentOnPost=isAddingCommentToPost();var replyOnMessage;if(replyId){replyOnMessage=findMessageByMessageId(replyId);setUrlFragment(replyId,window);BlogHelper.replyToComment(replyOnMessage);}else{if(commentOnPost){replyOnMessage=WA.$(BlogHelper.postContainerId,window);BlogHelper.replyToComment(replyOnMessage);}}};BlogHelper.AutoScrollToAnchor=function(anchorParamName){var searchPattern=new RegExp(anchorParamName+"=([0-9a-zA-Z]+)");var match=searchPattern.exec(window.location);if(match!=null){setUrlFragment(match[1],window);}};BlogHelper.getTwoDigitsNumber=function(number){return number<10?"0"+number:number;};BlogHelper.ValidateBody=function(sender,args){var box,value;if(WidgetMode==1){if(box=WA.$(BodyTextBoxId,window)){args.IsValid=(box.value.replace(/^\s*|\s*$/g,"")!="");}return;}if(!top||!WA.BonaEditor.EditorsManager){return;}box=WA.BonaEditor.EditorsManager.getEditorById(BlogHelper.idEditor);if(box==null){return;}value=box.getHtmlData().replace(/&nbsp;|\s|<br>|<p>|<\/p>/ig,"");args.IsValid=value.length>0;};BlogHelper.ValidateBodyLength=function(sender,args){var box,value,valueLength;if(WidgetMode==1){if(box=WA.$(BodyTextBoxId,window)){args.IsValid=(box.value.replace(/^\s*|\s*$/g,"").length<=BlogHelper.intMaxPostLength);}return;}if(!top||!WA.BonaEditor.EditorsManager){return;}box=WA.BonaEditor.EditorsManager.getEditorById(BlogHelper.idEditor);if(box==null){return;}valueLength=box.getHtmlDataLength();args.IsValid=(valueLength<=BlogHelper.intMaxPostLength);};BlogHelper.OnLoad=function(){BlogHelper.AutoScrollToAnchor("anchor");BlogHelper.AutoexpandReplyFormIfNeeded();};function getReplyId(){var url=window.location?window.location.toString():"";var searchRegExs=[/replyTo\=(\d+)/i,/#replyTo(\d+)$/i];for(var i=0;i<searchRegExs.length;i++){var match=searchRegExs[i].exec(url);if(match){return match[1];}}return 0;}function isAddingCommentToPost(){var url=window.location?window.location.toString():"";var searchRegEx=/#addComment$/i;var match=searchRegEx.exec(url);return match?true:false;}function findMessageByMessageId(messageId){var elements=document.getElementsByTagName("DIV");for(var i=0;i<elements.length;i++){var element=elements[i];var attribute=element.getAttribute("messageId");if(attribute==messageId){return element;}}return null;}})(window);if(window.BonaPage){BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,BlogHelper.OnLoad);}(function(window,WA,undefined){if(!window.WaContentGadgetResizer){window.WaContentGadgetResizer=WaContentGadgetResizer;}function WaContentGadgetResizer(initModel){var pThis=this,typeName="WaContentGadgetResizer",viewModel=initModel;pThis.toString=function(){return typeName;};var isDisposed=false,container,editableContainer,editableAttribute="data-editableArea",setHeightTimeout=50,editableHeightAttribute="data-areaHeight";function resetEditableContainerHeight(){WA.removeHandler(this,"load",resetEditableContainerHeight);WA.throttle(setEditableContainerHeight,{timeout:setHeightTimeout});}function setEditableContainerHeight(){if(isDisposed){return;}var gadgetHeight=container.offsetHeight-WA.Style.getElementStyleInt(container,"paddingBottom",window),gadgetPosition=container.style.position||"",heightMeter=document.createElement("waContentHeightMeter"),editableContainerHeight,height;heightMeter.style.display="block";heightMeter.style["float"]="none";heightMeter.style["clear"]="both";heightMeter.style.height="0px";heightMeter.style.fontSize="0px";container.style.position="relative";container.appendChild(heightMeter);editableContainerHeight=editableContainer.offsetHeight-WA.Style.getElementStyleInt(editableContainer,"paddingTop",window)-WA.Style.getElementStyleInt(editableContainer,"paddingBottom",window);height=Math.max(editableContainerHeight+gadgetHeight-heightMeter.offsetTop,0);container.removeChild(heightMeter);heightMeter=null;container.style.position=gadgetPosition;editableContainer.style.height=height+"px";editableContainer.setAttribute(editableHeightAttribute,height,0);}function init(){var containerImages,i,len;container=WA.$(viewModel.id,window);if(!container){return;}editableContainer=container.querySelector("["+editableAttribute+"]");if(editableContainer){editableContainer.style.height="";containerImages=container.getElementsByTagName("img");for(i=0,len=containerImages.length;i<len;i++){if(!containerImages[i]["complete"]){WA.addHandler(containerImages[i],"load",resetEditableContainerHeight);}}resetEditableContainerHeight();}}function dispose(){if(isDisposed){return;}WA.clearThrottle(setEditableContainerHeight);viewModel=null;container=null;editableContainer=null;isDisposed=true;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);(function(){if(!window.Bonasource){window.Bonasource=new Object();}if(window.Bonasource.ControlTooltip){return;}window.Bonasource.ControlTooltip=controlTooltip;function controlTooltip(elementId,tooltipCssClass,tooltipHTML){var _tooltipShowDelegate=null;var _tooltipHideDelegate=null;var _tooltipMoveDelegate=null;var _tooltipDiv=null;var _tooltipHTML=tooltipHTML;var _tooltipCssClass=tooltipCssClass;var _element=WA.$(elementId,window);var _pThis=this;addStateHandlers(elementId);function addStateHandlers(elementId){BonaPage.addHandler(_element,"mouseover",element_OnMouseOver);BonaPage.addHandler(_element,"mouseout",element_OnMouseOut);BonaPage.addHandler(_element,"mousemove",element_OnMouseOver);}function getTooltipDiv(){if(!_tooltipDiv){_tooltipDiv=document.createElement("div");_tooltipDiv.className=_tooltipCssClass;_tooltipDiv.innerHTML=_tooltipHTML;_tooltipDiv.style.position="absolute";_tooltipDiv.style.zIndex=1000;_tooltipDiv.style.display="none";document.body.appendChild(_tooltipDiv);BonaPage.addHandler(_tooltipDiv,"mouseover",element_OnMouseOver);BonaPage.addHandler(_tooltipDiv,"mouseout",element_OnMouseOut);}return _tooltipDiv;}var _tooltipX;var _tooltipY;var _mouseOverTimeout;var _mouseOutTimeout;function element_OnMouseOver(evt){if(_mouseOverTimeout){clearTimeout(_mouseOverTimeout);}if(_mouseOutTimeout){clearTimeout(_mouseOutTimeout);}var mouseXY=WA.getEventMouseCoords(evt);_tooltipY=mouseXY.top;_tooltipX=mouseXY.left;_mouseOverTimeout=setTimeout(showDiv,10);}function element_OnMouseOut(evt){if(_mouseOutTimeout){clearTimeout(_mouseOutTimeout);}_mouseOutTimeout=setTimeout(hideDiv,10);}function showDiv(){try{var div=getTooltipDiv();div.style.display="block";div.style.top=_tooltipY+21+"px";div.style.left=_tooltipX+11+"px";}catch(err){}}function hideDiv(){var div=getTooltipDiv();div.style.display="none";}return _pThis;}})();(function(){if(window.ForumHelper){return;}window.ForumHelper=new Object();function $(id){return document.getElementById(id);}ForumHelper.navigateToTopic=function(topicUrl){window.location=topicUrl;};ForumHelper.highlight=function(elem){jq$(elem).removeClass("normal").addClass("highlight");};ForumHelper.normlight=function(elem){jq$(elem).removeClass("highlight").addClass("normal");};ForumHelper.subscribeForum=function(forumId){var subscribeLink=$(ForumHelper.subscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);subscribingLabel.style.display="inline-block";subscribeLink.style.display="none";try{WA.Ajax({url:ForumModel.Urls.SubscribeForum,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({forumId:forumId}),type:"POST",success:ForumHelper.subscribedSuccessfully,error:ForumHelper.subscriptionFailed});}catch(e){return true;}return false;};ForumHelper.unsubscribeForum=function(forumId){var unsubscribeLink=$(ForumHelper.unsubscribeLinkID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);unsubscribingLabel.style.display="inline-block";unsubscribeLink.style.display="none";try{WA.Ajax({url:ForumModel.Urls.UnsubscribeForum,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({forumId:forumId}),type:"POST",success:ForumHelper.unsubscribedSuccessfully,error:ForumHelper.unsubscriptionFailed});}catch(e){return true;}return false;};ForumHelper.subscribedSuccessfully=function(){var unsubscribeLink=$(ForumHelper.unsubscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);unsubscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.subscriptionFailed=function(){var subscribeLink=$(ForumHelper.subscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);subscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.unsubscribedSuccessfully=function(){var subscribeLink=$(ForumHelper.subscribeLinkID);var subscribingLabel=$(ForumHelper.unsubscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);subscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.unsubscriptionFailed=function(){var unsubscribeLink=$(ForumHelper.unsubscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);unsubscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.subscribeTopic=function(topicId){var subscribeTopicLink=$(ForumHelper.subscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);subscribingTopicLabel.style.display="inline-block";subscribeTopicLink.style.display="none";try{WA.Ajax({url:ForumModel.Urls.SubscribeTopic,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({topicId:topicId}),type:"POST",success:ForumHelper.subscribedTopicSuccessfully,error:ForumHelper.subscriptionTopicFailed});}catch(e){return true;}return false;};ForumHelper.unsubscribeTopic=function(topicId){var unsubscribeTopicLink=$(ForumHelper.unsubscribeTopicLinkID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);unsubscribingTopicLabel.style.display="inline-block";unsubscribeTopicLink.style.display="none";WA.Ajax({url:ForumModel.Urls.UnsubscribeTopic,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({topicId:topicId}),type:"POST",success:ForumHelper.unsubscribedTopicSuccessfully,error:ForumHelper.unsubscriptionTopicFailed});return false;};ForumHelper.subscribedTopicSuccessfully=function(){var unsubscribeTopicLink=$(ForumHelper.unsubscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);unsubscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.subscriptionTopicFailed=function(){var subscribeTopicLink=$(ForumHelper.subscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);subscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.unsubscribedTopicSuccessfully=function(){var subscribeTopicLink=$(ForumHelper.subscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);subscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.unsubscriptionTopicFailed=function(){var unsubscribeTopicLink=$(ForumHelper.unsubscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);unsubscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.existedCategorySelected=function(){var existingCategoryDiv=$(ForumHelper.idExistingCategoryDiv);var newCategoryDiv=$(ForumHelper.idNewCategoryDiv);existingCategoryDiv.style.display="";newCategoryDiv.style.display="none";};ForumHelper.newCategorySelected=function(){var existingCategoryDiv=$(ForumHelper.idExistingCategoryDiv);var newCategoryDiv=$(ForumHelper.idNewCategoryDiv);existingCategoryDiv.style.display="none";newCategoryDiv.style.display="";};})();jq$(function(){jq$(".WaGadgetForumStateTopicList .boxBodyOuterContainer .threadImage img[src*=stickies]").each(function(){jq$(this).parent().addClass("stickyForumTopic");});});function redirectToUrl(urlString){window.location.href=urlString;return false;}function changeStateAndSubmit(buttonId,state,hiddehId){var button=document.getElementById(buttonId);var hidden=document.getElementById(hiddehId);if(button!=null&&hidden!=null){hidden.value=state;button.click();}return false;}function submitClick(buttonId){var button=document.getElementById(buttonId);if(button!=null){button.click();}return false;}(function(window,WA,undefined){if(!window.WaFacebookPagePlugin){window.WaFacebookPagePlugin=FacebookPagePlugin;}function FacebookPagePlugin(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaFacebookPagePlugin",viewModel=initModel,parentComponent=initArgs.parentComponent,facebookPagePluginContainerId=initArgs.facebookPagePluginContainerId;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.dispose=dispose;function onFacebookSdkLoaded(sender,args){var sdk=args&&args.sdk,facebookPagePluginContainer=WA.$(facebookPagePluginContainerId,window);sdk.XFBML.parse(facebookPagePluginContainer);}function onGadgetDeleted(sender,args){args=args||{};if(args.componentId==viewModel.id){dispose();}}function init(){parentComponent.Dispose.addHandler(dispose);parentComponent.FacebookSdkLoaded.addHandler(onFacebookSdkLoaded,{period:"once"});WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);}function dispose(){pThis.Dispose.fireHandlers({id:viewModel.id});parentComponent.FacebookSdkLoaded.removeHandler(onFacebookSdkLoaded);WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);parentComponent.Dispose.removeHandler(dispose);viewModel=null;parentComponent=null;pThis.RenderComplete=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaFacebookPagePluginManager){window.WaFacebookPagePluginManager=new FacebookPagePluginManager();}function FacebookPagePluginManager(){if(!WA){return;}var pThis=this,typeName="WaFacebookPagePluginManager";pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.FacebookSdkLoaded=WA.Tools.EventHandlers.createHandlers(pThis,{id:"FacebookSdkLoaded",type:WA.Tools.EventHandlers.Type.Long});pThis.createGadget=createGadget;var gadgets={},sdkScriptSrc="//connect.facebook.net/en_US/all.js#xfbml=1&status=0",sdkScriptId="facebook-jssdk",fbRootId="fb-root";function onFbSdkReady(){FB.Event.subscribe("xfbml.render",onXfbmlRendered);pThis.FacebookSdkLoaded.fireHandlers({sdk:FB});}function onGadgetDispose(sender,args){delete gadgets[args&&args.id];}function createGadget(model,args){model=model||{};args=args||{};var gadgetId=model.id;if(gadgets.hasOwnProperty(gadgetId)&&gadgets[gadgetId].dispose){gadgets[gadgetId].dispose();}args.parentComponent=pThis;gadgets[gadgetId]=new WaFacebookPagePlugin(model,args);gadgets[gadgetId].Dispose.addHandler(onGadgetDispose);createFbRootElement();if(window.FB&&FB.XFBML&&FB.XFBML.parse){onFbSdkReady();return;}if(!WA.$(sdkScriptId,window)){loadFacebookSdk();}}function onXfbmlRendered(){WA.Gadgets.notifyGadgetChanged();}function createFbInitCallback(){var oldFbAsyncInit=window.fbAsyncInit;window.fbAsyncInit=function(){if(typeof oldFbAsyncInit=="function"){oldFbAsyncInit();}onFbSdkReady();};}function loadFacebookSdk(){var sdkScript=document.createElement("script");sdkScript.id=sdkScriptId;sdkScript.async=true;sdkScript.src=sdkScriptSrc;document.getElementsByTagName("head")[0].appendChild(sdkScript);}function createFbRootElement(){var fbRoot=WA.$(fbRootId,window);if(fbRoot){return;}fbRoot=document.createElement("div");fbRoot.id=fbRootId;document.body.appendChild(fbRoot);}function init(){if(window.FB&&FB.XFBML&&FB.XFBML.parse){onFbSdkReady();return;}createFbInitCallback();}function dispose(){if(window.FB&&FB.XFBML&&FB.XFBML.parse){FB.Event.unsubscribe("xfbml.render",onXfbmlRendered);}pThis.Dispose.fireHandlers();window[typeName]=null;gadgets=null;pThis.Dispose=null;pThis.FacebookSdkLoaded=null;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);(function(){if(window.ForumSummaryHelper){return;}window.ForumSummaryHelper=new Object();function $(id){return document.getElementById(id);}ForumSummaryHelper.navigateToTopic=function(topicUrl){window.location=topicUrl;};ForumSummaryHelper.highlight=function(elem){jq$(elem).removeClass("normal").addClass("highlight");};ForumSummaryHelper.normlight=function(elem){jq$(elem).removeClass("highlight").addClass("normal");};ForumSummaryHelper.allForumsRadioSelected=function(){var selectForumsListDiv=$(ForumSummaryHelper.selectForumsListId);selectForumsListDiv.style.display="none";};ForumSummaryHelper.selectedForumsRadioSelected=function(){var selectForumsListDiv=$(ForumSummaryHelper.selectForumsListId);selectForumsListDiv.style.display="";};})();(function(window,WA,undefined){if(!window.WaGoogleMap){window.WaGoogleMap=GoogleMap;}function GoogleMap(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaGoogleMap",viewModel=initModel,parentComponent=initArgs.parentComponent,address=initArgs.address||"",zoom=initArgs.zoom||13,mapWindow=initArgs.mapWindow||window,mapContainerId=initArgs.mapContainerId;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.dispose=dispose;var isDisposed=false,api;function getCoordinates(){if(isDisposed){return;}var geocoder=new api.Geocoder();geocoder.geocode({address:address},function(locResult,status){if(status==api.GeocoderStatus.OK){setGoogleMap(locResult[0].geometry.location.lat(),locResult[0].geometry.location.lng());}else{}});}function setGoogleMap(x,y){if(isDisposed){return;}var mapContainer=mapContainerId&&WA.$(mapContainerId,mapWindow),mapOptions,map,markerOptions,marker;mapOptions={center:new api.LatLng(x,y),zoom:zoom,mapTypeId:api.MapTypeId.ROADMAP};map=new api.Map(mapContainer,mapOptions);markerOptions={map:map,position:new api.LatLng(x,y)};marker=new api.Marker(markerOptions);dispose();}function onGoogleMapsApiLoaded(){api=google.maps;if(address!=""){getCoordinates();}else{setGoogleMap(0,0);}}function onGadgetDeleted(sender,args){args=args||{};if(args.componentId==viewModel.id){dispose();}}function init(){parentComponent.Dispose.addHandler(dispose);parentComponent.GoogleMapsApiLoaded.addHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);}function dispose(){isDisposed=true;pThis.Dispose.fireHandlers({id:viewModel.id});parentComponent.GoogleMapsApiLoaded.removeHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);parentComponent.Dispose.removeHandler(dispose);viewModel=null;parentComponent=null;api=null;pThis.RenderComplete=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaAddressServiceApiClient){window.WaAddressServiceApiClient=WaAddressServiceApiClient;}function WaAddressServiceApiClient(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaAddressServiceApiClient",viewModel=initModel,parentComponent=initArgs.parentComponent,authorizationToken=viewModel.authorizationToken,endpoint=viewModel.endpoint,fastIntegrationEnabled;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});var isDisposed=false,serviceHttpClient;pThis.geocode=geocode;function geocode(addresses){return serviceHttpClient.fetch(endpoint,WA.Ajax.appendRequestHeaders({cache:false,global:false,type:"POST",crossDomain:true,contentType:"application/json",data:JSON.stringify(addresses)},additionalHeaders));}function init(){additionalHeaders=viewModel.fastIntegrationEnabled&&viewModel.environmentId?[{key:"X-Api-EnvironmentId",value:viewModel.environmentId}]:[];parentComponent.Dispose.addHandler(dispose);serviceHttpClient=new WA.ServiceHttpClient({authorizationToken:viewModel.authorizationToken},{parentComponent:pThis});}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers();viewModel=null;parentComponent=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaGoogleMapsMarkerClusterer){window.WaGoogleMapsMarkerClusterer=MarkerClusterer;}function MarkerClusterer(map,opt_markers,opt_options){this.extend(MarkerClusterer,google.maps.OverlayView);this.map_=map;this.markers_=[];this.clusters_=[];this.sizes=[53,56,66,78,90];this.styles_=[];this.ready_=false;var options=opt_options||{};this.gridSize_=options["gridSize"]||60;this.minClusterSize_=options["minimumClusterSize"]||2;this.maxZoom_=options["maxZoom"]||null;this.styles_=options["styles"]||[];this.imagePath_=options["imagePath"]||this.MARKER_CLUSTER_IMAGE_PATH_;this.imageExtension_=options["imageExtension"]||this.MARKER_CLUSTER_IMAGE_EXTENSION_;this.zoomOnClick_=true;if(options["zoomOnClick"]!=undefined){this.zoomOnClick_=options["zoomOnClick"];}this.averageCenter_=false;if(options["averageCenter"]!=undefined){this.averageCenter_=options["averageCenter"];}this.setupStyles_();this.setMap(map);this.prevZoom_=this.map_.getZoom();var that=this;google.maps.event.addListener(this.map_,"zoom_changed",function(){var zoom=that.map_.getZoom();if(that.prevZoom_!=zoom){that.prevZoom_=zoom;that.resetViewport();}});google.maps.event.addListener(this.map_,"idle",function(){that.redraw();});if(opt_markers&&opt_markers.length){this.addMarkers(opt_markers,false);}}MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_="../images/m";MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png";MarkerClusterer.prototype.extend=function(obj1,obj2){return(function(object){for(var property in object.prototype){this.prototype[property]=object.prototype[property];}return this;}).apply(obj1,[obj2]);};MarkerClusterer.prototype.onAdd=function(){this.setReady_(true);};MarkerClusterer.prototype.draw=function(){};MarkerClusterer.prototype.setupStyles_=function(){if(this.styles_.length){return;}for(var i=0,size;size=this.sizes[i];i++){this.styles_.push({url:this.imagePath_+(i+1)+"."+this.imageExtension_,height:size,width:size});}};MarkerClusterer.prototype.fitMapToMarkers=function(){var markers=this.getMarkers();var bounds=new google.maps.LatLngBounds();for(var i=0,marker;marker=markers[i];i++){bounds.extend(marker.getPosition());}this.map_.fitBounds(bounds);};MarkerClusterer.prototype.setStyles=function(styles){this.styles_=styles;};MarkerClusterer.prototype.getStyles=function(){return this.styles_;};MarkerClusterer.prototype.isZoomOnClick=function(){return this.zoomOnClick_;};MarkerClusterer.prototype.isAverageCenter=function(){return this.averageCenter_;};MarkerClusterer.prototype.getMarkers=function(){return this.markers_;};MarkerClusterer.prototype.getTotalMarkers=function(){return this.markers_.length;};MarkerClusterer.prototype.setMaxZoom=function(maxZoom){this.maxZoom_=maxZoom;};MarkerClusterer.prototype.getMaxZoom=function(){return this.maxZoom_;};MarkerClusterer.prototype.calculator_=function(markers,numStyles){var index=0;var count=markers.length;var dv=count;while(dv!==0){dv=parseInt(dv/10,10);index++;}index=Math.min(index,numStyles);return{text:count,index:index};};MarkerClusterer.prototype.setCalculator=function(calculator){this.calculator_=calculator;};MarkerClusterer.prototype.getCalculator=function(){return this.calculator_;};MarkerClusterer.prototype.addMarkers=function(markers,opt_nodraw){for(var i=0,marker;marker=markers[i];i++){this.pushMarkerTo_(marker);}if(!opt_nodraw){this.redraw();}};MarkerClusterer.prototype.pushMarkerTo_=function(marker){marker.isAdded=false;if(marker["draggable"]){var that=this;google.maps.event.addListener(marker,"dragend",function(){marker.isAdded=false;that.repaint();});}this.markers_.push(marker);};MarkerClusterer.prototype.addMarker=function(marker,opt_nodraw){this.pushMarkerTo_(marker);if(!opt_nodraw){this.redraw();}};MarkerClusterer.prototype.removeMarker_=function(marker){var index=-1;if(this.markers_.indexOf){index=this.markers_.indexOf(marker);}else{for(var i=0,m;m=this.markers_[i];i++){if(m==marker){index=i;break;}}}if(index==-1){return false;}marker.setMap(null);this.markers_.splice(index,1);return true;};MarkerClusterer.prototype.removeMarker=function(marker,opt_nodraw){var removed=this.removeMarker_(marker);if(!opt_nodraw&&removed){this.resetViewport();this.redraw();return true;}else{return false;}};MarkerClusterer.prototype.removeMarkers=function(markers,opt_nodraw){var removed=false;for(var i=0,marker;marker=markers[i];i++){var r=this.removeMarker_(marker);removed=removed||r;}if(!opt_nodraw&&removed){this.resetViewport();this.redraw();return true;}};MarkerClusterer.prototype.setReady_=function(ready){if(!this.ready_){this.ready_=ready;this.createClusters_();}};MarkerClusterer.prototype.getTotalClusters=function(){return this.clusters_.length;};MarkerClusterer.prototype.getMap=function(){return this.map_;};MarkerClusterer.prototype.setMap=function(map){this.map_=map;};MarkerClusterer.prototype.getGridSize=function(){return this.gridSize_;};MarkerClusterer.prototype.setGridSize=function(size){this.gridSize_=size;};MarkerClusterer.prototype.getMinClusterSize=function(){return this.minClusterSize_;};MarkerClusterer.prototype.setMinClusterSize=function(size){this.minClusterSize_=size;};MarkerClusterer.prototype.getExtendedBounds=function(bounds){var projection=this.getProjection();var tr=new google.maps.LatLng(bounds.getNorthEast().lat(),bounds.getNorthEast().lng());var bl=new google.maps.LatLng(bounds.getSouthWest().lat(),bounds.getSouthWest().lng());var trPix=projection.fromLatLngToDivPixel(tr);trPix.x+=this.gridSize_;trPix.y-=this.gridSize_;var blPix=projection.fromLatLngToDivPixel(bl);blPix.x-=this.gridSize_;blPix.y+=this.gridSize_;var ne=projection.fromDivPixelToLatLng(trPix);var sw=projection.fromDivPixelToLatLng(blPix);bounds.extend(ne);bounds.extend(sw);return bounds;};MarkerClusterer.prototype.isMarkerInBounds_=function(marker,bounds){return bounds.contains(marker.getPosition());};MarkerClusterer.prototype.clearMarkers=function(){this.resetViewport(true);this.markers_=[];};MarkerClusterer.prototype.resetViewport=function(opt_hide){for(var i=0,cluster;cluster=this.clusters_[i];i++){cluster.remove();}for(var i=0,marker;marker=this.markers_[i];i++){marker.isAdded=false;if(opt_hide){marker.setMap(null);}}this.clusters_=[];};MarkerClusterer.prototype.repaint=function(){var oldClusters=this.clusters_.slice();this.clusters_.length=0;this.resetViewport();this.redraw();window.setTimeout(function(){for(var i=0,cluster;cluster=oldClusters[i];i++){cluster.remove();}},0);};MarkerClusterer.prototype.redraw=function(){this.createClusters_();};MarkerClusterer.prototype.distanceBetweenPoints_=function(p1,p2){if(!p1||!p2){return 0;}var R=6371;var dLat=(p2.lat()-p1.lat())*Math.PI/180;var dLon=(p2.lng()-p1.lng())*Math.PI/180;var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(p1.lat()*Math.PI/180)*Math.cos(p2.lat()*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));var d=R*c;return d;};MarkerClusterer.prototype.addToClosestCluster_=function(marker){var distance=40000;var clusterToAddTo=null;var pos=marker.getPosition();for(var i=0,cluster;cluster=this.clusters_[i];i++){var center=cluster.getCenter();if(center){var d=this.distanceBetweenPoints_(center,marker.getPosition());if(d<distance){distance=d;clusterToAddTo=cluster;}}}if(clusterToAddTo&&clusterToAddTo.isMarkerInClusterBounds(marker)){clusterToAddTo.addMarker(marker);}else{var cluster=new Cluster(this);cluster.addMarker(marker);this.clusters_.push(cluster);}};MarkerClusterer.prototype.createClusters_=function(){if(!this.ready_){return;}var mapBounds=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast());var bounds=this.getExtendedBounds(mapBounds);for(var i=0,marker;marker=this.markers_[i];i++){if(!marker.isAdded&&this.isMarkerInBounds_(marker,bounds)){this.addToClosestCluster_(marker);}}};function Cluster(markerClusterer){this.markerClusterer_=markerClusterer;this.map_=markerClusterer.getMap();this.gridSize_=markerClusterer.getGridSize();this.minClusterSize_=markerClusterer.getMinClusterSize();this.averageCenter_=markerClusterer.isAverageCenter();this.center_=null;this.markers_=[];this.bounds_=null;this.clusterIcon_=new ClusterIcon(this,markerClusterer.getStyles(),markerClusterer.getGridSize());}Cluster.prototype.isMarkerAlreadyAdded=function(marker){if(this.markers_.indexOf){return this.markers_.indexOf(marker)!=-1;}else{for(var i=0,m;m=this.markers_[i];i++){if(m==marker){return true;}}}return false;};Cluster.prototype.addMarker=function(marker){if(this.isMarkerAlreadyAdded(marker)){return false;}if(!this.center_){this.center_=marker.getPosition();this.calculateBounds_();}else{if(this.averageCenter_){var l=this.markers_.length+1;var lat=(this.center_.lat()*(l-1)+marker.getPosition().lat())/l;var lng=(this.center_.lng()*(l-1)+marker.getPosition().lng())/l;this.center_=new google.maps.LatLng(lat,lng);this.calculateBounds_();}}marker.isAdded=true;this.markers_.push(marker);var len=this.markers_.length;if(len<this.minClusterSize_&&marker.getMap()!=this.map_){marker.setMap(this.map_);}if(len==this.minClusterSize_){for(var i=0;i<len;i++){this.markers_[i].setMap(null);}}if(len>=this.minClusterSize_){marker.setMap(null);}this.updateIcon();return true;};Cluster.prototype.getMarkerClusterer=function(){return this.markerClusterer_;};Cluster.prototype.getBounds=function(){var bounds=new google.maps.LatLngBounds(this.center_,this.center_);var markers=this.getMarkers();for(var i=0,marker;marker=markers[i];i++){bounds.extend(marker.getPosition());}return bounds;};Cluster.prototype.remove=function(){this.clusterIcon_.remove();this.markers_.length=0;delete this.markers_;};Cluster.prototype.getSize=function(){return this.markers_.length;};Cluster.prototype.getMarkers=function(){return this.markers_;};Cluster.prototype.getCenter=function(){return this.center_;};Cluster.prototype.calculateBounds_=function(){var bounds=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(bounds);};Cluster.prototype.isMarkerInClusterBounds=function(marker){return this.bounds_.contains(marker.getPosition());};Cluster.prototype.getMap=function(){return this.map_;};Cluster.prototype.updateIcon=function(){var zoom=this.map_.getZoom();var mz=this.markerClusterer_.getMaxZoom();if(mz&&zoom>mz){for(var i=0,marker;marker=this.markers_[i];i++){marker.setMap(this.map_);}return;}if(this.markers_.length<this.minClusterSize_){this.clusterIcon_.hide();return;}var numStyles=this.markerClusterer_.getStyles().length;var sums=this.markerClusterer_.getCalculator()(this.markers_,numStyles);this.clusterIcon_.setCenter(this.center_);this.clusterIcon_.setSums(sums);this.clusterIcon_.show();};function ClusterIcon(cluster,styles,opt_padding){cluster.getMarkerClusterer().extend(ClusterIcon,google.maps.OverlayView);this.styles_=styles;this.padding_=opt_padding||0;this.cluster_=cluster;this.center_=null;this.map_=cluster.getMap();this.div_=null;this.sums_=null;this.visible_=false;this.setMap(this.map_);}ClusterIcon.prototype.triggerClusterClick=function(event){var markerClusterer=this.cluster_.getMarkerClusterer();google.maps.event.trigger(markerClusterer,"clusterclick",this.cluster_,event);if(markerClusterer.isZoomOnClick()){this.map_.fitBounds(this.cluster_.getBounds());}};ClusterIcon.prototype.onAdd=function(){this.div_=document.createElement("DIV");if(this.visible_){var pos=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(pos);this.div_.innerHTML=this.sums_.text;}var panes=this.getPanes();panes.overlayMouseTarget.appendChild(this.div_);var that=this;var isDragging=false;google.maps.event.addDomListener(this.div_,"click",function(event){if(!isDragging){that.triggerClusterClick(event);}});google.maps.event.addDomListener(this.div_,"mousedown",function(){isDragging=false;});google.maps.event.addDomListener(this.div_,"mousemove",function(){isDragging=true;});};ClusterIcon.prototype.getPosFromLatLng_=function(latlng){var pos=this.getProjection().fromLatLngToDivPixel(latlng);if(typeof this.iconAnchor_==="object"&&this.iconAnchor_.length===2){pos.x-=this.iconAnchor_[0];pos.y-=this.iconAnchor_[1];}else{pos.x-=parseInt(this.width_/2,10);pos.y-=parseInt(this.height_/2,10);}return pos;};ClusterIcon.prototype.draw=function(){if(this.visible_){var pos=this.getPosFromLatLng_(this.center_);this.div_.style.top=pos.y+"px";this.div_.style.left=pos.x+"px";}};ClusterIcon.prototype.hide=function(){if(this.div_){this.div_.style.display="none";}this.visible_=false;};ClusterIcon.prototype.show=function(){if(this.div_){var pos=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(pos);this.div_.style.display="";}this.visible_=true;};ClusterIcon.prototype.remove=function(){this.setMap(null);};ClusterIcon.prototype.onRemove=function(){if(this.div_&&this.div_.parentNode){this.hide();this.div_.parentNode.removeChild(this.div_);this.div_=null;}};ClusterIcon.prototype.setSums=function(sums){this.sums_=sums;this.text_=sums.text;this.index_=sums.index;if(this.div_){this.div_.innerHTML=sums.text;}this.useStyle();};ClusterIcon.prototype.useStyle=function(){var index=Math.max(0,this.sums_.index-1);index=Math.min(this.styles_.length-1,index);var style=this.styles_[index];this.url_=style["url"];this.height_=style["height"];this.width_=style["width"];this.textColor_=style["textColor"];this.anchor_=style["anchor"];this.textSize_=style["textSize"];this.backgroundPosition_=style["backgroundPosition"];this.iconAnchor_=style["iconAnchor"];};ClusterIcon.prototype.setCenter=function(center){this.center_=center;};ClusterIcon.prototype.createCss=function(pos){var style=[];style.push("background-image:url("+this.url_+");");var backgroundPosition=this.backgroundPosition_?this.backgroundPosition_:"0 0";style.push("background-position:"+backgroundPosition+";");if(typeof this.anchor_==="object"){if(typeof this.anchor_[0]==="number"&&this.anchor_[0]>0&&this.anchor_[0]<this.height_){style.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;");}else{if(typeof this.anchor_[0]==="number"&&this.anchor_[0]<0&&-this.anchor_[0]<this.height_){style.push("height:"+this.height_+"px; line-height:"+(this.height_+this.anchor_[0])+"px;");}else{style.push("height:"+this.height_+"px; line-height:"+this.height_+"px;");}}if(typeof this.anchor_[1]==="number"&&this.anchor_[1]>0&&this.anchor_[1]<this.width_){style.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;");}else{style.push("width:"+this.width_+"px; text-align:center;");}}else{style.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");}var txtColor=this.textColor_?this.textColor_:"black";var txtSize=this.textSize_?this.textSize_:11;style.push("cursor:pointer; top:"+pos.y+"px; left:"+pos.x+"px; color:"+txtColor+"; position:absolute; font-size:"+txtSize+"px; font-family:Arial,sans-serif; font-weight:bold");return style.join("");};window["MarkerClusterer"]=MarkerClusterer;MarkerClusterer.prototype["addMarker"]=MarkerClusterer.prototype.addMarker;MarkerClusterer.prototype["addMarkers"]=MarkerClusterer.prototype.addMarkers;MarkerClusterer.prototype["clearMarkers"]=MarkerClusterer.prototype.clearMarkers;MarkerClusterer.prototype["fitMapToMarkers"]=MarkerClusterer.prototype.fitMapToMarkers;MarkerClusterer.prototype["getCalculator"]=MarkerClusterer.prototype.getCalculator;MarkerClusterer.prototype["getGridSize"]=MarkerClusterer.prototype.getGridSize;MarkerClusterer.prototype["getExtendedBounds"]=MarkerClusterer.prototype.getExtendedBounds;MarkerClusterer.prototype["getMap"]=MarkerClusterer.prototype.getMap;MarkerClusterer.prototype["getMarkers"]=MarkerClusterer.prototype.getMarkers;MarkerClusterer.prototype["getMaxZoom"]=MarkerClusterer.prototype.getMaxZoom;MarkerClusterer.prototype["getStyles"]=MarkerClusterer.prototype.getStyles;MarkerClusterer.prototype["getTotalClusters"]=MarkerClusterer.prototype.getTotalClusters;MarkerClusterer.prototype["getTotalMarkers"]=MarkerClusterer.prototype.getTotalMarkers;MarkerClusterer.prototype["redraw"]=MarkerClusterer.prototype.redraw;MarkerClusterer.prototype["removeMarker"]=MarkerClusterer.prototype.removeMarker;MarkerClusterer.prototype["removeMarkers"]=MarkerClusterer.prototype.removeMarkers;MarkerClusterer.prototype["resetViewport"]=MarkerClusterer.prototype.resetViewport;MarkerClusterer.prototype["repaint"]=MarkerClusterer.prototype.repaint;MarkerClusterer.prototype["setCalculator"]=MarkerClusterer.prototype.setCalculator;MarkerClusterer.prototype["setGridSize"]=MarkerClusterer.prototype.setGridSize;MarkerClusterer.prototype["setMaxZoom"]=MarkerClusterer.prototype.setMaxZoom;MarkerClusterer.prototype["onAdd"]=MarkerClusterer.prototype.onAdd;MarkerClusterer.prototype["draw"]=MarkerClusterer.prototype.draw;Cluster.prototype["getCenter"]=Cluster.prototype.getCenter;Cluster.prototype["getSize"]=Cluster.prototype.getSize;Cluster.prototype["getMarkers"]=Cluster.prototype.getMarkers;ClusterIcon.prototype["onAdd"]=ClusterIcon.prototype.onAdd;ClusterIcon.prototype["draw"]=ClusterIcon.prototype.draw;ClusterIcon.prototype["onRemove"]=ClusterIcon.prototype.onRemove;})(window,window.WA);(function(window,WA,undefined){if(!window.WaMappingLocation){window.WaMappingLocation=WaMappingLocation;}function WaMappingLocation(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaMappingLocation",viewModel=initModel,parentComponent=initArgs.parentComponent,zoom=initArgs.zoom||1,mapWindow=initArgs.mapWindow||window,mapContainerId=initArgs.mapContainerId,clusterImgPath=initArgs.clusterImgPath,markerUrl=initArgs.markerUrl,visitedMarkerUrl=initArgs.visitedMarkerUrl,settings=initArgs.settings,resources=initArgs.resources;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.dispose=dispose;var isDisposed=false,mapApi,map,bounds,searchBox,clusterer,zIndex=0,markers=[],geocodeDuration=settings.Duration,maxGeocodeDuration=settings.MaxDuration,geocodeChunkSize=settings.ChunkSizeToStore,geocodeAddressSource=settings.AddressSource,geocodeFailures={},maxGeocodingRetries=settings.MaxRetries,infoContainer=null,geocodedContacts=[],minMarkers=settings.MinMarkersToShowOnStart,contactsAmount=0,markersInfo,adminMode=!!WA.AdminPanel,isFullScreenModeOn=false;function isAdminEditModeActive(){return adminMode&&WA.AdminPanel.PageMode.Mode()===WA.AdminPanel.PageModeType.Edit;}function renderInfoItem(result,item,index){return index?result+"<div><strong>"+item.FieldName+":</strong> "+item.FieldValue+"</div>":result;}function getInfoTitle(memberInfo){return(memberInfo.PopupInfo&&memberInfo.PopupInfo[0]&&memberInfo.PopupInfo[0].FieldValue)||resources.EmptyNameLabel;}function renderInfoWindowContent(memberInfo){return memberInfo.PopupInfo.reduce(renderInfoItem,'<h5><a href="'+WA.String.format(resources.ProfileUrlTemplate,memberInfo.Id)+'" target="_blank">'+getInfoTitle(memberInfo)+"</a></h5>");}function createBounds(){bounds=new mapApi.LatLngBounds();}function removeMarker(marker){marker.setMap(null);}function removeAllMarkers(){if(clusterer){clusterer.clearMarkers();}markers.forEach(removeMarker);markers=[];zIndex=0;}function addPlace(place){if(!place.geometry){return;}if(place.geometry.viewport){bounds.union(place.geometry.viewport);}else{bounds.extend(place.geometry.location);}}function addMarker(contact){var infoWindow=new mapApi.InfoWindow({content:renderInfoWindowContent(contact)}),position=new mapApi.LatLng(contact.Latitude,contact.Longitude),marker=new mapApi.Marker({position:position,map:map,icon:markerUrl,title:getInfoTitle(contact)});marker.addListener("click",function(){zIndex++;infoWindow.setZIndex(zIndex);infoWindow.open(map,marker);marker.setZIndex(zIndex);marker.setIcon(visitedMarkerUrl);});markers.push(marker);bounds.extend(position);}function drawMarkers(contacts){createBounds();contacts.forEach(addMarker);fitMapToBounds();}function fitMapToBounds(){if(!markers.length){map.setZoom(zoom);return;}map.fitBounds(bounds);map.panToBounds(bounds);}function createSearchBox(){if(!mapApi.places){return;}var input=document.createElement("input");input.id=viewModel.id+"-searchbox";input.type="text";input.style.cssText="margin-top: 10px;"+"font-family: Roboto, Arial, sans-serif;"+"border: 1px solid transparent; border-radius: 2px 0 0 2px;"+"box-sizing: border-box; -moz-box-sizing: border-box;"+"min-width: 185px;"+"height: 29px;"+"padding: 0 10px;"+"outline: none;"+"box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);"+"background-color: #fff;"+"font-size: 15px;"+"text-overflow: ellipsis;";input.placeholder=resources.SearchBoxEmptyLabel;searchBox=new mapApi.places.SearchBox(input);map.controls[mapApi.ControlPosition.TOP_LEFT].push(input);searchBox.addListener("places_changed",onPlacesChanged);}function onPlacesChanged(){var places=searchBox.getPlaces();if(places&&places.length){createBounds();places.forEach(addPlace);fitMapToBounds();}}function drawMap(contacts){if(isDisposed||!contacts){return;}var mapContainer=mapContainerId&&WA.$(mapContainerId,mapWindow);map=new mapApi.Map(mapContainer,{center:new mapApi.LatLng(0,0),zoom:zoom,mapTypeId:mapApi.MapTypeId.ROADMAP});createSearchBox();drawMarkers(contacts);clusterer=new WaGoogleMapsMarkerClusterer(map,markers,{imagePath:clusterImgPath});markersInfo=new WaMappingLocationMarkersInfo({},{map:map,updaterPosition:mapApi.ControlPosition.BOTTOM_CENTER,resources:{AdminInfoMessage:resources.AdminInfoMessage,AdminOverLimitMessageTitle:resources.AdminOverLimitMessageTitle,AdminOverLimitMessage:resources.AdminOverLimitMessage,UpdateMarkersLabel:resources.UpdateMarkersLabel,UpdatingMarkersLabel:resources.UpdatingMarkersLabel,ReadyToUpdateMarkersTemplate:resources.ReadyToUpdateMarkersTemplate,UpdatingFinishedLabel:resources.UpdatingFinishedLabel,MarkerOnTheMapLabel:resources.MarkerOnTheMapLabel,GeocodingFailedZeroResultsLabel:resources.GeocodingFailedZeroResultsLabel,GeocodingFailedInvalidRequestLabel:resources.GeocodingFailedInvalidRequestLabel},statuses:mapApi.GeocoderStatus,adminMode:adminMode,parentComponent:pThis});markersInfo.UpdateClick.addHandler(drawGeocodedContacts);mapApi.event.addListener(map,"bounds_changed",onMapBoundsChanged);if(adminMode){WA.AdminPanel.PageModeChanged.addHandler(onPageModeChanged);}}function fixSearchBoxFullScreen(){document.querySelectorAll(".pac-container").forEach(function(container){container.style.zIndex=container.style.zIndex||10000000000;});}function onMapBoundsChanged(){var mapHolder=map.getDiv().firstChild,isPrevFullScreenModeOn=isFullScreenModeOn;isFullScreenModeOn=!!(mapHolder&&mapHolder.offsetHeight===window.innerHeight&&mapHolder.offsetWidth===window.innerWidth);if(isFullScreenModeOn&&isPrevFullScreenModeOn!==isFullScreenModeOn){fixSearchBoxFullScreen();}}function onPageModeChanged(sender,args){if(args===WA.AdminPanel.PageModeType.Edit){drawGeocodedContacts();}}function onGoogleMapsApiLoaded(){if(isDisposed){return;}mapApi=google.maps;if(!mapApi){return;}var mappingLocationApiClient=new WaMappingLocationServiceApiClient({authorizationToken:resources.AuthorizationToken,endpoint:resources.MappingLocationServiceEndpointUrl,fastIntegrationEnabled:resources.FastIntegrationEnabled,environmentId:resources.EnvironmentId,environmentReference:resources.EnvironmentReference},{parentComponent:pThis});mappingLocationApiClient.ContactInfo().done(onContactsInfoReceived).fail(onContactsInfoRequestFailed);}function onGadgetDeleted(sender,args){args=args||{};if(args.componentId==viewModel.id){map=null;bounds=null;searchBox=null;dispose();}}function isGeocoded(contact){return contact.AddressGeocoded;}function wasGeocodeFailed(contact){return contact.GeocodeFailed;}function groupContactsByGeocoding(accumulator,contact){!wasGeocodeFailed(contact)&&accumulator[isGeocoded(contact)?"processed":"unprocessed"].push(contact);return accumulator;}function getContactAddress(contact){return{GeocodeFailed:contact.GeocodeFailed,Address:contact.Address,FormattedAddress:contact.FormattedAddress,Source:geocodeAddressSource,Geometry:{Location:{Longitude:contact.Longitude,Latitude:contact.Latitude}}};}function drawGeocodedContacts(){if(geocodedContacts.length){geocodedContacts.forEach(addMarker);clusterer.addMarkers(markers.slice(-1*geocodedContacts.length));fitMapToBounds();geocodedContacts=[];}showContactsProcessingInfo();}function getContactGeocode(geocoder,unprocessedContacts,addressesToUpdate,addressesUpdater){if(isDisposed){return;}var contact=unprocessedContacts.shift();if(!contact){showContactsProcessingInfo();if(addressesToUpdate.length){addressesUpdater(addressesToUpdate);}return;}if(!contact.Address){getContactGeocode(geocoder,unprocessedContacts,addressesToUpdate,addressesUpdater);return;}geocoder.geocode({address:contact.Address},function(results,status){if(isDisposed){return;}var statuses=mapApi.GeocoderStatus;if(status===statuses.OK){var info=results[0];contact.GeocodeFailed=false;contact.AddressGeocoded=true;contact.FormattedAddress=info.formatted_address;contact.Longitude=info.geometry.location.lng();contact.Latitude=info.geometry.location.lat();geocodedContacts.push(contact);if(markers.length<minMarkers||isAdminEditModeActive()){drawGeocodedContacts();}addressesToUpdate.push(getContactAddress(contact));if(addressesToUpdate.length===geocodeChunkSize){addressesUpdater(addressesToUpdate);addressesToUpdate=[];}}else{contact.GeocodeFailed=true;geocodeFailures[status]=geocodeFailures[status]||[];if(status===statuses.OVER_QUERY_LIMIT||status===statuses.UNKNOWN_ERROR){if(status===statuses.OVER_QUERY_LIMIT){geocodeDuration=Math.min(2*geocodeDuration,maxGeocodeDuration);}if(typeof contact.GeocodingRetries!=="number"){contact.GeocodingRetries=0;}else{contact.GeocodingRetries++;}if(contact.GeocodingRetries<maxGeocodingRetries){unprocessedContacts.push(contact);}else{geocodeFailures[status].push(contact);}}else{if(status===statuses.ZERO_RESULTS){addressesToUpdate.push(getContactAddress(contact));if(addressesToUpdate.length===geocodeChunkSize){addressesUpdater(addressesToUpdate);addressesToUpdate=[];}}geocodeFailures[status].push(contact);}}showContactsProcessingInfo();WA.throttle(function(){getContactGeocode(geocoder,unprocessedContacts,addressesToUpdate,addressesUpdater);},geocodeDuration);});}function onContactsInfoReceived(info){if(WA.Object.getTypeString(info)!=="array"){return;}var contacts=info.reduce(groupContactsByGeocoding,{processed:[],unprocessed:[]}),addressesApiClient=new WaAddressServiceApiClient({authorizationToken:resources.AuthorizationToken,endpoint:resources.AddressServiceEndpointUrl,fastIntegrationEnabled:resources.FastIntegrationEnabled,environmentId:resources.EnvironmentId},{parentComponent:pThis});drawMap(contacts.processed);contactsAmount=info.length;minMarkers=Math.min(minMarkers,contactsAmount);showContactsProcessingInfo();getContactGeocode(new mapApi.Geocoder(),contacts.unprocessed,[],addressesApiClient.geocode);}function showContactsProcessingInfo(){var failures={},failed=0;for(var key in geocodeFailures){if(geocodeFailures.hasOwnProperty(key)){failures[key]=geocodeFailures[key].length;failed+=geocodeFailures[key].length;}}markersInfo.setState({total:contactsAmount,shown:markers.length,readyToShow:geocodedContacts.length,failed:failed,failures:failures,finished:markers.length===contactsAmount-failed});WA.Gadgets.notifyGadgetChanged();}function onContactsInfoRequestFailed(error){}function init(){parentComponent.Dispose.addHandler(dispose);parentComponent.GoogleMapsApiLoaded.addHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers({id:viewModel.id});parentComponent.GoogleMapsApiLoaded.removeHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);parentComponent.Dispose.removeHandler(dispose);if(mapApi&&map){mapApi.event.clearInstanceListeners(map);}if(adminMode){WA.AdminPanel.PageModeChanged.removeHandler(onPageModeChanged);}removeAllMarkers();viewModel=null;resources=null;parentComponent=null;mapApi=null;markers=null;clusterer=null;geocodeFailures=null;infoContainer=null;geocodedContacts=null;markersInfo=null;pThis.RenderComplete=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaMappingLocationMarkersInfo){window.WaMappingLocationMarkersInfo=WaMappingLocationMarkersInfo;}function WaMappingLocationMarkersInfo(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaMappingLocationMarkersInfo",viewModel=initModel,parentComponent=initArgs.parentComponent,map=initArgs.map,updaterPosition=initArgs.updaterPosition,resources=initArgs.resources,statuses=initArgs.statuses,adminMode=initArgs.adminMode;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.UpdateClick=WA.Tools.EventHandlers.createHandlers(pThis,{id:"UpdateClick"});pThis.dispose=dispose;pThis.setState=setState;var isDisposed=false,updateContainerId="wa-mapping-location-update-container",updateContainerMessageId="wa-mapping-location-update-container-message",updateContainerInfoId="wa-mapping-location-update-container-info",updateContainerHolder,updateContainer,updateContainerInfo,updateContainerMessage,hasMarkersToShow=false,overQueryLimitMessage;function showUpdateContainer(){if(!map.controls[updaterPosition].getLength()){map.controls[updaterPosition].push(updateContainerHolder);}}function hideUpdateContainer(){map.controls[updaterPosition].clear();}function setProcessedState(state){var statusLabels={};hideUpdateContainer();if(!adminMode||!state.finished){return;}if(state.failures[statuses.OVER_QUERY_LIMIT]){overQueryLimitMessage.style.display="block";}updateContainer.style.cursor="";updateContainer.style.textAlign="left";updateContainer.style.fontSize="12px";updateContainer.style.alignItems="center";updateContainer.style.justifyContent="space-between";updateContainer.style.minWidth="450px";statusLabels[statuses.ZERO_RESULTS]=resources.GeocodingFailedZeroResultsLabel;statusLabels[statuses.INVALID_REQUEST]=resources.GeocodingFailedInvalidRequestLabel;updateContainer.innerHTML=WaMappingLocationMarkersInfo.Template.geocodingResult({shown:state.shown,failed:state.failed,failures:state.failures,statuses:statuses,updatingFinishedLabel:resources.UpdatingFinishedLabel,markersOnTheMapLabel:resources.MarkerOnTheMapLabel,statusLabels:statusLabels});updateContainer.style.display="flex";showUpdateContainer();}function setProcessingState(state){updateContainerInfo.innerHTML=WA.String.format(resources.ReadyToUpdateMarkersTemplate,state.total,state.shown,state.readyToShow,(state.total-state.shown-state.failed));updateContainerMessage.innerHTML=WaMappingLocationMarkersInfo.Template.updateContainerMessage(resources.UpdateMarkersLabel);showUpdateContainer();}function setState(nextState){nextState=nextState||{};if(!nextState.total){hideUpdateContainer();return;}hasMarkersToShow=!!nextState.readyToShow;if(hasMarkersToShow){setProcessingState(nextState);}else{if(nextState.finished){setProcessedState(nextState);}else{hideUpdateContainer();}}}function createAdminInfoContainers(){var infoContainer=document.createElement("div"),mapContainer=map.getDiv();infoContainer.style.cssText="background:#d8e6f1;border:1px solid #3e5670;padding:8px;font-size:12px;";infoContainer.innerHTML=resources.AdminInfoMessage;mapContainer.parentNode.insertBefore(infoContainer,mapContainer);overQueryLimitMessage=document.createElement("div");overQueryLimitMessage.style.cssText="background:rgb(255, 229, 229);border:1px solid #FF0000;padding:8px;font-size:12px;display:none;";overQueryLimitMessage.innerHTML=WaMappingLocationMarkersInfo.Template.overQueryLimitMessage(resources.AdminOverLimitMessageTitle,resources.AdminOverLimitMessage);mapContainer.parentNode.insertBefore(overQueryLimitMessage,mapContainer);}function createUpdateContainer(){updateContainerHolder=document.createElement("div");updateContainerHolder.innerHTML=WaMappingLocationMarkersInfo.Template.updateContainer({updateContainerId:updateContainerId,updateContainerInfoId:updateContainerInfoId,updateContainerMessageId:updateContainerMessageId});updateContainer=updateContainerHolder.querySelector("#"+updateContainerId);updateContainerInfo=updateContainerHolder.querySelector("#"+updateContainerInfoId);updateContainerMessage=updateContainerHolder.querySelector("#"+updateContainerMessageId);WA.addHandler(updateContainer,"click",onUpdateClick);}function setUpdatingState(){updateContainerInfo.innerHTML="";updateContainerMessage.innerHTML=resources.UpdatingMarkersLabel;showUpdateContainer();}function onUpdateClick(){if(isDisposed||!hasMarkersToShow){return;}setUpdatingState();pThis.UpdateClick.fireHandlers();}function init(){parentComponent.Dispose.addHandler(dispose);createUpdateContainer();if(adminMode){createAdminInfoContainers();}}function dispose(){if(isDisposed){return;}isDisposed=true;WA.removeHandler(updateContainer,"click",onUpdateClick);pThis.Dispose.fireHandlers();parentComponent.Dispose.removeHandler(dispose);viewModel=null;resources=null;parentComponent=null;map=null;updateContainerHolder=null;updateContainer=null;updateContainerInfo=null;updateContainerMessage=null;statuses=null;overQueryLimitMessage=null;pThis.Dispose=null;pThis.UpdateClick=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaMappingLocationMarkersInfo.Template){window.WaMappingLocationMarkersInfo.Template={overQueryLimitMessage:overQueryLimitMessage,updateContainerMessage:updateContainerMessage,updateContainer:updateContainer,geocodingResult:geocodingResult};}function overQueryLimitMessage(title,message){return'<h6 style="margin:0 0 8px;">'+title+"</h6>"+message;}function updateContainerMessage(message){return'<span style="font-size:16px; font-weight:bold; transform:rotate(90deg); display: inline-block;">&#x21bb;</span> '+message;}function updateContainer(m){return'<div class="gm-style"'+' style="margin-bottom:10px;background:black;opacity:0.8;color:white;padding:15px;text-align:center;font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;display:inline-block;border-radius:3px;"'+' id="'+m.updateContainerId+'">'+'<div style="font-size:12px; margin-bottom:6px;" id="'+m.updateContainerInfoId+'"></div>'+'<div id="'+m.updateContainerMessageId+'"></div>';}function geocodingResult(m){var headBottomSpacing=8,html=m.updatingFinishedLabel+"<div>"+'<table style="border:none; border-spacing:unset; padding:0;">'+"<thead>"+"<tr>"+'<th class="gm-style" style="font-size:12px;color:white;text-align:left;padding-right:15px;padding-bottom:'+(m.failed?headBottomSpacing:0)+'px;">'+m.markersOnTheMapLabel+":</th>"+'<th class="gm-style" style="font-size:12px;color:white;text-align:right;padding-bottom:'+(m.failed?headBottomSpacing:0)+'px;">'+m.shown+"</th></tr>"+"</thead>";if(m.failed){html+="<tbody>";for(var status in m.failures){if(m.failures.hasOwnProperty(status)&&m.failures[status]&&m.statusLabels[status]){html+="<tr>"+'<td class="gm-style" style="font-size:12px;color:white;text-align:left;padding-right:15px;">'+m.statusLabels[status]+":</td>"+'<td class="gm-style" style="font-size:12px;color:white;text-align:right;">'+m.failures[status]+"</td>"+"</tr>";}}html+="</tbody>";}return html+"</table>"+"</div>";}})(window,WA);(function(window,WA,undefined){if(!window.WaMappingLocationServiceApiClient){window.WaMappingLocationServiceApiClient=WaMappingLocationServiceApiClient;}function WaMappingLocationServiceApiClient(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaMappingLocationServiceApiClient",viewModel=initModel,parentComponent=initArgs.parentComponent,authorizationToken=viewModel.authorizationToken,endpoint=viewModel.endpoint;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});var isDisposed=false,serviceHttpClient;pThis.ContactInfo=ContactInfo;function ContactInfo(){return serviceHttpClient.fetch(endpoint,WA.Ajax.appendRequestHeaders({cache:false,global:false,type:"GET",crossDomain:true},additionalHeaders));}function init(){parentComponent.Dispose.addHandler(dispose);additionalHeaders=viewModel.fastIntegrationEnabled&&viewModel.environmentId?[{key:"X-Api-EnvironmentId",value:viewModel.environmentId}]:[];if(viewModel.environmentReference){additionalHeaders.push({key:"X-Api-EnvironmentReference",value:viewModel.environmentReference});}serviceHttpClient=new WA.ServiceHttpClient({authorizationToken:viewModel.authorizationToken},{parentComponent:pThis});}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers();viewModel=null;parentComponent=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(){if(!window.ContactAdvancedSearch){window.ContactAdvancedSearch={};}var contactAdvancedSearch=window.ContactAdvancedSearch;var anyConditionValue=-1;var textBoxConditionValue={Empty:4,NotEmpty:5};var dateConditionValue={ThisMonth:4,ThisYear:5,LastMonth:7,LastYear:8,NotDefined:9,AnyDate:10};var conditionSelectorState={Empty:0,NotEmpty:1,Same:2};var selectorTypeId={String:0,RadioButtonList:1,CheckBoxList:2,Date:3,Dropdown:4,Int:5,Decimal:6};var dropdownTypeId=4;var checkCriteriaChangedTimeout;contactAdvancedSearch.initialize=function(optionItems){contactAdvancedSearch.optionItems=optionItems||contactAdvancedSearch.optionItems;contactAdvancedSearch.initialized=true;};contactAdvancedSearch.dispose=function(){if(!contactAdvancedSearch.initialized){return;}contactAdvancedSearch.initialized=false;};contactAdvancedSearch.validateCriteriaSelected=function(source,args){for(var i=0;i<contactAdvancedSearch.optionItems.length;i++){var conditionSelector=WA.$(contactAdvancedSearch.optionItems[i].csId,window);if(conditionSelector.value!=anyConditionValue){args.IsValid=true;return;}}args.IsValid=false;};contactAdvancedSearch.prepareValidators=function(){for(var i=0;i<contactAdvancedSearch.optionItems.length;i++){var conditionSelector=WA.$(contactAdvancedSearch.optionItems[i].csId,window);if(conditionSelector.value==anyConditionValue){disableValidators(contactAdvancedSearch.optionItems[i].vIds);continue;}if(contactAdvancedSearch.optionItems[i].t==selectorTypeId.String&&!requiredTextBoxConditionSelected(conditionSelector)){disableValidators(contactAdvancedSearch.optionItems[i].vIds);continue;}if(contactAdvancedSearch.optionItems[i].t==selectorTypeId.Date&&!requiredDateConditionSelected(conditionSelector)){disableValidators(contactAdvancedSearch.optionItems[i].vIds);continue;}enableValidators(contactAdvancedSearch.optionItems[i].vIds);}};contactAdvancedSearch.dateConditionSelector=function(controlId,linkedControlId){var dropDownList=WA.$(controlId,window);var dateControlContainer=WA.$(linkedControlId,window).parentNode;var newReadOnlyContainer=document.createElement("DIV");var readOnlyContainerId="readOnlyContainer_"+linkedControlId;newReadOnlyContainer.setAttribute("id",readOnlyContainerId);newReadOnlyContainer.setAttribute("class","fieldItem");var readOnlyContainer=WA.$(readOnlyContainerId,window);var dateTextThisMonth=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextThisMonth;var dateTextThisYear=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextThisYear;var dateTextLastMonth=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextLastMonth;var dateTextLastYear=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextLastYear;function setReadonlyContainerText(text){if(!readOnlyContainer){newReadOnlyContainer.innerHTML=text;newReadOnlyContainer.style.display="block";dateControlContainer.parentNode.appendChild(newReadOnlyContainer);}else{readOnlyContainer.innerHTML=text;readOnlyContainer.style.display="block";}dateControlContainer.style.display="none";}var selectedValue=dropDownList.options[dropDownList.selectedIndex].value;if(selectedValue==anyConditionValue||selectedValue==dateConditionValue.NotDefined||selectedValue==dateConditionValue.AnyDate){dateControlContainer.style.display="none";if(readOnlyContainer){readOnlyContainer.innerHTML="";readOnlyContainer.style.display="none";}return;}if(selectedValue==dateConditionValue.ThisMonth){setReadonlyContainerText(dateTextThisMonth);return;}if(selectedValue==dateConditionValue.LastMonth){setReadonlyContainerText(dateTextLastMonth);return;}if(selectedValue==dateConditionValue.ThisYear){setReadonlyContainerText(dateTextThisYear);return;}if(selectedValue==dateConditionValue.LastYear){setReadonlyContainerText(dateTextLastYear);return;}dateControlContainer.style.display="block";if(readOnlyContainer){readOnlyContainer.innerHTML="";readOnlyContainer.style.display="none";}};contactAdvancedSearch.textBoxConditionSelector=function(controlId,linkedControlContainerId){var control=WA.$(controlId,window);var linkedControlContainer=WA.$(linkedControlContainerId,window);if(control.value==textBoxConditionValue.Empty||control.value==textBoxConditionValue.NotEmpty){linkedControlContainer.style.display="none";}else{linkedControlContainer.style.display="block";}};contactAdvancedSearch.disposeCriteriaChangeScript=function(){checkCriteriaChangedTimeout=null;};contactAdvancedSearch.initCriteriaChangeScript=function(){for(var i=0;i<optionItems.length;i++){var valuesContainer=WA.$(optionItems[i].vsCId,window);if(optionItems[i].t==selectorTypeId.Dropdown){optionItems[i].inputs=valuesContainer.getElementsByTagName("SELECT");}else{optionItems[i].inputs=valuesContainer.getElementsByTagName("INPUT");}optionItems[i].conditionSelector=WA.$(optionItems[i].csId,window);}runCriteriaChanged();};function runCriteriaChanged(){for(var i=0;i<optionItems.length;i++){var changeStateTo=getChangeDirection(optionItems[i]);applyChangeDirection(optionItems[i],changeStateTo);clearValueIfConditionEmpty(optionItems[i]);}checkCriteriaChangedTimeout=setTimeout(function(){runCriteriaChanged();},300);}function getChangeDirection(item){if(!item.inputs||item.inputs.length==0||!item.inputs[0]){return;}if(item.t==selectorTypeId.Dropdown){var change=conditionSelectorState.Same;if(item.prevSelectedIndex!=item.inputs[0].selectedIndex&&item.inputs[0].selectedIndex!=0){change=conditionSelectorState.NotEmpty;}else{if(item.inputs[0].selectedIndex==0){change=conditionSelectorState.Empty;}}item.prevSelectedIndex=item.inputs[0].selectedIndex;return change;}else{if(item.t==selectorTypeId.String||item.t==selectorTypeId.Int||item.t==selectorTypeId.Decimal||item.toLocaleString==selectorTypeId.Date){return item.inputs[0].value?conditionSelectorState.NotEmpty:conditionSelectorState.Empty;}else{if(item.t==selectorTypeId.CheckBoxList){for(var i=0;i<item.inputs.length;i++){if(item.inputs[i].checked){return conditionSelectorState.NotEmpty;}}return conditionSelectorState.Empty;}else{if(item.t==selectorTypeId.RadioButtonList){for(var i=0;i<item.inputs.length;i++){if(item.inputs[i].checked){var change=item.prevSelectedIndex!=i?conditionSelectorState.NotEmpty:conditionSelectorState.Same;item.prevSelectedIndex=i;return change;}}return conditionSelectorState.Same;}}}}}function applyChangeDirection(item,changeStateTo){if(item.prevChangeStateTo!=changeStateTo&&changeStateTo!=conditionSelectorState.Same){if(changeStateTo==conditionSelectorState.Empty&&item.conditionSelector.selectedIndex!=conditionSelectorState.Empty&&!((item.t==selectorTypeId.String||item.t==selectorTypeId.Int||item.t==selectorTypeId.Decimal)&&(item.conditionSelector.value==textBoxConditionValue.Empty||item.conditionSelector.value==textBoxConditionValue.NotEmpty))){item.conditionSelector.selectedIndex=conditionSelectorState.Empty;}if(changeStateTo==conditionSelectorState.NotEmpty&&item.conditionSelector.selectedIndex==conditionSelectorState.Empty){item.conditionSelector.selectedIndex=conditionSelectorState.NotEmpty;}}item.prevChangeStateTo=changeStateTo;}function clearValueIfConditionEmpty(item){if(!item.inputs||item.inputs.length==0||!item.inputs[0]){return;}if(item.conditionSelector.selectedIndex!=0){return;}if(item.t==selectorTypeId.Dropdown){item.prevSelectedIndex=item.inputs[0].selectedIndex;if(item.inputs[0].selectedIndex!==0){item.inputs[0].selectedIndex=0;}}else{if(item.t==selectorTypeId.String||item.t==selectorTypeId.Int||item.t==selectorTypeId.Decimal||item.toLocaleString==selectorTypeId.Date){item.inputs[0].value="";}else{if(item.t==selectorTypeId.CheckBoxList){for(var i=0;i<item.inputs.length;i++){item.inputs[i].checked=false;}}else{if(item.t==selectorTypeId.RadioButtonList){for(var i=0;i<item.inputs.length;i++){if(item.inputs[i].checked){item.prevSelectedIndex=i;}item.inputs[i].checked=false;}}}}}}function requiredDateConditionSelected(conditionSelector){if(conditionSelector.value!=dateConditionValue.ThisMonth&&conditionSelector.value!=dateConditionValue.ThisYear&&conditionSelector.value!=dateConditionValue.LastMonth&&conditionSelector.value!=dateConditionValue.LastYear&&conditionSelector.value!=dateConditionValue.NotDefined&&conditionSelector.value!=dateConditionValue.AnyDate){return true;}return false;}function requiredTextBoxConditionSelected(conditionSelector){if(conditionSelector.value!=textBoxConditionValue.Empty&&conditionSelector.value!=textBoxConditionValue.NotEmpty){return true;}return false;}function enableValidators(vIds){for(var i=0;i<vIds.length;i++){WA.$(vIds[i],window).enabled=true;}}function disableValidators(vIds){for(var i=0;i<vIds.length;i++){WA.$(vIds[i],window).enabled=false;}}})();function ContactAdvancedSearch_Page_Parsed(){ContactAdvancedSearch.initialize(optionItems);}

/*compiled*/
var MemberDirectoryListRenderer;

(function() {
// start of MemberDirectoryListRenderer singleton

  var $ = function (id) { return document.getElementById(id); };

  if(MemberDirectoryListRenderer == null) 
  {
    MemberDirectoryListRenderer = new Object();

    /*debug*/var logEnabled = false; function log(text) { if (logEnabled && WA.Log) { WA.Log.add('MemberDirectoryListRenderer', text); } }

    MemberDirectoryListRenderer.FormId = 0;
    MemberDirectoryListRenderer.DataSourceId = 0;

    MemberDirectoryListRenderer.outputBlockId = 'memberDirectory';
    MemberDirectoryListRenderer.foundBlockId = 'membersFound';
    MemberDirectoryListRenderer.pagingBlockId = 'idPagingData';
    MemberDirectoryListRenderer.pagingBlock2Id = 'idPagingData2';
    MemberDirectoryListRenderer.waitMessagesBlockId = 'idWaitMessages';
    MemberDirectoryListRenderer.reloadLinkId = 'idReloadData';
    MemberDirectoryListRenderer.selectedMembersFieldId = '';
    MemberDirectoryListRenderer.titleLabelId = '';
    MemberDirectoryListRenderer.titleTemplate = '';
    MemberDirectoryListRenderer.imgTemplateRelativePath = '';
    MemberDirectoryListRenderer.MemberDirectoryListWebServiceUrl_LoadMembers = '';
    MemberDirectoryListRenderer.notifyGadgetChangedTimeout = 27;

    MemberDirectoryListRenderer.labels = 
    {
      serverLoadingStarted    :  '<img src="/Admin/html_res/images/asyncloadprogress.gif">Loading...'
     ,serverLoadingError      : 'Loading error&nbsp;'
     ,serverLoadingErrorAlert : 'Server error while loading data.<br>Please contact us at support@wildapricot.com and let us know what led to this error.<br><br>Sorry for inconvenience.'
     ,processingServerData    : 'Processing data, please wait...'
     ,processingCachedData    : 'Processing cache...'
     ,searchingKeywords       : 'searching...'
     ,searchingEmpty          : 'loading...'
     ,displayingFound         : 'displaying...'
     ,pagingTemplate          : 'Show:{0}'
     ,noMembersInDatabase     : 'No members in your database.'
     ,noMembersFound          : 'No members found. Edit your search text or clear search box to show all members.'
     ,detailsUrlTitle         : 'Go to member details'
     ,viewDetails             : 'View details'
     ,headers                 : { column1: '', column2: '', column3: '', column4: '' }
    };

    // public methods
    MemberDirectoryListRenderer.init = init;
    MemberDirectoryListRenderer.highlightRowAndNext = highlightRowAndNext;
    MemberDirectoryListRenderer.normlightRowAndNext = normlightRowAndNext;
    MemberDirectoryListRenderer.highlightRowAndPrev = highlightRowAndPrev;
    MemberDirectoryListRenderer.normlightRowAndPrev = normlightRowAndPrev;
    MemberDirectoryListRenderer.redirectToMemberDetails = redirectToMemberDetails;
    MemberDirectoryListRenderer.pagerChanged = pagerChanged;
  }

  // state vars
  var isInited = false;
  var directoryData;
  var searchAsyncData;
  var forceNextAskSearch = false;
  var lastSeachBoxAskValue = '';
  var isCached = false;
  var cache;

  // timeouts and intervals
  var searchBoxAskTimeout;
  var processSearchTimeout;
  var searchAsyncTimeout;
  var notifyGadgetChangedTimeout = MemberDirectoryListRenderer.notifyGadgetChangedTimeout;
  
  // consts
  var pagerRangeNameLength = 4;
  var pagerRangeLevelLength = 5;
  var maxDisplayRecords = 50;
  var searchBoxAskIntervalMs = 50;
  var processSearchTimeoutMs = 250;
  var searchAsyncTimeoutMs = 10;
  var searchAsyncMaxRecords = 1000;

  //filter
  var maxFilterQty = 4;
  var filterValues = new Array (null, null, null, null);
  var filterOptionCounters = new Array (null, null, null, null);
  var filterOptionNames = new Array (null, null, null, null);
  
  // templates

  var footerTemplate = '</table>';
  var pagerTemplate = [
    '<select onchange="MemberDirectoryListRenderer.pagerChanged(this);">'
  , '</select>'];
  var pagerOptionTemplate = [
    '<option value="'
  , '">'
  , '-'
  , '</option>'];
  var tableStart = '<table id="membersTable" class="membersTable" cellspacing="0"><thead><tr>';
  var thTemplate = [
    '<th width="'
  , '%">'
  , '</th>'];
  var headerEnd = "</tr></thead>"
  var tdTemplate = [
    '<td class="'
  , '" width="'
  , '%">'
  , '</td>'];
  var linkTemplate = [
    '<h5><a title="'
  , '" onclick="globalUtils.stopEventPropogation(event)" href="'
  , '">'
  , '</a></h5>'];
  var bottomRowTemplate = [
    '</tr><tr class="normal" bottomrow=\'true\' onclick="MemberDirectoryListRenderer.redirectToMemberDetails(\''
  , '\')" onmouseover="MemberDirectoryListRenderer.highlightRowAndPrev(this)" onmouseout="MemberDirectoryListRenderer.normlightRowAndPrev(this)"><td class=\'memberDirectoryBottomRow\' colspan=\''
  , '\'><div class=\'mainDiv\'>'
  , '</div></td>'];
  var memberTemplate = [
    '<tr class="normal" onclick="MemberDirectoryListRenderer.redirectToMemberDetails(\''
  , '\')" onmouseover="MemberDirectoryListRenderer.highlightRowAndNext(this)" onmouseout="MemberDirectoryListRenderer.normlightRowAndNext(this)">'
  , '</tr>'];
  var imgTemplate = [
    '<img src=\''
  , '?memberId='
  , '&id='
  , '&t='
  , '\'></img>'];
  var emailTemplate = [
    '<a href="mailto:'
  , '" onclick="window.location=this.href;BonaPage.stopEvent(event);">'
  , '</a>'];

  var emailReplaceTemplate = '<a href="mailto:$1" onclick="window.location=this.href;BonaPage.stopEvent(event);">$1</a>';

  // reexp
  var emailReplace1 = /([\w#%\"\*\.!\$\+\-\=\?\^\'\{\}\|\~\&]+@(?:[a-zA-Z0-9_-]+\.)+[a-zA-Z]{1,20})/gim;

  /*****************************************************/
  /***   INITIALIZATION AND DISPOSING                ***/
  /*****************************************************/

  function init()
  {
    /*debug*/log('init');

    disableSearch();
    initDisposeEvents();    
    loadRecordsAsync();
    initCache();
    initFilter();

    WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);

    isInited = true;
  }  
  
  function initDisposeEvents()
  {
    /*debug*/log('initDisposeEvents');

    if (document.all)
      window.attachEvent('onunload', dispose);
    else
      window.addEventListener('unload', dispose, false);
  }
  
  function dispose()
  {
    /*debug*/log('dispose');

    isInited = false;

    WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);

    disposeAllTimeouts();
    disposeSearchData();
    directoryData = null;
  }


  function onGadgetDeleted(sender, args)
  {
    /*debug*/log('onGadgetDeleted');
    args = args || {};

    var versionData = MemberDirectoryListRenderer.VersionData;

    if (versionData && args.componentId && args.componentId == versionData.componentId)
    {
      dispose();
    }
  }

  
  function disposeAllTimeouts()
  {
    /*debug*/log('disposeAllTimeouts');

    WA.clearThrottle(doNotifyGadgetChanged);

    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);
  
    if (processSearchTimeout)
      clearTimeout(processSearchTimeout);

    terminateAsyncSearch();
  }
  
  function disposeSearchData()
  {
    /*debug*/log('disposeSearchData');

    searchData = null;
  }

  /*****************************************************/
  /***   CACHE HELPERS                               ***/
  /*****************************************************/
  
  function initCache()
  {
    /*debug*/log('initCache');

    if (!cache)
    {
      cache = new Object();
    }
  
    try
    {
      top.cache = cache;
    }
    catch(e){}
          
    if (!cache.memberDirectory)
    {
      cache.memberDirectory = {
        isReady : false,
        serverResponse : null,
        totalCount : null,
        colTitlesData : null,
        membersData : null,
        searchData : null,
        safeData : null,
        foundCount: null
      };     
    }
  }
  
  function clearCache()
  {
    /*debug*/log('clearCache');

    if (cache && cache.memberDirectory)
    {
      cache.memberDirectory = null;
    }
    
    initCache();
  }

  function getCachedDirectoryData()
  {
    /*debug*/log('getCachedDirectoryData');

    initCache();
    return cache.memberDirectory;
  }

  /*****************************************************/
  /***   DISPLAY MESSAGES HELPERS                    ***/
  /*****************************************************/
  
  function setMessage(message)
  {
    /*debug*/log('setMessage');

    var messageBlock = $(MemberDirectoryListRenderer.waitMessagesBlockId);
    if (messageBlock)
    {
      messageBlock.innerHTML = message;
      messageBlock.style.display = message ? 'inline' : 'none';
    }
  }

  function setFound(found)
  {
    /*debug*/log('setFound');

    var foundBlock = $(MemberDirectoryListRenderer.foundBlockId);

    if (foundBlock)
    {
      if (found != 0 && (found == null || found == ''))
      {
        foundBlock.innerHTML = '';
        foundBlock.style.display = 'none';
        hideReload()
        hidePaging();
      }
      else
      {
        foundBlock.innerHTML = found;
        foundBlock.style.display = 'inline';
      }
    }
  }
  
  function hideReload()
  {
    /*debug*/log('hideReload');

    $(MemberDirectoryListRenderer.reloadLinkId).style.display = 'none';
  }
  
  function showReload()
  {
    /*debug*/log('showReload');

    var reloadLink = $(MemberDirectoryListRenderer.reloadLinkId);
    reloadLink.style.display = 'inline';
    reloadLink.onclick = null;
    reloadLink.onclick = reloadData;
  }
  
  function setPaging(selectHTML, seletedValue)
  {
    /*debug*/log('setPaging');

    var pagers = [
      $(MemberDirectoryListRenderer.pagingBlockId),
      $(MemberDirectoryListRenderer.pagingBlock2Id)
    ]
    var i;
    var oi;
    
    for (i = 0; i < pagers.length; i++)
    {
      pagers[i].innerHTML = MemberDirectoryListRenderer.labels.pagingTemplate.replace(/\{0\}/g, selectHTML); 
      pagers[i].style.display = 'inline';

      var pagerSelect = pagers[i].getElementsByTagName('SELECT')[0];
      for (oi = 0; oi < pagerSelect.options.length; oi++)
      {
        if (pagerSelect.options[oi].value == seletedValue)
        {
          pagerSelect.options[oi].selected = true;
          break;
        }
      }
    }
  }
  
  function hidePaging()
  {
    /*debug*/log('hidePaging');

    var pagingBlock = $(MemberDirectoryListRenderer.pagingBlockId);
    if (pagingBlock)
    {
      pagingBlock.style.display = 'none';
    }
    var pagingBlock2 = $(MemberDirectoryListRenderer.pagingBlock2Id);
    if(pagingBlock2)
    {
      pagingBlock2.style.display = 'none';
    }
  }
  
  function isPagerHidden()
  {
    /*debug*/log('isPagerHidden');

    return $(MemberDirectoryListRenderer.pagingBlockId) && ($(MemberDirectoryListRenderer.pagingBlockId).style.dysplay != 'inline');
  }
  function setDirectoryOutput(html, encodeHtml)
  {
    /*debug*/log('setDirectoryOutput');

    var outputBlock = $(MemberDirectoryListRenderer.outputBlockId);
    
    if (!outputBlock)
    {
      return;
    }
    
    if (encodeHtml == true) //encodeHtml may not be bool
    {
      outputBlock[document.all ? "innerText" : "textContent"] = html ? html : '';
    }
    else
    {
      outputBlock.innerHTML = html ? html : '';
    }
  }

  /*****************************************************/
  /***   SEARCHBOX                                   ***/
  /*****************************************************/

  function getSearchKeywords()
  {
    /*debug*///log('getSearchKeywords');

    var searchBoxElem = $(MemberDirectoryListRenderer.searchBoxId);
    
    if (!searchBoxElem)
    {
      dispose();
      return false;
    }
    
    var normalizedSearchPhrase = searchBoxElem.value.replace(/\s+/g, ' ');
    normalizedSearchPhrase = normalizedSearchPhrase.replace(/^\s*(.*?)\s*$/, '$1');
    return normalizedSearchPhrase;
  }

  function convertKeywordsToArray(keywords)
  {
    /*debug*/log('convertKeywordsToArray');

    if (!keywords)
      return new Array();
    
    var keywordsBeforeEncode = keywords.toLowerCase().split(' ');
    var result = new Array();
    
    for (var i = 0; i < keywordsBeforeEncode.length; i++)
    {
      result[i] = BonaPage.encodeHtml(keywordsBeforeEncode[i]);
    }
    
    return result;
  }

  function enableSearch(searchValue, autofocus)
  {
    /*debug*/log('enableSearch');

    var searchBox;

    autofocus = autofocus === undefined ? true : autofocus;

    if (!WA.AdminPanel || !WA.AdminPanel.PageMode || WA.AdminPanel.PageMode.Mode() != WA.AdminPanel.PageModeType.Edit)
    {
      searchBox = $(MemberDirectoryListRenderer.searchBoxId);

      if (searchValue)
        searchBox.value = searchValue;

      searchBox.onkeypress = searchBoxIgnoreEnter;
      searchBox.disabled = false;
      try 
      {
        if(autofocus)
        {
          searchBox.focus();
        }
     } catch (e) {}
    }
    
    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);
      
    searchBoxAskTimeout = setTimeout(searchBoxAsk, searchBoxAskIntervalMs);
  }
  
  function disableSearch()
  {
    /*debug*/log('disableSearch');

    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);

    var searchBox = $(MemberDirectoryListRenderer.searchBoxId);
    //searchBox.disabled = true;
  }
  
  function stopAskSearchBox()
  {
    /*debug*/log('stopAskSearchBox');

    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);
  }
  
  function searchBoxIgnoreEnter(e)
  {
    /*debug*/log('searchBoxIgnoreEnter');

    if (!isInited) 
      return false;

    if (!e) 
      e = event;

    if (e.keyCode == 13)
    {
      forceNextAskSearch = true;
      return false;
    }
  }

  function searchBoxAsk()
  {
    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);

    if (!isInited) { return; }

    /*debug*///log('searchBoxAsk');

    var searchKeywords = getSearchKeywords();
    
    if (searchKeywords == lastSeachBoxAskValue && !forceNextAskSearch)
    {
      searchBoxAskTimeout = setTimeout(searchBoxAsk, searchBoxAskIntervalMs);
      return;
    }

    forceNextAskSearch = false;      
    lastSeachBoxAskValue = searchKeywords;

    if (processSearchTimeout) 
      clearTimeout(processSearchTimeout);

    terminateAsyncSearch();

    var searchMessage = searchKeywords ? 
      MemberDirectoryListRenderer.labels.searchingKeywords :
      MemberDirectoryListRenderer.labels.searchingEmpty;
    
    setFound();
    setMessage(searchMessage);

    notifyGadgetChanged();

    processSearchTimeout = setTimeout(function() { searchAndRenderAsync(searchKeywords); }, processSearchTimeoutMs);
    searchBoxAskTimeout = setTimeout(searchBoxAsk, searchBoxAskIntervalMs);
  }
  function setTitle(count)
  {
    /*debug*/log('setTitle');

    return;
    var titleLabel = $(MemberDirectoryListRenderer.titleLabelId);
    titleLabel.innerHTML = MemberDirectoryListRenderer.titleTemplate.replace(/\{0\}/g, count); 
    titleLabel.style.visibility = 'visible';
  }
  /*****************************************************/
  /***   DATA LOADING AND PROCESSING                 ***/
  /*****************************************************/

  function loadRecordsAsync()
  {
    /*debug*/log('loadRecordsAsync');

    directoryData = getCachedDirectoryData();

    isCached = false;
    setFound(MemberDirectoryListRenderer.labels.serverLoadingStarted);

    notifyGadgetChanged();
    
    /*
    var match = document.body.id.match(/pageid_(\d+)/i);
    
    if (match != null) 
    {
	    var pageId = match[1];
    } 
    */

    var formData = { 'formId' : MemberDirectoryListRenderer.FormId };

    if (MemberDirectoryListRenderer.VersionData)
    {
      formData.pageId = MemberDirectoryListRenderer.VersionData.pageId;
      formData.versionId = MemberDirectoryListRenderer.VersionData.versionId;
      formData.componentId = MemberDirectoryListRenderer.VersionData.componentId;
    }

    // AJAX call
    WA.Ajax({
      url : MemberDirectoryListRenderer.MemberDirectoryListWebServiceUrl_LoadMembers,
      data : formData,
      type : 'POST',
      success : loadRecordsCallback,
      error : loadRecordsErrorCallback
    });
  }
  
  function loadRecordsErrorCallback(result)
  {
    /*debug*/log('loadRecordsErrorCallback');

    setFound(MemberDirectoryListRenderer.labels.serverLoadingError);
    setMessage();    
    showReload();
    setDirectoryOutput(MemberDirectoryListRenderer.labels.serverLoadingErrorAlert);
    notifyGadgetChanged();
  }
  
  function loadRecordsCallback(result)
  {
    /*debug*/log('loadRecordsCallback');

    setFound(result.TotalCount);
    setMessage(MemberDirectoryListRenderer.labels.processingServerData);
    directoryData.serverResponse = result;
    notifyGadgetChanged();
    setTimeout(processServerData, 10);
  }

  function processCachedData()
  {
    /*debug*/log('processCachedData');

    lastSeachBoxAskValue = directoryData.lastKeywords;
    forceNextAskSearch = false;
    enableSearch(lastSeachBoxAskValue);
    searchAndRenderAsync(directoryData.lastKeywords, directoryData.lastRenderIndex);
  }
 



  function processServerData()
  {
    /*debug*/log('processServerData');

    var jsonStructure;
    eval('jsonStructure = ' + directoryData.serverResponse.JsonStructure + ';');
	
	//directoryData.serverResponse = createMembers(20000);
	//jsonStructure=directoryData.serverResponse.JsonStructure;

    directoryData.totalCount = directoryData.serverResponse.TotalCount;
    directoryData.serverResponse = null;
    directoryData.layout = jsonStructure.layout;
    directoryData.membersData = jsonStructure.members;

    prepareSearchData();
    setTitle(directoryData.totalCount);    
    jsonStructure = null;
    directoryData.statuses = null;

    directoryData.isReady = true;
    forceNextAskSearch = true;
    enableSearch(undefined, false);
  }




  function prepareSearchData()
  {
    /*debug*/log('prepareSearchData');

    directoryData.searchData = new Array();
    directoryData.safeData = new Array();
    directoryData.counterData = new Array();
    var searchData = directoryData.searchData;
    var safeData = directoryData.safeData;
    var counterData = directoryData.counterData;
    var totalCount = directoryData.totalCount;
    var searchableMembersData = directoryData.membersData[0];
    var searchDataForMember = new Array();
    
    for (i = 0; i < totalCount; i++)
    {
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c1);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c2);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c3);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c4);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c5);
      
      searchData.push(searchDataForMember.join(' '));
      safeData.push(searchDataForMember.join(' '));


      searchDataForMember = new Array();
    }
  }
  function pushColumnToSearchableData(searchData, column)
  {
    /*debug*///log('pushColumnToSearchableData');

    if (!column)
      {
        return;
      }
      
      for (var j = 0; j < column.length; j++)
      {
        if (column[j].fft != 12)// picture
        {
          searchData.push(column[j].v.toLowerCase());          
        }
      }
  }


  function reloadData()
  {
    /*debug*/log('reloadData');

    disposeAllTimeouts();
    hideReload();
    hidePaging();
    setFound();
    disableSearch();
    lastSeachBoxAskValue = '';
    clearCache();
    setDirectoryOutput();
    notifyGadgetChanged();

    setTimeout(loadRecordsAsync, 10);
  }
//------------
//filter stuff
//------------
	function isFilterEnabled()
	{
    /*debug*/log('isFilterEnabled');

    return $("idFilterColumns");
	}

	function initFilter()
	{
    /*debug*/log('initFilter');

    var i, j;
	var optColumn;
	var options;

	for (i = 1; i <= maxFilterQty; i++)
	{
		optColumn = $("idF"+i+"Options");

		if (optColumn)
		{
			$("idF"+i+"Change").onclick=changeClick;
			filterOptionCounters[i-1]=new Array();
			filterOptionNames[i-1]=new Array();
	 		options=WA.$$('.optionLink', optColumn);

      if (options)
      {
        for (j = 0; j < options.length; j++)
        {
          options[j].onclick = optionClick;
          filterOptionCounters[i - 1]['opt' + options[j].getAttribute("fId", 0)] = 0;
          filterOptionNames[i - 1]['opt' + options[j].getAttribute("fId", 0)] = options[j].innerHTML;
        }
      }
		}
 	}
  }


  function optionClick()
  {
    /*debug*/log('optionClick');

    var curRow = this.parentNode.parentNode.parentNode.id.substr(3,1);
  	  $("idF"+curRow+"Options").style.display = "none";
  	  $("idF"+curRow+"Selected").style.display = "block";
  	  $("idF"+curRow+"SelName").innerHTML = '&raquo; ' + filterOptionNames[curRow - 1]['opt'+this.getAttribute("fId", 0)];
  	  filterValues[curRow-1] = this.getAttribute("fId", 0);
  	  applyFilters();
  	  return false;
  }

  function changeClick()
  {
    /*debug*/log('changeClick');

    var curRow = this.id.substr(3,1);
  	  $("idF"+curRow+"Options").style.display = "block";
  	  $("idF"+curRow+"Selected").style.display = "none";
  	  $("idF"+curRow+"SelName").innerHTML = "";
  	  filterValues[curRow-1] = null;
  	  applyFilters();
  	  return false;
  }

	function filterIsOn()
	{
    /*debug*/log('filterIsOn');

    var i;
		var l = filterValues.length;
		var cnt = 0;

		for (i = 0; i < l; i++)
		{
			if (filterValues[i] != null)
			{
				cnt++;
			}
		}
		return cnt;
	}

	function applyFilters()
	{
    /*debug*/log('applyFilters');

    var i, j, l;
		var matchCount = 0;
		var totalCount = directoryData.totalCount;
		var filterVal = filterIsOn();

		//preparing
		setFound();
	    setMessage(MemberDirectoryListRenderer.labels.searchingKeywords);

		for (i = 0; i < totalCount; i++)
		{
			directoryData.searchData[i]=directoryData.safeData[i];
		}

		if (filterVal)
		{
			for (i = 0; i < totalCount; i++)
			{
				matchCount = 0;

				for (l = 1; l < maxFilterQty+1; l++)
				{
					if (filterValues[l-1] == null) //no filter is set for column
					{
						matchCount++;
						continue;
					}

					var memberFilterValue = directoryData.membersData[0][i]['f' + l];

					if (!memberFilterValue)
					{
						continue;
					}

					for (j = 0; j < memberFilterValue.length; j++)  
					{
						if (memberFilterValue[j] == filterValues[l-1])
						{
							matchCount++;
							break;
						}
					}
				}

				if (matchCount != maxFilterQty)
				{
					directoryData.searchData[i] = '';
				}
			}
		}


		searchAndRenderAsync(getSearchKeywords());
    notifyGadgetChanged();
	}


	function updateCounters(searchInResults)
	{
    /*debug*/log('updateCounters');

    var i, l, m;
		var memberFilterValue;

		if (!isFilterEnabled) return;

		var finalIndex = searchInResults ? searchAsyncData.foundIndexes.length : directoryData.totalCount;
		
		resetCounters();

		for (i = 0; i < finalIndex; i++)
		{
			for (l = 1; l < maxFilterQty+1; l++)
			{
				if (filterValues[l-1]) //filter is set, why bother updating invisible numbers?
				{
					continue;
				}
				memberFilterValue = searchInResults ? directoryData.membersData[0][searchAsyncData.foundIndexes[i]]['f' + l] : directoryData.membersData[0][i]['f' + l];

				if (memberFilterValue)
				{
					for (m = 0; m < memberFilterValue.length; m++)
					{
					    if (filterOptionCounters[l-1])
					    {
						    filterOptionCounters[l-1]['opt'+memberFilterValue[m]]++;
						}
					}
				}

			}
		}

		drawCounters();
	}


	function resetCounters()
	{
    /*debug*/log('resetCounters');

    var l, m;

		for (l = 0; l < filterOptionCounters.length; l++)
		{
			if (filterOptionCounters[l])
			{
				for (m in filterOptionCounters[l])
				{
					if (typeof(filterOptionCounters[l][m]) == "number")
					{
						filterOptionCounters[l][m] = 0;
					}
				}
			}
		}
	}

	function drawCounters()
	{
    /*debug*/log('drawCounters');

    var i, j;
		var optColumn;
		var options;
		var qty, name;
		var whereIsSpace;

	    for (i = 1; i <= maxFilterQty; i++)
	    {
	    	optColumn=jq$("#idF"+i+"Options");


		 	if (optColumn)
		 	{
		 		options = jq$("#idF"+i+"Options .optionLink");

        if (options)
        {
          for (j = 0; j < options.length; j++)
          {
            qty = filterOptionCounters[i - 1]['opt' + options[j].getAttribute("fId", 0)] * 1;
            name = WA.String.gtrim(filterOptionNames[i - 1]['opt' + options[j].getAttribute("fId", 0)]);


            whereIsSpace = name.lastIndexOf(' ');

            if (whereIsSpace >= 0)
            {
              name = name.slice(0, whereIsSpace) + ' <nobr>' + name.slice(whereIsSpace + 1);
            } else
            {
              name = '<nobr>' + name;
            }

            options[j].innerHTML = name + ' ' + '<span class="optionCounter">(' + qty + ')</span></nobr>';
            options[j].className = (qty && qty > 0) ? "optionLink" : "optionLink emptyName";
          }
        }
		 	}
		}
	}

  /*****************************************************/
  /***   SEARHCING                                   ***/
  /*****************************************************/

  function searchAndRenderAsync(keywords, renderStartIndex)
  {
    /*debug*/log('searchAndRenderAsync');

    terminateAsyncSearch();

    directoryData.lastKeywords = keywords;

    if (!searchAsyncData)
    {
      searchAsyncData = new Object();
      searchAsyncData.sessionId = 0;
    }

    var sessionId = searchAsyncData.sessionId + 1;
    searchAsyncData.sessionId = sessionId;
    searchAsyncData.inProgress = true;
    searchAsyncData.foundCount = 0;
    searchAsyncData.nextIndex = 0;
    searchAsyncData.sourceKeywords = keywords;
    searchAsyncData.keywordsArray = convertKeywordsToArray(keywords);
    searchAsyncData.foundIndexes = new Array();
    searchAsyncData.pagerHtml = null;
    
    if (searchAsyncData.keywordsArray.length > 0 || filterIsOn())
    {
      searchAsyncTimeout = setTimeout(function() { searchAsync(sessionId, renderStartIndex); }, 5);
    }
    else
    {
      searchAsyncData.foundCount = directoryData.totalCount;      
      searchAsyncData.nextIndex = searchAsyncData.foundCount;
      searchAsyncData.inProgress = false;
      renderAsync(renderStartIndex);
      updateCounters(false);
    }
  }




  function searchAsync(sessionId, renderStartIndex)
  {
    /*debug*/log('searchAsync');

    if (searchAsyncTimeout)
      clearTimeout(searchAsyncTimeout);
  
    if (!searchAsyncData || sessionId != searchAsyncData.sessionId)
    {
      terminateAsyncSearch();
      return;
    }
    
    if (searchAsyncData.nextIndex >= directoryData.totalCount)
    {
      terminateAsyncSearch();
      searchAsyncData.inProgress = false;
      //search is over
      updateCounters(true);
      renderAsync(renderStartIndex);
      return;
    }

    var keywordsArray = searchAsyncData.keywordsArray;
    var searchIndexData = directoryData.searchData;
    var stopCycleIndex = Math.min(directoryData.totalCount, searchAsyncData.nextIndex + searchAsyncMaxRecords);

    var keywordsArrayLength = keywordsArray.length;


    for (i = searchAsyncData.nextIndex; i < stopCycleIndex; i++)
    {

      var searchIndexDataLength = searchIndexData[i].length;

      if (searchIndexDataLength == 0)
      {
      	  continue;
      }

      for (j = 0; j < keywordsArrayLength; j++)
      {
        if (searchIndexData[i].indexOf(keywordsArray[j]) == -1)
          break;
      }
      
      if (j == keywordsArrayLength)
      {
        searchAsyncData.foundCount++;
        searchAsyncData.foundIndexes.push(i);
      }
    }

    searchAsyncData.nextIndex = stopCycleIndex;

    searchAsyncTimeout = setTimeout(function() { searchAsync(sessionId, renderStartIndex); }, searchAsyncTimeoutMs);
  }
  
  



  function terminateAsyncSearch()
  {
    /*debug*/log('terminateAsyncSearch');

    if (searchAsyncTimeout)
      clearTimeout(searchAsyncTimeout);
  }
  
  /*****************************************************/
  /***   RENDERING                                   ***/
  /*****************************************************/

  function renderAsync(startIndex)
  {
    /*debug*/log('renderAsync');

    if (!searchAsyncData || searchAsyncData.inProgress)
      return;
    
    hidePaging();
    //setMessage(MemberDirectoryListRenderer.labels.displayingFound);

    startIndex = parseInt(startIndex);
    if (!startIndex)
      startIndex = 0;

    setTimeout(function() { render(startIndex); }, 10);
  }
  function prepareHeader()
  {
    /*debug*/log('prepareHeader');

    var layout = directoryData.layout;
    var headerTemplate = new Array();
    
    headerTemplate.push(tableStart);
    addHeaderIfReq(headerTemplate, layout.c1);
    addHeaderIfReq(headerTemplate, layout.c2);
    addHeaderIfReq(headerTemplate, layout.c3);
    addHeaderIfReq(headerTemplate, layout.c4); 
    headerTemplate.push(headerEnd);
    
    return headerTemplate.join('');
  }
  function addHeaderIfReq(headerTemplate, column)
  {
    /*debug*/log('addHeaderIfReq');

    if (column.v == true) // visible
    {
      headerTemplate.splice(headerTemplate.length, 0,
        thTemplate[0], column.w, // width
        thTemplate[1], column.h, // header
        thTemplate[2]);
    }
  }  
  function render(startIndex)
  {
    /*debug*/log('render');

    if (!searchAsyncData || searchAsyncData.inProgress)
    {
      notifyGadgetChanged();
      return;
    }
    
    directoryData.lastRenderIndex = startIndex;

    var keywordsDefined = searchAsyncData.keywordsArray.length > 0 || filterIsOn();
    
    if (searchAsyncData.foundCount > 0)
    {
      var i;  
      var a = new Array();
      
      a.splice(a.length, 0, prepareHeader());

      stopRenderIndex = Math.min(startIndex + maxDisplayRecords, searchAsyncData.foundCount);

      var realIndex,
          detailsUrlTooltip = MemberDirectoryListRenderer.labels.detailsUrlTitle,
          searchableMembersData = directoryData.membersData[0],
          otherMembersData = directoryData.membersData[1],
          detailsUrlPrefix = MemberDirectoryListRenderer.detailsUrlTemplate,
          formId = MemberDirectoryListRenderer.FormId;
     
      for (i = startIndex; i < stopRenderIndex; i++)
      {
        realIndex = keywordsDefined ? searchAsyncData.foundIndexes[i] : i;
        a.splice(a.length, 0, 
          memberTemplate[0], createDetailsUrl(detailsUrlPrefix, otherMembersData[realIndex], formId),
          memberTemplate[1], prepareColumn(searchableMembersData[realIndex], otherMembersData[realIndex]),
          memberTemplate[2]
        );
      }

      a.push(footerTemplate);
      
      setDirectoryOutput(a.join(''));
      a = null;
    }
    else
    {
      // no records
      setDirectoryOutput(keywordsDefined ?
        MemberDirectoryListRenderer.labels.noMembersFound.replace(/\{0\}/g, searchAsyncData.sourceKeywords) :
        MemberDirectoryListRenderer.labels.noMembersInDatabase, true);
    }

    setMessage();
    setFound(searchAsyncData.foundCount);
    
    if (isCached)
      showReload();
    
    renderPager(startIndex);
    notifyGadgetChanged();
  }


  function notifyGadgetChanged()
  {
    /*debug*/log('notifyGadgetChanged');

    WA.throttle(doNotifyGadgetChanged, notifyGadgetChangedTimeout);
  }


  function doNotifyGadgetChanged()
  {
    /*debug*/log('doNotifyGadgetChanged');

    WA.Gadgets.notifyGadgetChanged();
  }


  function createDetailsUrl(detailsUrlPrefix, memberId, formId)
  {
    /*debug*///log('createDetailsUrl');

    var url;

    if (formId == 0)
    {
      url = detailsUrlPrefix + memberId;
    } 
    else
    {
      url = detailsUrlPrefix + memberId + '/' + formId; 
    }

    return url;
  }
  function prepareColumn(memberData, memberId)
  {
    /*debug*/log('prepareColumn');

    var layout = directoryData.layout; 
    var memberTdTemplate = new Array();
    var detailsUrlTooltip = MemberDirectoryListRenderer.labels.detailsUrlTitle;    
    
    var columnsCount = new Object();
    columnsCount.value = 0;
    addColumnIfReq(layout.c1, memberData.c1, memberTdTemplate, columnsCount, memberId, true);
    addColumnIfReq(layout.c2, memberData.c2, memberTdTemplate, columnsCount, memberId, false);
    addColumnIfReq(layout.c3, memberData.c3, memberTdTemplate, columnsCount, memberId, false);
    addColumnIfReq(layout.c4, memberData.c4, memberTdTemplate, columnsCount, memberId, false);
    addBottomRowIfReq(layout.c5, memberData.c5, memberTdTemplate, columnsCount, memberId, false);

    return memberTdTemplate.join('');
  }
  function addColumnIfReq(layoutColumn, memberColumn, memberTdTemplate, columnsCount, memberId, makeLink)
  {
    /*debug*///log('addColumnIfReq');

    if (layoutColumn.v != true) 
    {
      return;
    }
    
    ++columnsCount.value;
  
    memberTdTemplate.splice(memberTdTemplate.length, 0, 
      tdTemplate[0], 'memberDirectoryColumn' + columnsCount.value,
      tdTemplate[1], layoutColumn.w,
      tdTemplate[2], getValueFromColumn(memberColumn, memberId, makeLink),
      tdTemplate[3]);
  }    
  function addBottomRowIfReq(bottomRow, memberColumn, memberTdTemplate, columnsCount, memberId)
  {
    /*debug*///log('addBottomRowIfReq');

    var url = MemberDirectoryListRenderer.detailsUrlTemplate + memberId;
    
    if (bottomRow.v != true) // visible
    {
      return;
    }
    
    memberTdTemplate.splice(memberTdTemplate.length, 0, 
      bottomRowTemplate[0], url,
      bottomRowTemplate[1], columnsCount.value,
      bottomRowTemplate[2], getValueFromColumn(memberColumn, memberId, false),
      bottomRowTemplate[3]);
  }    
  
  function getValueFromColumn(memberColumn, memberId, makeLink)
  {
    /*debug*///log('getValueFromColumn');

    var inner = '';
      
    if (!memberColumn)
    {
      return inner;
    }

    for (var i = 0; i < memberColumn.length; i++)
    {
      var ar;
      var bundls = '';
      var value = memberColumn[i].v;

      if (i == 0)
      {
        var ix = value.lastIndexOf(' (');
        if (ix >= 0)
        {
          bundls = value.substr(ix);
          value = value.substr(0, ix);
        }
      }

      var fieldType = memberColumn[i].fft;
      
      // check for email
      if(fieldType != 5 && emailReplace1.test(BonaPage.decodeHtml(value))) 
      {
        value = BonaPage.decodeHtml(value).replace(emailReplace1, emailReplaceTemplate);
      }
      
      if (fieldType == 12) //Picture
      {
        if (value != '')
        {
          ar = new Array();
          ar.splice(ar.length, 0,
            imgTemplate[0], MemberDirectoryListRenderer.imgTemplateRelativePath,
            imgTemplate[1], memberId,
            imgTemplate[2], value,
            imgTemplate[3], (new Date()).getTime(),
            imgTemplate[4]);
          value = ar.join('');
        }
      }
      else if (fieldType == 5 && !(makeLink == true && i == 0)) // Email
      {
        if (value != '')
        {
          ar = new Array();
          ar.splice(ar.length, 0,
            emailTemplate[0], value,
            emailTemplate[1], value,
            emailTemplate[2]);
          value = ar.join('');
          ar = new Array();
        }
      }
      else if (value != '' && !(makeLink == true && i == 0))
      {
        var reLinkReplace1 = new RegExp("(\\s|^|\\>|\\<|\\}|\\]|\\[|\\{)((http|https|ftp)://[^\\n\\s\\<\\>\\[\\{\\]\\}]+)", "gi");
        var reLinkReplace2 = new RegExp("(\\s|^|\\>|\\<|\\}|\\]|\\[|\\{)(([io]?www\.|ftp\.)[^\\n\\s\\<\\>\\[\\{\\]\\}]+)", "gi");
        var processedValue = 
        value = (reLinkReplace1.test(value))
          ? value.replace(reLinkReplace1, '$1<a onclick="window.open(\'$2\');BonaPage.stopEvent(event);" href="$2" target=_blank>$2</a>')
          : value.replace(reLinkReplace2, '$1<a onclick="window.open(\'http://$2\');BonaPage.stopEvent(event);" href="http://$2" target=_blank>$2</a>');
      }

      if (i == 0)
      {
        if (makeLink == true)
        {
          var ar = new Array();
          ar.splice(ar.length, 0,
            linkTemplate[0], MemberDirectoryListRenderer.labels.detailsUrlTitle,
            linkTemplate[1], createDetailsUrl(MemberDirectoryListRenderer.detailsUrlTemplate, memberId, MemberDirectoryListRenderer.FormId),
            linkTemplate[2], value == '' ? MemberDirectoryListRenderer.labels.viewDetails : value, bundls,
            linkTemplate[3]);
          value = ar.join('');
        }
        else
        {
          value += bundls;
        }
      }

      if (value != '')
      {
        inner += '<div class=\'memberValue\'>' + value + '</div>';
      }
    }
    
    return inner;
  }
  function renderPager(startIndex)
  {
    /*debug*/log('renderPager');

    if (!searchAsyncData || searchAsyncData.inProgress || searchAsyncData.foundCount <= maxDisplayRecords)
    {
      hidePaging();
      return;
    }

    if (!searchAsyncData.pagerHtml)
    {
      var i;
      var a = new Array();
      var useSearchData = (searchAsyncData.keywordsArray.length > 0) || filterIsOn();
      var value;
      var firstIndex;
      var lastIndex;
      var recordsFirstIndex;
      var recordsLastIndex;

      a.push(pagerTemplate[0]);
      
      for (i = 0; i < searchAsyncData.foundCount; i = i + maxDisplayRecords)
      {
        value = i;
        firstIndex = i;
        lastIndex = Math.min(searchAsyncData.foundCount - 1, i + maxDisplayRecords - 1);
        recordsFirstIndex = firstIndex + 1;
        recordsLastIndex = lastIndex + 1;

        if (useSearchData)
        {
          firstIndex = searchAsyncData.foundIndexes[firstIndex];
          lastIndex = searchAsyncData.foundIndexes[lastIndex];
        }

        a.splice(a.length, 0, 
          pagerOptionTemplate[0], value,
/*
          pagerOptionTemplate[1], preparePagerRangeWord(firstIndex, true),
          pagerOptionTemplate[2], preparePagerRangeWord(lastIndex, false),
          pagerOptionTemplate[3], recordsFirstIndex,
          pagerOptionTemplate[4], recordsLastIndex,
*/
          pagerOptionTemplate[1], recordsFirstIndex,
          pagerOptionTemplate[2], recordsLastIndex,
          pagerOptionTemplate[3]);
      }
      
      a.push(pagerTemplate[1]);
      searchAsyncData.pagerHtml = a.join('');

    }


    if (isPagerHidden())
    {
      setPaging(searchAsyncData.pagerHtml, startIndex);
    }
  }
  
  function preparePagerRangeWord(index, appendSpacesBefore)
  {
    /*debug*/log('preparePagerRangeWord');

    var v = directoryData.membersData[0][index].c1[0].v;
    var value = v == '' ? 'View details' : v;
    var word = value.split(',')[0].substr(0, pagerRangeNameLength);
    word = word.replace(/\s/g, "&nbsp;");
    return word;
  }
  
  function pagerChanged(pagerSelect)
  {
    /*debug*/log('pagerChanged');

    try { $(MemberDirectoryListRenderer.searchBoxId).focus(); } catch (e) {}
    var startIndex = pagerSelect.options[pagerSelect.selectedIndex].value;
    render(parseInt(startIndex));
  }
  
  /*****************************************************/
  /***   MEMBER RECORD EVENTS                        ***/
  /*****************************************************/

  function highlightRowAndNext(memberTr)
  {
    /*debug*/log('highlightRowAndNext');

    SetClassToRowAndNext(memberTr, 'hover');
  }
  function normlightRowAndNext(memberTr)
  {
    /*debug*/log('normlightRowAndNext');

    SetClassToRowAndNext(memberTr, 'normal');
  }
  function SetClassToRowAndNext(memberTr, className)
  {
    /*debug*/log('SetClassToRowAndNext');

    memberTr.className = className;
    
    var nextSibling = memberTr.nextSibling;
    
    if (!nextSibling)
    {
      return;
    }
    
    while (nextSibling.nodeType != 1)
    {
      nextSibling = nextSibling.nextSibling;
        
      if (!nextSibling)
      {
        return;
      }
    }
    
    if (nextSibling.getAttribute('bottomrow', 0) == 'true')
    {
        nextSibling.className = className;
    }
  }  
  function highlightRowAndPrev(memberTr)
  {
    /*debug*/log('highlightRowAndPrev');

    SetClassToRowAndPrev(memberTr, 'hover');
  }

  function normlightRowAndPrev(memberTr)
  {
    /*debug*/log('normlightRowAndPrev');

    SetClassToRowAndPrev(memberTr, 'normal');
  }
  
  function SetClassToRowAndPrev(memberTr, className)
  {
    /*debug*/log('SetClassToRowAndPrev');

    memberTr.className = className;
    
    var previousSibling = memberTr.previousSibling;
    
    if (!previousSibling)
    {
      return;
    }
    
    while (previousSibling.nodeType != 1)
    {
      previousSibling = previousSibling.previousSibling;
        
      if (!previousSibling)
      {
        return;
      }
    }
    
    previousSibling.className = className;
  }  

  function redirectToMemberDetails(url)
  {
    /*debug*/log('redirectToMemberDetails');

    window.location = url;
    return false;
  }
  
  MemberDirectoryListRenderer.GetSelectedMembersId  = function()
  {
    /*debug*/log('GetSelectedMembersId');

    if (!searchBoxAskTimeout) {
      return false;
    }
    var element = document.getElementById(MemberDirectoryListRenderer.selectedMembersFieldId);
    if (element == null) {
      return false;
    }
    try {
      element.value = GetCurrentMembersSelectionIdStr();
      if (element.value == '') {
        return false;
      }
    } catch (error) {
    }
  }
  
  MemberDirectoryListRenderer.ValidateEmailMembersList = function(sender, args) {
    /*debug*/log('ValidateEmailMembersList');

    var element = document.getElementById(MemberDirectoryListRenderer.selectedMembersFieldId);
      if (element == null || element.value == '') {
         args.IsValid = false;
      }
  }
  
  function GetCurrentMembersSelectionIdStr()
  {
    /*debug*/log('GetCurrentMembersSelectionIdStr');

    if (!searchAsyncData || searchAsyncData.inProgress)
          return;
      var otherMembersData = directoryData.membersData[1];
      if (searchAsyncData.foundCount == 0) {
        return '';
      }
      var realIndex;
      var keywordsDefined = searchAsyncData.keywordsArray.length > 0;
      var result = '';
      var foundCount = searchAsyncData.foundCount;
      for (var i = 0; i < foundCount; i++) {
        realIndex = keywordsDefined ? searchAsyncData.foundIndexes[i] : i;
        if (otherMembersData[realIndex][1] != 0) {
          result += otherMembersData[realIndex][0];
          if (foundCount - i > 1)
           result += ',';
        }
      }
      return result;
  }

// end of MemberDirectoryListRenderer singleton
}) ();
jq$(function(){var service=WaOnlineStoreCart.getInstance().getService();service.savingCompleted=showCart;var cart=service.localLoad()||{};showCart(cart);function showCart(cart){if(!cart.items||cart.items.length===0){jq$(".cart-gadget_count").text("");jq$(".cart-gadget_quantity").removeClass("cart-gadget_quantity__filled");return;}var quantity=0;cart.items.forEach(function(item){quantity+=item.quantity;});jq$(".cart-gadget_count").text(quantity);jq$(".cart-gadget_quantity").addClass("cart-gadget_quantity__filled");return quantity;}});(function(){if(!window.PhotoAlbumGadget){window.PhotoAlbumGadget={};}var albumParam="";var processingText="Please wait...";var deleteConfirmation="Are you sure you want to delete?";var deletePhotoConfirmation="Are you sure you want to delete this photo?";var saveAction=false;var photosHolder=false;var photosHolderHeight=false;var titleTextBox=false;var descriptionTextBox=false;var saveButton=false;var altSaveButton=false;var saveLinkButton=false;var deleteButton=false;var cancelButton=false;var uploadButton=false;var uploadAction=false;var viewModeRadioContainer=false;var uploadButtonContainer=false;var descriptionContainer=false;var descriptionHeightUrlKey=false;var countPhotosPerRowUrlKey=false;var pagingKey=false;var saveAlbumDialogInited=false;var uploadPhotosDialogInited=false;var photoItemId=false;var photoItemTimeout=false;var actionIsRunning=false;var pendingSender=false;var pendingImageDivId=false;var pendingFullDescriptionDivId=false;var pendingSmallDescriptionDivId=false;PhotoAlbumGadget.InitPhotoGallery=initPhotoGallery;PhotoAlbumGadget.InitJsFunctions=initJsFunctions;PhotoAlbumGadget.Page_Parsed=pageParsed;PhotoAlbumGadget.Page_Unloading=pageUnloading;PhotoAlbumGadget.CloseSaveAlbumDialog=closeSaveAlbumDialog;PhotoAlbumGadget.CloseUploadPhotosDialog=closeUploadPhotosDialog;PhotoAlbumGadget.Get_SaveAction=getSaveAction;PhotoAlbumGadget.Get_SaveTitle=getSaveTitle;PhotoAlbumGadget.Get_SaveDescription=getSaveDescription;PhotoAlbumGadget.Get_SaveButton=getSaveButton;PhotoAlbumGadget.Get_DeleteButton=getDeleteButton;PhotoAlbumGadget.Get_UploadButton=getUploadButton;PhotoAlbumGadget.Get_UploadAction=getUploadAction;PhotoAlbumGadget.ProcessingButton_OnClick=processingButtonClick;PhotoAlbumGadget.DeleteButton_OnClick=deleteButtonClick;PhotoAlbumGadget.UploadButton_OnClick=uploadButtonClick;PhotoAlbumGadget.SaveButton_OnClick=saveButtonClick;PhotoAlbumGadget.ImageMenu_OnMouseOver=imageMenuMouseOver;PhotoAlbumGadget.ImageMenu_OnMouseOut=imageMenuMouseOut;PhotoAlbumGadget.MenuButton_OnMouseOver=menuButtonMouseOver;PhotoAlbumGadget.MenuButton_OnMouseOut=menuButtonMouseOut;PhotoAlbumGadget.MenuButton_OnClick=menuButtonClick;PhotoAlbumGadget.NavigateToList=navigateToList;PhotoAlbumGadget.CheckLength=checkLength;function initPhotoGallery(p){if(p.albumParam){albumParam=p.albumParam;}if(p.processingText){processingText=p.processingText;}if(p.deleteConfirmation){deleteConfirmation=p.deleteConfirmation;}if(p.deletePhotoConfirmation){deletePhotoConfirmation=p.deletePhotoConfirmation;}if(p.photosHolderId){photosHolder=WA.$(p.photosHolderId,window);}if(p.saveActionId){saveAction=WA.$(p.saveActionId,window);}if(p.titleTextBoxId){titleTextBox=WA.$(p.titleTextBoxId,window);}if(p.descriptionTextBoxId){descriptionTextBox=WA.$(p.descriptionTextBoxId,window);}if(p.saveButtonId){saveButton=WA.$(p.saveButtonId,window);}if(p.altSaveButtonId){altSaveButton=WA.$(p.altSaveButtonId,window);}if(p.saveLinkButtonId){saveLinkButton=WA.$(p.saveLinkButtonId,window);}if(p.deleteButtonId){deleteButton=WA.$(p.deleteButtonId,window);}if(p.cancelButtonId){cancelButton=WA.$(p.cancelButtonId,window);}if(p.uploadButtonId){uploadButton=WA.$(p.uploadButtonId,window);}if(p.uploadActionId){uploadAction=WA.$(p.uploadActionId,window);}if(p.viewModeRadioContainerId){viewModeRadioContainer=WA.$(p.viewModeRadioContainerId,window);}if(p.uploadButtonContainerId){uploadButtonContainer=WA.$(p.uploadButtonContainerId,window);}if(p.descriptionContainerId){descriptionContainer=WA.$(p.descriptionContainerId,window);}if(p.descriptionHeightUrlKey){descriptionHeightUrlKey=p.descriptionHeightUrlKey;}if(p.countPhotosPerRowUrlKey){countPhotosPerRowUrlKey=p.countPhotosPerRowUrlKey;}if(p.pagingUrlKey){pagingKey=p.pagingUrlKey;}}function initJsFunctions(){setDisplayInline(saveLinkButton);setDisplayInline(uploadButton);setDisplay(viewModeRadioContainer);setDisplay(uploadButtonContainer);}function pageParsed(){initJsFunctions();}function pageUnloading(){setDisabled(saveButton);setDisabled(uploadButton);setDisabled(deleteButton);if(saveLinkButton){setDisabled(saveLinkButton);setDisabled(altSaveButton);setDisabled(cancelButton);}}function setDisplay(element){if(element){element.style.display="";}}function setDisplayInline(element){if(element){element.style.display="inline";}}function setDisplayBlock(element){if(element){element.style.display="block";}}function setDisplayNone(element){if(element){element.style.display="none";}}function setDisabled(element){if(element){element.disabled=true;}}function closeSaveAlbumDialog(){PhotoAlbumsDialog.saveAlbumDialog.close();}function closeUploadPhotosDialog(){PhotoAlbumsDialog.uploadPhotosDialog.close();}function getSaveAction(){return saveAction;}function getSaveTitle(){return titleTextBox;}function getSaveDescription(){return descriptionTextBox;}function getSaveButton(){return saveButton;}function getDeleteButton(){return deleteButton;}function getUploadButton(){return uploadButton;}function getUploadAction(){return uploadAction;}function processingButtonClick(sender,otherIds){if(sender){sender.value=processingText;}if(otherIds&&otherIds.length){for(var i=0;i<otherIds.length;i++){var btn=WA.$(otherIds[i],window);if(btn&&btn.id!=sender.id){btn.disabled=true;}}}return true;}function deleteButtonClick(sender,otherIds){if(confirm(deleteConfirmation)){return processingButtonClick(sender,otherIds);}return false;}function uploadButtonClick(){if(!uploadPhotosDialogInited){PhotoAlbumsDialog.uploadPhotosDialog.initialize({albumParam:albumParam});uploadPhotosDialogInited=true;}if(uploadAction.value=="1"){uploadAction.value="";if(uploadButton){uploadButton.value=processingText;}WA.reloadCurrentPage(pagingKey,window);return;}PhotoAlbumsDialog.uploadPhotosDialog.open(null,{"PhotoGallery":PhotoGallery});}function saveButtonClick(){if(!saveAlbumDialogInited){PhotoAlbumsDialog.saveAlbumDialog.initialize({albumParam:albumParam});saveAlbumDialogInited=true;}if(saveAction.value=="1"){saveAction.value="";if(saveButton){saveButton.value=processingText;}return true;}PhotoAlbumsDialog.saveAlbumDialog.open(null,{"PhotoGallery":PhotoGallery});return false;}function imageMenuMouseOver(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(photoItemTimeout&&photoItemId==imageDivId){clearTimeout(photoItemTimeout);photoItemTimeout=false;return;}if(actionIsRunning){return;}sender.parentNode.style.height=sender.offsetHeight+"px";WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhotoHover";sender.className="photoInnerContainerOver";sender.style.zIndex=sender.style.zIndex+1;var fullDescriptionDiv=WA.$(fullDescriptionDivId,window);setDisplayBlock(fullDescriptionDiv);setDisplayNone(WA.$(smallDescriptionDivId,window));if(photosHolder){photosHolderHeight=photosHolder.offsetHeight;if(!photosHolder.Y){WA.Dimensions.getXY(photosHolder);}if(!fullDescriptionDiv.Y){WA.Dimensions.getXY(fullDescriptionDiv);}var outHeigth=fullDescriptionDiv.Y+fullDescriptionDiv.offsetHeight-photosHolder.Y-photosHolderHeight;if(outHeigth>0){photosHolder.style.height=(photosHolderHeight+outHeigth+10)+"px";}}}function doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhoto";sender.className="photoInnerContainer";sender.style.zIndex=sender.style.zIndex-1;setDisplayNone(WA.$(fullDescriptionDivId,window));setDisplayBlock(WA.$(smallDescriptionDivId,window));if(photosHolderHeight&&photosHolder.offsetHeight>photosHolderHeight){photosHolder.style.height=photosHolderHeight+"px";}photoItemId=false;photoItemTimeout=false;}function imageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(actionIsRunning){if(!pendingSender){pendingSender=sender;pendingImageDivId=imageDivId;pendingFullDescriptionDivId=fullDescriptionDivId;pendingSmallDescriptionDivId=smallDescriptionDivId;}return;}if(photoItemTimeout&&photoItemId==imageDivId){return;}photoItemId=imageDivId;photoItemTimeout=setTimeout(function(){doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId);},10);}function menuButtonMouseOver(sender){sender.className="overButton";}function menuButtonMouseOut(sender){sender.className="outButton";}function menuButtonClick(linkId,secondButtonId,processingContainerId,confirmVariableName){var linkobj=WA.$(linkId,window);if(linkobj){setDisplayNone(linkobj);var secondButton=WA.$(secondButtonId,window);var processingContainer=WA.$(processingContainerId,window);setDisplayNone(secondButton);setDisplayBlock(processingContainer);if(confirmVariableName){actionIsRunning=true;if(!confirm(eval(confirmVariableName))){actionIsRunning=false;setDisplayNone(processingContainer);setDisplay(secondButton);setDisplay(linkobj);if(pendingSender){imageMenuMouseOut(pendingSender,pendingImageDivId,pendingFullDescriptionDivId,pendingSmallDescriptionDivId);pendingSender=false;}return;}}actionIsRunning=false;eval(linkobj.href.substr(11).replace(/\%20/g," ").replace(/\%22/g,'"'));}}function navigateToList(url){var descriptionHeight=(descriptionContainer)?descriptionContainer.offsetHeight:0;var countPhotosPerRow=0;if(photosHolder){var y=0;var bulets=photosHolder.getElementsByTagName("LI");for(var i=0;i<bulets.length;i++){WA.Dimensions.getXY(bulets[i]);if(i==0){y=bulets[i].Y;}else{if(y<bulets[i].Y){countPhotosPerRow=i;break;}}}}if(descriptionHeightUrlKey&&countPhotosPerRowUrlKey){var index=url.indexOf("?",0);url=index==-1?url+"?":url+"&";url+=descriptionHeightUrlKey+"="+descriptionHeight+"&"+countPhotosPerRowUrlKey+"="+countPhotosPerRow;}url+="#photo";window.location=url;}function checkLength(e,oObject,maxLength){if(oObject.value.length<maxLength){return true;}else{var keyID=(window.event)?event.keyCode:e.keyCode;if((keyID>=37&&keyID<=40)||(keyID==8)||(keyID==46)){if(window.event){e.returnValue=true;}}else{if(window.event){e.returnValue=false;}else{e.preventDefault();}}}}})();(function(window,WA){if(!WA){return;}if(!window.PhotoAlbumsDialog){window.PhotoAlbumsDialog={};}PhotoAlbumsDialog.uploadPhotosDialog=new WA.topWindow.BonaDialogHandler({name:"PhotoAlbumsDialog_UploadPhotosDialog",dialogParameters:{clipContainerId:"idClipMainContainer",mainContainerId:"contentDiv",directURLTemplate:"/Content/Members/PhotoGallery/UploadPhotosDialog.aspx?frameMode=0{albumParam}&version="+WA.version,reloadURLTemplate:"/Content/Pictures/PhotoGallery/UploadPhotosInnerDialog.aspx?version="+WA.version+"{albumParam}",top:null,left:null,width:430,height:355,minWidth:430,minHeight:355,isMoveable:true,isResizeable:false,isModal:true,isScrollable:false,callBackParameters:{}},onDialogClose:function(){if(PhotoGallery.Get_UploadAction().value=="1"){PhotoGallery.Get_UploadButton().click();}}});})(window,window.WA);

/*compiled*/

(function()
{
  if (!window.WASiteSearchGadget)
  {
    window.WASiteSearchGadget = WASiteSearchGadget;
  }
  
  function WASiteSearchGadget(args)
  {
	var pThis = this;
    
	pThis.init = init;
	pThis.doSearch = doSearch;
  
	var model, searchBox, resultDiv, selectedTypes, timer, delay = 600,
	items, searchInProgress, thereWasAnotherRequest,
	selectedSugestion = -1; 
	
	
	model = args || {};
  
	function init()
	{
	    if (!document.getElementById(model.searchBoxId))
		{
		  throw new Error("couldn't find searchBoxId");
		}
		
		searchInProgress = false;
		thereWasAnotherRequest = false;
		
	    searchBox = jq$('#' + model.searchBoxId);
		searchBox.bind('keypress', moveToSearchPage)
		selectedTypes = model.selectedTypes;
		
		if (model.autoSuggest)
		{
		    resultDiv = jq$('#' + model.resultDivId);

			searchBox.bind('input', search)
			searchBox.bind('keydown', handleKey)
		}
	}

	function moveToSearchPage(e)
	{
		if (e.keyCode == 13) // enter
		{
			var url;

			if (selectedSugestion >= 0 && selectedSugestion < items.length)
			{
				url = items[selectedSugestion].url;
			}
			else
			{
				url = WA.String.format(model.searchTemplate, 
					encodeURIComponent(searchBox.val()),
					selectedTypes, 1);
			}
			
			window.location = url;
			return false;
		}
	}
	function handleKey(e)
	{
		if (e.keyCode == 40)  // down
		{
			setSelectedDown();
			return false;
		}
		if (e.keyCode == 38)  // up
		{
			setSelectedUp();
			return false;
		}
	}
	  
	function search() 
	{
		if (timer)
		{
		  clearTimeout(timer);
		}

		timer = setTimeout(doSearch, delay);
	}

	function doSearch()
	{
        thereWasAnotherRequest = false;
		
		selectedSugestion = -1;
		if (searchBox.val().length == 0) 
		{
		  setEmptyResult();
		  return;
		} 

		var filter = selectedTypes;
		if (filter == 0)
		{
		  setEmptyResult();
		  return;
		}

		if (searchInProgress)
		{
			thereWasAnotherRequest = true;
			return;
		}

		searchInProgress = true;
		jq$.ajax({
		  type: 'POST',
		  url: model.searchActionUrl,
		  data: JSON.stringify({ 'q' : searchBox.val(), 'types': filter, 'pageNumber' : 1, 'noPaging' : 0 , 'pageSize' : 10, titlesOnly: 1}),
		  contentType: 'application/json; charset=utf-8',
		  dataType: 'text'
		}).done(function(data)
		{
			searchInProgress = false;
			if (thereWasAnotherRequest) { doSearch(); }
			else
			{
				selectedSugestion = -1;
				var jsonData = JSON.parse( data.replace("while(1); ","","i").trim() );		  
				renderResult(jsonData);
		    }
		})
		.fail(function()
		{
			searchInProgress = false;
			if (thereWasAnotherRequest) { doSearch(); }
		});
	}

	function setEmptyResult()
	{
		resultDiv.html('');
		resultDiv.hide();
	}

	function renderResult(data)
	{
		resultDiv.show();
		items = data.entities;
		var a = [];

		for (var i = 0; i < items.length; i++)
		{
		  var o = items[i];
		  a.push('<div id="' + getSuggestionDivId(i) + '" class="item">');
		  a.push('<a class="' + o.className + '" title="' + o.tooltip + '" href="' + o.url + '"><span>' + o.title + '</span></a>');
		  a.push('</div>');
		}

		  a.push('<div id="' + getSuggestionDivId(i) + '" class="item last">');
		  a.push('<a href="' + WA.String.format(model.searchTemplate, encodeURIComponent(searchBox.val()), selectedTypes, 1) +
			'"><span>' + WA.String.format(model.GoToSearchPageTextTemplate, $('<div/>').text(searchBox.val()).html()) + '</span></a>');
		  a.push('</div>');
		resultDiv.html(a.join(''));
	}
	
	function getSuggestionDivId(i)
	{
		return model.gadgetId + '_' + i + 'Suggestion';
	}
	
	function setSelectedDown()
	{
	   if (!items || selectedSugestion >= items.length)
	   {
		return;
	   }
	   
		clearCurrentSuggestion();
		selectedSugestion++;
		setCurrentSuggestion();
	}
	
	function setSelectedUp()
	{
	   if (!items || (selectedSugestion <= 0))
	   {
		return;
	   }
	   
		clearCurrentSuggestion();
		selectedSugestion--;
		setCurrentSuggestion();
	}

	function clearCurrentSuggestion()
	{
	   if (selectedSugestion < 0)
	   {
		return;
	   }
	   
	   var div  = jq$('#' + getSuggestionDivId(selectedSugestion)); 
	   div.removeClass('selectedSuggestions');
	}
	
	function setCurrentSuggestion()
	{
	   if (selectedSugestion < 0)
	   {
		return;
	   }
	   
	   var div  = jq$('#' +  getSuggestionDivId(selectedSugestion)); 
	   div.addClass('selectedSuggestions');
	}

	init();
	}
}) ();

/*compiled*/
// Camera slideshow v1.3.3 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function($){$.fn.camera = function(opts, callback) {
	
	var defaults = {
		alignment			: 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
		
		autoAdvance			: true,	//true, false
		
		mobileAutoAdvance	: true, //true, false. Auto-advancing for mobile devices
		
		barDirection		: 'leftToRight',	//'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
		
		barPosition			: 'bottom',	//'bottom', 'left', 'top', 'right'
		
		cols				: 6,
		
		easing				: 'easeInOutExpo',	//for the complete list http://jqueryui.com/demos/effect/easing.html
		
		mobileEasing		: '',	//leave empty if you want to display the same easing on mobile devices and on desktop etc.
		
		fx					: 'random',	//'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
										//you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

		mobileFx			: '',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.

		gridDifference		: 250,	//to make the grid blocks slower than the slices, this value must be smaller than transPeriod
		
		height				: '50%',	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
		
		imagePath			: 'images/',	//he path to the image folder (it serves for the blank.gif, when you want to display videos)
		
		hover				: true,	//true, false. Puase on state hover. Not available for mobile devices
				
		loader				: 'pie',	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
		
		loaderColor			: '#eeeeee', 
		
		loaderBgColor		: '#222222', 
		
		loaderOpacity		: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
		
		loaderPadding		: 2,	//how many empty pixels you want to display between the loader and its background
		
		loaderStroke		: 7,	//the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter
				
		minHeight			: '200px',	//you can also leave it blank
		
		navigation			: true,	//true or false, to display or not the navigation buttons
		
		navigationHover		: true,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
		
		mobileNavHover		: true,	//same as above, but only for mobile devices
		
		opacityOnGrid		: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
		
		overlayer			: true,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
		
		pagination			: true,
		
		playPause			: true,	//true or false, to display or not the play/pause buttons
		
		pauseOnClick		: true,	//true, false. It stops the slideshow when you click the sliders.
		
		pieDiameter			: 38,
		
		piePosition			: 'rightTop',	//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
		
		portrait			: false, //true, false. Select true if you don't want that your images are cropped
		
		rows				: 4,
		
		slicedCols			: 12,	//if 0 the same value of cols
		
		slicedRows			: 8,	//if 0 the same value of rows
		
		slideOn				: 'random',	//next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
		
		thumbnails			: false,
		
		time				: 7000,	//milliseconds between the end of the sliding effect and the start of the nex one
		
		transPeriod			: 1500,	//lenght of the sliding effect in milliseconds
    
    randomSlide : false,
		
////////callbacks

		onEndTransition		: function() {  },	//this callback is invoked when the transition effect ends

		onLoaded			: function() {  },	//this callback is invoked when the image on a slide has completely loaded
		
		onStartLoading		: function() {  },	//this callback is invoked when the image on a slide start loading
		
		onStartTransition	: function() {  }	//this callback is invoked when the transition effect starts

    };
	
	
	function isMobile() {
		if( navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPod/i)
			){
				return true;
		}
	}

	var opts = $.extend({}, defaults, opts);
	
	var wrap = $(this).addClass('camera_wrap');
	
	wrap.wrapInner(
        '<div class="camera_src" />'
		).wrapInner(
	    '<div class="camera_fakehover" />'
		);
		
	var fakeHover = $('.camera_fakehover',wrap);
	
	fakeHover.append(
		'<div class="camera_target"></div>'
		);
	if(opts.overlayer == true){
		fakeHover.append(
			'<div class="camera_overlayer"></div>'
			)
	}
		fakeHover.append(
        '<div class="camera_target_content"></div>'
		);
		
	var loader;
	
	if(opts.loader=='pie' && $.browser.msie && $.browser.version < 9){
		loader = 'bar';
	} else {
		loader = opts.loader;
	}
	
	if(loader == 'pie'){
		fakeHover.append(
			'<div class="camera_pie"></div>'
			)
	} else if (loader == 'bar') {
		fakeHover.append(
			'<div class="camera_bar"></div>'
			)
	} else {
		fakeHover.append(
			'<div class="camera_bar" style="display:none"></div>'
			)
	}
	
	if(opts.playPause==true){
		fakeHover.append(
        '<div class="camera_commands"></div>'
		)
	}
		
	if(opts.navigation==true){
		fakeHover.append(
			'<div class="camera_prev"><span></span></div>'
			).append(
			'<div class="camera_next"><span></span></div>'
			);
	}
		
	if(opts.thumbnails==true){
		wrap.append(
			'<div class="camera_thumbs_cont" />'
			);
	}
	
	if(opts.thumbnails==true && opts.pagination!=true){
		$('.camera_thumbs_cont',wrap).wrap(
			'<div />'
			).wrap(
				'<div class="camera_thumbs" />'
			).wrap(
				'<div />'
			).wrap(
				'<div class="camera_command_wrap" />'
			);
	}
		
	if(opts.pagination==true){
		wrap.append(
			'<div class="camera_pag"></div>'
			);
	}
		
	wrap.append(
		'<div class="camera_loader"></div>'
		);
		
	$('.camera_caption',wrap).each(function(){
		$(this).wrapInner('<div />');
	});
		
                
	var pieID = 'pie_'+wrap.index('.camera_wrap'),
		elem = $('.camera_src',wrap),
		target = $('.camera_target',wrap),
		content = $('.camera_target_content',wrap),
		pieContainer = $('.camera_pie',wrap),
		barContainer = $('.camera_bar',wrap),
		prevNav = $('.camera_prev',wrap),
		nextNav = $('.camera_next',wrap),
		commands = $('.camera_commands',wrap),
		pagination = $('.camera_pag',wrap),
		thumbs = $('.camera_thumbs_cont',wrap);	

	
	var w,
		h;


	var allImg = new Array();
	$('> div', elem).each( function() { 
		allImg.push($(this).attr('data-src'));
	});
	
	var allLinks = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-link')){
			allLinks.push($(this).attr('data-link'));
		} else {
			allLinks.push('');
		}
	});
	
	var allTargets = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-target')){
			allTargets.push($(this).attr('data-target'));
		} else {
			allTargets.push('');
		}
	});
	
  var allTitles = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-title')){
			allTitles.push($(this).attr('data-title'));
		} else {
			allTitles.push('');
		}
	});
	
	var allPor = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-portrait')){
			allPor.push($(this).attr('data-portrait'));
		} else {
			allPor.push('');
		}
	});
	
	var allAlign= new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-alignment')){
			allAlign.push($(this).attr('data-alignment'));
		} else {
			allAlign.push('');
		}
	});
	
		
	var allThumbs = new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-thumb')){
			allThumbs.push($(this).attr('data-thumb'));
		} else {
			allThumbs.push('');
		}
	});
	
	var amountSlide = allImg.length;

	$(content).append('<div class="cameraContents" />');
	var loopMove;
	for (loopMove=0;loopMove<amountSlide;loopMove++)
	{
		$('.cameraContents',content).append('<div class="cameraContent" />');
		if(allLinks[loopMove]!=''){
			//only for Wordpress plugin
			var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
			if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
				dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
			} else {
				dataBox = '';
			}
			//
			$('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'" title="'+allTitles[loopMove]+'"></a>');
		}

	}
	$('.camera_caption',wrap).each(function(){
		var ind = $(this).parent().index(),
			cont = wrap.find('.cameraContent').eq(ind);
		$(this).appendTo(cont);
	});
	
	target.append('<div class="cameraCont" />');
	var cameraCont = $('.cameraCont',wrap);
	

	
	var loop;
	for (loop=0;loop<amountSlide;loop++)
	{
		cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
		var div = $('> div:eq('+loop+')',elem);
		target.find('.cameraSlide_'+loop).clone(div);
	}
	
	
	function thumbnailVisible() {
		var wTh = $(thumbs).width();
		$('li', thumbs).removeClass('camera_visThumb');
		$('li', thumbs).each(function(){
			var pos = $(this).position(),
				ulW = $('ul', thumbs).outerWidth(),
				offUl = $('ul', thumbs).offset().left,
				offDiv = $('> div',thumbs).offset().left,
				ulLeft = offDiv-offUl;
				if(ulLeft>0){
					$('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				if((ulW-ulLeft)>wTh){
					$('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				var left = pos.left,
					right = pos.left+($(this).width());
				if(right-ulLeft<=wTh && left-ulLeft>=0){
					$(this).addClass('camera_visThumb');
				}
		});
	}

  function placeThumbsOnWindowResize()
  {
    thumbnailPos();
    thumbnailVisible();
  }

  $(window).on('load resize pageshow',placeThumbsOnWindowResize);

	cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
	
	
	var started;
	
	wrap.show();
	var w = target.width();
	var h = target.height();
	
	var setPause;

  function onWindowResize()
  {
    if(started == true) {
      resizeImage();
    }
    $('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
    if(!elem.hasClass('paused')){
      elem.addClass('paused');
      if($('.camera_stop',camera_thumbs_wrap).length){
        $('.camera_stop',camera_thumbs_wrap).hide()
        $('.camera_play',camera_thumbs_wrap).show();
        if(loader!='none'){
          $('#'+pieID).hide();
        }
      } else {
        if(loader!='none'){
          $('#'+pieID).hide();
        }
      }
      clearTimeout(setPause);
      setPause = setTimeout(function(){
        elem.removeClass('paused');
        if($('.camera_play',camera_thumbs_wrap).length){
          $('.camera_play',camera_thumbs_wrap).hide();
          $('.camera_stop',camera_thumbs_wrap).show();
          if(loader!='none'){
            $('#'+pieID).fadeIn();
          }
        } else {
          if(loader!='none'){
            $('#'+pieID).fadeIn();
          }
        }
      },1500);
    }
  }
		
	$(window).on('resize pageshow', onWindowResize);
	
	function resizeImage(){	
		var res;
		function resizeImageWork(){

      if (!wrap)
      {
        if (res) clearTimeout(res);

        return;
      }

      var prevW = w,
          prevH = h;

			w = wrap.width();
			if(opts.height.indexOf('%')!=-1) {
				var startH = Math.round(w / (100/parseFloat(opts.height)));
				if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
					h = parseFloat(opts.minHeight);
				} else {
					h = startH;
				}
				wrap.css({height:h});
			} else if (opts.height=='auto') {
				h = wrap.height();
			} else {
				h = parseFloat(opts.height);
				wrap.css({height:h});
			}

			$('.camerarelative',target).css({'width':w,'height':h});

      if (w != prevW || h != prevH)
      {
        WA.Gadgets.notifyGadgetChanged();
      }

			$('.imgLoaded',target).each(function(){
				var t = $(this),
					wT = t.attr('width'),
					hT = t.attr('height'),
					imgLoadIn = t.index(),
					mTop,
					mLeft,
					alignment = t.attr('data-alignment'),
					portrait =  t.attr('data-portrait');
					
					if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
						alignment = opts.alignment;
					}
					
					if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
						portrait = opts.portrait;
					}
										
					if(portrait==false||portrait=='false'){
						if((wT/hT)<(w/h)) {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = '-'+d+'px';
									break;
								case 'center':
									mTop = '-'+d+'px';
									break;
								case 'centerRight':
									mTop = '-'+d+'px';
									break;
								case 'bottomLeft':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomCenter':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomRight':
									mTop = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
						else {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = '-'+d+'px';
									break;
								case 'topRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = '-'+d+'px';
									break;
								case 'centerRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = '-'+d+'px';
									break;
								case 'bottomRight':
									mLeft = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
					} else {
						if((wT/hT)<(w/h)) {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = d+'px';
									break;
								case 'topRight':
									mLeft = d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = d+'px';
									break;
								case 'centerRight':
									mLeft = d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = d+'px';
									break;
								case 'bottomRight':
									mLeft = d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
						else {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = d+'px';
									break;
								case 'center':
									mTop = d+'px';
									break;
								case 'centerRight':
									mTop = d+'px';
									break;
								case 'bottomLeft':
									mTop = d*2+'px';
									break;
								case 'bottomCenter':
									mTop = d*2+'px';
									break;
								case 'bottomRight':
									mTop = d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
					}
			});
		}
		if (started == true) {
			clearTimeout(res);
			res = setTimeout(resizeImageWork,200);
		} else {
			resizeImageWork();
		}
		
		started = true;
	}
	
	
	var u,
		setT;

	var clickEv,
		autoAdv,
		navHover,
		commands,
		pagination;

	var videoHover,
		videoPresent;
		
	if(isMobile() && opts.mobileAutoAdvance!=''){
		autoAdv = opts.mobileAutoAdvance;
	} else {
		autoAdv = opts.autoAdvance;
	}
	
	if(autoAdv==false){
		elem.addClass('paused');
	}

	if(isMobile() && opts.mobileNavHover!=''){
		navHover = opts.mobileNavHover;
	} else {
		navHover = opts.navigationHover;
	}

	if(elem.length!=0){
			
		var selector = $('.cameraSlide',target);
		selector.wrapInner('<div class="camerarelative" />');
		
		var navSlide;
			
		var barDirection = opts.barDirection;
	
		var camera_thumbs_wrap = wrap;


		$('iframe',fakeHover).each(function(){
			var t = $(this);
			var src = t.attr('src');
			t.attr('data-src',src);
			var divInd = t.parent().index('.camera_src > div');
			$('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
		});
		function imgFake() {
				$('iframe',fakeHover).each(function(){
					$('.camera_caption',fakeHover).show();
					var t = $(this);
					var cloneSrc = t.attr('data-src');
					t.attr('src',cloneSrc);
					var imgFakeUrl = opts.imagePath+'blank.gif';
					var imgFake = new Image();
					imgFake.src = imgFakeUrl;
					if(opts.height.indexOf('%')!=-1) {
						var startH = Math.round(w / (100/parseFloat(opts.height)));
						if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
							h = parseFloat(opts.minHeight);
						} else {
							h = startH;
						}
					} else if (opts.height=='auto') {
						h = wrap.height();
					} else {
						h = parseFloat(opts.height);
					}
					t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
					var clone = t.clone();
					t.remove();
					$(imgFake).on('click',function(){
						if($(this).css('position')=='absolute') {
							$(this).remove();
							if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoplay=1';
								} else {
									autoplay = '?autoplay=1';
								}
							} else if(cloneSrc.indexOf('dailymotion') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoPlay=1';
								} else {
									autoplay = '?autoPlay=1';
								}
							}
							clone.attr('src',cloneSrc+autoplay);
							videoPresent = true;
						} else {
							$(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
							clone.css({position:'absolute',top:0,left:0,zIndex:9});
						}
					});
				});
		}
		
		imgFake();
		
		
		if(opts.hover==true){
			if(!isMobile()){
				fakeHover.hover(function(){
					elem.addClass('hovered');
				},function(){
					elem.removeClass('hovered');
				});
			}
		}

    if (navHover==true)
    {
      $(prevNav,wrap).animate({opacity:0},0);
      $(nextNav,wrap).animate({opacity:0},0);
      $(commands,wrap).animate({opacity:0},0);

      if (isMobile())
      {
        wrap.on
        (
          'vmouseover',
          '.camera_fakehover',
          function()
          {
            $(prevNav,wrap).animate({opacity:1},200);
            $(nextNav,wrap).animate({opacity:1},200);
            $(commands,wrap).animate({opacity:1},200);
          }
        );

        wrap.on
        (
          'vmouseout',
          '.camera_fakehover',
          function()
          {
            $(prevNav,wrap).delay(500).animate({opacity:0},200);
            $(nextNav,wrap).delay(500).animate({opacity:0},200);
            $(commands,wrap).delay(500).animate({opacity:0},200);
          }
        );
      }
      else
      {
        fakeHover.hover(function(){
		  $(prevNav,wrap).stop(true);
		  $(nextNav,wrap).stop(true);
		  $(commands,wrap).stop(true);
          $(prevNav,wrap).animate({opacity:1},200);
          $(nextNav,wrap).animate({opacity:1},200);
          $(commands,wrap).animate({opacity:1},200);
        },function(){
		  $(prevNav,wrap).stop(true);
		  $(nextNav,wrap).stop(true);
		  $(commands,wrap).stop(true);
          $(prevNav,wrap).animate({opacity:0},200);
          $(nextNav,wrap).animate({opacity:0},200);
          $(commands,wrap).animate({opacity:0},200);
        });
      }
    }


    camera_thumbs_wrap.on
    (
      'click',
      '.camera_stop',
      function()
      {
        autoAdv = false;
        elem.addClass('paused');

        if ($('.camera_stop',camera_thumbs_wrap).length)
        {
          $('.camera_stop',camera_thumbs_wrap).hide();
          $('.camera_play',camera_thumbs_wrap).show();

          if (loader!='none')
          {
            $('#'+pieID).hide();
          }
        }
        else
        {
          if (loader!='none')
          {
            $('#'+pieID).hide();
          }
        }
      }
    );

    camera_thumbs_wrap.on
    (
      'click',
      '.camera_play',
      function()
      {
        autoAdv = true;
        elem.removeClass('paused');

        if ($('.camera_play',camera_thumbs_wrap).length)
        {
          $('.camera_play',camera_thumbs_wrap).hide();
          $('.camera_stop',camera_thumbs_wrap).show();

          if (loader!='none')
          {
            $('#'+pieID).show();
          }
        }
        else
        {
          if (loader!='none')
          {
            $('#'+pieID).show();
          }
        }
      }
    );
	
		if(opts.pauseOnClick==true){
			$('.camera_target_content',fakeHover).mouseup(function(){
				autoAdv = false;
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			});
		}
		$('.cameraContent, .imgFake',fakeHover).hover(function(){
			videoHover = true;
		},function(){
			videoHover = false;
		});
		
		$('.cameraContent, .imgFake',fakeHover).on('click',function(){
			if(videoPresent == true && videoHover == true) {
				autoAdv = false;
				$('.camera_caption',fakeHover).hide();
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			}
		});
		
		
	}
	
	
		function shuffle(arr) {
			for(
			  var j, x, i = arr.length; i;
			  j = parseInt(Math.random() * i),
			  x = arr[--i], arr[i] = arr[j], arr[j] = x
			);
			return arr;
		}
	
		function isInteger(s) {
			return Math.ceil(s) == Math.floor(s);
		}	
	
		if (loader != 'pie') {
			barContainer.append('<span class="camera_bar_cont" />');
			$('.camera_bar_cont',barContainer)
				.animate({opacity:opts.loaderOpacity},0)
				.css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
				.append('<span id="'+pieID+'" />');
			$('#'+pieID).animate({opacity:0},0);
			var canvas = $('#'+pieID);
			canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
			switch(opts.barPosition){
				case 'left':
					barContainer.css({right:'auto',width:opts.loaderStroke});
					break;
				case 'right':
					barContainer.css({left:'auto',width:opts.loaderStroke});
					break;
				case 'top':
					barContainer.css({bottom:'auto',height:opts.loaderStroke});
					break;
				case 'bottom':
					barContainer.css({top:'auto',height:opts.loaderStroke});
					break;
			}
			switch(barDirection){
				case 'leftToRight':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'rightToLeft':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'topToBottom':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
				case 'bottomToTop':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
			}
		} else {
			pieContainer.append('<canvas id="'+pieID+'"></canvas>');
			var G_vmlCanvasManager;
			var canvas = document.getElementById(pieID);
			canvas.setAttribute("width", opts.pieDiameter);
			canvas.setAttribute("height", opts.pieDiameter);
			var piePosition;
			switch(opts.piePosition){
				case 'leftTop' :
					piePosition = 'left:0; top:0;';
					break;
				case 'rightTop' :
					piePosition = 'right:0; top:0;';
					break;
				case 'leftBottom' :
					piePosition = 'left:0; bottom:0;';
					break;
				case 'rightBottom' :
					piePosition = 'right:0; bottom:0;';
					break;
			}
			canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
			var rad;
			var radNew;
	
			if (canvas && canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.rotate(Math.PI*(3/2));
				ctx.translate(-opts.pieDiameter,0);
			}
		
		}
		if(loader=='none' || autoAdv==false) {
			$('#'+pieID).hide();
			$('.camera_canvas_wrap',camera_thumbs_wrap).hide();
		}
		
		if($(pagination).length) {
			$(pagination).append('<ul class="camera_pag_ul" />');
			var li;
			for (li = 0; li < amountSlide; li++){
				$('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
			}
			$('.camera_pag_ul li',wrap).hover(function(){
				$(this).addClass('camera_hover');
				if($('.camera_thumb',this).length){
					var wTh = $('.camera_thumb',this).outerWidth(),
					hTh = $('.camera_thumb',this).outerHeight(),
					wTt = $(this).outerWidth();
					$('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
					$('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
				}
			},function(){
				$(this).removeClass('camera_hover');
				$('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
				$('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
			});
		}
			
	
	
		if($(thumbs).length) {
			var thumbUrl;
			if(!$(pagination).length) {
				$(thumbs).append('<div />');
				$(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
				$('> div',thumbs).append('<ul />');
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'" />');
						$('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb'));
					}
				});
			} else {
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
						$('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
						$('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
					}
				});
				wrap.css({marginBottom:$(pagination).outerHeight()});
			}
		} else if(!$(thumbs).length && $(pagination).length) {
			wrap.css({marginBottom:$(pagination).outerHeight()});
		}

	
		var firstPos = true;

		function thumbnailPos() {
			if($(thumbs).length && !$(pagination).length) {
				var wTh = $(thumbs).outerWidth(),
					owTh = $('ul > li',thumbs).outerWidth(),
					pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
					ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
					offUl = $('ul', thumbs).offset().left,
					offDiv = $('> div', thumbs).offset().left,
					ulLeft;

					if(offUl<0){
						ulLeft = '-'+ (offDiv-offUl);
					} else {
						ulLeft = offDiv-offUl;
					}
					
					
					
				if(firstPos == true) {
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					thumbnailVisible();
					/*I repeat this two lines because of a problem with iPhones*/
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					/*...*/
				}
				firstPos = false;
				
					var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
						right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
					if(left<$('li.cameracurrent', thumbs).outerWidth()) {
						left = 0;
					}
					if(right-ulLeft>wTh){
						if((left+wTh)<ulW){
							$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
						} else {
							$('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
						}
					} else if(left-ulLeft<0) {
						$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
					} else {
						$('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
						setTimeout(thumbnailVisible,100);
					}
					
			}
		}

		if($(commands).length) {
			$(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
			if(autoAdv==true){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
			} else {
				$('.camera_stop',camera_thumbs_wrap).hide();
				$('.camera_play',camera_thumbs_wrap).show();
			}
			
		}
			
			
		function canvasLoader() {
			rad = 0;
			var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
				barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

			if (loader != 'pie') {
				switch(barDirection){
					case 'leftToRight':
						$('#'+pieID).css({'right':barWidth});
						break;
					case 'rightToLeft':
						$('#'+pieID).css({'left':barWidth});
						break;
					case 'topToBottom':
						$('#'+pieID).css({'bottom':barHeight});
						break;
					case 'bottomToTop':
						$('#'+pieID).css({'top':barHeight});
						break;
				}
			} else {
				ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter); 
			}
		}
		
		
		canvasLoader();
		
		
		$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
			$(this).css('visibility','hidden');
		});
		
		opts.onStartLoading.call(this);
		
	
	/*************************** FUNCTION nextSlide() ***************************/
	
	var isRandomSlide = opts.randomSlide,
      prevVis = [-1, -1, -1];
  
  function nextSlide(navSlide)
  { 
		elem.addClass('camerasliding');
		
		videoPresent = false;
    
		var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index()),
        slideI,
        koRandom;

		if(navSlide > 0)
    { 
      slideI = navSlide - 1;
    }
    else if (isRandomSlide)
    {
      do
      {
        koRandom = (new Date()).getTime() % 10 + 1;
        
        while (koRandom--)
        {
          slideI = Math.floor(Math.random() * amountSlide);
        }
      }
      while (slideI == null || isNaN(slideI) || slideI >= amountSlide || (amountSlide > 1 && slideI === vis) || (amountSlide > 2 && slideI === prevVis[0]) || (amountSlide > 3 && slideI === prevVis[1]) || (amountSlide > 4 && slideI === prevVis[2]))
    }
    else if (vis == amountSlide - 1)
    { 
      slideI = 0;
    }
    else
    {
      slideI = vis + 1;
    }
    
    prevVis.unshift(vis);
    prevVis.pop();
				
		var slide = $('.cameraSlide:eq('+slideI+')',target);
		var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
		if( vis != slideI+1 ) {
			slideNext.hide();
		}
		$('.cameraContent',fakeHover).fadeOut(600);
		$('.camera_caption',fakeHover).show();
		
		$('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

		$('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));
		
		if(!$('.imgLoaded',slide).length){
			var imgUrl = allImg[slideI];
			var imgLoaded = new Image();
			imgLoaded.src = imgUrl; // +"?"+ new Date().getTime();
			slide.css('visibility','hidden');
			slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
			var wT, hT;
			if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
				$('.camera_loader',wrap).delay(500).fadeIn(400);
				imgLoaded.onload = function() {
					wT = imgLoaded.naturalWidth;
					hT = imgLoaded.naturalHeight;
					$(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
					$(imgLoaded).attr('width',wT);
					$(imgLoaded).attr('height',hT);
					target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
					resizeImage();
					nextSlide(slideI+1);
				};
			}
		} else {
			if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
				var imgUrl2 = allImg[(slideI+1)];
				var imgLoaded2 = new Image();
				imgLoaded2.src = imgUrl2; // +"?"+ new Date().getTime();
				slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
				imgLoaded2.onload = function() {
					wT = imgLoaded2.naturalWidth;
					hT = imgLoaded2.naturalHeight;
					$(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
					$(imgLoaded2).attr('width',wT);
					$(imgLoaded2).attr('height',hT);
					resizeImage();
				};
			}
			opts.onLoaded.call(this);
			if($('.camera_loader',wrap).is(':visible')){
				$('.camera_loader',wrap).fadeOut(400);
			} else {
				$('.camera_loader',wrap).css({'visibility':'hidden'});
				$('.camera_loader',wrap).fadeOut(400,function(){
					$('.camera_loader',wrap).css({'visibility':'visible'});
				});
			}
			var rows = opts.rows,
				cols = opts.cols,
				couples = 1,
				difference = 0,
				dataSlideOn,
				time,
				transPeriod,
				fx,
				easing,
				randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
				marginLeft = 0,
				marginTop = 0,
				opacityOnGrid = 0;
				
				if(opts.opacityOnGrid==true){
					opacityOnGrid = 0;
				} else {
					opacityOnGrid = 1;
				}
 
			
			
			var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');
				
			if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
				fx = opts.mobileFx;
			} else {
				if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
					fx = dataFx;
				} else {
					fx = opts.fx;
				}
			}
			
			if(fx=='random') {
				fx = shuffle(randomFx);
				fx = fx[0];
			} else {
				fx = fx;
				if(fx.indexOf(',')>0){
					fx = fx.replace(/ /g,'');
					fx = fx.split(',');
					fx = shuffle(fx);
					fx = fx[0];
				}
			}
			
			dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
			mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

			if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
				if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
					easing = mobileEasing;
				} else {
					easing = opts.mobileEasing;
				}
			} else {
				if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
					easing = dataEasing;
				} else {
					easing = opts.easing;
				}
			}
	
			dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
			if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
				slideOn = dataSlideOn;
			} else {
				if(opts.slideOn=='random'){
					var slideOn = new Array('next','prev');
					slideOn = shuffle(slideOn);
					slideOn = slideOn[0];
				} else {
					slideOn = opts.slideOn;
				}
			}
				
			var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
			if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
				time = parseFloat(dataTime);
			} else {
				time = opts.time;
			}
				
			var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
			if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
				transPeriod = parseFloat(dataTransPeriod);
			} else {
				transPeriod = opts.transPeriod;
			}
				
			if(!$(elem).hasClass('camerastarted')){
				fx = 'simpleFade';
				slideOn = 'next';
				easing = '';
				transPeriod = 400;
				$(elem).addClass('camerastarted')
			}
	
			switch(fx){
				case 'simpleFade':
					cols = 1;
					rows = 1;
						break;
				case 'curtainTopLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainTopRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'blindCurtainTopLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainTopRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceTop':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceBottom':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'stampede':
					difference = '-'+transPeriod;
						break;
				case 'mosaic':
					difference = opts.gridDifference;
						break;
				case 'mosaicReverse':
					difference = opts.gridDifference;
						break;
				case 'mosaicRandom':
						break;
				case 'mosaicSpiral':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'mosaicSpiralReverse':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'topLeftBottomRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomRightTopLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomLeftTopRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'topRightBottomLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'scrollLeft':
					cols = 1;
					rows = 1;
						break;
				case 'scrollRight':
					cols = 1;
					rows = 1;
						break;
				case 'scrollTop':
					cols = 1;
					rows = 1;
						break;
				case 'scrollBottom':
					cols = 1;
					rows = 1;
						break;
				case 'scrollHorz':
					cols = 1;
					rows = 1;
						break;
			}
			
			var cycle = 0;
			var blocks = rows*cols;
			var leftScrap = w-(Math.floor(w/cols)*cols);
			var topScrap = h-(Math.floor(h/rows)*rows);
			var addLeft;
			var addTop;
			var tAppW = 0;	
			var tAppH = 0;
			var arr = new Array();
			var delay = new Array();
			var order = new Array();
			while(cycle < blocks){
				arr.push(cycle);
				delay.push(cycle);
				cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
				var tApp = $('.cameraappended:eq('+cycle+')',target);
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					selector.eq(slideI).clone().show().appendTo(tApp);
				} else {
					if(slideOn=='next'){
						selector.eq(slideI).clone().show().appendTo(tApp);
					} else {
						selector.eq(vis).clone().show().appendTo(tApp);
					}
				}

				if(cycle%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(cycle%cols==0){
					tAppW = 0;
				}
				if(Math.floor(cycle/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
				tApp.css({
					'height': Math.floor((h/rows)+addTop+1),
					'left': tAppW,
					'top': tAppH,
					'width': Math.floor((w/cols)+addLeft+1)
				});
				$('> .cameraSlide', tApp).css({
					'height': h,
					'margin-left': '-'+tAppW+'px',
					'margin-top': '-'+tAppH+'px',
					'width': w
				});
				tAppW = tAppW+tApp.width()-1;
				if(cycle%cols==cols-1){
					tAppH = tAppH + tApp.height() - 1;
				}
				cycle++;
			}
			

			
			switch(fx){
				case 'curtainTopLeft':
						break;
				case 'curtainBottomLeft':
						break;
				case 'curtainSliceLeft':
						break;
				case 'curtainTopRight':
					arr = arr.reverse();
						break;
				case 'curtainBottomRight':
					arr = arr.reverse();
						break;
				case 'curtainSliceRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainTopLeft':
						break;
				case 'blindCurtainBottomLeft':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceTop':
						break;
				case 'blindCurtainTopRight':
						break;
				case 'blindCurtainBottomRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceBottom':
					arr = arr.reverse();
						break;
				case 'stampede':
					arr = shuffle(arr);
						break;
				case 'mosaic':
						break;
				case 'mosaicReverse':
					arr = arr.reverse();
						break;
				case 'mosaicRandom':
					arr = shuffle(arr);
						break;
				case 'mosaicSpiral':
					var rows2 = rows/2, x, y, z, n=0;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n++] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n++] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n++] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n++] = y * cols + x;
							}
						}
						
						arr = order;

						break;
				case 'mosaicSpiralReverse':
					var rows2 = rows/2, x, y, z, n=blocks-1;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n--] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n--] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n--] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n--] = y * cols + x;
							}
						}

						arr = order;
						
						break;
				case 'topLeftBottomRight':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'bottomRightTopLeft':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order.reverse();
						break;
				case 'bottomLeftTopRight':
					for (var y = rows; y > 0; y--)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'topRightBottomLeft':
					for (var y = 0; y < rows; y++)
					for (var x = cols; x > 0; x--) {
						order.push(x + y);
					}
						delay = order;
						break;
			}
			
			
						
			$.each(arr, function(index, value) {

				if(value%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(value%cols==0){
					tAppW = 0;
				}
				if(Math.floor(value/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
							
				switch(fx){
					case 'simpleFade':
						height = h;
						width = w;
						opacityOnGrid = 0;
							break;
					case 'curtainTopLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainTopRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainSliceLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'curtainSliceRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'blindCurtainTopLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainTopRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainSliceBottom':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'blindCurtainSliceTop':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'stampede':
						height = 0;
						width = 0;					
						marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';					
						marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';	
							break;
					case 'mosaic':
						height = 0;
						width = 0;					
							break;
					case 'mosaicReverse':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'mosaicRandom':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiral':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiralReverse':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'topLeftBottomRight':
						height = 0;
						width = 0;					
							break;
					case 'bottomRightTopLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'bottomLeftTopRight':
						height = 0;
						width = 0;					
						marginLeft = 0;					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'topRightBottomLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = 0;					
							break;
					case 'scrollRight':
						height = h;
						width = w;
						marginLeft = -w;					
							break;
					case 'scrollLeft':
						height = h;
						width = w;
						marginLeft = w;					
							break;
					case 'scrollTop':
						height = h;
						width = w;
						marginTop = h;					
							break;
					case 'scrollBottom':
						height = h;
						width = w;
						marginTop = -h;					
							break;
					case 'scrollHorz':
						height = h;
						width = w;
						if(vis==0 && slideI==amountSlide-1) {
							marginLeft = -w;	
						} else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
							marginLeft = w;	
						} else {
							marginLeft = -w;	
						}
							break;
					}
					
			
				var tApp = $('.cameraappended:eq('+value+')',target);
								
				if(typeof u !== 'undefined'){
					clearInterval(u);
					clearTimeout(setT);
					setT = setTimeout(canvasLoader,transPeriod+difference);
				}
				
				
				if($(pagination).length){
					$('.camera_pag li',wrap).removeClass('cameracurrent');
					$('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
				}
						
				if($(thumbs).length){
					$('li', thumbs).removeClass('cameracurrent');
					$('li', thumbs).eq(slideI).addClass('cameracurrent');
					$('li', thumbs).not('.cameracurrent').find('img').animate({opacity:.5},0);
					$('li.cameracurrent img', thumbs).animate({opacity:1},0);
					$('li', thumbs).hover(function(){
						$('img',this).stop(true,false).animate({opacity:1},150);
					},function(){
						if(!$(this).hasClass('cameracurrent')){
							$('img',this).stop(true,false).animate({opacity:.5},150);
						}
					});
				}
								
						
				var easedTime = parseFloat(transPeriod)+parseFloat(difference);
				
				function cameraeased() {

					$(this).addClass('cameraeased');
					if($('.cameraeased',target).length>=0){
						$(thumbs).css({visibility:'visible'});
					}
					if($('.cameraeased',target).length==blocks){
						
						thumbnailPos();
						
						$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
							$(this).css('visibility','hidden');
						});
		
						selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						if (vis >= 0) {
							$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						}
						
						opts.onEndTransition.call(this);
						
						if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
							$('.cameraContent.cameracurrent .imgFake',fakeHover).click();
						}

						
						var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
						var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;
						
						if (lMoveIn!=0){
							$('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
									var wMoveIn = t.outerWidth();
									t.attr('data-outerWidth',wMoveIn);
								} else {
									var wMoveIn = t.attr('data-outerWidth');
								}
								if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
									var hMoveIn = t.outerHeight();
									t.attr('data-outerHeight',hMoveIn);
								} else {
									var hMoveIn = t.attr('data-outerHeight');
								}
								//t.css('width',wMoveIn);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var hRel = t.parents('.camerarelative').outerHeight();
								var wRel = t.parents('.camerarelative').outerWidth();
								if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						$('.cameraContent.cameracurrent',fakeHover).show();
						if (lMoveInContent!=0){
							
							$('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var thisH = t.outerHeight();
								if(tClass.indexOf("moveFromLeft") != -1) {
									t.css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromRight") != -1) {
									t.css({'left':w+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromTop") != -1) {
									t.css({'top':'-'+h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("moveFromBottom") != -1) {
									t.css({'top':h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromLeft") != -1) {
									t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromRight") != -1) {
									t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromTop") != -1) {
									t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("fadeFromBottom") != -1) {
									t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						
						$('.cameraappended',target).remove();
						elem.removeClass('camerasliding');	
							selector.eq(vis).hide();
							var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
								barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
								radSum;
							if (loader != 'pie') {
								radSum = 0.05;
							} else {
								radSum = 0.005;
							}
							$('#'+pieID).animate({opacity:opts.loaderOpacity},200);
							u = setInterval(
								function(){
									if(elem.hasClass('stopped')){
										clearInterval(u);
									}
									
									if(rad <= 1 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
										rad = +(rad+radSum).toFixed(5);
									}
									if(rad > 1) {
										if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
											clearInterval(u);
											imgFake();


											$('#'+pieID).animate({opacity:0},200,function(){
												clearTimeout(setT);
												//setT = setTimeout(canvasLoader, easedTime);
                                                canvasLoader();
												nextSlide();
												opts.onStartLoading.call(this);
											});

										}
									}

                                    progressBarUpdater(radSum, time, barWidth, barHeight);

								},time*radSum
							);
						}

				}


				
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					opts.onStartTransition.call(this);
					easedTime = 0;
					tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
							'display' : 'block',
							'height': height,
							'margin-left': marginLeft,
							'margin-top': marginTop,
							'width': width
						}).animate({
							'height': Math.floor((h/rows)+addTop+1),
							'margin-top' : 0,
							'margin-left' : 0,
							'width' : Math.floor((w/cols)+addLeft+1)
						},(transPeriod-difference),easing,cameraeased);
					selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
							'margin-left': marginLeft*(-1),
							'margin-top': marginTop*(-1)
						},(transPeriod-difference),easing,function(){
							$(this).css({'margin-top' : 0,'margin-left' : 0});
						});
				} else {
					opts.onStartTransition.call(this);
					easedTime = parseFloat(transPeriod)+parseFloat(difference);
					if(slideOn=='next'){
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							}).animate({
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							},(transPeriod-difference),easing,cameraeased);
					} else {
						selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							}).animate({
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							},(transPeriod-difference),easing,cameraeased);
					}
				}
			});
		}
	}
  
  nextSlide();


				if($(prevNav).length){
					$(prevNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}
			
				if($(nextNav).length){
					$(nextNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}


				if(isMobile()){
					fakeHover.on('swipeleft',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
					fakeHover.on('swiperight',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}

				if($(pagination).length){
					$('.camera_pag li',wrap).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).index());
							var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								canvasLoader();
								nextSlide(idNum+1);
								opts.onStartLoading.call(this);
							}
						}
					});
				}

				if($(thumbs).length) {

					$('.pix_thumb img',thumbs).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).parents('li').index());
							var curNum = parseFloat($('.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								$('.pix_thumb',thumbs).removeClass('cameracurrent');
								$(this).parents('li').addClass('cameracurrent');
								canvasLoader();
								nextSlide(idNum+1);
								thumbnailPos();
								opts.onStartLoading.call(this);
							}
						}
					});

					$('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_prevThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft-sum>0){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
							}
					});

					$('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_nextThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							ulW = $('ul', thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft+sum+sum<ulW){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
							}
					});

				}

	function progressBarUpdater(radSum, time, barWidth, barHeight)
	{
        if (loader != 'pie') {

        	var cssStyle;

            switch(barDirection){
                case 'leftToRight':
                    cssStyle = {'right':barWidth-(barWidth*rad)}; break;
                case 'rightToLeft':
                    cssStyle = {'left':barWidth-(barWidth*rad)}; break;
                case 'topToBottom':
                    cssStyle = {'bottom':barHeight-(barHeight*rad)}; break;
                case 'bottomToTop':
                    cssStyle = {'bottom':barHeight-(barHeight*rad)}; break;
            }
			if(rad > 1) {
                $('#'+pieID).css(cssStyle);
			} else {
                $('#'+pieID).animate(cssStyle,(time*radSum),'linear');
			}

        } else {
            radNew = rad;
            ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
            ctx.globalCompositeOperation = 'destination-over';
            ctx.beginPath();
            ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
            ctx.lineWidth = opts.loaderStroke;
            ctx.strokeStyle = opts.loaderBgColor;
            ctx.stroke();
            ctx.closePath();
            ctx.globalCompositeOperation = 'source-over';
            ctx.beginPath();
            ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
            ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
            ctx.strokeStyle = opts.loaderColor;
            ctx.stroke();
            ctx.closePath();
        }
	}
				
  function dispose()
  {
    if (setPause) clearTimeout(setPause);
    if (setT) clearTimeout(setT);
    if (u) clearInterval(u);

    $(window).off('load resize pageshow',placeThumbsOnWindowResize);
    $(window).off('resize pageshow', onWindowResize);

    wrap.stop(true, false);
    wrap.find('*').filter(':animated').stop(true, false);
    wrap.empty();

    wrap = null;
    opts = null;

    WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);
  }

  function onGadgetDeleted(sender, args)
  {
    if (args && args.componentId == opts.componentId)
    {
      dispose();
    }
  }

  WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);
}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
	var wrap = $(this),
		elem = $('.camera_src',wrap),
		pieID = 'pie_'+wrap.index();
	elem.addClass('stopped');
	if($('.camera_showcommands').length) {
		var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
	} else {
		var camera_thumbs_wrap = wrap;
	}
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	if(typeof autoAdv === 'undefined' || autoAdv!==true){
		elem.removeClass('paused');
	}
}
})(jQuery);

/*compiled*/
/*!
	Colorbox v1.4.29 - 2013-09-10
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,
		className: false,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		trapFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,

		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'),
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	className,
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.photo || settings.photoRegex.test(url);
	}

	function retinaUrl(settings, url) {
		return settings.retinaUrl && window.devicePixelRatio > 1 ? url.replace(settings.photoRegex, settings.retinaSuffix) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target)) {
			e.stopPropagation();
			$box.focus();
		}
	}

	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object');
			}
		} else {
			settings = $.extend({}, data);
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || $(element).data('rel') || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		// for external use
		$(document).trigger(event);

		// for internal use
		$events.trigger(event);

		if ($.isFunction(callback)) {
			callback.call(element);
		}
	}


	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.loop || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
			}
		}

		function start() {
			$slideshow
				.html(settings.slideshowStop)
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();
			
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.slideshowStart)
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.slideshow) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.slideshow && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.slideshowAuto) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox),
						relRelated;

					if (data) {
						relRelated =  $(this).data('rel') || data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to Colorbox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			$overlay.css({
				opacity: parseFloat(settings.opacity),
				cursor: settings.overlayClose ? "pointer" : "auto",
				visibility: 'visible'
			}).show();
			

			if (className) {
				$box.add($overlay).removeClass(className);
			}
			if (settings.className) {
				$box.add($overlay).addClass(settings.className);
			}
			className = settings.className;

			if (settings.closeButton) {
				$close.html(settings.close).appendTo($content);
			} else {
				$close.appendTo('<div/>');
			}

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block'});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();

				$box.focus();
				
				if (settings.trapFocus) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.returnFocus) {
					$events.one(event_closed, function () {
						$(element).focus();
					});
				}
			}
			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if ($.isFunction($this)) { // assume a call to $.colorbox
				$this = $('<a/>');
				options.open = true;
			} else if (!$this[0]) { // colorbox being applied to empty collection
				return $this;
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;

		$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		callback = function () {
			var total = $related.length,
				iframe,
				frameBorder = 'frameBorder',
				allowTransparency = 'allowTransparency',
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE7 & IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete, settings.onComplete);
			};

			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				slideshow();
				
				// Preloads images within a rel group
				if (settings.preloading) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var src,
							img,
							i = $related[this],
							data = $.data(i, colorbox);

						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = $(i).attr('href');
						}

						if (src && isImage(data, src)) {
							src = retinaUrl(data, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}

				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.href,
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true, // allow HTML5 video to go fullscreen
						webkitAllowFullScreen : true,
						mozallowfullscreen : true
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.fastIframe) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		makeSettings();
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $tag(div).hide().insertBefore($(href)[0]);

			$events.one(event_purge, function () {
				$inline.replaceWith($loaded.children());
			});

			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = document.createElement('img');

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.one('load', function () {
				var percent;

				if (request !== requests) {
					return;
				}

				photo.alt = $(element).attr('alt') || $(element).attr('data-alt') || '';

				if (settings.retinaImage && window.devicePixelRatio > 1) {
					photo.height = photo.height / window.devicePixelRatio;
					photo.width = photo.width / window.devicePixelRatio;
				}

				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}

				photo.style.width = photo.width + 'px';
				photo.style.height = photo.height + 'px';

				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix);
			
			$overlay.fadeTo(settings.fadeOut || 0, 0);
			
			$box.stop().fadeTo(settings.fadeOut || 0, 0, function () {
			
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));


/*compiled*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 
 var memberProfileHelper;(function(){if(window.memberProfileHelper==null){window.memberProfileHelper=new Object();}memberProfileHelper.setFilter=function(){var shadingFieldset=document.getElementById("shadingFieldset");if(shadingFieldset==null){return;}if(document.all){shadingFieldset.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=40)";}else{shadingFieldset.style.MozOpacity=0.4;}};memberProfileHelper.disableAllInputs=function(){var shadingFieldset=document.getElementById("shadingFieldset");var i;if(shadingFieldset==null){return;}var inputs=shadingFieldset.getElementsByTagName("INPUT");if(inputs.length>0){for(i=0;i<inputs.length;i++){inputs[i].disabled="true";}}inputs=shadingFieldset.getElementsByTagName("TEXTAREA");if(inputs.length>0){for(i=0;i<inputs.length;i++){inputs[i].disabled="true";}}inputs=shadingFieldset.getElementsByTagName("SELECT");if(inputs.length>0){for(i=0;i<inputs.length;i++){inputs[i].disabled="true";}}};memberProfileHelper.checkMemberReceiveRemindersFieldChanged=function(sender,args){var receiveRemindersCheckbox=document.getElementById(receiveRemindersCheckBoxId);var state=receiveRemindersCheckbox.checked?"checked":"nonChecked";DataChangeWatcher.changeValidatorCustom("ReceiveRemindersEnabledDisabled",state,args);};memberProfileHelper.checkMemberReceiveNewsLettersFieldChanged=function(sender,args){var receiveNewslettersCheckbox=document.getElementById(receiveNewsLettersCheckBoxId);var state=receiveNewslettersCheckbox.checked?"checked":"nonChecked";DataChangeWatcher.changeValidatorCustom("ReceiveNewsLettersEnabledDisabled",state,args);};memberProfileHelper.stopWatchDataChanging=function(){if(typeof(DataChangeWatcher)=="undefined"){return;}DataChangeWatcher.setNotChanged();DataChangeWatcher.pauseWatching();};memberProfileHelper.makeButtonWatchDataChanging=function(btnId,sourceAction,causesValidation,checkIfDataChanged,awayMessage){var btn=document.getElementById(btnId);if(!btn){return;}btn.onclick=function(){var dcw=DataChangeWatcher;if(!causesValidation){if(dcw){dcw.resumeWatching();if(checkIfDataChanged){if(!dcw.confirmIfDataChanged()){return;}}}Page_ValidationActive=false;}else{if(!checkIfDataChanged){if(dcw){dcw.pauseWatching();}}}var actionResult=sourceAction();if(causesValidation){if(Page_IsValid&&!Page_BlockSubmit){if(checkIfDataChanged){if(dcw&&!dcw.confirmIfDataChanged()){Page_BlockSubmit=true;return;}}}else{if(!checkIfDataChanged){if(dcw){dcw.resumeWatching();}}}}};memberProfileHelper.TransferToPaymentSystem=function(paymentUrl){if(paymentUrl==null||paymentUrl==""){return false;}DataChangeWatcher.pauseWatching();location.href=paymentUrl;};};memberProfileHelper.EmailChangedNotfication=function(){var hiddenEmail=document.getElementById(hiddenEmailId);var textboxEmail=document.getElementById(textboxEmailId);if(memberProfileHelper.trim(hiddenEmail.value)!=memberProfileHelper.trim(textboxEmail.value)){return confirm(this.changingEmailMessageText);}else{return true;}};memberProfileHelper.trim=function(str){return str.replace(/^\s*(.*)\s*$/,"$1");};function $(id){return document.getElementById(id);}memberProfileHelper.setTabHidden=function setTabHidden(tabModeName){var tabModeHidden=$(this.tabModeHiddenID);tabModeHidden.value=tabModeName;};memberProfileHelper.showProfile=function showProfile(){var mandatoryLink=$(this.editMandatoryFieldTopMessageID);if(mandatoryLink){mandatoryLink.style.display="block";}var profileLink=$(this.profileTabLinkID);var profileLabel=$(this.profileTabLabelID);var fieldsLink=$(this.accessTabLinkID);var fieldsLabel=$(this.accessTabLabelID);var subscriptionsLink=$(this.subscriptionsTabLinkID);var subscriptionsLabel=$(this.subscriptionsTabLabelID);profileLink.style.display="none";profileLabel.style.display="inline";subscriptionsLink.style.display="inline";subscriptionsLabel.style.display="none";if(fieldsLink){fieldsLink.style.display="inline";fieldsLabel.style.display="none";}var profileContainer=$(this.mainProfileTrID);var includeMemberDirectoryContainer=$(this.trIncludeInMemberDirectoryID);var fieldsContainer=$(this.trDetailsToShowID);var subscriptionsContainer=$(this.divEnableNotificationsID);if(profileContainer){profileContainer.style.display="block";}if(includeMemberDirectoryContainer){includeMemberDirectoryContainer.style.display="none";}if(fieldsContainer){fieldsContainer.style.display="none";}if(subscriptionsContainer){subscriptionsContainer.style.display="none";}this.setTabHidden(this.tabModeNameProfile);return false;};memberProfileHelper.showFieldSettings=function showFieldSettings(){var mandatoryLink=$(this.editMandatoryFieldTopMessageID);if(mandatoryLink){mandatoryLink.style.display="none";}var profileLink=$(this.profileTabLinkID);var profileLabel=$(this.profileTabLabelID);var fieldsLink=$(this.accessTabLinkID);var fieldsLabel=$(this.accessTabLabelID);var subscriptionsLink=$(this.subscriptionsTabLinkID);var subscriptionsLabel=$(this.subscriptionsTabLabelID);profileLink.style.display="inline";profileLabel.style.display="none";subscriptionsLink.style.display="inline";subscriptionsLabel.style.display="none";if(fieldsLink){fieldsLink.style.display="none";fieldsLabel.style.display="inline";}var profileContainer=$(this.mainProfileTrID);var includeMemberDirectoryContainer=$(this.trIncludeInMemberDirectoryID);var fieldsContainer=$(this.trDetailsToShowID);var subscriptionsContainer=$(this.divEnableNotificationsID);if(profileContainer){profileContainer.style.display="none";}if(includeMemberDirectoryContainer){includeMemberDirectoryContainer.style.display="block";}if(fieldsContainer){fieldsContainer.style.display="block";}if(subscriptionsContainer){subscriptionsContainer.style.display="none";}this.setTabHidden(this.tabModeNameAccess);return false;};memberProfileHelper.showSubscriptions=function showSubscriptions(){var mandatoryLink=$(this.editMandatoryFieldTopMessageID);if(mandatoryLink){mandatoryLink.style.display="none";}var profileLink=$(this.profileTabLinkID);var profileLabel=$(this.profileTabLabelID);var fieldsLink=$(this.accessTabLinkID);var fieldsLabel=$(this.accessTabLabelID);var subscriptionsLink=$(this.subscriptionsTabLinkID);var subscriptionsLabel=$(this.subscriptionsTabLabelID);profileLink.style.display="inline";profileLabel.style.display="none";subscriptionsLink.style.display="none";subscriptionsLabel.style.display="inline";if(fieldsLink){fieldsLink.style.display="inline";fieldsLabel.style.display="none";}var profileContainer=$(this.mainProfileTrID);var includeMemberDirectoryContainer=$(this.trIncludeInMemberDirectoryID);var fieldsContainer=$(this.trDetailsToShowID);var subscriptionsContainer=$(this.divEnableNotificationsID);if(profileContainer){profileContainer.style.display="none";}if(includeMemberDirectoryContainer){includeMemberDirectoryContainer.style.display="none";}if(fieldsContainer){fieldsContainer.style.display="none";}if(subscriptionsContainer){subscriptionsContainer.style.display="block";}this.setTabHidden(this.tabModeNameSubscriptions);return false;};memberProfileHelper.displayMemberAllDataTable=function(){var memberAllDataTable=$("memberAllDataTable");memberAllDataTable.style.display="block";};})();var memberDirectoryDetailsToShowHelper;(function(){if(memberDirectoryDetailsToShowHelper==null){memberDirectoryDetailsToShowHelper={};}function $(id){return document.getElementById(id);}memberDirectoryDetailsToShowHelper.editIncludeMeInMemberDirectoryClick=function(){memberDirectoryDetailsToShowHelper.checkAllowDisplayCheckBox();};memberDirectoryDetailsToShowHelper.checkAllowDisplayCheckBox=function(){var allowDisplayCheckBox=$(memberDirectoryDetailsToShowHelper.AllowDisplayCheckBoxId);if(allowDisplayCheckBox){memberDirectoryDetailsToShowHelper.setMemberFieldTableMode(!allowDisplayCheckBox.checked);}};memberDirectoryDetailsToShowHelper.setMemberFieldTableMode=function(disabled){var fieldsControl=$(memberDirectoryDetailsToShowHelper.FieldsControlId);var inputs=memberDirectoryDetailsToShowHelper.getInputs(fieldsControl);for(var i=0;i<inputs.length;i++){if(inputs[i]&&!inputs[i].getAttribute(memberDirectoryDetailsToShowHelper.LockedFieldHtmlAttr)){inputs[i].disabled=disabled;}}};memberDirectoryDetailsToShowHelper.getInputs=function(node){var inputs=[];memberDirectoryDetailsToShowHelper.populateInputs(inputs,node);return inputs;};memberDirectoryDetailsToShowHelper.populateInputs=function(inputs,node){if(!node){return;}if(node.tagName&&node.tagName.toLowerCase()=="input"){inputs[inputs.length]=node;}if(!node.childNodes||node.childNodes.length==0){return;}for(var i=0;i<node.childNodes.length;i++){var subNode=node.childNodes[i];memberDirectoryDetailsToShowHelper.populateInputs(inputs,subNode);}};})();(function(){if(!window.memberSubscriptionsHelper){window.memberSubscriptionsHelper={};}memberSubscriptionsHelper.editEnableEmailsClick=function(){this.setSubscriptionsEnabling();};memberSubscriptionsHelper.setSubscriptionsEnabling=function(){var allowDisplayCheckBox=WA.$(this.AllowDisplayCheckBoxId,window);var contentControl=WA.$(this.ContentControlId,window);if(!contentControl||!allowDisplayCheckBox){return;}contentControl.style.display=allowDisplayCheckBox.checked?"block":"none";};memberSubscriptionsHelper.enableSubscription=function(checkBoxID,dropDownID){var enableCheckBox=WA.$(checkBoxID,window);var typeDropDown=WA.$(dropDownID,window);if(!enableCheckBox||!typeDropDown){return;}typeDropDown.disabled=!enableCheckBox.checked;};})();(function(){if(!window.PhotoGallery){window.PhotoGallery={};}var albumParam="";var processingText="Please wait...";var deleteConfirmation="Are you sure you want to delete?";var deletePhotoConfirmation="Are you sure you want to delete this photo?";var saveAction=false;var photosHolder=false;var photosHolderHeight=false;var titleTextBox=false;var descriptionTextBox=false;var saveButton=false;var altSaveButton=false;var saveLinkButton=false;var deleteButton=false;var cancelButton=false;var uploadButton=false;var uploadAction=false;var viewModeRadioContainer=false;var uploadButtonContainer=false;var descriptionContainer=false;var descriptionHeightUrlKey=false;var countPhotosPerRowUrlKey=false;var pagingKey=false;var saveAlbumDialogInited=false;var uploadPhotosDialogInited=false;var photoItemId=false;var photoItemTimeout=false;var actionIsRunning=false;var pendingSender=false;var pendingImageDivId=false;var pendingFullDescriptionDivId=false;var pendingSmallDescriptionDivId=false;PhotoGallery.InitPhotoGallery=initPhotoGallery;PhotoGallery.InitJsFunctions=initJsFunctions;PhotoGallery.Page_Parsed=pageParsed;PhotoGallery.Page_Unloading=pageUnloading;PhotoGallery.CloseSaveAlbumDialog=closeSaveAlbumDialog;PhotoGallery.CloseUploadPhotosDialog=closeUploadPhotosDialog;PhotoGallery.Get_SaveAction=getSaveAction;PhotoGallery.Get_SaveTitle=getSaveTitle;PhotoGallery.Get_SaveDescription=getSaveDescription;PhotoGallery.Get_SaveButton=getSaveButton;PhotoGallery.Get_DeleteButton=getDeleteButton;PhotoGallery.Get_UploadButton=getUploadButton;PhotoGallery.Get_UploadAction=getUploadAction;PhotoGallery.ProcessingButton_OnClick=processingButtonClick;PhotoGallery.DeleteButton_OnClick=deleteButtonClick;PhotoGallery.UploadButton_OnClick=uploadButtonClick;PhotoGallery.SaveButton_OnClick=saveButtonClick;PhotoGallery.ImageMenu_OnMouseOver=imageMenuMouseOver;PhotoGallery.ImageMenu_OnMouseOut=imageMenuMouseOut;PhotoGallery.MenuButton_OnMouseOver=menuButtonMouseOver;PhotoGallery.MenuButton_OnMouseOut=menuButtonMouseOut;PhotoGallery.MenuButton_OnClick=menuButtonClick;PhotoGallery.NavigateToList=navigateToList;PhotoGallery.CheckLength=checkLength;function initPhotoGallery(p){if(p.albumParam){albumParam=p.albumParam;}if(p.processingText){processingText=p.processingText;}if(p.deleteConfirmation){deleteConfirmation=p.deleteConfirmation;}if(p.deletePhotoConfirmation){deletePhotoConfirmation=p.deletePhotoConfirmation;}if(p.photosHolderId){photosHolder=WA.$(p.photosHolderId,window);}if(p.saveActionId){saveAction=WA.$(p.saveActionId,window);}if(p.titleTextBoxId){titleTextBox=WA.$(p.titleTextBoxId,window);}if(p.descriptionTextBoxId){descriptionTextBox=WA.$(p.descriptionTextBoxId,window);}if(p.saveButtonId){saveButton=WA.$(p.saveButtonId,window);}if(p.altSaveButtonId){altSaveButton=WA.$(p.altSaveButtonId,window);}if(p.saveLinkButtonId){saveLinkButton=WA.$(p.saveLinkButtonId,window);}if(p.deleteButtonId){deleteButton=WA.$(p.deleteButtonId,window);}if(p.cancelButtonId){cancelButton=WA.$(p.cancelButtonId,window);}if(p.uploadButtonId){uploadButton=WA.$(p.uploadButtonId,window);}if(p.uploadActionId){uploadAction=WA.$(p.uploadActionId,window);}if(p.viewModeRadioContainerId){viewModeRadioContainer=WA.$(p.viewModeRadioContainerId,window);}if(p.uploadButtonContainerId){uploadButtonContainer=WA.$(p.uploadButtonContainerId,window);}if(p.descriptionContainerId){descriptionContainer=WA.$(p.descriptionContainerId,window);}if(p.descriptionHeightUrlKey){descriptionHeightUrlKey=p.descriptionHeightUrlKey;}if(p.countPhotosPerRowUrlKey){countPhotosPerRowUrlKey=p.countPhotosPerRowUrlKey;}if(p.pagingUrlKey){pagingKey=p.pagingUrlKey;}}function initJsFunctions(){setDisplayInline(saveLinkButton);setDisplayInline(uploadButton);setDisplay(viewModeRadioContainer);setDisplay(uploadButtonContainer);}function pageParsed(){initJsFunctions();}function pageUnloading(){setDisabled(saveButton);setDisabled(uploadButton);setDisabled(deleteButton);if(saveLinkButton){setDisabled(saveLinkButton);setDisabled(altSaveButton);setDisabled(cancelButton);}}function setDisplay(element){if(element){element.style.display="";}}function setDisplayInline(element){if(element){element.style.display="inline";}}function setDisplayBlock(element){if(element){element.style.display="block";}}function setDisplayNone(element){if(element){element.style.display="none";}}function setDisabled(element){if(element){element.disabled=true;}}function closeSaveAlbumDialog(){PhotoAlbumsDialog.saveAlbumDialog.close();}function closeUploadPhotosDialog(){PhotoAlbumsDialog.uploadPhotosDialog.close();}function getSaveAction(){return saveAction;}function getSaveTitle(){return titleTextBox;}function getSaveDescription(){return descriptionTextBox;}function getSaveButton(){return saveButton;}function getDeleteButton(){return deleteButton;}function getUploadButton(){return uploadButton;}function getUploadAction(){return uploadAction;}function processingButtonClick(sender,otherIds){if(sender){sender.value=processingText;}if(otherIds&&otherIds.length){for(var i=0;i<otherIds.length;i++){var btn=WA.$(otherIds[i],window);if(btn&&btn.id!=sender.id){btn.disabled=true;}}}return true;}function deleteButtonClick(sender,otherIds){if(confirm(deleteConfirmation)){return processingButtonClick(sender,otherIds);}return false;}function uploadButtonClick(){if(!uploadPhotosDialogInited){PhotoAlbumsDialog.uploadPhotosDialog.initialize({albumParam:albumParam});uploadPhotosDialogInited=true;}if(uploadAction.value=="1"){uploadAction.value="";if(uploadButton){uploadButton.value=processingText;}WA.reloadCurrentPage(pagingKey,window);return;}PhotoAlbumsDialog.uploadPhotosDialog.open(null,{"PhotoGallery":PhotoGallery});}function saveButtonClick(){if(!saveAlbumDialogInited){PhotoAlbumsDialog.saveAlbumDialog.initialize({albumParam:albumParam});saveAlbumDialogInited=true;}if(saveAction.value=="1"){saveAction.value="";if(saveButton){saveButton.value=processingText;}return true;}PhotoAlbumsDialog.saveAlbumDialog.open(null,{"PhotoGallery":PhotoGallery});return false;}function imageMenuMouseOver(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(photoItemTimeout&&photoItemId==imageDivId){clearTimeout(photoItemTimeout);photoItemTimeout=false;return;}if(actionIsRunning){return;}sender.parentNode.style.height=sender.offsetHeight+"px";WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhotoHover";sender.className="photoInnerContainerOver";sender.style.zIndex=sender.style.zIndex+1;var fullDescriptionDiv=WA.$(fullDescriptionDivId,window);setDisplayBlock(fullDescriptionDiv);setDisplayNone(WA.$(smallDescriptionDivId,window));if(photosHolder){photosHolderHeight=photosHolder.offsetHeight;if(!photosHolder.Y){WA.Dimensions.getXY(photosHolder);}if(!fullDescriptionDiv.Y){WA.Dimensions.getXY(fullDescriptionDiv);}var outHeigth=fullDescriptionDiv.Y+fullDescriptionDiv.offsetHeight-photosHolder.Y-photosHolderHeight;if(outHeigth>0){photosHolder.style.height=(photosHolderHeight+outHeigth+10)+"px";}}}function doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhoto";sender.className="photoInnerContainer";sender.style.zIndex=sender.style.zIndex-1;setDisplayNone(WA.$(fullDescriptionDivId,window));setDisplayBlock(WA.$(smallDescriptionDivId,window));if(photosHolderHeight&&photosHolder.offsetHeight>photosHolderHeight){photosHolder.style.height=photosHolderHeight+"px";}photoItemId=false;photoItemTimeout=false;}function imageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(actionIsRunning){if(!pendingSender){pendingSender=sender;pendingImageDivId=imageDivId;pendingFullDescriptionDivId=fullDescriptionDivId;pendingSmallDescriptionDivId=smallDescriptionDivId;}return;}if(photoItemTimeout&&photoItemId==imageDivId){return;}photoItemId=imageDivId;photoItemTimeout=setTimeout(function(){doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId);},10);}function menuButtonMouseOver(sender){sender.className="overButton";}function menuButtonMouseOut(sender){sender.className="outButton";}function menuButtonClick(linkId,secondButtonId,processingContainerId,confirmVariableName){var linkobj=WA.$(linkId,window);if(linkobj){setDisplayNone(linkobj);var secondButton=WA.$(secondButtonId,window);var processingContainer=WA.$(processingContainerId,window);setDisplayNone(secondButton);setDisplayBlock(processingContainer);if(confirmVariableName){actionIsRunning=true;if(!confirm(eval(confirmVariableName))){actionIsRunning=false;setDisplayNone(processingContainer);setDisplay(secondButton);setDisplay(linkobj);if(pendingSender){imageMenuMouseOut(pendingSender,pendingImageDivId,pendingFullDescriptionDivId,pendingSmallDescriptionDivId);pendingSender=false;}return;}}actionIsRunning=false;eval(linkobj.href.substr(11).replace(/\%20/g," ").replace(/\%22/g,'"'));}}function navigateToList(url){var descriptionHeight=(descriptionContainer)?descriptionContainer.offsetHeight:0;var countPhotosPerRow=0;if(photosHolder){var y=0;var bulets=photosHolder.getElementsByTagName("LI");for(var i=0;i<bulets.length;i++){WA.Dimensions.getXY(bulets[i]);if(i==0){y=bulets[i].Y;}else{if(y<bulets[i].Y){countPhotosPerRow=i;break;}}}}if(descriptionHeightUrlKey&&countPhotosPerRowUrlKey){var index=url.indexOf("?",0);url=index==-1?url+"?":url+"&";url+=descriptionHeightUrlKey+"="+descriptionHeight+"&"+countPhotosPerRowUrlKey+"="+countPhotosPerRow;}window.location=url;}function checkLength(e,oObject,maxLength){if(oObject.value.length<maxLength){return true;}else{var keyID=(window.event)?event.keyCode:e.keyCode;if((keyID>=37&&keyID<=40)||(keyID==8)||(keyID==46)){if(window.event){e.returnValue=true;}}else{if(window.event){e.returnValue=false;}else{e.preventDefault();}}}}})();(function(window,WA){if(!WA){return;}if(!window.PhotoAlbumsDialog){window.PhotoAlbumsDialog={};}window.PhotoAlbumsDialog.saveAlbumDialog=new WA.topWindow.BonaDialogHandler({name:"PhotoAlbumsDialog_SaveAlbumDialog",dialogParameters:{clipContainerId:"idPrimaryContentContainer",mainContainerId:"idMainContainer",directURLTemplate:"/Content/Members/PhotoGallery/CreateAlbumDialog.aspx?frameMode=0{albumParam}&version="+WA.version,reloadURLTemplate:"/Content/Members/PhotoGallery/CreateAlbumDialog.aspx?frameMode=1{albumParam}&version="+WA.version,top:null,left:null,width:500,height:290,minWidth:500,minHeight:290,isMoveable:true,isResizeable:false,isModal:true,isScrollable:true,callBackParameters:{}}});})(window,window.WA);(function(window,WA){if(!WA){return;}if(!window.PhotoAlbumsDialog){window.PhotoAlbumsDialog={};}PhotoAlbumsDialog.uploadPhotosDialog=new WA.topWindow.BonaDialogHandler({name:"PhotoAlbumsDialog_UploadPhotosDialog",dialogParameters:{clipContainerId:"idClipMainContainer",mainContainerId:"contentDiv",directURLTemplate:"/Content/Members/PhotoGallery/UploadPhotosDialog.aspx?frameMode=0{albumParam}&version="+WA.version,reloadURLTemplate:"/Content/Pictures/PhotoGallery/UploadPhotosInnerDialog.aspx?version="+WA.version+"{albumParam}",top:null,left:null,width:430,height:355,minWidth:430,minHeight:355,isMoveable:true,isResizeable:false,isModal:true,isScrollable:false,callBackParameters:{}},onDialogClose:function(){if(PhotoGallery.Get_UploadAction().value=="1"){PhotoGallery.Get_UploadButton().click();}}});})(window,window.WA);(function(){if(window.Wizard==null){window.Wizard=new Object();}Wizard.SetRadioChosen=SetRadioChosen;Wizard.SetMethosRadioChosen=SetMethosRadioChosen;Wizard.SetMethodValidate=SetMethodValidate;Wizard.SetCreditCardIsChosen=SetCreditCardIsChosen;Wizard.GetCreditCardIsChosen=GetCreditCardIsChosen;Wizard.ValidateIsRadioChosen=ValidateIsRadioChosen;Wizard.ValidateIsMethodRadioChosen=ValidateIsMethodRadioChosen;Wizard.SetRadioValidatorsIds=SetRadioValidatorsIds;Wizard.DisableButtons=DisableButtonsWithTimeout;Wizard.NavigateToCreditCard=NavigateToCreditCard;Wizard.SetContainerVisibility=SetContainerVisibility;Wizard.StopWatching=StopWatching;Wizard.ShowAdminCancelDialog=ShowAdminCancelDialog;Wizard.SubstituteFormTargetIfReq=SubstituteFormTargetIfReq;var isRadioChosen=false;var isMethodRadioChosen=false;var isMethodValidate=false;var isCreditCardChosen=false;var radioValidatorId=false;var radioMethodValidatorId=false;function SetRadioChosen(){isRadioChosen=true;if(radioValidatorId){ValidatorValidate(document.getElementById(radioValidatorId));}else{Page_ClientValidate("WizardValidationGroup");}if(radioMethodValidatorId){ValidatorValidate(document.getElementById(radioMethodValidatorId));}}function SetMethosRadioChosen(){isMethodRadioChosen=true;if(radioValidatorId){ValidatorValidate(document.getElementById(radioValidatorId));}if(radioMethodValidatorId){ValidatorValidate(document.getElementById(radioMethodValidatorId));}}function validateRados(){}function SetMethodValidate(isValidate){isMethodValidate=isValidate;}function SetCreditCardIsChosen(isChosen){isCreditCardChosen=isChosen;}function GetCreditCardIsChosen(){return isCreditCardChosen;}function ValidateIsRadioChosen(sender,args){args.IsValid=isRadioChosen;}function ValidateIsMethodRadioChosen(sender,args){args.IsValid=!isMethodValidate||isMethodRadioChosen;}function SetRadioValidatorsIds(radioValidatorClientId,radioMethodValidatorClientId){radioValidatorId=radioValidatorClientId;radioMethodValidatorId=radioMethodValidatorClientId;}function DisableButtonsWithTimeout(){if(typeof(Page_ValidationActive)!="undefined"&&Page_ValidationActive&&Page_IsValid==false){return;}var ids=arguments;setTimeout(function(){DisableButtons(ids);},50);}function NavigateToCreditCard(url){document.body.style.display="none";WA.topWindow.location=url;}function DisableButtons(ids){if(!ids){return;}for(i=0;i<ids.length;i++){var elemToDisable=document.getElementById(ids[i]);if(elemToDisable){elemToDisable.disabled=true;}}}function SetContainerVisibility(containerId,visible){var container=document.getElementById(containerId);if(!container){return;}container.style.display=visible?"block":"none";}function StopWatching(){if(window.DataChangeWatcher){DataChangeWatcher.pauseWatching();}if(window.Page_ClientValidate){Page_ClientValidate("WizardValidationGroup");}var resumeWatching=false;if(window.Page_IsValid){resumeWatching=!Page_IsValid;}if(window.DataChangeWatcher&&resumeWatching){DataChangeWatcher.resumeWatching();}}function ShowAdminCancelDialog(text){if(!confirm(text)){return false;}return true;}function SubstituteFormTargetIfReq(){var planRadiosContainer=document.getElementById("idPlansContainer");var selectedPlanId=getSelectedRadioAttrVal(planRadiosContainer.getElementsByTagName("INPUT"),"planId");var selectedSubscriptionPeriod=getSelectedSubscriptionPeriod();if(selectedPlanId==0||selectedPlanId==null){return;}var shouldSubstituteTarget=false;var wasFreePlanChoosen=selectedPlanId==freePlanId;var payOutstandingBalanceNowRadio=document.getElementById(payOutstandingBalanceNowId);var newCreditCardRadio=document.getElementById(newCreditCardRadioId);var shouldPayOutstandingAmountNow=wasFreePlanChoosen&&isAccountOverdue&&payOutstandingBalanceNowRadio&&payOutstandingBalanceNowRadio.checked;var isSelectedPeriodAnnualInvoice=selectedSubscriptionPeriod==3;if(isSelectedPeriodAnnualInvoice){shouldSubstituteTarget=false;}else{if(!isCurrentPlanChargeable){shouldSubstituteTarget=true;}else{var shouldEnterNewCard=wasFreePlanChoosen?shouldPayOutstandingAmountNow:(newCreditCardRadio&&newCreditCardRadio.checked)||isBillingInfoEmpty;shouldSubstituteTarget=shouldEnterNewCard;}}if(shouldSubstituteTarget){document.getElementById(formClientId).target="_top";}}function getSelectedSubscriptionPeriod(){var selectedMethodId=0;var paymentMethodRadiosContainer=document.getElementById("idPaymentMethodsContainer");if(paymentMethodRadiosContainer){var paymentMethodRadios=paymentMethodRadiosContainer.getElementsByTagName("INPUT");selectedMethodId=getSelectedRadioAttrVal(paymentMethodRadiosContainer.getElementsByTagName("INPUT"),"methodId");}return selectedMethodId;}function getSelectedRadioAttrVal(radios,attrName){for(var i=0;i<radios.length;i++){if(radios[i].checked){return radios[i].getAttribute(attrName);}}}})();(function(){if(!window.MemberPublicProfilePhotoGallery){window.MemberPublicProfilePhotoGallery={};}var albumParam="";var processingText="Please wait...";var deleteConfirmation="Are you sure you want to delete?";var deletePhotoConfirmation="Are you sure you want to delete this photo?";var saveAction=false;var photosHolder=false;var photosHolderHeight=false;var titleTextBox=false;var descriptionTextBox=false;var saveButton=false;var altSaveButton=false;var saveLinkButton=false;var deleteButton=false;var cancelButton=false;var uploadButton=false;var uploadAction=false;var viewModeRadioContainer=false;var uploadButtonContainer=false;var descriptionContainer=false;var descriptionHeightUrlKey=false;var countPhotosPerRowUrlKey=false;var pagingKey=false;var saveAlbumDialogInited=false;var uploadPhotosDialogInited=false;var photoItemId=false;var photoItemTimeout=false;var actionIsRunning=false;var pendingSender=false;var pendingImageDivId=false;var pendingFullDescriptionDivId=false;var pendingSmallDescriptionDivId=false;MemberPublicProfilePhotoGallery.InitPhotoGallery=initPhotoGallery;MemberPublicProfilePhotoGallery.ImageMenu_OnMouseOver=imageMenuMouseOver;MemberPublicProfilePhotoGallery.ImageMenu_OnMouseOut=imageMenuMouseOut;MemberPublicProfilePhotoGallery.NavigateToList=navigateToList;MemberPublicProfilePhotoGallery.CheckLength=checkLength;function initPhotoGallery(p){if(p.albumParam){albumParam=p.albumParam;}if(p.processingText){processingText=p.processingText;}if(p.deleteConfirmation){deleteConfirmation=p.deleteConfirmation;}if(p.deletePhotoConfirmation){deletePhotoConfirmation=p.deletePhotoConfirmation;}if(p.photosHolderId){photosHolder=WA.$(p.photosHolderId,window);}if(p.saveActionId){saveAction=WA.$(p.saveActionId,window);}if(p.titleTextBoxId){titleTextBox=WA.$(p.titleTextBoxId,window);}if(p.descriptionTextBoxId){descriptionTextBox=WA.$(p.descriptionTextBoxId,window);}if(p.saveButtonId){saveButton=WA.$(p.saveButtonId,window);}if(p.altSaveButtonId){altSaveButton=WA.$(p.altSaveButtonId,window);}if(p.saveLinkButtonId){saveLinkButton=WA.$(p.saveLinkButtonId,window);}if(p.deleteButtonId){deleteButton=WA.$(p.deleteButtonId,window);}if(p.cancelButtonId){cancelButton=WA.$(p.cancelButtonId,window);}if(p.uploadButtonId){uploadButton=WA.$(p.uploadButtonId,window);}if(p.uploadActionId){uploadAction=WA.$(p.uploadActionId,window);}if(p.viewModeRadioContainerId){viewModeRadioContainer=WA.$(p.viewModeRadioContainerId,window);}if(p.uploadButtonContainerId){uploadButtonContainer=WA.$(p.uploadButtonContainerId,window);}if(p.descriptionContainerId){descriptionContainer=WA.$(p.descriptionContainerId,window);}if(p.descriptionHeightUrlKey){descriptionHeightUrlKey=p.descriptionHeightUrlKey;}if(p.countPhotosPerRowUrlKey){countPhotosPerRowUrlKey=p.countPhotosPerRowUrlKey;}if(p.pagingUrlKey){pagingKey=p.pagingUrlKey;}}function setDisplay(element){if(element){element.style.display="";}}function setDisplayInline(element){if(element){element.style.display="inline";}}function setDisplayBlock(element){if(element){element.style.display="block";}}function setDisplayNone(element){if(element){element.style.display="none";}}function setDisabled(element){if(element){element.disabled=true;}}function imageMenuMouseOver(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(photoItemTimeout&&photoItemId==imageDivId){clearTimeout(photoItemTimeout);photoItemTimeout=false;return;}if(actionIsRunning){return;}sender.parentNode.style.height=sender.offsetHeight+"px";WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhotoHover";sender.className="photoInnerContainerOver";sender.style.zIndex=sender.style.zIndex+1;var fullDescriptionDiv=WA.$(fullDescriptionDivId,window);setDisplayBlock(fullDescriptionDiv);setDisplayNone(WA.$(smallDescriptionDivId,window));if(photosHolder){photosHolderHeight=photosHolder.offsetHeight;if(!photosHolder.Y){WA.Dimensions.getXY(photosHolder);}if(!fullDescriptionDiv.Y){WA.Dimensions.getXY(fullDescriptionDiv);}var outHeigth=fullDescriptionDiv.Y+fullDescriptionDiv.offsetHeight-photosHolder.Y-photosHolderHeight;if(outHeigth>0){photosHolder.style.height=(photosHolderHeight+outHeigth+10)+"px";}}}function doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhoto";sender.className="photoInnerContainer";sender.style.zIndex=sender.style.zIndex-1;setDisplayNone(WA.$(fullDescriptionDivId,window));setDisplayBlock(WA.$(smallDescriptionDivId,window));if(photosHolderHeight&&photosHolder.offsetHeight>photosHolderHeight){photosHolder.style.height=photosHolderHeight+"px";}photoItemId=false;photoItemTimeout=false;}function imageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(actionIsRunning){if(!pendingSender){pendingSender=sender;pendingImageDivId=imageDivId;pendingFullDescriptionDivId=fullDescriptionDivId;pendingSmallDescriptionDivId=smallDescriptionDivId;}return;}if(photoItemTimeout&&photoItemId==imageDivId){return;}photoItemId=imageDivId;photoItemTimeout=setTimeout(function(){doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId);},10);}function navigateToList(url){var descriptionHeight=(descriptionContainer)?descriptionContainer.offsetHeight:0;var countPhotosPerRow=0;if(photosHolder){var y=0;var bulets=photosHolder.getElementsByTagName("LI");for(var i=0;i<bulets.length;i++){WA.Dimensions.getXY(bulets[i]);if(i==0){y=bulets[i].Y;}else{if(y<bulets[i].Y){countPhotosPerRow=i;break;}}}}if(descriptionHeightUrlKey&&countPhotosPerRowUrlKey){var index=url.indexOf("?",0);url=index==-1?url+"?":url+"&";url+=descriptionHeightUrlKey+"="+descriptionHeight+"&"+countPhotosPerRowUrlKey+"="+countPhotosPerRow;}window.location=url;}function checkLength(e,oObject,maxLength){if(oObject.value.length<maxLength){return true;}else{var keyID=(window.event)?event.keyCode:e.keyCode;if((keyID>=37&&keyID<=40)||(keyID==8)||(keyID==46)){if(window.event){e.returnValue=true;}}else{if(window.event){e.returnValue=false;}else{e.preventDefault();}}}}})();(function(window,WA,undefined){if(!window.WaOnlineStoreCart){window.WaOnlineStoreCart=OnlineStoreCart;}function OnlineStoreCart(){var service=new WaOnlineStoreCartService(),self=this;self.add=add;self.get=get;self.load=load;self.remove=remove;self.setQuantity=setQuantity;self.getService=getService;function add(productId,variantId,quantity){return service.addProduct(productId,variantId,quantity);}function getService(){return service;}function get(productId,variantId){return service.getProduct(productId,variantId);}function load(){return service.loadCurrent();}function remove(productId,variantId){return service.removeProduct(productId,variantId);}function setQuantity(productId,variantId,quantity){return service.setQuantity(productId,variantId,quantity);}}var instance;OnlineStoreCart.getInstance=function(){return instance||(instance=new OnlineStoreCart());};OnlineStoreCart.load=function(initModel){var cart=this.getInstance(initModel);return cart.load();};})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCartGateway){window.WaOnlineStoreCartGateway=OnlineStoreCartGateway;}function OnlineStoreCartGateway(){var self=this;self.addProduct=addProduct;self.loadCurrent=loadCurrent;self.recalculateCurrent=recalculateCurrent;function addProduct(model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(model),dataType:"json",processData:false,type:"POST",url:"/Sys/Store/Cart/Add"});}function loadCurrent(){return WA.Ajax({dataType:"json",type:"GET",url:"/Sys/Store/Cart/Current"});}function transformCartModel(oldCartModel){var newCart=jq$.extend(true,{},oldCartModel);jq$.each(newCart.items,function(i,item){delete item.price;delete item.title;delete item.total;delete item.pictureUrl;});delete newCart.total;return newCart;}function recalculateCurrent(model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(transformCartModel(model)),dataType:"json",processData:false,type:"POST",url:"/Sys/Store/Cart/RecalculateCart"});}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCartLayout){window.WaOnlineStoreCartLayout=OnlineStoreCartLayout;}function OnlineStoreCartLayout(service,initModel){var container=document.getElementById("cartLayout"),self=this;var productDetailsUrl="/Sys/ProductDetails",currencySymbol="$",currency="USD";self.render=render;self.onError=onError;var isSaveFailed=null;var isDisabled=null;var checkoutURL="/Sys/Store/Checkout";init();resetViewStates();function init(){jq$(container).on("input",".storeCartTable_tdQuantity input",onProductQuantityInput);jq$(container).on("click",".storeCartTable_deleteButton",onProductDelete);jq$(container).on("click",".quantitySnippet .quantity-button",onProductQuantityUpDown);jq$(container).on("click",".storeCartControlNav__back",onBackToShopping);jq$(container).on("click",".toCheckout",onCheckout);service.savingStart=onSavingStart;}function onBackToShopping(){window.history.go(-1);return false;}function onCheckout(){window.location.href=checkoutURL;}function resetViewStates(){isSaveFailed=false;isDisabled=false;}function render(model){container.innerHTML=model.items&&model.items.length>0?renderTable(model):renderEmpty();}function renderEmpty(){var html=[];if(isSaveFailed){html.push(renderGeneralError());}html.push('<div class="emptyCartContainer">');html.push('<div class="emptyCartIcon2"></div>');html.push('<p class="emptyCartMessage">Your cart is empty.</p>');html.push("</div>");return html.join("");}function renderTable(model){var html=[];if(isSaveFailed){html.push(renderGeneralError());}html.push('<table class="storeCartTable">');html.push(renderItems(model.items));html.push(renderTotal(model));html.push("</table>");html.push(renderControlNav());return html.join("");}function renderItems(items){var html=[],i,length=items.length;for(i=0;i<length;i++){html.push(renderItem(items[i]));}return html.join("");}function renderItem(item){var html=[];html.push('<tr class="storeCartTable_row" data-product-id="',item.productId,'" data-variant-id="',item.variantId,'">');html.push('<td class="storeCartTable_tdImage">',renderImage(item),"</td>");html.push('<td class="storeCartTable_tdTitle">');html.push('<a href="',getItemUrl(item.productId,item.variantId),'">',item.title,"</a>");html.push(renderOptions(item));html.push("</td>");html.push('<td class="storeCartTable_tdPprice">',renderPrice(item.price),"</td>");html.push('<td class="storeCartTable_tdQuantity">');html.push('<div class="quantitySnippet">');html.push("<input ",(isDisabled&&'disabled="disabled"'),' class="typeNumber" min="1" size="2" type="number" value="',item.quantity,'">');html.push('<div class="quantity-button quantity-down">&nbsp;</div><div class="quantity-button quantity-up">&nbsp;</div>');html.push("</div>");html.push("</td>");html.push('<td class="storeCartTable_tdAmount">',renderPrice(item.total),"</td>");html.push('<td class="storeCartTable_tdDelete">');html.push('<button title="Remove item" class="storeCartTable_deleteButton"></button>');html.push("</td>");html.push("</tr>");return html.join("");}function renderOption(option){return'<div class="storeCartTable_itemOption">'+option.title+": "+option.value+"</div>";}function renderOptions(item){if(!item.options){return"";}return jq$.map(item.options,function(option,i){return renderOption(option);}).join("");}function renderImage(item){var html=[];if(item.pictureUrl){html.push('<a class="storeCartTable_img" href="',getItemUrl(item.productId,item.variantId),'">');html.push('<img src="',item.pictureUrl,'" width="100"/></a>');}else{html.push('<div class="storeCartTable_img storeCartTable_no_img" title="No photo"></div>');}return html.join("");}function getItemUrl(productId,variantId){return initModel.productDetailsUrl+"/"+productId;}function renderPrice(price){if(initModel.currencySymbol){return'<span class="priceContainer">'+initModel.currencySymbol+price.toFixed(2)+"</span>";}else{return'<span class="priceContainer">'+price.toFixed(2)+" "+initModel.currency+"</span>";}}function renderTotal(model){var html=[];var total=model.total;var subTotal=model.subTotal;var isTaxesApplied=model.isTaxesApplied||false;var isTaxesIncludedTotal=model.isTaxesIncludedTotal||false;var taxes=model.taxes||[];if(initModel.taxesEnable&&isTaxesApplied&&!isTaxesIncludedTotal){html.push('<tr class="storeCartSubTotalInfoRowFirst">');html.push('<td colspan="4" class="storeCartTable_totalLabel">Subtotal:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,subTotal.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',subTotal.toFixed(2)," ",initModel.currency,"</td>");}html.push('<td class="storeCartTable_totalValue"></td>');html.push("</tr>");html.push(renderTaxes(taxes,isTaxesIncludedTotal));}if(total){if(!isTaxesIncludedTotal){html.push('<tr class="storeCartTotal storeCartTotalInfoRow">');}else{html.push('<tr class="storeCartTotal storeCartTotalInfoRowFirst">');}html.push('<td colspan="4" class="storeCartTable_totalLabel">Total:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,total.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',total.toFixed(2)," ",initModel.currency,"</td>");}html.push('<td class="storeCartTable_totalValue"></td>');html.push("</tr>");}if(initModel.taxesEnable&&isTaxesApplied&&isTaxesIncludedTotal){html.push(renderTaxes(taxes,isTaxesIncludedTotal));}return html.join("");}function renderTaxes(taxes,isTaxesIncludedTotal){var html=[];for(var taxIndex in taxes){var tax=taxes[taxIndex];var taxLabel=tax.title+":";if(isTaxesIncludedTotal){taxLabel="Incl."+tax.title+":";}html.push('<tr class="storeCartTotalInfoRow">');html.push('<td colspan="4" class="storeCartTable_totalLabel">',taxLabel,"</td>");if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,tax.amount.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',tax.amount.toFixed(2)," ",initModel.currency,"</td>");}html.push('<td class="storeCartTable_totalValue"></td>');html.push("</tr>");}return html.join("");}function renderControlNav(){var html=[];html.push('<div class="storeCartControlNav">');html.push('<div class="storeCartControlNav_left">');html.push('<a href="#" class="storeCartControlNav__back">Continue shopping</a>');html.push("</div>");html.push('<div class="storeCartControlNav_right">');html.push("<input ",(isDisabled&&'disabled="disabled"'),' type="button" name="continue" value="Proceed to checkout" class="functionalButton toCheckout">');html.push("</div>");html.push("</div>");return html.join("");}function renderGeneralError(){var html=[];html.push('<div class="noticeBox boxTypeError">');html.push('<div class="text">');html.push("Cannot complete operation. Please try again later or contact administrator");html.push("</div>");html.push("</div>");return html.join("");}function onError(cart){isSaveFailed=true;render(cart);resetViewStates();}function onSaved(cart){render(cart);resetViewStates();}function onSavingStart(cart){isDisabled=true;render(cart);resetViewStates();}function onProductDelete(){if(isDisabled){return;}var sender=jq$(this),productId=sender.closest(".storeCartTable_row").data("productId"),variantId=sender.closest(".storeCartTable_row").data("variantId");service.removeProduct(productId,variantId).done(onSaved).fail(onError);}function onProductQuantityInput(){var sender=jq$(this),productId=sender.closest(".storeCartTable_row").data("productId"),variantId=sender.closest(".storeCartTable_row").data("variantId"),quantity=+sender.val(),min=+sender.attr("min");if(quantity<=min){quantity=min;}service.setQuantity(productId,variantId,quantity).done(onSaved).fail(onError);}function onProductQuantityUpDown(){var sender=jq$(this),input=sender.closest(".quantitySnippet").find("input"),value=+input.val();value+=sender.hasClass("quantity-up")?1:-1;input.val(value).trigger("input");}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCartService){window.WaOnlineStoreCartService=OnlineStoreCartService;}function OnlineStoreCartService(){var cache={},cacheKey={cart:"OnlineStoreCart"},defaultSaveDelay=400,delayedSave,delayedSaveTimerId,gateway=new WaOnlineStoreCartGateway(),self=this;self.addProduct=addProduct;self.getProduct=getProduct;self.loadCurrent=loadCurrent;self.removeProduct=removeProduct;self.setQuantity=setQuantity;self.savingStart=null;self.savingCompleted=null;self.resetCart=resetCart;self.localLoad=localLoad;self.saveWithDelay=saveWithDelay;self.saveInCache=saveInCache;cache.get=function(key){var serialized=localStorage.getItem(key);if(typeof serialized!=="string"){return undefined;}try{return JSON.parse(serialized);}catch(e){console.log(e);return serialized||undefined;}};cache.remove=function(key){localStorage.removeItem(key);};cache.set=function(key,value){var serialized=JSON.stringify(value);try{localStorage.setItem(key,serialized);}catch(e){console.log(e);}};function onSavingStart(cart){if(typeof self.savingStart==="function"){self.savingStart(cart);}}function onSavingCompleted(cart){if(typeof self.savingCompleted==="function"){self.savingCompleted(cart);}}function resetCart(){cache.remove(cacheKey.cart);}function addProduct(productId,variantId,quantity){var cart=cache.get(cacheKey.cart),cartItems,i,productNotFound=true;variantId=variantId||undefined;quantity=validateQuantity(quantity,1);if(cart){cartItems=cart.items;for(i=0,productNotFound=true;i<cartItems.length;i++){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){cartItems[i].quantity+=quantity;productNotFound=false;break;}}if(productNotFound){cartItems.push({productId:productId,variantId:variantId,quantity:quantity});}return gateway.recalculateCurrent(cart).done(saveInCache);}return gateway.addProduct({productId:productId,variantId:variantId,quantity:quantity}).done(saveInCache);}function getProduct(productId,variantId){var cart=cache.get(cacheKey.cart),cartItems,i;variantId=variantId||undefined;if(cart){cartItems=cart.items;for(i=0;i<cartItems.length;i++){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){return cartItems[i];}}}return null;}function localLoad(){var cart=cache.get(cacheKey.cart);return cart;}function loadCurrent(){var cart=cache.get(cacheKey.cart);if(cart){return gateway.recalculateCurrent(cart).done(saveInCache);}return gateway.loadCurrent().done(saveInCache);}function removeProduct(productId,variantId){var cart=cache.get(cacheKey.cart),cartItems,i;variantId=variantId||undefined;cartItems=cart.items;for(i=cartItems.length-1;i>=0;i--){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){cartItems.splice(i,1);break;}}return saveWithDelay(cart);}function setQuantity(productId,variantId,quantity){var cart=cache.get(cacheKey.cart),cartItems,i;variantId=variantId||undefined;cartItems=cart.items;quantity=validateQuantity(quantity,0);for(i=0;i<cartItems.length;i++){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){cartItems[i].quantity=quantity;break;}}return saveWithDelay(cart);}function save(cart){return gateway.recalculateCurrent(cart);}function saveInCache(cart){onSavingCompleted(cart);cache.set(cacheKey.cart,cart);}function saveWithDelay(cart,delay){var deferred;if(delayedSave&&delayedSave.state()==="pending"){deferred=jq$.Deferred();}else{deferred=delayedSave=jq$.Deferred().done(saveInCache);}clearTimeout(delayedSaveTimerId);delayedSaveTimerId=setTimeout(function(){onSavingStart(cart);save(cart).done(function(cart){delayedSave.resolve(cart);}).fail(function(error){delayedSave.reject(cache.get(cacheKey.cart),error);});},delay||defaultSaveDelay);return deferred;}function validateQuantity(quantity,quantityMinimum){quantity=+quantity;return quantity<quantityMinimum||isNaN(quantity)?quantityMinimum:quantity;}}})(window,window.WA);(function(window,WA,undefined){if(!window.InventoryIssuesHelper){window.InventoryIssuesHelper=new InventoryIssuesHelper();}function InventoryIssuesHelper(){this.hasInventoryIssues=hasInventoryIssues;this.getInventoryIssue=getInventoryIssue;function hasInventoryIssues(item,issues){return getInventoryIssue(item,issues)!=null;}function getInventoryIssue(item,issues){var _issues=$.grep(issues,function(obj){return(obj.productId===item.productId&&obj.variantId===item.variantId);});return _issues.length>0?_issues[0]:null;}}})(window,window.WA);(function(window,WA,undefined){if(!window.InventoryIssuesStepTableRenderer){window.InventoryIssuesStepTableRenderer=InventoryIssuesStepTableRenderer;}function InventoryIssuesStepTableRenderer(){this.render=render;function render(model){return confirmationRenderTable(model);}function confirmationRenderTable(model){var html=[];html.push('<table class="storeCartTable">');html.push(confirmationRenderItems(model.items,model.issues));html.push("</table>");return html.join("");}function confirmationRenderItems(items,issues){var html=[],i,length=items.length;for(i=0;i<length;i++){if(InventoryIssuesHelper.hasInventoryIssues(items[i],issues)){html.push(confirmationRenderItem(items[i],issues));}}return html.join("");}function confirmationRenderItem(item,issues){var html=[];html.push('<tr class="storeCartTable_row',item.isDeleted?" storeCartTable_rowDeleted":"",'">');html.push('<td class="storeCartTable_tdImage">',renderImage(item),"</td>");html.push('<td class="storeCartTable_tdTitle">');html.push('<div class="storeCartTable_itemTitle">',item.title,"</div>");html.push(renderOptions(item));html.push("</td>");html.push('<td class="storeCartTable_tdInventoryIssue" align="right">',renderInventoryIssues(item,issues),"</td>");html.push('<td class="storeCartTable_tdDelete">');if(!item.isDeleted){html.push('<button title="Remove item" class="storeCartTable_deleteButton" item-productId="',item.productId,'" item-variantId="',item.variantId,'"></button>');}html.push("</td>");html.push("</tr>");return html.join("");}function renderOptions(item){if(!item.options){return"";}return jq$.map(item.options,function(option,i){return renderOption(option);}).join("");}function renderOption(option){return'<div class="storeCartTable_itemOption">'+option.title+": "+option.value+"</div>";}function renderImage(item){var html=[];if(item.pictureUrl){html.push('<img src="',item.pictureUrl,'" width="100"/>');}else{html.push('<div class="storeCartTable_img storeCartTable_no_img" title="No photo"></div>');}return html.join("");}function renderInventoryIssues(item,issues){if(item.isDeleted){return"<div>Deleted</div>";}var html=[];var issue=$.grep(issues,function(obj){return(obj.productId===item.productId&&obj.variantId===item.variantId);})[0];switch(issue.type){case"NOTENOUGH":html.push('<div class="storeCartTable_itemInventoryIssue_notEnough">'+issue.quantity+" -> only "+issue.stock+" left</div>");break;case"OUTOFSTOCK":html.push('<div class="storeCartTable_itemInventoryIssue_outOfStock">Out of stock</div>');break;default:throw ({"message":"Invalid issue type","productId":item.productId,"variantId":item.variantId});}return html.join("");}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckout){window.WaOnlineStoreCheckout=OnlineStoreCheckout;}function OnlineStoreCheckout(){var serviceCart=WaOnlineStoreCart.getInstance().getService(),serviceCheckout=new WaOnlineStoreCheckoutService(serviceCart),self=this;self.getService=getService;function getService(){return serviceCheckout;}}var instance;OnlineStoreCheckout.getInstance=function(){return instance||(instance=new OnlineStoreCheckout());};OnlineStoreCheckout.load=function(){return WaOnlineStoreCart.getInstance().load();};})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutGateway){window.WaOnlineStoreCheckoutGateway=OnlineStoreCheckoutGateway;}function OnlineStoreCheckoutGateway(){var self=this;self.invoiceMe=invoiceMe;self.payOnline=payOnline;self.checkEmail=checkEmail;function payRequest(url,model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(model),dataType:"json",processData:false,type:"POST",url:url});}function invoiceMe(model){return payRequest("/Sys/Store/Checkout/InvoiceMe",model);}function payOnline(model){return payRequest("/Sys/Store/Checkout/PayOnline",model);}function checkEmail(model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(model),dataType:"json",processData:false,type:"POST",url:"/Sys/Store/Checkout/CheckEmail"});}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayout){window.WaOnlineStoreCheckoutLayout=OnlineStoreCheckoutLayout;}function OnlineStoreCheckoutLayout(serviceCheckout,serviceCart,opts){var self=this,isAuthorized=opts.isAuthorized,initModel=opts.initModel,checkEmptyCart=opts.checkEmptyCart,checkCartIssues=opts.checkCartIssues,step1,step2,step3,inventoryIssuesStep,wizard,checkoutContentContainer=jq$("#OnlineStoreCheckout_content_container"),wizardContainer=document.getElementById("idCheckoutWizardContainer");if(!initModel){throw (new Error("Not define initModel in layout opts"));}if(!checkEmptyCart){throw (new Error("Not define checkEmptyCart in layout opts"));}if(!wizardContainer){return;}self.render=render;self.showContainer=showContainer;init();function init(){jq$(wizardContainer).on("click",".wizardBackButton",onPressWizardBackButton);jq$(wizardContainer).on("click",".wizardNextButton",onPressWizardNextButton);jq$(wizardContainer).on("showStep",onShowWizardStep);step1=new WaOnlineStoreCheckoutLayoutStep1(serviceCheckout,isAuthorized);step2=new WaOnlineStoreCheckoutLayoutStep2(serviceCheckout);step3=new WaOnlineStoreCheckoutLayoutStep3(serviceCheckout,initModel);step3.onOrderCreateFailed(onOrderCreateFailed);inventoryIssuesStep=new OnlineStoreCheckoutLayoutInventoryIssuesStep(serviceCheckout,serviceCart);inventoryIssuesStep.onUpdateAndContinueClick(onUpdateAndContinueClick);wizard=new WaBasicWizard({element:wizardContainer,stepsBarContainer:"h1.stepsContainer",selected:0,showStepURLhash:true});}function showContainer(){checkoutContentContainer.show();}function render(){step1.render();step2.render();step3.render();inventoryIssuesStep.render();checkCartHasIssues();}function onSuccessCheckEmail(model){if(model.IsEmailExists===null||!model.IsEmailExists){step1.saveContactModel().done(function(){step1.deactivatePreload();wizard.next();}).fail(function(){step1.deactivatePreload();step1.checkEmailFailedRender();});}else{step1.deactivatePreload();step1.emailExistErrorRender();return;}}function onFailureCheckEmail(error){console.log(error.message||"check email: Fail");step1.deactivatePreload();step1.checkEmailFailedRender();wizard.next();}function onPressWizardBackButton(e){e.preventDefault();if(checkEmptyCart()){return;}if(wizard.getStep()===2&&checkCartHasIssues()){return false;}wizard.prev();if(wizard.getStep()===0){step1.render();}if(wizard.getStep()===1){step2.render();}return false;}function onPressWizardNextButton(e){e.preventDefault();if(checkEmptyCart()){return false;}if(wizard.getStep()===1&&checkCartHasIssues()){return false;}if(wizard.getStep()===0){step1.activatePreload();step1.checkEmail().done(onSuccessCheckEmail).fail(onFailureCheckEmail);}if(wizard.getStep()===1){step2.saveForm().done(function(){wizard.next();}).fail(function(){renderGeneralError();});return false;}return false;}function onShowWizardStep(e,anchorObject,stepNumber,stepDirection,stepPosition){if(stepNumber===2){step3.render();}}function onOrderCreateFailed(data){window.location.reload();}function onUpdateAndContinueClick(e){checkCartHasIssues();}function checkCartHasIssues(){var cart=serviceCart.localLoad()||{};if(cart.isValid){inventoryIssuesStep.hide();wizardContainer.style.display="block";if(wizard.getStep()===2){step3.render();}}else{inventoryIssuesStep.render();inventoryIssuesStep.show();wizardContainer.style.display="none";}return !cart.isValid;}}})(window,window.WA);(function(window,WA,undefined){if(!window.OnlineStoreCheckoutLayoutInventoryIssuesStep){window.OnlineStoreCheckoutLayoutInventoryIssuesStep=OnlineStoreCheckoutLayoutInventoryIssuesStep;}function OnlineStoreCheckoutLayoutInventoryIssuesStep(service,serviceCart){var formName="form_invetory_issues",container=document.getElementById("step-inventoryIssues"),tableContainer=document.getElementById("step-inventoryIssues-tableContainer"),tableRenderer=new InventoryIssuesStepTableRenderer(),$container=jq$(container),form=jq$("form[name="+formName+"]"),updateAndContinueEventName="CheckoutInventoryIssueUpdateAndContinueClick",self=this,validator,model;self.render=render;self.updateAndContinue=updateAndContinue;self.deleteProduct=deleteProduct;self.show=show;self.hide=hide;self.onUpdateAndContinueClick=onUpdateAndContinueClick;init();function init(){service.getConfirmModel().done(function(confirmModel){model=jq$.extend(true,{},confirmModel.cart);});}function show(){container.style.display="block";}function hide(){container.style.display="none";}function render(){service.getConfirmModel().done(function(confirmModel){model=model?model:jq$.extend(true,{},confirmModel.cart);tableContainer.innerHTML=tableRenderer.render(model);jq$("button.storeCartTable_deleteButton",tableContainer).click(deleteProduct);});jq$("#idUpdateAndContinueButton",container).click(updateAndContinue);}function deleteProduct(e){var productId=e.target.getAttribute("item-productId"),variantId=e.target.getAttribute("item-variantId");if(variantId==""){variantId=null;}var itemsToDelete=jq$.grep(model.items,function(el,idx){return el.productId==productId&&el.variantId==variantId;});for(var i=itemsToDelete.length-1;i>=0;i--){itemsToDelete[i].isDeleted=true;}render();}function updateAndContinue(){model.items=$.grep(model.items,function(obj){return obj.isDeleted;},true);for(var i=model.items.length-1;i>=0;i--){var item=model.items[i];if(InventoryIssuesHelper.hasInventoryIssues(item,model.issues)){var issue=InventoryIssuesHelper.getInventoryIssue(item,model.issues);switch(issue.type){case"NOTENOUGH":model.items[i].quantity=issue.stock;break;case"OUTOFSTOCK":model.items[i]=null;break;default:throw ({"message":"Invalid issue type","productId":item.productId,"variantId":item.variantId});}}}model.items=$.grep(model.items,function(obj){return obj;});serviceCart.saveWithDelay(model).done(function(cart){jq$.event.trigger(updateAndContinueEventName);serviceCart.saveInCache(cart);});}function onUpdateAndContinueClick(actionFunc){jq$(document).bind(updateAndContinueEventName,actionFunc);}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayoutStep1){window.WaOnlineStoreCheckoutLayoutStep1=OnlineStoreCheckoutLayoutStep1;}function OnlineStoreCheckoutLayoutStep1(service,isAuthorized){var container=document.getElementById("step-1"),$container=jq$(container),self=this,validator,loginURL="/Sys/Login?ReturnUrl=%2fSys%2fStore%2fCheckout",formName="contact_details",form=jq$("form[name="+formName+"]"),$terms=form.find("input.storeCheckoutTerm");self.render=render;self.checkEmail=checkEmail;self.activatePreload=activatePreload;self.deactivatePreload=deactivatePreload;self.saveContactModel=saveContactModel;self.emailExistErrorRender=emailExistErrorRender;self.checkEmailFailedRender=checkEmailFailedRender;init();function init(){validatorInit();jq$("#loginPageButton").on("click",function(){window.location.href=loginURL;});$terms.on("change",tryEnableNextButton);tryEnableNextButton();}function isCheckedTerms(){var checkedAllTerms=true;$terms.each(function(i,el){checkedAllTerms=checkedAllTerms&&el.checked;});return checkedAllTerms;}function validatorInit(){validator=new FormValidator({form:formName,autoConfig:true,validateOnBlur:true,onBlurField:onBlurValidate,onSubmit:onSubmitValidate});}function render(){service.getContactModel().done(function(model){getEmailField().val(model.Email);getFirstNameField().val(model.FirstName);getLastNameField().val(model.LastName);getPhoneField().val(model.Phone);jq$(model.RulesAndTerms).each(function(i,id){jq$("#term_"+id)[0].checked=true;});if(!isAuthorized&&!model.Email){disableNextButton();}tryEnableNextButton();});}function getNextButton(){return $container.find(".wizardNextButton");}function tryEnableNextButton(){if(isCheckedTerms()&&validator.validateForm()){enableNextButton();}else{disableNextButton();}}function tryHideNotifications(){if(validator.validateForm()){getExistEmailNotification().hide();}}function getEmailField(){return form.find("#billingDetails_email");}function getFirstNameField(){return form.find("#billingDetails_firstName");}function getLastNameField(){return form.find("#billingDetails_lastName");}function getPhoneField(){return form.find("#billingDetails_phone");}function checkEmail(){return service.checkEmail({Email:getEmailField().val()});}function getGeneralErrorNotification(){return jq$("#generalError");}function saveContactModel(){var checkedTerms=$terms.filter(function(i,el){return el.checked;}).map(function(i,el){return +$(el).val();}).get();var model={Email:getEmailField().val(),FirstName:getFirstNameField().val(),LastName:getLastNameField().val(),Phone:getPhoneField().val(),RulesAndTerms:checkedTerms};getGeneralErrorNotification().hide();getExistEmailNotification().hide();return service.saveContactModel(model);}function disableNextButton(){getNextButton().attr("disabled","disabled");}function enableNextButton(){getNextButton().removeAttr("disabled");}function activatePreload(){disableNextButton();}function deactivatePreload(){enableNextButton();}function onSubmitValidate(errors,evt){if(errors.length>0||!isCheckedTerms()){disableNextButton();}else{enableNextButton();}}function onBlurValidate(errors,evt){var sender=jq$(evt.target);putErrors(errors,sender);}function putErrors(errors,sender){if(!sender.next(".errorField").length){sender.after('<div class="errorField"></div>');}var errorField=sender.next(".errorField");if(errors.length>0){errorField.html(errors[0].message).addClass("errorField__visible");sender.parents(".formFieldContainer").addClass("error");disableNextButton();}else{errorField.removeClass("errorField__visible");sender.parents(".formFieldContainer").removeClass("error");tryEnableNextButton();tryHideNotifications();}}function getExistEmailNotification(){return jq$("#existEmail");}function emailExistErrorRender(){putErrors([{message:"Already used"}],getEmailField());getExistEmailNotification().show();}function checkEmailFailedRender(){getGeneralErrorNotification().show();captchaReset();}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayoutStep2){window.WaOnlineStoreCheckoutLayoutStep2=OnlineStoreCheckoutLayoutStep2;}function OnlineStoreCheckoutLayoutStep2(service){var formName="delivery_details",container=document.getElementById("step-2"),$container=jq$(container),form=jq$("form[name="+formName+"]"),self=this,validator;self.render=render;self.saveForm=saveForm;init();function init(){}function render(){service.getShippingAddressModel().done(function(model){var shippingAddress=model;if(shippingAddress){form.find("#shippingAddress_address1").val(shippingAddress.addressLine1);form.find("#shippingAddress_address2").val(shippingAddress.addressLine2);form.find("#shippingAddress_city").val(shippingAddress.city);form.find("#shippingAddress_country").val(shippingAddress.countryId);form.find("#shippingAddress_region").val(shippingAddress.province);form.find("#shippingAddress_zipcode").val(shippingAddress.zip);form.find("#shippingAddress_comments").val(model.comments);}});}function saveForm(){var $countrySelect=form.find("#shippingAddress_country"),countryId=+$countrySelect.val(),countryName="";if(countryId===0){countryId=null;countryName="";}else{countryName=$countrySelect.find("option:selected").text();}var data={addressLine1:form.find("#shippingAddress_address1").val(),addressLine2:form.find("#shippingAddress_address2").val(),city:form.find("#shippingAddress_city").val(),countryId:countryId,countryName:countryName,province:form.find("#shippingAddress_region").val(),zip:form.find("#shippingAddress_zipcode").val(),comments:form.find("#shippingAddress_comments").val()};return service.saveShippingAddressModel(data);}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayoutStep3){window.WaOnlineStoreCheckoutLayoutStep3=OnlineStoreCheckoutLayoutStep3;}function OnlineStoreCheckoutLayoutStep3(service,initModel){var self=this,model,captchaVerify=false,mainContainer=document.getElementById("step-3-content"),captchaEnable=true,captchaWidgetId=undefined,recaptchaElementId="recaptchaContainer",orderCreateFailedEventName="OrderCreateFailedEvent";self.render=render;self.confirmationRender=confirmationRender;self.onOrderCreateFailed=onOrderCreateFailed;self.showGeneralError=showGeneralError;init();function init(){var $payInvoiceButton=getPayInvoiceButton();var $payOnlineButton=getPayOnlineButton();$payInvoiceButton.on("click",function(){disablePayButtons();payInvoice(captchaVerify);});$payOnlineButton.on("click",function(){disablePayButtons();payOnline(captchaVerify);});captchaInit();}function captchaInit(){if(captchaEnable){var sitekey=getRecaptchaContainer().data("sitekey");captchaWidgetId=grecaptcha.render(recaptchaElementId,{sitekey:sitekey,callback:captchaSuccessCallback});}}function captchaSuccessCallback(responseToken){captchaVerify=responseToken;enablePayButtons();}function getRecaptchaContainer(){return jq$("#"+recaptchaElementId);}function render(){getGeneralErrorNotification().hide();disablePayButtons();captchaReset();service.getConfirmModel().done(function(confirmModel){model=confirmModel;confirmationRender(model);});}function getPayInvoiceButton(){return jq$("#button_pay_invoice");}function getPayOnlineButton(){return jq$("#button_pay_online");}function getGeneralErrorNotification(){return jq$("#generalError");}function confirmationRender(model){mainContainer.innerHTML=confirmationRenderTable(model);}function disablePayButtons(){getPayInvoiceButton().attr("disabled","disabled");getPayOnlineButton().attr("disabled","disabled");}function enablePayButtons(){getPayInvoiceButton().removeAttr("disabled");getPayOnlineButton().removeAttr("disabled");}function captchaReset(){grecaptcha.reset(captchaWidgetId);}function captchaValidationFailureCallback(){showGeneralError();captchaReset();}function payInvoice(captchaToken){return service.invoiceMe(model,captchaToken).done(function(resp){if(!resp.IsReCaptchaValid){captchaValidationFailureCallback();}}).fail(function(data){var err=getErrorData(data);if(err.errorType=="NotEnoughStock"){jq$.event.trigger(orderCreateFailedEventName);}else{showGeneralError();}});}function payOnline(captchaToken){return service.payOnline(model,captchaToken).done(function(resp){if(!resp.IsReCaptchaValid){captchaValidationFailureCallback();}}).fail(function(data){var err=getErrorData(data);if(err.errorType=="NotEnoughStock"){jq$.event.trigger(orderCreateFailedEventName);}else{showGeneralError();}});}function getErrorData(data){try{return JSON.parse(data.responseText).data;}catch(e){return data.responseText;}}function showGeneralError(){getGeneralErrorNotification().show();}function confirmationRenderTable(model){var html=[];html.push('<table class="storeCartTable">');html.push(confirmationRenderItems(model.cart.items));html.push(confirmationRenderTotal(model.cart));html.push("</table>");html.push(deliveryInformation(model));return html.join("");}function confirmationRenderItems(items){var html=[],i,length=items.length;for(i=0;i<length;i++){html.push(confirmationRenderItem(items[i]));}return html.join("");}function renderImage(item){var html=[];if(item.pictureUrl){html.push('<img src="',item.pictureUrl,'" width="100"/>');}else{html.push('<div class="storeCartTable_img storeCartTable_no_img" title="No photo"></div>');}return html.join("");}function getItemUrl(productId){return initModel.productDetailsUrl+"/"+productId;}function renderPrice(price){if(initModel.currencySymbol){return'<span class="priceContainer">'+initModel.currencySymbol+price.toFixed(2)+"</span>";}else{return'<span class="priceContainer">'+price.toFixed(2)+" "+initModel.currency+"</span>";}}function confirmationRenderItem(item){var html=[];html.push('<tr class="storeCartTable_row">');html.push('<td class="storeCartTable_tdImage">',renderImage(item),"</td>");html.push('<td class="storeCartTable_tdTitle">');html.push('<div class="storeCartTable_itemTitle">',item.title,"</div>");html.push(renderOptions(item));html.push("</td>");html.push('<td class="storeCartTable_tdPprice">',renderPrice(item.price),"</td>");html.push('<td class="storeCartTable_tdQuantity qtyLabel">',item.quantity,"</td>");html.push('<td class="storeCartTable_tdAmount">',renderPrice(item.total),"</td>");html.push("</tr>");return html.join("");}function renderOption(option){return'<div class="storeCartTable_itemOption">'+option.title+": "+option.value+"</div>";}function renderOptions(item){if(!item.options){return"";}return jq$.map(item.options,function(option,i){return renderOption(option);}).join("");}function confirmationRenderTotal(cart){var html=[];var total=cart.total;var subTotal=cart.subTotal;var isTaxesApplied=cart.isTaxesApplied||false;var isTaxesIncludedTotal=cart.isTaxesIncludedTotal||false;var taxes=cart.taxes||[];if(initModel.taxesEnable&&isTaxesApplied&&!isTaxesIncludedTotal){html.push('<tr class="storeCartTotalInfoRowFirst">');html.push('<td colspan="4" class="storeCartTable_totalLabel">Subtotal:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,subTotal.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',subTotal.toFixed(2)," ",initModel.currency,"</td>");}html.push("</tr>");html.push(renderTaxes(taxes,isTaxesIncludedTotal));}if(total){if(!isTaxesIncludedTotal){html.push('<tr class="storeCartTotalInfoRow">');}else{html.push('<tr class="storeCartTotalInfoRowFirst">');}html.push('<td colspan="4" class="storeCartTable_totalLabel">Total:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,total.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',total.toFixed(2)," ",initModel.currency,"</td>");}html.push("</tr>");}if(initModel.taxesEnable&&isTaxesApplied&&isTaxesIncludedTotal){html.push(renderTaxes(taxes,isTaxesIncludedTotal));}return html.join("");}function renderTaxes(taxes,isTaxesIncludedTotal){var html=[];for(var taxIndex in taxes){var tax=taxes[taxIndex];var taxLabel=tax.title+":";if(isTaxesIncludedTotal){taxLabel="Incl."+tax.title+":";}html.push('<tr class="storeCartTotalInfoRow">');html.push('<td colspan="4" class="storeCartTable_totalLabel">',taxLabel,"</td>");if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,tax.amount.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',tax.amount.toFixed(2)," ",initModel.currency,"</td>");}html.push("</tr>");}return html.join("");}function enc(val){return BonaPage.encodeHtml(val);}function onOrderCreateFailed(actionFunc){jq$(document).bind(orderCreateFailedEventName,actionFunc);}function deliveryInformation(model){var comment=(model.shippingAddress&&model.shippingAddress.hasOwnProperty("comments"))?model.shippingAddress.comments:"",html=[],owner=(model.billingDetails||{}),shippingAddress=(model.shippingAddress||{});html.push("<h2>Billing and shipping information</h2>");html.push("<p><strong>Billing details</strong><br />");html.push(enc(owner.FirstName)," ",enc(owner.LastName)," ",enc(owner.Email),"<br/>");if(owner.Phone){html.push(enc(owner.Phone),"<br/>");}html.push("</p>");html.push("<p><strong>Shipping address</strong><br/>");if(shippingAddress.addressLine1){html.push(enc(shippingAddress.addressLine1)," ");}if(shippingAddress.addressLine2){html.push(enc(shippingAddress.addressLine2)," ");}if(shippingAddress.addressLine1||shippingAddress.addressLine2){html.push("<br/>");}var countryName=(shippingAddress.countryName!=="< Select >")?enc(shippingAddress.countryName):"";html.push(enc(shippingAddress.city)," ",enc(shippingAddress.province)," ",countryName," ",enc(shippingAddress.zip),"<br />");html.push("</p>");if(comment){html.push("<p><strong>Comments</strong><br/>",enc(comment),"</p>");}html.push("<p>&nbsp;</p>");return html.join("");}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutService){window.WaOnlineStoreCheckoutService=OnlineStoreCheckoutService;}function OnlineStoreCheckoutService(serviceCart){var cache={},cacheKey={billingDetails:"billingDetails",shippingAddress:"shippingAddress",rulesAndTerms:"rulesAndTerms"},gateway=new WaOnlineStoreCheckoutGateway(),self=this;self.invoiceMe=invoiceMe;self.payOnline=payOnline;self.checkEmail=checkEmail;self.saveContactModel=saveContactModel;self.getContactModel=getContactModel;self.getShippingAddressModel=getShippingAddressModel;self.saveShippingAddressModel=saveShippingAddressModel;self.getConfirmModel=getConfirmModel;cache.get=function(key){var serialized=localStorage.getItem(key);if(typeof serialized!=="string"){return undefined;}try{return JSON.parse(serialized);}catch(e){console.log(e);return serialized||undefined;}};cache.remove=function(key){localStorage.removeItem(key);};cache.set=function(key,value){var serialized=JSON.stringify(value);try{localStorage.setItem(key,serialized);}catch(e){console.log(e);}};function getShippingAddressModel(){var model=cache.get(cacheKey.shippingAddress);return jq$.Deferred().resolve(model||{});}function saveShippingAddressModel(model){cache.set(cacheKey.shippingAddress,model);return jq$.Deferred().resolve(model);}function resetAllData(){serviceCart.resetCart();cache.remove(cacheKey.shippingAddress);cache.remove(cacheKey.billingDetails);}function invoiceMe(checkoutModel,captchaToken){var data={CheckoutModel:checkoutModel,Captcha:captchaToken};return gateway.invoiceMe(data).fail(payFailed).done(paySuccess);}function payOnline(checkoutModel,captchaToken){var data={CheckoutModel:checkoutModel,Captcha:captchaToken};return gateway.payOnline(data).fail(payFailed).done(paySuccess);}function paySuccess(data){if(data.IsReCaptchaValid&&data.RedirectUrl){resetAllData();window.location=data.RedirectUrl;}}function payFailed(data,textStatus){console.log("Failed!",data,textStatus);}function checkEmail(model){return gateway.checkEmail(model);}function getContactModel(){var model=cache.get(cacheKey.billingDetails);return jq$.Deferred().resolve(model||{});}function saveContactModel(model){var contactModel=cache.get(cacheKey.billingDetails);var billingDetails=jq$.extend(contactModel,model);cache.set(cacheKey.billingDetails,billingDetails);return jq$.Deferred().resolve(billingDetails);}function getConfirmModel(){var def=jq$.Deferred();serviceCart.loadCurrent().done(function(cart){getContactModel().done(function(billingDetails){getShippingAddressModel().done(function(shippingAddress){def.resolve({billingDetails:billingDetails,shippingAddress:shippingAddress,cart:cart});});});});return def;}}})(window,window.WA);jq$(function(){if(!window.currentProduct){window.currentProduct={id:0};}if(window.currentProduct.id>0){var cartService=WaOnlineStoreCart.getInstance(),cartUrl="/Sys/Store/Cart",cartKey="OnlineStoreCart",buttonAdd=document.getElementById("OnlineStoreProduct_addToCart"),outOfStockLabel=document.getElementById("idOnlineStoreCatalog_OutOfStock_container"),buttonView=document.getElementById("OnlineStoreProduct_viewCart"),inputQty=document.getElementById("idInputQuantity"),qtyLimitContainer=document.getElementById("idOnlineStoreCatalog_QuantityLimitContainer"),qtyLimit=document.getElementById("idOnlineStoreCatalog_QuantityLimit"),quantitySnippet=document.querySelector(".quantitySnippet");options=document.querySelectorAll("SELECT.OnlineStoreProduct_optionsSelect"),optionErrorLabels={},variantsModel={};for(var i=options.length-1;i>=0;i--){var option=options[i];var errorLabel=document.getElementById("idOnlineStoreProduct_Option"+option.getAttribute("option-id")+"_ErrorLabel");optionErrorLabels[option.getAttribute("option-id")]=errorLabel;}if(!window.currentProduct.outOfStock){quantitySnippet.onclick=function(event){var target=event.target,value;if(target.className.indexOf("quantity-button")!==-1){value=getQuantity();value+=target.className.indexOf("quantity-up")>=0?1:-1;inputQty.value=value;inputQty.oninput();}};}if(!window.currentProduct.outOfStock){inputQty.oninput=function(){var value=getQuantity(),min=parseInt(inputQty.getAttribute("min"));if(value<min){value=min;}inputQty.value=value;};}buttonView.onclick=function(e){document.location=cartUrl;e.preventDefault();return false;};buttonAdd.onclick=function(){if(!validate()){return false;}var variant=getVariant(),variantId=null,quantity=getQuantity();if(variant){variantId=variant.id;}if(quantity>0){cartService.add(currentProduct.id,variantId,quantity).fail(function(error){console.log(error);}).done(update);}return false;};cartService.load().fail(function(error){console.log(error);}).done(update);function getVariant(selectedOptions){if(!selectedOptions){selectedOptions=getSelectedOptions();}if(!selectedOptions||selectedOptions.length==0||!currentProduct.variants||currentProduct.variants.length==0){return null;}var variant=null;for(var i=currentProduct.variants.length-1;i>=0;i--){var optionValues=currentProduct.variants[i].options;var isMatch=true;for(var j=selectedOptions.length-1;j>=0;j--){var found=false;for(var k=optionValues.length-1;k>=0;k--){if(optionValues[k].title==selectedOptions[j].title&&optionValues[k].value==selectedOptions[j].value){found=true;break;}}if(!found){isMatch=false;break;}}if(isMatch){variant=currentProduct.variants[i];}}return variant;}function getSelectedOptions(){var selectedOptions=[];for(var i=options.length-1;i>=0;i--){var option=options[i];selectedOptions.push({title:option.getAttribute("option-title"),value:option.value});}return selectedOptions;}function getQuantity(){var value=parseInt(inputQty.value);return value>0?value:1;}function getProductsInCartQuantity(cart){if(!cart){return;}var quantity=0;cart.items.forEach(function(item){quantity+=item.quantity;});return quantity;}function init(){for(var i=options.length-1;i>=0;i--){var optionSelect=options[i];optionSelect.onchange=function(event){var hasValue=event.target.value!="";optionErrorLabels[event.target.getAttribute("option-id")].style.display=hasValue?"none":"block";var variant=getVariant();setVariantData(variant);};}}function setVariantData(variant){if(!variant){outOfStockLabel.style.display="none";qtyLimitContainer.style.visibility="hidden";buttonAdd.disabled=true;return;}qtyLimitContainer.style.visibility=variant.outOfStock||!variant.stock?"hidden":"visible";qtyLimit.innerText=variant.stock;outOfStockLabel.style.display=variant.outOfStock?"block":"none";buttonAdd.disabled=variant.outOfStock;}function validate(){var isValid=false;var errors=getValidationErrors();isValid=errors.length==0;displayErrorState(errors);return isValid;}function getValidationErrors(){var errors=[];var selectedOptions=[];if(options.length==0){return errors;}for(var i=options.length-1;i>=0;i--){var option=options[i];if(option.selectedIndex==0){errors.push({type:"option",id:option.getAttribute("option-id")});}else{selectedOptions.push({title:option.getAttribute("option-title"),value:option.value});}}if(errors.length>0){return errors;}var variant=getVariant(selectedOptions);if(variant&&variant.outOfStock){return[{type:"outOfStock"}];}return errors;}function displayErrorState(errors){for(var i=optionErrorLabels.length-1;i>=0;i--){optionErrorLabels[i].style.display="none";}for(var i=errors.length-1;i>=0;i--){var error=errors[i];switch(error.type){case"option":optionErrorLabels[error.id].style.display="block";break;case"outOfStock":outOfStockLabel.style.display="block";break;}}buttonAdd.disabled=errors.length>0;}function update(){var cart,currentProduct,productsInCartQuantity,currentProductQuantity,currentProductQuantityLimit;cart=JSON.parse(localStorage.getItem(cartKey));productsInCartQuantity=getProductsInCartQuantity(cart);updateViewInCartText(productsInCartQuantity);}function updateViewInCartText(value){if(typeof value!=="number"){return;}buttonView.textContent=value>0?"View cart ("+value+")":"View cart";}function quantityLimitElement(options){var self=this,main=options.element,delay=options.delay||400;self.hide=hide;self.show=show;self.text=text;function hide(){if(main){main.style.display="none";}}function show(){if(main){main.style.display="block";setTimeout(hide,delay);}}function text(value){if(main){main.textContent=value;}}}var coverContainer=document.querySelector(".OnlineStoreProduct_gallery_cover_container"),coverImg=document.getElementById("OnlineStoreProduct_gallery_cover_img"),thumbs=document.getElementById("OnlineStoreProduct_gallery_thumbs");if(thumbs){thumbs.onclick=function(e){var target=e.target;while(target!=this){if(target.nodeName=="A"){showThumbnail(target.href,target.title);return false;}target=target.parentNode;}};var imgs=thumbs.getElementsByTagName("img");for(var i=0;i<imgs.length;i++){var img=document.createElement("img");img.src=imgs[i].parentNode.href;}}function showThumbnail(href,title){coverImg.src=href;coverImg.alt=title;coverContainer.href=href;}init();}});(function(window,WA,undefined){if(!window.WaPollValidator){window.WaPollValidator=PollValidator;}function PollValidator(){var self=this,pollGadgetSelector=".WaGadgetPoll",questionBlockSelector=".votingBlock";init();function init(){jq$(pollGadgetSelector).on("click","form input[type=submit]",onSubmitPoll);jq$(pollGadgetSelector).on("click","form input[type=checkbox], form input[type=radio]",onPressCheckbox);}function onSubmitPoll(e){var questionNodes=[].slice.call(document.querySelectorAll(pollGadgetSelector+" "+questionBlockSelector)),result=true;questionNodes.forEach(function(item,i,arr){if(checkQuestionNode(item)===false){result=false;}});return result;}function checkQuestionNode(questionNode){var limit=getLimitForQuestion(questionNode),selected=getCheckedOptions(questionNode);if(selected<1){showError(questionNode,"Select at least one option");return false;}if(limit>0&&selected>limit){showError(questionNode,"Maximum "+limit+" options");return false;}return true;}function onPressCheckbox(e){var questionNode=e.target.closest(questionBlockSelector),limit=getLimitForQuestion(questionNode),selected=getCheckedOptions(questionNode);if(selected>0&&(selected<=limit||limit==0)){hideError(questionNode);}}function getLimitForQuestion(questionNode){return +questionNode.getAttribute("data-limit")||0;}function getCheckedOptions(questionNode){return questionNode.querySelectorAll(".optionItem input[type=checkbox]:checked, .optionItem input[type=radio]:checked").length||0;}function showError(questionNode,text){if(text){questionNode.querySelector(".errorMsg").innerHTML=text;}questionNode.querySelector(".errorMsg").style.display="block";}function hideError(questionNode){questionNode.querySelector(".errorMsg").style.display="none";}}var instance;PollValidator.getInstance=function(){return instance||(instance=new PollValidator());};})(window,window.WA);(function(ELEMENT){ELEMENT.matches=ELEMENT.matches||ELEMENT.mozMatchesSelector||ELEMENT.msMatchesSelector||ELEMENT.oMatchesSelector||ELEMENT.webkitMatchesSelector;ELEMENT.closest=ELEMENT.closest||function closest(selector){if(!this){return null;}if(this.matches(selector)){return this;}if(!this.parentElement){return null;}else{return this.parentElement.closest(selector);}};}(Element.prototype));(function(){if(!window.WASearchResultsGadget){window.WASearchResultsGadget=WASearchResultsGadget;}function WASearchResultsGadget(args){var pThis=this;pThis.init=init;pThis.doSearch=doSearch;var model,foundLabel,searchBox,resultDiv,foundRecordsSpan,recordsFoundMessage,pager,selectedTypesCaption,searchInProgress,thereWasAnotherRequest;model=args||{};function init(){if(model.searchUnavailable==true){return;}var prefix="#"+model.modelId;searchInProgress=false;thereWasAnotherRequest=false;searchBox=jq$(prefix+"_searchBox");resultDiv=jq$(prefix+"_resultDiv");foundLabel=jq$(prefix+"_foundLabel");foundRecordsSpan=jq$(prefix+"_foundRecords");recordsFoundMessage=jq$(prefix+"_recordsFoundMessage");selectedTypesCaption=jq$(prefix+"_selectedTypesCaption");pager=jq$(prefix+"_pager");$("input[name="+model.modelId+"_type]").on("click",checkedChanged);$(prefix+"_togglePanelLink").on("click",function(){jq$(prefix+"_contentTypesPanel").slideToggle(100);jq$(this).toggleClass("fa-caret-down","fa-caret-right");});var timer;var delay=600;searchBox.bind("input",function(){window.clearTimeout(timer);timer=window.setTimeout(function(){doSearch(1);},delay);});searchBox.focus();if(searchBox.val().length>0){doSearch(model.pageNumber);}}function doSearch(pageNum){if(!pageNum){return;}thereWasAnotherRequest=false;if(searchBox.val().length==0){setEmptyResult();return;}var filter=getSelectedTypes();if(filter==0){setEmptyResult();return;}if(searchInProgress){thereWasAnotherRequest=true;return;}searchInProgress=true;foundRecordsSpan.html(model.text.searchInProgress);jq$.ajax({type:"POST",url:model.searchActionUrl,data:JSON.stringify({"q":searchBox.val(),"types":filter,"pageNumber":pageNum,"noPaging":model.noPaging}),contentType:"application/json; charset=utf-8",dataType:"text"}).done(function(data){searchInProgress=false;if(thereWasAnotherRequest){doSearch(1);}else{foundLabel.show();var jsonData=JSON.parse(data.replace("while(1); ","","i").trim());if(jsonData.entities.length>0){renderResult(jsonData);}else{setEmptyResult();}var url=WA.String.format(model.getUrlTemplate,encodeURIComponent(searchBox.val()),filter,pageNum);if(model.noPaging==true){url=url+"&nopaging=true";}window.history.replaceState({},"",url);}}).fail(function(){searchInProgress=false;if(thereWasAnotherRequest){doSearch(1);}else{recordsFoundMessage.html("Search is not available now.");}});}function checkedChanged(){refreshSelectedTypesCaption();doSearch(1);}function refreshSelectedTypesCaption(){var all=true;var captions=new Array();$("input[name="+model.modelId+"_type]").each(function(){if($(this).attr("checked")=="checked"){captions.push($("label[for="+$(this).attr("id")+"]:first").text());}else{all=false;}});var text="";if(all){text="all";}else{if(captions.length==0){text="none";}else{text=captions.join(", ");}}selectedTypesCaption.html(WA.String.format(model.text.contentTypeTemplate,text));}function getSelectedTypes(){var filter=0;$("input[name="+model.modelId+"_type]:checked").each(function(){filter=filter|$(this).attr("value");});return filter;}function setEmptyResult(){setFoundRecords(0,model.text.noResultsFound);resultDiv.html("");pager.html("");}function renderResult(data){var items=data.entities;var a=new Array();for(var i=0;i<items.length;i++){var o=items[i];var text=o.text;a.push('<div class="row">');a.push('<div class="title"><a class="'+o.className+'" title="'+o.tooltip+'" href="'+o.url+'"><span>'+o.title+"</span></a></div>");a.push('<div class="text">'+o.text+"</div>");if(o.additionalInfo!=""){a.push('<div class="additionalInfo">'+o.additionalInfo+"</div>");}a.push("</div>");}resultDiv.html(a.join(""));setFoundRecords(data.recordsFound,data.recordsFoundMessage);renderPager(parseInt(data.pagesFound),parseInt(data.currentPage),9);}function setFoundRecords(recordsFound,message){foundRecordsSpan.html(""+recordsFound+"");recordsFoundMessage.html(message);}function renderPager(pagesCount,currentPage,pagesToDisplay){if(pagesCount==1){pager.html("");return;}var pagerItems=[];pagerItems.push({text:model.text.first,page:currentPage==1?null:1});pagerItems.push({text:model.text.previous,page:currentPage==1?null:currentPage-1});var firstPage,lastPage;if(pagesCount<pagesToDisplay){firstPage=1;lastPage=pagesCount;}else{firstPage=Math.min(currentPage-Math.floor(pagesToDisplay/2),pagesCount-pagesToDisplay+1);if(firstPage<1){firstPage=1;}lastPage=firstPage+pagesToDisplay-1;}for(var i=firstPage;i<=lastPage;i++){pagerItems.push({text:i,page:currentPage==i?null:i});}pagerItems.push({text:model.text.next,page:currentPage==pagesCount?null:currentPage+1});pagerItems.push({text:model.text.last,page:currentPage==pagesCount?null:pagesCount});var arr=renderPagerItems(pagerItems);}function renderPagerItems(jsonArr){var i,linkElements,a=new Array();WA.Array.foreach(jsonArr,function(item){if(item.page){a.push('<a style="cursor: pointer;" data-page="'+item.page+'">'+item.text+"</a>");}else{a.push("<span>"+item.text+"</span>");}});pager.html(a.join("&nbsp;&nbsp;"));linkElements=document.body.querySelectorAll("A[data-page]");for(i=0;i<linkElements.length;i++){WA.addHandler(linkElements[i],"click",gotoPage);}}function gotoPage(e){var targetElement;if(!e&&event){e=event;}if(e){targetElement=e.target||e.srcElement;if(targetElement){doSearch(targetElement.getAttribute("data-page"));}}}init();}})();
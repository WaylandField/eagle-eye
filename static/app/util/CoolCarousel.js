Ext.define('Kitchensink.util.CoolCarousel',{
    extend: 'Ext.Component',
    gotoItem: function(index){
        if(this.carousel){
            this.carousel.gotoItem(index);
        }
    },
    create : function(a, b){
        var parent = this;


/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);

(function(a,b){function c(a){return K.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function d(a){if(!cl[a]){var b=H.body,c=K("<"+a+">").appendTo(b),d=c.css("display");c.remove();if(d==="none"||d===""){cm||(cm=H.createElement("iframe"),cm.frameBorder=cm.width=cm.height=0),b.appendChild(cm);if(!cn||!cm.createElement)cn=(cm.contentWindow||cm.contentDocument).document,cn.write((H.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cn.close();c=cn.createElement(a),cn.body.appendChild(c),d=K.css(c,"display"),b.removeChild(cm)}cl[a]=d}return cl[a]}function e(a,b){var c={};return K.each(cr.concat.apply([],cr.slice(0,b)),function(){c[this]=a}),c}function f(){cs=b}function g(){return setTimeout(f,0),cs=K.now()}function h(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function i(){try{return new a.XMLHttpRequest}catch(b){}}function j(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},f,g,h=d.length,i,j=d[0],k,l,m,n,o;for(f=1;f<h;f++){if(f===1)for(g in a.converters)typeof g=="string"&&(e[g.toLowerCase()]=a.converters[g]);k=j,j=d[f];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=e[l]||e["* "+j];if(!m){o=b;for(n in e){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=e[i[1]+" "+j];if(o){n=e[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&K.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function k(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j)return j!==f[0]&&f.unshift(j),d[j]}function l(a,b,c,d){if(K.isArray(b))K.each(b,function(b,e){c||bN.test(a)?d(a,e):l(a+"["+(typeof e=="object"||K.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)l(a+"["+e+"]",b[e],c,d);else d(a,b)}function m(a,c){var d,e,f=K.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&K.extend(!0,a,e)}function n(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===ca,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=n(a,c,d,e,l,g)));return(k||!l)&&!g["*"]&&(l=n(a,c,d,e,"*",g)),l}function o(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(K.isFunction(c)){var d=b.toLowerCase().split(bY),e=0,f=d.length,g,h,i;for(;e<f;e++)g=d[e],i=/^\+/.test(g),i&&(g=g.substr(1)||"*"),h=a[g]=a[g]||[],h[i?"unshift":"push"](c)}}}function p(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bH:bI;if(d>0)return c!=="border"&&K.each(e,function(){c||(d-=parseFloat(K.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(K.css(a,c+this))||0:d-=parseFloat(K.css(a,"border"+this+"Width"))||0}),d+"px";d=bJ(a,b,b);if(d<0||d==null)d=a.style[b]||0;return d=parseFloat(d)||0,c&&K.each(e,function(){d+=parseFloat(K.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(K.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(K.css(a,c+this))||0)}),d+"px"}function q(a,b){b.src?K.ajax({url:b.src,async:!1,dataType:"script"}):K.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function r(a){K.nodeName(a,"input")?s(a):"getElementsByTagName"in a&&K.grep(a.getElementsByTagName("input"),s)}function s(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function t(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function u(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(K.expando)}}function v(a,b){if(b.nodeType===1&&!!K.hasData(a)){var c=K.expando,d=K.data(a),e=K.data(b,d);if(d=d[c]){var f=d.events;e=e[c]=K.extend({},d);if(f){delete e.handle,e.events={};for(var g in f)for(var h=0,i=f[g].length;h<i;h++)K.event.add(b,g+(f[g][h].namespace?".":"")+f[g][h].namespace,f[g][h],f[g][h].data)}}}}function w(a,b){return K.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function x(a,b,c){b=b||0;if(K.isFunction(b))return K.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return K.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=K.grep(a,function(a){return a.nodeType===1});if(bl.test(b))return K.filter(b,d,!c);b=K.filter(b,d)}return K.grep(a,function(a,d){return K.inArray(a,b)>=0===c})}function y(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function z(a,b){return(a&&a!=="*"?a+".":"")+b.replace($,"`").replace(_,"&")}function A(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o=[],p=[],q=K._data(this,"events");if(!(a.liveFired===this||!q||!q.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(m=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var r=q.live.slice(0);for(h=0;h<r.length;h++)f=r[h],f.origType.replace(Y,"")===a.type?p.push(f.selector):r.splice(h--,1);e=K(a.target).closest(p,a.currentTarget);for(i=0,j=e.length;i<j;i++){l=e[i];for(h=0;h<r.length;h++){f=r[h];if(l.selector===f.selector&&(!m||m.test(f.namespace))&&!l.elem.disabled){g=l.elem,d=null;if(f.preType==="mouseenter"||f.preType==="mouseleave")a.type=f.preType,d=K(a.relatedTarget).closest(f.selector)[0],d&&K.contains(g,d)&&(d=g);(!d||d!==g)&&o.push({elem:g,handleObj:f,level:l.level})}}}for(i=0,j=o.length;i<j;i++){e=o[i];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,n=e.handleObj.origHandler.apply(e.elem,arguments);if(n===!1||a.isPropagationStopped()){c=e.level,n===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function B(a,c,d){var e=K.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,K.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function C(){return!0}function D(){return!1}function E(a,c,d){var e=c+"defer",f=c+"queue",g=c+"mark",h=K.data(a,e,b,!0);h&&(d==="queue"||!K.data(a,f,b,!0))&&(d==="mark"||!K.data(a,g,b,!0))&&setTimeout(function(){!K.data(a,f,b,!0)&&!K.data(a,g,b,!0)&&(K.removeData(a,e,!0),h.resolve())},0)}function F(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function G(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(O,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:K.isNaN(d)?N.test(d)?K.parseJSON(d):d:parseFloat(d)}catch(f){}K.data(a,c,d)}else d=b}return d}var H=a.document,I=a.navigator,J=a.location,K=function(){function c(){if(!d.isReady){try{H.documentElement.doScroll("left")}catch(a){setTimeout(c,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=I.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,J=Array.prototype.indexOf,K={};return d.fn=d.prototype={constructor:d,init:function(a,c,e){var f,g,i,j;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(a==="body"&&!c&&H.body)return this.context=H,this[0]=H.body,this.selector=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?f=h.exec(a):f=[null,a,null];if(f&&(f[1]||!c)){if(f[1])return c=c instanceof d?c[0]:c,j=c?c.ownerDocument||c:H,i=m.exec(a),i?d.isPlainObject(c)?(a=[H.createElement(i[1])],d.fn.attr.call(a,c,!0)):a=[j.createElement(i[1])]:(i=d.buildFragment([f[1]],[j]),a=(i.cacheable?d.clone(i.fragment):i.fragment).childNodes),d.merge(this,a);g=H.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return e.find(a);this.length=1,this[0]=g}return this.context=H,this.selector=a,this}return!c||c.jquery?(c||e).find(a):this.constructor(c).find(a)}return d.isFunction(a)?e.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),d.makeArray(a,this))},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();return d.isArray(a)?E.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")"),e},each:function(a,b){return d.each(this,a,b)},ready:function(a){return d.bindReady(),A.done(a),this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){return a.$===d&&(a.$=f),b&&a.jQuery===d&&(a.jQuery=e),d},isReady:!1,readyWait:1,holdReady:function(a){a?d.readyWait++:d.ready(!0)},ready:function(a){if(a===!0&&!--d.readyWait||a!==!0&&!d.isReady){if(!H.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;A.resolveWith(H,[d]),d.fn.trigger&&d(H).trigger("ready").unbind("ready")}},bindReady:function(){if(!A){A=d._Deferred();if(H.readyState==="complete")return setTimeout(d.ready,1);if(H.addEventListener)H.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",d.ready,!1);else if(H.attachEvent){H.attachEvent("onreadystatechange",B),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}H.documentElement.doScroll&&b&&c()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):K[C.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var e;for(e in a);return e===b||D.call(a,e)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=d.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(c){var e,f;try{a.DOMParser?(f=new DOMParser,e=f.parseFromString(c,"text/xml")):(e=new ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(c))}catch(g){e=b}return(!e||!e.documentElement||e.getElementsByTagName("parsererror").length)&&d.error("Invalid XML: "+c),e},noop:function(){},globalEval:function(b){b&&i.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?E.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(J)return J.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];return a.length=d,a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,e){var f,g,h=[],i=0,j=a.length,k=a instanceof d||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||d.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,e),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,e),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var e=a[c];c=a,a=e}if(!d.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};return g.guid=a.guid=a.guid||g.guid||d.guid++,g},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(c,e){return e&&e instanceof d&&!(e instanceof a)&&(e=a(e)),d.fn.init.call(this,c,e,b)},a.fn.init.prototype=a.fn;var b=a(H);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){K["[object "+b+"]"]=b.toLowerCase()}),z=d.uaMatch(y),z.browser&&(d.browser[z.browser]=!0,d.browser.version=z.version),d.browser.webkit&&(d.browser.safari=!0),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(H),H.addEventListener?B=function(){H.removeEventListener("DOMContentLoaded",B,!1),d.ready()}:H.attachEvent&&(B=function(){H.readyState==="complete"&&(H.detachEvent("onreadystatechange",B),d.ready())}),d}(),L="done fail isResolved isRejected promise then always pipe".split(" "),M=[].slice;K.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,f,g,h,i,j;b&&(j=b,b=0);for(f=0,g=c.length;f<g;f++)h=c[f],i=K.type(h),i==="array"?e.done.apply(e,h):i==="function"&&a.push(h);j&&e.resolveWith(j[0],j[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){return e.resolveWith(this,arguments),this},isResolved:function(){return!!c||!!b},cancel:function(){return d=1,a=[],this}};return e},Deferred:function(a){var b=K._Deferred(),c=K._Deferred(),d;return K.extend(b,{then:function(a,c){return b.done(a).fail(c),this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return K.Deferred(function(d){K.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],f=c[1],g;K.isFunction(e)?b[a](function(){g=e.apply(this,arguments),g&&K.isFunction(g.promise)?g.promise().then(d.resolve,d.reject):d[f+"With"](this===b?d:this,[g])}):b[a](d[f])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=L.length;while(c--)a[L[c]]=b[L[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b),b},when:function(a){function b(a){return function(b){c[a]=arguments.length>1?M.call(arguments,0):b,--f||g.resolveWith(g,M.call(c,0))}}var c=arguments,d=0,e=c.length,f=e,g=e<=1&&a&&K.isFunction(a.promise)?a:K.Deferred();if(e>1){for(;d<e;d++)c[d]&&K.isFunction(c[d].promise)?c[d].promise().then(b(d),g.reject):--f;f||g.resolveWith(g,c)}else g!==a&&g.resolveWith(g,e?[a]:[]);return g.promise()}}),K.support=function(){var a=H.createElement("div"),b=H.documentElement,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",c=a.getElementsByTagName("*"),d=a.getElementsByTagName("a")[0];if(!c||!c.length||!d)return{};e=H.createElement("select"),f=e.appendChild(H.createElement("option")),g=a.getElementsByTagName("input")[0],i={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.55$/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:g.value==="on",optSelected:f.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},g.checked=!0,i.noCloneChecked=g.cloneNode(!0).checked,e.disabled=!0,i.optDisabled=!f.disabled;try{delete a.test}catch(t){i.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){i.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),g=H.createElement("input"),g.value="t",g.setAttribute("type","radio"),i.radioValue=g.value==="t",g.setAttribute("checked","checked"),a.appendChild(g),j=H.createDocumentFragment(),j.appendChild(a.firstChild),i.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",k=H.getElementsByTagName("body")[0],m=H.createElement(k?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},k&&K.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in n)m.style[r]=n[r];m.appendChild(a),l=k||b,l.insertBefore(m,l.firstChild),i.appendChecked=g.checked,i.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,i.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",i.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",o=a.getElementsByTagName("td"),s=o[0].offsetHeight===0,o[0].style.display="",o[1].style.display="none",i.reliableHiddenOffsets=s&&o[0].offsetHeight===0,a.innerHTML="",H.defaultView&&H.defaultView.getComputedStyle&&(h=H.createElement("div"),h.style.width="0",h.style.marginRight="0",a.appendChild(h),i.reliableMarginRight=(parseInt((H.defaultView.getComputedStyle(h,null)||{marginRight:0}).marginRight,10)||0)===0),m.innerHTML="",l.removeChild(m);if(a.attachEvent)for(r in{submit:1,change:1,focusin:1})q="on"+r,s=q in a,s||(a.setAttribute(q,"return;"),s=typeof a[q]=="function"),i[r+"Bubbles"]=s;return m=j=e=f=k=h=a=g=null,i}(),K.boxModel=K.support.boxModel;var N=/^(?:\{.*\}|\[.*\])$/,O=/([A-Z])/g;K.extend({cache:{},uuid:0,expando:"jQuery"+(K.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?K.cache[a[K.expando]]:a[K.expando],!!a&&!F(a)},data:function(a,c,d,e){if(!!K.acceptData(a)){var f,g,h=K.expando,i=typeof c=="string",j=a.nodeType,k=j?K.cache:a,l=j?a[K.expando]:a[K.expando]&&K.expando;if((!l||e&&l&&k[l]&&!k[l][h])&&i&&d===b)return;l||(j?a[K.expando]=l=++K.uuid:l=K.expando),k[l]||(k[l]={},j||(k[l].toJSON=K.noop));if(typeof c=="object"||typeof c=="function")e?k[l][h]=K.extend(k[l][h],c):k[l]=K.extend(k[l],c);return f=k[l],e&&(f[h]||(f[h]={}),f=f[h]),d!==b&&(f[K.camelCase(c)]=d),c==="events"&&!f[c]?f[h]&&f[h].events:(i?(g=f[c],g==null&&(g=f[K.camelCase(c)])):g=f,g)}},removeData:function(a,b,c){if(!!K.acceptData(a)){var d,e=K.expando,f=a.nodeType,g=f?K.cache:a,h=f?a[K.expando]:K.expando;if(!g[h])return;if(b){d=c?g[h][e]:g[h];if(d){d[b]||(b=K.camelCase(b)),delete d[b];if(!F(d))return}}if(c){delete g[h][e];if(!F(g[h]))return}var i=g[h][e];K.support.deleteExpando||!g.setInterval?delete g[h]:g[h]=null,i?(g[h]={},f||(g[h].toJSON=K.noop),g[h][e]=i):f&&(K.support.deleteExpando?delete a[K.expando]:a.removeAttribute?a.removeAttribute(K.expando):a[K.expando]=null)}},_data:function(a,b,c){return K.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=K.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),K.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=K.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,f;for(var g=0,h=e.length;g<h;g++)f=e[g].name,f.indexOf("data-")===0&&(f=K.camelCase(f.substring(5)),G(this[0],f,d[f]))}}return d}if(typeof a=="object")return this.each(function(){K.data(this,a)});var i=a.split(".");return i[1]=i[1]?"."+i[1]:"",c===b?(d=this.triggerHandler("getData"+i[1]+"!",[i[0]]),d===b&&this.length&&(d=K.data(this[0],a),d=G(this[0],a,d)),d===b&&i[1]?this.data(i[0]):d):this.each(function(){var b=K(this),d=[i[0],c];b.triggerHandler("setData"+i[1]+"!",d),K.data(this,a,c),b.triggerHandler("changeData"+i[1]+"!",d)})},removeData:function(a){return this.each(function(){K.removeData(this,a)})}}),K.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",K.data(a,c,(K.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",f=a?0:(K.data(c,e,b,!0)||1)-1;f?K.data(c,e,f,!0):(K.removeData(c,e,!0),E(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=K.data(a,c,b,!0);return d&&(!e||K.isArray(d)?e=K.data(a,c,K.makeArray(d),!0):e.push(d)),e||[]}},dequeue:function(a,b){b=b||"fx";var c=K.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){K.dequeue(a,b)})),c.length||(K.removeData(a,b+"queue",!0),E(a,b,"queue"))}}),K.fn.extend({queue:function(a,c){return typeof a!="string"&&(c=a,a="fx"),c===b?K.queue(this[0],a):this.each(function(){var b=K.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&K.dequeue(this,a)})},dequeue:function(a){return this.each(function(){K.dequeue(this,a)})},delay:function(a,b){return a=K.fx?K.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(){var c=this;setTimeout(function(){K.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function d(){--h||e.resolveWith(f,[f])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var e=K.Deferred(),f=this,g=f.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=K.data(f[g],i,b,!0)||(K.data(f[g],j,b,!0)||K.data(f[g],k,b,!0))&&K.data(f[g],i,K._Deferred(),!0))h++,l.done(d);return d(),e.promise()}});var P=/[\n\t\r]/g,Q=/\s+/,R=/\r/g,S=/^(?:button|input)$/i,T=/^(?:button|input|object|select|textarea)$/i,U=/^a(?:rea)?$/i,V=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,W,X;K.fn.extend({attr:function(a,b){return K.access(this,a,b,!0,K.attr)},removeAttr:function(a){return this.each(function(){K.removeAttr(this,a)})},prop:function(a,b){return K.access(this,a,b,!0,K.prop)},removeProp:function(a){return a=K.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(K.isFunction(a))return this.each(function(b){K(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(Q);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=K.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(K.isFunction(a))return this.each(function(b){K(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(Q);for(d=0,e=this.length;d<e;d++){f=this[d];if(f.nodeType===1&&f.className)if(a){g=(" "+f.className+" ").replace(P," ");for(h=0,i=c.length;h<i;h++)g=g.replace(" "+c[h]+" "," ");f.className=K.trim(g)}else f.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return K.isFunction(a)?this.each(function(c){K(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=K(this),h=b,i=a.split(Q);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&K._data(this,"__className__",this.className),this.className=this.className||a===!1?"":K._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(P," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length)return e?(c=K.valHooks[e.nodeName.toLowerCase()]||K.valHooks[e.type],c&&"get"in c&&(d=c.get(e,"value"))!==b?d:(d=e.value,typeof d=="string"?d.replace(R,""):d==null?"":d)):b;var f=K.isFunction(a);return this.each(function(d){var e=K(this),g;if(this.nodeType===1){f?g=a.call(this,d,e.val()):g=a,g==null?g="":typeof g=="number"?g+="":K.isArray(g)&&(g=K.map(g,function(a){return a==null?"":a+""})),c=K.valHooks[this.nodeName.toLowerCase()]||K.valHooks[this.type];if(!c||!("set"in c)||c.set(this,g,"value")===b)this.value=g}})}}),K.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,f=a.type==="select-one";if(c<0)return null;for(var g=f?c:0,h=f?c+1:e.length;g<h;g++){var i=e[g];if(i.selected&&(K.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!K.nodeName(i.parentNode,"optgroup"))){b=K(i).val();if(f)return b;d.push(b)}}return f&&!d.length&&e.length?K(e[c]).val():d},set:function(a,b){var c=K.makeArray(b);return K(a).find("option").each(function(){this.selected=K.inArray(K(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var f=a.nodeType;if(!a||f===3||f===8||f===2)return b;if(e&&c in K.attrFn)return K(a)[c](d);if("getAttribute"in a){var g,h,i=f!==1||!K.isXMLDoc(a);return i&&(c=K.attrFix[c]||c,h=K.attrHooks[c],h||(V.test(c)?h=X:W&&(h=W))),d!==b?d===null?(K.removeAttr(a,c),b):h&&"set"in h&&i&&(g=h.set(a,d,c))!==b?g:(a.setAttribute(c,""+d),d):h&&"get"in h&&i&&(g=h.get(a,c))!==null?g:(g=a.getAttribute(c),g===null?b:g)}return K.prop(a,c,d)},removeAttr:function(a,b){var c;a.nodeType===1&&(b=K.attrFix[b]||b,K.attr(a,b,""),a.removeAttribute(b),V.test(b)&&(c=K.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(S.test(a.nodeName)&&a.parentNode)K.error("type property can't be changed");else if(!K.support.radioValue&&b==="radio"&&K.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return W&&K.nodeName(a,"button")?W.get(a,b):b in a?a.value:null},set:function(a,b,c){if(W&&K.nodeName(a,"button"))return W.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var f,g,h=e!==1||!K.isXMLDoc(a);return h&&(c=K.propFix[c]||c,g=K.propHooks[c]),d!==b?g&&"set"in g&&(f=g.set(a,d,c))!==b?f:a[c]=d:g&&"get"in g&&(f=g.get(a,c))!==null?f:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):T.test(a.nodeName)||U.test(a.nodeName)&&a.href?0:b}}}}),K.attrHooks.tabIndex=K.propHooks.tabIndex,X={get:function(a,c){var d;return K.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?K.removeAttr(a,c):(d=K.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},K.support.getSetAttribute||(W=K.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=H.createAttribute(c),a.setAttributeNode(d)),d.nodeValue=b+""}},K.each(["width","height"],function(a,b){K.attrHooks[b]=K.extend(K.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})})),K.support.hrefNormalized||K.each(["href","src","width","height"],function(a,c){K.attrHooks[c]=K.extend(K.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),K.support.style||(K.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),K.support.optSelected||(K.propHooks.selected=K.extend(K.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),K.support.checkOn||K.each(["radio","checkbox"],function(){K.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]=K.extend(K.valHooks[this],{set:function(a,b){if(K.isArray(b))return a.checked=K.inArray(K(a).val(),b)>=0}})});var Y=/\.(.*)$/,Z=/^(?:textarea|input|select)$/i,$=/\./g,_=/ /g,ba=/[^\w\s.|`]/g,bb=function(a){return a.replace(ba,"\\$&")};K.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=D;else if(!d)return;var f,g;d.handler&&(f=d,d=f.handler),d.guid||(d.guid=K.guid++);var h=K._data(a);if(!h)return;var i=h.events,j=h.handle;i||(h.events=i={}),j||(h.handle=j=function(a){return typeof K!="undefined"&&(!a||K.event.triggered!==a.type)?K.event.handle.apply(j.elem,arguments):b}),j.elem=a,c=c.split(" ");var k,l=0,m;while(k=c[l++]){g=f?K.extend({},f):{handler:d,data:e},k.indexOf(".")>-1?(m=k.split("."),k=m.shift(),g.namespace=m.slice(0).sort().join(".")):(m=[],g.namespace=""),g.type=k,g.guid||(g.guid=d.guid);var n=i[k],o=K.event.special[k]||{};if(!n){n=i[k]=[];if(!o.setup||o.setup.call(a,e,m,j)===!1)a.addEventListener?a.addEventListener(k,j,!1):a.attachEvent&&a.attachEvent("on"+k,j)}o.add&&(o.add.call(a,g),g.handler.guid||(g.handler.guid=d.guid)),n.push(g),K.event.global[k]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=D);var f,g,h,i,j=0,k,l,m,n,o,p,q,r=K.hasData(a)&&K._data(a),s=r&&r.events;if(!r||!s)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(g in s)K.event.remove(a,g+c);return}c=c.split(" ");while(g=c[j++]){q=g,p=null,k=g.indexOf(".")<0,l=[],k||(l=g.split("."),g=l.shift(),m=new RegExp("(^|\\.)"+K.map(l.slice(0).sort(),bb).join("\\.(?:.*\\.)?")+"(\\.|$)")),o=s[g];if(!o)continue;if(!d){for(i=0;i<o.length;i++){p=o[i];if(k||m.test(p.namespace))K.event.remove(a,q,p.handler,i),o.splice(i--,1)}continue}n=K.event.special[g]||{};for(i=e||0;i<o.length;i++){p=o[i];if(d.guid===p.guid){if(k||m.test(p.namespace))e==null&&o.splice(i--,1),n.remove&&n.remove.call(a,p);if(e!=null)break}}if(o.length===0||e!=null&&o.length===1)(!n.teardown||n.teardown.call(a,l)===!1)&&K.removeEvent(a,g,r.handle),f=null,delete s[g]}if(K.isEmptyObject(s)){var t=r.handle;t&&(t.elem=null),delete r.events,delete r.handle,K.isEmptyObject(r)&&K.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,f){var g=c.type||c,h=[],i;g.indexOf("!")>=0&&(g=g.slice(0,-1),i=!0),g.indexOf(".")>=0&&(h=g.split("."),g=h.shift(),h.sort());if(!!e&&!K.event.customEvent[g]||!!K.event.global[g]){c=typeof c=="object"?c[K.expando]?c:new K.Event(g,c):new K.Event(g),c.type=g,c.exclusive=i,c.namespace=h.join("."),c.namespace_re=new 
RegExp("(^|\\.)"+h.join("\\.(?:.*\\.)?")+"(\\.|$)");if(f||!e)c.preventDefault(),c.stopPropagation();if(!e){K.each(K.cache,function(){var a=K.expando,b=this[a];b&&b.events&&b.events[g]&&K.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?K.makeArray(d):[],d.unshift(c);var j=e,k=g.indexOf(":")<0?"on"+g:"";do{var l=K._data(j,"handle");c.currentTarget=j,l&&l.apply(j,d),k&&K.acceptData(j)&&j[k]&&j[k].apply(j,d)===!1&&(c.result=!1,c.preventDefault()),j=j.parentNode||j.ownerDocument||j===c.target.ownerDocument&&a}while(j&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var m,n=K.event.special[g]||{};if((!n._default||n._default.call(e.ownerDocument,c)===!1)&&(g!=="click"||!K.nodeName(e,"a"))&&K.acceptData(e)){try{k&&e[g]&&(m=e[k],m&&(e[k]=null),K.event.triggered=g,e[g]())}catch(o){}m&&(e[k]=m),K.event.triggered=b}}return c.result}},handle:function(c){c=K.event.fix(c||a.event);var d=((K._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,f=Array.prototype.slice.call(arguments,0);f[0]=c,c.currentTarget=this;for(var g=0,h=d.length;g<h;g++){var i=d[g];if(e||c.namespace_re.test(i.namespace)){c.handler=i.handler,c.data=i.data,c.handleObj=i;var j=i.handler.apply(this,f);j!==b&&(c.result=j,j===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[K.expando])return a;var c=a;a=K.Event(c);for(var d=this.props.length,e;d;)e=this.props[--d],a[e]=c[e];a.target||(a.target=a.srcElement||H),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var f=a.target.ownerDocument||H,g=f.documentElement,h=f.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0),a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}return a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0),a},guid:1e8,proxy:K.proxy,special:{ready:{setup:K.bindReady,teardown:K.noop},live:{add:function(a){K.event.add(this,z(a.origType,a.selector),K.extend({},a,{handler:A,guid:a.handler.guid}))},remove:function(a){K.event.remove(this,z(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){K.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},K.removeEvent=H.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},K.Event=function(a,b){if(!this.preventDefault)return new K.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?C:D):this.type=a,b&&K.extend(this,b),this.timeStamp=K.now(),this[K.expando]=!0},K.Event.prototype={preventDefault:function(){this.isDefaultPrevented=C;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=C;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=C,this.stopPropagation()},isDefaultPrevented:D,isPropagationStopped:D,isImmediatePropagationStopped:D};var bc=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=K.contains(this,b)),c||(K.event.handle.apply(this,arguments),a.type=d))},bd=function(a){a.type=a.data,K.event.handle.apply(this,arguments)};K.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){K.event.special[a]={setup:function(c){K.event.add(this,b,c&&c.selector?bd:bc,a)},teardown:function(a){K.event.remove(this,b,a&&a.selector?bd:bc)}}}),K.support.submitBubbles||(K.event.special.submit={setup:function(a,b){if(!K.nodeName(this,"form"))K.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=K.nodeName(b,"input")||K.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&K(b).closest("form").length&&B("submit",this,arguments)}),K.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=K.nodeName(b,"input")||K.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&K(b).closest("form").length&&a.keyCode===13&&B("submit",this,arguments)});else return!1},teardown:function(a){K.event.remove(this,".specialSubmit")}});if(!K.support.changeBubbles){var be,bf=function(a){var b=K.nodeName(a,"input")?a.type:"",c=a.value;return b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?K.map(a.options,function(a){return a.selected}).join("-"):"":K.nodeName(a,"select")&&(c=a.selectedIndex),c},bg=function(a){var c=a.target,d,e;if(!!Z.test(c.nodeName)&&!c.readOnly){d=K._data(c,"_change_data"),e=bf(c),(a.type!=="focusout"||c.type!=="radio")&&K._data(c,"_change_data",e);if(d===b||e===d)return;if(d!=null||e)a.type="change",a.liveFired=b,K.event.trigger(a,arguments[1],c)}};K.event.special.change={filters:{focusout:bg,beforedeactivate:bg,click:function(a){var b=a.target,c=K.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||K.nodeName(b,"select"))&&bg.call(this,a)},keydown:function(a){var b=a.target,c=K.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!K.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&bg.call(this,a)},beforeactivate:function(a){var b=a.target;K._data(b,"_change_data",bf(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in be)K.event.add(this,c+".specialChange",be[c]);return Z.test(this.nodeName)},teardown:function(a){return K.event.remove(this,".specialChange"),Z.test(this.nodeName)}},be=K.event.special.change.filters,be.focus=be.beforeactivate}K.support.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){var c=K.event.fix(a);c.type=b,c.originalEvent={},K.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;K.event.special[b]={setup:function(){d++===0&&H.addEventListener(a,c,!0)},teardown:function(){--d===0&&H.removeEventListener(a,c,!0)}}}),K.each(["bind","one"],function(a,c){K.fn[c]=function(a,d,e){var f;if(typeof a=="object"){for(var g in a)this[c](g,d,a[g],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(f=function(a){return K(this).unbind(a,f),e.apply(this,arguments)},f.guid=e.guid||K.guid++):f=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var h=0,i=this.length;h<i;h++)K.event.add(this[h],a,f,d);return this}}),K.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)K.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){K.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return K.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||K.guid++,d=0,e=function(c){var e=(K.data(this,"lastToggle"+a.guid)||0)%d;return K.data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var bh={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};K.each(["live","die"],function(a,c){K.fn[c]=function(a,d,e,f){var g,h=0,i,j,k,l=f||this.selector,m=f?this:K(this.context);if(typeof a=="object"&&!a.preventDefault){for(var n in a)m[c](n,d,a[n],l);return this}if(c==="die"&&!a&&f&&f.charAt(0)===".")return m.unbind(f),this;if(d===!1||K.isFunction(d))e=d||D,d=b;a=(a||"").split(" ");while((g=a[h++])!=null){i=Y.exec(g),j="",i&&(j=i[0],g=g.replace(Y,""));if(g==="hover"){a.push("mouseenter"+j,"mouseleave"+j);continue}k=g,bh[g]?(a.push(bh[g]+j),g=g+j):g=(bh[g]||g)+j;if(c==="live")for(var o=0,p=m.length;o<p;o++)K.event.add(m[o],"live."+z(g,l),{data:d,selector:l,handler:e,origType:g,origHandler:e,preType:k});else m.unbind("live."+z(g,l),e)}return this}}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){K.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.bind(b,a,c):this.trigger(b)},K.attrFn&&(K.attrFn[b]=!0)}),function(){function a(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function c(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){return h=!1,0});var k=function(a,b,c,e){c=c||[],b=b||H;var g=b;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!="string")return c;var h,i,j,n,o,q,r,s,u=!0,v=k.isXML(b),w=[],x=a;do{d.exec(""),h=d.exec(x);if(h){x=h[3],w.push(h[1]);if(h[2]){n=h[3];break}}}while(h);if(w.length>1&&m.exec(a))if(w.length===2&&l.relative[w[0]])i=t(w[0]+w[1],b);else{i=l.relative[w[0]]?[b]:k(w.shift(),b);while(w.length)a=w.shift(),l.relative[a]&&(a+=w.shift()),i=t(a,i)}else{!e&&w.length>1&&b.nodeType===9&&!v&&l.match.ID.test(w[0])&&!l.match.ID.test(w[w.length-1])&&(o=k.find(w.shift(),b,v),b=o.expr?k.filter(o.expr,o.set)[0]:o.set[0]);if(b){o=e?{expr:w.pop(),set:p(e)}:k.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&b.parentNode?b.parentNode:b,v),i=o.expr?k.filter(o.expr,o.set):o.set,w.length>0?j=p(i):u=!1;while(w.length)q=w.pop(),r=q,l.relative[q]?r=w.pop():q="",r==null&&(r=b),l.relative[q](j,r,v)}else j=w=[]}j||(j=i),j||k.error(q||a);if(f.call(j)==="[object Array]")if(!u)c.push.apply(c,j);else if(b&&b.nodeType===1)for(s=0;j[s]!=null;s++)j[s]&&(j[s]===!0||j[s].nodeType===1&&k.contains(b,j[s]))&&c.push(i[s]);else for(s=0;j[s]!=null;s++)j[s]&&j[s].nodeType===1&&c.push(i[s]);else p(j,c);return n&&(k(n,g,c,e),k.uniqueSort(c)),c};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}return d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]),{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(b,d,f){var g,h=e++,i=a;typeof d=="string"&&!j.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("parentNode",d,h,b,g,f)},"~":function(b,d,f){var g,h=e++,i=a;typeof d=="string"&&!j.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("previousSibling",d,h,b,g,f)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);return a[0]=e++,a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");return!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" "),a},PSEUDO:function(a,b,c,e,f){if(a[1]==="not")if((d.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=k(a[3],null,null,b);else{var g=k.filter(a[3],b,c,!0^f);return c||e.push.apply(e,g),!1}else if(l.match.POS.test(a[0])||l.match.CHILD.test(a[0]))return!0;return a},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){return a=Array.prototype.slice.call(a,0),b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(H.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;H.documentElement.compareDocumentPosition?r=function(a,b){return a===b?(g=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b)return g=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=H.createElement("div"),c="script"+(new Date).getTime(),d=H.documentElement;a.innerHTML="<a name='"+c+"'/>",d.insertBefore(a,d.firstChild),H.getElementById(c)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),d.removeChild(a),d=a=null}(),function(){var a=H.createElement("div");a.appendChild(H.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),H.querySelectorAll&&function(){var a=k,b=H.createElement("div"),c="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,d,e,f){d=d||H;if(!f&&!k.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(g&&(d.nodeType===1||d.nodeType===9)){if(g[1])return p(d.getElementsByTagName(b),e);if(g[2]&&l.find.CLASS&&d.getElementsByClassName)return p(d.getElementsByClassName(g[2]),e)}if(d.nodeType===9){if(b==="body"&&d.body)return p([d.body],e);if(g&&g[3]){var h=d.getElementById(g[3]);if(!h||!h.parentNode)return p([],e);if(h.id===g[3])return p([h],e)}try{return p(d.querySelectorAll(b),e)}catch(i){}}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d,m=d.getAttribute("id"),n=m||c,o=d.parentNode,q=/^\s*[+~]/.test(b);m?n=n.replace(/'/g,"\\$&"):d.setAttribute("id",n),q&&o&&(d=d.parentNode);try{if(!q||o)return p(d.querySelectorAll("[id='"+n+"'] "+b),e)}catch(r){}finally{m||j.removeAttribute("id")}}}return a(b,d,e,f)};for(var d in a)k[d]=a[d];b=null}}(),function(){var a=H.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(H.createElement("div"),"div"),d=!1;try{b.call(H.documentElement,"[test!='']:sizzle")}catch(e){d=!0}k.matchesSelector=function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(e,null,null,[a]).length>0}}}(),function(){var a=H.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),H.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:H.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};K.find=k,K.expr=k.selectors,K.expr[":"]=K.expr.filters,K.unique=k.uniqueSort,K.text=k.getText,K.isXMLDoc=k.isXML,K.contains=k.contains}();var bi=/Until$/,bj=/^(?:parents|prevUntil|prevAll)/,bk=/,/,bl=/^.[^:#\[\.,]*$/,bm=Array.prototype.slice,bn=K.expr.match.POS,bo={children:!0,contents:!0,next:!0,prev:!0};K.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return K(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(K.contains(b[c],this))return!0});var e=this.pushStack("","find",a),f,g,h;for(c=0,d=this.length;c<d;c++){f=e.length,K.find(a,this[c],e);if(c>0)for(g=f;g<e.length;g++)for(h=0;h<f;h++)if(e[h]===e[g]){e.splice(g--,1);break}}return e},has:function(a){var b=K(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(K.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(x(this,a,!1),"not",a)},filter:function(a){return this.pushStack(x(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?K.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,f=this[0];if(K.isArray(a)){var g,h,i={},j=1;if(f&&a.length){for(d=0,e=a.length;d<e;d++)h=a[d],i[h]||(i[h]=bn.test(h)?K(h,b||this.context):h);while(f&&f.ownerDocument&&f!==b){for(h in i)g=i[h],(g.jquery?g.index(f)>-1:K(f).is(g))&&c.push({selector:h,elem:f,level:j});f=f.parentNode,j++}}return c}var k=bn.test(a)||typeof a!="string"?K(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){f=this[d];while(f){if(k?k.index(f)>-1:K.find.matchesSelector(f,a)){c.push(f);break}f=f.parentNode;if(!f||!f.ownerDocument||f===b||f.nodeType===11)break}}return c=c.length>1?K.unique(c):c,this.pushStack(c,"closest",a)},index:function(a){return a?typeof a=="string"?K.inArray(this[0],K(a)):K.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?K(a,b):K.makeArray(a&&a.nodeType?[a]:a),d=K.merge(this.get(),c);return this.pushStack(y(c[0])||y(d[0])?d:K.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),K.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return K.dir(a,"parentNode")},parentsUntil:function(a,b,c){return K.dir(a,"parentNode",c)},next:function(a){return K.nth(a,2,"nextSibling")},prev:function(a){return K.nth(a,2,"previousSibling")},nextAll:function(a){return K.dir(a,"nextSibling")},prevAll:function(a){return K.dir(a,"previousSibling")},nextUntil:function(a,b,c){return K.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return K.dir(a,"previousSibling",c)},siblings:function(a){return K.sibling(a.parentNode.firstChild,a)},children:function(a){return K.sibling(a.firstChild)},contents:function(a){return K.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:K.makeArray(a.childNodes)}},function(a,b){K.fn[a]=function(c,d){var e=K.map(this,b,c),f=bm.call(arguments);return bi.test(a)||(d=c),d&&typeof d=="string"&&(e=K.filter(d,e)),e=this.length>1&&!bo[a]?K.unique(e):e,(this.length>1||bk.test(d))&&bj.test(a)&&(e=e.reverse()),this.pushStack(e,a,f.join(","))}}),K.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?K.find.matchesSelector(b[0],a)?[b[0]]:[]:K.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!K(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bp=/ jQuery\d+="(?:\d+|null)"/g,bq=/^\s+/,br=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,bs=/<([\w:]+)/,bt=/<tbody/i,bu=/<|&#?\w+;/,bv=/<(?:script|object|embed|option|style)/i,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)/,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,K.support.htmlSerialize||(bz._default=[1,"div<div>","</div>"]),K.fn.extend({text:function(a){return K.isFunction(a)?this.each(function(b){var c=K(this);c.text(a.call(this,b,c.text()))}):typeof a!="object"&&a!==b?this.empty().append((this[0]&&this[0].ownerDocument||H).createTextNode(a)):K.text(this)},wrapAll:function(a){if(K.isFunction(a))return this.each(function(b){K(this).wrapAll(a.call(this,b))});if(this[0]){var b=K(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return K.isFunction(a)?this.each(function(b){K(this).wrapInner(a.call(this,b))}):this.each(function(){var b=K(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){K(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=K(arguments[0]);return a.push.apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);return a.push.apply(a,K(arguments[0]).toArray()),a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||K.filter(a,[d]).length)!b&&d.nodeType===1&&(K.cleanData(d.getElementsByTagName("*")),K.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&K.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return K.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(bp,""):null;if(typeof a=="string"&&!bv.test(a)&&(K.support.leadingWhitespace||!bq.test(a))&&!bz[(bs.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(br,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(K.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else K.isFunction(a)?this.each(function(b){var c=K(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){return this[0]&&this[0].parentNode?K.isFunction(a)?this.each(function(b){var c=K(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=K(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;K(this).remove(),b?K(b).before(a):K(c).append(a)})):this.length?this.pushStack(K(K.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,f,g,h,i=a[0],j=[];if(!K.support.checkClone&&arguments.length===3&&typeof i=="string"&&bw.test(i))return this.each(function(){K(this).domManip(a,c,d,!0)});if(K.isFunction(i))return this.each(function(e){var f=K(this);a[0]=i.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){h=i&&i.parentNode,K.support.parentNode&&h&&h.nodeType===11&&h.childNodes.length===this.length?e={fragment:h}:e=K.buildFragment(a,this,j),g=e.fragment,g.childNodes.length===1?f=g=g.firstChild:f=g.firstChild;if(f){c=c&&K.nodeName(f,"tr");for(var k=0,l=this.length,m=l-1;k<l;k++)d.call(c?w(this[k],f):this[k],e.cacheable||l>1&&k<m?K.clone(g,!0,!0):g)}j.length&&K.each(j,q)}return this}}),K.buildFragment=function(a,b,c){var d,e,f,g;return b&&b[0]&&(g=b[0].ownerDocument||b[0]),g.createDocumentFragment||(g=H),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&g===H&&a[0].charAt(0)==="<"&&!bv.test(a[0])&&(K.support.checkClone||!bw.test(a[0]))&&(e=!0,f=K.fragments[a[0]],f&&f!==1&&(d=f)),d||(d=g.createDocumentFragment(),K.clean(a,g,d,c)),e&&(K.fragments[a[0]]=f?d:1),{fragment:d,cacheable:e}},K.fragments={},K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){K.fn[a]=function(c){var d=[],e=K(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&e.length===1)return e[b](this[0]),this;for(var g=0,h=e.length;g<h;g++){var i=(g>0?this.clone(!0):this).get();K(e[g])[b](i),d=d.concat(i)}return this.pushStack(d,a,e.selector)}}),K.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,f,g
;if((!K.support.noCloneEvent||!K.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!K.isXMLDoc(a)){u(a,d),e=t(a),f=t(d);for(g=0;e[g];++g)f[g]&&u(e[g],f[g])}if(b){v(a,d);if(c){e=t(a),f=t(d);for(g=0;e[g];++g)v(e[g],f[g])}}return e=f=null,d},clean:function(a,b,c,d){var e;b=b||H,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||H);var f=[],g;for(var h=0,i;(i=a[h])!=null;h++){typeof i=="number"&&(i+="");if(!i)continue;if(typeof i=="string")if(!bu.test(i))i=b.createTextNode(i);else{i=i.replace(br,"<$1></$2>");var j=(bs.exec(i)||["",""])[1].toLowerCase(),k=bz[j]||bz._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!K.support.tbody){var n=bt.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(g=o.length-1;g>=0;--g)K.nodeName(o[g],"tbody")&&!o[g].childNodes.length&&o[g].parentNode.removeChild(o[g])}!K.support.leadingWhitespace&&bq.test(i)&&m.insertBefore(b.createTextNode(bq.exec(i)[0]),m.firstChild),i=m.childNodes}var p;if(!K.support.appendChecked)if(i[0]&&typeof (p=i.length)=="number")for(g=0;g<p;g++)r(i[g]);else r(i);i.nodeType?f.push(i):f=K.merge(f,i)}if(c){e=function(a){return!a.type||bx.test(a.type)};for(h=0;f[h];h++)if(d&&K.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))d.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{if(f[h].nodeType===1){var q=K.grep(f[h].getElementsByTagName("script"),e);f.splice.apply(f,[h+1,0].concat(q))}c.appendChild(f[h])}}return f},cleanData:function(a){var b,c,d=K.cache,e=K.expando,f=K.event.special,g=K.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&K.noData[i.nodeName.toLowerCase()])continue;c=i[K.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var j in b.events)f[j]?K.event.remove(i,j):K.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[K.expando]:i.removeAttribute&&i.removeAttribute(K.expando),delete d[c]}}}});var bA=/alpha\([^)]*\)/i,bB=/opacity=([^)]*)/,bC=/([A-Z]|^ms)/g,bD=/^-?\d+(?:px)?$/i,bE=/^-?\d/,bF=/^([\-+])=([\-+.\de]+)/,bG={position:"absolute",visibility:"hidden",display:"block"},bH=["Left","Right"],bI=["Top","Bottom"],bJ,bK,bL;K.fn.css=function(a,c){return arguments.length===2&&c===b?this:K.access(this,a,c,!0,function(a,c,d){return d!==b?K.style(a,c,d):K.css(a,c)})},K.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bJ(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":K.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var f,g,h=K.camelCase(c),i=a.style,j=K.cssHooks[h];c=K.cssProps[h]||h;if(d===b)return j&&"get"in j&&(f=j.get(a,!1,e))!==b?f:i[c];g=typeof d,g==="string"&&(f=bF.exec(d))&&(d=+(f[1]+1)*+f[2]+parseFloat(K.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!K.cssNumber[h]&&(d+="px");if(!j||!("set"in j)||(d=j.set(a,d))!==b)try{i[c]=d}catch(k){}}},css:function(a,c,d){var e,f;c=K.camelCase(c),f=K.cssHooks[c],c=K.cssProps[c]||c,c==="cssFloat"&&(c="float");if(f&&"get"in f&&(e=f.get(a,!0,d))!==b)return e;if(bJ)return bJ(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),K.curCSS=K.css,K.each(["height","width"],function(a,b){K.cssHooks[b]={get:function(a,c,d){var e;if(c)return a.offsetWidth!==0?p(a,b,d):(K.swap(a,bG,function(){e=p(a,b,d)}),e)},set:function(a,b){if(!bD.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),K.support.opacity||(K.cssHooks.opacity={get:function(a,b){return bB.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=K.isNaN(b)?"":"alpha(opacity="+b*100+")",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&K.trim(f.replace(bA,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bA.test(f)?f.replace(bA,e):f+" "+e}}),K(function(){K.support.reliableMarginRight||(K.cssHooks.marginRight={get:function(a,b){var c;return K.swap(a,{display:"inline-block"},function(){b?c=bJ(a,"margin-right","marginRight"):c=a.style.marginRight}),c}})}),H.defaultView&&H.defaultView.getComputedStyle&&(bK=function(a,c){var d,e,f;c=c.replace(bC,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(f=e.getComputedStyle(a,null))d=f.getPropertyValue(c),d===""&&!K.contains(a.ownerDocument.documentElement,a)&&(d=K.style(a,c));return d}),H.documentElement.currentStyle&&(bL=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;return!bD.test(d)&&bE.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e)),d===""?"auto":d}),bJ=bK||bL,K.expr&&K.expr.filters&&(K.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!K.support.reliableHiddenOffsets&&(a.style.display||K.css(a,"display"))==="none"},K.expr.filters.visible=function(a){return!K.expr.filters.hidden(a)});var bM=/%20/g,bN=/\[\]$/,bO=/\r?\n/g,bP=/#.*$/,bQ=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bR=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bS=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bT=/^(?:GET|HEAD)$/,bU=/^\/\//,bV=/\?/,bW=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bX=/^(?:select|textarea)/i,bY=/\s+/,bZ=/([?&])_=[^&]*/,b$=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,b_=K.fn.load,ca={},cb={},cc,cd,ce=["*/"]+["*"];try{cc=J.href}catch(cf){cc=H.createElement("a"),cc.href="",cc=cc.href}cd=b$.exec(cc.toLowerCase())||[],K.fn.extend({load:function(a,c,d){if(typeof a!="string"&&b_)return b_.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";c&&(K.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=K.param(c,K.ajaxSettings.traditional),g="POST"));var h=this;return K.ajax({url:a,type:g,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),h.html(f?K("<div>").append(c.replace(bW,"")).find(f):c)),d&&h.each(d,[c,b,a])}}),this},serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?K.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bX.test(this.nodeName)||bR.test(this.type))}).map(function(a,b){var c=K(this).val();return c==null?null:K.isArray(c)?K.map(c,function(a,c){return{name:b.name,value:a.replace(bO,"\r\n")}}):{name:b.name,value:c.replace(bO,"\r\n")}}).get()}}),K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){K.fn[b]=function(a){return this.bind(b,a)}}),K.each(["get","post"],function(a,c){K[c]=function(a,d,e,f){return K.isFunction(d)&&(f=f||e,e=d,d=b),K.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),K.extend({getScript:function(a,c){return K.get(a,b,c,"script")},getJSON:function(a,b,c){return K.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?m(a,K.ajaxSettings):(b=a,a=K.ajaxSettings),m(a,b),a},ajaxSettings:{url:cc,isLocal:bS.test(cd[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":ce},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:o(ca),ajaxTransport:o(cb),ajax:function(a,c){function d(a,c,d,n){if(v!==2){v=2,t&&clearTimeout(t),s=b,q=n||"",y.readyState=a>0?4:0;var o,p,r,u=c,x=d?k(e,y,d):b,z,A;if(a>=200&&a<300||a===304){if(e.ifModified){if(z=y.getResponseHeader("Last-Modified"))K.lastModified[m]=z;if(A=y.getResponseHeader("Etag"))K.etag[m]=A}if(a===304)u="notmodified",o=!0;else try{p=j(e,x),u="success",o=!0}catch(B){u="parsererror",r=B}}else{r=u;if(!u||a)u="error",a<0&&(a=0)}y.status=a,y.statusText=""+(c||u),o?h.resolveWith(f,[p,u,y]):h.rejectWith(f,[y,u,r]),y.statusCode(l),l=b,w&&g.trigger("ajax"+(o?"Success":"Error"),[y,e,o?p:r]),i.resolveWith(f,[y,u]),w&&(g.trigger("ajaxComplete",[y,e]),--K.active||K.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var e=K.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof K)?K(f):K.event,h=K.Deferred(),i=K._Deferred(),l=e.statusCode||{},m,o={},p={},q,r,s,t,u,v=0,w,x,y={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=p[c]=p[c]||a,o[a]=b}return this},getAllResponseHeaders:function(){return v===2?q:null},getResponseHeader:function(a){var c;if(v===2){if(!r){r={};while(c=bQ.exec(q))r[c[1].toLowerCase()]=c[2]}c=r[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(e.mimeType=a),this},abort:function(a){return a=a||"abort",s&&s.abort(a),d(0,a),this}};h.promise(y),y.success=y.done,y.error=y.fail,y.complete=i.done,y.statusCode=function(a){if(a){var b;if(v<2)for(b in a)l[b]=[l[b],a[b]];else b=a[y.status],y.then(b,b)}return this},e.url=((a||e.url)+"").replace(bP,"").replace(bU,cd[1]+"//"),e.dataTypes=K.trim(e.dataType||"*").toLowerCase().split(bY),e.crossDomain==null&&(u=b$.exec(e.url.toLowerCase()),e.crossDomain=!(!u||u[1]==cd[1]&&u[2]==cd[2]&&(u[3]||(u[1]==="http:"?80:443))==(cd[3]||(cd[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!="string"&&(e.data=K.param(e.data,e.traditional)),n(ca,e,c,y);if(v===2)return!1;w=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bT.test(e.type),w&&K.active++===0&&K.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bV.test(e.url)?"&":"?")+e.data,delete e.data),m=e.url;if(e.cache===!1){var z=K.now(),A=e.url.replace(bZ,"$1_="+z);e.url=A+(A===e.url?(bV.test(e.url)?"&":"?")+"_="+z:"")}}(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",e.contentType),e.ifModified&&(m=m||e.url,K.lastModified[m]&&y.setRequestHeader("If-Modified-Since",K.lastModified[m]),K.etag[m]&&y.setRequestHeader("If-None-Match",K.etag[m])),y.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+ce+"; q=0.01":""):e.accepts["*"]);for(x in e.headers)y.setRequestHeader(x,e.headers[x]);if(!e.beforeSend||e.beforeSend.call(f,y,e)!==!1&&v!==2){for(x in{success:1,error:1,complete:1})y[x](e[x]);s=n(cb,e,c,y);if(!s)d(-1,"No Transport");else{y.readyState=1,w&&g.trigger("ajaxSend",[y,e]),e.async&&e.timeout>0&&(t=setTimeout(function(){y.abort("timeout")},e.timeout));try{v=1,s.send(o,d)}catch(B){v<2?d(-1,B):K.error(B)}}return y}return y.abort(),!1},param:function(a,c){var d=[],e=function(a,b){b=K.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=K.ajaxSettings.traditional);if(K.isArray(a)||a.jquery&&!K.isPlainObject(a))K.each(a,function(){e(this.name,this.value)});else for(var f in a)l(f,a[f],c,e);return d.join("&").replace(bM,"+")}}),K.extend({active:0,lastModified:{},etag:{}});var cg=K.now(),ch=/(\=)\?(&|$)|\?\?/i;K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return K.expando+"_"+cg++}}),K.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ch.test(b.url)||e&&ch.test(b.data))){var f,g=b.jsonpCallback=K.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";return b.jsonp!==!1&&(i=i.replace(ch,k),b.url===i&&(e&&(j=j.replace(ch,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},d.always(function(){a[g]=h,f&&K.isFunction(h)&&a[g](f[0])}),b.converters["script json"]=function(){return f||K.error(g+" was not called"),f[0]},b.dataTypes[0]="json","script"}}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return K.globalEval(a),a}}}),K.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),K.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=H.head||H.getElementsByTagName("head")[0]||H.documentElement;return{send:function(e,f){c=H.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var ci=a.ActiveXObject?function(){for(var a in ck)ck[a](0,1)}:!1,cj=0,ck;K.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&i()||h()}:i,function(a){K.extend(K.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(K.ajaxSettings.xhr()),K.support.ajax&&K.ajaxTransport(function(c){if(!c.crossDomain||K.support.cors){var d;return{send:function(e,f){var g=c.xhr(),h,i;c.username?g.open(c.type,c.url,c.async,c.username,c.password):g.open(c.type,c.url,c.async);if(c.xhrFields)for(i in c.xhrFields)g[i]=c.xhrFields[i];c.mimeType&&g.overrideMimeType&&g.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(c.hasContent&&c.data||null),d=function(a,e){var i,j,k,l,m;try{if(d&&(e||g.readyState===4)){d=b,h&&(g.onreadystatechange=K.noop,ci&&delete ck[h]);if(e)g.readyState!==4&&g.abort();else{i=g.status,k=g.getAllResponseHeaders(),l={},m=g.responseXML,m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}!i&&c.isLocal&&!c.crossDomain?i=l.text?200:404:i===1223&&(i=204)}}}catch(o){e||f(-1,o)}l&&f(i,j,l,k)},!c.async||g.readyState===4?d():(h=++cj,ci&&(ck||(ck={},K(a).unload(ci)),ck[h]=d),g.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cl={},cm,cn,co=/^(?:toggle|show|hide)$/,cp=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cq,cr=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cs;K.fn.extend({show:function(a,b,c){var f,g;if(a||a===0)return this.animate(e("show",3),a,b,c);for(var h=0,i=this.length;h<i;h++)f=this[h],f.style&&(g=f.style.display,!K._data(f,"olddisplay")&&g==="none"&&(g=f.style.display=""),g===""&&K.css(f,"display")==="none"&&K._data(f,"olddisplay",d(f.nodeName)));for(h=0;h<i;h++){f=this[h];if(f.style){g=f.style.display;if(g===""||g==="none")f.style.display=K._data(f,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(e("hide",3),a,b,c);for(var d=0,f=this.length;d<f;d++)if(this[d].style){var g=K.css(this[d],"display");g!=="none"&&!K._data(this[d],"olddisplay")&&K._data(this[d],"olddisplay",g)}for(d=0;d<f;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:K.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";return K.isFunction(a)&&K.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:K(this).is(":hidden");K(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c),this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=K.speed(b,c,e);return K.isEmptyObject(a)?this.each(f.complete,[!1]):(a=K.extend({},a),this[f.queue===!1?"each":"queue"](function(){f.queue===!1&&K._mark(this);var b=K.extend({},f),c=this.nodeType===1,e=c&&K(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=K.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],K.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&e||h==="show"&&!e)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],K.css(this,"display")==="inline"&&K.css(this,"float")==="none"&&(K.support.inlineBlockNeedsLayout?(j=d(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new K.fx(this,b,i),h=a[i],co.test(h)?k[h==="toggle"?e?"show":"hide":h]():(l=cp.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(K.cssNumber[i]?"":"px"),o!=="px"&&(K.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,K.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0}))},stop:function(a,b){return a&&this.queue([]),this.each(function(){var a=K.timers,c=a.length;b||K._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue(),this}}),K.each({slideDown:e("show",1),slideUp:e("hide",1),slideToggle:e("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){K.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),K.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?K.extend({},a):{complete:c||!c&&b||K.isFunction(a)&&a,duration:a,easing:c&&b||b&&!K.isFunction(b)&&b};return d.duration=K.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in K.fx.speeds?K.fx.speeds[d.duration]:K.fx.speeds._default,d.old=d.complete,d.complete=function(a){K.isFunction(d.old)&&d.old.call(this),d.queue!==!1?K.dequeue(this):a!==!1&&K._unmark(this)},d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),K.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(K.fx.step[this.prop]||K.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var a,b=K.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a}return this.elem[this.prop]},custom:function(a,b,c){function d(a){return e.step(a)}var e=this,f=K.fx;this.startTime=cs||g(),this.start=a,this.end=b,this.unit=c||this.unit||(K.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,d.elem=this.elem,d()&&K.timers.push(d)&&!cq&&(cq=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=K.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),K(this.elem).show()},hide:function(){this.options.orig[this.prop]=K.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cs||g(),c=!0,d=this.elem,e=this.options,f,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(f in e.animatedProperties)e.animatedProperties[f]!==!0&&(c=!1);if(c){e.overflow!=null&&!K.support.shrinkWrapBlocks&&K.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&K(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)K.style(d,i,e.orig[i]);e.complete.call(d)}return!1}return e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=K.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},K.extend(K.fx,{tick:function(){for(var a=K.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||K.fx.stop()},interval:13,stop:function(){clearInterval(cq),cq=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){K.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),K.expr&&K.expr.filters&&(K.expr.filters.animated=function(a){return K.grep(K.timers,function(b){return a===b.elem}).length});var ct=/^t(?:able|d|h)$/i,cu=/^(?:body|html)$/i;"getBoundingClientRect"in H.documentElement?K.fn.offset=function(a){var b=this[0],d;if(a)return this.each(function(b){K.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return K.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!d||!K.contains(g,b))return d?{top:d.top,left:d.left}:{top:0,left:0};var h=f.body,i=c(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||K.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||K.support.boxModel&&g.scrollLeft||h.scrollLeft,n=d.top+l-j,o=d.left+m-k;return{top:n,left:o}}:K.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){K.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return K.offset.bodyOffset(b);K.offset.initialize();var c,d=b.offsetParent,e=b,f=b.ownerDocument,g=f.documentElement,h=f.body,i=f.defaultView,j=i?i.getComputedStyle(b,null):b.currentStyle,k=b.offsetTop,l=b.offsetLeft;while((b=b.parentNode)&&b!==h&&b!==g){if(K.offset.supportsFixedPosition&&j.position==="fixed")break;c=i?i.getComputedStyle(b,null):b.currentStyle,k-=b.scrollTop,l-=b.scrollLeft,b===d&&(k+=b.offsetTop,l+=b.offsetLeft,K.offset.doesNotAddBorder&&(!K.offset.doesAddBorderForTableAndCells||!ct.test(b.nodeName))&&(k+=parseFloat(c.borderTopWidth)||0,l+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),K.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(k+=parseFloat(c.borderTopWidth)||0,l+=parseFloat(c.borderLeftWidth)||0),j=c}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;return K.offset.supportsFixedPosition&&j.position==="fixed"&&(k+=Math.max(g.scrollTop,h.scrollTop),l+=Math.max(g.scrollLeft,h.scrollLeft)),{top:k,left:l}},K.offset={initialize:function(){var a=H.body,b=H.createElement("div"),c,d,e,f,g=parseFloat(K.css(a,"marginTop"))||0,h="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";K.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=h,a.insertBefore(b,a.firstChild),c=b.firstChild,d=c.firstChild,f=c.nextSibling.firstChild.firstChild,this.doesNotAddBorder=d.offsetTop!==5,this.doesAddBorderForTableAndCells=f.offsetTop===5,d.style.position="fixed",d.style.top="20px",this.supportsFixedPosition=d.offsetTop===20||d.offsetTop===15,d.style.position=d.style.top="",c.style.overflow="hidden",c.style.position="relative",this.subtractsBorderForOverflowNotVisible=d.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==g,a.removeChild(b),K.offset.initialize=K.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return K.offset.initialize(),K.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(K.css(a,"marginTop"))||0,c+=parseFloat(K.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=K.css(a,"position");d==="static"&&(a.style.position="relative");var e=K(a),f=e.offset(),g=K.css(a,"top"),h=K.css(a,"left"),i=(d==="absolute"||d==="fixed")&&K.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),K.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},K.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cu.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(K.css(a,"marginTop"))||0,c.left-=parseFloat(K.css(a,"marginLeft"))||0,d.top+=parseFloat(K.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(K.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||H.body;while(a&&!cu.test(a.nodeName)&&K.css(a,"position")==="static")a=a.offsetParent;return a})}}),K.each(["Left","Top"],function(a,d){var e="scroll"+d;K.fn[e]=function(d){var f,g;return d===b?(f=this[0],f?(g=c(f),g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:K.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]):null):this.each(function(){g=c(this),g?g.scrollTo(a?K(g).scrollLeft():d,a?d:K(g).scrollTop()):this[e]=d})}}),K.each(["Height","Width"],function(a,c){var d=c.toLowerCase();K.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(K.css(a,d,"padding")):null},K.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(K.css(b,d,a?"margin":"border")):null},K.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(K.isFunction(a))return this.each(function(b){var c=K(this);c[d](a.call(this,b,c[d]()))});if(K.isWindow(e)){var f=e.document.documentElement["client"+c],g=e.document.body;return e.document.compatMode==="CSS1Compat"&&f||g&&g["client"+c]||f}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=K.css(e,d),i=parseFloat(h);return K.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=K})(window),function(a,b){function g(a,b){return(new Date(a,b+1,0)).getDate()}function h(a,b){a=""+a,b=b||2;while(a.length<b)a="0"+a;return a}function k(a,b,c){var d=a.getDate(),e=a.getDay(),g=a.getMonth(),k=a.getFullYear(),l={d:d,dd:h(d),ddd:f[c].shortDays[e],dddd:f[c].days[e],m:g+1,mm:h(g+1),mmm:f[c].shortMonths[g],mmmm:f[c].months[g],yy:String(k).slice(2),yyyy:k},m=b.replace(i,function(a){return a in l?l[a]:a.slice(1,a.length-1)});return j.html(m).html()}function l(a){return parseInt(a,10)}function m(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()}function n(a){if(a===b)return;if(a.constructor==Date)return a;if(typeof a=="string"){var c=a.split("-");if(c.length==3)return new Date(l(c[0]),l(c[1])-1,l(c[2]));if(!/^-?\d+$/.test(a))return;a=l(a)}var d=new Date;return d.setDate(d.getDate()+a),d}function o(d,h){function M(b,c,e){z=b,w=b.getFullYear(),x=b.getMonth(),y=b.getDate(),e=e||a.Event("api"),e.type="beforeChange",G.trigger(e,[b]);if(e.isDefaultPrevented())return;d.val(k(b,c.format,c.lang)),e.type="change",G.trigger(e),d.data("date",b),i.hide(e)}function N(b){b.type="onShow",G.trigger(b),a(document).bind("keydown.d",function(b){if(b.ctrlKey)return!0;var c=b.keyCode;if(c==8)return d.val(""),i.hide(b);if(c==27||c==9)return i.hide(b);if(a(e).index(c)>=0){if(!C)return i.show(b),b.preventDefault();var f=a("#"+p.weeks+" a"),g=a("."+p.focus),h=f.index(g);g.removeClass(p.focus);if(c==74||c==40)h+=7;else if(c==75||c==38)h-=7;else if(c==76||c==39)h+=1;else if(c==72||c==37)h-=1;return h>41?(i.addMonth(),g=a("#"+p.weeks+" a:eq("+(h-42)+")")):h<0?(i.addMonth(-1),g=a("#"+p.weeks+" a:eq("+(h+42)+")")):g=f.eq(h),g.addClass(p.focus),b.preventDefault()}return c==34?i.addMonth():c==33?i.addMonth(-1):c==36?i.today():(c==13&&(a(b.target).is("select")||a("."+p.focus).click()),a([16,17,18,9]).index(c)>=0)}),a(document).bind("click.d",function(b){var c=b.target;!a(c).parents("#"+p.root).length&&c!=d[0]&&(!t||c!=t[0])&&i.hide(b)})}var i=this,j=new Date,o=j.getFullYear(),p=h.css,q=f[h.lang],r=a("#"+p.root),s=r.find("#"+p.title),t,u,v,w,x,y,z=d.attr("data-value")||h.value||d.val(),A=d.attr("min")||h.min,B=d.attr("max")||h.max,C,D;A===0&&(A="0"),z=n(z)||j,A=n(A||new Date(o+h.yearRange[0],1,1)),B=n(B||new Date(o+h.yearRange[1]+1,1,-1));if(!q)throw"Dateinput: invalid language: "+h.lang;if(d.attr("type")=="date"){var D=d.clone(),E=D.wrap("<div/>").parent().html(),F=a(E.replace(/type/i,"type=text data-orig-type"));h.value&&F.val(h.value),d.replaceWith(F),d=F}d.addClass(p.input);var G=d.add(i);if(!r.length){r=a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",p.root),r.children().eq(0).attr("id",p.head).end().eq(1).attr("id",p.body).children().eq(0).attr("id",p.days).end().eq(1).attr("id",p.weeks).end().end().end().find("a").eq(0).attr("id",p.prev).end().eq(1).attr("id",p.next),s=r.find("#"+p.head).find("div").attr("id",p.title);if(h.selectors){var H=a("<select/>").attr("id",p.month),I=a("<select/>").attr("id",p.year);s.html(H.add(I))}var J=r.find("#"+p.days);for(var K=0;K<7;K++)J.append(a("<span/>").text(q.shortDays[(K+h.firstDay)%7]));a("body").append(r)}h.trigger&&(t=a("<a/>").attr("href","#").addClass(p.trigger).click(function(a){return h.toggle?i.toggle():i.show(),a.preventDefault()}).insertAfter(d));var L=r.find("#"+p.weeks);I=r.find("#"+p.year),H=r.find("#"+p.month),a.extend(i,{show:function(b){if(d.attr("readonly")||d.attr("disabled")||C)return;b=b||a.Event(),b.type="onBeforeShow",G.trigger(b);if(b.isDefaultPrevented())return;a.each(c,function(){this.hide()}),C=!0,H.unbind("change").change(function(){i.setValue(I.val(),a(this).val())}),I.unbind("change").change(function(){i.setValue(a(this).val(),H.val())}),u=r.find("#"+p.prev).unbind("click").click(function(a){return u.hasClass(p.disabled)||i.addMonth(-1),!1}),v=r.find("#"+p.next).unbind("click").click(function(a){return v.hasClass(p.disabled)||i.addMonth(),!1}),i.setValue(z);var e=d.offset();return/iPad/i.test(navigator.userAgent)&&(e.top-=a(window).scrollTop()),r.css({top:e.top+d.outerHeight({margins:!0})+h.offset[0],left:e.left+h.offset[1]}),h.speed?r.show(h.speed,function(){N(b)}):(r.show(),N(b)),i},setValue:function(c,d,e){var f=l(d)>=-1?new Date(l(c),l(d),l(e==b||isNaN(e)?1:e)):c||z;f<A?f=A:f>B&&(f=B),typeof c=="string"&&(f=n(c)),c=f.getFullYear(),d=f.getMonth(),e=f.getDate(),d==-1?(d=11,c--):d==12&&(d=0,c++);if(!C)return M(f,h),i;x=d,w=c,y=e;var k=new Date(c,d,1-h.firstDay),o=k.getDay(),r=g(c,d),t=g(c,d-1),D;if(h.selectors){H.empty(),a.each(q.months,function(b,d){A<new Date(c,b+1,1)&&B>new Date(c,b,0)&&H.append(a("<option/>").html(d).attr("value",b))}),I.empty();var E=j.getFullYear();for(var F=E+h.yearRange[0];F<E+h.yearRange[1];F++)A<new Date(F+1,0,1)&&B>new Date(F,0,0)&&I.append(a("<option/>").text(F));H.val(d),I.val(c)}else s.html(q.months[d]+" "+c);L.empty(),u.add(v).removeClass(p.disabled);for(var G=o?0:-7,J,K;G<(o?42:35);G++)J=a("<a/>"),G%7===0&&(D=a("<div/>").addClass(p.week),L.append(D)),G<o?(J.addClass(p.off),K=t-o+G+1,f=new Date(c,d-1,K)):G>=o+r?(J.addClass(p.off),K=G-r-o+1,f=new Date(c,d+1,K)):(K=G-o+1,f=new Date(c,d,K),m(z,f)?J.attr("id",p.current).addClass(p.focus):m(j,f)&&J.attr("id",p.today)),A&&f<A&&J.add(u).addClass(p.disabled),B&&f>B&&J.add(v).addClass(p.disabled),J.attr("href","#"+K).text(K).data("date",f),D.append(J);return L.find("a").click(function(b){var c=a(this);return c.hasClass(p.disabled)||(a("#"+p.current).removeAttr("id"),c.attr("id",p.current),M(c.data("date"),h,b)),!1}),p.sunday&&L.find(p.week).each(function(){var b=h.firstDay?7-h.firstDay:0;a(this).children().slice(b,b+1).addClass(p.sunday)}),i},setMin:function(a,b){return A=n(a),b&&z<A&&i.setValue(A),i},setMax:function(a,b){return B=n(a),b&&z>B&&i.setValue(B),i},today:function(){return i.setValue(j)},addDay:function(a){return this.setValue(w,x,y+(a||1))},addMonth:function(a){var b=x+(a||1),c=g(w,b),d=y<=c?y:c;return this.setValue(w,b,d)},addYear:function(a){return this.setValue(w+(a||1),x,y)},destroy:function(){d.add(document).unbind("click.d").unbind("keydown.d"),r.add(t).remove(),d.removeData("dateinput").removeClass(p.input),D&&d.replaceWith(D)},hide:function(b){if(C){b=a.Event(),b.type="onHide",G.trigger(b),a(document).unbind("click.d").unbind("keydown.d");if(b.isDefaultPrevented())return;r.hide(),C=!1}return i},toggle:function(){return i.isOpen()?i.hide():i.show()},getConf:function(){return h},getInput:function(){return d},getCalendar:function(){return r},getValue:function(a){return a?k(z,a,h.lang):z},isOpen:function(){return C}}),a.each(["onBeforeShow","onShow","change","onHide"],function(b,c){a.isFunction(h[c])&&a(i).bind(c,h[c]),i[c]=function(b){return b&&a(i).bind(c,b),i}}),h.editable||d.bind("focus.d click.d",i.show).keydown(function(b){var c=b.keyCode;return!C&&a(e).index(c)>=0?(i.show(b),b.preventDefault()):b.shiftKey||b.ctrlKey||b.altKey||c==9?!0:b.preventDefault()}),n(d.val())&&M(z,h)}a.tools=a.tools||{version:"1.2.6"};var c=[],d,e=[75,76,38,39,74
,72,40,37],f={};d=a.tools.dateinput={conf:{format:"mm/dd/yy",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:b,max:b,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},localize:function(b,c){a.each(c,function(a,b){c[a]=b.split(",")}),f[b]=c}},d.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var i=/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,j=a("<a/>");a.expr[":"].date=function(b){var c=b.getAttribute("type");return c&&c=="date"||!!a(b).data("dateinput")},a.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=a.extend(!0,{},d.conf,b),a.each(b.css,function(a,c){!c&&a!="prefix"&&(b.css[a]=(b.css.prefix||"")+(c||a))});var e;return this.each(function(){var d=new o(a(this),b);c.push(d);var f=d.getInput().data("dateinput",d);e=e?e.add(f):f}),e?e:this}}(jQuery),function(a){function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){return f.load(a),a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw'Overlay: cannot find effect : "'+e.effect+'"';e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});return typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).bind("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).bind("keydown."+m,function(a){a.keyCode==27&&f.close(a)}),f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(b.isDefaultPrevented())return;return k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).unbind("click."+m).unbind("keydown."+m),l&&a.mask.close(),f},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a('<a class="close"></a>'),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.tools=a.tools||{version:"1.2.6"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)}),a.fn.overlay=function(c){var e=this.data("overlay");return e?e:(a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)}),c.api?e:this)}}(jQuery),function(a){function d(a){var b=a.offset();return{top:b.top+a.height()/2,left:b.left+a.width()/2}}var b=a.tools.overlay,c=a(window);a.extend(b.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});var e=function(b,e){var f=this.getOverlay(),g=this.getConf(),h=this.getTrigger(),i=this,j=f.outerWidth({margin:!0}),k=f.data("img"),l=g.fixed?"fixed":"absolute";if(!k){var m=f.css("backgroundImage");if(!m)throw"background-image CSS property not set for overlay";m=m.slice(m.indexOf("(")+1,m.indexOf(")")).replace(/\"/g,""),f.css("backgroundImage","none"),k=a('<img src="'+m+'"/>'),k.css({border:0,display:"none"}).width(j),a("body").append(k),f.data("img",k)}var n=g.start.top||Math.round(c.height()/2),o=g.start.left||Math.round(c.width()/2);if(h){var p=d(h);n=p.top,o=p.left}g.fixed?(n-=c.scrollTop(),o-=c.scrollLeft()):(b.top+=c.scrollTop(),b.left+=c.scrollLeft()),k.css({position:"absolute",top:n,left:o,width:0,zIndex:g.zIndex}).show(),b.position=l,f.css(b),k.animate({top:f.css("top"),left:f.css("left"),width:j},g.speed,function(){f.css("zIndex",g.zIndex+1).fadeIn(g.fadeInSpeed,function(){i.isOpened()&&!a(this).index(f)?e.call():f.hide()})}).css("position",l)},f=function(b){var e=this.getOverlay().hide(),f=this.getConf(),g=this.getTrigger(),h=e.data("img"),i={top:f.start.top,left:f.start.left,width:0};g&&a.extend(i,d(g)),f.fixed&&h.css({position:"absolute"}).animate({top:"+="+c.scrollTop(),left:"+="+c.scrollLeft()},0),h.animate(i,f.closeSpeed,b)};b.addEffect("apple",e,f)}(jQuery),function(a){function e(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}function f(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function g(a){var b=a.data("events");return b&&b.onSlide}function h(b,c){function y(a,f,g,h){g===undefined?g=f/m*q:h&&(g-=c.min),r&&(g=Math.round(g/r)*r);if(f===undefined||r)f=g*m/q;if(isNaN(g))return d;f=Math.max(0,Math.min(f,m)),g=f/m*q;if(h||!j)g+=c.min;j&&(h?f=m-f:g=c.max-g),g=e(g,s);var i=a.type=="click";if(x&&k!==undefined&&!i){a.type="onSlide",w.trigger(a,[g,f]);if(a.isDefaultPrevented())return d}var l=i?c.speed:0,t=i?function(){a.type="change",w.trigger(a,[g])}:null;return j?(o.animate({top:f},l,t),c.progress&&p.animate({height:m-f+o.height()/2},l)):(o.animate({left:f},l,t),c.progress&&p.animate({width:f+o.width()/2},l)),k=g,n=f,b.val(g),d}function z(){j=c.vertical||f(i,"height")>f(i,"width"),j?(m=f(i,"height")-f(o,"height"),l=i.offset().top+m):(m=f(i,"width")-f(o,"width"),l=i.offset().left)}function A(){z(),d.setValue(c.value!==undefined?c.value:c.min)}var d=this,h=c.css,i=a("<div><div/><a href='#'/></div>").data("rangeinput",d),j,k,l,m,n;b.before(i);var o=i.addClass(h.slider).find("a").addClass(h.handle),p=i.find("div").addClass(h.progress);a.each("min,max,step,value".split(","),function(a,d){var e=b.attr(d);parseFloat(e)&&(c[d]=parseFloat(e,10))});var q=c.max-c.min,r=c.step=="any"?0:c.step,s=c.precision;if(s===undefined)try{s=r.toString().split(".")[1].length}catch(t){s=0}if(b.attr("type")=="range"){var u=b.clone().wrap("<div/>").parent().html(),v=a(u.replace(/type/i,"type=text data-orig-type"));v.val(c.value),b.replaceWith(v),b=v}b.addClass(h.input);var w=a(d).add(b),x=!0;a.extend(d,{getValue:function(){return k},setValue:function(b,c){return z(),y(c||a.Event("api"),undefined,b,!0)},getConf:function(){return c},getProgress:function(){return p},getHandle:function(){return o},getInput:function(){return b},step:function(b,e){e=e||a.Event();var f=c.step=="any"?1:c.step;d.setValue(k+f*(b||1),e)},stepUp:function(a){return d.step(a||1)},stepDown:function(a){return d.step(-a||-1)}}),a.each("onSlide,change".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return b&&a(d).bind(e,b),d}}),o.drag({drag:!1}).bind("dragStart",function(){z(),x=g(a(d))||g(b)}).bind("drag",function(a,c,d){if(b.is(":disabled"))return!1;y(a,j?c:d)}).bind("dragEnd",function(a){a.isDefaultPrevented()||(a.type="change",w.trigger(a,[k]))}).click(function(a){return a.preventDefault()}),i.click(function(a){if(b.is(":disabled")||a.target==o[0])return a.preventDefault();z();var c=j?o.height()/2:o.width()/2;y(a,j?m-l-c+a.pageY:a.pageX-l-c)}),c.keyboard&&b.keydown(function(c){if(b.attr("readonly"))return;var e=c.keyCode,f=a([75,76,38,33,39]).index(e)!=-1,g=a([74,72,40,34,37]).index(e)!=-1;if((f||g)&&!(c.shiftKey||c.altKey||c.ctrlKey))return f?d.step(e==33?10:1,c):g&&d.step(e==34?-10:-1,c),c.preventDefault()}),b.blur(function(b){var c=a(this).val();c!==k&&d.setValue(c,b)}),a.extend(b[0],{stepUp:d.stepUp,stepDown:d.stepDown}),A(),m||a(window).load(A)}a.tools=a.tools||{version:"1.2.6"};var b;b=a.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:!0,progress:!1,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var c,d;a.fn.drag=function(b){return document.ondragstart=function(){return!1},b=a.extend({x:!0,y:!0,drag:!0},b),c=c||a(document).bind("mousedown mouseup",function(e){var f=a(e.target);if(e.type=="mousedown"&&f.data("drag")){var g=f.position(),h=e.pageX-g.left,i=e.pageY-g.top,j=!0;c.bind("mousemove.drag",function(a){var c=a.pageX-h,e=a.pageY-i,g={};b.x&&(g.left=c),b.y&&(g.top=e),j&&(f.trigger("dragStart"),j=!1),b.drag&&f.css(g),f.trigger("drag",[e,c]),d=f}),e.preventDefault()}else try{d&&d.trigger("dragEnd")}finally{c.unbind("mousemove.drag"),d=null}}),this.data("drag",!0)},a.expr[":"].range=function(b){var c=b.getAttribute("type");return c&&c=="range"||!!a(b).filter("input").data("rangeinput")},a.fn.rangeinput=function(c){if(this.data("rangeinput"))return this;c=a.extend(!0,{},b.conf,c);var d;return this.each(function(){var b=new h(a(this),a.extend(!0,{},c)),e=b.getInput().data("rangeinput",b);d=d?d.add(e):e}),d?d:this}}(jQuery),function(a){function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),e.size>1&&(e.circular=!1),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return n.add(o)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.find(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(e.size,a)},prev:function(a){return f.move(-e.size,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){return d=f,f},addItem:function(b){return b=a(b),e.circular?(h.children().last().before(b),h.children().first().replaceWith(b.clone().addClass(e.clonedClass))):(h.append(b),o.removeClass("disabled")),g.trigger("onAddItem",[b]),f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};return i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])}),f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(a.isDefaultPrevented())return;if(b==-1)return f.seekTo(k,c,function(){f.end(0)}),a.preventDefault();b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})});var m=b.parents().add(b).filter(function(){if(a(this).css("display")==="none")return!0});m.length?(m.show(),f.seekTo(0,0,function(){}),m.hide()):f.seekTo(0,0,function(){})}var n=c(b,e.prev).click(function(a){a.stopPropagation(),f.prev()}),o=c(b,e.next).click(function(a){a.stopPropagation(),f.next()});e.circular||(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(n.toggleClass(e.disabledClass,b<=0),o.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||n.addClass(e.disabledClass)),f.getSize()<2&&n.add(o).addClass(e.disabledClass),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel)return f.move(b<0?1:-1,e.wheelSpeed||50),!1});if(e.touch){var p={};h[0].ontouchstart=function(a){var b=a.touches[0];p.x=b.clientX,p.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=p.x-b.clientX,d=p.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).bind("keydown.scrollable",function(b){if(!e.keyboard||b.altKey||b.ctrlKey||b.metaKey||a(b.target).is(":input"))return;if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(!(!j||c!=38&&c!=40))return f.move(c==38?-1:1),b.preventDefault();if(!j&&(c==37||c==39))return f.move(c==37?-1:1),b.preventDefault()}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.tools=a.tools||{version:"1.2.6"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};var d;a.fn.scrollable=function(b){var c=this.data("scrollable");return c?c:(b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)}),b.api?c:this)}}(jQuery),function(a){var b=a.tools.scrollable;b.autoscroll={conf:{autoplay:!0,interval:3e3,autopause:!0}},a.fn.autoscroll=function(c){typeof c=="number"&&(c={interval:c});var d=a.extend({},b.autoscroll.conf,c),e;return this.each(function(){function h(){f=setTimeout(function(){b.next()},d.interval)}var b=a(this).data("scrollable"),c=b.getRoot(),f,g=!1;b&&(e=b),b.play=function(){if(f)return;g=!1,c.bind("onSeek",h),h()},b.pause=function(){f=clearTimeout(f),c.unbind("onSeek",h)},b.resume=function(){g||b.play()},b.stop=function(){g=!0,b.pause()},d.autopause&&c.add(b.getNaviButtons()).hover(b.pause,b.resume),d.autoplay&&b.play()}),d.api?e:this}}(jQuery),function(a){function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var b=a.tools.scrollable;b.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:!1,idPrefix:null,history:!1}},a.fn.navigator=function(d){typeof d=="string"&&(d={navi:d}),d=a.extend({},b.navigator.conf,d);var e;return this.each(function(){function k(a,c,d){b.seekTo(c),d.preventDefault(),i&&history.pushState({i:c})}function l(){return f.find(d.naviItem||"> *")}function m(b){var c=a("<"+(d.naviItem||"a")+"/>").click(function(c){k(a(this),b,c)});return b===0&&c.addClass(h),d.indexed&&c.text(b+1),d.idPrefix&&c.attr("id",d.idPrefix+b),c.appendTo(f)}var b=a(this).data("scrollable"),f=d.navi.jquery?d.navi:c(b.getRoot(),d.navi),g=b.getNaviButtons(),h=d.activeClass,i=d.history&&!!history.pushState,j=b.getConf().size;b&&(e=b),b.getNaviButtons=function(){return g.add(f)},i&&(history.pushState({i:0}),a(window).bind("popstate",function(a){var c=a.originalEvent.state;c&&b.seekTo(c.i)})),l().length?l().each(function(b){a(this).click(function(c){k(a(this),b,c)})}):a.each(b.getItems(),function(a){a%j==0&&m(a)}),b.onBeforeSeek(function(a,b){setTimeout(function(){if(!a.isDefaultPrevented()){var c=b/j,d=l().eq(c);d.length&&l().removeClass(h).eq(c).addClass(h)}},1)}),b.onAddItem(function(a,c){var d=b.getItems().index(c);d%j==0&&m(d)})}),d.api?e:this}}(jQuery),function(a){function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(d.isDefaultPrevented())return;return b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current),f},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){return h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T"),f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){return f.click(b,a),a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.tools=a.tools||{version:"1.2.6"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(c)return;var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}),a.fn.tabs=function(b,c){var d=this.data("tabs");return d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)}),c.api?d:this}}(jQuery),function(a){function c(b,c){function i(c){var d=a(c);return d.length<2?d:b.parent().find(c)}function l(){g=setTimeout(function(){f.next()},c.interval)}var d=this,e=b.add(this),f=b.data("tabs"),g,h=!0,j=i(c.next).click(function(){f.next()}),k=i(c.prev).click(function(){f.prev()});a.extend(d,{getTabs:function(){return f},getConf:function(){return c},play:function(){if(g)return d;var b=a.Event("onBeforePlay");return e.trigger(b),b.isDefaultPrevented()?d:(h=!1,e.trigger("onPlay"),e.bind("onClick",l),l(),d)},pause:function(){if(!g)return d;var b=a.Event("onBeforePause");return e.trigger(b),b.isDefaultPrevented()?d:(g=clearTimeout(g),e.trigger("onPause"),e.unbind("onClick",l),d)},resume:function(){h||d.play()},stop:function(){d.pause(),h=!0}}),a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return a(d).bind(e,b)}}),c.autopause&&f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause,d.resume),c.autoplay&&d.play(),c.clickable&&f.getPanes().click(function(){f.next()});if(!f.getConf().rotate){var m=c.disabledClass;f.getIndex()||k.addClass(m),f.onBeforeClick(function(a,b){k.toggleClass(m,!b),j.toggleClass(m,b==f.getTabs().length-1)})}}var b;b=a.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3e3,clickable:!0,api:!1}},a.fn.slideshow=function(d){var e=this.data("slideshow");return e?e:(d=a.extend({},b.conf,d),this.each(function(){e=new c(a(this),d),a(this).data("slideshow",e)}),d.api?e:this)}}(jQuery),function(a){function c(){if(a.browser.msie){var b=a(document).height(),c=a(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b-c<20?c:b]}return[a(document).width(),a(document).height()]}function d(b){if(b)return b.call(a.mask)}a.tools=a.tools||{version:"1.2.6"};var b;b=a.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};var e,f,g,h,i;a.mask={load:function(j,k){if(g)return this;typeof j=="string"&&(j={color:j}),j=j||h,h=j=a.extend(a.extend({},b.conf),j),e=a("#"+j.maskId),e.length||(e=a("<div/>").attr("id",j.maskId),a("body").append(e));var l=c();return e.css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:j.startOpacity,zIndex:j.zIndex}),j.color&&e.css("backgroundColor",j.color),d(j.onBeforeLoad)===!1?this:(j.closeOnEsc&&a(document).bind("keydown.mask",function(b){b.keyCode==27&&a.mask.close(b)}),j.closeOnClick&&e.bind("click.mask",function(b){a.mask.close(b)}),a(window).bind("resize.mask",function(){a.mask.fit()}),k&&k.length&&(i=k.eq(0).css("zIndex"),a.each(k,function(){var b=a(this);/relative|absolute|fixed/i.test(b.css("position"))||b.css("position","relative")}),f=k.css({zIndex:Math.max(j.zIndex+1,i=="auto"?0:i)})),e.css({display:"block"}).fadeTo(j.loadSpeed,j.opacity,function(){a.mask.fit(),d(j.onLoad),g="full"}),g=!0,this)},close:function(){if(g){if(d(h.onBeforeClose)===!1)return this;e.fadeOut(h.closeSpeed,function(){d(h.onClose),f&&f.css({zIndex:i}),g=!1}),a(document).unbind("keydown.mask"),e.unbind("click.mask"),a(window).unbind("resize.mask")}return this},fit:function(){if(g){var a=c();e.css({width:a[0],height:a[1]})}},getMask:function(){return e},isLoaded:function(a){return a?g=="full":g},getConf:function(){return h},getExposed:function(){return f}},a.fn.mask=function(b){return a.mask.load(b),this},a.fn.expose=function(b){return a.mask.load(b,this),this}}(jQuery),function(){function f(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function g(a,b){var c=[];for(var d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d]));return c}function j(c,d,e){if(h.isSupported(d.version))c.innerHTML=h.getHTML(d,e);else if(d.expressInstall&&h.isSupported([6,65]))c.innerHTML=h.getHTML(f(d,{src:d.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else{c.innerHTML.replace(/\s/g,"")||(c.innerHTML="<h2>Flash version "+d.version+" or greater is required</h2>"+"<h3>"+(i[0]>0?"Your version is "+i:"You have no flash plugin installed")+"</h3>"+(c.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+b+"'>here</a></p>"),c.tagName=="A"&&(c.onclick=function(){location.href=b}));if(d.onFail){var g=d.onFail.call(this);typeof g=="string"&&(c.innerHTML=g)}}a&&(window[d.id]=document.getElementById(d.id)),f(this,{getRoot:function(){return c},getOptions:function(){return d},getConf:function(){return e},getApi:function(){return c.firstChild}})}var a=document.all,b="http://www.adobe.com/go/getflashplayer",c=typeof jQuery=="function",d=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,e={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:!0,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:!1,cachebusting:!1};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){}}),window.flashembed=function(a,b,c){typeof a=="string"&&(a=document.getElementById(a.replace("#","")));if(!a)return;return typeof b=="string"&&(b={src:b}),new j(a,f(f({},e),b),c)};var h=f(window.flashembed,{conf:e,getVersion:function(){var a,b;try{b=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(c){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),b=a&&a.GetVariable("$version")}catch(e){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),b=a&&a.GetVariable("$version")}catch(f){}}}return b=d.exec(b),b?[b[1],b[3]]:[0,0]},asString:function(a){if(a===null||a===undefined)return null;var b=typeof a;b=="object"&&a.push&&(b="array");switch(b){case"string":return a=a.replace(new RegExp('(["\\\\])',"g"),"\\$1"),a=a.replace(/^\s?(\d+\.?\d*)%/,"$1pct"),'"'+a+'"';case"array":return"["+g(a,function(a){return h.asString(a)}).join(",")+"]";case"function":return'"function()"';case"object":var c=[];for(var d in a)a.hasOwnProperty(d)&&c.push('"'+d+'":'+h.asString(a[d]));return"{"+c.join(",")+"}"}return String(a).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(b,c){b=f({},b);var d='<object width="'+b.width+'" height="'+b.height+'" id="'+b.id+'" name="'+b.id+'"';b.cachebusting&&(b.src+=(b.src.indexOf("?")!=-1?"&":"?")+Math.random()),b.w3c||!a?d+=' data="'+b.src+'" type="application/x-shockwave-flash"':d+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',d+=">";if(b.w3c||a)d+='<param name="movie" value="'+b.src+'" />';b.width=b.height=b.id=b.w3c=b.src=null,b.onFail=b.version=b.expressInstall=null;for(var e in b)b[e]&&(d+='<param name="'+e+'" value="'+b[e]+'" />');var g="";if(c){for(var i in c)if(c[i]){var j=c[i];g+=i+"="+encodeURIComponent(/function|object/.test(typeof j)?h.asString(j):j)+"&"}g=g.slice(0,-1),d+='<param name="flashvars" value=\''+g+"' />"}return d+="</object>",d},isSupported:function(a){return i[0]>a[0]||i[0]==a[0]&&i[1]>=a[1]}}),i=h.getVersion();c&&(jQuery.tools=jQuery.tools||{version:"1.2.6"},jQuery.tools.flashembed={conf:e},jQuery.fn.flashembed=function(a,b){return this.each(function(){jQuery(this).data("flashembed",flashembed(this,a,b))})})}(),function(a){function f(a){if(a){var b=c.contentWindow.document;b.open().close(),b.location.hash=a}}var b,c,d,e;a.tools=a.tools||{version:"1.2.6"},a.tools.history={init:function(g){if(e)return;a.browser.msie&&a.browser.version<"8"?c||(c=a("<iframe/>").attr("src","javascript:false;").hide().get(0),a("body").prepend(c),setInterval(function(){var d=c.contentWindow.document,e=d.location.hash;b!==e&&a(window).trigger("hash",e)},100),f(location.hash||"#")):setInterval(function(){var c=location.hash;c!==b&&a(window).trigger("hash",c)},100),d=d?d.add(g):g,g.click(function(b){var d=a(this).attr("href");c&&f(d);if(d.slice(0,1)!="#")return location.href="#"+d,b.preventDefault()}),e=!0}},a(window).bind("hash",function(c,e){e?d.filter(function(){var b=a(this).attr("href");return b==e||b==e.replace("#","")}).trigger("history",[e]):d.eq(0).trigger("history",[e]),b=e}),a.fn.history=function(b){return a.tools.history.init(this),this.bind("history",b)}}(jQuery),function(a){function c(b){switch(b.type){case"mousemove":return a.extend(b.data,{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY});case"DOMMouseScroll":a.extend(b,b.data),b.delta=-b.detail/3;break;case"mousewheel":b.delta=b.wheelDelta/120}return b.type="wheel",a.event.handle.call(this,b,b.delta)}a.fn.mousewheel=function(a){return this[a?"bind":"trigger"]("wheel",a)},a.event.special.wheel={setup:function(){a.event.add(this,b,c,{})},teardown:function(){a.event.remove(this,b,c)}};var b=a.browser.mozilla?"DOMMouseScroll"+(a.browser.version<"1.9"?" mousemove":""):"mousewheel"}(jQuery),function(a){function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();return g=="center"&&(f-=i/2),g=="left"&&(f-=i),{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw'Nonexistent effect "'+e.effect+'"';r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);return h.data("__set")||(h.unbind(p[0]).bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.unbind(p[1]).bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0)),f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(c.isDefaultPrevented())return;return n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)}),f},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}})}a.tools=a.tools||{version:"1.2.6"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};a.fn.tooltip=function(b){var c=this.data("tooltip");return c?c:(b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)}),b.api?c:this)}}(jQuery),function(a){function c(b){var c=a(window),d=c.width()+c.scrollLeft(),e=c.height()+c.scrollTop();return[b.offset().top<=c.scrollTop(),d<=b.offset().left+b.width(),e<=b.offset().top+b.height(),c.scrollLeft()>=b.offset().left]}function d(a){var b=a.length;while(b--)if(a[b])return!1;return!0}var b=a.tools.tooltip;b.dynamic={conf:{classNames:"top right bottom left"}},a.fn.dynamic=function(e){typeof e=="number"&&(e={speed:e}),e=a.extend({},b.dynamic.conf,e);var f=a.extend(!0,{},e),g=e.classNames.split(/\s/),h;return this.each(function(){var b=a(this).tooltip().onBeforeShow(function(b,e){var i=this.getTip(),j=this.getConf();h||(h=[j.position[0],j.position[1],j.offset[0],j.offset[1],a.extend({},j)]),a.extend(j,h[4]),j.position=[h[0],h[1]],j.offset=[h[2],h[3]],i.css({visibility:"hidden",position:"absolute",top:e.top,left:e.left}).show();var k=a.extend(!0,{},f),l=c(i);if(!d(l)){l[2]&&(a.extend(j,k.top),j.position[0]="top",i.addClass(g[0])),l[3]&&(a.extend(j,k.right),j.position[1]="right",i.addClass(g[1])),l[0]&&(a.extend(j,k.bottom),j.position[0]="bottom",i.addClass(g[2])),l[1]&&(a.extend(j,k.left),j.position[1]="left",i.addClass(g[3]));if(l[0]||l[2])j.offset[0]*=-1;if(l[1]||l[3])j.offset[1]*=-1}i.css({visibility:"visible"}).hide()});b.onBeforeShow(function(){var a=this.getConf(),b=this.getTip();setTimeout(function(){a.position=[h[0],h[1]],a.offset=[h[2],h[3]]},0)}),b.onHide(function(){var a=this.getTip();a.removeClass(e.classNames)}),ret=b}),e.api?ret:this}}(jQuery),function(a){var b=a.tools.tooltip;a.extend(b.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!a.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.addEffect("slide",function(a){var b=this.getConf(),d=this.getTip(),e=b.slideFade?{opacity:b.opacity
}:{},f=c[b.direction]||c.up;e[f[1]]=f[0]+"="+b.slideOffset,b.slideFade&&d.css({opacity:0}),d.show().animate(e,b.slideInSpeed,a)},function(b){var d=this.getConf(),e=d.slideOffset,f=d.slideFade?{opacity:0}:{},g=c[d.direction]||c.up,h=""+g[0];d.bounce&&(h=h=="+"?"-":"+"),f[g[1]]=h+"="+e,this.getTip().animate(f,d.slideOutSpeed,function(){a(this).hide(),b.call()})})}(jQuery),function(a){function h(b,c,d){var e=b.offset().top,f=b.offset().left,g=d.position.split(/,?\s+/),h=g[0],i=g[1];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var j=c.outerHeight()+b.outerHeight();h=="center"&&(e+=j/2),h=="bottom"&&(e+=j);var k=b.outerWidth();return i=="center"&&(f-=(k+c.outerWidth())/2),i=="left"&&(f-=k),{top:e,left:f}}function i(a){function b(){return this.getAttribute("type")==a}return b.key="[type="+a+"]",b}function l(b,c,e){function l(b,c,d){if(!e.grouped&&b.length)return;var f;if(d===!1||a.isArray(d)){f=g.messages[c.key||c]||g.messages["*"],f=f[e.lang]||g.messages["*"].en;var h=f.match(/\$\d/g);h&&a.isArray(d)&&a.each(h,function(a){f=f.replace(this,d[a])})}else f=d[e.lang]||d;b.push(f)}var f=this,i=c.add(f);b=b.not(":button, :image, :reset, :submit"),c.attr("novalidate","novalidate"),a.extend(f,{getConf:function(){return e},getForm:function(){return c},getInputs:function(){return b},reflow:function(){return b.each(function(){var b=a(this),c=b.data("msg.el");if(c){var d=h(b,c,e);c.css({top:d.top,left:d.left})}}),f},invalidate:function(c,d){if(!d){var g=[];a.each(c,function(a,c){var d=b.filter("[name='"+a+"']");d.length&&(d.trigger("OI",[c]),g.push({input:d,messages:[c]}))}),c=g,d=a.Event()}return d.type="onFail",i.trigger(d,[c]),d.isDefaultPrevented()||k[e.effect][0].call(f,c,d),f},reset:function(c){return c=c||b,c.removeClass(e.errorClass).each(function(){var b=a(this).data("msg.el");b&&(b.remove(),a(this).data("msg.el",null))}).unbind(e.errorInputEvent||""),f},destroy:function(){return c.unbind(e.formEvent+".V").unbind("reset.V"),b.unbind(e.inputEvent+".V").unbind("change.V"),f.reset()},checkValidity:function(c,g){c=c||b,c=c.not(":disabled");if(!c.length)return!0;g=g||a.Event(),g.type="onBeforeValidate",i.trigger(g,[c]);if(g.isDefaultPrevented())return g.result;var h=[];c.not(":radio:not(:checked)").each(function(){var b=[],c=a(this).data("messages",b),k=d&&c.is(":date")?"onHide.v":e.errorInputEvent+".v";c.unbind(k),a.each(j,function(){var a=this,d=a[0];if(c.filter(d).length){var h=a[1].call(f,c,c.val());if(h!==!0){g.type="onBeforeFail",i.trigger(g,[c,d]);if(g.isDefaultPrevented())return!1;var j=c.attr(e.messageAttr);if(j)return b=[j],!1;l(b,d,h)}}}),b.length&&(h.push({input:c,messages:b}),c.trigger("OI",[b]),e.errorInputEvent&&c.bind(k,function(a){f.checkValidity(c,a)}));if(e.singleError&&h.length)return!1});var m=k[e.effect];if(!m)throw'Validator: cannot find effect "'+e.effect+'"';return h.length?(f.invalidate(h,g),!1):(m[1].call(f,c,g),g.type="onSuccess",i.trigger(g,[c]),c.unbind(e.errorInputEvent+".v"),!0)}}),a.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),e.formEvent&&c.bind(e.formEvent+".V",function(a){if(!f.checkValidity(null,a))return a.preventDefault();a.target=c,a.type=e.formEvent}),c.bind("reset.V",function(){f.reset()}),b[0]&&b[0].validity&&b.each(function(){this.oninvalid=function(){return!1}}),c[0]&&(c[0].checkValidity=f.checkValidity),e.inputEvent&&b.bind(e.inputEvent+".V",function(b){f.checkValidity(a(this),b)}),b.filter(":checkbox, select").filter("[required]").bind("change.V",function(b){var c=a(this);(this.checked||c.is("select")&&a(this).val())&&k[e.effect][1].call(f,c,b)});var m=b.filter(":radio").change(function(a){f.checkValidity(m,a)});a(window).resize(function(){f.reflow()})}a.tools=a.tools||{version:"1.2.6"};var b=/\[type=([a-z]+)\]/,c=/^-?[0-9]*(\.[0-9]+)?$/,d=a.tools.dateinput,e=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,f=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,g;g=a.tools.validator={conf:{grouped:!1,effect:"default",errorClass:"invalid",inputEvent:null,errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:!1,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(b,c){a.each(c,function(a,c){g.messages[a]=g.messages[a]||{},g.messages[a][b]=c})},localizeFn:function(b,c){g.messages[b]=g.messages[b]||{},a.extend(g.messages[b],c)},fn:function(c,d,e){a.isFunction(d)?e=d:(typeof d=="string"&&(d={en:d}),this.messages[c.key||c]=d);var f=b.exec(c);f&&(c=i(f[1])),j.push([c,e])},addEffect:function(a,b,c){k[a]=[b,c]}};var j=[],k={"default":[function(b){var c=this.getConf();a.each(b,function(b,d){var e=d.input;e.addClass(c.errorClass);var f=e.data("msg.el");f||(f=a(c.message).addClass(c.messageClass).appendTo(document.body),e.data("msg.el",f)),f.css({visibility:"hidden"}).find("p").remove(),a.each(d.messages,function(b,c){a("<p/>").html(c).appendTo(f)}),f.outerWidth()==f.parent().width()&&f.add(f.find("p")).css({display:"inline"});var g=h(e,f,c);f.css({visibility:"visible",position:"absolute",top:g.top,left:g.left}).fadeIn(c.speed)})},function(b){var c=this.getConf();b.removeClass(c.errorClass).each(function(){var b=a(this).data("msg.el");b&&b.css({visibility:"hidden"})})}]};a.each("email,url,number".split(","),function(b,c){a.expr[":"][c]=function(a){return a.getAttribute("type")===c}}),a.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)},g.fn(":email","Please enter a valid email address",function(a,b){return!b||e.test(b)}),g.fn(":url","Please enter a valid URL",function(a,b){return!b||f.test(b)}),g.fn(":number","Please enter a numeric value.",function(a,b){return c.test(b)}),g.fn("[max]","Please enter a value no larger than $1",function(a,b){if(b===""||d&&a.is(":date"))return!0;var c=a.attr("max");return parseFloat(b)<=parseFloat(c)?!0:[c]}),g.fn("[min]","Please enter a value of at least $1",function(a,b){if(b===""||d&&a.is(":date"))return!0;var c=a.attr("min");return parseFloat(b)>=parseFloat(c)?!0:[c]}),g.fn("[required]","Please complete this mandatory field.",function(a,b){return a.is(":checkbox")?a.is(":checked"):!!b}),g.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");return b.test(a.val())}),a.fn.validator=function(b){var c=this.data("validator");return c&&(c.destroy(),this.removeData("validator")),b=a.extend(!0,{},g.conf,b),this.is("form")?this.each(function(){var d=a(this);c=new l(d.find(":input"),d,b),d.data("validator",c)}):(c=new l(this,this.eq(0).closest("form"),b),this.data("validator",c))}}(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/**
* EaselJS
* Visit http://easeljs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 Grant Skinner
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
**/
(function(j){var c=function(){throw"UID cannot be instantiated";};c._nextID=0;c.get=function(){return c._nextID++};j.UID=c})(window);(function(j){var c=function(){throw"Ticker cannot be instantiated.";};c.useRAF=null;c._listeners=null;c._pauseable=null;c._paused=false;c._inited=false;c._startTime=0;c._pausedTime=0;c._ticks=0;c._pausedTickers=0;c._interval=50;c._lastTime=0;c._times=null;c._tickTimes=null;c._rafActive=false;c._timeoutID=null;c.addListener=function(a,b){c._inited||c.init();c.removeListener(a);c._pauseable[c._listeners.length]=b==null?true:b;c._listeners.push(a)};c.init=function(){c._inited=true;c._times=[];c._tickTimes=
[];c._pauseable=[];c._listeners=[];c._times.push(c._startTime=c._getTime());c.setInterval(c._interval)};c.removeListener=function(a){c._listeners!=null&&(a=c._listeners.indexOf(a),a!=-1&&(c._listeners.splice(a,1),c._pauseable.splice(a,1)))};c.removeAllListeners=function(){c._listeners=[];c._pauseable=[]};c.setInterval=function(a){c._lastTime=c._getTime();c._interval=a;c.timeoutID!=null&&clearTimeout(c.timeoutID);if(c.useRAF){if(c._rafActive)return;c._rafActive=true;var b=j.requestAnimationFrame||
j.webkitRequestAnimationFrame||j.mozRequestAnimationFrame||j.oRequestAnimationFrame||j.msRequestAnimationFrame;if(b){b(c._handleAF);return}}if(c._inited)c.timeoutID=setTimeout(c._handleTimeout,a)};c.getInterval=function(){return c._interval};c.setFPS=function(a){c.setInterval(1E3/a)};c.getFPS=function(){return 1E3/c._interval};c.getMeasuredFPS=function(a){if(c._times.length<2)return-1;a==null&&(a=c.getFPS()>>1);a=Math.min(c._times.length-1,a);return 1E3/((c._times[0]-c._times[a])/a)};c.setPaused=
function(a){c._paused=a};c.getPaused=function(){return c._paused};c.getTime=function(a){return c._getTime()-c._startTime-(a?c._pausedTime:0)};c.getTicks=function(a){return c._ticks-(a?c._pausedTickers:0)};c._handleAF=function(a){a-c._lastTime>=c._interval-1&&c._tick();c.useRAF?(j.requestAnimationFrame||j.webkitRequestAnimationFrame||j.mozRequestAnimationFrame||j.oRequestAnimationFrame||j.msRequestAnimationFrame)(c._handleAF,c.animationTarget):c._rafActive=false};c._handleTimeout=function(){c._tick();
if(!c.useRAF)c.timeoutID=setTimeout(c._handleTimeout,c._interval)};c._tick=function(){c._ticks++;var a=c._getTime(),b=a-c._lastTime,n=c._paused;n&&(c._pausedTickers++,c._pausedTime+=b);c._lastTime=a;for(var i=c._pauseable,d=c._listeners.slice(),e=d?d.length:0,f=0;f<e;f++){var g=i[f],k=d[f];k==null||n&&g||k.tick==null||k.tick(b,n)}for(c._tickTimes.unshift(c._getTime()-a);c._tickTimes.length>100;)c._tickTimes.pop();for(c._times.unshift(a);c._times.length>100;)c._times.pop()};c._getTime=function(){return(new Date).getTime()};
j.Ticker=c})(window);(function(j){var c=function(b,a,i,c,e){this.initialize(b,a,i,c,e)},a=c.prototype;a.stageX=0;a.stageY=0;a.type=null;a.nativeEvent=null;a.onMouseMove=null;a.onMouseUp=null;a.target=null;a.initialize=function(b,a,i,c,e){this.type=b;this.stageX=a;this.stageY=i;this.target=c;this.nativeEvent=e};a.clone=function(){return new c(this.type,this.stageX,this.stageY,this.target,this.nativeEvent)};a.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"};j.MouseEvent=
c})(window);(function(j){var c=function(b,a,i,c,e,f){this.initialize(b,a,i,c,e,f)},a=c.prototype;c.identity=null;c.DEG_TO_RAD=Math.PI/180;a.a=1;a.b=0;a.c=0;a.d=1;a.tx=0;a.ty=0;a.alpha=1;a.shadow=null;a.compositeOperation=null;a.initialize=function(b,a,i,c,e,f){if(b!=null)this.a=b;this.b=a||0;this.c=i||0;if(c!=null)this.d=c;this.tx=e||0;this.ty=f||0};a.prepend=function(b,a,i,c,e,f){var g=this.tx;if(b!=1||a!=0||i!=0||c!=1){var k=this.a,h=this.c;this.a=k*b+this.b*i;this.b=k*a+this.b*c;this.c=h*b+this.d*i;this.d=
h*a+this.d*c}this.tx=g*b+this.ty*i+e;this.ty=g*a+this.ty*c+f};a.append=function(b,a,i,c,e,f){var g=this.a,k=this.b,h=this.c,l=this.d;this.a=b*g+a*h;this.b=b*k+a*l;this.c=i*g+c*h;this.d=i*k+c*l;this.tx=e*g+f*h+this.tx;this.ty=e*k+f*l+this.ty};a.prependMatrix=function(b){this.prepend(b.a,b.b,b.c,b.d,b.tx,b.ty);this.prependProperties(b.alpha,b.shadow,b.compositeOperation)};a.appendMatrix=function(b){this.append(b.a,b.b,b.c,b.d,b.tx,b.ty);this.appendProperties(b.alpha,b.shadow,b.compositeOperation)};
a.prependTransform=function(b,a,i,d,e,f,g,k,h){if(e%360)var l=e*c.DEG_TO_RAD,e=Math.cos(l),l=Math.sin(l);else e=1,l=0;if(k||h)this.tx-=k,this.ty-=h;f||g?(f*=c.DEG_TO_RAD,g*=c.DEG_TO_RAD,this.prepend(e*i,l*i,-l*d,e*d,0,0),this.prepend(Math.cos(g),Math.sin(g),-Math.sin(f),Math.cos(f),b,a)):this.prepend(e*i,l*i,-l*d,e*d,b,a)};a.appendTransform=function(b,a,i,d,e,f,g,k,h){if(e%360)var l=e*c.DEG_TO_RAD,e=Math.cos(l),l=Math.sin(l);else e=1,l=0;f||g?(f*=c.DEG_TO_RAD,g*=c.DEG_TO_RAD,this.append(Math.cos(g),
Math.sin(g),-Math.sin(f),Math.cos(f),b,a),this.append(e*i,l*i,-l*d,e*d,0,0)):this.append(e*i,l*i,-l*d,e*d,b,a);if(k||h)this.tx-=k*this.a+h*this.c,this.ty-=k*this.b+h*this.d};a.rotate=function(b){var a=Math.cos(b),b=Math.sin(b),c=this.a,d=this.c,e=this.tx;this.a=c*a-this.b*b;this.b=c*b+this.b*a;this.c=d*a-this.d*b;this.d=d*b+this.d*a;this.tx=e*a-this.ty*b;this.ty=e*b+this.ty*a};a.skew=function(b,a){b*=c.DEG_TO_RAD;a*=c.DEG_TO_RAD;this.append(Math.cos(a),Math.sin(a),-Math.sin(b),Math.cos(b),0,0)};a.scale=
function(b,a){this.a*=b;this.d*=a;this.tx*=b;this.ty*=a};a.translate=function(b,a){this.tx+=b;this.ty+=a};a.identity=function(){this.alpha=this.a=this.d=1;this.b=this.c=this.tx=this.ty=0;this.shadow=this.compositeOperation=null};a.invert=function(){var b=this.a,a=this.b,c=this.c,d=this.d,e=this.tx,f=b*d-a*c;this.a=d/f;this.b=-a/f;this.c=-c/f;this.d=b/f;this.tx=(c*this.ty-d*e)/f;this.ty=-(b*this.ty-a*e)/f};a.isIdentity=function(){return this.tx==0&&this.ty==0&&this.a==1&&this.b==0&&this.c==0&&this.d==
1};a.decompose=function(b){b==null&&(b={});b.x=this.tx;b.y=this.ty;b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b);b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var a=Math.atan2(-this.c,this.d),i=Math.atan2(this.b,this.a);a==i?(b.rotation=i/c.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=a/c.DEG_TO_RAD,b.skewY=i/c.DEG_TO_RAD);return b};a.reinitialize=function(b,a,c,d,e,f,g,k,h){this.initialize(b,a,c,d,e,f);this.alpha=g||1;this.shadow=k;this.compositeOperation=
h;return this};a.appendProperties=function(b,a,c){this.alpha*=b;this.shadow=a||this.shadow;this.compositeOperation=c||this.compositeOperation};a.prependProperties=function(b,a,c){this.alpha*=b;this.shadow=this.shadow||a;this.compositeOperation=this.compositeOperation||c};a.clone=function(){var b=new c(this.a,this.b,this.c,this.d,this.tx,this.ty);b.shadow=this.shadow;b.alpha=this.alpha;b.compositeOperation=this.compositeOperation;return b};a.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+
" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"};c.identity=new c(1,0,0,1,0,0);j.Matrix2D=c})(window);(function(j){var c=function(b,a){this.initialize(b,a)},a=c.prototype;a.x=0;a.y=0;a.initialize=function(b,a){this.x=b==null?0:b;this.y=a==null?0:a};a.clone=function(){return new c(this.x,this.y)};a.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"};j.Point=c})(window);(function(j){var c=function(b,a,c,d){this.initialize(b,a,c,d)},a=c.prototype;a.x=0;a.y=0;a.width=0;a.height=0;a.initialize=function(b,a,c,d){this.x=b==null?0:b;this.y=a==null?0:a;this.width=c==null?0:c;this.height=d==null?0:d};a.clone=function(){return new c(this.x,this.y,this.width,this.height)};a.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"};j.Rectangle=c})(window);(function(j){var c=function(b,a,c,d){this.initialize(b,a,c,d)},a=c.prototype;c.identity=null;a.color=null;a.offsetX=0;a.offsetY=0;a.blur=0;a.initialize=function(b,a,c,d){this.color=b;this.offsetX=a;this.offsetY=c;this.blur=d};a.toString=function(){return"[Shadow]"};a.clone=function(){return new c(this.color,this.offsetX,this.offsetY,this.blur)};c.identity=new c("transparent",0,0,0);j.Shadow=c})(window);(function(j){var c=function(b){this.initialize(b)},a=c.prototype;a.complete=true;a._animations=null;a._frames=null;a._images=null;a._data=null;a._loadCount=0;a._frameHeight=0;a._frameWidth=0;a._numFrames=0;a._regX=0;a._regY=0;a.initialize=function(b){var a,c,d;if(b!=null){if(b.images&&(c=b.images.length)>0){d=this._images=[];for(a=0;a<c;a++){var e=b.images[a];if(!(e instanceof Image)){var f=e,e=new Image;e.src=f}d.push(e);if(!e.getContext&&!e.complete)this._loadCount++,this.complete=false,function(b){e.onload=
function(){b._handleImageLoad()}}(this)}}if(b.frames!=null)if(b.frames instanceof Array){this._frames=[];d=b.frames;for(a=0,c=d.length;a<c;a++)f=d[a],this._frames.push({image:this._images[f[4]?f[4]:0],rect:new Rectangle(f[0],f[1],f[2],f[3]),regX:f[5]||0,regY:f[6]||0})}else c=b.frames,this._frameWidth=c.width,this._frameHeight=c.height,this._regX=c.regX||0,this._regY=c.regY||0,this._numFrames=c.count,this._loadCount==0&&this._calculateFrames();if((c=b.animations)!=null){this._animations=[];this._data=
{};for(var g in c){b={name:g};f=c[g];if(isNaN(f))if(f instanceof Array){b.frequency=f[3];b.next=f[2];d=b.frames=[];for(a=f[0];a<=f[1];a++)d.push(a)}else b.frequency=f.frequency,b.next=f.next,d=b.frames=f.frames.slice(0);else d=b.frames=[f];b.next=d.length<2||b.next==false?null:b.next==true?g:b.next;if(!b.frequency)b.frequency=1;this._animations.push(g);this._data[g]=b}}}};a.getNumFrames=function(b){return b==null?this._frames?this._frames.length:this._numFrames:(b=this._data[b],b==null?0:b.frames.length)};
a.getAnimations=function(){return this._animations.slice(0)};a.getAnimation=function(b){return this._data[b]};a.getFrame=function(b){return this.complete&&this._frames&&(frame=this._frames[b])?frame:null};a.toString=function(){return"[SpriteSheet]"};a.clone=function(){var b=new c;b.complete=this.complete;b._animations=this._animations;b._frames=this._frames;b._images=this._images;b._data=this._data;b._frameHeight=this._frameHeight;b._frameWidth=this._frameWidth;b._numFrames=this._numFrames;b._loadCount=
this._loadCount;return b};a._handleImageLoad=function(){if(--this._loadCount==0)this._calculateFrames(),this.complete=true};a._calculateFrames=function(){if(!(this._frames||this._frameWidth==0)){this._frames=[];for(var b=0,a=this._frameWidth,c=this._frameHeight,d=0,e=this._images;d<e.length;d++){for(var f=e[d],g=(f.width+1)/a|0,k=(f.height+1)/c|0,k=this._numFrames>0?Math.min(this._numFrames-b,g*k):g*k,h=0;h<k;h++)this._frames.push({image:f,rect:new Rectangle(h%g*a,(h/g|0)*c,a,c),regX:this._regX,regY:this._regY});
b+=k}this._numFrames=b}};j.SpriteSheet=c})(window);(function(j){function c(b,a){this.f=b;this.params=a}c.prototype.exec=function(b){this.f.apply(b,this.params)};var a=function(){this.initialize()},b=a.prototype;a.getRGB=function(b,a,c,e){b!=null&&c==null&&(e=a,c=b&255,a=b>>8&255,b=b>>16&255);return e==null?"rgb("+b+","+a+","+c+")":"rgba("+b+","+a+","+c+","+e+")"};a.getHSL=function(b,a,c,e){return e==null?"hsl("+b%360+","+a+"%,"+c+"%)":"hsla("+b%360+","+a+"%,"+c+"%,"+e+")"};a.STROKE_CAPS_MAP=["butt","round","square"];a.STROKE_JOINTS_MAP=["miter","round",
"bevel"];a._ctx=document.createElement("canvas").getContext("2d");a.beginCmd=new c(a._ctx.beginPath,[]);a.fillCmd=new c(a._ctx.fill,[]);a.strokeCmd=new c(a._ctx.stroke,[]);b._strokeInstructions=null;b._strokeStyleInstructions=null;b._fillInstructions=null;b._instructions=null;b._oldInstructions=null;b._activeInstructions=null;b._active=false;b._dirty=false;b.initialize=function(){this.clear();this._ctx=a._ctx};b.draw=function(b){this._dirty&&this._updateInstructions();for(var a=this._instructions,
c=0,e=a.length;c<e;c++)a[c].exec(b)};b.moveTo=function(b,a){this._activeInstructions.push(new c(this._ctx.moveTo,[b,a]));return this};b.lineTo=function(b,a){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.lineTo,[b,a]));return this};b.arcTo=function(b,a,d,e,f){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.arcTo,[b,a,d,e,f]));return this};b.arc=function(b,a,d,e,f,g){this._dirty=this._active=true;g==null&&(g=false);this._activeInstructions.push(new c(this._ctx.arc,
[b,a,d,e,f,g]));return this};b.quadraticCurveTo=function(b,a,d,e){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.quadraticCurveTo,[b,a,d,e]));return this};b.bezierCurveTo=function(b,a,d,e,f,g){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.bezierCurveTo,[b,a,d,e,f,g]));return this};b.rect=function(b,a,d,e){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.rect,[b,a,d,e]));return this};b.closePath=function(){if(this._active)this._dirty=
true,this._activeInstructions.push(new c(this._ctx.closePath,[]));return this};b.clear=function(){this._instructions=[];this._oldInstructions=[];this._activeInstructions=[];this._strokeStyleInstructions=this._strokeInstructions=this._fillInstructions=null;this._active=this._dirty=false;return this};b.beginFill=function(b){this._active&&this._newPath();this._fillInstructions=b?[new c(this._setProp,["fillStyle",b])]:null;return this};b.beginLinearGradientFill=function(b,a,d,e,f,g){this._active&&this._newPath();
d=this._ctx.createLinearGradient(d,e,f,g);e=0;for(f=b.length;e<f;e++)d.addColorStop(a[e],b[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d])];return this};b.beginRadialGradientFill=function(b,a,d,e,f,g,k,h){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,g,k,h);e=0;for(f=b.length;e<f;e++)d.addColorStop(a[e],b[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d])];return this};b.beginBitmapFill=function(b,a){this._active&&this._newPath();var d=this._ctx.createPattern(b,
a||"");this._fillInstructions=[new c(this._setProp,["fillStyle",d])];return this};b.endFill=function(){this.beginFill(null);return this};b.setStrokeStyle=function(b,i,d,e){this._active&&this._newPath();this._strokeStyleInstructions=[new c(this._setProp,["lineWidth",b==null?"1":b]),new c(this._setProp,["lineCap",i==null?"butt":isNaN(i)?i:a.STROKE_CAPS_MAP[i]]),new c(this._setProp,["lineJoin",d==null?"miter":isNaN(d)?d:a.STROKE_JOINTS_MAP[d]]),new c(this._setProp,["miterLimit",e==null?"10":e])];return this};
b.beginStroke=function(b){this._active&&this._newPath();this._strokeInstructions=b?[new c(this._setProp,["strokeStyle",b])]:null;return this};b.beginLinearGradientStroke=function(b,a,d,e,f,g){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,g);e=0;for(f=b.length;e<f;e++)d.addColorStop(a[e],b[e]);this._strokeInstructions=[new c(this._setProp,["strokeStyle",d])];return this};b.beginRadialGradientStroke=function(b,a,d,e,f,g,k,h){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,
e,f,g,k,h);e=0;for(f=b.length;e<f;e++)d.addColorStop(a[e],b[e]);this._strokeInstructions=[new c(this._setProp,["strokeStyle",d])];return this};b.beginBitmapStroke=function(b,a){this._active&&this._newPath();var d=this._ctx.createPattern(b,a||"");this._strokeInstructions=[new c(this._setProp,["strokeStyle",d])];return this};b.endStroke=function(){this.beginStroke(null);return this};b.curveTo=b.quadraticCurveTo;b.drawRect=b.rect;b.drawRoundRect=function(b,a,c,e,f){this.drawRoundRectComplex(b,a,c,e,
f,f,f,f);return this};b.drawRoundRectComplex=function(b,a,d,e,f,g,k,h){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.moveTo,[b+f,a]),new c(this._ctx.lineTo,[b+d-g,a]),new c(this._ctx.arc,[b+d-g,a+g,g,-Math.PI/2,0,false]),new c(this._ctx.lineTo,[b+d,a+e-k]),new c(this._ctx.arc,[b+d-k,a+e-k,k,0,Math.PI/2,false]),new c(this._ctx.lineTo,[b+h,a+e]),new c(this._ctx.arc,[b+h,a+e-h,h,Math.PI/2,Math.PI,false]),new c(this._ctx.lineTo,[b,a+f]),new c(this._ctx.arc,[b+f,a+f,f,Math.PI,
Math.PI*3/2,false]));return this};b.drawCircle=function(b,a,c){this.arc(b,a,c,0,Math.PI*2);return this};b.drawEllipse=function(b,a,d,e){this._dirty=this._active=true;var f=d/2*0.5522848,g=e/2*0.5522848,k=b+d,h=a+e,d=b+d/2,e=a+e/2;this._activeInstructions.push(new c(this._ctx.moveTo,[b,e]),new c(this._ctx.bezierCurveTo,[b,e-g,d-f,a,d,a]),new c(this._ctx.bezierCurveTo,[d+f,a,k,e-g,k,e]),new c(this._ctx.bezierCurveTo,[k,e+g,d+f,h,d,h]),new c(this._ctx.bezierCurveTo,[d-f,h,b,e+g,b,e]));return this};b.drawEllipseComplex=
function(b,a,d,e){this._dirty=this._active=true;var f=d/2*0.5522848,g=e/2*0.5522848,k=b+d,h=a+e,d=b+d/2,e=a+e/2;this._activeInstructions.push(new c(this._ctx.moveTo,[b,e]),new c(this._ctx.bezierCurveTo,[b,e-g,d-f,a,d,a]),new c(this._ctx.bezierCurveTo,[d+f,a,k,e-g,k,e]),new c(this._ctx.bezierCurveTo,[k,e+g,d+f,h,d,h]),new c(this._ctx.bezierCurveTo,[d-f,h,b,e+g,b,e]));return this};b.drawPolyStar=function(b,a,d,e,f,g){this._dirty=this._active=true;f==null&&(f=0);f=1-f;g==null?g=0:g/=180/Math.PI;var k=
Math.PI/e;this._activeInstructions.push(new c(this._ctx.moveTo,[b+Math.cos(g)*d,a+Math.sin(g)*d]));for(var h=0;h<e;h++)g+=k,f!=1&&this._activeInstructions.push(new c(this._ctx.lineTo,[b+Math.cos(g)*d*f,a+Math.sin(g)*d*f])),g+=k,this._activeInstructions.push(new c(this._ctx.lineTo,[b+Math.cos(g)*d,a+Math.sin(g)*d]));return this};b.clone=function(){var b=new a;b._instructions=this._instructions.slice();b._activeInstructions=this._activeInstructions.slice();b._oldInstructions=this._oldInstructions.slice();
if(this._fillInstructions)b._fillInstructions=this._fillInstructions.slice();if(this._strokeInstructions)b._strokeInstructions=this._strokeInstructions.slice();if(this._strokeStyleInstructions)b._strokeStyleInstructions=this._strokeStyleInstructions.slice();b._active=this._active;b._dirty=this._dirty;return b};b.toString=function(){return"[Graphics]"};b.mt=b.moveTo;b.lt=b.lineTo;b.at=b.arcTo;b.bt=b.bezierCurveTo;b.qt=b.quadraticCurveTo;b.a=b.arc;b.r=b.rect;b.cp=b.closePath;b.c=b.clear;b.f=b.beginFill;
b.lf=b.beginLinearGradientFill;b.rf=b.beginRadialGradientFill;b.bf=b.beginBitmapFill;b.ef=b.endFill;b.ss=b.setStrokeStyle;b.s=b.beginStroke;b.ls=b.beginLinearGradientStroke;b.rs=b.beginRadialGradientStroke;b.bs=b.beginBitmapStroke;b.es=b.endStroke;b.dr=b.drawRect;b.rr=b.drawRoundRect;b.rc=b.drawRoundRectComplex;b.dc=b.drawCircle;b.de=b.drawEllipse;b.dp=b.drawPolyStar;b._updateInstructions=function(){this._instructions=this._oldInstructions.slice();this._instructions.push(a.beginCmd);this._fillInstructions&&
this._instructions.push.apply(this._instructions,this._fillInstructions);this._strokeInstructions&&(this._instructions.push.apply(this._instructions,this._strokeInstructions),this._strokeStyleInstructions&&this._instructions.push.apply(this._instructions,this._strokeStyleInstructions));this._instructions.push.apply(this._instructions,this._activeInstructions);this._fillInstructions&&this._instructions.push(a.fillCmd);this._strokeInstructions&&this._instructions.push(a.strokeCmd)};b._newPath=function(){this._dirty&&
this._updateInstructions();this._oldInstructions=this._instructions;this._activeInstructions=[];this._active=this._dirty=false};b._setProp=function(b,a){this[b]=a};j.Graphics=a})(window);(function(j){var c=function(){this.initialize()},a=c.prototype;c.suppressCrossDomainErrors=false;c._hitTestCanvas=document.createElement("canvas");c._hitTestCanvas.width=c._hitTestCanvas.height=1;c._hitTestContext=c._hitTestCanvas.getContext("2d");c._nextCacheID=1;a.alpha=1;a.cacheCanvas=null;a.id=-1;a.mouseEnabled=true;a.name=null;a.parent=null;a.regX=0;a.regY=0;a.rotation=0;a.scaleX=1;a.scaleY=1;a.skewX=0;a.skewY=0;a.shadow=null;a.visible=true;a.x=0;a.y=0;a.compositeOperation=null;a.snapToPixel=
false;a.onPress=null;a.onClick=null;a.onDoubleClick=null;a.onMouseOver=null;a.onMouseOut=null;a.tick=null;a.filters=null;a.cacheID=0;a._cacheOffsetX=0;a._cacheOffsetY=0;a._cacheDataURLID=0;a._cacheDataURL=null;a._matrix=null;a.initialize=function(){this.id=UID.get();this._matrix=new Matrix2D};a.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0};a.draw=function(b,a){if(a||!this.cacheCanvas)return false;b.drawImage(this.cacheCanvas,this._cacheOffsetX,this._cacheOffsetY);
return true};a.cache=function(b,a,i,d){if(this.cacheCanvas==null)this.cacheCanvas=document.createElement("canvas");var e=this.cacheCanvas.getContext("2d");this.cacheCanvas.width=i;this.cacheCanvas.height=d;e.clearRect(0,0,i+1,d+1);e.setTransform(1,0,0,1,-b,-a);this.draw(e,true,this._matrix.reinitialize(1,0,0,1,-b,-a));this._cacheOffsetX=b;this._cacheOffsetY=a;this._applyFilters();this.cacheID=c._nextCacheID++};a.updateCache=function(b){if(this.cacheCanvas==null)throw"cache() must be called before updateCache()";
var a=this.cacheCanvas.getContext("2d");a.setTransform(1,0,0,1,-this._cacheOffsetX,-this._cacheOffsetY);b?a.globalCompositeOperation=b:a.clearRect(0,0,this.cacheCanvas.width+1,this.cacheCanvas.height+1);this.draw(a,true);if(b)a.globalCompositeOperation="source-over";this._applyFilters();this.cacheID=c._nextCacheID++};a.uncache=function(){this._cacheDataURL=this.cacheCanvas=null;this.cacheID=this._cacheOffsetX=this._cacheOffsetY=0};a.getCacheDataURL=function(){if(!this.cacheCanvas)return null;if(this.cacheID!=
this._cacheDataURLID)this._cacheDataURL=this.cacheCanvas.toDataURL();return this._cacheDataURL};a.getStage=function(){for(var b=this;b.parent;)b=b.parent;return b instanceof Stage?b:null};a.localToGlobal=function(b,a){var c=this.getConcatenatedMatrix(this._matrix);if(c==null)return null;c.append(1,0,0,1,b,a);return new Point(c.tx,c.ty)};a.globalToLocal=function(b,a){var c=this.getConcatenatedMatrix(this._matrix);if(c==null)return null;c.invert();c.append(1,0,0,1,b,a);return new Point(c.tx,c.ty)};
a.localToLocal=function(b,a,c){b=this.localToGlobal(b,a);return c.globalToLocal(b.x,b.y)};a.setTransform=function(b,a,c,d,e,f,g,k,h){this.x=b||0;this.y=a||0;this.scaleX=c==null?1:c;this.scaleY=d==null?1:d;this.rotation=e||0;this.skewX=f||0;this.skewY=g||0;this.regX=k||0;this.regY=h||0};a.getConcatenatedMatrix=function(b){b?b.identity():b=new Matrix2D;for(var a=this;a!=null;)b.prependTransform(a.x,a.y,a.scaleX,a.scaleY,a.rotation,a.skewX,a.skewY,a.regX,a.regY),b.prependProperties(a.alpha,a.shadow,
a.compositeOperation),a=a.parent;return b};a.hitTest=function(b,a){var i=c._hitTestContext,d=c._hitTestCanvas;i.setTransform(1,0,0,1,-b,-a);this.draw(i);i=this._testHit(i);d.width=0;d.width=1;return i};a.clone=function(){var b=new c;this.cloneProps(b);return b};a.toString=function(){return"[DisplayObject (name="+this.name+")]"};a.cloneProps=function(b){b.alpha=this.alpha;b.name=this.name;b.regX=this.regX;b.regY=this.regY;b.rotation=this.rotation;b.scaleX=this.scaleX;b.scaleY=this.scaleY;b.shadow=
this.shadow;b.skewX=this.skewX;b.skewY=this.skewY;b.visible=this.visible;b.x=this.x;b.y=this.y;b.mouseEnabled=this.mouseEnabled;b.compositeOperation=this.compositeOperation;if(this.cacheCanvas)b.cacheCanvas=this.cacheCanvas.cloneNode(true),b.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0,0,this.cacheCanvas.width,this.cacheCanvas.height),0,0)};a.applyShadow=function(b,a){a=a||Shadow.identity;b.shadowColor=a.color;b.shadowOffsetX=a.offsetX;b.shadowOffsetY=
a.offsetY;b.shadowBlur=a.blur};a._tick=function(){this.tick&&this.tick()};a._testHit=function(b){try{var a=b.getImageData(0,0,1,1).data[3]>1}catch(i){if(!c.suppressCrossDomainErrors)throw"An error has occured. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";}return a};a._applyFilters=function(){if(this.filters&&this.filters.length!=0&&this.cacheCanvas)for(var b=this.filters.length,a=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,
d=this.cacheCanvas.height,e=0;e<b;e++)this.filters[e].applyFilter(a,0,0,c,d)};j.DisplayObject=c})(window);(function(j){var c=function(){this.initialize()},a=c.prototype=new DisplayObject;a.children=null;a.DisplayObject_initialize=a.initialize;a.initialize=function(){this.DisplayObject_initialize();this.children=[]};a.isVisible=function(){return this.visible&&this.alpha>0&&this.children.length&&this.scaleX!=0&&this.scaleY!=0};a.DisplayObject_draw=a.draw;a.draw=function(b,a,i){var d=Stage._snapToPixelEnabled;if(this.DisplayObject_draw(b,a))return true;for(var i=i||this._matrix.reinitialize(1,0,0,1,0,0,
this.alpha,this.shadow,this.compositeOperation),a=this.children.length,e=this.children.slice(0),f=0;f<a;f++){var g=e[f];if(g.isVisible()){var k=false,h=g._matrix.reinitialize(i.a,i.b,i.c,i.d,i.tx,i.ty,i.alpha,i.shadow,i.compositeOperation);h.appendTransform(g.x,g.y,g.scaleX,g.scaleY,g.rotation,g.skewX,g.skewY,g.regX,g.regY);h.appendProperties(g.alpha,g.shadow,g.compositeOperation);if(!(g instanceof c&&g.cacheCanvas==null))d&&g.snapToPixel&&h.a==1&&h.b==0&&h.c==0&&h.d==1?b.setTransform(h.a,h.b,h.c,
h.d,h.tx+0.5|0,h.ty+0.5|0):b.setTransform(h.a,h.b,h.c,h.d,h.tx,h.ty),b.globalAlpha=h.alpha,b.globalCompositeOperation=h.compositeOperation||"source-over",(k=h.shadow)&&this.applyShadow(b,k);g.draw(b,false,h);k&&this.applyShadow(b)}}return true};a.addChild=function(b){if(b==null)return b;var a=arguments.length;if(a>1){for(var c=0;c<a;c++)this.addChild(arguments[c]);return arguments[a-1]}b.parent&&b.parent.removeChild(b);b.parent=this;this.children.push(b);return b};a.addChildAt=function(b,a){var c=
arguments.length;if(c>2){for(var a=arguments[d-1],d=0;d<c-1;d++)this.addChildAt(arguments[d],a+d);return arguments[c-2]}b.parent&&b.parent.removeChild(b);b.parent=this;this.children.splice(a,0,b);return b};a.removeChild=function(b){var a=arguments.length;if(a>1){for(var c=true,d=0;d<a;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(this.children.indexOf(b))};a.removeChildAt=function(b){var a=arguments.length;if(a>1){for(var c=[],d=0;d<a;d++)c[d]=arguments[d];c.sort(function(b,
a){return a-b});for(var e=true,d=0;d<a;d++)e=e&&this.removeChildAt(c[d]);return e}if(b<0||b>this.children.length-1)return false;a=this.children[b];if(a!=null)a.parent=null;this.children.splice(b,1);return true};a.removeAllChildren=function(){for(var b=this.children;b.length;)b.pop().parent=null};a.getChildAt=function(b){return this.children[b]};a.sortChildren=function(b){this.children.sort(b)};a.getChildIndex=function(b){return this.children.indexOf(b)};a.getNumChildren=function(){return this.children.length};
a.swapChildrenAt=function(b,a){var c=this.children,d=c[b],e=c[a];d&&e&&(c[b]=e,c[a]=d)};a.swapChildren=function(b,a){for(var c=this.children,d,e,f=0,g=c.length;f<g;f++)if(c[f]==b&&(d=f),c[f]==a&&(e=f),d!=null&&e!=null)return;f!=g&&(c[d]=a,c[e]=b)};a.setChildIndex=function(b,a){for(var c=this.children,d=0,e=c.length;d<e;d++)if(c[d]==b)break;d==e||a<0||a>e||d==a||(c.splice(a,1),a<d&&d--,c.splice(b,d,0))};a.contains=function(b){for(;b;){if(b==this)return true;b=b.parent}return false};a.hitTest=function(b,
a){return this.getObjectUnderPoint(b,a)!=null};a.getObjectsUnderPoint=function(b,a){var c=[],d=this.localToGlobal(b,a);this._getObjectsUnderPoint(d.x,d.y,c);return c};a.getObjectUnderPoint=function(b,a){var c=this.localToGlobal(b,a);return this._getObjectsUnderPoint(c.x,c.y)};a.clone=function(b){var a=new c;this.cloneProps(a);if(b)for(var i=a.children=[],d=0,e=this.children.length;d<e;d++){var f=this.children[d].clone(b);f.parent=a;i.push(f)}return a};a.toString=function(){return"[Container (name="+
this.name+")]"};a._tick=function(b){for(var a=this.children.length-1;a>=0;a--){var c=this.children[a];c._tick&&c._tick(b)}this.tick&&this.tick()};a._getObjectsUnderPoint=function(b,a,i,d){var e=DisplayObject._hitTestContext,f=DisplayObject._hitTestCanvas,g=this._matrix,k=d&1&&(this.onPress||this.onClick||this.onDoubleClick)||d&2&&(this.onMouseOver||this.onMouseOut);if(this.cacheCanvas)if(this.getConcatenatedMatrix(g),e.setTransform(g.a,g.b,g.c,g.d,g.tx-b,g.ty-a),e.globalAlpha=g.alpha,this.draw(e),
this._testHit(e)){if(f.width=0,f.width=1,k)return this}else return null;for(var h=this.children.length-1;h>=0;h--){var l=this.children[h];if(l.isVisible()&&l.mouseEnabled)if(l instanceof c)if(k){if(l=l._getObjectsUnderPoint(b,a))return this}else{if(l=l._getObjectsUnderPoint(b,a,i,d),!i&&l)return l}else if(!d||k||d&1&&(l.onPress||l.onClick||l.onDoubleClick)||d&2&&(l.onMouseOver||l.onMouseOut))if(l.getConcatenatedMatrix(g),e.setTransform(g.a,g.b,g.c,g.d,g.tx-b,g.ty-a),e.globalAlpha=g.alpha,l.draw(e),
this._testHit(e))if(f.width=0,f.width=1,k)return this;else if(i)i.push(l);else return l}return null};j.Container=c})(window);(function(j){var c=function(b){this.initialize(b)},a=c.prototype=new Container;c._snapToPixelEnabled=false;a.autoClear=true;a.canvas=null;a.mouseX=null;a.mouseY=null;a.onMouseMove=null;a.onMouseUp=null;a.onMouseDown=null;a.snapToPixelEnabled=false;a.mouseInBounds=false;a.tickOnUpdate=true;a._activeMouseEvent=null;a._activeMouseTarget=null;a._mouseOverIntervalID=null;a._mouseOverX=0;a._mouseOverY=0;a._mouseOverTarget=null;a.Container_initialize=a.initialize;a.initialize=function(b){this.Container_initialize();
this.canvas=b instanceof HTMLCanvasElement?b:document.getElementById(b);this._enableMouseEvents(true)};a.update=function(){if(this.canvas){this.autoClear&&this.clear();c._snapToPixelEnabled=this.snapToPixelEnabled;if(this.tickOnUpdate){if(this.tick==this.update){var b=1;this.tick=null}this._tick(true);if(b)this.tick=this.update}this.draw(this.canvas.getContext("2d"),false,this.getConcatenatedMatrix(this._matrix))}};a.tick=a.update;a.clear=function(){if(this.canvas){var b=this.canvas.getContext("2d");
b.setTransform(1,0,0,1,0,0);b.clearRect(0,0,this.canvas.width,this.canvas.height)}};a.toDataURL=function(b,a){a||(a="image/png");var c=this.canvas.getContext("2d"),d=this.canvas.width,e=this.canvas.height,f;if(b){f=c.getImageData(0,0,d,e);var g=c.globalCompositeOperation;c.globalCompositeOperation="destination-over";c.fillStyle=b;c.fillRect(0,0,d,e)}var k=this.canvas.toDataURL(a);if(b)c.clearRect(0,0,d,e),c.putImageData(f,0,0),c.globalCompositeOperation=g;return k};a.enableMouseOver=function(b){if(this._mouseOverIntervalID)clearInterval(this._mouseOverIntervalID),
this._mouseOverIntervalID=null;if(b==null)b=20;else if(b<=0)return;var a=this;this._mouseOverIntervalID=setInterval(function(){a._testMouseOver()},1E3/Math.min(50,b));this._mouseOverX=NaN;this._mouseOverTarget=null};a.clone=function(){var b=new c(null);this.cloneProps(b);return b};a.toString=function(){return"[Stage (name="+this.name+")]"};a._enableMouseEvents=function(){var b=this,a=j.addEventListener?j:document;a.addEventListener("mouseup",function(a){b._handleMouseUp(a)},false);a.addEventListener("mousemove",
function(a){b._handleMouseMove(a)},false);a.addEventListener("dblclick",function(a){b._handleDoubleClick(a)},false);this.canvas&&this.canvas.addEventListener("mousedown",function(a){b._handleMouseDown(a)},false)};a._handleMouseMove=function(b){if(this.canvas){if(!b)b=j.event;var a=this.mouseInBounds;this._updateMousePosition(b.pageX,b.pageY);if(a||this.mouseInBounds){b=new MouseEvent("onMouseMove",this.mouseX,this.mouseY,this,b);if(this.onMouseMove)this.onMouseMove(b);if(this._activeMouseEvent&&this._activeMouseEvent.onMouseMove)this._activeMouseEvent.onMouseMove(b)}}else this.mouseX=
this.mouseY=null};a._updateMousePosition=function(b,a){var c=this.canvas;do b-=c.offsetLeft,a-=c.offsetTop;while(c=c.offsetParent);if(this.mouseInBounds=b>=0&&a>=0&&b<this.canvas.width&&a<this.canvas.height)this.mouseX=b,this.mouseY=a};a._handleMouseUp=function(b){var a=new MouseEvent("onMouseUp",this.mouseX,this.mouseY,this,b);if(this.onMouseUp)this.onMouseUp(a);if(this._activeMouseEvent&&this._activeMouseEvent.onMouseUp)this._activeMouseEvent.onMouseUp(a);if(this._activeMouseTarget&&this._activeMouseTarget.onClick&&
this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,true,this._mouseOverIntervalID?3:1)==this._activeMouseTarget)this._activeMouseTarget.onClick(new MouseEvent("onClick",this.mouseX,this.mouseY,this._activeMouseTarget,b));this._activeMouseEvent=this._activeMouseTarget=null};a._handleMouseDown=function(b){if(this.onMouseDown)this.onMouseDown(new MouseEvent("onMouseDown",this.mouseX,this.mouseY,this,b));var a=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,this._mouseOverIntervalID?3:1);
if(a){if(a.onPress instanceof Function&&(b=new MouseEvent("onPress",this.mouseX,this.mouseY,a,b),a.onPress(b),b.onMouseMove||b.onMouseUp))this._activeMouseEvent=b;this._activeMouseTarget=a}};a._testMouseOver=function(){if(!(this.mouseX==this._mouseOverX&&this.mouseY==this._mouseOverY&&this.mouseInBounds)){var b=null;if(this.mouseInBounds)b=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,3),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY;if(this._mouseOverTarget!=b){if(this._mouseOverTarget&&
this._mouseOverTarget.onMouseOut)this._mouseOverTarget.onMouseOut(new MouseEvent("onMouseOut",this.mouseX,this.mouseY,this._mouseOverTarget));if(b&&b.onMouseOver)b.onMouseOver(new MouseEvent("onMouseOver",this.mouseX,this.mouseY,b));this._mouseOverTarget=b}}};a._handleDoubleClick=function(b){if(this.onDoubleClick)this.onDoubleClick(new MouseEvent("onDoubleClick",this.mouseX,this.mouseY,this,b));var a=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,this._mouseOverIntervalID?3:1);if(a&&a.onDoubleClick instanceof
Function)a.onDoubleClick(new MouseEvent("onPress",this.mouseX,this.mouseY,a,b))};j.Stage=c})(window);(function(j){var c=function(b){this.initialize(b)},a=c.prototype=new DisplayObject;a.image=null;a.snapToPixel=true;a.DisplayObject_initialize=a.initialize;a.initialize=function(b){this.DisplayObject_initialize();typeof b=="string"?(this.image=new Image,this.image.src=b):this.image=b};a.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.image&&(this.image.complete||this.image.getContext||this.image.readyState>=2)};a.DisplayObject_draw=a.draw;
a.draw=function(b,a){
if(this.DisplayObject_draw(b,a))return true;
//b.drawImage(this.image,0,0);return true;
var tcct=this.sourceRect;
if(tcct){
var h = this.image.height;
var w = this.image.width;
var ratio = h/w;
if(ratio>tcct.height/tcct.width){
    h = w*tcct.height/tcct.width;
}else{
    w = h*tcct.width/tcct.height;
}
b.drawImage(this.image,(this.image.width-w)/2, (this.image.height-h)/2, w, h, 0, 0, tcct.width, tcct.height)}else{
b.drawImage(this.image,0,0);
}
return!0
};
a.clone=function(){
var b=new c(this.image);
this.sourceRect&&(b.sourceRect=this.sourceRect.clone());
this.cloneProps(b);
return b
};a.toString=function(){return"[Bitmap (name="+this.name+")]"};j.Bitmap=c})(window);(function(j){var c=function(b){this.initialize(b)},a=c.prototype=new DisplayObject;a.onAnimationEnd=null;a.currentFrame=-1;a.currentAnimation=null;a.paused=true;a.spriteSheet=null;a.snapToPixel=true;a.offset=0;a.currentAnimationFrame=0;a._advanceCount=0;a._animation=null;a.DisplayObject_initialize=a.initialize;a.initialize=function(b){this.DisplayObject_initialize();this.spriteSheet=b};a.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.spriteSheet.complete&&
this.currentFrame>=0};a.DisplayObject_draw=a.draw;a.draw=function(b,a){if(this.DisplayObject_draw(b,a))return true;this._normalizeFrame();var c=this.spriteSheet.getFrame(this.currentFrame);if(c!=null){var d=c.rect;b.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height);return true}};a.gotoAndPlay=function(b){this.paused=false;this._goto(b)};a.gotoAndStop=function(b){this.paused=true;this._goto(b)};a.advance=function(){this._animation?this.currentAnimationFrame++:this.currentFrame++;
this._normalizeFrame()};a.clone=function(){var b=new c(this.spriteSheet);this.cloneProps(b);return b};a.toString=function(){return"[BitmapAnimation (name="+this.name+")]"};a._tick=function(b){var a=this._animation?this._animation.frequency:1;b&&!this.paused&&(++this._advanceCount+this.offset)%a==0&&this.advance()};a._normalizeFrame=function(){var b=this._animation;if(b)if(this.currentAnimationFrame>=b.frames.length){if(b.next?this._goto(b.next):(this.paused=true,this.currentAnimationFrame=b.frames.length-
1,this.currentFrame=b.frames[this.currentAnimationFrame]),this.onAnimationEnd)this.onAnimationEnd(this,b.name)}else this.currentFrame=b.frames[this.currentAnimationFrame];else if(this.currentFrame>=this.spriteSheet.getNumFrames()&&(this.currentFrame=0,this.onAnimationEnd))this.onAnimationEnd(this,null)};a.DisplayObject_cloneProps=a.cloneProps;a.cloneProps=function(b){this.DisplayObject_cloneProps(b);b.onAnimationEnd=this.onAnimationEnd;b.currentFrame=this.currentFrame;b.currentAnimation=this.currentAnimation;
b.paused=this.paused;b.offset=this.offset;b._animation=this._animation;b.currentAnimationFrame=this.currentAnimationFrame};a._goto=function(b){if(isNaN(b)){var a=this.spriteSheet.getAnimation(b);if(a)this.currentAnimationFrame=0,this._animation=a,this.currentAnimation=b,this._normalizeFrame()}else this.currentAnimation=this._animation=null,this.currentFrame=b};j.BitmapAnimation=c})(window);(function(j){var c=function(b){this.initialize(b)},a=c.prototype=new DisplayObject;a.graphics=null;a.DisplayObject_initialize=a.initialize;a.initialize=function(b){this.DisplayObject_initialize();this.graphics=b?b:new Graphics};a.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.graphics};a.DisplayObject_draw=a.draw;a.draw=function(b,a){if(this.DisplayObject_draw(b,a))return true;this.graphics.draw(b);return true};a.clone=function(b){b=new c(b&&this.graphics?
this.graphics.clone():this.graphics);this.cloneProps(b);return b};a.toString=function(){return"[Shape (name="+this.name+")]"};j.Shape=c})(window);(function(j){var c=function(b,a,c){this.initialize(b,a,c)},a=c.prototype=new DisplayObject;c._workingContext=document.createElement("canvas").getContext("2d");a.text="";a.font=null;a.color=null;a.textAlign=null;a.textBaseline=null;a.maxWidth=null;a.outline=false;a.lineHeight=null;a.lineWidth=null;a.DisplayObject_initialize=a.initialize;a.initialize=function(b,a,c){this.DisplayObject_initialize();this.text=b;this.font=a;this.color=c?c:"#000"};a.isVisible=function(){return Boolean(this.visible&&this.alpha>
0&&this.scaleX!=0&&this.scaleY!=0&&this.text!=null&&this.text!="")};a.DisplayObject_draw=a.draw;a.draw=function(b,a){if(this.DisplayObject_draw(b,a))return true;this.outline?b.strokeStyle=this.color:b.fillStyle=this.color;b.font=this.font;b.textAlign=this.textAlign?this.textAlign:"start";b.textBaseline=this.textBaseline?this.textBaseline:"alphabetic";for(var c=String(this.text).split(/(?:\r\n|\r|\n)/),d=this.lineHeight==null?this.getMeasuredLineHeight():this.lineHeight,e=0,f=0,g=c.length;f<g;f++){var k=
b.measureText(c[f]).width;if(this.lineWidth==null||k<this.lineWidth)this._drawTextLine(b,c[f],e);else{for(var k=c[f].split(/(\s)/),h=k[0],l=1,j=k.length;l<j;l+=2)b.measureText(h+k[l]+k[l+1]).width>this.lineWidth?(this._drawTextLine(b,h,e),e+=d,h=k[l+1]):h+=k[l]+k[l+1];this._drawTextLine(b,h,e)}e+=d}return true};a.getMeasuredWidth=function(){return this._getWorkingContext().measureText(this.text).width};a.getMeasuredLineHeight=function(){return this._getWorkingContext().measureText("M").width*1.2};
a.clone=function(){var b=new c(this.text,this.font,this.color);this.cloneProps(b);return b};a.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"};a.DisplayObject_cloneProps=a.cloneProps;a.cloneProps=function(b){this.DisplayObject_cloneProps(b);b.textAlign=this.textAlign;b.textBaseline=this.textBaseline;b.maxWidth=this.maxWidth;b.outline=this.outline;b.lineHeight=this.lineHeight;b.lineWidth=this.lineWidth};a._getWorkingContext=function(){var b=
c._workingContext;b.font=this.font;b.textAlign=this.textAlign?this.textAlign:"start";b.textBaseline=this.textBaseline?this.textBaseline:"alphabetic";return b};a._drawTextLine=function(b,a,c){this.outline?b.strokeText(a,0,c,this.maxWidth):b.fillText(a,0,c,this.maxWidth||65535)};j.Text=c})(window);(function(j){var c=function(){throw"SpriteSheetUtils cannot be instantiated";};c._workingCanvas=document.createElement("canvas");c._workingContext=c._workingCanvas.getContext("2d");c.addFlippedFrames=function(a,b,j,i){if(b||j||i){var d=0;b&&c._flip(a,++d,true,false);j&&c._flip(a,++d,false,true);i&&c._flip(a,++d,true,true)}};c.extractFrame=function(a,b){isNaN(b)&&(b=a.getAnimation(b).frames[0]);var j=a.getFrame(b);if(!j)return null;var i=j.rect,d=c._workingCanvas;d.width=i.width;d.height=i.height;
c._workingContext.drawImage(j.image,i.x,i.y,i.width,i.height,0,0,i.width,i.height);j=new Image;j.src=d.toDataURL("image/png");return j};c._flip=function(a,b,j,i){for(var d=a._images,e=c._workingCanvas,f=c._workingContext,g=d.length/b,k=0;k<g;k++){var h=d[k];h.__tmp=k;e.width=h.width;e.height=h.height;f.setTransform(j?-1:1,0,0,i?-1:1,j?h.width:0,i?h.height:0);f.drawImage(h,0,0);var l=new Image;l.src=e.toDataURL("image/png");l.width=h.width;l.height=h.height;d.push(l)}f=a._frames;e=f.length/b;for(k=
0;k<e;k++){var h=f[k],m=h.rect.clone(),l=d[h.image.__tmp+g*b],o={image:l,rect:m,regX:h.regX,regY:h.regY};if(j)m.x=l.width-m.x-m.width,o.regX=m.width-h.regX;if(i)m.y=l.height-m.y-m.height,o.regY=m.height-h.regY;f.push(o)}j="_"+(j?"h":"")+(i?"v":"");i=a._animations;a=a._data;d=i.length/b;for(k=0;k<d;k++){f=i[k];h=a[f];g={name:f+j,frequency:h.frequency,next:h.next,frames:[]};h.next&&(g.next+=j);f=h.frames;h=0;for(l=f.length;h<l;h++)g.frames.push(f[h]+e*b);a[g.name]=g;i.push(g.name)}};j.SpriteSheetUtils=
c})(window);(function(j){var c=function(b){this.initialize(b)},a=c.prototype=new DisplayObject;a.htmlElement=null;a._style=null;a.DisplayObject_initialize=a.initialize;a.initialize=function(b){typeof b=="string"&&(b=document.getElementById(b));this.DisplayObject_initialize();this.mouseEnabled=false;if(this.htmlElement=b)this._style=b.style,this._style.position="absolute",this._style.transformOrigin=this._style.webkitTransformOrigin=this._style.msTransformOrigin=this._style.MozTransformOrigin="0% 0%"};a.isVisible=
function(){return this.htmlElement!=null};a.draw=function(){if(this.htmlElement!=null){var b=this._matrix,a=this.htmlElement;a.style.opacity=""+b.alpha;a.style.visibility=this.visible?"visible":"hidden";a.style.transform=a.style.webkitTransform=a.style.oTransform=a.style.msTransform=["matrix("+b.a,b.b,b.c,b.d,b.tx,b.ty+")"].join(",");a.style.MozTransform=["matrix("+b.a,b.b,b.c,b.d,b.tx+"px",b.ty+"px)"].join(",");return true}};a.cache=function(){};a.uncache=function(){};a.updateCache=function(){};
a.hitTest=function(){};a.localToGlobal=function(){};a.globalToLocal=function(){};a.localToLocal=function(){};a.clone=function(){var a=new c;this.cloneProps(a);return a};a.toString=function(){return"[DOMElement (name="+this.name+")]"};a._tick=function(){if(this.htmlElement!=null)this.htmlElement.style.visibility="hidden"};j.DOMElement=c})(window);(function(j){var c=function(){this.initialize()},a=c.prototype;a.initialize=function(){};a.getBounds=function(){return new Rectangle(0,0,0,0)};a.applyFilter=function(){};a.toString=function(){return"[Filter]"};a.clone=function(){return new c};j.Filter=c})(window);(function(j){var c=function(){throw"Touch cannot be instantiated";};c.isSupported=function(){return"ontouchstart"in j};c.enable=function(a){if(a!=null&&c.isSupported())a._primaryTouchId=-1,a._handleTouchMoveListener=null,a.canvas.addEventListener("touchstart",function(b){c._handleTouchStart(a,b)},false),document.addEventListener("touchend",function(b){c._handleTouchEnd(a,b)},false)};c._handleTouchStart=function(a,b){b.preventDefault();if(a._primaryTouchId==-1){a._handleTouchMoveListener=a._handleTouchMoveListener||
function(b){c._handleTouchMove(a,b)};document.addEventListener("touchmove",a._handleTouchMoveListener,false);var j=b.changedTouches[0];a._primaryTouchId=j.identifier;a._updateMousePosition(j.pageX,j.pageY);a._handleMouseDown(j)}};c._handleTouchMove=function(a,b){var j=c._findPrimaryTouch(a,b.changedTouches);j&&a._handleMouseMove(j)};c._handleTouchEnd=function(a,b){var j=c._findPrimaryTouch(a,b.changedTouches);if(j)a._primaryTouchId=-1,a._handleMouseUp(j),document.removeEventListener("touchmove",a._handleTouchMoveListener),
a._handleTouchMoveListener=null};c._findPrimaryTouch=function(a,b){for(var c=b.length,i=0;i<c;i++){var d=b[i];if(d.identifier==a._primaryTouchId)return d}return null};j.Touch=c})(window);
/*
* ColorFilter by Grant Skinner. Mar 7, 2011
* Visit http://easeljs.com/ for documentation, updates and examples.
*
*
* Copyright (c) 2010 Grant Skinner
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
* The Easel Javascript library provides a retained graphics mode for canvas
* including a full, hierarchical display list, a core interaction model, and
* helper classes to make working with Canvas much easier.
* @module EaselJS
**/

(function(window) {

/**
* Applies color transforms.
* @class ColorFilter
* @constructor
* @augments Filter
* @param {Number} redMultiplier
* @param {Number} greenMultiplier
* @param {Number} blueMultiplier
* @param {Number} alphaMultiplier
* @param {Number} redOffset
* @param {Number} greenOffset
* @param {Number} blueOffset
* @param {Number} alphaOffset
**/
var ColorFilter = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
  this.initialize(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset);
}
var p = ColorFilter.prototype = new Filter();

// public properties:
	/** Red channel multiplier. */
	p.redMultiplier = 1;
	/** Green channel multiplier. */
	p.greenMultiplier = 1;
	/** Blue channel multiplier. */
	p.blueMultiplier = 1;
	/** Alpha channel multiplier. */
	p.alphaMultiplier = 1;
	/** Red channel offset (added to value). */
	p.redOffset = 0;
	/** Green channel offset (added to value). */
	p.greenOffset = 0;
	/** Blue channel offset (added to value). */
	p.blueOffset = 0;
	/** Alpha channel offset (added to value). */
	p.alphaOffset = 0;

// constructor:
	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
		this.redMultiplier = redMultiplier != null ? redMultiplier : 1;
		this.greenMultiplier = greenMultiplier != null ? greenMultiplier : 1;
		this.blueMultiplier = blueMultiplier != null ? blueMultiplier : 1;
		this.alphaMultiplier = alphaMultiplier != null ? alphaMultiplier : 1;
		this.redOffset = redOffset || 0;
		this.greenOffset = greenOffset || 0;
		this.blueOffset = blueOffset || 0;
		this.alphaOffset = alphaOffset || 0;
	}

// public methods:
	/**
	 * Applies the filter to the specified context.
	 * @method applyFilter
	 * @param ctx The 2D context to use as the source.
	 * @param x The x position to use for the source rect.
	 * @param y The y position to use for the source rect.
	 * @param width The width to use for the source rect.
	 * @param height The height to use for the source rect.
	 * @param targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
	 * @param targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
	 * @param targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
	 **/
	p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
		targetCtx = targetCtx || ctx;
		if (targetX == null) { targetX = x; }
		if (targetY == null) { targetY = y; }
		try {
			var imageData = ctx.getImageData(x, y, width, height);
		} catch(e) {
			//if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
			return false;
		}
		var data = imageData.data;
		var l = data.length;
		for (var i=0; i<l; i+=4) {
			data[i] = data[i]*this.redMultiplier+this.redOffset;
			data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
			data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
			data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;
		}
		imageData.data = data;
		targetCtx.putImageData(imageData, targetX, targetY);
		return true;
	}

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[ColorFilter]";
	}


	/**
	 * Returns a clone of this ColorFilter instance.
	 * @method clone
	 @return {ColorFilter} A clone of the current ColorFilter instance.
	 **/
	p.clone = function() {
		return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
	}

window.ColorFilter = ColorFilter;
}(window));/**
* EaselJS
* Visit http://easeljs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 Grant Skinner
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
**/
(function(i){Tween=function(b,d){this.initialize(b,d)};var a=Tween.prototype;Tween.NONE=0;Tween.LOOP=1;Tween.REVERSE=2;Tween._tweens=[];Tween.cssSuffixMap={top:"px",left:"px",bottom:"px",right:"px",width:"px",height:"px",opacity:""};Tween.get=function(b,d){return new Tween(b,d)};Tween.tick=function(b,d){for(var a=Tween._tweens,e=a.length-1;e>=0;e--){var f=a[e];if(!d||f.ignoreGlobalPause)f.tick(f._useTicks?1:b)}};Ticker&&Ticker.addListener(Tween,false);Tween.removeTweens=function(b){if(b.tweenjs_count){for(var a=
Tween._tweens,c=a.length-1;c>=0;c--)a[c]._target==b&&a.splice(c,1);b.tweenjs_count=0}};Tween._register=function(b,a){var c=b._target;if(a){if(c)c.tweenjs_count=c.tweenjs_count?c.tweenjs_count+1:1;Tween._tweens.push(b)}else c&&c.tweenjs_count--,c=Tween._tweens.indexOf(b),c!=-1&&Tween._tweens.splice(c,1)};a.ignoreGlobalPause=false;a.loop=false;a.cssSuffixMap=null;a.duration=0;a._paused=false;a._curQueueProps=null;a._initQueueProps=null;a._steps=null;a._actions=null;a._prevPosition=0;a._prevPos=-1;a._prevIndex=
-1;a._target=null;a._css=false;a._useTicks=false;a.initialize=function(b,a){this._target=b;if(a)this._useTicks=a.useTicks,this._css=a.css,this.ignoreGlobalPause=a.ignoreGlobalPause,this.loop=a.loop,a.override&&Tween.removeTweens(b);this._curQueueProps={};this._initQueueProps={};this._steps=[];this._actions=[];this._catalog=[];Tween._register(this,true)};a.wait=function(b){if(b==null||b<=0)return this;var a=this._cloneProps(this._curQueueProps);return this._addStep({d:b,p0:a,e:this._linearEase,p1:a})};
a.to=function(b,a,c){if(isNaN(a)||a<0)a=0;return this._addStep({d:a||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(b))})};a.call=function(b,a,c){return this._addAction({f:b,p:a?a:[this],o:c?c:this._target})};a.set=function(b,a){return this._addAction({f:this._set,o:this,p:[b,a?a:this._target]})};a.play=function(b){return this.call(b.setPaused,[false],b)};a.pause=function(b){b||(b=this);return this.call(b.setPaused,[true],b)};a.setPosition=function(b,a){a==
null&&(a=1);var c=b,e=false;if(c>=this.duration)this.loop?c%=this.duration:(c=this.duration,e=true);if(c==this._prevPos)return e;if(c!=this._prevPos)if(e)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;f<g;f++)if(this._steps[f].t>c)break;f=this._steps[f-1];this._updateTargetProps(f,(c-f.t)/f.d)}f=this._prevPos;this._prevPos=c;this._prevPosition=b;a!=0&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):a==1&&c<f?(f!=this.duration&&this._runActions(f,
this.duration),this._runActions(0,c,true)):this._runActions(f,c));e&&this.setPaused(true);return e};a.tick=function(b){this._paused||this.setPosition(this._prevPosition+b)};a.setPaused=function(b){if(this._paused!=!!b)this._paused=!!b,Tween._register(this,!b)};a.w=a.wait;a.t=a.to;a.c=a.call;a.s=a.set;a.toString=function(){return"[Tween]"};a.clone=function(){throw"Tween can not be cloned.";};a._updateTargetProps=function(b,a){if(this._css)var c=this.cssSuffixMap||Tween.cssSuffixMap;var e,f,g,h;!b&&
a==1?e=f=this._curQueueProps:(b.e&&(a=b.e(a,0,1,1)),e=b.p0,f=b.p1);for(n in this._initQueueProps){if((g=e[n])==null)e[n]=g=this._initQueueProps[n];if((h=f[n])==null)f[n]=h=g;g==h||a==0||a==1||typeof g!="number"?a==1&&(g=h):g+=(h-g)*a;this._target[n]=c&&c[n]?g+c[n]:g}};a._runActions=function(b,a,c){var e=b,f=a,g=-1,h=this._actions.length,i=1;b>a&&(e=a,f=b,g=h,h=i=-1);for(;(g+=i)!=h;){var a=this._actions[g],j=a.t;(j==f||j>e&&j<f||c&&j==b)&&a.f.apply(a.o,a.p)}};a._appendQueueProps=function(b){if(this._css)var a=
this.cssSuffixMap||Tween.cssSuffixMap;var c,e,f;for(f in b){if(this._initQueueProps[f]==null)if(a&&(c=a[f])!=null){var g=this._target[f],h=g.length-c.length;if((e=g.substr(h))!=c)throw"TweenJS Error: Suffixes do not match. ("+c+":"+e+")";else this._initQueueProps[f]=parseInt(g.substr(0,h))}else this._initQueueProps[f]=this._target[f];this._curQueueProps[f]=b[f]}return this._curQueueProps};a._cloneProps=function(b){var a={},c;for(c in b)a[c]=b[c];return a};a._addStep=function(b){if(b.d>0)this._steps.push(b),
b.t=this.duration,this.duration+=b.d;return this};a._addAction=function(b){b.t=this.duration;this._actions.push(b);return this};a._set=function(b,a){for(var c in b)a[c]=b[c]};i.Tween=Tween})(window);(function(i){Timeline=function(b,a,c){this.initialize(b,a,c)};var a=Timeline.prototype;a.ignoreGlobalPause=false;a.duration=0;a.loop=false;a._paused=true;a._tweens=null;a._labels=null;a._prevPosition=0;a._prevPos=0;a._useTicks=false;a.initialize=function(b,a,c){this._tweens=[];b&&this.addTween.apply(this,b);this.setLabels(a);this.setPaused(false);if(c)this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause};a.addTween=function(b){var a=arguments.length;if(a>1){for(var c=
0;c<a;c++)this.addTween(arguments[c]);return arguments[0]}else if(a==0)return null;this.removeTween(b);this._tweens.push(b);b.setPaused(true);b._paused=false;if(b.duration>this.duration)this.duration=b.duration;return b};a.removeTween=function(a){var d=arguments.length;if(d>1){for(var c=true,e=0;e<d;e++)c=c&&this.removeTween(arguments[e]);return c}else if(d==0)return false;d=this._tweens.indexOf(a);return d!=-1?(this._tweens.splice(d,1),a.duration>=this.duration&&this.updateDuration(),true):false};
a.addLabel=function(a,d){this._labels[a]=d};a.setLabels=function(a){this._labels=a?a:{}};a.gotoAndPlay=function(a){this.setPaused(false);this._goto(a)};a.gotoAndStop=function(a){this.setPaused(true);this._goto(a)};a.setPosition=function(a){var d=this.loop?a%this.duration:a,c=!this.loop&&a>=this.duration;this._prevPosition=a;this._prevPos=d;for(var a=0,e=this._tweens.length;a<e;a++)if(this._tweens[a].setPosition(d),d!=this._prevPos)return false;c&&this.setPaused(true);return c};a.setPaused=function(a){if(this._paused!=
!!a)this._paused=!!a,Tween._register(this,!a)};a.updateDuration=function(){for(var a=this.duration=0,d=this._tweens.length;a<d;a++)if(tween=this._tweens[a],tween.duration>this.duration)this.duration=tween.duration};a.tick=function(a){this.setPosition(this._prevPosition+a)};a.toString=function(){return"[Timeline]"};a.clone=function(){throw"Timeline can not be cloned.";};a._goto=function(a){var d=parseFloat(a);isNaN(d)&&(d=this._labels[a]);d!=null&&this.setPosition(d)};i.Timeline=Timeline})(window);(function(i){var a=function(){throw"Ease cannot be instantiated.";};a.linear=function(a){return a};a.none=a.linear;a.get=function(a){a<-1&&(a=-1);a>1&&(a=1);return function(d){return a==0?d:a<0?d*(d*-a+1+a):d*((2-d)*a+(1-a))}};a.getPowIn=function(a){return function(d){return Math.pow(d,a)}};a.getPowOut=function(a){return function(d){return 1-Math.pow(1-d,a)}};a.getPowInOut=function(a){return function(d){return(d*=2)<1?0.5*Math.pow(d,a):1-0.5*Math.abs(Math.pow(2-d,a))}};a.quadIn=a.getPowIn(2);a.quadOut=
a.getPowOut(2);a.quadInOut=a.getPowInOut(2);a.cubicIn=a.getPowIn(3);a.cubicOut=a.getPowOut(3);a.cubicInOut=a.getPowInOut(3);a.quartIn=a.getPowIn(4);a.quartOut=a.getPowOut(4);a.quartInOut=a.getPowInOut(4);a.quintIn=a.getPowIn(5);a.quintOut=a.getPowOut(5);a.quintInOut=a.getPowInOut(5);a.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)};a.sineOut=function(a){return Math.sin(a*Math.PI/2)};a.sineInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};a.getBackIn=function(a){return function(d){return d*
d*((a+1)*d-a)}};a.backIn=a.getBackIn(1.7);a.getBackOut=function(a){return function(d){return--d*d*((a+1)*d+a)+1}};a.backOut=a.getBackOut(1.7);a.getBackInOut=function(a){a*=1.525;return function(d){return(d*=2)<1?0.5*d*d*((a+1)*d-a):0.5*((d-=2)*d*((a+1)*d+a)+2)}};a.backInOut=a.getBackInOut(1.7);a.circIn=function(a){return-(Math.sqrt(1-a*a)-1)};a.circOut=function(a){return Math.sqrt(1- --a*a)};a.circInOut=function(a){return(a*=2)<1?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)};a.bounceIn=
function(b){return 1-a.bounceOut(1-b)};a.bounceOut=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};a.bounceInOut=function(b){return b<0.5?a.bounceIn(b*2)*0.5:a.bounceOut(b*2-1)*0.5+0.5};a.getElasticIn=function(a,d){var c=Math.PI*2;return function(e){if(e==0||e==1)return e;var f=d/c*Math.asin(1/a);return-(a*Math.pow(2,10*(e-=1))*Math.sin((e-f)*c/d))}};a.elasticIn=a.getElasticIn(1,0.3);a.getElasticOut=
function(a,d){var c=Math.PI*2;return function(e){if(e==0||e==1)return e;var f=d/c*Math.asin(1/a);return a*Math.pow(2,-10*e)*Math.sin((e-f)*c/d)+1}};a.elasticOut=a.getElasticOut(1,0.3);a.getElasticInOut=function(a,d){var c=Math.PI*2;return function(e){var f=d/c*Math.asin(1/a);return(e*=2)<1?-0.5*a*Math.pow(2,10*(e-=1))*Math.sin((e-f)*c/d):a*Math.pow(2,-10*(e-=1))*Math.sin((e-f)*c/d)*0.5+1}};a.elasticInOut=a.getElasticInOut(1,0.3*1.5);i.Ease=a})(window);
function ScrollBar(a, b) {
	this.x = a.scrollbarPosX;
	this.y = a.scrollbarPosY;
	this.width = a.scrollbarWidth;
	this.height = a.scrollbarHeight;
	this.trackColor = a.scrollbarTrackColor;
	this.handlerColor = a.scrollbarHandlerColor;
	this.nrItems = a.nrImages;
	this.handlerWidth = a.scrollbarHandlerWidth;
	this.unitWidth = (this.width - this.handlerWidth) / (this.nrItems - 1);
	this.track = new Shape;
	this.handler = new Container;
	this.handlerBar = new Shape;
	this.addChild(this.track);
	this.addChild(this.handler);
	this.track.graphics = new Graphics;
	this.track.graphics.beginFill("#FFFFFF");
	this.track.graphics.drawRect(0, 0, this.width, this.height);
	this.track.graphics.endFill();
	this.handlerBar.graphics = new Graphics;
	this.handlerBar.graphics.beginFill("#FFFFFF");
	this.handlerBar.graphics.drawRect(0, 0, this.handlerWidth, this.height);
	this.handlerBar.graphics.endFill();
	this.lines = new Bitmap(b);
	this.lines.regX = Math.floor(this.lines.image.width / 2);
	this.lines.regY = Math.floor(this.lines.image.height / 2);
	var c = this.height / this.lines.image.height;
	this.lines.scaleX = c;
	this.lines.scaleY = c;
	this.handler.addChild(this.handlerBar);
	this.handler.addChild(this.lines);
	this.lines.x = Math.floor(this.handlerWidth / 2);
	this.lines.y = Math.floor(this.height / 2);
	this.track.cache(0, 0, this.width, this.height);
	this.handlerBar.cache(0, 0, this.handlerWidth, this.height);
	this.lines.cache(0, 0, this.lines.image.width, this.lines.image.height);
	this.gotoItem = function(a) {
		Tween.get(this.handler, {
			override : true
		}).to({
			x : Math.floor(a * this.unitWidth)
		}, 1e3, Ease.cubicOut)
	}
}
function TransitionPreloader(a) {
	this.x = a.transPrelPosX;
	this.y = a.transPrelPosY;
	this.size = a.transPrelSize;
	this.bgColor = a.transPrelBgColor;
	this.fillColor = a.transPrelFillColor;
	this.rotation = -90;
	this.fillPreloader = function(a) {
		var b = Math.PI * 2 * a;
		this.graphics = new Graphics;
		this.graphics.beginFill(this.bgColor);
		this.graphics.drawCircle(0, 0, this.size / 2);
		this.graphics.endFill();
		this.graphics.beginFill(this.fillColor);
		this.graphics.lineTo(this.size / 2, 0);
		this.graphics.arc(0, 0, this.size / 2, 0, b, false);
		this.graphics.lineTo(0, 0);
		this.graphics.endFill()
	}
}
function Thumb(a, b, c, d) {
	this.id = a;
	this.imagePath = b;
	this.text = c;
	this.url = d;
	this.angle = 0;
	this.positionZ = 0;
	this.selected = false;
	this.posterPath = null;
	this.container = new Container;
	this.imgContainer = new Container;
	this.bg = new Shape;
	this.imgH = 0;
	this.setImage = function(a, b, c) {
		var d = b.thumbWidth;
		var e = b.thumbHeight;
//		var d = a.image.width;
//		var e = a.image.height;
		this.imgH = e;
		var f = b.borderSize;
		this.bg = new Shape;
		this.bg.graphics = new Graphics;
		this.bg.graphics.beginFill(b.borderColor);
		this.bg.graphics.drawRect(0, 0, d + f * 2, e + f * 2);
		this.bg.cache(0, 0, d + f * 2, e + f * 2);
		this.imgContainer.addChild(this.bg);
		a.x = f;
		a.y = f;
		this.imgContainer.addChild(a);

        this.txt = new Text(this.text, "17px Arial", "#fff");
        this.txt.x =1;
        this.txt.y = e-10;
        this.txt.shadow = new Shadow("#000", 0, 0, 5);
        this.imgContainer.addChild(this.txt);

		this.container.addChild(this.imgContainer);
		this.imgContainer.cache(0, 0, d + f * 2, e + f * 2);
		var g = b.reflHeight;
		g *= e / b.thumbHeight;
		g += f;
		$("#" + c).prepend("<canvas id='carouselReflCanvas'></canvas>");
		var h = $("#carouselReflCanvas");
		$(h).attr({
			width : d + f * 2,
			height : g
		});
		ctx = h[0].getContext("2d");
		ctx.save();
		ctx.translate(0, e + f * 2 - 1);
		ctx.scale(1, -1);
		ctx
				.drawImage(this.imgContainer.cacheCanvas, 0, 0, d + f * 2, e
						+ f * 2);
		ctx.restore();
		ctx.globalCompositeOperation = "destination-out";
		gradient = ctx.createLinearGradient(0, 0, 0, g);
		gradient.addColorStop(0, "rgba(255, 255, 255, "
				+ (1 - b.reflTransparency) + ")");
		gradient.addColorStop(1, "rgba(255, 255, 255, 1.0)");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, d + f * 2, g);
		this.reflection = new Bitmap(h[0]);
		this.container.addChild(this.reflection);
		this.reflection.y = e + f * 2 + b.reflDistance;
		$("#carouselReflCanvas").remove();
		if (!b.showReflection) {
			this.reflection.visible = false
		} else {
			this.imgContainer.cache(0, 0, d + f * 2, e + f * 2 + g
					+ b.reflDistance)
		}
        this.width = b.thumbWidth + f*2;
        this.height = b.thumbHeight + f*2;
		this.imageWidth = this.width;
		this.imageHeight = this.height
	};
	this.setBorderColor = function(a) {
		this.bg.graphics = new Graphics;
		this.bg.graphics.beginFill(a);
		this.bg.graphics.drawRect(0, 0, this.imageWidth, this.imageHeight);
		this.bg.updateCache()
	}
}
function Data(a) {
	function c(a) {
        // canvas_image
		b.canvasWidth = parseInt($(a).find("canvas_width").text());
		b.canvasHeight = parseInt($(a).find("canvas_height").text());
		b.centerX = parseInt($(a).find("carousel_center_x").text());
		b.centerY = parseInt($(a).find("carousel_center_y").text());
		b.radiusX = parseInt($(a).find("radius_x").text());
		b.radiusY = parseInt($(a).find("radius_y").text());
		b.radiusZ = parseInt($(a).find("radius_z").text());
		b.carouselAngle = parseInt($(a).find("carousel_rotation_angle").text());
		b.backThumbTransparency = $(a).find("back_thumb_transparency").text();
		b.backgroundColor = $(a).find("background_color").text();
		if ($(a).find("auto_play").text() == "yes")
			b.autoplay = true;
		else
			b.autoplay = false;
		if ($(a).find("enable_mouse_wheel").text() == "yes")
			b.mousewheel = true;
		else
			b.mousewheel = false;
		b.slideshowDelay = parseFloat($(a).find("slideshow_delay").text()) * 1e3;
		b.preloaderPath = $(a).find("preloader_path").text();
		b.preloaderSize = parseInt($(a).find("preloader_size").text());
		b.preloaderColor = $(a).find("preloader_color").text();
		b.buttonsBackgroundPath = $(a).find("buttons_background_path").text();
		b.buttonsNextIconPath = $(a).find("buttons_next_icon_path").text();
		b.buttonsPrevIconPath = $(a).find("buttons_prev_icon_path").text();
		b.buttonsPlayIconPath = $(a).find("buttons_play_icon_path").text();
		b.buttonsPauseIconPath = $(a).find("buttons_pause_icon_path").text();
//		if ($(a).find("show_next_button").text() == "yes")
//			b.showNextBtn = true;
//		else
			b.showNextBtn = false;
//		if ($(a).find("show_prev_button").text() == "yes")
//			b.showPrevBtn = true;
//		else
			b.showPrevBtn = false;
//		if ($(a).find("show_play_button").text() == "yes")
//			b.showPlayBtn = true;
//		else
			b.showPlayBtn = false;
		b.nextButtonPosX = parseInt($(a).find("next_button_x_position").text());
		b.nextButtonPosY = parseInt($(a).find("next_button_y_position").text());
		b.prevButtonPosX = parseInt($(a).find("prev_button_x_position").text());
		b.prevButtonPosY = parseInt($(a).find("prev_button_y_position").text());
		b.playButtonPosX = parseInt($(a).find("play_button_x_position").text());
		b.playButtonPosY = parseInt($(a).find("play_button_y_position").text());
		b.nextBtnBgColor = $(a).find("next_button_background_color").text();
		b.nextBtnIcColor = $(a).find("next_button_icon_color").text();
		b.prevBtnBgColor = $(a).find("prev_button_background_color").text();
		b.prevBtnIcColor = $(a).find("prev_button_icon_color").text();
		b.playBtnBgColor = $(a).find("play_button_background_color").text();
		b.playBtnIcColor = $(a).find("play_button_icon_color").text();
//		if ($(a).find("show_scrollbar").text() == "yes")
//			b.showScrollbar = true;
//		else
			b.showScrollbar = false;
		b.scrollbarPosX = parseInt($(a).find("scrollbar_x_position").text());
		b.scrollbarPosY = parseInt($(a).find("scrollbar_y_position").text());
		b.scrollbarWidth = parseInt($(a).find("scrollbar_width").text());
		b.scrollbarHeight = parseInt($(a).find("scrollbar_height").text());
		b.scrollbarHandlerWidth = parseInt($(a).find("scrollbar_handler_width")
				.text());
		b.scrollbarHandlerColor = $(a).find("scrollbar_handler_color").text();
		b.scrollbarTrackColor = $(a).find("scrollbar_track_bar_color").text();
		b.scrollbarLinesPath = $(a).find("scrollbar_lines_image_path").text();
		b.thumbWidth = parseInt($(a).find("image_width").text());
		b.thumbHeight = parseInt($(a).find("image_height").text());
		b.borderSize = parseInt($(a).find("border_size").text());
		b.borderColor = $(a).find("border_color").text();
		b.tooltipFont = $(a).find("tooltip_font").text();
		b.tooltipTextSize = parseInt($(a).find("tooltip_text_size").text());
		b.tooltipTextColor = $(a).find("tooltip_text_color").text();
		b.tooltipBgColor = $(a).find("tooltip_background_color").text();
		if ($(a).find("show_reflection").text() == "yes")
			b.showReflection = true;
		else
			b.showReflection = false;
		b.reflHeight = parseInt($(a).find("reflection_height").text());
		b.reflDistance = parseInt($(a).find("reflection_distance").text());
		b.reflTransparency = $(a).find("reflection_transparency").text();
		b.transPrelPosX = parseInt($(a).find("slide_show_preloader_x_position")
				.text());
		b.transPrelPosY = parseInt($(a).find("slide_show_preloader_y_position")
				.text());
		b.transPrelSize = parseInt($(a).find("slide_show_preloader_size")
				.text());
		b.transPrelBgColor = $(a).find("slide_show_preloader_background_color")
				.text();
		b.transPrelFillColor = $(a).find("slide_show_preloader_fill_color")
				.text();
		$(a).find("image").each(
				function() {
					var a = b.nrImages++;
					var c = new Thumb(a, $(this).find("image_path").text(), $(
							this).find("text").text(), $(this).find(
							"url").text());
					b.thumbsAr[a] = c
				});
		$(b).trigger("loaded")
	}
	var b = this;
	b.nrImages = 0;
	b.thumbsAr = new Array;
	$.ajax({
		type : "GET",
		url : a,
		dataType : "xml",
		success : c,
		error : function(a, b) {
			alert("Error with the xml file: " + b)
		}
	})
}
function DemoCanvasCarousel(a, b) {
	function bU(a, b, d, e, f, g, h, i, j) {
		Tween.get(bc, {
			override : true
		}).to({
			radiusX : a,
			radiusY : b,
			radiusZ : d
		}, 1e3, Ease.cubicOut);
		Tween.get(K, {
			override : true
		}).to({
			centerX : parseInt(bc.centerX) + e,
			centerY : parseInt(bc.centerY) + f,
			carouselAngle : g
		}, 1e3, Ease.cubicOut);
		c.setReflDistance(h);
		c.setShowRefl(i);
		v.visible = j;
		var k = $("#carouselRadiusX").data("rangeinput");
		k.setValue(a);
		k = $("#carouselRadiusY").data("rangeinput");
		k.setValue(b);
		k = $("#carouselRadiusZ").data("rangeinput");
		k.setValue(d);
		k = $("#carouselCenterX").data("rangeinput");
		k.setValue(e);
		k = $("#carouselCenterY").data("rangeinput");
		k.setValue(f);
		k = $("#carouselAngle").data("rangeinput");
		k.setValue(g);
		k = $("#reflDistance").data("rangeinput");
		k.setValue(h);
		$("#showRefl").prop("checked", i);
		$("#showScrollbar").prop("checked", j);
		$("#myCanvas").css("background-color", "#000000");
	}
	function bT() {
		if (E) {
			for ( var a = 0; a < r; a++) {
				ba = q[a];
				ba.angle += H
			}
			if (H > 0)
				H -= .5;
			else
				H += .5;
			if (Math.abs(H) < 1) {
				E = false;
				bi()
			}
		}
	}
	function bS() {
		if (f) {
			if (bc.showPrevBtn) {
				bo(R.getChildAt(0), R.prevBtnBgRed, R.prevBtnBgGreen,
						R.prevBtnBgBlue);
				bo(R.getChildAt(1), R.prevBtnIcRed, R.prevBtnIcGreen,
						R.prevBtnIcBlue)
			}
			if (bc.showNextBtn) {
				bo(Q.getChildAt(0), Q.nextBtnBgRed, Q.nextBtnBgGreen,
						Q.nextBtnBgBlue);
				bo(Q.getChildAt(1), Q.nextBtnIcRed, Q.nextBtnIcGreen,
						Q.nextBtnIcBlue)
			}
			if (bc.showPlayBtn) {
				bo(S.getChildAt(0), S.playBtnBgRed, S.playBtnBgGreen,
						S.playBtnBgBlue);
				bo(S.getChildAt(1), S.playBtnIcRed, S.playBtnIcGreen,
						S.playBtnIcBlue);
				bo(S.getChildAt(2), S.playBtnIcRed, S.playBtnIcGreen,
						S.playBtnIcBlue)
			}
			if (bc.showScrollbar) {
				bp(v.trackRed, v.trackGreen, v.trackBlue, v.handlerRed,
						v.handlerGreen, v.handlerBlue)
			}
		}
	}
	function bR() {
		if (e) {
			for ( var a = 0; a < r; a++) {
				ba = q[a];
				ba.container.positionZ = bc.radiusZ
						* Math.sin(Math.PI / 180 * ba.angle) - bc.radiusZ;
				var b = i / (i - ba.container.positionZ);
				ba.container.x = bc.radiusX
						* Math.cos(Math.PI / 180 * ba.angle);
				ba.container.y = bc.radiusY
						* Math.sin(Math.PI / 180 * ba.angle) * b;
				ba.container.scaleX = m / ba.width * b;
				ba.container.scaleY = n / ba.height * b;
				ba.container.alpha = 1 - ba.container.positionZ
						/ (-bc.radiusZ * 2) * (1 - bc.backThumbTransparency);
				ba.container.rotation = -K.carouselAngle
			}
			t.rotation = K.carouselAngle;
			t.sortChildren(function(a, b) {
				return a.positionZ - b.positionZ
			})
		}
		t.x = K.centerX;
		t.y = K.centerY
	}
	function bQ() {
		if (!d) {
			u.rotation += 10
		}
		if (g) {
			w.fillPreloader(I.transPercent / 100)
		}
	}
	function bP() {
		var a;
		var b = bO(q[j].angle) % 360;
		if (b >= 90 && b <= 270) {
			a = 90 - b
		} else if (b > 270) {
			a = 180 - (b - 270)
		} else {
			a = 90 - b
		}
		for ( var c = 0; c < r; c++) {
			ba = q[c];
			var d = ba.angle + a;
			if (c == j) {
				ba.selected = true
			} else {
				ba.selected = false
			}
			Tween.get(ba, {
				override : true
			}).to({
				angle : d
			}, 1e3, Ease.cubicOut)
		}
	}
	function bO(a) {
		while (a < 0)
			a += 360;
		return a
	}
	function bN(a) {
		k = j;
		if (g) {
			clearTimeout(x);
			Tween.get(I, {
				override : true
			}).to({
				transPercent : 0
			}, 1e3, Ease.cubicOut);
			Tween.get(this).wait(1e3).call(bt)
		}
		if (a < 0)
			j = a + r;
		else
			j = a % r;
		if (bc.showScrollbar && !h) {
			v.gotoItem(j)
		}
		bP();
		J.redOffset = 1;
		J.greenOffset = 1;
		J.blueOffset = 1
        parent.fireEvent('selected', q[a]);

	}
	function bM(a) {
		var b = a.target.id;
		if (e&&b) {
			if (b != j) {
				bN(b)
//                parent.fireEvent('selected', q[b]);
//			} else {
//				window.open(q[b].url, "_blank")
 		    }
		}
	}
	function bL(a) {
		$(bb).css("cursor", "default");
		var b = a.target.id;
		if (b == j) {
			Tween.get(L, {
				override : true
			}).to({
				alpha : 0
			}, 400, Ease.cubicOut);
			Tween.get(J, {
				override : true
			}).to({
				redOffset : 0,
				greenOffset : 0,
				blueOffset : 0
			}, 600, Ease.cubicOut)
		}
	}
	function bK(a) {
		$(bb).css("cursor", "pointer");
		var b = a.target.id;
		if (b == j) {
			L.id = b;
			N.text = q[b].text;
			M.graphics = new Graphics;
			M.graphics.beginFill(bc.tooltipBgColor);
			M.graphics.drawRoundRect(0, 0, N.getMeasuredWidth() + 4, N
					.getMeasuredLineHeight() + 8, 4);
			M.graphics.moveTo((N.getMeasuredWidth() + 4) / 2 - 4, N
					.getMeasuredLineHeight() + 8);
			M.graphics.lineTo((N.getMeasuredWidth() + 4) / 2, N
					.getMeasuredLineHeight() + 16);
			M.graphics.lineTo((N.getMeasuredWidth() + 4) / 2 + 4, N
					.getMeasuredLineHeight() + 8);
			M.graphics.endFill();
			M.y = -(N.getMeasuredLineHeight() + 4) / 2;
			N.x = 2;
			N.y = N.getMeasuredLineHeight() / 2;
			Tween.get(L, {
				override : true
			}).to({
				alpha : 1
			}, 400, Ease.cubicOut);
			var c = q[b];
			Tween.get(J, {
				override : true
			}).to({
				redOffset : 50,
				greenOffset : 50,
				blueOffset : 50
			}, 600, Ease.cubicOut)
		}
	}
	function bJ() {
		$(bb).mousewheel(function(a, b) {
			if (b > 0) {
				bN(j + 1)
			} else {
				bN(j - 1)
			}
		})
	}

    function swipe(){
        alert('ffads');
    }
	
	//get images 
	function bI() {
		s.removeChild(u);
		d = true;
		var a = 0;
		for ( var b = 0; b < r; b++) {
			ba = q[b];
			ba.container.id = ba.id;
			ba.container.regX = ba.width / 2;
			ba.container.regY = ba.height / 2;
			ba.angle = b / r * 360 + 90;
			ba.container.scaleX = 0;
			ba.container.scaleY = 0;
			ba.container.alpha = 0;
			ba.container.positionZ = bc.radiusZ
					* Math.sin(Math.PI / 180 * ba.angle) - bc.radiusZ;
			var c = i / (i - ba.container.positionZ);
			ba.container.x = bc.radiusX * Math.cos(Math.PI / 180 * ba.angle);
			ba.container.y = bc.radiusY * Math.sin(Math.PI / 180 * ba.angle)
					* c;
			var f = m / ba.width * c;
			var g = n / ba.height * c;
			var h = 1 - ba.container.positionZ / (-bc.radiusZ * 2)
					* (1 - bc.backThumbTransparency);
			if (b != r - 1) {
				Tween.get(ba.container).wait(a).to({
					scaleX : f,
					scaleY : g,
					alpha : h
				}, 1e3, Ease.cubicOut)
			} else {
				Tween.get(ba.container).wait(a).to({
					scaleX : f,
					scaleY : g,
					alpha : h
				}, 1e3, Ease.cubicOut).call(function() {
					e = true;
					bq();
					if (Touch.isSupported())
						s.onMouseDown = bf;
					if (bc.mousewheel) {
						bJ()
					}
				})
			}
			ba.container.rotation = -K.carouselAngle;
			t.addChild(ba.container);
			ba.container.onMouseOver = bK;
			ba.container.onMouseOut = bL;
			ba.container.onClick = bM;
//            ba.container.onTouchStart = bM;
//            ba.container.onSwipe = bM;
			a += 100;
		}
		t.rotation = K.carouselAngle;
		q[0].selected = true;
		t.sortChildren(function(a, b) {
			return a.positionZ - b.positionZ
		})
	}
	function bH() {
		var b = new Bitmap(Z);
        b.sourceRect = new Rectangle(0, 0 , bc.thumbWidth,bc.thumbHeight);
		q[l].setImage(b, bc, a);
		l++;
		bG()
	}
	function bG() {
		if (l == r) {
			bI();
			return
		}
		Z = new Image;
		Z.src = q[l].imagePath;
		Z.onload = bH
	}
	
	//If this function removed, both <   > buttons not working
	function bF() {
		h = false;
		s.onMouseUp = null;
		D = false;
		t.mouseEnabled = true;
		v.gotoItem(j);
		var a = parseInt(bc.scrollbarTrackColor.substring(1, 3), 16);
		var b = parseInt(bc.scrollbarTrackColor.substring(3, 5), 16);
		var c = parseInt(bc.scrollbarTrackColor.substring(5, 7), 16);
		var d = parseInt(bc.scrollbarHandlerColor.substring(1, 3), 16);
		var e = parseInt(bc.scrollbarHandlerColor.substring(3, 5), 16);
		var f = parseInt(bc.scrollbarHandlerColor.substring(5, 7), 16);
		Tween.get(v, {
			override : true
		}).to({
			trackRed : a,
			trackGreen : b,
			trackBlue : c,
			handlerRed : d,
			handlerGreen : e,
			handlerBlue : f
		}, 500, Ease.cubicOut)
	}
	function bE(a) {
		h = true;
		y = a.stageX - v.handler.x - v.x;
		s.onMouseUp = bF
	}
	function bD() {
		$(bb).css("cursor", "default");
		if (!h) {
			var a = parseInt(bc.scrollbarTrackColor.substring(1, 3), 16);
			var b = parseInt(bc.scrollbarTrackColor.substring(3, 5), 16);
			var c = parseInt(bc.scrollbarTrackColor.substring(5, 7), 16);
			var d = parseInt(bc.scrollbarHandlerColor.substring(1, 3), 16);
			var e = parseInt(bc.scrollbarHandlerColor.substring(3, 5), 16);
			var f = parseInt(bc.scrollbarHandlerColor.substring(5, 7), 16);
			Tween.get(v, {
				override : true
			}).to({
				trackRed : a,
				trackGreen : b,
				trackBlue : c,
				handlerRed : d,
				handlerGreen : e,
				handlerBlue : f
			}, 500, Ease.cubicOut)
		}
	}
	function bC() {
		$(bb).css("cursor", "pointer");
		var a = parseInt(bc.scrollbarHandlerColor.substring(1, 3), 16);
		var b = parseInt(bc.scrollbarHandlerColor.substring(3, 5), 16);
		var c = parseInt(bc.scrollbarHandlerColor.substring(5, 7), 16);
		var d = parseInt(bc.scrollbarTrackColor.substring(1, 3), 16);
		var e = parseInt(bc.scrollbarTrackColor.substring(3, 5), 16);
		var f = parseInt(bc.scrollbarTrackColor.substring(5, 7), 16);
		Tween.get(v, {
			override : true
		}).to({
			trackRed : a,
			trackGreen : b,
			trackBlue : c,
			handlerRed : d,
			handlerGreen : e,
			handlerBlue : f
		}, 500, Ease.cubicOut)
	}
	function bB() {
		$(bb).css("cursor", "default");
		var a = parseInt(bc.playBtnBgColor.substring(1, 3), 16);
		var b = parseInt(bc.playBtnBgColor.substring(3, 5), 16);
		var c = parseInt(bc.playBtnBgColor.substring(5, 7), 16);
		var d = parseInt(bc.playBtnIcColor.substring(1, 3), 16);
		var e = parseInt(bc.playBtnIcColor.substring(3, 5), 16);
		var f = parseInt(bc.playBtnIcColor.substring(5, 7), 16);
		Tween.get(S, {
			override : true
		}).to({
			playBtnBgRed : a,
			playBtnBgGreen : b,
			playBtnBgBlue : c,
			playBtnIcRed : d,
			playBtnIcGreen : e,
			playBtnIcBlue : f
		}, 500, Ease.cubicOut)
	}
	function bA() {
		$(bb).css("cursor", "pointer");
		var a = parseInt(bc.playBtnIcColor.substring(1, 3), 16);
		var b = parseInt(bc.playBtnIcColor.substring(3, 5), 16);
		var c = parseInt(bc.playBtnIcColor.substring(5, 7), 16);
		var d = parseInt(bc.playBtnBgColor.substring(1, 3), 16);
		var e = parseInt(bc.playBtnBgColor.substring(3, 5), 16);
		var f = parseInt(bc.playBtnBgColor.substring(5, 7), 16);
		Tween.get(S, {
			override : true
		}).to({
			playBtnBgRed : a,
			playBtnBgGreen : b,
			playBtnBgBlue : c,
			playBtnIcRed : d,
			playBtnIcGreen : e,
			playBtnIcBlue : f
		}, 500, Ease.cubicOut)
	}
	function bz() {
		$(bb).css("cursor", "default");
		var a = parseInt(bc.nextBtnBgColor.substring(1, 3), 16);
		var b = parseInt(bc.nextBtnBgColor.substring(3, 5), 16);
		var c = parseInt(bc.nextBtnBgColor.substring(5, 7), 16);
		var d = parseInt(bc.nextBtnIcColor.substring(1, 3), 16);
		var e = parseInt(bc.nextBtnIcColor.substring(3, 5), 16);
		var f = parseInt(bc.nextBtnIcColor.substring(5, 7), 16);
		Tween.get(Q, {
			override : true
		}).to({
			nextBtnBgRed : a,
			nextBtnBgGreen : b,
			nextBtnBgBlue : c,
			nextBtnIcRed : d,
			nextBtnIcGreen : e,
			nextBtnIcBlue : f
		}, 500, Ease.cubicOut)
	}
	function by() {
		$(bb).css("cursor", "pointer");
		var a = parseInt(bc.nextBtnIcColor.substring(1, 3), 16);
		var b = parseInt(bc.nextBtnIcColor.substring(3, 5), 16);
		var c = parseInt(bc.nextBtnIcColor.substring(5, 7), 16);
		var d = parseInt(bc.nextBtnBgColor.substring(1, 3), 16);
		var e = parseInt(bc.nextBtnBgColor.substring(3, 5), 16);
		var f = parseInt(bc.nextBtnBgColor.substring(5, 7), 16);
		Tween.get(Q, {
			override : true
		}).to({
			nextBtnBgRed : a,
			nextBtnBgGreen : b,
			nextBtnBgBlue : c,
			nextBtnIcRed : d,
			nextBtnIcGreen : e,
			nextBtnIcBlue : f
		}, 500, Ease.cubicOut)
	}
	
	//the color when moving over the *previous* button.
	function bx() {
		$(bb).css("cursor", "default");
		var a = parseInt(bc.prevBtnBgColor.substring(1, 3), 16);
		var b = parseInt(bc.prevBtnBgColor.substring(3, 5), 16);
		var c = parseInt(bc.prevBtnBgColor.substring(5, 7), 16);
		var d = parseInt(bc.prevBtnIcColor.substring(1, 3), 16);
		var e = parseInt(bc.prevBtnIcColor.substring(3, 5), 16);
		var f = parseInt(bc.prevBtnIcColor.substring(5, 7), 16);
		Tween.get(R, {
			override : true
		}).to({
			prevBtnBgRed : a,
			prevBtnBgGreen : b,
			prevBtnBgBlue : c,
			prevBtnIcRed : d,
			prevBtnIcGreen : e,
			prevBtnIcBlue : f
		}, 500, Ease.cubicOut)
	}
	function bw() {
		$(bb).css("cursor", "pointer");
		var a = parseInt(bc.prevBtnIcColor.substring(1, 3), 16);
		var b = parseInt(bc.prevBtnIcColor.substring(3, 5), 16);
		var c = parseInt(bc.prevBtnIcColor.substring(5, 7), 16);
		var d = parseInt(bc.prevBtnBgColor.substring(1, 3), 16);
		var e = parseInt(bc.prevBtnBgColor.substring(3, 5), 16);
		var f = parseInt(bc.prevBtnBgColor.substring(5, 7), 16);
		Tween.get(R, {
			override : true
		}).to({
			prevBtnBgRed : a,
			prevBtnBgGreen : b,
			prevBtnBgBlue : c,
			prevBtnIcRed : d,
			prevBtnIcGreen : e,
			prevBtnIcBlue : f
		}, 500, Ease.cubicOut)
	}
	function bv() {
		g = false;
		clearTimeout(x)
	}
	function bu() {
		if (g) {
			bN(j - 1);
			Tween.get(this).wait(1e3).call(bt);
			Tween.get(I, {
				override : true
			}).to({
				transPercent : 0
			}, 1e3, Ease.cubicOut)
		}
	}
	function bt() {
		clearTimeout(x);
		x = setTimeout(bu, bc.slideshowDelay);
		Tween.get(I, {
			override : true
		}).to({
			transPercent : 100
		}, bc.slideshowDelay)
	}
	function bs() {
		g = true;
		bt()
	}
	function br() {
		f = true;
		if (bc.showPrevBtn) {
			var a = new Bitmap(T);
			var b = new Bitmap(V);
			R.addChild(a);
			R.addChild(b);
			b.x = (T.width - V.width) / 2;
			b.y = (T.height - V.height) / 2;
			s.addChild(R);
			R.x = bc.prevButtonPosX;
			R.y = bc.prevButtonPosY;
			R.prevBtnBgRed = parseInt(bc.prevBtnBgColor.substring(1, 3), 16);
			R.prevBtnBgGreen = parseInt(bc.prevBtnBgColor.substring(3, 5), 16);
			R.prevBtnBgBlue = parseInt(bc.prevBtnBgColor.substring(5, 7), 16);
			R.prevBtnIcRed = parseInt(bc.prevBtnIcColor.substring(1, 3), 16);
			R.prevBtnIcGreen = parseInt(bc.prevBtnIcColor.substring(3, 5), 16);
			R.prevBtnIcBlue = parseInt(bc.prevBtnIcColor.substring(5, 7), 16);
			bo(a, R.prevBtnBgRed, R.prevBtnBgGreen, R.prevBtnBgBlue);
			bo(b, R.prevBtnIcRed, R.prevBtnIcGreen, R.prevBtnIcBlue);
			R.alpha = 0;
			Tween.get(R).to({
				alpha : 1
			}, 800, Ease.cubicOut).call(function() {
				R.onMouseOver = bw;
				R.onMouseOut = bx;
				R.onClick = function() {
					bN(j + 1)
				}
			})
		}
		if (bc.showNextBtn) {
			var c = new Bitmap(T);
			var d = new Bitmap(U);
			Q.addChild(c);
			Q.addChild(d);
			d.x = (T.width - U.width) / 2;
			d.y = (T.height - U.height) / 2;
			s.addChild(Q);
			Q.x = bc.nextButtonPosX;
			Q.y = bc.nextButtonPosY;
			Q.nextBtnBgRed = parseInt(bc.nextBtnBgColor.substring(1, 3), 16);
			Q.nextBtnBgGreen = parseInt(bc.nextBtnBgColor.substring(3, 5), 16);
			Q.nextBtnBgBlue = parseInt(bc.nextBtnBgColor.substring(5, 7), 16);
			Q.nextBtnIcRed = parseInt(bc.nextBtnIcColor.substring(1, 3), 16);
			Q.nextBtnIcGreen = parseInt(bc.nextBtnIcColor.substring(3, 5), 16);
			Q.nextBtnIcBlue = parseInt(bc.nextBtnIcColor.substring(5, 7), 16);
			bo(c, Q.nextBtnBgRed, Q.nextBtnBgGreen, Q.nextBtnBgBlue);
			bo(d, Q.nextBtnIcRed, Q.nextBtnIcGreen, Q.nextBtnIcBlue);
			Q.alpha = 0;
			Tween.get(Q).to({
				alpha : 1
			}, 800, Ease.cubicOut).call(function() {
				Q.onMouseOver = by;
				Q.onMouseOut = bz;
				Q.onClick = function() {
					bN(j - 1)
				}
			})
		}
		if (bc.showPlayBtn) {
			var e = new Bitmap(T);
			var h = new Bitmap(W);
			var i = new Bitmap(X);
			S.addChild(e);
			S.addChild(h);
			S.addChild(i);
			h.x = (T.width - W.width) / 2;
			h.y = (T.height - W.height) / 2;
			i.x = (T.width - X.width) / 2;
			i.y = (T.height - X.height) / 2;
			s.addChild(S);
			i.visible = false;
			S.x = bc.playButtonPosX;
			S.y = bc.playButtonPosY;
			S.playBtnBgRed = parseInt(bc.playBtnBgColor.substring(1, 3), 16);
			S.playBtnBgGreen = parseInt(bc.playBtnBgColor.substring(3, 5), 16);
			S.playBtnBgBlue = parseInt(bc.playBtnBgColor.substring(5, 7), 16);
			S.playBtnIcRed = parseInt(bc.playBtnIcColor.substring(1, 3), 16);
			S.playBtnIcGreen = parseInt(bc.playBtnIcColor.substring(3, 5), 16);
			S.playBtnIcBlue = parseInt(bc.playBtnIcColor.substring(5, 7), 16);
			bo(e, S.playBtnBgRed, S.playBtnBgGreen, S.playBtnBgBlue);
			bo(h, S.playBtnIcRed, S.playBtnIcGreen, S.playBtnIcBlue);
			bo(i, S.playBtnIcRed, S.playBtnIcGreen, S.playBtnIcBlue);
			S.alpha = 0;
			Tween.get(S).to({
				alpha : 1
			}, 800, Ease.cubicOut).call(function() {
				S.onMouseOver = bA;
				S.onMouseOut = bB;
				S.onClick = function() {
					if (g) {
						bv();
						S.getChildAt(1).visible = true;
						S.getChildAt(2).visible = false;
						Tween.get(w, {
							override : true
						}).to({
							alpha : 0
						}, 800, Ease.cubicOut)
					} else {
						Tween.get(w, {
							override : true
						}).to({
							alpha : 1
						}, 800, Ease.cubicOut);
						I.transPercent = 0;
						bs();
						S.getChildAt(1).visible = false;
						S.getChildAt(2).visible = true
					}
				}
			})
		}
		w = new TransitionPreloader(bc);
		s.addChild(w);
		w.fillPreloader(0);
		w.alpha = 0;
		if (bc.autoplay) {
			Tween.get(w, {
				override : true
			}).to({
				alpha : 1
			}, 500, Ease.cubicOut);
			I.transPercent = 0;
			bs();
			S.getChildAt(1).visible = false;
			S.getChildAt(2).visible = true
		}
		if (bc.showScrollbar) {
			v = new ScrollBar(bc, Y);
			s.addChild(v);
			v.trackRed = parseInt(bc.scrollbarTrackColor.substring(1, 3), 16);
			v.trackGreen = parseInt(bc.scrollbarTrackColor.substring(3, 5), 16);
			v.trackBlue = parseInt(bc.scrollbarTrackColor.substring(5, 7), 16);
			v.handlerRed = parseInt(bc.scrollbarHandlerColor.substring(1, 3),
					16);
			v.handlerGreen = parseInt(bc.scrollbarHandlerColor.substring(3, 5),
					16);
			v.handlerBlue = parseInt(bc.scrollbarHandlerColor.substring(5, 7),
					16);
			bp(v.trackRed, v.trackGreen, v.trackBlue, v.handlerRed,
					v.handlerGreen, v.handlerBlue);
			v.alpha = 0;
			Tween.get(v).to({
				alpha : 1
			}, 800, Ease.cubicOut).call(function() {
				v.handler.onMouseOver = bC;
				v.handler.onMouseOut = bD;
				v.handler.onPress = bE
			})
		}
	}
	function bq() {
		T.src = bc.buttonsBackgroundPath;
		T.onload = function() {
			U.src = bc.buttonsNextIconPath;
			U.onload = function() {
				V.src = bc.buttonsPrevIconPath;
				V.onload = function() {
					W.src = bc.buttonsPlayIconPath;
					W.onload = function() {
						X.src = bc.buttonsPauseIconPath;
						X.onload = function() {
							Y.src = bc.scrollbarLinesPath;
							Y.onload = br
						}
					}
				}
			}
		}
	}
	function bp(a, b, c, d, e, f) {
		var g = new ColorFilter(a / 255, b / 255, c / 255, 1);
		var h = new ColorFilter(d / 255, e / 255, f / 255, 1);
		v.track.filters = [ g ];
		v.handlerBar.filters = [ h ];
		v.lines.filters = [ g ];
		v.track.updateCache();
		v.handlerBar.updateCache();
		v.lines.updateCache()
	}
	function bo(a, b, c, d) {
		var e = new ColorFilter(b / 255, c / 255, d / 255, 1);
		a.filters = [ e ];
		a.cache(0, 0, a.image.width, a.image.height)
	}
	function bn(a, b) {
		var c = parseInt(b.substring(1, 3), 16);
		var d = parseInt(b.substring(3, 5), 16);
		var e = parseInt(b.substring(5, 7), 16);
		var f = new ColorFilter(c / 255, d / 255, e / 255, 1);
		a.filters = [ f ];
		a.cache(0, 0, a.image.width, a.image.height)
	}
	function bm() {
		u = new Bitmap(_);
		s.addChild(u);
		u.scaleX = bc.preloaderSize / _.width;
		u.scaleY = bc.preloaderSize / _.height;
		u.regX = _.width / 2;
		u.regY = _.height / 2;
		u.x = bc.canvasWidth / 2;
		u.y = bc.canvasHeight / 2;
		bn(u, bc.preloaderColor);
		Ticker.setFPS(40);
		Ticker.addListener(c)
	}
	function bl() {
		if(t)t.mouseEnabled = false;
		if(v)v.mouseEnabled = false;
		if(R)R.mouseEnabled = false;
		if(Q)Q.mouseEnabled = false;
		if(S)S.mouseEnabled = false;
		if (g) {
			clearTimeout(x);
			Tween.get(I, {
				override : true
			}).to({
				transPercent : 0
			}, 1e3, Ease.cubicOut)
		}
	}
	function bk() {
		if(t)t.mouseEnabled = true;
		if(v)v.mouseEnabled = true;
		if(R)R.mouseEnabled = true;
		if(Q)Q.mouseEnabled = true;
		if(S)S.mouseEnabled = true;
		if (g) {
			bt()
		}
	}
	function bj(a) {
		D = false;
		C = false;
		if (F)
			bi()
	}
	function bi() {
		var a = 0;
		var b = bO(q[0].angle) % 360;
		for ( var c = 1; c < r; c++) {
			ba = q[c];
			var d = bO(ba.angle) % 360;
			if (Math.abs(d - 90) < Math.abs(b - 90)) {
				b = d;
				a = c
			}
		}
		bN(a);
		F = false;
		bk()
	}
	function bh(a) {
		if (D) {
			D = false;
			C = false;
			F = true;
			if (Math.abs(H) < 5) {
				bi()
			} else {
				E = true
			}
		}
	}
	function bg(a) {
		L.x = a.stageX - (N.getMeasuredWidth() + 4) / 2;
		L.y = a.stageY - (N.getMeasuredLineHeight() + 4) / 2 - 16;
		if (L.id != j)
			Tween.get(L, {
				override : true
			}).to({
				alpha : 0
			}, 400, Ease.cubicOut);
		if (h) {
			var b = Math.min(Math.max(a.stageX - v.x - y, 0), v.width
					- v.handlerWidth);
			v.handler.x = b;
			var c = Math.floor(b / (v.width - v.handlerWidth) * r);
			if (c == r)
				c--;
			if (c != j)
				bN(c)
		} else if (C) {
			D = true;
			bl();
			s.onMouseUp = bh;
			B = A;
			A = a.stageX;
			G = z - A;
			for ( var d = 0; d < r; d++) {
				ba = q[d];
				ba.angle = ba.tempAngle + G / 4
			}
			H = B - A;
			if (H > 20)
				H = 20;
			if (H < -20)
				H = -20
		}
	}
	function bf(a) {
		A = a.stageX;
		z = A;
		C = true;
		E = false;
		G = 0;
		H = 0;
		for ( var b = 0; b < r; b++) {
			ba = q[b];
			Tween.removeTweens(ba);
			ba.tempAngle = ba.angle
		}
		s.onMouseUp = bj
	}
	function be() {
		bb.width = bc.canvasWidth;
		bb.height = bc.canvasHeight;
		$(bb).css("background-color", bc.backgroundColor);
		m = bc.thumbWidth;
		n = bc.thumbHeight;
		o = bc.reflHeight;
		p = bc.reflTransparency;
		q = bc.thumbsAr;
		r = bc.nrImages;
		s = new Stage(bb);
		s.enableMouseOver(40);
		Touch.enable(s);
		t = new Container;
		s.addChild(t);
        // canvas main size
		K.centerX = bc.centerX;
		K.centerY = bc.centerY;
		bc.centerX = bc.centerX;
		bc.centerY = bc.centerY;
		K.carouselAngle = bc.carouselAngle;
		_.src = bc.preloaderPath;
		_.onload = bm;
		L = new Container;
		M = new Shape;
		N = new Text("", bc.tooltipTextSize + "px " + bc.tooltipFont,
				bc.tooltipTextColor);
		L.addChild(M);
		L.addChild(N);
		s.addChild(L);
		L.alpha = 0;
		s.onMouseMove = bg
	}
	function bd() {
		be();
		bG()
	}
	var c = this;
	var d = false;
	var e = false;
	var f = false;
	var g = false;
	var h = false;
	var i = 250;
	var j = 0;
	var k = -1;
	var l = 0;
	var m;
	var n;
	var o;
	var p;
	var q;
	var r;
	var s;
	var t;
	var u;
	var v;
	var w;
	var x;
	var y;
	var z;
	var A;
	var B;
	var C = false;
	var D = false;
	var E = false;
	var F = false;
	var G = 0;
	var H = 0;
	var I = new Object;
	I.transPercent = 0;
	var J = new Object;
	J.redOffset = 0;
	J.greenOffset = 0;
	J.blueOffset = 0;
	var K = new Object;
	K.centerX = 0;
	K.centerY = 0;
	K.carouselAngle = 0;
	var L;
	var M;
	var N;
	var O;
	var P;
	var Q = new Container;
	var R = new Container;
	var S = new Container;
	var T = new Image;
	var U = new Image;
	var V = new Image;
	var W = new Image;
	var X = new Image;
	var Y = new Image;
	var Z = new Image;
	var _ = new Image;
	var ba;
	var bb = $("#" + a)[0];
	if (!bb) {
		alert("Invalid canvas id: " + a)
	}
	var bc = new Data(b);
	$(bc).bind("loaded", bd);
	this.tick = function() {
		bQ();
		bR();
		bS();
		bT();
		s.update()
	};
	this.setRadiusX = function(a) {
		bc.radiusX = a
	};
	this.setRadiusY = function(a) {
		bc.radiusY = a
	};
	this.setRadiusZ = function(a) {
		bc.radiusZ = a;
		bP()
	};
	this.setCenterX = function(a) {
		K.centerX = parseInt(bc.centerX) + parseInt(a)
	};
	this.setCenterY = function(a) {
		K.centerY = parseInt(bc.centerY) + parseInt(a)
	};
	this.setAngle = function(a) {
		K.carouselAngle = a
	};
	this.setBorderColor = function(a) {
		for ( var b = 0; b < r; b++) {
			ba = q[b];
			ba.setBorderColor(a);
			ba.imgContainer.updateCache()
		}
	};
	this.setShowRefl = function(a) {
		for ( var b = 0; b < r; b++) {
			ba = q[b];
			if (a) {
				ba.reflection.visible = true;
				ba.imgContainer.updateCache()
			} else {
				ba.reflection.visible = false;
				ba.imgContainer.updateCache()
			}
		}
	};
	this.setButtonsBgColor = function(a) {
		bc.prevBtnBgColor = a;
		bc.nextBtnBgColor = a;
		bc.playBtnBgColor = a;
		R.prevBtnBgRed = parseInt(bc.prevBtnBgColor.substring(1, 3), 16);
		R.prevBtnBgGreen = parseInt(bc.prevBtnBgColor.substring(3, 5), 16);
		R.prevBtnBgBlue = parseInt(bc.prevBtnBgColor.substring(5, 7), 16);
		Q.nextBtnBgRed = parseInt(bc.nextBtnBgColor.substring(1, 3), 16);
		Q.nextBtnBgGreen = parseInt(bc.nextBtnBgColor.substring(3, 5), 16);
		Q.nextBtnBgBlue = parseInt(bc.nextBtnBgColor.substring(5, 7), 16);
		S.playBtnBgRed = parseInt(bc.playBtnBgColor.substring(1, 3), 16);
		S.playBtnBgGreen = parseInt(bc.playBtnBgColor.substring(3, 5), 16);
		S.playBtnBgBlue = parseInt(bc.playBtnBgColor.substring(5, 7), 16)
	};
	this.setButtonsIcColor = function(a) {
		bc.prevBtnIcColor = a;
		bc.nextBtnIcColor = a;
		bc.playBtnIcColor = a;
		R.prevBtnIcRed = parseInt(bc.prevBtnIcColor.substring(1, 3), 16);
		R.prevBtnIcGreen = parseInt(bc.prevBtnIcColor.substring(3, 5), 16);
		R.prevBtnIcBlue = parseInt(bc.prevBtnIcColor.substring(5, 7), 16);
		Q.nextBtnIcRed = parseInt(bc.nextBtnIcColor.substring(1, 3), 16);
		Q.nextBtnIcGreen = parseInt(bc.nextBtnIcColor.substring(3, 5), 16);
		Q.nextBtnIcBlue = parseInt(bc.nextBtnIcColor.substring(5, 7), 16);
		S.playBtnIcRed = parseInt(bc.playBtnIcColor.substring(1, 3), 16);
		S.playBtnIcGreen = parseInt(bc.playBtnIcColor.substring(3, 5), 16);
		S.playBtnIcBlue = parseInt(bc.playBtnIcColor.substring(5, 7), 16)
	};
	this.setScrollbarTrackColor = function(a) {
		bc.scrollbarTrackColor = a;
		v.trackRed = parseInt(bc.scrollbarTrackColor.substring(1, 3), 16);
		v.trackGreen = parseInt(bc.scrollbarTrackColor.substring(3, 5), 16);
		v.trackBlue = parseInt(bc.scrollbarTrackColor.substring(5, 7), 16)
	};
	this.setScrollbarHandlerColor = function(a) {
		bc.scrollbarHandlerColor = a;
		v.handlerRed = parseInt(bc.scrollbarHandlerColor.substring(1, 3), 16);
		v.handlerGreen = parseInt(bc.scrollbarHandlerColor.substring(3, 5), 16);
		v.handlerBlue = parseInt(bc.scrollbarHandlerColor.substring(5, 7), 16)
	};
	this.setReflDistance = function(a) {
		bc.reflDistance = a;
		for ( var b = 0; b < r; b++) {
			ba = q[b];
			ba.reflection.y = ba.imgH + bc.borderSize * 2 + bc.reflDistance;
			ba.imgContainer.cache(0, 0, ba.imageWidth + bc.borderSize * 2,
					ba.imageHeight + bc.borderSize * 2 + bc.reflHeight
							+ bc.reflDistance)
		}
	};
	this.setShowScrollbar = function(a) {
		if (a) {
			v.visible = true
		} else {
			v.visible = false
		}
	};
	this.setPreloaderBgColor = function(a) {
		w.bgColor = a
	};
	this.setPreloaderIcColor = function(a) {
		w.fillColor = a
	};
	this.setPreset = function(a) {
		switch (a) {
		case 1:
			bU(300, 100, 150, 0, -80, 0, 0, true, true);
			break;
		case 2:
			bU(190, 0, 190, 10, -10, 90, 1, false, true);
			break;
		case 3:
			bU(286, -26, 322, 10, -25, 40, 15, true, true);
			break;
		case 4:
			bU(225, 26, 100, 10, -25, 165, 1, true, true);
			break;
		case 5:
			bU(320, -30, 260, 5, -15, 30, 1, true, true);
			break;
		case 6:
			bU(300, 0, 150, 0, -50, 0, 1, true, true);
			break;
		}
	};
    this.gotoItem = function(i){
        bN(i);
    }
}
TransitionPreloader.prototype = new Shape;
TransitionPreloader.prototype.constructor = TransitionPreloader;
ScrollBar.prototype = new Container;
ScrollBar.prototype.constructor = ScrollBar;
        this.carousel = new DemoCanvasCarousel(a, b);
        return this.carousel;

    }
});

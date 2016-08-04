/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

// jQuery Mask Plugin v1.13.3
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,d,e){a=b(a);var g=this,k=a.val(),l;d="function"===typeof d?d(a.val(),void 0,a,e):d;var c={invalid:[],getCaret:function(){try{var q,v=0,b=a.get(0),f=document.selection,c=b.selectionStart;if(f&&-1===navigator.appVersion.indexOf("MSIE 10"))q=f.createRange(),q.moveStart("character",a.is("input")?-a.val().length:-a.text().length),
v=q.text.length;else if(c||"0"===c)v=c;return v}catch(d){}},setCaret:function(q){try{if(a.is(":focus")){var b,c=a.get(0);c.setSelectionRange?c.setSelectionRange(q,q):c.createTextRange&&(b=c.createTextRange(),b.collapse(!0),b.moveEnd("character",q),b.moveStart("character",q),b.select())}}catch(f){}},events:function(){a.on("input.mask keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",
function(){k===a.val()||a.data("changed")||a.triggerHandler("change");a.data("changed",!1)}).on("blur.mask",function(){k=a.val()}).on("focus.mask",function(a){!0===e.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!l.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,e,h=0;h<d.length;h++)(b=g.translation[d.charAt(h)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,(b=b.recursive)?(a.push(d.charAt(h)),e={digit:d.charAt(h),
pattern:c}):a.push(f||b?c+"?":c)):a.push(d.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");e&&(a=a.replace(RegExp("("+e.digit+"(.*"+e.digit+")?)"),"($1)?").replace(RegExp(e.digit,"g"),e.pattern));return RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(b){var c=a.is("input")?"val":"text";if(0<arguments.length){if(a[c]()!==b)a[c](b);c=a}else c=a[c]();return c},getMCharsBeforeCount:function(a,b){for(var c=
0,f=0,e=d.length;f<e&&f<a;f++)g.translation[d.charAt(f)]||(a=b?a+1:a,c++);return c},caretPos:function(a,b,e,f){return g.translation[d.charAt(Math.min(a-1,d.length-1))]?Math.min(a+e-b-f,e):c.caretPos(a+1,b,e,f)},behaviour:function(a){a=a||window.event;c.invalid=[];var e=a.keyCode||a.which;if(-1===b.inArray(e,g.byPassKeys)){var d=c.getCaret(),f=c.val().length,n=d<f,h=c.getMasked(),k=h.length,m=c.getMCharsBeforeCount(k-1)-c.getMCharsBeforeCount(f-1);c.val(h);!n||65===e&&a.ctrlKey||(8!==e&&46!==e&&(d=
c.caretPos(d,f,k,m)),c.setCaret(d));return c.callbacks(a)}},getMasked:function(a){var b=[],k=c.val(),f=0,n=d.length,h=0,l=k.length,m=1,p="push",t=-1,s,w;e.reverse?(p="unshift",m=-1,s=0,f=n-1,h=l-1,w=function(){return-1<f&&-1<h}):(s=n-1,w=function(){return f<n&&h<l});for(;w();){var x=d.charAt(f),u=k.charAt(h),r=g.translation[x];if(r)u.match(r.pattern)?(b[p](u),r.recursive&&(-1===t?t=f:f===s&&(f=t-m),s===t&&(f-=m)),f+=m):r.optional?(f+=m,h-=m):r.fallback?(b[p](r.fallback),f+=m,h-=m):c.invalid.push({p:h,
v:u,e:r.pattern}),h+=m;else{if(!a)b[p](x);u===x&&(h+=m);f+=m}}a=d.charAt(s);n!==l+1||g.translation[a]||b.push(a);return b.join("")},callbacks:function(b){var g=c.val(),l=g!==k,f=[g,b,a,e],n=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};n("onChange",!0===l,f);n("onKeyPress",!0===l,f);n("onComplete",g.length===d.length,f);n("onInvalid",0<c.invalid.length,[g,b,a,c.invalid,e])}};g.mask=d;g.options=e;g.remove=function(){var b=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b-
c.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return c.getMasked(!0)};g.init=function(d){d=d||!1;e=e||{};g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.jMaskGlobals.translation;g.translation=b.extend({},g.translation,e.translation);g=b.extend(!0,{},g,e);l=c.getRegexMask();!1===d?(e.placeholder&&a.attr("placeholder",e.placeholder),!1==="oninput"in b("input")[0]&&"on"===a.attr("autocomplete")&&a.attr("autocomplete","off"),c.destroyEvents(),c.events(),d=c.getCaret(),c.val(c.getMasked()),
c.setCaret(d+c.getMCharsBeforeCount(d,!0))):(c.events(),c.val(c.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),d={},e=a.attr("data-mask");a.attr("data-mask-reverse")&&(d.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(z(a,e,d))return a.data("mask",new y(this,e,d))},z=function(a,d,e){e=e||{};var g=b(a).data("mask"),k=JSON.stringify;a=b(a).val()||b(a).text();try{return"function"===
typeof d&&(d=d(a)),"object"!==typeof g||k(g.options)!==k(e)||g.mask!==d}catch(l){}};b.fn.mask=function(a,d){d=d||{};var e=this.selector,g=b.jMaskGlobals,k=b.jMaskGlobals.watchInterval,l=function(){if(z(this,a,d))return b(this).data("mask",new y(this,a,d))};b(this).each(l);e&&""!==e&&g.watchInputs&&(clearInterval(b.maskWatchers[e]),b.maskWatchers[e]=setInterval(function(){b(document).find(e).each(l)},k));return this};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];
return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,
optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

/**  
 * jsPDF - PDF Document creation from JavaScript
 * Version 1.2.61-git Built on 2016-03-01T16:15
 *                           CommitID 04343b54b0
 *
 * Copyright (c) 2010-2014 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, willow-systems.com
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */
/**
 * jsPDF AcroForm Plugin
 * Copyright (c) 2016 Alexander Weidt, https://github.com/BiggA94
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**
 * jsPDF addHTML PlugIn
 * Copyright (c) 2014 Diego Casorran
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**  
 * jsPDF addImage plugin
 * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
 *               2013 Chris Dowling, https://github.com/gingerchris
 *               2013 Trinh Ho, https://github.com/ineedfat
 *               2013 Edwin Alejandro Perez, https://github.com/eaparango
 *               2013 Norah Smith, https://github.com/burnburnrocket
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 James Robb, https://github.com/jamesbrobb
 *
 */
/**
 * jsPDF Annotations PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**
 * jsPDF Autoprint Plugin
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**
 * jsPDF Canvas PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/** ====================================================================
 * jsPDF Cell plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Hall, james@parall.ax
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * ====================================================================
 */
/**
 * jsPDF Context2D PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**  
 * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Daniel Husar, https://github.com/danielhusar
 *               2014 Wolfgang Gassler, https://github.com/woolfg
 *               2014 Steven Spungin, https://github.com/flamenco
 *
 * ====================================================================
 */
/** ==================================================================== 
 * jsPDF JavaScript plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 * 
 * ====================================================================
 */
/**
 * jsPDF Outline PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/** 
 *  ====================================================================
 * jsPDF PNG PlugIn
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * ====================================================================
 */
/**
 * jsPDF Autoprint Plugin
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**  
 * jsPDF split_text_to_size plugin - MIT license.
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Diego Casorran, https://github.com/diegocr
 */
/**   
jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/
/**  
jsPDF SVG plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
*/
/** ==================================================================== 
 * jsPDF total_pages plugin
 * Copyright (c) 2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 * 
 * ====================================================================
 */
/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.1.20151003
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */
/*
 * Copyright (c) 2012 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/**
 * CssColors
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/*
 Deflate.js - https://github.com/gildas-lormeau/zip.js
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.
 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.
 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/*
  html2canvas 0.5.0-alpha <http://html2canvas.hertzen.com>
  Copyright (c) 2014 Niklas von Hertzen
  Released under MIT License
*/
/*
 Copyright (c) 2013 Yehuda Katz, Tom Dale, and contributors
 */
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
/**
 * html2pdf.js
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/*
# PNG.js
# Copyright (c) 2011 Devon Govett
# MIT LICENSE
# 
*/
/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 */
/**
 * JavaScript Polyfill functions for jsPDF
 * Collected from public resources by
 * https://github.com/diegocr
 */
/**
 * config.js
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 * Copyright (c) 2015 James Hall (Parallax Agency Ltd) james@parall.ax
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
!function(exports,global){function renderDocument(t,e,n,r){return createWindowClone(t,t,n,r,e).then(function(i){log("Document cloned");var o="["+html2canvasNodeAttribute+"='true']";t.querySelector(o).removeAttribute(html2canvasNodeAttribute);var s=i.contentWindow,a=s.document.querySelector(o),c="function"==typeof e.onclone?Promise.resolve(e.onclone(s.document)):Promise.resolve(!0);return c.then(function(){return renderWindow(a,i,e,n,r)})})}function renderWindow(t,e,n,r,i){var o=e.contentWindow,s=new Support(o.document),a=new ImageLoader(n,s),c=getBounds(t),u="view"===n.type?r:documentWidth(o.document),l="view"===n.type?i:documentHeight(o.document),h=new CanvasRenderer(u,l,a,n,document),d=new NodeParser(t,h,s,a,n);return d.ready.then(function(){log("Finished rendering");var r;return r="view"===n.type?crop(h.canvas,{width:h.canvas.width,height:h.canvas.height,top:0,left:0,x:0,y:0}):t===o.document.body||t===o.document.documentElement||null!=n.canvas?h.canvas:crop(h.canvas,{width:null!=n.width?n.width:c.width,height:null!=n.height?n.height:c.height,top:c.top,left:c.left,x:o.pageXOffset,y:o.pageYOffset}),cleanupContainer(e,n),r})}function cleanupContainer(t,e){e.removeContainer&&(t.parentNode.removeChild(t),log("Cleaned up container"))}function crop(t,e){var n=document.createElement("canvas"),r=Math.min(t.width-1,Math.max(0,e.left)),i=Math.min(t.width,Math.max(1,e.left+e.width)),o=Math.min(t.height-1,Math.max(0,e.top)),s=Math.min(t.height,Math.max(1,e.top+e.height));return n.width=e.width,n.height=e.height,log("Cropping canvas at:","left:",e.left,"top:",e.top,"width:",i-r,"height:",s-o),log("Resulting crop with width",e.width,"and height",e.height," with x",r,"and y",o),n.getContext("2d").drawImage(t,r,o,i-r,s-o,e.x,e.y,i-r,s-o),n}function documentWidth(t){return Math.max(Math.max(t.body.scrollWidth,t.documentElement.scrollWidth),Math.max(t.body.offsetWidth,t.documentElement.offsetWidth),Math.max(t.body.clientWidth,t.documentElement.clientWidth))}function documentHeight(t){return Math.max(Math.max(t.body.scrollHeight,t.documentElement.scrollHeight),Math.max(t.body.offsetHeight,t.documentElement.offsetHeight),Math.max(t.body.clientHeight,t.documentElement.clientHeight))}function smallImage(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}function createWindowClone(t,e,n,r,i){labelCanvasElements(t);var o=t.documentElement.cloneNode(!0),s=e.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=n,s.height=r,s.scrolling="no",e.body.appendChild(s),new Promise(function(e){var n=s.contentWindow.document;s.contentWindow.onload=s.onload=function(){var o=setInterval(function(){n.body.childNodes.length>0&&(cloneCanvasContents(t,n),clearInterval(o),"view"===i.type&&s.contentWindow.scrollTo(r,a),e(s))},50)};var r=t.defaultView.pageXOffset,a=t.defaultView.pageYOffset;n.open(),n.write("<!DOCTYPE html><html></html>"),restoreOwnerScroll(t,r,a),n.replaceChild(i.javascriptEnabled===!0?n.adoptNode(o):removeScriptNodes(n.adoptNode(o)),n.documentElement),n.close()})}function restoreOwnerScroll(t,e,n){e===t.defaultView.pageXOffset&&n===t.defaultView.pageYOffset||t.defaultView.scrollTo(e,n)}function loadUrlDocument(t,e,n,r,i,o){return new Proxy(t,e,window.document).then(documentFromHTML(t)).then(function(t){return createWindowClone(t,n,r,i,o)})}function documentFromHTML(t){return function(e){var n,r=new DOMParser;try{n=r.parseFromString(e,"text/html")}catch(i){log("DOMParser not supported, falling back to createHTMLDocument"),n=document.implementation.createHTMLDocument("");try{n.open(),n.write(e),n.close()}catch(o){log("createHTMLDocument write not supported, falling back to document.body.innerHTML"),n.body.innerHTML=e}}var s=n.querySelector("base");if(!s||!s.href.host){var a=n.createElement("base");a.href=t,n.head.insertBefore(a,n.head.firstChild)}return n}}function labelCanvasElements(t){[].slice.call(t.querySelectorAll("canvas"),0).forEach(function(t){t.setAttribute(html2canvasCanvasCloneAttribute,"canvas-"+html2canvasCanvasCloneIndex++)})}function cloneCanvasContents(t,e){[].slice.call(t.querySelectorAll("["+html2canvasCanvasCloneAttribute+"]"),0).forEach(function(t){try{var n=e.querySelector("["+html2canvasCanvasCloneAttribute+'="'+t.getAttribute(html2canvasCanvasCloneAttribute)+'"]');n&&(n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t.getContext("2d").getImageData(0,0,t.width,t.height),0,0))}catch(r){log("Unable to copy canvas content from",t,r)}t.removeAttribute(html2canvasCanvasCloneAttribute)})}function removeScriptNodes(t){return[].slice.call(t.childNodes,0).filter(isElementNode).forEach(function(e){"SCRIPT"===e.tagName?t.removeChild(e):removeScriptNodes(e)}),t}function isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}function absoluteUrl(t){var e=document.createElement("a");return e.href=t,e.href=e.href,e}function DummyImageContainer(t){if(this.src=t,log("DummyImageContainer for",t),!this.promise||!this.image){log("Initiating DummyImageContainer"),DummyImageContainer.prototype.image=new Image;var e=this.image;DummyImageContainer.prototype.promise=new Promise(function(t,n){e.onload=t,e.onerror=n,e.src=smallImage(),e.complete===!0&&t(e)})}}function Font(t,e){var n,r,i=document.createElement("div"),o=document.createElement("img"),s=document.createElement("span"),a="Hidden Text";i.style.visibility="hidden",i.style.fontFamily=t,i.style.fontSize=e,i.style.margin=0,i.style.padding=0,document.body.appendChild(i),o.src=smallImage(),o.width=1,o.height=1,o.style.margin=0,o.style.padding=0,o.style.verticalAlign="baseline",s.style.fontFamily=t,s.style.fontSize=e,s.style.margin=0,s.style.padding=0,s.appendChild(document.createTextNode(a)),i.appendChild(s),i.appendChild(o),n=o.offsetTop-s.offsetTop+1,i.removeChild(s),i.appendChild(document.createTextNode(a)),i.style.lineHeight="normal",o.style.verticalAlign="super",r=o.offsetTop-i.offsetTop+1,document.body.removeChild(i),this.baseline=n,this.lineWidth=1,this.middle=r}function FontMetrics(){this.data={}}function FrameContainer(t,e,n){this.image=null,this.src=t;var r=this,i=getBounds(t);this.promise=(e?new Promise(function(e){"about:blank"===t.contentWindow.document.URL||null==t.contentWindow.document.documentElement?t.contentWindow.onload=t.onload=function(){e(t)}:e(t)}):this.proxyLoad(n.proxy,i,n)).then(function(t){return html2canvas(t.contentWindow.document.documentElement,{type:"view",width:t.width,height:t.height,proxy:n.proxy,javascriptEnabled:n.javascriptEnabled,removeContainer:n.removeContainer,allowTaint:n.allowTaint,imageTimeout:n.imageTimeout/2})}).then(function(t){return r.image=t})}function GradientContainer(t){this.src=t.value,this.colorStops=[],this.type=null,this.x0=.5,this.y0=.5,this.x1=.5,this.y1=.5,this.promise=Promise.resolve(!0)}function ImageContainer(t,e){this.src=t,this.image=new Image;var n=this;this.tainted=null,this.promise=new Promise(function(r,i){n.image.onload=r,n.image.onerror=i,e&&(n.image.crossOrigin="anonymous"),n.image.src=t,n.image.complete===!0&&r(n.image)})}function ImageLoader(t,e){this.link=null,this.options=t,this.support=e,this.origin=this.getOrigin(window.location.href)}function LinearGradientContainer(t){GradientContainer.apply(this,arguments),this.type=this.TYPES.LINEAR;var e=null===t.args[0].match(this.stepRegExp);e?t.args[0].split(" ").reverse().forEach(function(t){switch(t){case"left":this.x0=0,this.x1=1;break;case"top":this.y0=0,this.y1=1;break;case"right":this.x0=1,this.x1=0;break;case"bottom":this.y0=1,this.y1=0;break;case"to":var e=this.y0,n=this.x0;this.y0=this.y1,this.x0=this.x1,this.x1=n,this.y1=e}},this):(this.y0=0,this.y1=1),this.colorStops=t.args.slice(e?1:0).map(function(t){var e=t.match(this.stepRegExp);return{color:e[1],stop:"%"===e[3]?e[2]/100:null}},this),null===this.colorStops[0].stop&&(this.colorStops[0].stop=0),null===this.colorStops[this.colorStops.length-1].stop&&(this.colorStops[this.colorStops.length-1].stop=1),this.colorStops.forEach(function(t,e){null===t.stop&&this.colorStops.slice(e).some(function(n,r){return null!==n.stop?(t.stop=(n.stop-this.colorStops[e-1].stop)/(r+1)+this.colorStops[e-1].stop,!0):!1},this)},this)}function log(){window.html2canvas.logging&&window.console&&window.console.log&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,[Date.now()-window.html2canvas.start+"ms","html2canvas:"].concat([].slice.call(arguments,0)))}function NodeContainer(t,e){this.node=t,this.parent=e,this.stack=null,this.bounds=null,this.borders=null,this.clip=[],this.backgroundClip=[],this.offsetBounds=null,this.visible=null,this.computedStyles=null,this.styles={},this.backgroundImages=null,this.transformData=null,this.transformMatrix=null,this.isPseudoElement=!1,this.opacity=null}function selectionValue(t){var e=t.options[t.selectedIndex||0];return e?e.text||"":""}function parseMatrix(t){return t&&"matrix"===t[1]?t[2].split(",").map(function(t){return parseFloat(t.trim())}):void 0}function isPercentage(t){return-1!==t.toString().indexOf("%")}function parseBackgrounds(t){var e,n,r,i,o,s,a,c=" \r\n	",u=[],l=0,h=0,d=function(){e&&('"'===n.substr(0,1)&&(n=n.substr(1,n.length-2)),n&&a.push(n),"-"===e.substr(0,1)&&(i=e.indexOf("-",1)+1)>0&&(r=e.substr(0,i),e=e.substr(i)),u.push({prefix:r,method:e.toLowerCase(),value:o,args:a,image:null})),a=[],e=r=n=o=""};return a=[],e=r=n=o="",t.split("").forEach(function(t){if(!(0===l&&c.indexOf(t)>-1)){switch(t){case'"':s?s===t&&(s=null):s=t;break;case"(":if(s)break;if(0===l)return l=1,void(o+=t);h++;break;case")":if(s)break;if(1===l){if(0===h)return l=0,o+=t,void d();h--}break;case",":if(s)break;if(0===l)return void d();if(1===l&&0===h&&!e.match(/^url$/i))return a.push(n),n="",void(o+=t)}o+=t,0===l?e+=t:n+=t}}),d(),u}function removePx(t){return t.replace("px","")}function asFloat(t){return parseFloat(t)}function getBounds(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect(),n=null==t.offsetWidth?e.width:t.offsetWidth;return{top:e.top,bottom:e.bottom||e.top+e.height,right:e.left+n,left:e.left,width:n,height:null==t.offsetHeight?e.height:t.offsetHeight}}return{}}function offsetBounds(t){var e=t.offsetParent?offsetBounds(t.offsetParent):{top:0,left:0};return{top:t.offsetTop+e.top,bottom:t.offsetTop+t.offsetHeight+e.top,right:t.offsetLeft+e.left+t.offsetWidth,left:t.offsetLeft+e.left,width:t.offsetWidth,height:t.offsetHeight}}function NodeParser(t,e,n,r,i){log("Starting NodeParser"),this.renderer=e,this.options=i,this.range=null,this.support=n,this.renderQueue=[],this.stack=new StackingContext(!0,1,t.ownerDocument,null);var o=new NodeContainer(t,null);if(t===t.ownerDocument.documentElement){var s=new NodeContainer(this.renderer.isTransparent(o.css("backgroundColor"))?t.ownerDocument.body:t.ownerDocument.documentElement,null);e.rectangle(0,0,e.width,e.height,s.css("backgroundColor"))}o.visibile=o.isElementVisible(),this.createPseudoHideStyles(t.ownerDocument),this.disableAnimations(t.ownerDocument),this.nodes=flatten([o].concat(this.getChildren(o)).filter(function(t){return t.visible=t.isElementVisible()}).map(this.getPseudoElements,this)),this.fontMetrics=new FontMetrics,log("Fetched nodes, total:",this.nodes.length),log("Calculate overflow clips"),this.calculateOverflowClips(),log("Start fetching images"),this.images=r.fetch(this.nodes.filter(isElement)),this.ready=this.images.ready.then(bind(function(){return log("Images loaded, starting parsing"),log("Creating stacking contexts"),this.createStackingContexts(),log("Sorting stacking contexts"),this.sortStackingContexts(this.stack),this.parse(this.stack),log("Render queue created with "+this.renderQueue.length+" items"),new Promise(bind(function(t){i.async?"function"==typeof i.async?i.async.call(this,this.renderQueue,t):this.renderQueue.length>0?(this.renderIndex=0,this.asyncRenderer(this.renderQueue,t)):t():(this.renderQueue.forEach(this.paint,this),t())},this))},this))}function hasParentClip(t){return t.parent&&t.parent.clip.length}function toCamelCase(t){return t.replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})}function ClearTransform(){}function calculateBorders(t,e,n,r){return t.map(function(i,o){if(i.width>0){var s=e.left,a=e.top,c=e.width,u=e.height-t[2].width;switch(o){case 0:u=t[0].width,i.args=drawSide({c1:[s,a],c2:[s+c,a],c3:[s+c-t[1].width,a+u],c4:[s+t[3].width,a+u]},r[0],r[1],n.topLeftOuter,n.topLeftInner,n.topRightOuter,n.topRightInner);break;case 1:s=e.left+e.width-t[1].width,c=t[1].width,i.args=drawSide({c1:[s+c,a],c2:[s+c,a+u+t[2].width],c3:[s,a+u],c4:[s,a+t[0].width]},r[1],r[2],n.topRightOuter,n.topRightInner,n.bottomRightOuter,n.bottomRightInner);break;case 2:a=a+e.height-t[2].width,u=t[2].width,i.args=drawSide({c1:[s+c,a+u],c2:[s,a+u],c3:[s+t[3].width,a],c4:[s+c-t[3].width,a]},r[2],r[3],n.bottomRightOuter,n.bottomRightInner,n.bottomLeftOuter,n.bottomLeftInner);break;case 3:c=t[3].width,i.args=drawSide({c1:[s,a+u+t[2].width],c2:[s,a],c3:[s+c,a+t[0].width],c4:[s+c,a+u]},r[3],r[0],n.bottomLeftOuter,n.bottomLeftInner,n.topLeftOuter,n.topLeftInner)}}return i})}function getCurvePoints(t,e,n,r){var i=4*((Math.sqrt(2)-1)/3),o=n*i,s=r*i,a=t+n,c=e+r;return{topLeft:bezierCurve({x:t,y:c},{x:t,y:c-s},{x:a-o,y:e},{x:a,y:e}),topRight:bezierCurve({x:t,y:e},{x:t+o,y:e},{x:a,y:c-s},{x:a,y:c}),bottomRight:bezierCurve({x:a,y:e},{x:a,y:e+s},{x:t+o,y:c},{x:t,y:c}),bottomLeft:bezierCurve({x:a,y:c},{x:a-o,y:c},{x:t,y:e+s},{x:t,y:e})}}function calculateCurvePoints(t,e,n){var r=t.left,i=t.top,o=t.width,s=t.height,a=e[0][0],c=e[0][1],u=e[1][0],l=e[1][1],h=e[2][0],d=e[2][1],f=e[3][0],p=e[3][1],m=o-u,g=s-d,w=o-h,y=s-p;return{topLeftOuter:getCurvePoints(r,i,a,c).topLeft.subdivide(.5),topLeftInner:getCurvePoints(r+n[3].width,i+n[0].width,Math.max(0,a-n[3].width),Math.max(0,c-n[0].width)).topLeft.subdivide(.5),topRightOuter:getCurvePoints(r+m,i,u,l).topRight.subdivide(.5),topRightInner:getCurvePoints(r+Math.min(m,o+n[3].width),i+n[0].width,m>o+n[3].width?0:u-n[3].width,l-n[0].width).topRight.subdivide(.5),bottomRightOuter:getCurvePoints(r+w,i+g,h,d).bottomRight.subdivide(.5),bottomRightInner:getCurvePoints(r+Math.min(w,o-n[3].width),i+Math.min(g,s+n[0].width),Math.max(0,h-n[1].width),d-n[2].width).bottomRight.subdivide(.5),bottomLeftOuter:getCurvePoints(r,i+y,f,p).bottomLeft.subdivide(.5),bottomLeftInner:getCurvePoints(r+n[3].width,i+y,Math.max(0,f-n[3].width),p-n[2].width).bottomLeft.subdivide(.5)}}function bezierCurve(t,e,n,r){var i=function(t,e,n){return{x:t.x+(e.x-t.x)*n,y:t.y+(e.y-t.y)*n}};return{start:t,startControl:e,endControl:n,end:r,subdivide:function(o){var s=i(t,e,o),a=i(e,n,o),c=i(n,r,o),u=i(s,a,o),l=i(a,c,o),h=i(u,l,o);return[bezierCurve(t,s,u,h),bezierCurve(h,l,c,r)]},curveTo:function(t){t.push(["bezierCurve",e.x,e.y,n.x,n.y,r.x,r.y])},curveToReversed:function(r){r.push(["bezierCurve",n.x,n.y,e.x,e.y,t.x,t.y])}}}function drawSide(t,e,n,r,i,o,s){var a=[];return e[0]>0||e[1]>0?(a.push(["line",r[1].start.x,r[1].start.y]),r[1].curveTo(a)):a.push(["line",t.c1[0],t.c1[1]]),n[0]>0||n[1]>0?(a.push(["line",o[0].start.x,o[0].start.y]),o[0].curveTo(a),a.push(["line",s[0].end.x,s[0].end.y]),s[0].curveToReversed(a)):(a.push(["line",t.c2[0],t.c2[1]]),a.push(["line",t.c3[0],t.c3[1]])),e[0]>0||e[1]>0?(a.push(["line",i[1].end.x,i[1].end.y]),i[1].curveToReversed(a)):a.push(["line",t.c4[0],t.c4[1]]),a}function parseCorner(t,e,n,r,i,o,s){e[0]>0||e[1]>0?(t.push(["line",r[0].start.x,r[0].start.y]),r[0].curveTo(t),r[1].curveTo(t)):t.push(["line",o,s]),(n[0]>0||n[1]>0)&&t.push(["line",i[0].start.x,i[0].start.y])}function negativeZIndex(t){return t.cssInt("zIndex")<0}function positiveZIndex(t){return t.cssInt("zIndex")>0}function zIndex0(t){return 0===t.cssInt("zIndex")}function inlineLevel(t){return-1!==["inline","inline-block","inline-table"].indexOf(t.css("display"))}function isStackingContext(t){return t instanceof StackingContext}function hasText(t){return t.node.data.trim().length>0}function noLetterSpacing(t){return/^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))}function getBorderRadiusData(t){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(e){var n=t.css("border"+e+"Radius"),r=n.split(" ");return r.length<=1&&(r[1]=r[0]),r.map(asInt)})}function renderableNode(t){return t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE}function isPositionedForStacking(t){var e=t.css("position"),n=-1!==["absolute","relative","fixed"].indexOf(e)?t.css("zIndex"):"auto";return"auto"!==n}function isPositioned(t){return"static"!==t.css("position")}function isFloating(t){return"none"!==t.css("float")}function isInlineBlock(t){return-1!==["inline-block","inline-table"].indexOf(t.css("display"))}function not(t){var e=this;return function(){return!t.apply(e,arguments)}}function isElement(t){return t.node.nodeType===Node.ELEMENT_NODE}function isPseudoElement(t){return t.isPseudoElement===!0}function isTextNode(t){return t.node.nodeType===Node.TEXT_NODE}function zIndexSort(t){return function(e,n){return e.cssInt("zIndex")+t.indexOf(e)/t.length-(n.cssInt("zIndex")+t.indexOf(n)/t.length)}}function hasOpacity(t){return t.getOpacity()<1}function bind(t,e){return function(){return t.apply(e,arguments)}}function asInt(t){return parseInt(t,10)}function getWidth(t){return t.width}function nonIgnoredElement(t){return t.node.nodeType!==Node.ELEMENT_NODE||-1===["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"].indexOf(t.node.nodeName)}function flatten(t){return[].concat.apply([],t)}function stripQuotes(t){var e=t.substr(0,1);return e===t.substr(t.length-1)&&e.match(/'|"/)?t.substr(1,t.length-2):t}function getWords(t){for(var e,n=[],r=0,i=!1;t.length;)isWordBoundary(t[r])===i?(e=t.splice(0,r),e.length&&n.push(window.html2canvas.punycode.ucs2.encode(e)),i=!i,r=0):r++,r>=t.length&&(e=t.splice(0,r),e.length&&n.push(window.html2canvas.punycode.ucs2.encode(e)));return n}function isWordBoundary(t){return-1!==[32,13,10,9,45].indexOf(t)}function hasUnicode(t){return/[^\u0000-\u00ff]/.test(t)}function Proxy(t,e,n){var r=createCallback(supportsCORS),i=createProxyUrl(e,t,r);return supportsCORS?XHR(i):jsonp(n,i,r).then(function(t){return decode64(t.content)})}function ProxyURL(t,e,n){var r=createCallback(supportsCORSImage),i=createProxyUrl(e,t,r);return supportsCORSImage?Promise.resolve(i):jsonp(n,i,r).then(function(t){return"data:"+t.type+";base64,"+t.content})}function jsonp(t,e,n){return new Promise(function(r,i){var o=t.createElement("script"),s=function(){delete window.html2canvas.proxy[n],t.body.removeChild(o)};window.html2canvas.proxy[n]=function(t){s(),r(t)},o.src=e,o.onerror=function(t){s(),i(t)},t.body.appendChild(o)})}function createCallback(t){return t?"":"html2canvas_"+Date.now()+"_"+ ++proxyCount+"_"+Math.round(1e5*Math.random())}function createProxyUrl(t,e,n){return t+"?url="+encodeURIComponent(e)+(n.length?"&callback=html2canvas.proxy."+n:"")}function ProxyImageContainer(t,e){var n=(document.createElement("script"),document.createElement("a"));n.href=t,t=n.href,this.src=t,this.image=new Image;var r=this;this.promise=new Promise(function(n,i){r.image.crossOrigin="Anonymous",r.image.onload=n,r.image.onerror=i,new ProxyURL(t,e,document).then(function(t){r.image.src=t})["catch"](i)})}function PseudoElementContainer(t,e,n){NodeContainer.call(this,t,e),this.isPseudoElement=!0,this.before=":before"===n}function Renderer(t,e,n,r,i){this.width=t,this.height=e,this.images=n,this.options=r,this.document=i}function StackingContext(t,e,n,r){NodeContainer.call(this,n,r),this.ownStacking=t,this.contexts=[],this.children=[],this.opacity=(this.parent?this.parent.stack.opacity:1)*e}function Support(t){this.rangeBounds=this.testRangeBounds(t),this.cors=this.testCORS(),this.svg=this.testSVG()}function SVGContainer(t){this.src=t,this.image=null;var e=this;this.promise=this.hasFabric().then(function(){return e.isInline(t)?Promise.resolve(e.inlineFormatting(t)):XHR(t)}).then(function(t){return new Promise(function(n){html2canvas.fabric.loadSVGFromString(t,e.createCanvas.call(e,n))})})}function decode64(t){var e,n,r,i,o,s,a,c,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=t.length,h="";for(e=0;l>e;e+=4)n=u.indexOf(t[e]),r=u.indexOf(t[e+1]),i=u.indexOf(t[e+2]),o=u.indexOf(t[e+3]),s=n<<2|r>>4,a=(15&r)<<4|i>>2,c=(3&i)<<6|o,h+=64===i?String.fromCharCode(s):64===o||-1===o?String.fromCharCode(s,a):String.fromCharCode(s,a,c);return h}function SVGNodeContainer(t,e){this.src=t,this.image=null;var n=this;this.promise=e?new Promise(function(e,r){n.image=new Image,n.image.onload=e,n.image.onerror=r,n.image.src="data:image/svg+xml,"+(new XMLSerializer).serializeToString(t),n.image.complete===!0&&e(n.image)}):this.hasFabric().then(function(){return new Promise(function(e){html2canvas.fabric.parseSVGDocument(t,n.createCanvas.call(n,e))})})}function TextContainer(t,e){NodeContainer.call(this,t,e)}function capitalize(t,e,n){return t.length>0?e+n.toUpperCase():void 0}function WebkitGradientContainer(t){GradientContainer.apply(this,arguments),this.type="linear"===t.args[0]?this.TYPES.LINEAR:this.TYPES.RADIAL}function XHR(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.onload=function(){200===r.status?e(r.responseText):n(new Error(r.statusText))},r.onerror=function(){n(new Error("Network Error"))},r.send()})}function html2pdf(t,e,n){var r=e.canvas;if(!r)return void alert("jsPDF canvas plugin not installed");if(r.pdf=e,e.annotations={_nameMap:[],createAnnotation:function(t,n){var r,i=e.context2d._wrapX(n.left),o=e.context2d._wrapY(n.top),s=(e.context2d._page(n.top),t.indexOf("#"));r=s>=0?{name:t.substring(s+1)}:{url:t},e.link(i,o,n.right-n.left,n.bottom-n.top,r)},setName:function(t,n){var r=e.context2d._wrapX(n.left),i=e.context2d._wrapY(n.top),o=e.context2d._page(n.top);this._nameMap[t]={page:o,x:r,y:i}}},r.annotations=e.annotations,e.context2d._pageBreakAt=function(t){this.pageBreaks.push(t)},e.context2d._gotoPage=function(t){for(;e.internal.getNumberOfPages()<t;)e.addPage();e.setPage(t)},"string"==typeof t){t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");var i=document.createElement("iframe");document.body.appendChild(i);var o;o=i.contentDocument,void 0!=o&&null!=o||(o=i.contentWindow.document),o.open(),o.write(t),o.close();html2canvas(o.body,{canvas:r,onrendered:function(t){n&&(i&&i.parentElement.removeChild(i),n(e))}})}else{var s=t;html2canvas(s,{canvas:r,onrendered:function(t){n&&(i&&i.parentElement.removeChild(i),n(e))}})}}var jsPDF=function(t){"use strict";function e(e){var n={};this.subscribe=function(t,e,r){if("function"!=typeof e)return!1;n.hasOwnProperty(t)||(n[t]={});var i=Math.random().toString(35);return n[t][i]=[e,!!r],i},this.unsubscribe=function(t){for(var e in n)if(n[e][t])return delete n[e][t],!0;return!1},this.publish=function(r){if(n.hasOwnProperty(r)){var i=Array.prototype.slice.call(arguments,1),o=[];for(var s in n[r]){var a=n[r][s];try{a[0].apply(e,i)}catch(c){t.console&&console.error("jsPDF PubSub Error",c.message,c)}a[1]&&o.push(s)}o.length&&o.forEach(this.unsubscribe)}}}function n(s,a,c,u){var l={};"object"==typeof s&&(l=s,s=l.orientation,a=l.unit||a,c=l.format||c,u=l.compress||l.compressPdf||u),a=a||"mm",c=c||"a4",s=(""+(s||"P")).toLowerCase();var h,d,f,p,m,g,w,y,v,b=((""+c).toLowerCase(),!!u&&"function"==typeof Uint8Array),x=l.textColor||"0 g",k=l.drawColor||"0 G",A=l.fontSize||16,C=l.lineHeight||1.15,E=l.lineWidth||.200025,S=2,F=!1,T=[],P={},_={},I=0,q=[],O=[],R=[],B=[],D=[],N=0,j=0,L=0,M={title:"",subject:"",author:"",keywords:"",creator:""},z={},U=new e(z),H=function(t){return t.toFixed(2)},W=function(t){return t.toFixed(3)},V=function(t){return("0"+parseInt(t)).slice(-2)},X=function(t){F?q[p].push(t):(L+=t.length+1,B.push(t))},Y=function(){return S++,T[S]=L,X(S+" 0 obj"),S},G=function(){var t=2*q.length+1;t+=D.length;var e={objId:t,content:""};return D.push(e),e},Q=function(){return S++,T[S]=function(){return L},S},J=function(t){T[t]=L},K=function(t){X("stream"),X(t),X("endstream")},$=function(){var e,r,i,o,s,a,c,u,l;for(c=t.adler32cs||n.adler32cs,b&&"undefined"==typeof c&&(b=!1),e=1;I>=e;e++){if(Y(),u=(m=R[e].width)*d,l=(g=R[e].height)*d,X("<</Type /Page"),X("/Parent 1 0 R"),X("/Resources 2 0 R"),X("/MediaBox [0 0 "+H(u)+" "+H(l)+"]"),U.publish("putPage",{pageNumber:e,page:q[e]}),X("/Contents "+(S+1)+" 0 R"),X(">>"),X("endobj"),r=q[e].join("\n"),Y(),b){for(i=[],o=r.length;o--;)i[o]=r.charCodeAt(o);a=c.from(r),s=new Deflater(6),s.append(new Uint8Array(i)),r=s.flush(),i=new Uint8Array(r.length+6),i.set(new Uint8Array([120,156])),i.set(r,2),i.set(new Uint8Array([255&a,a>>8&255,a>>16&255,a>>24&255]),r.length+2),r=String.fromCharCode.apply(null,i),X("<</Length "+r.length+" /Filter [/FlateDecode]>>")}else X("<</Length "+r.length+">>");K(r),X("endobj")}T[1]=L,X("1 0 obj"),X("<</Type /Pages");var h="/Kids [";for(o=0;I>o;o++)h+=3+2*o+" 0 R ";X(h+"]"),X("/Count "+I),X(">>"),X("endobj"),U.publish("postPutPages")},Z=function(t){t.objectNumber=Y(),X("<</BaseFont/"+t.PostScriptName+"/Type/Font"),"string"==typeof t.encoding&&X("/Encoding/"+t.encoding),X("/Subtype/Type1>>"),X("endobj")},tt=function(){for(var t in P)P.hasOwnProperty(t)&&Z(P[t])},et=function(){U.publish("putXobjectDict")},nt=function(){X("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),X("/Font <<");for(var t in P)P.hasOwnProperty(t)&&X("/"+t+" "+P[t].objectNumber+" 0 R");X(">>"),X("/XObject <<"),et(),X(">>")},rt=function(){tt(),U.publish("putResources"),T[2]=L,X("2 0 obj"),X("<<"),nt(),X(">>"),X("endobj"),U.publish("postPutResources")},it=function(){U.publish("putAdditionalObjects");for(var t=0;t<D.length;t++){var e=D[t];T[e.objId]=L,X(e.objId+" 0 obj"),X(e.content),X("endobj")}S+=D.length,U.publish("postPutAdditionalObjects")},ot=function(t,e,n){_.hasOwnProperty(e)||(_[e]={}),_[e][n]=t},st=function(t,e,n,r){var i="F"+(Object.keys(P).length+1).toString(10),o=P[i]={id:i,PostScriptName:t,fontName:e,fontStyle:n,encoding:r,metadata:{}};return ot(i,e,n),U.publish("addFont",o),i},at=function(){for(var t="helvetica",e="times",n="courier",r="normal",i="bold",o="italic",s="bolditalic",a="StandardEncoding",c="zapfdingbats",u=[["Helvetica",t,r],["Helvetica-Bold",t,i],["Helvetica-Oblique",t,o],["Helvetica-BoldOblique",t,s],["Courier",n,r],["Courier-Bold",n,i],["Courier-Oblique",n,o],["Courier-BoldOblique",n,s],["Times-Roman",e,r],["Times-Bold",e,i],["Times-Italic",e,o],["Times-BoldItalic",e,s],["ZapfDingbats",c]],l=0,h=u.length;h>l;l++){var d=st(u[l][0],u[l][1],u[l][2],a),f=u[l][0].split("-");ot(d,f[0],f[1]||"")}U.publish("addFonts",{fonts:P,dictionary:_})},ct=function(e){return e.foo=function(){try{return e.apply(this,arguments)}catch(n){var r=n.stack||"";~r.indexOf(" at ")&&(r=r.split(" at ")[1]);var i="Error in function "+r.split("\n")[0].split("<")[0]+": "+n.message;if(!t.console)throw new Error(i);t.console.error(i,n),t.alert&&alert(i)}},e.foo.bar=e,e.foo},ut=function(t,e){var n,r,i,o,s,a,c,u,l;if(e=e||{},i=e.sourceEncoding||"Unicode",s=e.outputEncoding,(e.autoencode||s)&&P[h].metadata&&P[h].metadata[i]&&P[h].metadata[i].encoding&&(o=P[h].metadata[i].encoding,!s&&P[h].encoding&&(s=P[h].encoding),!s&&o.codePages&&(s=o.codePages[0]),"string"==typeof s&&(s=o[s]),s)){for(c=!1,a=[],n=0,r=t.length;r>n;n++)u=s[t.charCodeAt(n)],u?a.push(String.fromCharCode(u)):a.push(t[n]),a[n].charCodeAt(0)>>8&&(c=!0);t=a.join("")}for(n=t.length;void 0===c&&0!==n;)t.charCodeAt(n-1)>>8&&(c=!0),n--;if(!c)return t;for(a=e.noBOM?[]:[254,255],n=0,r=t.length;r>n;n++){if(u=t.charCodeAt(n),l=u>>8,l>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");a.push(l),a.push(u-(l<<8))}return String.fromCharCode.apply(void 0,a)},lt=function(t,e){return ut(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},ht=function(){X("/Producer (jsPDF "+n.version+")");for(var t in M)M.hasOwnProperty(t)&&M[t]&&X("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+lt(M[t])+")");var e=new Date,r=e.getTimezoneOffset(),i=0>r?"+":"-",o=Math.floor(Math.abs(r/60)),s=Math.abs(r%60),a=[i,V(o),"'",V(s),"'"].join("");X(["/CreationDate (D:",e.getFullYear(),V(e.getMonth()+1),V(e.getDate()),V(e.getHours()),V(e.getMinutes()),V(e.getSeconds()),a,")"].join(""))},dt=function(){switch(X("/Type /Catalog"),X("/Pages 1 0 R"),y||(y="fullwidth"),y){case"fullwidth":X("/OpenAction [3 0 R /FitH null]");break;case"fullheight":X("/OpenAction [3 0 R /FitV null]");break;case"fullpage":X("/OpenAction [3 0 R /Fit]");break;case"original":X("/OpenAction [3 0 R /XYZ null null 1]");break;default:var t=""+y;"%"===t.substr(t.length-1)&&(y=parseInt(y)/100),"number"==typeof y&&X("/OpenAction [3 0 R /XYZ null null "+H(y)+"]")}switch(v||(v="continuous"),v){case"continuous":X("/PageLayout /OneColumn");break;case"single":X("/PageLayout /SinglePage");break;case"two":case"twoleft":X("/PageLayout /TwoColumnLeft");break;case"tworight":X("/PageLayout /TwoColumnRight")}w&&X("/PageMode /"+w),U.publish("putCatalog")},ft=function(){X("/Size "+(S+1)),X("/Root "+S+" 0 R"),X("/Info "+(S-1)+" 0 R")},pt=function(t,e){var n="string"==typeof e&&e.toLowerCase();if("string"==typeof t){var r=t.toLowerCase();o.hasOwnProperty(r)&&(t=o[r][0]/d,e=o[r][1]/d)}if(Array.isArray(t)&&(e=t[1],t=t[0]),n){switch(n.substr(0,1)){case"l":e>t&&(n="s");break;case"p":t>e&&(n="s")}"s"===n&&(f=t,t=e,e=f)}F=!0,q[++I]=[],R[I]={width:Number(t)||m,height:Number(e)||g},O[I]={},wt(I)},mt=function(){pt.apply(this,arguments),X(H(E*d)+" w"),X(k),0!==N&&X(N+" J"),0!==j&&X(j+" j"),U.publish("addPage",{pageNumber:I})},gt=function(t){t>0&&I>=t&&(q.splice(t,1),R.splice(t,1),I--,p>I&&(p=I),this.setPage(p))},wt=function(t){t>0&&I>=t&&(p=t,m=R[t].width,g=R[t].height)},yt=function(t,e){var n;switch(t=void 0!==t?t:P[h].fontName,e=void 0!==e?e:P[h].fontStyle,void 0!==t&&(t=t.toLowerCase()),t){case"sans-serif":case"verdana":case"arial":case"helvetica":t="helvetica";break;case"fixed":case"monospace":case"terminal":case"courier":t="courier";break;case"serif":case"cursive":case"fantasy":default:t="times"}try{n=_[t][e]}catch(r){}return n||(n=_.times[e],null==n&&(n=_.times.normal)),n},vt=function(){F=!1,S=2,B=[],T=[],D=[],U.publish("buildDocument"),X("%PDF-"+r),$(),it(),rt(),Y(),X("<<"),ht(),X(">>"),X("endobj"),Y(),X("<<"),dt(),X(">>"),X("endobj");var t,e=L,n="0000000000";for(X("xref"),X("0 "+(S+1)),X(n+" 65535 f "),t=1;S>=t;t++){var i=T[t];X("function"==typeof i?(n+T[t]()).slice(-10)+" 00000 n ":(n+T[t]).slice(-10)+" 00000 n ")}return X("trailer"),X("<<"),ft(),X(">>"),X("startxref"),X(e),X("%%EOF"),F=!0,B.join("\n")},bt=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":"f"!==t&&"f*"!==t&&"B"!==t&&"B*"!==t||(e=t),e},xt=function(){for(var t=vt(),e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},kt=function(){return new Blob([xt()],{type:"application/pdf"})},At=ct(function(e,n){var r="dataur"===(""+e).substr(0,6)?"data:application/pdf;base64,"+btoa(vt()):0;switch(e){case void 0:return vt();case"save":if(navigator.getUserMedia&&(void 0===t.URL||void 0===t.URL.createObjectURL))return z.output("dataurlnewwindow");saveAs(kt(),n),"function"==typeof saveAs.unload&&t.setTimeout&&setTimeout(saveAs.unload,911);break;case"arraybuffer":return xt();case"blob":return kt();case"bloburi":case"bloburl":return t.URL&&t.URL.createObjectURL(kt())||void 0;case"datauristring":case"dataurlstring":return r;case"dataurlnewwindow":var i=t.open(r);if(i||"undefined"==typeof safari)return i;case"datauri":case"dataurl":return t.document.location.href=r;default:throw new Error('Output type "'+e+'" is not supported.')}});switch(a){case"pt":d=1;break;case"mm":d=72/25.4000508;break;case"cm":d=72/2.54000508;break;case"in":d=72;break;case"px":d=96/72;break;case"pc":d=12;break;case"em":d=12;break;case"ex":d=6;break;default:throw"Invalid unit: "+a}z.internal={pdfEscape:lt,getStyle:bt,getFont:function(){return P[yt.apply(z,arguments)]},getFontSize:function(){return A},getLineHeight:function(){return A*C},write:function(t){X(1===arguments.length?t:Array.prototype.join.call(arguments," "));
},getCoordinateString:function(t){return H(t*d)},getVerticalCoordinateString:function(t){return H((g-t)*d)},collections:{},newObject:Y,newAdditionalObject:G,newObjectDeferred:Q,newObjectDeferredBegin:J,putStream:K,events:U,scaleFactor:d,pageSize:{get width(){return m},get height(){return g}},output:function(t,e){return At(t,e)},getNumberOfPages:function(){return q.length-1},pages:q,out:X,f2:H,getPageInfo:function(t){var e=2*(t-1)+3;return{objId:e,pageNumber:t,pageContext:O[t]}},getCurrentPageInfo:function(){var t=2*(p-1)+3;return{objId:t,pageNumber:p,pageContext:O[p]}},getPDFVersion:function(){return r}},z.addPage=function(){return mt.apply(this,arguments),this},z.setPage=function(){return wt.apply(this,arguments),this},z.insertPage=function(t){return this.addPage(),this.movePage(p,t),this},z.movePage=function(t,e){if(t>e){for(var n=q[t],r=R[t],i=O[t],o=t;o>e;o--)q[o]=q[o-1],R[o]=R[o-1],O[o]=O[o-1];q[e]=n,R[e]=r,O[e]=i,this.setPage(e)}else if(e>t){for(var n=q[t],r=R[t],i=O[t],o=t;e>o;o++)q[o]=q[o+1],R[o]=R[o+1],O[o]=O[o+1];q[e]=n,R[e]=r,O[e]=i,this.setPage(e)}return this},z.deletePage=function(){return gt.apply(this,arguments),this},z.setDisplayMode=function(t,e,n){return y=t,v=e,w=n,this},z.text=function(t,e,n,r,o,s){function a(t){return t=t.split("	").join(Array(l.TabLen||9).join(" ")),lt(t,r)}"number"==typeof t&&(f=n,n=e,e=t,t=f),"string"==typeof t&&(t=t.match(/[\n\r]/)?t.split(/\r\n|\r|\n/g):[t]),"string"==typeof o&&(s=o,o=null),"string"==typeof r&&(s=r,r=null),"number"==typeof r&&(o=r,r=null);var c,u="",p="Td";if(o){o*=Math.PI/180;var m=Math.cos(o),w=Math.sin(o);u=[H(m),H(w),H(-1*w),H(m),""].join(" "),p="Tm"}r=r||{},"noBOM"in r||(r.noBOM=!0),"autoencode"in r||(r.autoencode=!0);var y="",v=this.internal.getCurrentPageInfo().pageContext;if(!0===r.stroke?v.lastTextWasStroke!==!0&&(y="1 Tr\n",v.lastTextWasStroke=!0):(v.lastTextWasStroke&&(y="0 Tr\n"),v.lastTextWasStroke=!1),"undefined"==typeof this._runningPageHeight&&(this._runningPageHeight=0),"string"==typeof t)t=a(t);else{if("[object Array]"!==Object.prototype.toString.call(t))throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');for(var b=t.concat(),k=[],E=b.length;E--;)k.push(a(b.shift()));var S=Math.ceil((g-n-this._runningPageHeight)*d/(A*C));if(S>=0&&S<k.length+1,s){var F,T,P,_=A*C,I=t.map(function(t){return this.getStringUnitWidth(t)*A/d},this);if(P=Math.max.apply(Math,I),"center"===s)F=e-P/2,e-=I[0]/2;else{if("right"!==s)throw new Error('Unrecognized alignment option, use "center" or "right".');F=e-P,e-=I[0]}for(T=e,t=k[0]+") Tj\n",i=1,E=k.length;i<E;i++){var q=P-I[i];"center"===s&&(q/=2),t+=F-T+q+" -"+_+" Td ("+k[i],T=F+q,i<E-1&&(t+=") Tj\n")}}else t=k.join(") Tj\nT* (")}var O;return c||(O=H((g-n)*d)),X("BT\n/"+h+" "+A+" Tf\n"+A*C+" TL\n"+y+x+"\n"+u+H(e*d)+" "+O+" "+p+"\n("+t+") Tj\nET"),c&&this.text(c,e,n),this},z.lstext=function(t,e,n,r){for(var i=0,o=t.length;o>i;i++,e+=r)this.text(t[i],e,n)},z.line=function(t,e,n,r){return this.lines([[n-t,r-e]],t,e)},z.clip=function(){X("W"),X("S")},z.lines=function(t,e,n,r,i,o){var s,a,c,u,l,h,p,m,w,y,v;for("number"==typeof t&&(f=n,n=e,e=t,t=f),r=r||[1,1],X(W(e*d)+" "+W((g-n)*d)+" m "),s=r[0],a=r[1],u=t.length,y=e,v=n,c=0;u>c;c++)l=t[c],2===l.length?(y=l[0]*s+y,v=l[1]*a+v,X(W(y*d)+" "+W((g-v)*d)+" l")):(h=l[0]*s+y,p=l[1]*a+v,m=l[2]*s+y,w=l[3]*a+v,y=l[4]*s+y,v=l[5]*a+v,X(W(h*d)+" "+W((g-p)*d)+" "+W(m*d)+" "+W((g-w)*d)+" "+W(y*d)+" "+W((g-v)*d)+" c"));return o&&X(" h"),null!==i&&X(bt(i)),this},z.rect=function(t,e,n,r,i){bt(i);return X([H(t*d),H((g-e)*d),H(n*d),H(-r*d),"re"].join(" ")),null!==i&&X(bt(i)),this},z.triangle=function(t,e,n,r,i,o,s){return this.lines([[n-t,r-e],[i-n,o-r],[t-i,e-o]],t,e,[1,1],s,!0),this},z.roundedRect=function(t,e,n,r,i,o,s){var a=4/3*(Math.SQRT2-1);return this.lines([[n-2*i,0],[i*a,0,i,o-o*a,i,o],[0,r-2*o],[0,o*a,-(i*a),o,-i,o],[-n+2*i,0],[-(i*a),0,-i,-(o*a),-i,-o],[0,-r+2*o],[0,-(o*a),i*a,-o,i,-o]],t+i,e,[1,1],s),this},z.ellipse=function(t,e,n,r,i){var o=4/3*(Math.SQRT2-1)*n,s=4/3*(Math.SQRT2-1)*r;return X([H((t+n)*d),H((g-e)*d),"m",H((t+n)*d),H((g-(e-s))*d),H((t+o)*d),H((g-(e-r))*d),H(t*d),H((g-(e-r))*d),"c"].join(" ")),X([H((t-o)*d),H((g-(e-r))*d),H((t-n)*d),H((g-(e-s))*d),H((t-n)*d),H((g-e)*d),"c"].join(" ")),X([H((t-n)*d),H((g-(e+s))*d),H((t-o)*d),H((g-(e+r))*d),H(t*d),H((g-(e+r))*d),"c"].join(" ")),X([H((t+o)*d),H((g-(e+r))*d),H((t+n)*d),H((g-(e+s))*d),H((t+n)*d),H((g-e)*d),"c"].join(" ")),null!==i&&X(bt(i)),this},z.circle=function(t,e,n,r){return this.ellipse(t,e,n,n,r)},z.setProperties=function(t){for(var e in M)M.hasOwnProperty(e)&&t[e]&&(M[e]=t[e]);return this},z.setFontSize=function(t){return A=t,this},z.setFont=function(t,e){return h=yt(t,e),this},z.setFontStyle=z.setFontType=function(t){return h=yt(void 0,t),this},z.getFontList=function(){var t,e,n,r={};for(t in _)if(_.hasOwnProperty(t)){r[t]=n=[];for(e in _[t])_[t].hasOwnProperty(e)&&n.push(e)}return r},z.addFont=function(t,e,n){st(t,e,n,"StandardEncoding")},z.setLineWidth=function(t){return X((t*d).toFixed(2)+" w"),this},z.setDrawColor=function(t,e,n,r){var i;return i=void 0===e||void 0===r&&t===e===n?"string"==typeof t?t+" G":H(t/255)+" G":void 0===r?"string"==typeof t?[t,e,n,"RG"].join(" "):[H(t/255),H(e/255),H(n/255),"RG"].join(" "):"string"==typeof t?[t,e,n,r,"K"].join(" "):[H(t),H(e),H(n),H(r),"K"].join(" "),X(i),this},z.setFillColor=function(t,e,n,r){var i;return void 0===e||void 0===r&&t===e===n?i="string"==typeof t?t+" g":H(t/255)+" g":void 0===r||"object"==typeof r?(i="string"==typeof t?[t,e,n,"rg"].join(" "):[H(t/255),H(e/255),H(n/255),"rg"].join(" "),r&&0===r.a&&(i=["255","255","255","rg"].join(" "))):i="string"==typeof t?[t,e,n,r,"k"].join(" "):[H(t),H(e),H(n),H(r),"k"].join(" "),X(i),this},z.setTextColor=function(t,e,n){if("string"==typeof t&&/^#[0-9A-Fa-f]{6}$/.test(t)){var r=parseInt(t.substr(1),16);t=r>>16&255,e=r>>8&255,n=255&r}return x=0===t&&0===e&&0===n||"undefined"==typeof e?W(t/255)+" g":[W(t/255),W(e/255),W(n/255),"rg"].join(" "),this},z.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},z.setLineCap=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return N=e,X(e+" J"),this},z.setLineJoin=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return j=e,X(e+" j"),this},z.output=At,z.save=function(t){z.output("save",t)};for(var Ct in n.API)n.API.hasOwnProperty(Ct)&&("events"===Ct&&n.API.events.length?!function(t,e){var n,r,i;for(i=e.length-1;-1!==i;i--)n=e[i][0],r=e[i][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(U,n.API.events):z[Ct]=n.API[Ct]);return at(),h="F1",mt(c,s),U.publish("initialized"),z}var r="1.3",o={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};return n.API={events:[]},n.version="1.2.61-git 2016-03-01T16:15:jameshall","function"==typeof define&&define.amd?define("jsPDF",function(){return n}):"undefined"!=typeof module&&module.exports?module.exports=n:t.jsPDF=n,n}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this);(AcroForm=function(t){"use strict";AcroForm.scale=function(t){return t*(e.internal.scaleFactor/1)},AcroForm.antiScale=function(t){return 1/e.internal.scaleFactor*t};var e={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null};jsPDF.API.acroformPlugin=e;var n=function(){for(var t in this.acroformPlugin.acroFormDictionaryRoot.Fields){var e=this.acroformPlugin.acroFormDictionaryRoot.Fields[t];e.hasAnnotation&&i.call(this,e)}},r=function(){if(this.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");this.acroformPlugin.acroFormDictionaryRoot=new AcroForm.AcroFormDictionary,this.acroformPlugin.internal=this.internal,this.acroformPlugin.acroFormDictionaryRoot._eventID=this.internal.events.subscribe("postPutResources",a),this.internal.events.subscribe("buildDocument",n),this.internal.events.subscribe("putCatalog",s),this.internal.events.subscribe("postPutPages",c)},i=function(t){var e={type:"reference",object:t};jsPDF.API.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(e)},o=function(t){this.acroformPlugin.printedOut&&(this.acroformPlugin.printedOut=!1,this.acroformPlugin.acroFormDictionaryRoot=null),this.acroformPlugin.acroFormDictionaryRoot||r.call(this),this.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)},s=function(){"undefined"!=typeof this.acroformPlugin.acroFormDictionaryRoot?this.internal.write("/AcroForm "+this.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R"):console.log("Root missing...")},a=function(){this.internal.events.unsubscribe(this.acroformPlugin.acroFormDictionaryRoot._eventID),delete this.acroformPlugin.acroFormDictionaryRoot._eventID,this.acroformPlugin.printedOut=!0},c=function(t){var e=!t;t||(this.internal.newObjectDeferredBegin(this.acroformPlugin.acroFormDictionaryRoot.objId),this.internal.out(this.acroformPlugin.acroFormDictionaryRoot.getString()));var t=t||this.acroformPlugin.acroFormDictionaryRoot.Kids;for(var n in t){var r=t[n],i=r.Rect;r.Rect&&(r.Rect=AcroForm.internal.calculateCoordinates.call(this,r.Rect)),this.internal.newObjectDeferredBegin(r.objId);var o="";if(o+=r.objId+" 0 obj\n",o+="<<\n"+r.getContent(),r.Rect=i,r.hasAppearanceStream&&!r.appearanceStreamContent){var s=AcroForm.internal.calculateAppearanceStream.call(this,r);o+="/AP << /N "+s+" >>\n",this.acroformPlugin.xForms.push(s)}if(r.appearanceStreamContent){o+="/AP << ";for(var a in r.appearanceStreamContent){var c=r.appearanceStreamContent[a];if(o+="/"+a+" ",o+="<< ",Object.keys(c).length>=1||Array.isArray(c))for(var n in c){var l=c[n];"function"==typeof l&&(l=l.call(this,r)),o+="/"+n+" "+l+" ",this.acroformPlugin.xForms.indexOf(l)>=0||this.acroformPlugin.xForms.push(l)}else{var l=c;"function"==typeof l&&(l=l.call(this,r)),o+="/"+n+" "+l+" \n",this.acroformPlugin.xForms.indexOf(l)>=0||this.acroformPlugin.xForms.push(l)}o+=" >>\n"}o+=">>\n"}o+=">>\nendobj\n",this.internal.out(o)}e&&u.call(this,this.acroformPlugin.xForms)},u=function(t){for(var e in t){var n=e,r=t[e];this.internal.newObjectDeferredBegin(r.objId);var i="";i+=r.getString(),this.internal.out(i),delete t[n]}};t.addField=function(t){return t instanceof AcroForm.TextField?h.call(this,t):t instanceof AcroForm.ChoiceField?d.call(this,t):t instanceof AcroForm.Button?l.call(this,t):t instanceof AcroForm.ChildClass?o.call(this,t):t&&o.call(this,t),this};var l=function(t){var t=t||new AcroForm.Field;t.FT="/Btn";var e=t.Ff||0;t.pushbutton&&(e=AcroForm.internal.setBitPosition(e,17),delete t.pushbutton),t.radio&&(e=AcroForm.internal.setBitPosition(e,16),delete t.radio),t.noToggleToOff&&(e=AcroForm.internal.setBitPosition(e,15)),t.Ff=e,o.call(this,t)},h=function(t){var t=t||new AcroForm.Field;t.FT="/Tx";var e=t.Ff||0;t.multiline&&(e=4096|e),t.password&&(e=8192|e),t.fileSelect&&(e|=1<<20),t.doNotSpellCheck&&(e|=1<<22),t.doNotScroll&&(e|=1<<23),t.Ff=t.Ff||e,o.call(this,t)},d=function(t){var e=t||new AcroForm.Field;e.FT="/Ch";var n=e.Ff||0;e.combo&&(n=AcroForm.internal.setBitPosition(n,18),delete e.combo),e.edit&&(n=AcroForm.internal.setBitPosition(n,19),delete e.edit),e.sort&&(n=AcroForm.internal.setBitPosition(n,20),delete e.sort),e.multiSelect&&this.internal.getPDFVersion()>=1.4&&(n=AcroForm.internal.setBitPosition(n,22),delete e.multiSelect),e.doNotSpellCheck&&this.internal.getPDFVersion()>=1.4&&(n=AcroForm.internal.setBitPosition(n,23),delete e.doNotSpellCheck),e.Ff=n,o.call(this,e)}})(jsPDF.API),AcroForm.internal={},AcroForm.createFormXObject=function(t){var e=new AcroForm.FormXObject,n=AcroForm.Appearance.internal.getHeight(t)||0,r=AcroForm.Appearance.internal.getWidth(t)||0;return e.BBox=[0,0,r,n],e},AcroForm.Appearance={CheckBox:{createAppearanceStream:function(){var t={N:{On:AcroForm.Appearance.CheckBox.YesNormal},D:{On:AcroForm.Appearance.CheckBox.YesPushDown,Off:AcroForm.Appearance.CheckBox.OffPushDown}};return t},createMK:function(){return"<< /CA (3)>>"},YesPushDown:function(t){var e=AcroForm.createFormXObject(t),n="";t.Q=1;var r=AcroForm.internal.calculateX(t,"3","ZapfDingbats",50);return n+="0.749023 g\n             0 0 "+AcroForm.Appearance.internal.getWidth(t)+" "+AcroForm.Appearance.internal.getHeight(t)+" re\n             f\n             BMC\n             q\n             0 0 1 rg\n             /F13 "+r.fontSize+" Tf 0 g\n             BT\n",n+=r.text,n+="ET\n             Q\n             EMC\n",e.stream=n,e},YesNormal:function(t){var e=AcroForm.createFormXObject(t),n="";t.Q=1;var r=AcroForm.internal.calculateX(t,"3","ZapfDingbats",.9*AcroForm.Appearance.internal.getHeight(t));return n+="1 g\n0 0 "+AcroForm.Appearance.internal.getWidth(t)+" "+AcroForm.Appearance.internal.getHeight(t)+" re\nf\nq\n0 0 1 rg\n0 0 "+(AcroForm.Appearance.internal.getWidth(t)-1)+" "+(AcroForm.Appearance.internal.getHeight(t)-1)+" re\nW\nn\n0 g\nBT\n/F13 "+r.fontSize+" Tf 0 g\n",n+=r.text,n+="ET\n             Q\n",e.stream=n,e},OffPushDown:function(t){var e=AcroForm.createFormXObject(t),n="";return n+="0.749023 g\n            0 0 "+AcroForm.Appearance.internal.getWidth(t)+" "+AcroForm.Appearance.internal.getHeight(t)+" re\n            f\n",e.stream=n,e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:AcroForm.Appearance.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=AcroForm.Appearance.RadioButton.Circle.YesNormal,e.D[t]=AcroForm.Appearance.RadioButton.Circle.YesPushDown,e},createMK:function(){return"<< /CA (l)>>"},YesNormal:function(t){var e=AcroForm.createFormXObject(t),n="",r=AcroForm.Appearance.internal.getWidth(t)<=AcroForm.Appearance.internal.getHeight(t)?AcroForm.Appearance.internal.getWidth(t)/4:AcroForm.Appearance.internal.getHeight(t)/4;r*=.9;var i=AcroForm.Appearance.internal.Bezier_C;return n+="q\n1 0 0 1 "+AcroForm.Appearance.internal.getWidth(t)/2+" "+AcroForm.Appearance.internal.getHeight(t)/2+" cm\n"+r+" 0 m\n"+r+" "+r*i+" "+r*i+" "+r+" 0 "+r+" c\n-"+r*i+" "+r+" -"+r+" "+r*i+" -"+r+" 0 c\n-"+r+" -"+r*i+" -"+r*i+" -"+r+" 0 -"+r+" c\n"+r*i+" -"+r+" "+r+" -"+r*i+" "+r+" 0 c\nf\nQ\n",e.stream=n,e},YesPushDown:function(t){var e=AcroForm.createFormXObject(t),n="",r=AcroForm.Appearance.internal.getWidth(t)<=AcroForm.Appearance.internal.getHeight(t)?AcroForm.Appearance.internal.getWidth(t)/4:AcroForm.Appearance.internal.getHeight(t)/4;r*=.9;var i=AcroForm.Appearance.internal.Bezier_C;return n+="0.749023 g\n            q\n           1 0 0 1 "+AcroForm.Appearance.internal.getWidth(t)/2+" "+AcroForm.Appearance.internal.getHeight(t)/2+" cm\n"+2*r+" 0 m\n"+2*r+" "+2*r*i+" "+2*r*i+" "+2*r+" 0 "+2*r+" c\n-"+2*r*i+" "+2*r+" -"+2*r+" "+2*r*i+" -"+2*r+" 0 c\n-"+2*r+" -"+2*r*i+" -"+2*r*i+" -"+2*r+" 0 -"+2*r+" c\n"+2*r*i+" -"+2*r+" "+2*r+" -"+2*r*i+" "+2*r+" 0 c\n            f\n            Q\n            0 g\n            q\n            1 0 0 1 "+AcroForm.Appearance.internal.getWidth(t)/2+" "+AcroForm.Appearance.internal.getHeight(t)/2+" cm\n"+r+" 0 m\n"+r+" "+r*i+" "+r*i+" "+r+" 0 "+r+" c\n-"+r*i+" "+r+" -"+r+" "+r*i+" -"+r+" 0 c\n-"+r+" -"+r*i+" -"+r*i+" -"+r+" 0 -"+r+" c\n"+r*i+" -"+r+" "+r+" -"+r*i+" "+r+" 0 c\n            f\n            Q\n",e.stream=n,e},OffPushDown:function(t){var e=AcroForm.createFormXObject(t),n="",r=AcroForm.Appearance.internal.getWidth(t)<=AcroForm.Appearance.internal.getHeight(t)?AcroForm.Appearance.internal.getWidth(t)/4:AcroForm.Appearance.internal.getHeight(t)/4;r*=.9;var i=AcroForm.Appearance.internal.Bezier_C;return n+="0.749023 g\n            q\n 1 0 0 1 "+AcroForm.Appearance.internal.getWidth(t)/2+" "+AcroForm.Appearance.internal.getHeight(t)/2+" cm\n"+2*r+" 0 m\n"+2*r+" "+2*r*i+" "+2*r*i+" "+2*r+" 0 "+2*r+" c\n-"+2*r*i+" "+2*r+" -"+2*r+" "+2*r*i+" -"+2*r+" 0 c\n-"+2*r+" -"+2*r*i+" -"+2*r*i+" -"+2*r+" 0 -"+2*r+" c\n"+2*r*i+" -"+2*r+" "+2*r+" -"+2*r*i+" "+2*r+" 0 c\n            f\n            Q\n",e.stream=n,e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:AcroForm.Appearance.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=AcroForm.Appearance.RadioButton.Cross.YesNormal,e.D[t]=AcroForm.Appearance.RadioButton.Cross.YesPushDown,e},createMK:function(){return"<< /CA (8)>>"},YesNormal:function(t){var e=AcroForm.createFormXObject(t),n="",r=AcroForm.Appearance.internal.calculateCross(t);return n+="q\n            1 1 "+(AcroForm.Appearance.internal.getWidth(t)-2)+" "+(AcroForm.Appearance.internal.getHeight(t)-2)+" re\n            W\n            n\n            "+r.x1.x+" "+r.x1.y+" m\n            "+r.x2.x+" "+r.x2.y+" l\n            "+r.x4.x+" "+r.x4.y+" m\n            "+r.x3.x+" "+r.x3.y+" l\n            s\n            Q\n",e.stream=n,e},YesPushDown:function(t){var e=AcroForm.createFormXObject(t),n=AcroForm.Appearance.internal.calculateCross(t),r="";return r+="0.749023 g\n            0 0 "+AcroForm.Appearance.internal.getWidth(t)+" "+AcroForm.Appearance.internal.getHeight(t)+" re\n            f\n            q\n            1 1 "+(AcroForm.Appearance.internal.getWidth(t)-2)+" "+(AcroForm.Appearance.internal.getHeight(t)-2)+" re\n            W\n            n\n            "+n.x1.x+" "+n.x1.y+" m\n            "+n.x2.x+" "+n.x2.y+" l\n            "+n.x4.x+" "+n.x4.y+" m\n            "+n.x3.x+" "+n.x3.y+" l\n            s\n            Q\n",e.stream=r,e},OffPushDown:function(t){var e=AcroForm.createFormXObject(t),n="";return n+="0.749023 g\n            0 0 "+AcroForm.Appearance.internal.getWidth(t)+" "+AcroForm.Appearance.internal.getHeight(t)+" re\n            f\n",e.stream=n,e}}},createDefaultAppearanceStream:function(t){var e="";return e+="/Helv 12 Tf 0 g"}},AcroForm.Appearance.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=function(t,e){return t>e?e:t},n=AcroForm.Appearance.internal.getWidth(t),r=AcroForm.Appearance.internal.getHeight(t),i=e(n,r),o={x1:{x:(n-i)/2,y:(r-i)/2+i},x2:{x:(n-i)/2+i,y:(r-i)/2},x3:{x:(n-i)/2,y:(r-i)/2},x4:{x:(n-i)/2+i,y:(r-i)/2+i}};return o}},AcroForm.Appearance.internal.getWidth=function(t){return t.Rect[2]},AcroForm.Appearance.internal.getHeight=function(t){return t.Rect[3]},AcroForm.internal.inherit=function(t,e){Object.create||function(t){var e=function(){};return e.prototype=t,new e};t.prototype=Object.create(e.prototype),t.prototype.constructor=t},AcroForm.internal.arrayToPdfArray=function(t){if(Array.isArray(t)){var e=" [";for(var n in t){var r=t[n].toString();e+=r,e+=n<t.length-1?" ":""}return e+="]"}},AcroForm.internal.toPdfString=function(t){return t=t||"",0!==String.indexOf("(",0)&&(t="("+t),")"!=t.substring(t.length-1)&&(t+="("),t},AcroForm.PDFObject=function(){var t;Object.defineProperty(this,"objId",{get:function(){return t||(this.internal?t=this.internal.newObjectDeferred():jsPDF.API.acroformPlugin.internal&&(t=jsPDF.API.acroformPlugin.internal.newObjectDeferred())),t||console.log("Couldn't create Object ID"),t},configurable:!1})},AcroForm.PDFObject.prototype.toString=function(){return this.objId+" 0 R"},AcroForm.PDFObject.prototype.getString=function(){var t=this.objId+" 0 obj\n<<",e=this.getContent();return t+=e+">>\n",this.stream&&(t+="stream\n",t+=this.stream,t+="endstream\n"),t+="endobj\n"},AcroForm.PDFObject.prototype.getContent=function(){var t=function(t){var e="",n=Object.keys(t).filter(function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"_"!=t.substring(0,1)});for(var r in n){var i=n[r],o=t[i];o&&(e+=Array.isArray(o)?"/"+i+" "+AcroForm.internal.arrayToPdfArray(o)+"\n":o instanceof AcroForm.PDFObject?"/"+i+" "+o.objId+" 0 R\n":"/"+i+" "+o+"\n")}return e},e="";return e+=t(this)},AcroForm.FormXObject=function(){AcroForm.PDFObject.call(this),this.Type="/XObject",this.Subtype="/Form",this.FormType=1,this.BBox,this.Matrix,this.Resources="2 0 R",this.PieceInfo;var t;Object.defineProperty(this,"Length",{enumerable:!0,get:function(){return void 0!==t?t.length:0}}),Object.defineProperty(this,"stream",{enumerable:!1,set:function(e){t=e},get:function(){return t?t:null}})},AcroForm.internal.inherit(AcroForm.FormXObject,AcroForm.PDFObject),AcroForm.AcroFormDictionary=function(){AcroForm.PDFObject.call(this);var t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!0,configurable:!0,get:function(){return t}}),this.DA},AcroForm.internal.inherit(AcroForm.AcroFormDictionary,AcroForm.PDFObject),AcroForm.Field=function(){"use strict";AcroForm.PDFObject.call(this);var t;Object.defineProperty(this,"Rect",{enumerable:!0,configurable:!1,get:function(){if(t){var e=t;return e}},set:function(e){t=e}});var e="";Object.defineProperty(this,"FT",{enumerable:!0,set:function(t){e=t},get:function(){return e}});var n;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,set:function(t){n=t},get:function(){if(!n||n.length<1){if(this instanceof AcroForm.ChildClass)return;return"(FieldObject"+AcroForm.Field.FieldNum++ +")"}return"("==n.substring(0,1)&&n.substring(n.length-1)?n:"("+n+")"}});var r;Object.defineProperty(this,"DA",{enumerable:!0,get:function(){return r?"("+r+")":void 0},set:function(t){r=t}});var i;Object.defineProperty(this,"DV",{enumerable:!0,configurable:!0,get:function(){return i?i:void 0},set:function(t){i=t}}),Object.defineProperty(this,"Type",{enumerable:!0,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,get:function(){return this.hasAnnotation?"/Widget":null}}),this.BG,Object.defineProperty(this,"hasAnnotation",{enumerable:!1,get:function(){return!!(this.Rect||this.BC||this.BG)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!1,configurable:!0})},AcroForm.Field.FieldNum=0,AcroForm.internal.inherit(AcroForm.Field,AcroForm.PDFObject),AcroForm.ChoiceField=function(){AcroForm.Field.call(this),this.FT="/Ch",this.Opt=[],this.V="()",this.TI=0,this.combo=!1,Object.defineProperty(this,"edit",{enumerable:!0,set:function(t){1==t?(this._edit=!0,this.combo=!0):this._edit=!1},get:function(){return this._edit?this._edit:!1},configurable:!1}),this.hasAppearanceStream=!0,this.V.get=function(){AcroForm.internal.toPdfString()}},AcroForm.internal.inherit(AcroForm.ChoiceField,AcroForm.Field),window.ChoiceField=AcroForm.ChoiceField,AcroForm.ListBox=function(){AcroForm.ChoiceField.call(this)},AcroForm.internal.inherit(AcroForm.ListBox,AcroForm.ChoiceField),window.ListBox=AcroForm.ListBox,AcroForm.ComboBox=function(){AcroForm.ListBox.call(this),this.combo=!0},AcroForm.internal.inherit(AcroForm.ComboBox,AcroForm.ListBox),window.ComboBox=AcroForm.ComboBox,AcroForm.EditBox=function(){AcroForm.ComboBox.call(this),this.edit=!0},AcroForm.internal.inherit(AcroForm.EditBox,AcroForm.ComboBox),window.EditBox=AcroForm.EditBox,AcroForm.Button=function(){AcroForm.Field.call(this),this.FT="/Btn"},AcroForm.internal.inherit(AcroForm.Button,AcroForm.Field),window.Button=AcroForm.Button,AcroForm.PushButton=function(){AcroForm.Button.call(this),this.pushbutton=!0},AcroForm.internal.inherit(AcroForm.PushButton,AcroForm.Button),window.PushButton=AcroForm.PushButton,AcroForm.RadioButton=function(){AcroForm.Button.call(this),this.radio=!0;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"__Kids",{get:function(){return t}});var e;Object.defineProperty(this,"noToggleToOff",{enumerable:!1,get:function(){return e},set:function(t){e=t}})},AcroForm.internal.inherit(AcroForm.RadioButton,AcroForm.Button),window.RadioButton=AcroForm.RadioButton,AcroForm.ChildClass=function(t,e){AcroForm.Field.call(this),this.Parent=t,this._AppearanceType=AcroForm.Appearance.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(e),this.F=AcroForm.internal.setBitPosition(this.F,3,1),this.MK=this._AppearanceType.createMK(),this.AS="/Off",this._Name=e},AcroForm.internal.inherit(AcroForm.ChildClass,AcroForm.Field),AcroForm.RadioButton.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t&&"createMK"in t))return void console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.__Kids){var n=this.__Kids[e];n.appearanceStreamContent=t.createAppearanceStream(n._Name),n.MK=t.createMK()}},AcroForm.RadioButton.prototype.createOption=function(t){var e=this,n=(this.__Kids.length,new AcroForm.ChildClass(e,t));return this.__Kids.push(n),jsPDF.API.addField(n),n},AcroForm.CheckBox=function(){Button.call(this),this.appearanceStreamContent=AcroForm.Appearance.CheckBox.createAppearanceStream(),this.MK=AcroForm.Appearance.CheckBox.createMK(),this.AS="/On",this.V="/On"},AcroForm.internal.inherit(AcroForm.CheckBox,AcroForm.Button),window.CheckBox=AcroForm.CheckBox,AcroForm.TextField=function(){AcroForm.Field.call(this);var t;Object.defineProperty(this,"V",{get:function(){return t?"("+t+")":t},enumerable:!0,set:function(e){t=e}});var e;Object.defineProperty(this,"DV",{get:function(){return e?"("+e+")":e},enumerable:!0,set:function(t){e=t}});var n=!1;Object.defineProperty(this,"multiline",{enumerable:!1,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!1,get:function(){return this.V||this.DV}})},AcroForm.internal.inherit(AcroForm.TextField,AcroForm.Field),window.TextField=AcroForm.TextField,AcroForm.PasswordField=function(){TextField.call(this),Object.defineProperty(this,"password",{value:!0,enumerable:!1,configurable:!1,writable:!1})},AcroForm.internal.inherit(AcroForm.PasswordField,AcroForm.TextField),window.PasswordField=AcroForm.PasswordField,AcroForm.internal.calculateFontSpace=function(t,e,n){var n=n||"helvetica",r=AcroForm.internal.calculateFontSpace.canvas||(AcroForm.internal.calculateFontSpace.canvas=document.createElement("canvas")),i=r.getContext("2d");i.save();var o=e+" "+n;i.font=o;var s=i.measureText(t);i.fontcolor="black";var i=r.getContext("2d");s.height=1.5*i.measureText("3").width,i.restore();s.width;return s},AcroForm.internal.calculateX=function(t,e,n,r){var r=r||12,n=n||"helvetica",i={text:"",fontSize:""};e="("==e.substr(0,1)?e.substr(1):e,e=")"==e.substr(e.length-1)?e.substr(0,e.length-1):e;var o=e.split(" "),s=r,a=2,c=2,u=AcroForm.Appearance.internal.getHeight(t)||0;u=0>u?-u:u;var l=AcroForm.Appearance.internal.getWidth(t)||0;l=0>l?-l:l;var h=function(t,e,r){if(t+1<o.length){var i=e+" "+o[t+1],s=AcroForm.internal.calculateFontSpace(i,r+"px",n).width,a=l-2*c;return a>=s}return!1};s++;t:for(;;){var e="";s--;var d=AcroForm.internal.calculateFontSpace("3",s+"px",n).height,f=t.multiline?u-s:(u-d)/2;f+=a;var p=-c,m=p,g=f,w=0,y=0,v=0;if(0==s){s=12,e="(...) Tj\n",e+="% Width of Text: "+AcroForm.internal.calculateFontSpace(e,"1px").width+", FieldWidth:"+l+"\n";break}v=AcroForm.internal.calculateFontSpace(o[0]+" ",s+"px",n).width;var b="",x=0;for(var k in o){b+=o[k]+" ",b=" "==b.substr(b.length-1)?b.substr(0,b.length-1):b;var A=parseInt(k);v=AcroForm.internal.calculateFontSpace(b+" ",s+"px",n).width;var C=h(A,b,s),E=k>=o.length-1;if(!C||E){if(C||E){if(E)y=A;else if(t.multiline&&(d+a)*(x+2)+a>u)continue t}else{if(!t.multiline)continue t;if((d+a)*(x+2)+a>u)continue t;y=A}for(var S="",F=w;y>=F;F++)S+=o[F]+" ";switch(S=" "==S.substr(S.length-1)?S.substr(0,S.length-1):S,v=AcroForm.internal.calculateFontSpace(S,s+"px",n).width,t.Q){case 2:p=l-v-c;break;case 1:p=(l-v)/2;break;case 0:default:p=c}e+=p+" "+g+" Td\n",e+="("+S+") Tj\n",e+=-p+" 0 Td\n",g=-(s+a),m=p,v=0,w=y+1,x++,b=""}else b+=" "}break}return i.text=e,i.fontSize=s,i},AcroForm.internal.calculateAppearanceStream=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e="",n=t.V||t.DV,r=AcroForm.internal.calculateX(t,n);e+="/Tx BMC\nq\n/F1 "+r.fontSize+" Tf\n1 0 0 1 0 0 Tm\n",e+="BT\n",e+=r.text,e+="ET\n",e+="Q\nEMC\n";var i=new AcroForm.createFormXObject(t);i.stream=e;return i}},AcroForm.internal.calculateCoordinates=function(t,e,n,r){function i(t){return t*this.internal.scaleFactor}var o={};return this.internal?Array.isArray(t)?(t[0]=AcroForm.scale(t[0]),t[1]=AcroForm.scale(t[1]),t[2]=AcroForm.scale(t[2]),t[3]=AcroForm.scale(t[3]),o.lowerLeft_X=0|t[0],o.lowerLeft_Y=i.call(this,this.internal.pageSize.height)-t[3]-t[1]|0,o.upperRight_X=t[0]+t[2]|0,o.upperRight_Y=i.call(this,this.internal.pageSize.height)-t[1]|0):(t=AcroForm.scale(t),e=AcroForm.scale(e),n=AcroForm.scale(n),r=AcroForm.scale(r),o.lowerLeft_X=0|t,o.lowerLeft_Y=this.internal.pageSize.height-e|0,o.upperRight_X=t+n|0,o.upperRight_Y=this.internal.pageSize.height-e+r|0):Array.isArray(t)?(o.lowerLeft_X=0|t[0],o.lowerLeft_Y=0|t[1],o.upperRight_X=t[0]+t[2]|0,o.upperRight_Y=t[1]+t[3]|0):(o.lowerLeft_X=0|t,o.lowerLeft_Y=0|e,o.upperRight_X=t+n|0,o.upperRight_Y=e+r|0),[o.lowerLeft_X,o.lowerLeft_Y,o.upperRight_X,o.upperRight_Y]},AcroForm.internal.calculateColor=function(t,e,n){var r=new Array(3);return r.r=0|t,r.g=0|e,r.b=0|n,r},AcroForm.internal.getBitPosition=function(t,e){t=t||0;var n=1;return n<<=e-1,t|n},AcroForm.internal.setBitPosition=function(t,e,n){t=t||0,n=n||1;var r=1;if(r<<=e-1,1==n)var t=t|r;else var t=t&~r;return t},function(t){"use strict";t.addHTML=function(t,e,n,r,i){if("undefined"==typeof html2canvas&&"undefined"==typeof rasterizeHTML)throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");"number"!=typeof e&&(r=e,i=n),"function"==typeof r&&(i=r,r=null);var o=this.internal,s=o.scaleFactor,a=o.pageSize.width,c=o.pageSize.height;if(r=r||{},r.onrendered=function(t){e=parseInt(e)||0,n=parseInt(n)||0;var o=r.dim||{},u=o.h||0,l=o.w||Math.min(a,t.width/s)-e,h="JPEG";if(r.format&&(h=r.format),t.height>c&&r.pagesplit){var d=function(){for(var r=0;;){var o=document.createElement("canvas");o.width=Math.min(a*s,t.width),o.height=Math.min(c*s,t.height-r);var u=o.getContext("2d");u.drawImage(t,0,r,t.width,o.height,0,0,o.width,o.height);var d=[o,e,r?0:n,o.width/s,o.height/s,h,null,"SLOW"];if(this.addImage.apply(this,d),r+=o.height,r>=t.height)break;this.addPage()}i(l,r,null,d)}.bind(this);if("CANVAS"===t.nodeName){var f=new Image;f.onload=d,f.src=t.toDataURL("image/png"),t=f}else d()}else{var p=Math.random().toString(35),m=[t,e,n,l,u,h,p,"SLOW"];this.addImage.apply(this,m),i(l,u,p,m)}}.bind(this),"undefined"!=typeof html2canvas&&!r.rstz)return html2canvas(t,r);if("undefined"!=typeof rasterizeHTML){var u="drawDocument";return"string"==typeof t&&(u=/^http/.test(t)?"drawURL":"drawHTML"),r.width=r.width||a*s,rasterizeHTML[u](t,void 0,r).then(function(t){r.onrendered(t.image)},function(t){i(null,t)})}return null}}(jsPDF.API),function(t){"use strict";var e="addImage_",n=["jpeg","jpg","png"],r=function(t){var e=this.internal.newObject(),n=this.internal.write,i=this.internal.putStream;if(t.n=e,n("<</Type /XObject"),n("/Subtype /Image"),n("/Width "+t.w),n("/Height "+t.h),t.cs===this.color_spaces.INDEXED?n("/ColorSpace [/Indexed /DeviceRGB "+(t.pal.length/3-1)+" "+("smask"in t?e+2:e+1)+" 0 R]"):(n("/ColorSpace /"+t.cs),t.cs===this.color_spaces.DEVICE_CMYK&&n("/Decode [1 0 1 0 1 0 1 0]")),n("/BitsPerComponent "+t.bpc),"f"in t&&n("/Filter /"+t.f),"dp"in t&&n("/DecodeParms <<"+t.dp+">>"),"trns"in t&&t.trns.constructor==Array){for(var o="",s=0,a=t.trns.length;a>s;s++)o+=t.trns[s]+" "+t.trns[s]+" ";
n("/Mask ["+o+"]")}if("smask"in t&&n("/SMask "+(e+1)+" 0 R"),n("/Length "+t.data.length+">>"),i(t.data),n("endobj"),"smask"in t){var c="/Predictor 15 /Colors 1 /BitsPerComponent "+t.bpc+" /Columns "+t.w,u={w:t.w,h:t.h,cs:"DeviceGray",bpc:t.bpc,dp:c,data:t.smask};"f"in t&&(u.f=t.f),r.call(this,u)}t.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),n("<< /Length "+t.pal.length+">>"),i(this.arrayBufferToBinaryString(new Uint8Array(t.pal))),n("endobj"))},i=function(){var t=this.internal.collections[e+"images"];for(var n in t)r.call(this,t[n])},o=function(){var t,n=this.internal.collections[e+"images"],r=this.internal.write;for(var i in n)t=n[i],r("/I"+t.i,t.n,"0","R")},s=function(e){return e&&"string"==typeof e&&(e=e.toUpperCase()),e in t.image_compression?e:t.image_compression.NONE},a=function(){var t=this.internal.collections[e+"images"];return t||(this.internal.collections[e+"images"]=t={},this.internal.events.subscribe("putResources",i),this.internal.events.subscribe("putXobjectDict",o)),t},c=function(t){var e=0;return t&&(e=Object.keys?Object.keys(t).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(t)),e},u=function(t){return"undefined"==typeof t||null===t},l=function(e){return"string"==typeof e&&t.sHashCode(e)},h=function(t){return-1===n.indexOf(t)},d=function(e){return"function"!=typeof t["process"+e.toUpperCase()]},f=function(t){return"object"==typeof t&&1===t.nodeType},p=function(t,e,n){if("IMG"===t.nodeName&&t.hasAttribute("src")){var r=""+t.getAttribute("src");if(!n&&0===r.indexOf("data:image/"))return r;!e&&/\.png(?:[?#].*)?$/i.test(r)&&(e="png")}if("CANVAS"===t.nodeName)var i=t;else{var i=document.createElement("canvas");i.width=t.clientWidth||t.width,i.height=t.clientHeight||t.height;var o=i.getContext("2d");if(!o)throw"addImage requires canvas to be supported by browser.";if(n){var s,a,c,u,l,h,d,f,p=Math.PI/180;"object"==typeof n&&(s=n.x,a=n.y,c=n.bg,n=n.angle),f=n*p,u=Math.abs(Math.cos(f)),l=Math.abs(Math.sin(f)),h=i.width,d=i.height,i.width=d*l+h*u,i.height=d*u+h*l,isNaN(s)&&(s=i.width/2),isNaN(a)&&(a=i.height/2),o.clearRect(0,0,i.width,i.height),o.fillStyle=c||"white",o.fillRect(0,0,i.width,i.height),o.save(),o.translate(s,a),o.rotate(f),o.drawImage(t,-(h/2),-(d/2)),o.rotate(-f),o.translate(-s,-a),o.restore()}else o.drawImage(t,0,0,i.width,i.height)}return i.toDataURL("png"==(""+e).toLowerCase()?"image/png":"image/jpeg")},m=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n},g=function(t,e,n){return t||e||(t=-96,e=-96),0>t&&(t=-1*n.w*72/t/this.internal.scaleFactor),0>e&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]},w=function(t,e,n,r,i,o,s){var a=g.call(this,n,r,i),c=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString;n=a[0],r=a[1],s[o]=i,this.internal.write("q",c(n),"0 0",c(r),c(t),u(e+r),"cm /I"+i.i,"Do Q")};t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPERATION:"Seperation",DEVICE_N:"DeviceN"},t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},t.sHashCode=function(t){return Array.prototype.reduce&&t.split("").reduce(function(t,e){return t=(t<<5)-t+e.charCodeAt(0),t&t},0)},t.isString=function(t){return"string"==typeof t},t.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t)},t.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},t.isArrayBuffer=function(t){return this.supportsArrayBuffer()?t instanceof ArrayBuffer:!1},t.isArrayBufferView=function(t){return this.supportsArrayBuffer()?"undefined"==typeof Uint32Array?!1:t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array:!1},t.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;e>r;r++)n[r]=t.charCodeAt(r);return n},t.arrayBufferToBinaryString=function(t){if("TextDecoder"in window){var e=new TextDecoder("ascii");return e.decode(t)}this.isArrayBuffer(t)&&(t=new Uint8Array(t));for(var n="",r=t.byteLength,i=0;r>i;i++)n+=String.fromCharCode(t[i]);return n},t.arrayBufferToBase64=function(t){for(var e,n,r,i,o,s="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=new Uint8Array(t),u=c.byteLength,l=u%3,h=u-l,d=0;h>d;d+=3)o=c[d]<<16|c[d+1]<<8|c[d+2],e=(16515072&o)>>18,n=(258048&o)>>12,r=(4032&o)>>6,i=63&o,s+=a[e]+a[n]+a[r]+a[i];return 1==l?(o=c[h],e=(252&o)>>2,n=(3&o)<<4,s+=a[e]+a[n]+"=="):2==l&&(o=c[h]<<8|c[h+1],e=(64512&o)>>10,n=(1008&o)>>4,r=(15&o)<<2,s+=a[e]+a[n]+a[r]+"="),s},t.createImageInfo=function(t,e,n,r,i,o,s,a,c,u,l,h){var d={alias:a,w:e,h:n,cs:r,bpc:i,i:s,data:t};return o&&(d.f=o),c&&(d.dp=c),u&&(d.trns=u),l&&(d.pal=l),h&&(d.smask=h),d},t.addImage=function(t,e,r,i,o,g,y,v,b){if("string"!=typeof e){var x=g;g=o,o=i,i=r,r=e,e=x}if("object"==typeof t&&!f(t)&&"imageData"in t){var k=t;t=k.imageData,e=k.format||e,r=k.x||r||0,i=k.y||i||0,o=k.w||o,g=k.h||g,y=k.alias||y,v=k.compression||v,b=k.rotation||k.angle||b}if(isNaN(r)||isNaN(i))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var A,C=a.call(this);if(!(A=m(t,C))){var E;if(f(t)&&(t=p(t,e,b)),u(y)&&(y=l(t)),!(A=m(y,C))){if(this.isString(t)){var S=this.extractInfoFromBase64DataURI(t);S?(e=S[2],t=atob(S[3])):137===t.charCodeAt(0)&&80===t.charCodeAt(1)&&78===t.charCodeAt(2)&&71===t.charCodeAt(3)&&(e="png")}if(e=(e||"JPEG").toLowerCase(),h(e))throw new Error("addImage currently only supports formats "+n+", not '"+e+"'");if(d(e))throw new Error("please ensure that the plugin for '"+e+"' support is added");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(E=t,t=this.binaryStringToUint8Array(t))),A=this["process"+e.toUpperCase()](t,c(C),y,s(v),E),!A)throw new Error("An unkwown error occurred whilst processing the image")}}return w.call(this,r,i,o,g,A,A.i,C),this};var y=function(t){var e,n,r;if(255===!t.charCodeAt(0)||216===!t.charCodeAt(1)||255===!t.charCodeAt(2)||224===!t.charCodeAt(3)||!t.charCodeAt(6)==="J".charCodeAt(0)||!t.charCodeAt(7)==="F".charCodeAt(0)||!t.charCodeAt(8)==="I".charCodeAt(0)||!t.charCodeAt(9)==="F".charCodeAt(0)||0===!t.charCodeAt(10))throw new Error("getJpegSize requires a binary string jpeg file");for(var i=256*t.charCodeAt(4)+t.charCodeAt(5),o=4,s=t.length;s>o;){if(o+=i,255!==t.charCodeAt(o))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(o+1)||193===t.charCodeAt(o+1)||194===t.charCodeAt(o+1)||195===t.charCodeAt(o+1)||196===t.charCodeAt(o+1)||197===t.charCodeAt(o+1)||198===t.charCodeAt(o+1)||199===t.charCodeAt(o+1))return n=256*t.charCodeAt(o+5)+t.charCodeAt(o+6),e=256*t.charCodeAt(o+7)+t.charCodeAt(o+8),r=t.charCodeAt(o+9),[e,n,r];o+=2,i=256*t.charCodeAt(o)+t.charCodeAt(o+1)}},v=function(t){var e=t[0]<<8|t[1];if(65496!==e)throw new Error("Supplied data is not a JPEG");for(var n,r,i,o,s=t.length,a=(t[4]<<8)+t[5],c=4;s>c;){if(c+=a,n=b(t,c),a=(n[2]<<8)+n[3],(192===n[1]||194===n[1])&&255===n[0]&&a>7)return n=b(t,c+5),r=(n[2]<<8)+n[3],i=(n[0]<<8)+n[1],o=n[4],{width:r,height:i,numcomponents:o};c+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")},b=function(t,e){return t.subarray(e,e+5)};t.processJPEG=function(t,e,n,r,i){var o,s=this.color_spaces.DEVICE_RGB,a=this.decode.DCT_DECODE,c=8;return this.isString(t)?(o=y(t),this.createImageInfo(t,o[0],o[1],1==o[3]?this.color_spaces.DEVICE_GRAY:s,c,a,e,n)):(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)?(o=v(t),t=i||this.arrayBufferToBinaryString(t),this.createImageInfo(t,o.width,o.height,1==o.numcomponents?this.color_spaces.DEVICE_GRAY:s,c,a,e,n)):null)},t.processJPG=function(){return this.processJPEG.apply(this,arguments)}}(jsPDF.API),function(t){"use strict";var e={annotations:[],f2:function(t){return t.toFixed(2)},notEmpty:function(t){return"undefined"!=typeof t&&""!=t?!0:void 0}};return jsPDF.API.annotationPlugin=e,jsPDF.API.events.push(["addPage",function(t){this.annotationPlugin.annotations[t.pageNumber]=[]}]),t.events.push(["putPage",function(t){for(var n=this.annotationPlugin.annotations[t.pageNumber],r=!1,i=0;i<n.length&&!r;i++){var o=n[i];switch(o.type){case"link":if(e.notEmpty(o.options.url)||e.notEmpty(o.options.pageNumber)){r=!0;break}case"reference":case"text":case"freetext":r=!0}}if(0!=r){this.internal.write("/Annots [");for(var s=this.annotationPlugin.f2,a=this.internal.scaleFactor,c=this.internal.pageSize.height,u=this.internal.getPageInfo(t.pageNumber),i=0;i<n.length;i++){var o=n[i];switch(o.type){case"reference":this.internal.write(" "+o.object.objId+" 0 R ");break;case"text":var l=this.internal.newAdditionalObject(),h=this.internal.newAdditionalObject(),d=o.title||"Note",f="/Rect ["+s(o.bounds.x*a)+" "+s(c-(o.bounds.y+o.bounds.h)*a)+" "+s((o.bounds.x+o.bounds.w)*a)+" "+s((c-o.bounds.y)*a)+"] ";y="<</Type /Annot /Subtype /Text "+f+"/Contents ("+o.contents+")",y+=" /Popup "+h.objId+" 0 R",y+=" /P "+u.objId+" 0 R",y+=" /T ("+d+") >>",l.content=y;var p=l.objId+" 0 R",m=30,f="/Rect ["+s((o.bounds.x+m)*a)+" "+s(c-(o.bounds.y+o.bounds.h)*a)+" "+s((o.bounds.x+o.bounds.w+m)*a)+" "+s((c-o.bounds.y)*a)+"] ";y="<</Type /Annot /Subtype /Popup "+f+" /Parent "+p,o.open&&(y+=" /Open true"),y+=" >>",h.content=y,this.internal.write(l.objId,"0 R",h.objId,"0 R");break;case"freetext":var f="/Rect ["+s(o.bounds.x*a)+" "+s((c-o.bounds.y)*a)+" "+s(o.bounds.x+o.bounds.w*a)+" "+s(c-(o.bounds.y+o.bounds.h)*a)+"] ",g=o.color||"#000000";y="<</Type /Annot /Subtype /FreeText "+f+"/Contents ("+o.contents+")",y+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+g+")",y+=" /Border [0 0 0]",y+=" >>",this.internal.write(y);break;case"link":if(o.options.name){var w=this.annotations._nameMap[o.options.name];o.options.pageNumber=w.page,o.options.top=w.y}else o.options.top||(o.options.top=0);var f="/Rect ["+s(o.x*a)+" "+s((c-o.y)*a)+" "+s(o.x+o.w*a)+" "+s(c-(o.y+o.h)*a)+"] ",y="";if(o.options.url)y="<</Type /Annot /Subtype /Link "+f+"/Border [0 0 0] /A <</S /URI /URI ("+o.options.url+") >>";else if(o.options.pageNumber){var t=this.internal.getPageInfo(o.options.pageNumber);switch(y="<</Type /Annot /Subtype /Link "+f+"/Border [0 0 0] /Dest ["+t.objId+" 0 R",o.options.magFactor=o.options.magFactor||"XYZ",o.options.magFactor){case"Fit":y+=" /Fit]";break;case"FitH":y+=" /FitH "+o.options.top+"]";break;case"FitV":o.options.left=o.options.left||0,y+=" /FitV "+o.options.left+"]";break;case"XYZ":default:var v=s((c-o.options.top)*a);o.options.left=o.options.left||0,"undefined"==typeof o.options.zoom&&(o.options.zoom=0),y+=" /XYZ "+o.options.left+" "+v+" "+o.options.zoom+"]"}}""!=y&&(y+=" >>",this.internal.write(y))}}this.internal.write("]")}}]),t.createAnnotation=function(t){switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t)}},t.link=function(t,e,n,r,i){this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.link=function(t,e,n,r,i){this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.textWithLink=function(t,e,n,r){var i=this.getTextWidth(t),o=this.internal.getLineHeight();return this.text(t,e,n),n+=.2*o,this.link(e,n-o,i,o,r),i},t.getTextWidth=function(t){var e=this.internal.getFontSize(),n=this.getStringUnitWidth(t)*e/this.internal.scaleFactor;return n},t.getLineHeight=function(){return this.internal.getLineHeight()},this}(jsPDF.API),function(t){"use strict";t.autoPrint=function(){var t;return this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.write("<< /S/Named /Type/Action /N/Print >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.write("/OpenAction "+t+" 0 R")}),this}}(jsPDF.API),function(t){"use strict";return t.events.push(["initialized",function(){this.canvas.pdf=this}]),t.canvas={getContext:function(t){return this.pdf.context2d},style:{}},Object.defineProperty(t.canvas,"width",{get:function(){return this._width},set:function(t){this._width=t,this.getContext("2d").pageWrapX=t+1}}),Object.defineProperty(t.canvas,"height",{get:function(){return this._height},set:function(t){this._height=t,this.getContext("2d").pageWrapY=t+1}}),this}(jsPDF.API),function(t){"use strict";var e,n,r,i,o=3,s=13,a={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},c=1,u=function(t,e,n,r,i){a={x:t,y:e,w:n,h:r,ln:i}},l=function(){return a},h={left:0,top:0,bottom:0};t.setHeaderFunction=function(t){i=t},t.getTextDimensions=function(t){e=this.internal.getFont().fontName,n=this.table_font_size||this.internal.getFontSize(),r=this.internal.getFont().fontStyle;var i,o,s=19.049976/25.4;o=document.createElement("font"),o.id="jsPDFCell";try{o.style.fontStyle=r}catch(a){o.style.fontWeight=r}o.style.fontName=e,o.style.fontSize=n+"pt";try{o.textContent=t}catch(a){o.innerText=t}return document.body.appendChild(o),i={w:(o.offsetWidth+1)*s,h:(o.offsetHeight+1)*s},document.body.removeChild(o),i},t.cellAddPage=function(){var t=this.margins||h;this.addPage(),u(t.left,t.top,void 0,void 0),c+=1},t.cellInitialize=function(){a={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},c=1},t.cell=function(t,e,n,r,i,a,c){var d=l(),f=!1;if(void 0!==d.ln)if(d.ln===a)t=d.x+d.w,e=d.y;else{var p=this.margins||h;d.y+d.h+r+s>=this.internal.pageSize.height-p.bottom&&(this.cellAddPage(),f=!0,this.printHeaders&&this.tableHeaderRow&&this.printHeaderRow(a,!0)),e=l().y+l().h,f&&(e=s+10)}if(void 0!==i[0])if(this.printingHeaderRow?this.rect(t,e,n,r,"FD"):this.rect(t,e,n,r),"right"===c){i instanceof Array||(i=[i]);for(var m=0;m<i.length;m++){var g=i[m],w=this.getStringUnitWidth(g)*this.internal.getFontSize();this.text(g,t+n-w-o,e+this.internal.getLineHeight()*(m+1))}}else this.text(i,t+o,e+this.internal.getLineHeight());return u(t,e,n,r,a),this},t.arrayMax=function(t,e){var n,r,i,o=t[0];for(n=0,r=t.length;r>n;n+=1)i=t[n],e?-1===e(o,i)&&(o=i):i>o&&(o=i);return o},t.table=function(e,n,r,i,o){if(!r)throw"No data for PDF table";var s,u,l,d,f,p,m,g,w,y,v=[],b=[],x={},k={},A=[],C=[],E=!1,S=!0,F=12,T=h;if(T.width=this.internal.pageSize.width,o&&(o.autoSize===!0&&(E=!0),o.printHeaders===!1&&(S=!1),o.fontSize&&(F=o.fontSize),o.css["font-size"]&&(F=16*o.css["font-size"]),o.margins&&(T=o.margins)),this.lnMod=0,a={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},c=1,this.printHeaders=S,this.margins=T,this.setFontSize(F),this.table_font_size=F,void 0===i||null===i)v=Object.keys(r[0]);else if(i[0]&&"string"!=typeof i[0]){var P=19.049976/25.4;for(u=0,l=i.length;l>u;u+=1)s=i[u],v.push(s.name),b.push(s.prompt),k[s.name]=s.width*P}else v=i;if(E)for(y=function(t){return t[s]},u=0,l=v.length;l>u;u+=1){for(s=v[u],x[s]=r.map(y),A.push(this.getTextDimensions(b[u]||s).w),p=x[s],m=0,d=p.length;d>m;m+=1)f=p[m],A.push(this.getTextDimensions(f).w);k[s]=t.arrayMax(A),A=[]}if(S){var _=this.calculateLineHeight(v,k,b.length?b:v);for(u=0,l=v.length;l>u;u+=1)s=v[u],C.push([e,n,k[s],_,String(b.length?b[u]:s)]);this.setTableHeaderRow(C),this.printHeaderRow(1,!1)}for(u=0,l=r.length;l>u;u+=1){var _;for(g=r[u],_=this.calculateLineHeight(v,k,g),m=0,w=v.length;w>m;m+=1)s=v[m],this.cell(e,n,k[s],_,g[s],u+2,s.align)}return this.lastCellPos=a,this.table_x=e,this.table_y=n,this},t.calculateLineHeight=function(t,e,n){for(var r,i=0,s=0;s<t.length;s++){r=t[s],n[r]=this.splitTextToSize(String(n[r]),e[r]-o);var a=this.internal.getLineHeight()*n[r].length+o;a>i&&(i=a)}return i},t.setTableHeaderRow=function(t){this.tableHeaderRow=t},t.printHeaderRow=function(t,e){if(!this.tableHeaderRow)throw"Property tableHeaderRow does not exist.";var n,r,o,a;if(this.printingHeaderRow=!0,void 0!==i){var l=i(this,c);u(l[0],l[1],l[2],l[3],-1)}this.setFontStyle("bold");var h=[];for(o=0,a=this.tableHeaderRow.length;a>o;o+=1)this.setFillColor(200,200,200),n=this.tableHeaderRow[o],e&&(this.margins.top=s,n[1]=this.margins&&this.margins.top||0,h.push(n)),r=[].concat(n),this.cell.apply(this,r.concat(t));h.length>0&&this.setTableHeaderRow(h),this.setFontStyle("normal"),this.printingHeaderRow=!1}}(jsPDF.API),function(t){"use strict";function e(){this.fillStyle="#000000",this.strokeStyle="#000000",this.font="12pt times",this.textBaseline="alphabetic",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this._translate={x:0,y:0},this.copy=function(t){this.fillStyle=t.fillStyle,this.strokeStyle=t.strokeStyle,this.font=t.font,this.lineWidth=t.lineWidth,this.lineJoin=t.lineJoin,this.lineCap=t.lineCap,this.textBaseline=t.textBaseline,this._fontSize=t._fontSize,this._translate={x:t._translate.x,y:t._translate.y}}}t.events.push(["initialized",function(){this.context2d.pdf=this,this.context2d.internal.pdf=this,this.context2d.ctx=new e,this.context2d.ctxStack=[],this.context2d.path=[]}]),t.context2d={pageWrapXEnabled:!1,pageWrapYEnabled:!0,pageWrapX:9999999,pageWrapY:9999999,f2:function(t){return t.toFixed(2)},fillRect:function(t,e,n,r){t=this._wrapX(t),e=this._wrapY(e),this.pdf.rect(t,e,n,r,"f")},strokeRect:function(t,e,n,r){t=this._wrapX(t),e=this._wrapY(e),this.pdf.rect(t,e,n,r,"s")},clearRect:function(t,e,n,r){t=this._wrapX(t),e=this._wrapY(e),this.save(),this.setFillStyle("#ffffff"),this.pdf.rect(t,e,n,r,"f"),this.restore()},save:function(){this.ctx._fontSize=this.pdf.internal.getFontSize();var t=new e;t.copy(this.ctx),this.ctxStack.push(this.ctx),this.ctx=t},restore:function(){this.ctx=this.ctxStack.pop(),this.setFillStyle(this.ctx.fillStyle),this.setStrokeStyle(this.ctx.strokeStyle),this.setFont(this.ctx.font),this.pdf.setFontSize(this.ctx._fontSize),this.setLineCap(this.ctx.lineCap),this.setLineWidth(this.ctx.lineWidth),this.setLineJoin(this.ctx.lineJoin)},beginPath:function(){this.path=[]},closePath:function(){this.path.push({type:"close"})},setFillStyle:function(t){var e,n,r,i,o=this.internal.rxRgb.exec(t);null!=o?(e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3])):(o=this.internal.rxRgba.exec(t),null!=o?(e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3]),i=parseInt(o[4])):("#"!=t.charAt(0)&&(t=CssColors.colorNameToHex(t),t||(t="#000000")),this.ctx.fillStyle=t,4===t.length?(e=this.ctx.fillStyle.substring(1,2),e+=e,n=this.ctx.fillStyle.substring(2,3),n+=n,r=this.ctx.fillStyle.substring(3,4),r+=r):(e=this.ctx.fillStyle.substring(1,3),n=this.ctx.fillStyle.substring(3,5),r=this.ctx.fillStyle.substring(5,7)),e=parseInt(e,16),n=parseInt(n,16),r=parseInt(r,16))),this.pdf.setFillColor(e,n,r,{a:i}),this.pdf.setTextColor(e,n,r,{a:i})},setStrokeStyle:function(t){"#"!=t.charAt(0)&&(t=CssColors.colorNameToHex(t),t||(t="#000000")),this.ctx.strokeStyle=t;var e=this.ctx.strokeStyle.substring(1,3);e=parseInt(e,16);var n=this.ctx.strokeStyle.substring(3,5);n=parseInt(n,16);var r=this.ctx.strokeStyle.substring(5,7);r=parseInt(r,16),this.pdf.setDrawColor(e,n,r)},fillText:function(t,e,n,r){e=this._wrapX(e),n=this._wrapY(n),this.pdf.text(t,e,this._getBaseline(n))},strokeText:function(t,e,n,r){e=this._wrapX(e),n=this._wrapY(n),this.pdf.text(t,e,this._getBaseline(n),{stroke:!0})},setFont:function(t){this.ctx.font=t;var e=/\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+["']?(\w+)['"]?/;if(c=e.exec(t),null!=c){var n=c[1],r=(c[2],c[3]),i=c[4],o=c[5],s=c[6];i="px"===o?Math.floor(parseFloat(i)):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)),this.pdf.setFontSize(i),"bold"===r||"700"===r?this.pdf.setFontStyle("bold"):"italic"===n?this.pdf.setFontStyle("italic"):this.pdf.setFontStyle("normal");var a=s;this.pdf.setFont(a,l)}else{var e=/(\d+)(pt|px|em)\s+(\w+)\s*(\w+)?/,c=e.exec(t);if(null!=c){var u=c[1],a=(c[2],c[3]),l=c[4];l||(l="normal"),u="em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(u)),this.pdf.setFontSize(u),this.pdf.setFont(a,l)}}},setTextBaseline:function(t){this.ctx.textBaseline=t},getTextBaseline:function(){return this.ctx.textBaseline},setLineWidth:function(t){this.ctx.lineWidth=t,this.pdf.setLineWidth(t)},setLineCap:function(t){this.ctx.lineCap=t,this.pdf.setLineCap(t)},setLineJoin:function(t){this.ctx.lineJon=t,this.pdf.setLineJoin(t)},moveTo:function(t,e){t=this._wrapX(t),e=this._wrapY(e);var n={type:"mt",x:t,y:e};this.path.push(n)},_wrapX:function(t){return this.pageWrapXEnabled?t%this.pageWrapX:t},_wrapY:function(t){return this.pageWrapYEnabled?(this._gotoPage(this._page(t)),(t-this.lastBreak)%this.pageWrapY):t},lastBreak:0,pageBreaks:[],_page:function(t){if(this.pageWrapYEnabled){this.lastBreak=0;for(var e=0,n=0,r=0;r<this.pageBreaks.length;r++)if(t>=this.pageBreaks[r]){e++,0===this.lastBreak&&n++;var i=this.pageBreaks[r]-this.lastBreak;this.lastBreak=this.pageBreaks[r];var o=Math.floor(i/this.pageWrapY);n+=o}if(0===this.lastBreak){var o=Math.floor(t/this.pageWrapY)+1;n+=o}return n+e}return this.pdf.internal.getCurrentPageInfo().pageNumber},_gotoPage:function(t){},lineTo:function(t,e){t=this._wrapX(t),e=this._wrapY(e);var n={type:"lt",x:t,y:e};this.path.push(n)},bezierCurveTo:function(t,e,n,r,i,o){t=this._wrapX(t),e=this._wrapY(e),n=this._wrapX(n),r=this._wrapY(r),i=this._wrapX(i),o=this._wrapY(o);var s={type:"bct",x1:t,y1:e,x2:n,y2:r,x:i,y:o};this.path.push(s)},quadraticCurveTo:function(t,e,n,r){t=this._wrapX(t),e=this._wrapY(e),n=this._wrapX(n),r=this._wrapY(r);var i={type:"qct",x1:t,y1:e,x:n,y:r};this.path.push(i)},arc:function(t,e,n,r,i,o){t=this._wrapX(t),e=this._wrapY(e);var s={type:"arc",x:t,y:e,radius:n,startAngle:r,endAngle:i,anticlockwise:o};this.path.push(s)},drawImage:function(t,e,n,r,i,o,s,a,c){void 0!==o&&(e=o,n=s,r=a,i=c),e=this._wrapX(e),n=this._wrapY(n);var u,l=/data:image\/(\w+).*/i,h=l.exec(t);u=null!=h?h[1]:"png",this.pdf.addImage(t,u,e,n,r,i)},stroke:function(){for(var t,e=[],n=!1,r=0;r<this.path.length;r++){var i=this.path[r];switch(i.type){case"mt":t=i,"undefined"!=typeof t&&(this.pdf.lines(e,t.x,t.y,null,"s"),e=[]);break;case"lt":var o=[i.x-this.path[r-1].x,i.y-this.path[r-1].y];e.push(o);break;case"bct":var o=[i.x1-this.path[r-1].x,i.y1-this.path[r-1].y,i.x2-this.path[r-1].x,i.y2-this.path[r-1].y,i.x-this.path[r-1].x,i.y-this.path[r-1].y];e.push(o);break;case"qct":var s=this.path[r-1].x+2/3*(i.x1-this.path[r-1].x),a=this.path[r-1].y+2/3*(i.y1-this.path[r-1].y),c=i.x+2/3*(i.x1-i.x),u=i.y+2/3*(i.y1-i.y),l=i.x,h=i.y,o=[s-this.path[r-1].x,a-this.path[r-1].y,c-this.path[r-1].x,u-this.path[r-1].y,l-this.path[r-1].x,h-this.path[r-1].y];e.push(o);break;case"close":n=!0}}"undefined"!=typeof t&&this.pdf.lines(e,t.x,t.y,null,"s",n);for(var r=0;r<this.path.length;r++){var i=this.path[r];switch(i.type){case"arc":var t=360*i.startAngle/(2*Math.PI),d=360*i.endAngle/(2*Math.PI);this.internal.arc(i.x,i.y,i.radius,t,d,i.anticlockwise,"s")}}this.path=[]},fill:function(){for(var t,e=[],n=0;n<this.path.length;n++){var r=this.path[n];switch(r.type){case"mt":t=r,"undefined"!=typeof t&&(this.pdf.lines(e,t.x,t.y,null,"f"),e=[]);break;case"lt":var i=[r.x-this.path[n-1].x,r.y-this.path[n-1].y];e.push(i);break;case"bct":var i=[r.x1-this.path[n-1].x,r.y1-this.path[n-1].y,r.x2-this.path[n-1].x,r.y2-this.path[n-1].y,r.x-this.path[n-1].x,r.y-this.path[n-1].y];e.push(i);break;case"qct":var o=this.path[n-1].x+2/3*(r.x1-this.path[n-1].x),s=this.path[n-1].y+2/3*(r.y1-this.path[n-1].y),a=r.x+2/3*(r.x1-r.x),c=r.y+2/3*(r.y1-r.y),u=r.x,l=r.y,i=[o-this.path[n-1].x,s-this.path[n-1].y,a-this.path[n-1].x,c-this.path[n-1].y,u-this.path[n-1].x,l-this.path[n-1].y];e.push(i)}}"undefined"!=typeof t&&this.pdf.lines(e,t.x,t.y,null,"f");for(var n=0;n<this.path.length;n++){var r=this.path[n];switch(r.type){case"arc":var t=360*r.startAngle/(2*Math.PI),h=360*r.endAngle/(2*Math.PI);this.internal.arc(r.x,r.y,r.radius,t,h,r.anticlockwise,"f");break;case"close":this.pdf.internal.out("h")}}this.path=[]},clip:function(){},translate:function(t,e){this.ctx._translate={x:t,y:e}},measureText:function(t){var e=this.pdf;return{getWidth:function(){var n=e.internal.getFontSize(),r=e.getStringUnitWidth(t)*n/e.internal.scaleFactor;return r},get width(){return this.getWidth(t)}}},_getBaseline:function(t){var e=parseInt(this.pdf.internal.getFontSize()),n=.25*e;switch(this.ctx.textBaseline){case"bottom":return t-n;case"top":return t+e;case"hanging":return t+e-n;case"middle":return t+e/2-n;case"ideographic":return t;case"alphabetic":default:return t}}};var n=t.context2d;return Object.defineProperty(n,"fillStyle",{set:function(t){this.setFillStyle(t)},get:function(){return this.ctx.fillStyle}}),Object.defineProperty(n,"textBaseline",{set:function(t){this.setTextBaseline(t)},get:function(){return this.getTextBaseline()}}),Object.defineProperty(n,"font",{set:function(t){this.setFont(t)},get:function(){return this.getFont()}}),n.internal={},n.internal.rxRgb=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/,n.internal.rxRgba=/rgba\s*\(\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/,n.internal.arc=function(t,e,n,r,i,o,s){for(var a=this.pdf.internal.scaleFactor,c=this.pdf.internal.pageSize.height,u=this.pdf.internal.f2,l=r*(Math.PI/180),h=i*(Math.PI/180),d=this.createArc(n,l,h,o),f=0;f<d.length;f++){var p=d[f];0==f?this.pdf.internal.out([u((p.x1+t)*a),u((c-(p.y1+e))*a),"m",u((p.x2+t)*a),u((c-(p.y2+e))*a),u((p.x3+t)*a),u((c-(p.y3+e))*a),u((p.x4+t)*a),u((c-(p.y4+e))*a),"c"].join(" ")):this.pdf.internal.out([u((p.x2+t)*a),u((c-(p.y2+e))*a),u((p.x3+t)*a),u((c-(p.y3+e))*a),u((p.x4+t)*a),u((c-(p.y4+e))*a),"c"].join(" "))}null!==s&&this.pdf.internal.out(this.pdf.internal.getStyle(s))},n.internal.createArc=function(t,e,n,r){var i=1e-5,o=2*Math.PI,s=e;(o>s||s>o)&&(s%=o);var a=n;(o>a||a>o)&&(a%=o);for(var c=[],u=Math.PI/2,l=r?-1:1,h=e,d=Math.min(o,Math.abs(a-s));d>i;){var f=h+l*Math.min(d,u);c.push(this.createSmallArc(t,h,f)),d-=Math.abs(f-h),h=f}return c},n.internal.createSmallArc=function(t,e,n){var r=(n-e)/2,i=t*Math.cos(r),o=t*Math.sin(r),s=i,a=-o,c=s*s+a*a,u=c+s*i+a*o,l=4/3*(Math.sqrt(2*c*u)-u)/(s*o-a*i),h=s-l*a,d=a+l*s,f=h,p=-d,m=r+e,g=Math.cos(m),w=Math.sin(m);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:h*g-d*w,y2:h*w+d*g,x3:f*g-p*w,y3:f*w+p*g,x4:t*Math.cos(n),y4:t*Math.sin(n)}},this}(jsPDF.API),function(t){var e,n,r,i,o,s,a,c,u,l,h,d,f,p,m,g,w,y,v;e=function(){function t(){}return function(e){return t.prototype=e,new t}}(),u=function(t){var e,n,r,i,o,s,a;for(n=0,r=t.length,e=void 0,i=!1,s=!1;!i&&n!==r;)e=t[n]=t[n].trimLeft(),e&&(i=!0),n++;for(n=r-1;r&&!s&&-1!==n;)e=t[n]=t[n].trimRight(),e&&(s=!0),n--;for(o=/\s+$/g,a=!0,n=0;n!==r;)"\u2028"!=t[n]&&(e=t[n].replace(/\s+/g," "),a&&(e=e.trimLeft()),e&&(a=o.test(e)),t[n]=e),n++;return t},l=function(t,e,n,r){return this.pdf=t,this.x=e,this.y=n,this.settings=r,this.watchFunctions=[],this.init(),this},h=function(t){var e,n,i;for(e=void 0,i=t.split(","),n=i.shift();!e&&n;)e=r[n.trim().toLowerCase()],n=i.shift();return e},d=function(t){t="auto"===t?"0px":t,t.indexOf("em")>-1&&!isNaN(Number(t.replace("em","")))&&(t=18.719*Number(t.replace("em",""))+"px"),t.indexOf("pt")>-1&&!isNaN(Number(t.replace("pt","")))&&(t=1.333*Number(t.replace("pt",""))+"px");var e,n,r;return n=void 0,e=16,(r=f[t])?r:(r={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[{css_line_height_string:t}],r!==n?f[t]=r/e:(r=parseFloat(t))?f[t]=r/e:(r=t.match(/([\d\.]+)(px)/),3===r.length?f[t]=parseFloat(r[1])/e:f[t]=1))},c=function(t){var e,n,r;return r=function(t){var e;return e=function(t){return document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle?t.currentStyle:t.style}(t),function(t){return t=t.replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()}),e[t]}}(t),e={},n=void 0,e["font-family"]=h(r("font-family"))||"times",e["font-style"]=i[r("font-style")]||"normal",e["text-align"]=TextAlignMap[r("text-align")]||"left",n=o[r("font-weight")]||"normal","bold"===n&&("normal"===e["font-style"]?e["font-style"]=n:e["font-style"]=n+e["font-style"]),e["font-size"]=d(r("font-size"))||1,e["line-height"]=d(r("line-height"))||1,e.display="inline"===r("display")?"inline":"block",n="block"===e.display,e["margin-top"]=n&&d(r("margin-top"))||0,e["margin-bottom"]=n&&d(r("margin-bottom"))||0,e["padding-top"]=n&&d(r("padding-top"))||0,e["padding-bottom"]=n&&d(r("padding-bottom"))||0,e["margin-left"]=n&&d(r("margin-left"))||0,e["margin-right"]=n&&d(r("margin-right"))||0,e["padding-left"]=n&&d(r("padding-left"))||0,e["padding-right"]=n&&d(r("padding-right"))||0,e["page-break-before"]=r("page-break-before")||"auto",e["float"]=s[r("cssFloat")]||"none",e.clear=a[r("clear")]||"none",e.color=r("color"),e},p=function(t,e,n){var r,i,o,s,a;if(o=!1,i=void 0,s=void 0,a=void 0,r=n["#"+t.id])if("function"==typeof r)o=r(t,e);else for(i=0,s=r.length;!o&&i!==s;)o=r[i](t,e),i++;if(r=n[t.nodeName],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,s=r.length;!o&&i!==s;)o=r[i](t,e),i++;return o},v=function(t,e){var n,r,i,o,s,a,c,u,l,h;for(n=[],r=[],i=0,h=t.rows[0].cells.length,u=t.clientWidth;h>i;)l=t.rows[0].cells[i],r[i]={name:l.textContent.toLowerCase().replace(/\s+/g,""),prompt:l.textContent.replace(/\r?\n/g,""),width:l.clientWidth/u*e.pdf.internal.pageSize.width},i++;for(i=1;i<t.rows.length;){for(a=t.rows[i],s={},o=0;o<a.cells.length;)s[r[o].name]=a.cells[o].textContent.replace(/\r?\n/g,""),o++;n.push(s),i++}return c={rows:n,headers:r}};var b={SCRIPT:1,STYLE:1,NOSCRIPT:1,OBJECT:1,EMBED:1,SELECT:1},x=1;n=function(t,r,i){var o,s,a,u,l,h,d,f,g;for(s=t.childNodes,o=void 0,a=c(t),l="block"===a.display,l&&(r.setBlockBoundary(),r.setBlockStyle(a)),d=19.049976/25.4,u=0,h=s.length;h>u;){if(o=s[u],"object"==typeof o){if(r.executeWatchFunctions(o),1===o.nodeType&&"HEADER"===o.nodeName){var w=o,y=r.pdf.margins_doc.top;r.pdf.internal.events.subscribe("addPage",function(t){r.y=y,n(w,r,i),r.pdf.margins_doc.top=r.y+10,r.y+=10},!1)}if(8===o.nodeType&&"#comment"===o.nodeName)~o.textContent.indexOf("ADD_PAGE")&&(r.pdf.addPage(),r.y=r.pdf.margins_doc.top);else if(1!==o.nodeType||b[o.nodeName])if(3===o.nodeType){var k=o.nodeValue;if(o.nodeValue&&"LI"===o.parentNode.nodeName)if("OL"===o.parentNode.parentNode.nodeName)k=x++ +". "+k;else{var A=a["font-size"];offsetX=(3-.75*A)*r.pdf.internal.scaleFactor,offsetY=.75*A*r.pdf.internal.scaleFactor,radius=1.74*A/r.pdf.internal.scaleFactor,g=function(t,e){this.pdf.circle(t+offsetX,e+offsetY,radius,"FD")}}o.ownerDocument.body.contains(o)&&r.addText(k,a)}else"string"==typeof o&&r.addText(o,a);else{var C;if("IMG"===o.nodeName){var E=o.getAttribute("src");C=m[r.pdf.sHashCode(E)||E]}if(C){r.pdf.internal.pageSize.height-r.pdf.margins_doc.bottom<r.y+o.height&&r.y>r.pdf.margins_doc.top&&(r.pdf.addPage(),r.y=r.pdf.margins_doc.top,r.executeWatchFunctions(o));var S=c(o),F=r.x,T=12/r.pdf.internal.scaleFactor,P=(S["margin-left"]+S["padding-left"])*T,_=(S["margin-right"]+S["padding-right"])*T,I=(S["margin-top"]+S["padding-top"])*T,q=(S["margin-bottom"]+S["padding-bottom"])*T;F+=void 0!==S["float"]&&"right"===S["float"]?r.settings.width-o.width-_:P,r.pdf.addImage(C,F,r.y+I,o.width,o.height),C=void 0,"right"===S["float"]||"left"===S["float"]?(r.watchFunctions.push(function(t,e,n,i){return r.y>=e?(r.x+=t,r.settings.width+=n,!0):i&&1===i.nodeType&&!b[i.nodeName]&&r.x+i.width>r.pdf.margins_doc.left+r.pdf.margins_doc.width?(r.x+=t,r.y=e,r.settings.width+=n,!0):!1}.bind(this,"left"===S["float"]?-o.width-P-_:0,r.y+o.height+I+q,o.width)),r.watchFunctions.push(function(t,e,n){return r.y<t&&e===r.pdf.internal.getNumberOfPages()?1===n.nodeType&&"both"===c(n).clear?(r.y=t,
!0):!1:!0}.bind(this,r.y+o.height,r.pdf.internal.getNumberOfPages())),r.settings.width-=o.width+P+_,"left"===S["float"]&&(r.x+=o.width+P+_)):r.y+=o.height+I+q}else if("TABLE"===o.nodeName)f=v(o,r),r.y+=10,r.pdf.table(r.x,r.y,f.rows,f.headers,{autoSize:!1,printHeaders:i.printHeaders,margins:r.pdf.margins_doc,css:c(o)}),r.y=r.pdf.lastCellPos.y+r.pdf.lastCellPos.h+20;else if("OL"===o.nodeName||"UL"===o.nodeName)x=1,p(o,r,i)||n(o,r,i),r.y+=10;else if("LI"===o.nodeName){var O=r.x;r.x+=20/r.pdf.internal.scaleFactor,r.y+=3,p(o,r,i)||n(o,r,i),r.x=O}else"BR"===o.nodeName?(r.y+=a["font-size"]*r.pdf.internal.scaleFactor,r.addText("\u2028",e(a))):p(o,r,i)||n(o,r,i)}}u++}return i.outY=r.y,l?r.setBlockBoundary(g):void 0},m={},g=function(t,e,n,r){function i(){e.pdf.internal.events.publish("imagesLoaded"),r(s)}function o(t,n,r){if(t){var o=new Image;s=++u,o.crossOrigin="",o.onerror=o.onload=function(){if(o.complete&&(0===o.src.indexOf("data:image/")&&(o.width=n||o.width||0,o.height=r||o.height||0),o.width+o.height)){var s=e.pdf.sHashCode(t)||t;m[s]=m[s]||o}--u||i()},o.src=t}}for(var s,a=t.getElementsByTagName("img"),c=a.length,u=0;c--;)o(a[c].getAttribute("src"),a[c].width,a[c].height);return u||i()},w=function(t,e,r){var i=t.getElementsByTagName("footer");if(i.length>0){i=i[0];var o=e.pdf.internal.write,s=e.y;e.pdf.internal.write=function(){},n(i,e,r);var a=Math.ceil(e.y-s)+5;e.y=s,e.pdf.internal.write=o,e.pdf.margins_doc.bottom+=a;for(var c=function(t){var o=void 0!==t?t.pageNumber:1,s=e.y;e.y=e.pdf.internal.pageSize.height-e.pdf.margins_doc.bottom,e.pdf.margins_doc.bottom-=a;for(var c=i.getElementsByTagName("span"),u=0;u<c.length;++u)(" "+c[u].className+" ").replace(/[\n\t]/g," ").indexOf(" pageCounter ")>-1&&(c[u].innerHTML=o),(" "+c[u].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")>-1&&(c[u].innerHTML="###jsPDFVarTotalPages###");n(i,e,r),e.pdf.margins_doc.bottom+=a,e.y=s},u=i.getElementsByTagName("span"),l=0;l<u.length;++l)(" "+u[l].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")>-1&&e.pdf.internal.events.subscribe("htmlRenderingFinished",e.pdf.putTotalPages.bind(e.pdf,"###jsPDFVarTotalPages###"),!0);e.pdf.internal.events.subscribe("addPage",c,!1),c(),b.FOOTER=1}},y=function(t,e,r,i,o,s){if(!e)return!1;"string"==typeof e||e.parentNode||(e=""+e.innerHTML),"string"==typeof e&&(e=function(t){var e,n,r,i;return r="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),i="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",n=document.createElement("div"),n.style.cssText=i,n.innerHTML='<iframe style="height:1px;width:1px" name="'+r+'" />',document.body.appendChild(n),e=window.frames[r],e.document.open(),e.document.writeln(t),e.document.close(),e.document.body}(e.replace(/<\/?script[^>]*?>/gi,"")));var a,c=new l(t,r,i,o);return g.call(this,e,c,o.elementHandlers,function(t){w(e,c,o.elementHandlers),n(e,c,o.elementHandlers),c.pdf.internal.events.publish("htmlRenderingFinished"),a=c.dispose(),"function"==typeof s?s(a):t&&console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")}),a||{x:c.x,y:c.y}},l.prototype.init=function(){return this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},l.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y,ready:!0}},l.prototype.executeWatchFunctions=function(t){var e=!1,n=[];if(this.watchFunctions.length>0){for(var r=0;r<this.watchFunctions.length;++r)this.watchFunctions[r](t)===!0?e=!0:n.push(this.watchFunctions[r]);this.watchFunctions=n}return e},l.prototype.splitFragmentsIntoLines=function(t,n){var r,i,o,s,a,c,u,l,h,d,f,p,m,g,w;for(i=12,f=this.pdf.internal.scaleFactor,a={},o=void 0,d=void 0,s=void 0,c=void 0,w=void 0,h=void 0,l=void 0,u=void 0,p=[],m=[p],r=0,g=this.settings.width;t.length;)if(c=t.shift(),w=n.shift(),c)if(o=w["font-family"],d=w["font-style"],s=a[o+d],s||(s=this.pdf.internal.getFont(o,d).metadata.Unicode,a[o+d]=s),h={widths:s.widths,kerning:s.kerning,fontSize:w["font-size"]*i,textIndent:r},l=this.pdf.getStringUnitWidth(c,h)*h.fontSize/f,"\u2028"==c)p=[],m.push(p);else if(r+l>g){for(u=this.pdf.splitTextToSize(c,g,h),p.push([u.shift(),w]);u.length;)p=[[u.shift(),w]],m.push(p);r=this.pdf.getStringUnitWidth(p[0][0],h)*h.fontSize/f}else p.push([c,w]),r+=l;if(void 0!==w["text-align"]&&("center"===w["text-align"]||"right"===w["text-align"]||"justify"===w["text-align"]))for(var y=0;y<m.length;++y){var v=this.pdf.getStringUnitWidth(m[y][0][0],h)*h.fontSize/f;y>0&&(m[y][0][1]=e(m[y][0][1]));var b=g-v;if("right"===w["text-align"])m[y][0][1]["margin-left"]=b;else if("center"===w["text-align"])m[y][0][1]["margin-left"]=b/2;else if("justify"===w["text-align"]){var x=m[y][0][0].split(" ").length-1;m[y][0][1]["word-spacing"]=b/x,y===m.length-1&&(m[y][0][1]["word-spacing"]=0)}}return m},l.prototype.RenderTextFragment=function(t,e){var n,r,i;i=0,n=12,this.pdf.internal.pageSize.height-this.pdf.margins_doc.bottom<this.y+this.pdf.internal.getFontSize()&&(this.pdf.internal.write("ET","Q"),this.pdf.addPage(),this.y=this.pdf.margins_doc.top,this.pdf.internal.write("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),e.color,"Td"),i=Math.max(i,e["line-height"],e["font-size"]),this.pdf.internal.write(0,(-1*n*i).toFixed(2),"Td")),r=this.pdf.internal.getFont(e["font-family"],e["font-style"]);var o=this.getPdfColor(e.color);o!==this.lastTextColor&&(this.pdf.internal.write(o),this.lastTextColor=o),void 0!==e["word-spacing"]&&e["word-spacing"]>0&&this.pdf.internal.write(e["word-spacing"].toFixed(2),"Tw"),this.pdf.internal.write("/"+r.id,(n*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj"),void 0!==e["word-spacing"]&&this.pdf.internal.write(0,"Tw")},l.prototype.getPdfColor=function(t){var e,n,r,i,o=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/,s=o.exec(t);if(null!=s?(n=parseInt(s[1]),r=parseInt(s[2]),i=parseInt(s[3])):("#"!=t.charAt(0)&&(t=CssColors.colorNameToHex(t),t||(t="#000000")),n=t.substring(1,3),n=parseInt(n,16),r=t.substring(3,5),r=parseInt(r,16),i=t.substring(5,7),i=parseInt(i,16)),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var a=parseInt(n.substr(1),16);n=a>>16&255,r=a>>8&255,i=255&a}var c=this.f3;return e=0===n&&0===r&&0===i||"undefined"==typeof r?c(n/255)+" g":[c(n/255),c(r/255),c(i/255),"rg"].join(" ")},l.prototype.f3=function(t){return t.toFixed(3)},l.prototype.renderParagraph=function(t){var e,n,r,i,o,s,a,c,l,h,d,f,p,m,g;if(i=u(this.paragraph.text),m=this.paragraph.style,e=this.paragraph.blockstyle,p=this.paragraph.priorblockstyle||{},this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:e},i.join("").trim()){c=this.splitFragmentsIntoLines(i,m),a=void 0,l=void 0,n=12,r=n/this.pdf.internal.scaleFactor,this.priorMarginBottom=this.priorMarginBottom||0,f=(Math.max((e["margin-top"]||0)-this.priorMarginBottom,0)+(e["padding-top"]||0))*r,d=((e["margin-bottom"]||0)+(e["padding-bottom"]||0))*r,this.priorMarginBottom=e["margin-bottom"]||0,"always"===e["page-break-before"]&&(this.pdf.addPage(),this.y=0,f=((e["margin-top"]||0)+(e["padding-top"]||0))*r),h=this.pdf.internal.write,o=void 0,s=void 0,this.y+=f,h("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");for(var w=0;c.length;){for(a=c.shift(),l=0,o=0,s=a.length;o!==s;)a[o][0].trim()&&(l=Math.max(l,a[o][1]["line-height"],a[o][1]["font-size"]),g=7*a[o][1]["font-size"]),o++;var y=0,v=0;void 0!==a[0][1]["margin-left"]&&a[0][1]["margin-left"]>0&&(wantedIndent=this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]),y=wantedIndent-w,w=wantedIndent);var v=Math.max(e["margin-left"]||0,0)*r;for(h(y+v,(-1*n*l).toFixed(2),"Td"),o=0,s=a.length;o!==s;)a[o][0]&&this.RenderTextFragment(a[o][0],a[o][1]),o++;if(this.y+=l*r,this.executeWatchFunctions(a[0][1])&&c.length>0){var b=[],x=[];c.forEach(function(t){for(var e=0,n=t.length;e!==n;)t[e][0]&&(b.push(t[e][0]+" "),x.push(t[e][1])),++e}),c=this.splitFragmentsIntoLines(u(b),x),h("ET","Q"),h("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td")}}return t&&"function"==typeof t&&t.call(this,this.x-9,this.y-g/2),h("ET","Q"),this.y+=d}},l.prototype.setBlockBoundary=function(t){return this.renderParagraph(t)},l.prototype.setBlockStyle=function(t){return this.paragraph.blockstyle=t},l.prototype.addText=function(t,e){return this.paragraph.text.push(t),this.paragraph.style.push(e)},r={helvetica:"helvetica","sans-serif":"helvetica","times new roman":"times",serif:"times",times:"times",monospace:"courier",courier:"courier"},o={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},i={normal:"normal",italic:"italic",oblique:"italic"},TextAlignMap={left:"left",right:"right",center:"center",justify:"justify"},s={none:"none",right:"right",left:"left"},a={none:"none",both:"both"},f={normal:1},t.fromHTML=function(t,e,n,r,i,o){"use strict";return this.margins_doc=o||{top:0,bottom:0},r||(r={}),r.elementHandlers||(r.elementHandlers={}),y(this,t,isNaN(e)?4:e,isNaN(n)?4:n,r,i)}}(jsPDF.API),function(t){"use strict";var e,n,r;t.addJS=function(t){return r=t,this.internal.events.subscribe("postPutResources",function(t){e=this.internal.newObject(),this.internal.write("<< /Names [(EmbeddedJS) "+(e+1)+" 0 R] >>","endobj"),n=this.internal.newObject(),this.internal.write("<< /S /JavaScript /JS (",r,") >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){void 0!==e&&void 0!==n&&this.internal.write("/Names <</JavaScript "+e+" 0 R>>")}),this}}(jsPDF.API),function(t){"use strict";return t.events.push(["postPutResources",function(){var t=this,e=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var n=t.outline.render().split(/\r\n/),r=0;r<n.length;r++){var i=n[r],o=e.exec(i);if(null!=o){var s=o[1];t.internal.newObjectDeferredBegin(s)}t.internal.write(i)}if(this.outline.createNamedDestinations){for(var a=this.internal.pages.length,c=[],r=0;a>r;r++){var u=t.internal.newObject();c.push(u);var l=t.internal.getPageInfo(r+1);t.internal.write("<< /D["+l.objId+" 0 R /XYZ null null null]>> endobj")}var h=t.internal.newObject();t.internal.write("<< /Names [ ");for(var r=0;r<c.length;r++)t.internal.write("(page_"+(r+1)+")"+c[r]+" 0 R");t.internal.write(" ] >>","endobj");t.internal.newObject();t.internal.write("<< /Dests "+h+" 0 R"),t.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){var t=this;t.outline.root.children.length>0&&(t.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&t.internal.write("/Names "+namesOid+" 0 R"))}]),t.events.push(["initialized",function(){var t=this;t.outline={createNamedDestinations:!1,root:{children:[]}};t.outline.add=function(t,e,n){var r={title:e,options:n,children:[]};return null==t&&(t=this.root),t.children.push(r),r},t.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=t,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},t.outline.genIds_r=function(e){e.id=t.internal.newObjectDeferred();for(var n=0;n<e.children.length;n++)this.genIds_r(e.children[n])},t.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),t.children.length>0&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},t.outline.renderItems=function(e){for(var n=0;n<e.children.length;n++){var r=e.children[n];this.objStart(r),this.line("/Title "+this.makeString(r.title)),this.line("/Parent "+this.makeRef(e)),n>0&&this.line("/Prev "+this.makeRef(e.children[n-1])),n<e.children.length-1&&this.line("/Next "+this.makeRef(e.children[n+1])),r.children.length>0&&(this.line("/First "+this.makeRef(r.children[0])),this.line("/Last "+this.makeRef(r.children[r.children.length-1])));var i=this.count=this.count_r({count:0},r);if(i>0&&this.line("/Count "+i),r.options&&r.options.pageNumber){var o=t.internal.getPageInfo(r.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+this.ctx.pdf.internal.pageSize.height+" 0]")}this.objEnd()}for(var n=0;n<e.children.length;n++){var r=e.children[n];this.renderItems(r)}},t.outline.line=function(t){this.ctx.val+=t+"\r\n"},t.outline.makeRef=function(t){return t.id+" 0 R"},t.outline.makeString=function(e){return"("+t.internal.pdfEscape(e)+")"},t.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},t.outline.objEnd=function(t){this.ctx.val+=">> \r\nendobj\r\n"},t.outline.count_r=function(t,e){for(var n=0;n<e.children.length;n++)t.count++,this.count_r(t,e.children[n]);return t.count}}]),this}(jsPDF.API),function(t){"use strict";var e=function(){return"function"!=typeof PNG||"function"!=typeof FlateStream},n=function(e){return e!==t.image_compression.NONE&&r()},r=function(){var t="function"==typeof Deflater;if(!t)throw new Error("requires deflate.js for compression");return t},i=function(e,n,r,i){var c=5,f=l;switch(i){case t.image_compression.FAST:c=3,f=u;break;case t.image_compression.MEDIUM:c=6,f=h;break;case t.image_compression.SLOW:c=9,f=d}e=a(e,n,r,f);var p=new Uint8Array(o(c)),m=s(e),g=new Deflater(c),w=g.append(e),y=g.flush(),v=p.length+w.length+y.length,b=new Uint8Array(v+4);return b.set(p),b.set(w,p.length),b.set(y,p.length+w.length),b[v++]=m>>>24&255,b[v++]=m>>>16&255,b[v++]=m>>>8&255,b[v++]=255&m,t.arrayBufferToBinaryString(b)},o=function(t,e){var n=8,r=Math.LOG2E*Math.log(32768)-8,i=r<<4|n,o=i<<8,s=Math.min(3,(e-1&255)>>1);return o|=s<<6,o|=0,o+=31-o%31,[i,255&o&255]},s=function(t,e){for(var n,r=1,i=65535&r,o=r>>>16&65535,s=t.length,a=0;s>0;){n=s>e?e:s,s-=n;do i+=t[a++],o+=i;while(--n);i%=65521,o%=65521}return(o<<16|i)>>>0},a=function(t,e,n,r){for(var i,o,s,a=t.length/e,c=new Uint8Array(t.length+a),u=p(),l=0;a>l;l++){if(s=l*e,i=t.subarray(s,s+e),r)c.set(r(i,n,o),s+l);else{for(var h=0,d=u.length,f=[];d>h;h++)f[h]=u[h](i,n,o);var g=m(f.concat());c.set(f[g],s+l)}o=i}return c},c=function(t,e,n){var r=Array.apply([],t);return r.unshift(0),r},u=function(t,e,n){var r,i=[],o=0,s=t.length;for(i[0]=1;s>o;o++)r=t[o-e]||0,i[o+1]=t[o]-r+256&255;return i},l=function(t,e,n){var r,i=[],o=0,s=t.length;for(i[0]=2;s>o;o++)r=n&&n[o]||0,i[o+1]=t[o]-r+256&255;return i},h=function(t,e,n){var r,i,o=[],s=0,a=t.length;for(o[0]=3;a>s;s++)r=t[s-e]||0,i=n&&n[s]||0,o[s+1]=t[s]+256-(r+i>>>1)&255;return o},d=function(t,e,n){var r,i,o,s,a=[],c=0,u=t.length;for(a[0]=4;u>c;c++)r=t[c-e]||0,i=n&&n[c]||0,o=n&&n[c-e]||0,s=f(r,i,o),a[c+1]=t[c]-s+256&255;return a},f=function(t,e,n){var r=t+e-n,i=Math.abs(r-t),o=Math.abs(r-e),s=Math.abs(r-n);return o>=i&&s>=i?t:s>=o?e:n},p=function(){return[c,u,l,h,d]},m=function(t){for(var e,n,r,i=0,o=t.length;o>i;)e=g(t[i].slice(1)),(n>e||!n)&&(n=e,r=i),i++;return r},g=function(t){for(var e=0,n=t.length,r=0;n>e;)r+=Math.abs(t[e++]);return r};t.processPNG=function(t,r,o,s,a){var c,u,l,h,d,f,p=this.color_spaces.DEVICE_RGB,m=this.decode.FLATE_DECODE,g=8;if(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)){if(e())throw new Error("PNG support requires png.js and zlib.js");if(c=new PNG(t),t=c.imgData,g=c.bits,p=c.colorSpace,h=c.colors,-1!==[4,6].indexOf(c.colorType)){if(8===c.bits)for(var w,y,v=32==c.pixelBitlength?new Uint32Array(c.decodePixels().buffer):16==c.pixelBitlength?new Uint16Array(c.decodePixels().buffer):new Uint8Array(c.decodePixels().buffer),b=v.length,x=new Uint8Array(b*c.colors),k=new Uint8Array(b),A=c.pixelBitlength-c.bits,C=0,E=0;b>C;C++){for(w=v[C],y=0;A>y;)x[E++]=w>>>y&255,y+=c.bits;k[C]=w>>>y&255}if(16===c.bits){for(var w,v=new Uint32Array(c.decodePixels().buffer),b=v.length,x=new Uint8Array(b*(32/c.pixelBitlength)*c.colors),k=new Uint8Array(b*(32/c.pixelBitlength)),S=c.colors>1,C=0,E=0,F=0;b>C;)w=v[C++],x[E++]=w>>>0&255,S&&(x[E++]=w>>>16&255,w=v[C++],x[E++]=w>>>0&255),k[F++]=w>>>16&255;g=8}n(s)?(t=i(x,c.width*c.colors,c.colors,s),f=i(k,c.width,1,s)):(t=x,f=k,m=null)}if(3===c.colorType&&(p=this.color_spaces.INDEXED,d=c.palette,c.transparency.indexed)){for(var T=c.transparency.indexed,P=0,C=0,b=T.length;b>C;++C)P+=T[C];if(P/=255,P===b-1&&-1!==T.indexOf(0))l=[T.indexOf(0)];else if(P!==b){for(var v=c.decodePixels(),k=new Uint8Array(v.length),C=0,b=v.length;b>C;C++)k[C]=T[v[C]];f=i(k,c.width,1)}}return u=m===this.decode.FLATE_DECODE?"/Predictor 15 /Colors "+h+" /BitsPerComponent "+g+" /Columns "+c.width:"/Colors "+h+" /BitsPerComponent "+g+" /Columns "+c.width,(this.isArrayBuffer(t)||this.isArrayBufferView(t))&&(t=this.arrayBufferToBinaryString(t)),(f&&this.isArrayBuffer(f)||this.isArrayBufferView(f))&&(f=this.arrayBufferToBinaryString(f)),this.createImageInfo(t,c.width,c.height,p,g,m,r,o,u,l,d,f)}throw new Error("Unsupported PNG image data, try using JPEG instead.")}}(jsPDF.API),function(t){"use strict";t.autoPrint=function(){var t;return this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.write("<< /S/Named /Type/Action /N/Print >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.write("/OpenAction "+t+" 0 R")}),this}}(jsPDF.API),function(t){"use strict";var e=t.getCharWidthsArray=function(t,e){e||(e={});var n,r,i,o=e.widths?e.widths:this.internal.getFont().metadata.Unicode.widths,s=o.fof?o.fof:1,a=e.kerning?e.kerning:this.internal.getFont().metadata.Unicode.kerning,c=a.fof?a.fof:1,u=0,l=o[0]||s,h=[];for(n=0,r=t.length;r>n;n++)i=t.charCodeAt(n),h.push((o[i]||l)/s+(a[i]&&a[i][u]||0)/c),u=i;return h},n=function(t){for(var e=t.length,n=0;e;)e--,n+=t[e];return n},r=t.getStringUnitWidth=function(t,r){return n(e.call(this,t,r))},i=function(t,e,n,r){for(var i=[],o=0,s=t.length,a=0;o!==s&&a+e[o]<n;)a+=e[o],o++;i.push(t.slice(0,o));var c=o;for(a=0;o!==s;)a+e[o]>r&&(i.push(t.slice(c,o)),a=0,c=o),a+=e[o],o++;return c!==o&&i.push(t.slice(c,o)),i},o=function(t,o,s){s||(s={});var a,c,u,l,h,d,f=[],p=[f],m=s.textIndent||0,g=0,w=0,y=t.split(" "),v=e(" ",s)[0];if(d=-1===s.lineIndent?y[0].length+2:s.lineIndent||0){var b=Array(d).join(" "),x=[];y.map(function(t){t=t.split(/\s*\n/),t.length>1?x=x.concat(t.map(function(t,e){return(e&&t.length?"\n":"")+t})):x.push(t[0])}),y=x,d=r(b,s)}for(u=0,l=y.length;l>u;u++){var k=0;if(a=y[u],d&&"\n"==a[0]&&(a=a.substr(1),k=1),c=e(a,s),w=n(c),m+g+w>o||k){if(w>o){for(h=i(a,c,o-(m+g),o),f.push(h.shift()),f=[h.pop()];h.length;)p.push([h.shift()]);w=n(c.slice(a.length-f[0].length))}else f=[a];p.push(f),m=w+d,g=v}else f.push(a),m+=g+w,g=v}if(d)var A=function(t,e){return(e?b:"")+t.join(" ")};else var A=function(t){return t.join(" ")};return p.map(A)};t.splitTextToSize=function(t,e,n){n||(n={});var r,i=n.fontSize||this.internal.getFontSize(),s=function(t){var e={0:1},n={};if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var r=this.internal.getFont(t.fontName,t.fontStyle),i="Unicode";return r.metadata[i]?{widths:r.metadata[i].widths||e,kerning:r.metadata[i].kerning||n}:{widths:e,kerning:n}}.call(this,n);r=Array.isArray(t)?t:t.split(/\r?\n/);var a=1*this.internal.scaleFactor*e/i;s.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/i:0,s.lineIndent=n.lineIndent;var c,u,l=[];for(c=0,u=r.length;u>c;c++)l=l.concat(o(r[c],a,s));return l}}(jsPDF.API),function(t){"use strict";var e=function(t){for(var e="0123456789abcdef",n="klmnopqrstuvwxyz",r={},i=0;i<n.length;i++)r[n[i]]=e[i];var o,s,a,c,u,l={},h=1,d=l,f=[],p="",m="",g=t.length-1;for(i=1;i!=g;)u=t[i],i+=1,"'"==u?s?(c=s.join(""),s=o):s=[]:s?s.push(u):"{"==u?(f.push([d,c]),d={},c=o):"}"==u?(a=f.pop(),a[0][a[1]]=d,c=o,d=a[0]):"-"==u?h=-1:c===o?r.hasOwnProperty(u)?(p+=r[u],c=parseInt(p,16)*h,h=1,p=""):p+=u:r.hasOwnProperty(u)?(m+=r[u],d[c]=parseInt(m,16)*h,h=1,c=o,m=""):m+=u;return l},n={codePages:["WinAnsiEncoding"],WinAnsiEncoding:e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},r={Unicode:{Courier:n,"Courier-Bold":n,"Courier-BoldOblique":n,"Courier-Oblique":n,Helvetica:n,"Helvetica-Bold":n,"Helvetica-BoldOblique":n,"Helvetica-Oblique":n,"Times-Roman":n,"Times-Bold":n,"Times-BoldItalic":n,"Times-Italic":n}},i={Unicode:{"Courier-Oblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Helvetica:e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),"Courier-Bold":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
"Helvetica-Oblique":e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};t.events.push(["addFont",function(t){var e,n,o,s="Unicode";e=i[s][t.PostScriptName],e&&(n=t.metadata[s]?t.metadata[s]:t.metadata[s]={},n.widths=e.widths,n.kerning=e.kerning),o=r[s][t.PostScriptName],o&&(n=t.metadata[s]?t.metadata[s]:t.metadata[s]={},n.encoding=o,o.codePages&&o.codePages.length&&(t.encoding=o.codePages[0]))}])}(jsPDF.API),function(t){"use strict";t.addSVG=function(t,e,n,r,i){function o(t,e){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(n)}function s(t){var e="childframe",n=t.createElement("iframe");return o(".jsPDF_sillysvg_iframe {display:none;position:absolute;}",t),n.name=e,n.setAttribute("width",0),n.setAttribute("height",0),n.setAttribute("frameborder","0"),n.setAttribute("scrolling","no"),n.setAttribute("seamless","seamless"),n.setAttribute("class","jsPDF_sillysvg_iframe"),t.body.appendChild(n),n}function a(t,e){var n=(e.contentWindow||e.contentDocument).document;return n.write(t),n.close(),n.getElementsByTagName("svg")[0]}function c(t){for(var e=parseFloat(t[1]),n=parseFloat(t[2]),r=[],i=3,o=t.length;o>i;)"c"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2]),parseFloat(t[i+3]),parseFloat(t[i+4]),parseFloat(t[i+5]),parseFloat(t[i+6])]),i+=7):"l"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2])]),i+=3):i+=1;return[e,n,r]}var u;if(e===u||n===u)throw new Error("addSVG needs values for 'x' and 'y'");var l=s(document),h=a(t,l),d=[1,1],f=parseFloat(h.getAttribute("width")),p=parseFloat(h.getAttribute("height"));f&&p&&(r&&i?d=[r/f,i/p]:r?d=[r/f,r/f]:i&&(d=[i/p,i/p]));var m,g,w,y,v=h.childNodes;for(m=0,g=v.length;g>m;m++)w=v[m],w.tagName&&"PATH"===w.tagName.toUpperCase()&&(y=c(w.getAttribute("d").split(" ")),y[0]=y[0]*d[0]+e,y[1]=y[1]*d[1]+n,this.lines.call(this,y[2],y[0],y[1],d));return this}}(jsPDF.API),function(t){"use strict";t.putTotalPages=function(t){for(var e=new RegExp(t,"g"),n=1;n<=this.internal.getNumberOfPages();n++)for(var r=0;r<this.internal.pages[n].length;r++)this.internal.pages[n][r]=this.internal.pages[n][r].replace(e,this.internal.getNumberOfPages());return this}}(jsPDF.API),function(t){"use strict";if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return void new Blob}catch(e){}var n=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},r=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},i=n.prototype,o=r.prototype,s=t.FileReaderSync,a=function(t){this.code=this[this.name=t]},c="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),u=c.length,l=t.URL||t.webkitURL||t,h=l.createObjectURL,d=l.revokeObjectURL,f=l,p=t.btoa,m=t.atob,g=t.ArrayBuffer,w=t.Uint8Array,y=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(r.fake=o.fake=!0;u--;)a.prototype[c[u]]=u+1;return l.createObjectURL||(f=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(y),n.origin=e&&e[1])),n}),f.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof r?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):p?e+";base64,"+p(t.data):e+","+encodeURIComponent(t.data)):h?h.call(l,t):void 0},f.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&d&&d.call(l,t)},i.append=function(t){var n=this.data;if(w&&(t instanceof g||t instanceof w)){for(var i="",o=new w(t),c=0,u=o.length;u>c;c++)i+=String.fromCharCode(o[c]);n.push(i)}else if("Blob"===e(t)||"File"===e(t)){if(!s)throw new a("NOT_READABLE_ERR");var l=new s;n.push(l.readAsBinaryString(t))}else t instanceof r?"base64"===t.encoding&&m?n.push(m(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!=typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},i.getBlob=function(t){return arguments.length||(t=null),new r(this.data.join(""),t,"raw")},i.toString=function(){return"[object BlobBuilder]"},o.slice=function(t,e,n){var i=arguments.length;return 3>i&&(n=null),new r(this.data.slice(t,i>1?e:this.data.length),n,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=0,delete this.data},n}(t);t.Blob=function(t,e){var r=e?e.type||"":"",i=new n;if(t)for(var o=0,s=t.length;s>o;o++)Uint8Array&&t[o]instanceof Uint8Array?i.append(t[o].buffer):i.append(t[o]);var a=i.getBlob(r);return!a.slice&&a.webkitSlice&&(a.slice=a.webkitSlice),a};var r=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=r(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);var saveAs=saveAs||function(t){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in r,o=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},s=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),a=t.webkitRequestFileSystem,c=t.requestFileSystem||a||t.mozRequestFileSystem,u=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},l="application/octet-stream",h=0,d=500,f=function(e){var r=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};t.chrome?r():setTimeout(r,d)},p=function(t,e,n){e=[].concat(e);for(var r=e.length;r--;){var i=t["on"+e[r]];if("function"==typeof i)try{i.call(t,n||t)}catch(o){u(o)}}},m=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t},g=function(e,u,d){d||(e=m(e));var g,w,y,v=this,b=e.type,x=!1,k=function(){p(v,"writestart progress write writeend".split(" "))},A=function(){if(w&&s&&"undefined"!=typeof FileReader){var r=new FileReader;return r.onloadend=function(){var t=r.result;w.location.href="data:attachment/file"+t.slice(t.search(/[,;]/)),v.readyState=v.DONE,k()},r.readAsDataURL(e),void(v.readyState=v.INIT)}if(!x&&g||(g=n().createObjectURL(e)),w)w.location.href=g;else{var i=t.open(g,"_blank");void 0==i&&s&&(t.location.href=g)}v.readyState=v.DONE,k(),f(g)},C=function(t){return function(){return v.readyState!==v.DONE?t.apply(this,arguments):void 0}},E={create:!0,exclusive:!1};return v.readyState=v.INIT,u||(u="download"),i?(g=n().createObjectURL(e),void setTimeout(function(){r.href=g,r.download=u,o(r),k(),f(g),v.readyState=v.DONE})):(t.chrome&&b&&b!==l&&(y=e.slice||e.webkitSlice,e=y.call(e,0,e.size,l),x=!0),a&&"download"!==u&&(u+=".download"),(b===l||a)&&(w=t),c?(h+=e.size,void c(t.TEMPORARY,h,C(function(t){t.root.getDirectory("saved",E,C(function(t){var n=function(){t.getFile(u,E,C(function(t){t.createWriter(C(function(n){n.onwriteend=function(e){w.location.href=t.toURL(),v.readyState=v.DONE,p(v,"writeend",e),f(t)},n.onerror=function(){var t=n.error;t.code!==t.ABORT_ERR&&A()},"writestart progress write abort".split(" ").forEach(function(t){n["on"+t]=v["on"+t]}),n.write(e),v.abort=function(){n.abort(),v.readyState=v.DONE},v.readyState=v.WRITING}),A)}),A)};t.getFile(u,{create:!1},C(function(t){t.remove(),n()}),C(function(t){t.code===t.NOT_FOUND_ERR?n():A()}))}),A)}),A)):void A())},w=g.prototype,y=function(t,e,n){return new g(t,e,n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return n||(t=m(t)),navigator.msSaveOrOpenBlob(t,e||"download")}:(w.abort=function(){var t=this;t.readyState=t.DONE,p(t,"abort")},w.readyState=w.INIT=0,w.WRITING=1,w.DONE=2,w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null,y)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports&&(module.exports.saveAs=saveAs),void function(t,e){"object"==typeof module?module.exports=e():t.adler32cs=e()}(jsPDF,function(){var t="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,e=null,n=function(){if(!t)return function(){return!1};try{var n=require("buffer");"function"==typeof n.Buffer&&(e=n.Buffer)}catch(r){}return function(t){return t instanceof ArrayBuffer||null!==e&&t instanceof e}}(),r=function(){return null!==e?function(t){return new e(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))}}(),i=65521,o=function(t,e){for(var n=65535&t,r=t>>>16,o=0,s=e.length;s>o;o++)n=(n+(255&e.charCodeAt(o)))%i,r=(r+n)%i;return(r<<16|n)>>>0},s=function(t,e){for(var n=65535&t,r=t>>>16,o=0,s=e.length;s>o;o++)n=(n+e[o])%i,r=(r+n)%i;return(r<<16|n)>>>0},a={},c=a.Adler32=function(){var e=function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0},i=e.prototype={};return i.constructor=e,e.from=function(t){return t.prototype=i,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");this.checksum=o(1,t.toString())}),e.fromUtf8=function(t){return t.prototype=i,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");var n=r(t.toString());this.checksum=o(1,n)}),t&&(e.fromBuffer=function(t){return t.prototype=i,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var r=new Uint8Array(t);return this.checksum=s(1,r)})),i.update=function(t){if(null==t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=o(this.checksum,t)},i.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return this.checksum=o(this.checksum,e)},t&&(i.updateBuffer=function(t){if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=s(this.checksum,e)}),i.clone=function(){return new c(this.checksum)},e}();return a.from=function(t){if(null==t)throw new Error("First argument needs to be a string.");return o(1,t.toString())},a.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return o(1,e)},t&&(a.fromBuffer=function(t){if(!n(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return s(1,e)}),a});var CssColors={};CssColors._colorsTable={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},CssColors.colorNameToHex=function(t){return t=t.toLowerCase(),"undefined"!=typeof this._colorsTable[t]?this._colorsTable[t]:!1};var Deflater=function(t){function e(){function t(t){var e,n,i,o,s,c,u=r.dyn_tree,l=r.stat_desc.static_tree,h=r.stat_desc.extra_bits,d=r.stat_desc.extra_base,p=r.stat_desc.max_length,m=0;for(o=0;a>=o;o++)t.bl_count[o]=0;for(u[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;f>e;e++)n=t.heap[e],o=u[2*u[2*n+1]+1]+1,o>p&&(o=p,m++),u[2*n+1]=o,n>r.max_code||(t.bl_count[o]++,s=0,n>=d&&(s=h[n-d]),c=u[2*n],t.opt_len+=c*(o+s),l&&(t.static_len+=c*(l[2*n+1]+s)));if(0!==m){do{for(o=p-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,m-=2}while(m>0);for(o=p;0!==o;o--)for(n=t.bl_count[o];0!==n;)i=t.heap[--e],i>r.max_code||(u[2*i+1]!=o&&(t.opt_len+=(o-u[2*i+1])*u[2*i],u[2*i+1]=o),n--)}}function e(t,e){var n=0;do n|=1&t,t>>>=1,n<<=1;while(--e>0);return n>>>1}function n(t,n,r){var i,o,s,c=[],u=0;for(i=1;a>=i;i++)c[i]=u=u+r[i-1]<<1;for(o=0;n>=o;o++)s=t[2*o+1],0!==s&&(t[2*o]=e(c[s]++,s))}var r=this;r.build_tree=function(e){var i,o,s,a=r.dyn_tree,c=r.stat_desc.static_tree,u=r.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=f,i=0;u>i;i++)0!==a[2*i]?(e.heap[++e.heap_len]=l=i,e.depth[i]=0):a[2*i+1]=0;for(;e.heap_len<2;)s=e.heap[++e.heap_len]=2>l?++l:0,a[2*s]=1,e.depth[s]=0,e.opt_len--,c&&(e.static_len-=c[2*s+1]);for(r.max_code=l,i=Math.floor(e.heap_len/2);i>=1;i--)e.pqdownheap(a,i);s=u;do i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],e.pqdownheap(a,1),o=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=o,a[2*s]=a[2*i]+a[2*o],e.depth[s]=Math.max(e.depth[i],e.depth[o])+1,a[2*i+1]=a[2*o+1]=s,e.heap[1]=s++,e.pqdownheap(a,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],t(e),n(a,r.max_code,e.bl_count)}}function n(t,e,n,r,i){var o=this;o.static_tree=t,o.extra_bits=e,o.extra_base=n,o.elems=r,o.max_length=i}function r(t,e,n,r,i){var o=this;o.good_length=t,o.max_lazy=e,o.nice_length=n,o.max_chain=r,o.func=i}function i(t,e,n,r){var i=t[2*e],o=t[2*n];return o>i||i==o&&r[e]<=r[n]}function o(){function t(){var t;for(_t=2*St,qt[Rt-1]=0,t=0;Rt-1>t;t++)qt[t]=0;Yt=M[Gt].max_lazy,Jt=M[Gt].good_length,Kt=M[Gt].nice_length,Xt=M[Gt].max_chain,Ut=0,jt=0,Wt=0,Lt=Vt=tt-1,zt=0,Ot=0}function r(){var t;for(t=0;d>t;t++)$t[2*t]=0;for(t=0;c>t;t++)Zt[2*t]=0;for(t=0;u>t;t++)te[2*t]=0;$t[2*p]=1,ee.opt_len=ee.static_len=0,ae=ue=0}function o(){ne.dyn_tree=$t,ne.stat_desc=n.static_l_desc,re.dyn_tree=Zt,re.stat_desc=n.static_d_desc,ie.dyn_tree=te,ie.stat_desc=n.static_bl_desc,he=0,de=0,le=8,r()}function s(t,e){var n,r,i=-1,o=t[1],s=0,a=7,c=4;for(0===o&&(a=138,c=3),t[2*(e+1)+1]=65535,n=0;e>=n;n++)r=o,o=t[2*(n+1)+1],++s<a&&r==o||(c>s?te[2*r]+=s:0!==r?(r!=i&&te[2*r]++,te[2*g]++):10>=s?te[2*w]++:te[2*y]++,s=0,i=r,0===o?(a=138,c=3):r==o?(a=6,c=3):(a=7,c=4))}function a(){var t;for(s($t,ne.max_code),s(Zt,re.max_code),ie.build_tree(ee),t=u-1;t>=3&&0===te[2*e.bl_order[t]+1];t--);return ee.opt_len+=3*(t+1)+5+5+4,t}function l(t){ee.pending_buf[ee.pending++]=t}function f(t){l(255&t),l(t>>>8&255)}function m(t){l(t>>8&255),l(255&t&255)}function R(t,e){var n,r=e;de>v-r?(n=t,he|=n<<de&65535,f(he),he=n>>>v-de,de+=r-v):(he|=t<<de&65535,de+=r)}function rt(t,e){var n=2*t;R(65535&e[n],65535&e[n+1])}function it(t,e){var n,r,i=-1,o=t[1],s=0,a=7,c=4;for(0===o&&(a=138,c=3),n=0;e>=n;n++)if(r=o,o=t[2*(n+1)+1],!(++s<a&&r==o)){if(c>s){do rt(r,te);while(0!==--s)}else 0!==r?(r!=i&&(rt(r,te),s--),rt(g,te),R(s-3,2)):10>=s?(rt(w,te),R(s-3,3)):(rt(y,te),R(s-11,7));s=0,i=r,0===o?(a=138,c=3):r==o?(a=6,c=3):(a=7,c=4)}}function ot(t,n,r){var i;for(R(t-257,5),R(n-1,5),R(r-4,4),i=0;r>i;i++)R(te[2*e.bl_order[i]+1],3);it($t,t-1),it(Zt,n-1)}function st(){16==de?(f(he),he=0,de=0):de>=8&&(l(255&he),he>>>=8,de-=8)}function at(){R($<<1,3),rt(p,n.static_ltree),st(),9>1+le+10-de&&(R($<<1,3),rt(p,n.static_ltree),st()),le=7}function ct(t,n){var r,i,o;if(ee.pending_buf[ce+2*ae]=t>>>8&255,ee.pending_buf[ce+2*ae+1]=255&t,ee.pending_buf[oe+ae]=255&n,ae++,0===t?$t[2*n]++:(ue++,t--,$t[2*(e._length_code[n]+h+1)]++,Zt[2*e.d_code(t)]++),0===(8191&ae)&&Gt>2){for(r=8*ae,i=Ut-jt,o=0;c>o;o++)r+=Zt[2*o]*(5+e.extra_dbits[o]);if(r>>>=3,ue<Math.floor(ae/2)&&r<Math.floor(i/2))return!0}return ae==se-1}function ut(t,n){var r,i,o,s,a=0;if(0!==ae)do r=ee.pending_buf[ce+2*a]<<8&65280|255&ee.pending_buf[ce+2*a+1],i=255&ee.pending_buf[oe+a],a++,0===r?rt(i,t):(o=e._length_code[i],rt(o+h+1,t),s=e.extra_lbits[o],0!==s&&(i-=e.base_length[o],R(i,s)),r--,o=e.d_code(r),rt(o,n),s=e.extra_dbits[o],0!==s&&(r-=e.base_dist[o],R(r,s)));while(ae>a);rt(p,t),le=t[2*p+1]}function lt(){de>8?f(he):de>0&&l(255&he),he=0,de=0}function ht(t,e,n){lt(),le=8,n&&(f(e),f(~e)),ee.pending_buf.set(Pt.subarray(t,t+e),ee.pending),ee.pending+=e}function dt(t,e,n){R((K<<1)+(n?1:0),3),ht(t,e,!0)}function ft(t,e,i){var o,s,c=0;Gt>0?(ne.build_tree(ee),re.build_tree(ee),c=a(),o=ee.opt_len+3+7>>>3,s=ee.static_len+3+7>>>3,o>=s&&(o=s)):o=s=e+5,o>=e+4&&-1!=t?dt(t,e,i):s==o?(R(($<<1)+(i?1:0),3),ut(n.static_ltree,n.static_dtree)):(R((Z<<1)+(i?1:0),3),ot(ne.max_code+1,re.max_code+1,c+1),ut($t,Zt)),r(),i&&lt()}function pt(t){ft(jt>=0?jt:-1,Ut-jt,t),jt=Ut,xt.flush_pending()}function mt(){var t,e,n,r;do{if(r=_t-Wt-Ut,0===r&&0===Ut&&0===Wt)r=St;else if(-1==r)r--;else if(Ut>=St+St-nt){Pt.set(Pt.subarray(St,St+St),0),Ht-=St,Ut-=St,jt-=St,t=Rt,n=t;do e=65535&qt[--n],qt[n]=e>=St?e-St:0;while(0!==--t);t=St,n=t;do e=65535&It[--n],It[n]=e>=St?e-St:0;while(0!==--t);r+=St}if(0===xt.avail_in)return;t=xt.read_buf(Pt,Ut+Wt,r),Wt+=t,Wt>=tt&&(Ot=255&Pt[Ut],Ot=(Ot<<Nt^255&Pt[Ut+1])&Dt)}while(nt>Wt&&0!==xt.avail_in)}function gt(t){var e,n=65535;for(n>At-5&&(n=At-5);;){if(1>=Wt){if(mt(),0===Wt&&t==C)return U;if(0===Wt)break}if(Ut+=Wt,Wt=0,e=jt+n,(0===Ut||Ut>=e)&&(Wt=Ut-e,Ut=e,pt(!1),0===xt.avail_out))return U;if(Ut-jt>=St-nt&&(pt(!1),0===xt.avail_out))return U}return pt(t==F),0===xt.avail_out?t==F?W:U:t==F?V:H}function wt(t){var e,n,r=Xt,i=Ut,o=Vt,s=Ut>St-nt?Ut-(St-nt):0,a=Kt,c=Tt,u=Ut+et,l=Pt[i+o-1],h=Pt[i+o];Vt>=Jt&&(r>>=2),a>Wt&&(a=Wt);do if(e=t,Pt[e+o]==h&&Pt[e+o-1]==l&&Pt[e]==Pt[i]&&Pt[++e]==Pt[i+1]){i+=2,e++;do;while(Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&Pt[++i]==Pt[++e]&&u>i);if(n=et-(u-i),i=u-et,n>o){if(Ht=t,o=n,n>=a)break;l=Pt[i+o-1],h=Pt[i+o]}}while((t=65535&It[t&c])>s&&0!==--r);return Wt>=o?o:Wt}function yt(t){for(var e,n=0;;){if(nt>Wt){if(mt(),nt>Wt&&t==C)return U;if(0===Wt)break}if(Wt>=tt&&(Ot=(Ot<<Nt^255&Pt[Ut+(tt-1)])&Dt,n=65535&qt[Ot],It[Ut&Tt]=qt[Ot],qt[Ot]=Ut),0!==n&&St-nt>=(Ut-n&65535)&&Qt!=k&&(Lt=wt(n)),Lt>=tt)if(e=ct(Ut-Ht,Lt-tt),Wt-=Lt,Yt>=Lt&&Wt>=tt){Lt--;do Ut++,Ot=(Ot<<Nt^255&Pt[Ut+(tt-1)])&Dt,n=65535&qt[Ot],It[Ut&Tt]=qt[Ot],qt[Ot]=Ut;while(0!==--Lt);Ut++}else Ut+=Lt,Lt=0,Ot=255&Pt[Ut],Ot=(Ot<<Nt^255&Pt[Ut+1])&Dt;else e=ct(0,255&Pt[Ut]),Wt--,Ut++;if(e&&(pt(!1),0===xt.avail_out))return U}return pt(t==F),0===xt.avail_out?t==F?W:U:t==F?V:H}function vt(t){for(var e,n,r=0;;){if(nt>Wt){if(mt(),nt>Wt&&t==C)return U;if(0===Wt)break}if(Wt>=tt&&(Ot=(Ot<<Nt^255&Pt[Ut+(tt-1)])&Dt,r=65535&qt[Ot],It[Ut&Tt]=qt[Ot],qt[Ot]=Ut),Vt=Lt,Mt=Ht,Lt=tt-1,0!==r&&Yt>Vt&&St-nt>=(Ut-r&65535)&&(Qt!=k&&(Lt=wt(r)),5>=Lt&&(Qt==x||Lt==tt&&Ut-Ht>4096)&&(Lt=tt-1)),Vt>=tt&&Vt>=Lt){n=Ut+Wt-tt,e=ct(Ut-1-Mt,Vt-tt),Wt-=Vt-1,Vt-=2;do++Ut<=n&&(Ot=(Ot<<Nt^255&Pt[Ut+(tt-1)])&Dt,r=65535&qt[Ot],It[Ut&Tt]=qt[Ot],qt[Ot]=Ut);while(0!==--Vt);if(zt=0,Lt=tt-1,Ut++,e&&(pt(!1),0===xt.avail_out))return U}else if(0!==zt){if(e=ct(0,255&Pt[Ut-1]),e&&pt(!1),Ut++,Wt--,0===xt.avail_out)return U}else zt=1,Ut++,Wt--}return 0!==zt&&(e=ct(0,255&Pt[Ut-1]),zt=0),pt(t==F),0===xt.avail_out?t==F?W:U:t==F?V:H}function bt(e){return e.total_in=e.total_out=0,e.msg=null,ee.pending=0,ee.pending_out=0,kt=G,Et=C,o(),t(),T}var xt,kt,At,Ct,Et,St,Ft,Tt,Pt,_t,It,qt,Ot,Rt,Bt,Dt,Nt,jt,Lt,Mt,zt,Ut,Ht,Wt,Vt,Xt,Yt,Gt,Qt,Jt,Kt,$t,Zt,te,ee=this,ne=new e,re=new e,ie=new e;ee.depth=[];var oe,se,ae,ce,ue,le,he,de;ee.bl_count=[],ee.heap=[],$t=[],Zt=[],te=[],ee.pqdownheap=function(t,e){for(var n=ee.heap,r=n[e],o=e<<1;o<=ee.heap_len&&(o<ee.heap_len&&i(t,n[o+1],n[o],ee.depth)&&o++,!i(t,r,n[o],ee.depth));)n[e]=n[o],e=o,o<<=1;n[e]=r},ee.deflateInit=function(t,e,n,r,i,o){return r||(r=J),i||(i=D),o||(o=A),t.msg=null,e==b&&(e=6),1>i||i>B||r!=J||9>n||n>15||0>e||e>9||0>o||o>k?I:(t.dstate=ee,Ft=n,St=1<<Ft,Tt=St-1,Bt=i+7,Rt=1<<Bt,Dt=Rt-1,Nt=Math.floor((Bt+tt-1)/tt),Pt=new Uint8Array(2*St),It=[],qt=[],se=1<<i+6,ee.pending_buf=new Uint8Array(4*se),At=4*se,ce=Math.floor(se/2),oe=3*se,Gt=e,Qt=o,Ct=255&r,bt(t))},ee.deflateEnd=function(){return kt!=Y&&kt!=G&&kt!=Q?I:(ee.pending_buf=null,qt=null,It=null,Pt=null,ee.dstate=null,kt==G?q:T)},ee.deflateParams=function(t,e,n){var r=T;return e==b&&(e=6),0>e||e>9||0>n||n>k?I:(M[Gt].func!=M[e].func&&0!==t.total_in&&(r=t.deflate(E)),Gt!=e&&(Gt=e,Yt=M[Gt].max_lazy,Jt=M[Gt].good_length,Kt=M[Gt].nice_length,Xt=M[Gt].max_chain),Qt=n,r)},ee.deflateSetDictionary=function(t,e,n){var r,i=n,o=0;if(!e||kt!=Y)return I;if(tt>i)return T;for(i>St-nt&&(i=St-nt,o=n-i),Pt.set(e.subarray(o,o+i),0),Ut=i,jt=i,Ot=255&Pt[0],Ot=(Ot<<Nt^255&Pt[1])&Dt,r=0;i-tt>=r;r++)Ot=(Ot<<Nt^255&Pt[r+(tt-1)])&Dt,It[r&Tt]=qt[Ot],qt[Ot]=r;return T},ee.deflate=function(t,e){var n,r,i,o,s;if(e>F||0>e)return I;if(!t.next_out||!t.next_in&&0!==t.avail_in||kt==Q&&e!=F)return t.msg=z[_-I],I;if(0===t.avail_out)return t.msg=z[_-O],O;if(xt=t,o=Et,Et=e,kt==Y&&(r=J+(Ft-8<<4)<<8,i=(Gt-1&255)>>1,i>3&&(i=3),r|=i<<6,0!==Ut&&(r|=X),r+=31-r%31,kt=G,m(r)),0!==ee.pending){if(xt.flush_pending(),0===xt.avail_out)return Et=-1,T}else if(0===xt.avail_in&&o>=e&&e!=F)return xt.msg=z[_-O],O;if(kt==Q&&0!==xt.avail_in)return t.msg=z[_-O],O;if(0!==xt.avail_in||0!==Wt||e!=C&&kt!=Q){switch(s=-1,M[Gt].func){case N:s=gt(e);break;case j:s=yt(e);break;case L:s=vt(e)}if(s!=W&&s!=V||(kt=Q),s==U||s==W)return 0===xt.avail_out&&(Et=-1),T;if(s==H){if(e==E)at();else if(dt(0,0,!1),e==S)for(n=0;Rt>n;n++)qt[n]=0;if(xt.flush_pending(),0===xt.avail_out)return Et=-1,T}}return e!=F?T:P}}function s(){var t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}var a=15,c=30,u=19,l=29,h=256,d=h+1+l,f=2*d+1,p=256,m=7,g=16,w=17,y=18,v=16,b=-1,x=1,k=2,A=0,C=0,E=1,S=3,F=4,T=0,P=1,_=2,I=-2,q=-3,O=-5,R=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];e._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],e.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],e.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],e.d_code=function(t){return 256>t?R[t]:R[256+(t>>>7)]},e.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],e.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],e.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],e.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],n.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],n.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],n.static_l_desc=new n(n.static_ltree,e.extra_lbits,h+1,d,a),n.static_d_desc=new n(n.static_dtree,e.extra_dbits,0,c,a),n.static_bl_desc=new n(null,e.extra_blbits,0,u,m);var B=9,D=8,N=0,j=1,L=2,M=[new r(0,0,0,0,N),new r(4,4,8,4,j),new r(4,5,16,8,j),new r(4,6,32,32,j),new r(4,4,16,16,L),new r(8,16,32,32,L),new r(8,16,128,128,L),new r(8,32,128,256,L),new r(32,128,258,1024,L),new r(32,258,258,4096,L)],z=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],U=0,H=1,W=2,V=3,X=32,Y=42,G=113,Q=666,J=8,K=0,$=1,Z=2,tt=3,et=258,nt=et+tt+1;return s.prototype={deflateInit:function(t,e){var n=this;return n.dstate=new o,e||(e=a),n.dstate.deflateInit(n,t,e)},deflate:function(t){var e=this;return e.dstate?e.dstate.deflate(e,t):I},deflateEnd:function(){var t=this;if(!t.dstate)return I;var e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){var n=this;return n.dstate?n.dstate.deflateParams(n,t,e):I},deflateSetDictionary:function(t,e){var n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):I},read_buf:function(t,e,n){var r=this,i=r.avail_in;return i>n&&(i=n),0===i?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending:function(){var t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}},function(t){var e=this,n=new s,r=512,i=C,o=new Uint8Array(r);"undefined"==typeof t&&(t=b),n.deflateInit(t),n.next_out=o,e.append=function(t,e){var s,a,c=[],u=0,l=0,h=0;if(t.length){n.next_in_index=0,n.next_in=t,n.avail_in=t.length;do{if(n.next_out_index=0,n.avail_out=r,
s=n.deflate(i),s!=T)throw"deflating: "+n.msg;n.next_out_index&&(n.next_out_index==r?c.push(new Uint8Array(o)):c.push(new Uint8Array(o.subarray(0,n.next_out_index)))),h+=n.next_out_index,e&&n.next_in_index>0&&n.next_in_index!=u&&(e(n.next_in_index),u=n.next_in_index)}while(n.avail_in>0||0===n.avail_out);return a=new Uint8Array(h),c.forEach(function(t){a.set(t,l),l+=t.length}),a}},e.flush=function(){var t,e,i=[],s=0,a=0;do{if(n.next_out_index=0,n.avail_out=r,t=n.deflate(F),t!=P&&t!=T)throw"deflating: "+n.msg;r-n.avail_out>0&&i.push(new Uint8Array(o.subarray(0,n.next_out_index))),a+=n.next_out_index}while(n.avail_in>0||0===n.avail_out);return n.deflateEnd(),e=new Uint8Array(a),i.forEach(function(t){e.set(t,s),s+=t.length}),e}}}(this);(function(t,e,n,r,i,o,s){function a(t,e,n,r){return p(t,t,n,r,e).then(function(i){I("Document cloned");var o="["+Wt+"='true']";t.querySelector(o).removeAttribute(Wt);var s=i.contentWindow,a=s.document.querySelector(o),u="function"==typeof e.onclone?Promise.resolve(e.onclone(s.document)):Promise.resolve(!0);return u.then(function(){return c(a,i,e,n,r)})})}function c(t,n,r,i,o){var s=n.contentWindow,a=new Rt(s.document),c=new P(r,a),f=L(t),p="view"===r.type?i:h(s.document),m="view"===r.type?o:d(s.document),g=new Ut(p,m,c,r,e),w=new z(t,g,a,c,r);return w.ready.then(function(){I("Finished rendering");var e;return e="view"===r.type?l(g.canvas,{width:g.canvas.width,height:g.canvas.height,top:0,left:0,x:0,y:0}):t===s.document.body||t===s.document.documentElement||null!=r.canvas?g.canvas:l(g.canvas,{width:null!=r.width?r.width:f.width,height:null!=r.height?r.height:f.height,top:f.top,left:f.left,x:s.pageXOffset,y:s.pageYOffset}),u(n,r),e})}function u(t,e){e.removeContainer&&(t.parentNode.removeChild(t),I("Cleaned up container"))}function l(t,n){var r=e.createElement("canvas"),i=Math.min(t.width-1,Math.max(0,n.left)),o=Math.min(t.width,Math.max(1,n.left+n.width)),s=Math.min(t.height-1,Math.max(0,n.top)),a=Math.min(t.height,Math.max(1,n.top+n.height));return r.width=n.width,r.height=n.height,I("Cropping canvas at:","left:",n.left,"top:",n.top,"width:",o-i,"height:",a-s),I("Resulting crop with width",n.width,"and height",n.height," with x",i,"and y",s),r.getContext("2d").drawImage(t,i,s,o-i,a-s,n.x,n.y,o-i,a-s),r}function h(t){return Math.max(Math.max(t.body.scrollWidth,t.documentElement.scrollWidth),Math.max(t.body.offsetWidth,t.documentElement.offsetWidth),Math.max(t.body.clientWidth,t.documentElement.clientWidth))}function d(t){return Math.max(Math.max(t.body.scrollHeight,t.documentElement.scrollHeight),Math.max(t.body.offsetHeight,t.documentElement.offsetHeight),Math.max(t.body.clientHeight,t.documentElement.clientHeight))}function f(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}function p(t,e,n,r,i){y(t);var o=t.documentElement.cloneNode(!0),s=e.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=n,s.height=r,s.scrolling="no",e.body.appendChild(s),new Promise(function(e){var n=s.contentWindow.document;s.contentWindow.onload=s.onload=function(){var o=setInterval(function(){n.body.childNodes.length>0&&(v(t,n),clearInterval(o),"view"===i.type&&s.contentWindow.scrollTo(r,a),e(s))},50)};var r=t.defaultView.pageXOffset,a=t.defaultView.pageYOffset;n.open(),n.write("<!DOCTYPE html><html></html>"),m(t,r,a),n.replaceChild(i.javascriptEnabled===!0?n.adoptNode(o):b(n.adoptNode(o)),n.documentElement),n.close()})}function m(t,e,n){e===t.defaultView.pageXOffset&&n===t.defaultView.pageYOffset||t.defaultView.scrollTo(e,n)}function g(e,n,r,i,o,s){return new Et(e,n,t.document).then(w(e)).then(function(t){return p(t,r,i,o,s)})}function w(t){return function(n){var r,i=new DOMParser;try{r=i.parseFromString(n,"text/html")}catch(o){I("DOMParser not supported, falling back to createHTMLDocument"),r=e.implementation.createHTMLDocument("");try{r.open(),r.write(n),r.close()}catch(s){I("createHTMLDocument write not supported, falling back to document.body.innerHTML"),r.body.innerHTML=n}}var a=r.querySelector("base");if(!a||!a.href.host){var c=r.createElement("base");c.href=t,r.head.insertBefore(c,r.head.firstChild)}return r}}function y(t){[].slice.call(t.querySelectorAll("canvas"),0).forEach(function(t){t.setAttribute(Vt,"canvas-"+Xt++)})}function v(t,e){[].slice.call(t.querySelectorAll("["+Vt+"]"),0).forEach(function(t){try{var n=e.querySelector("["+Vt+'="'+t.getAttribute(Vt)+'"]');n&&(n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t.getContext("2d").getImageData(0,0,t.width,t.height),0,0))}catch(r){I("Unable to copy canvas content from",t,r)}t.removeAttribute(Vt)})}function b(t){return[].slice.call(t.childNodes,0).filter(x).forEach(function(e){"SCRIPT"===e.tagName?t.removeChild(e):b(e)}),t}function x(t){return t.nodeType===Node.ELEMENT_NODE}function k(t){var n=e.createElement("a");return n.href=t,n.href=n.href,n}function A(t){if(this.src=t,I("DummyImageContainer for",t),!this.promise||!this.image){I("Initiating DummyImageContainer"),A.prototype.image=new Image;var e=this.image;A.prototype.promise=new Promise(function(t,n){e.onload=t,e.onerror=n,e.src=f(),e.complete===!0&&t(e)})}}function C(t,n){var r,i,o=e.createElement("div"),s=e.createElement("img"),a=e.createElement("span"),c="Hidden Text";o.style.visibility="hidden",o.style.fontFamily=t,o.style.fontSize=n,o.style.margin=0,o.style.padding=0,e.body.appendChild(o),s.src=f(),s.width=1,s.height=1,s.style.margin=0,s.style.padding=0,s.style.verticalAlign="baseline",a.style.fontFamily=t,a.style.fontSize=n,a.style.margin=0,a.style.padding=0,a.appendChild(e.createTextNode(c)),o.appendChild(a),o.appendChild(s),r=s.offsetTop-a.offsetTop+1,o.removeChild(a),o.appendChild(e.createTextNode(c)),o.style.lineHeight="normal",s.style.verticalAlign="super",i=s.offsetTop-o.offsetTop+1,e.body.removeChild(o),this.baseline=r,this.lineWidth=1,this.middle=i}function E(){this.data={}}function S(t,e,n){this.image=null,this.src=t;var r=this,i=L(t);this.promise=(e?new Promise(function(e){"about:blank"===t.contentWindow.document.URL||null==t.contentWindow.document.documentElement?t.contentWindow.onload=t.onload=function(){e(t)}:e(t)}):this.proxyLoad(n.proxy,i,n)).then(function(t){return html2canvas(t.contentWindow.document.documentElement,{type:"view",width:t.width,height:t.height,proxy:n.proxy,javascriptEnabled:n.javascriptEnabled,removeContainer:n.removeContainer,allowTaint:n.allowTaint,imageTimeout:n.imageTimeout/2})}).then(function(t){return r.image=t})}function F(t){this.src=t.value,this.colorStops=[],this.type=null,this.x0=.5,this.y0=.5,this.x1=.5,this.y1=.5,this.promise=Promise.resolve(!0)}function T(t,e){this.src=t,this.image=new Image;var n=this;this.tainted=null,this.promise=new Promise(function(r,i){n.image.onload=r,n.image.onerror=i,e&&(n.image.crossOrigin="anonymous"),n.image.src=t,n.image.complete===!0&&r(n.image)})}function P(e,n){this.link=null,this.options=e,this.support=n,this.origin=this.getOrigin(t.location.href)}function _(t){F.apply(this,arguments),this.type=this.TYPES.LINEAR;var e=null===t.args[0].match(this.stepRegExp);e?t.args[0].split(" ").reverse().forEach(function(t){switch(t){case"left":this.x0=0,this.x1=1;break;case"top":this.y0=0,this.y1=1;break;case"right":this.x0=1,this.x1=0;break;case"bottom":this.y0=1,this.y1=0;break;case"to":var e=this.y0,n=this.x0;this.y0=this.y1,this.x0=this.x1,this.x1=n,this.y1=e}},this):(this.y0=0,this.y1=1),this.colorStops=t.args.slice(e?1:0).map(function(t){var e=t.match(this.stepRegExp);return{color:e[1],stop:"%"===e[3]?e[2]/100:null}},this),null===this.colorStops[0].stop&&(this.colorStops[0].stop=0),null===this.colorStops[this.colorStops.length-1].stop&&(this.colorStops[this.colorStops.length-1].stop=1),this.colorStops.forEach(function(t,e){null===t.stop&&this.colorStops.slice(e).some(function(n,r){return null!==n.stop?(t.stop=(n.stop-this.colorStops[e-1].stop)/(r+1)+this.colorStops[e-1].stop,!0):!1},this)},this)}function I(){t.html2canvas.logging&&t.console&&t.console.log&&Function.prototype.bind.call(t.console.log,t.console).apply(t.console,[Date.now()-t.html2canvas.start+"ms","html2canvas:"].concat([].slice.call(arguments,0)))}function q(t,e){this.node=t,this.parent=e,this.stack=null,this.bounds=null,this.borders=null,this.clip=[],this.backgroundClip=[],this.offsetBounds=null,this.visible=null,this.computedStyles=null,this.styles={},this.backgroundImages=null,this.transformData=null,this.transformMatrix=null,this.isPseudoElement=!1,this.opacity=null}function O(t){var e=t.options[t.selectedIndex||0];return e?e.text||"":""}function R(t){return t&&"matrix"===t[1]?t[2].split(",").map(function(t){return parseFloat(t.trim())}):void 0}function B(t){return-1!==t.toString().indexOf("%")}function D(t){var e,n,r,i,o,s,a,c=" \r\n	",u=[],l=0,h=0,d=function(){e&&('"'===n.substr(0,1)&&(n=n.substr(1,n.length-2)),n&&a.push(n),"-"===e.substr(0,1)&&(i=e.indexOf("-",1)+1)>0&&(r=e.substr(0,i),e=e.substr(i)),u.push({prefix:r,method:e.toLowerCase(),value:o,args:a,image:null})),a=[],e=r=n=o=""};return a=[],e=r=n=o="",t.split("").forEach(function(t){if(!(0===l&&c.indexOf(t)>-1)){switch(t){case'"':s?s===t&&(s=null):s=t;break;case"(":if(s)break;if(0===l)return l=1,void(o+=t);h++;break;case")":if(s)break;if(1===l){if(0===h)return l=0,o+=t,void d();h--}break;case",":if(s)break;if(0===l)return void d();if(1===l&&0===h&&!e.match(/^url$/i))return a.push(n),n="",void(o+=t)}o+=t,0===l?e+=t:n+=t}}),d(),u}function N(t){return t.replace("px","")}function j(t){return parseFloat(t)}function L(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect(),n=null==t.offsetWidth?e.width:t.offsetWidth;return{top:e.top,bottom:e.bottom||e.top+e.height,right:e.left+n,left:e.left,width:n,height:null==t.offsetHeight?e.height:t.offsetHeight}}return{}}function M(t){var e=t.offsetParent?M(t.offsetParent):{top:0,left:0};return{top:t.offsetTop+e.top,bottom:t.offsetTop+t.offsetHeight+e.top,right:t.offsetLeft+e.left+t.offsetWidth,left:t.offsetLeft+e.left,width:t.offsetWidth,height:t.offsetHeight}}function z(t,e,n,r,i){I("Starting NodeParser"),this.renderer=e,this.options=i,this.range=null,this.support=n,this.renderQueue=[],this.stack=new Ot(!0,1,t.ownerDocument,null);var o=new q(t,null);if(t===t.ownerDocument.documentElement){var s=new q(this.renderer.isTransparent(o.css("backgroundColor"))?t.ownerDocument.body:t.ownerDocument.documentElement,null);e.rectangle(0,0,e.width,e.height,s.css("backgroundColor"))}o.visibile=o.isElementVisible(),this.createPseudoHideStyles(t.ownerDocument),this.disableAnimations(t.ownerDocument),this.nodes=bt([o].concat(this.getChildren(o)).filter(function(t){return t.visible=t.isElementVisible()}).map(this.getPseudoElements,this)),this.fontMetrics=new E,I("Fetched nodes, total:",this.nodes.length),I("Calculate overflow clips"),this.calculateOverflowClips(),I("Start fetching images"),this.images=r.fetch(this.nodes.filter(ht)),this.ready=this.images.ready.then(gt(function(){return I("Images loaded, starting parsing"),I("Creating stacking contexts"),this.createStackingContexts(),I("Sorting stacking contexts"),this.sortStackingContexts(this.stack),this.parse(this.stack),I("Render queue created with "+this.renderQueue.length+" items"),new Promise(gt(function(t){i.async?"function"==typeof i.async?i.async.call(this,this.renderQueue,t):this.renderQueue.length>0?(this.renderIndex=0,this.asyncRenderer(this.renderQueue,t)):t():(this.renderQueue.forEach(this.paint,this),t())},this))},this))}function U(t){return t.parent&&t.parent.clip.length}function H(t){return t.replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})}function W(){}function V(t,e,n,r){return t.map(function(i,o){if(i.width>0){var s=e.left,a=e.top,c=e.width,u=e.height-t[2].width;switch(o){case 0:u=t[0].width,i.args=Q({c1:[s,a],c2:[s+c,a],c3:[s+c-t[1].width,a+u],c4:[s+t[3].width,a+u]},r[0],r[1],n.topLeftOuter,n.topLeftInner,n.topRightOuter,n.topRightInner);break;case 1:s=e.left+e.width-t[1].width,c=t[1].width,i.args=Q({c1:[s+c,a],c2:[s+c,a+u+t[2].width],c3:[s,a+u],c4:[s,a+t[0].width]},r[1],r[2],n.topRightOuter,n.topRightInner,n.bottomRightOuter,n.bottomRightInner);break;case 2:a=a+e.height-t[2].width,u=t[2].width,i.args=Q({c1:[s+c,a+u],c2:[s,a+u],c3:[s+t[3].width,a],c4:[s+c-t[3].width,a]},r[2],r[3],n.bottomRightOuter,n.bottomRightInner,n.bottomLeftOuter,n.bottomLeftInner);break;case 3:c=t[3].width,i.args=Q({c1:[s,a+u+t[2].width],c2:[s,a],c3:[s+c,a+t[0].width],c4:[s+c,a+u]},r[3],r[0],n.bottomLeftOuter,n.bottomLeftInner,n.topLeftOuter,n.topLeftInner)}}return i})}function X(t,e,n,r){var i=4*((Math.sqrt(2)-1)/3),o=n*i,s=r*i,a=t+n,c=e+r;return{topLeft:G({x:t,y:c},{x:t,y:c-s},{x:a-o,y:e},{x:a,y:e}),topRight:G({x:t,y:e},{x:t+o,y:e},{x:a,y:c-s},{x:a,y:c}),bottomRight:G({x:a,y:e},{x:a,y:e+s},{x:t+o,y:c},{x:t,y:c}),bottomLeft:G({x:a,y:c},{x:a-o,y:c},{x:t,y:e+s},{x:t,y:e})}}function Y(t,e,n){var r=t.left,i=t.top,o=t.width,s=t.height,a=e[0][0],c=e[0][1],u=e[1][0],l=e[1][1],h=e[2][0],d=e[2][1],f=e[3][0],p=e[3][1],m=o-u,g=s-d,w=o-h,y=s-p;return{topLeftOuter:X(r,i,a,c).topLeft.subdivide(.5),topLeftInner:X(r+n[3].width,i+n[0].width,Math.max(0,a-n[3].width),Math.max(0,c-n[0].width)).topLeft.subdivide(.5),topRightOuter:X(r+m,i,u,l).topRight.subdivide(.5),topRightInner:X(r+Math.min(m,o+n[3].width),i+n[0].width,m>o+n[3].width?0:u-n[3].width,l-n[0].width).topRight.subdivide(.5),bottomRightOuter:X(r+w,i+g,h,d).bottomRight.subdivide(.5),bottomRightInner:X(r+Math.min(w,o-n[3].width),i+Math.min(g,s+n[0].width),Math.max(0,h-n[1].width),d-n[2].width).bottomRight.subdivide(.5),bottomLeftOuter:X(r,i+y,f,p).bottomLeft.subdivide(.5),bottomLeftInner:X(r+n[3].width,i+y,Math.max(0,f-n[3].width),p-n[2].width).bottomLeft.subdivide(.5)}}function G(t,e,n,r){var i=function(t,e,n){return{x:t.x+(e.x-t.x)*n,y:t.y+(e.y-t.y)*n}};return{start:t,startControl:e,endControl:n,end:r,subdivide:function(o){var s=i(t,e,o),a=i(e,n,o),c=i(n,r,o),u=i(s,a,o),l=i(a,c,o),h=i(u,l,o);return[G(t,s,u,h),G(h,l,c,r)]},curveTo:function(t){t.push(["bezierCurve",e.x,e.y,n.x,n.y,r.x,r.y])},curveToReversed:function(r){r.push(["bezierCurve",n.x,n.y,e.x,e.y,t.x,t.y])}}}function Q(t,e,n,r,i,o,s){var a=[];return e[0]>0||e[1]>0?(a.push(["line",r[1].start.x,r[1].start.y]),r[1].curveTo(a)):a.push(["line",t.c1[0],t.c1[1]]),n[0]>0||n[1]>0?(a.push(["line",o[0].start.x,o[0].start.y]),o[0].curveTo(a),a.push(["line",s[0].end.x,s[0].end.y]),s[0].curveToReversed(a)):(a.push(["line",t.c2[0],t.c2[1]]),a.push(["line",t.c3[0],t.c3[1]])),e[0]>0||e[1]>0?(a.push(["line",i[1].end.x,i[1].end.y]),i[1].curveToReversed(a)):a.push(["line",t.c4[0],t.c4[1]]),a}function J(t,e,n,r,i,o,s){e[0]>0||e[1]>0?(t.push(["line",r[0].start.x,r[0].start.y]),r[0].curveTo(t),r[1].curveTo(t)):t.push(["line",o,s]),(n[0]>0||n[1]>0)&&t.push(["line",i[0].start.x,i[0].start.y])}function K(t){return t.cssInt("zIndex")<0}function $(t){return t.cssInt("zIndex")>0}function Z(t){return 0===t.cssInt("zIndex")}function tt(t){return-1!==["inline","inline-block","inline-table"].indexOf(t.css("display"))}function et(t){return t instanceof Ot}function nt(t){return t.node.data.trim().length>0}function rt(t){return/^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))}function it(t){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(e){var n=t.css("border"+e+"Radius"),r=n.split(" ");return r.length<=1&&(r[1]=r[0]),r.map(wt)})}function ot(t){return t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE}function st(t){var e=t.css("position"),n=-1!==["absolute","relative","fixed"].indexOf(e)?t.css("zIndex"):"auto";return"auto"!==n}function at(t){return"static"!==t.css("position")}function ct(t){return"none"!==t.css("float")}function ut(t){return-1!==["inline-block","inline-table"].indexOf(t.css("display"))}function lt(t){var e=this;return function(){return!t.apply(e,arguments)}}function ht(t){return t.node.nodeType===Node.ELEMENT_NODE}function dt(t){return t.isPseudoElement===!0}function ft(t){return t.node.nodeType===Node.TEXT_NODE}function pt(t){return function(e,n){return e.cssInt("zIndex")+t.indexOf(e)/t.length-(n.cssInt("zIndex")+t.indexOf(n)/t.length)}}function mt(t){return t.getOpacity()<1}function gt(t,e){return function(){return t.apply(e,arguments)}}function wt(t){return parseInt(t,10)}function yt(t){return t.width}function vt(t){return t.node.nodeType!==Node.ELEMENT_NODE||-1===["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"].indexOf(t.node.nodeName)}function bt(t){return[].concat.apply([],t)}function xt(t){var e=t.substr(0,1);return e===t.substr(t.length-1)&&e.match(/'|"/)?t.substr(1,t.length-2):t}function kt(e){for(var n,r=[],i=0,o=!1;e.length;)At(e[i])===o?(n=e.splice(0,i),n.length&&r.push(t.html2canvas.punycode.ucs2.encode(n)),o=!o,i=0):i++,i>=e.length&&(n=e.splice(0,i),n.length&&r.push(t.html2canvas.punycode.ucs2.encode(n)));return r}function At(t){return-1!==[32,13,10,9,45].indexOf(t)}function Ct(t){return/[^\u0000-\u00ff]/.test(t)}function Et(t,e,n){var r=Tt(Gt),i=Pt(e,t,r);return Gt?zt(i):Ft(n,i,r).then(function(t){return Dt(t.content)})}function St(t,e,n){var r=Tt(Qt),i=Pt(e,t,r);return Qt?Promise.resolve(i):Ft(n,i,r).then(function(t){return"data:"+t.type+";base64,"+t.content})}function Ft(e,n,r){return new Promise(function(i,o){var s=e.createElement("script"),a=function(){delete t.html2canvas.proxy[r],e.body.removeChild(s)};t.html2canvas.proxy[r]=function(t){a(),i(t)},s.src=n,s.onerror=function(t){a(),o(t)},e.body.appendChild(s)})}function Tt(t){return t?"":"html2canvas_"+Date.now()+"_"+ ++Yt+"_"+Math.round(1e5*Math.random())}function Pt(t,e,n){return t+"?url="+encodeURIComponent(e)+(n.length?"&callback=html2canvas.proxy."+n:"")}function _t(t,n){var r=(e.createElement("script"),e.createElement("a"));r.href=t,t=r.href,this.src=t,this.image=new Image;var i=this;this.promise=new Promise(function(r,o){i.image.crossOrigin="Anonymous",i.image.onload=r,i.image.onerror=o,new St(t,n,e).then(function(t){i.image.src=t})["catch"](o)})}function It(t,e,n){q.call(this,t,e),this.isPseudoElement=!0,this.before=":before"===n}function qt(t,e,n,r,i){this.width=t,this.height=e,this.images=n,this.options=r,this.document=i}function Ot(t,e,n,r){q.call(this,n,r),this.ownStacking=t,this.contexts=[],this.children=[],this.opacity=(this.parent?this.parent.stack.opacity:1)*e}function Rt(t){this.rangeBounds=this.testRangeBounds(t),this.cors=this.testCORS(),this.svg=this.testSVG()}function Bt(t){this.src=t,this.image=null;var e=this;this.promise=this.hasFabric().then(function(){return e.isInline(t)?Promise.resolve(e.inlineFormatting(t)):zt(t)}).then(function(t){return new Promise(function(n){html2canvas.fabric.loadSVGFromString(t,e.createCanvas.call(e,n))})})}function Dt(t){var e,n,r,i,o,s,a,c,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=t.length,h="";for(e=0;l>e;e+=4)n=u.indexOf(t[e]),r=u.indexOf(t[e+1]),i=u.indexOf(t[e+2]),o=u.indexOf(t[e+3]),s=n<<2|r>>4,a=(15&r)<<4|i>>2,c=(3&i)<<6|o,h+=64===i?String.fromCharCode(s):64===o||-1===o?String.fromCharCode(s,a):String.fromCharCode(s,a,c);return h}function Nt(t,e){this.src=t,this.image=null;var n=this;this.promise=e?new Promise(function(e,r){n.image=new Image,n.image.onload=e,n.image.onerror=r,n.image.src="data:image/svg+xml,"+(new XMLSerializer).serializeToString(t),n.image.complete===!0&&e(n.image)}):this.hasFabric().then(function(){return new Promise(function(e){html2canvas.fabric.parseSVGDocument(t,n.createCanvas.call(n,e))})})}function jt(t,e){q.call(this,t,e)}function Lt(t,e,n){return t.length>0?e+n.toUpperCase():void 0}function Mt(t){F.apply(this,arguments),this.type="linear"===t.args[0]?this.TYPES.LINEAR:this.TYPES.RADIAL}function zt(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.onload=function(){200===r.status?e(r.responseText):n(new Error(r.statusText))},r.onerror=function(){n(new Error("Network Error"))},r.send()})}function Ut(t,e){qt.apply(this,arguments),this.canvas=this.options.canvas||this.document.createElement("canvas"),this.options.canvas||(this.canvas.width=t,this.canvas.height=e),this.ctx=this.canvas.getContext("2d"),this.options.background&&this.rectangle(0,0,t,e,this.options.background),this.taintCtx=this.document.createElement("canvas").getContext("2d"),this.ctx.textBaseline="bottom",this.variables={},I("Initialized CanvasRenderer with size",t,"x",e)}function Ht(t){return t.length>0}if(!function(){var n,r,o,s;!function(){var t={},e={};n=function(e,n,r){t[e]={deps:n,callback:r}},s=o=r=function(n){function i(t){if("."!==t.charAt(0))return t;for(var e=t.split("/"),r=n.split("/").slice(0,-1),i=0,o=e.length;o>i;i++){var s=e[i];if(".."===s)r.pop();else{if("."===s)continue;r.push(s)}}return r.join("/")}if(s._eak_seen=t,e[n])return e[n];if(e[n]={},!t[n])throw new Error("Could not find module "+n);for(var o,a=t[n],c=a.deps,u=a.callback,l=[],h=0,d=c.length;d>h;h++)"exports"===c[h]?l.push(o={}):l.push(r(i(c[h])));var f=u.apply(this,l);return e[n]=o||f}}(),n("promise/all",["./utils","exports"],function(t,e){"use strict";function n(t){var e=this;if(!r(t))throw new TypeError("You must pass an array to all.");return new e(function(e,n){function r(t){return function(e){o(t,e)}}function o(t,n){a[t]=n,0===--c&&e(a)}var s,a=[],c=t.length;0===c&&e([]);for(var u=0;u<t.length;u++)s=t[u],s&&i(s.then)?s.then(r(u),n):o(u,s)})}var r=t.isArray,i=t.isFunction;e.all=n}),n("promise/asap",["exports"],function(n){"use strict";function r(){return function(){process.nextTick(a)}}function o(){var t=0,n=new h(a),r=e.createTextNode("");return n.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function s(){return function(){d.setTimeout(a,1)}}function a(){for(var t=0;t<f.length;t++){var e=f[t],n=e[0],r=e[1];n(r)}f=[]}function c(t,e){var n=f.push([t,e]);1===n&&u()}var u,l="undefined"!=typeof t?t:{},h=l.MutationObserver||l.WebKitMutationObserver,d="undefined"!=typeof i?i:this,f=[];u="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?r():h?o():s(),n.asap=c}),n("promise/cast",["exports"],function(t){"use strict";function e(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=this;return new e(function(e){e(t)})}t.cast=e}),n("promise/config",["exports"],function(t){"use strict";function e(t,e){return 2!==arguments.length?n[t]:void(n[t]=e)}var n={instrument:!1};t.config=n,t.configure=e}),n("promise/polyfill",["./promise","./utils","exports"],function(e,n,r){"use strict";function i(){var e="Promise"in t&&"cast"in t.Promise&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var e;return new t.Promise(function(t){e=t}),s(e)}();e||(t.Promise=o)}var o=e.Promise,s=n.isFunction;r.polyfill=i}),n("promise/promise",["./config","./utils","./cast","./all","./race","./resolve","./reject","./asap","exports"],function(t,e,n,r,i,o,s,a,c){"use strict";function u(t){if(!k(t))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof u))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],l(t,this)}function l(t,e){function n(t){m(e,t)}function r(t){w(e,t)}try{t(n,r)}catch(i){r(i)}}function h(t,e,n,r){var i,o,s,a,c=k(n);if(c)try{i=n(r),s=!0}catch(u){a=!0,o=u}else i=r,s=!0;p(e,i)||(c&&s?m(e,i):a?w(e,o):t===I?m(e,i):t===q&&w(e,i))}function d(t,e,n,r){var i=t._subscribers,o=i.length;i[o]=e,i[o+I]=n,i[o+q]=r}function f(t,e){for(var n,r,i=t._subscribers,o=t._detail,s=0;s<i.length;s+=3)n=i[s],r=i[s+e],h(e,n,r,o);t._subscribers=null}function p(t,e){var n,r=null;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(x(e)&&(r=e.then,k(r)))return r.call(e,function(r){return n?!0:(n=!0,void(e!==r?m(t,r):g(t,r)))},function(e){return n?!0:(n=!0,void w(t,e))}),!0}catch(i){return n?!0:(w(t,i),!0)}return!1}function m(t,e){t===e?g(t,e):p(t,e)||g(t,e)}function g(t,e){t._state===P&&(t._state=_,t._detail=e,b.async(y,t))}function w(t,e){t._state===P&&(t._state=_,t._detail=e,b.async(v,t))}function y(t){f(t,t._state=I)}function v(t){f(t,t._state=q)}var b=t.config,x=(t.configure,e.objectOrFunction),k=e.isFunction,A=(e.now,n.cast),C=r.all,E=i.race,S=o.resolve,F=s.reject,T=a.asap;b.async=T;var P=void 0,_=0,I=1,q=2;u.prototype={constructor:u,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(t,e){var n=this,r=new this.constructor(function(){});if(this._state){var i=arguments;b.async(function(){h(n._state,r,i[n._state-1],n._detail)})}else d(this,r,t,e);return r},"catch":function(t){return this.then(null,t)}},u.all=C,u.cast=A,u.race=E,u.resolve=S,u.reject=F,c.Promise=u}),n("promise/race",["./utils","exports"],function(t,e){"use strict";function n(t){var e=this;if(!r(t))throw new TypeError("You must pass an array to race.");return new e(function(e,n){for(var r,i=0;i<t.length;i++)r=t[i],r&&"function"==typeof r.then?r.then(e,n):e(r)})}var r=t.isArray;e.race=n}),n("promise/reject",["exports"],function(t){"use strict";function e(t){var e=this;return new e(function(e,n){n(t)})}t.reject=e}),n("promise/resolve",["exports"],function(t){"use strict";function e(t){var e=this;return new e(function(e){e(t)})}t.resolve=e}),n("promise/utils",["exports"],function(t){"use strict";function e(t){return n(t)||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function r(t){return"[object Array]"===Object.prototype.toString.call(t)}var i=Date.now||function(){return(new Date).getTime()};t.objectOrFunction=e,t.isFunction=n,t.isArray=r,t.now=i}),r("promise/polyfill").polyfill()}(),"function"!=typeof Object.create||"function"!=typeof e.createElement("canvas").getContext)return void(t.html2canvas=function(){return Promise.reject("No canvas support")});!function(t){function e(t){throw RangeError(R[t])}function s(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function a(t,e){var n=t.split("@"),r="";n.length>1&&(r=n[0]+"@",t=n[1]);var i=t.split(O),o=s(i,e).join(".");return r+o}function c(t){for(var e,n,r=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e);return r}function u(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=N(t>>>10&1023|55296),t=56320|1023&t),e+=N(t)}).join("")}function l(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:A}function h(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function d(t,e,n){var r=0;for(t=n?D(t/F):t>>1,t+=D(t/e);t>B*E>>1;r+=A)t=D(t/B);return D(r+(B+1)*t/(t+S))}function f(t){var n,r,i,o,s,a,c,h,f,p,m=[],g=t.length,w=0,y=P,v=T;for(r=t.lastIndexOf(_),0>r&&(r=0),i=0;r>i;++i)t.charCodeAt(i)>=128&&e("not-basic"),m.push(t.charCodeAt(i));for(o=r>0?r+1:0;g>o;){for(s=w,a=1,c=A;o>=g&&e("invalid-input"),h=l(t.charCodeAt(o++)),(h>=A||h>D((k-w)/a))&&e("overflow"),w+=h*a,f=v>=c?C:c>=v+E?E:c-v,!(f>h);c+=A)p=A-f,a>D(k/p)&&e("overflow"),a*=p;n=m.length+1,v=d(w-s,n,0==s),D(w/n)>k-y&&e("overflow"),y+=D(w/n),w%=n,m.splice(w++,0,y)}return u(m)}function p(t){var n,r,i,o,s,a,u,l,f,p,m,g,w,y,v,b=[];for(t=c(t),g=t.length,n=P,r=0,s=T,a=0;g>a;++a)m=t[a],128>m&&b.push(N(m));for(i=o=b.length,o&&b.push(_);g>i;){for(u=k,a=0;g>a;++a)m=t[a],m>=n&&u>m&&(u=m);for(w=i+1,u-n>D((k-r)/w)&&e("overflow"),r+=(u-n)*w,n=u,a=0;g>a;++a)if(m=t[a],n>m&&++r>k&&e("overflow"),m==n){for(l=r,f=A;p=s>=f?C:f>=s+E?E:f-s,!(p>l);f+=A)v=l-p,y=A-p,b.push(N(h(p+v%y,0))),l=D(v/y);b.push(N(h(l,0))),s=d(r,w,i==o),r=0,++i}++r,++n}return b.join("")}function m(t){return a(t,function(t){return I.test(t)?f(t.slice(4).toLowerCase()):t})}function g(t){return a(t,function(t){return q.test(t)?"xn--"+p(t):t})}var w="object"==typeof r&&r&&!r.nodeType&&r,y="object"==typeof n&&n&&!n.nodeType&&n,v="object"==typeof i&&i;v.global!==v&&v.window!==v&&v.self!==v||(t=v);var b,x,k=2147483647,A=36,C=1,E=26,S=38,F=700,T=72,P=128,_="-",I=/^xn--/,q=/[^\x20-\x7E]/,O=/[\x2E\u3002\uFF0E\uFF61]/g,R={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},B=A-C,D=Math.floor,N=String.fromCharCode;if(b={version:"1.3.1",ucs2:{decode:c,encode:u},decode:f,encode:p,toASCII:g,toUnicode:m},"function"==typeof o&&"object"==typeof o.amd&&o.amd)o("punycode",function(){return b});else if(w&&y)if(n.exports==w)y.exports=b;else for(x in b)b.hasOwnProperty(x)&&(w[x]=b[x]);else t.punycode=b}(this);var Wt="data-html2canvas-node",Vt="data-html2canvas-canvas-clone",Xt=0;t.html2canvas=function(n,r){if(r=r||{},r.logging&&(t.html2canvas.logging=!0,t.html2canvas.start=Date.now()),r.async="undefined"==typeof r.async?!0:r.async,r.allowTaint="undefined"==typeof r.allowTaint?!1:r.allowTaint,r.removeContainer="undefined"==typeof r.removeContainer?!0:r.removeContainer,r.javascriptEnabled="undefined"==typeof r.javascriptEnabled?!1:r.javascriptEnabled,r.imageTimeout="undefined"==typeof r.imageTimeout?1e4:r.imageTimeout,"string"==typeof n)return"string"!=typeof r.proxy?Promise.reject("Proxy must be used when rendering url"):g(k(n),r.proxy,e,t.innerWidth,t.innerHeight,r).then(function(e){return c(e.contentWindow.document.documentElement,e,r,t.innerWidth,t.innerHeight)});var i=(n===s?[e.documentElement]:n.length?n:[n])[0];return i.setAttribute(Wt,"true"),a(i.ownerDocument,r,i.ownerDocument.defaultView.innerWidth,i.ownerDocument.defaultView.innerHeight).then(function(t){return"function"==typeof r.onrendered&&(I("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),r.onrendered(t)),t})},t.html2canvas.punycode=this.punycode,t.html2canvas.proxy={},E.prototype.getMetrics=function(t,e){return this.data[t+"-"+e]===s&&(this.data[t+"-"+e]=new C(t,e)),this.data[t+"-"+e]},S.prototype.proxyLoad=function(t,e,n){var r=this.src;return g(r.src,t,r.ownerDocument,e.width,e.height,n)},F.prototype.TYPES={LINEAR:1,RADIAL:2},P.prototype.findImages=function(t){var e=[];return t.reduce(function(t,e){switch(e.node.nodeName){case"IMG":return t.concat([{args:[e.node.src],method:"url"}]);case"svg":case"IFRAME":return t.concat([{args:[e.node],method:e.node.nodeName}])}return t},[]).forEach(this.addImage(e,this.loadImage),this),e},P.prototype.findBackgroundImage=function(t,e){return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t,this.loadImage),this),t},P.prototype.addImage=function(t,e){return function(n){n.args.forEach(function(r){this.imageExists(t,r)||(t.splice(0,0,e.call(this,n)),I("Added image #"+t.length,"string"==typeof r?r.substring(0,100):r))},this)}},P.prototype.hasImageBackground=function(t){return"none"!==t.method},P.prototype.loadImage=function(t){if("url"===t.method){var e=t.args[0];return!this.isSVG(e)||this.support.svg||this.options.allowTaint?e.match(/data:image\/.*;base64,/i)?new T(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi,""),!1):this.isSameOrigin(e)||this.options.allowTaint===!0||this.isSVG(e)?new T(e,!1):this.support.cors&&!this.options.allowTaint&&this.options.useCORS?new T(e,!0):this.options.proxy?new _t(e,this.options.proxy):new A(e):new Bt(e)}return"linear-gradient"===t.method?new _(t):"gradient"===t.method?new Mt(t):"svg"===t.method?new Nt(t.args[0],this.support.svg):"IFRAME"===t.method?new S(t.args[0],this.isSameOrigin(t.args[0].src),this.options):new A(t)},P.prototype.isSVG=function(t){return"svg"===t.substring(t.length-3).toLowerCase()||Bt.prototype.isInline(t)},P.prototype.imageExists=function(t,e){return t.some(function(t){return t.src===e})},P.prototype.isSameOrigin=function(t){return this.getOrigin(t)===this.origin},P.prototype.getOrigin=function(t){var n=this.link||(this.link=e.createElement("a"));return n.href=t,n.href=n.href,n.protocol+n.hostname+n.port},P.prototype.getPromise=function(t){return this.timeout(t,this.options.imageTimeout)["catch"](function(){var e=new A(t.src);return e.promise.then(function(e){t.image=e})})},P.prototype.get=function(t){var e=null;return this.images.some(function(n){return(e=n).src===t})?e:null},P.prototype.fetch=function(t){
return this.images=t.reduce(gt(this.findBackgroundImage,this),this.findImages(t)),this.images.forEach(function(t,e){t.promise.then(function(){I("Succesfully loaded image #"+(e+1),t)},function(n){I("Failed loading image #"+(e+1),t,n)})}),this.ready=Promise.all(this.images.map(this.getPromise,this)),I("Finished searching images"),this},P.prototype.timeout=function(t,e){var n;return Promise.race([t.promise,new Promise(function(r,i){n=setTimeout(function(){I("Timed out loading image",t),i(t)},e)})]).then(function(t){return clearTimeout(n),t})},_.prototype=Object.create(F.prototype),_.prototype.stepRegExp=/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/,q.prototype.cloneTo=function(t){t.visible=this.visible,t.borders=this.borders,t.bounds=this.bounds,t.clip=this.clip,t.backgroundClip=this.backgroundClip,t.computedStyles=this.computedStyles,t.styles=this.styles,t.backgroundImages=this.backgroundImages,t.opacity=this.opacity},q.prototype.getOpacity=function(){return null===this.opacity?this.opacity=this.cssFloat("opacity"):this.opacity},q.prototype.assignStack=function(t){this.stack=t,t.children.push(this)},q.prototype.isElementVisible=function(){return this.node.nodeType===Node.TEXT_NODE?this.parent.visible:"none"!==this.css("display")&&"hidden"!==this.css("visibility")&&!this.node.hasAttribute("data-html2canvas-ignore")&&("INPUT"!==this.node.nodeName||"hidden"!==this.node.getAttribute("type"))},q.prototype.css=function(t){return this.computedStyles||(this.computedStyles=this.isPseudoElement?this.parent.computedStyle(this.before?":before":":after"):this.computedStyle(null)),this.styles[t]||(this.styles[t]=this.computedStyles[t])},q.prototype.prefixedCss=function(t){var e=["webkit","moz","ms","o"],n=this.css(t);return n===s&&e.some(function(e){return n=this.css(e+t.substr(0,1).toUpperCase()+t.substr(1)),n!==s},this),n===s?null:n},q.prototype.computedStyle=function(t){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,t)},q.prototype.cssInt=function(t){var e=parseInt(this.css(t),10);return isNaN(e)?0:e},q.prototype.cssFloat=function(t){var e=parseFloat(this.css(t));return isNaN(e)?0:e},q.prototype.fontWeight=function(){var t=this.css("fontWeight");switch(parseInt(t,10)){case 401:t="bold";break;case 400:t="normal"}return t},q.prototype.parseClip=function(){var t=this.css("clip").match(this.CLIP);return t?{top:parseInt(t[1],10),right:parseInt(t[2],10),bottom:parseInt(t[3],10),left:parseInt(t[4],10)}:null},q.prototype.parseBackgroundImages=function(){return this.backgroundImages||(this.backgroundImages=D(this.css("backgroundImage")))},q.prototype.cssList=function(t,e){var n=(this.css(t)||"").split(",");return n=n[e||0]||n[0]||"auto",n=n.trim().split(" "),1===n.length&&(n=[n[0],n[0]]),n},q.prototype.parseBackgroundSize=function(t,e,n){var r,i,o=this.cssList("backgroundSize",n);if(B(o[0]))r=t.width*parseFloat(o[0])/100;else{if(/contain|cover/.test(o[0])){var s=t.width/t.height,a=e.width/e.height;return a>s^"contain"===o[0]?{width:t.height*a,height:t.height}:{width:t.width,height:t.width/a}}r=parseInt(o[0],10)}return i="auto"===o[0]&&"auto"===o[1]?e.height:"auto"===o[1]?r/e.width*e.height:B(o[1])?t.height*parseFloat(o[1])/100:parseInt(o[1],10),"auto"===o[0]&&(r=i/e.height*e.width),{width:r,height:i}},q.prototype.parseBackgroundPosition=function(t,e,n,r){var i,o,s=this.cssList("backgroundPosition",n);return i=B(s[0])?(t.width-(r||e).width)*(parseFloat(s[0])/100):parseInt(s[0],10),o="auto"===s[1]?i/e.width*e.height:B(s[1])?(t.height-(r||e).height)*parseFloat(s[1])/100:parseInt(s[1],10),"auto"===s[0]&&(i=o/e.height*e.width),{left:i,top:o}},q.prototype.parseBackgroundRepeat=function(t){return this.cssList("backgroundRepeat",t)[0]},q.prototype.parseTextShadows=function(){var t=this.css("textShadow"),e=[];if(t&&"none"!==t)for(var n=t.match(this.TEXT_SHADOW_PROPERTY),r=0;n&&r<n.length;r++){var i=n[r].match(this.TEXT_SHADOW_VALUES);e.push({color:i[0],offsetX:i[1]?parseFloat(i[1].replace("px","")):0,offsetY:i[2]?parseFloat(i[2].replace("px","")):0,blur:i[3]?i[3].replace("px",""):0})}return e},q.prototype.parseTransform=function(){if(!this.transformData)if(this.hasTransform()){var t=this.parseBounds(),e=this.prefixedCss("transformOrigin").split(" ").map(N).map(j);e[0]+=t.left,e[1]+=t.top,this.transformData={origin:e,matrix:this.parseTransformMatrix()}}else this.transformData={origin:[0,0],matrix:[1,0,0,1,0,0]};return this.transformData},q.prototype.parseTransformMatrix=function(){if(!this.transformMatrix){var t=this.prefixedCss("transform"),e=t?R(t.match(this.MATRIX_PROPERTY)):null;this.transformMatrix=e?e:[1,0,0,1,0,0]}return this.transformMatrix},q.prototype.parseBounds=function(){return this.bounds||(this.bounds=this.hasTransform()?M(this.node):L(this.node))},q.prototype.hasTransform=function(){return"1,0,0,1,0,0"!==this.parseTransformMatrix().join(",")||this.parent&&this.parent.hasTransform()},q.prototype.getValue=function(){var t=this.node.value||"";return t="SELECT"===this.node.tagName?O(this.node):t,0===t.length?this.node.placeholder||"":t},q.prototype.MATRIX_PROPERTY=/(matrix)\((.+)\)/,q.prototype.TEXT_SHADOW_PROPERTY=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,q.prototype.TEXT_SHADOW_VALUES=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,q.prototype.CLIP=/^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,z.prototype.calculateOverflowClips=function(){this.nodes.forEach(function(t){if(ht(t)){dt(t)&&t.appendToDOM(),t.borders=this.parseBorders(t);var e="hidden"===t.css("overflow")?[t.borders.clip]:[],n=t.parseClip();n&&-1!==["absolute","fixed"].indexOf(t.css("position"))&&e.push([["rect",t.bounds.left+n.left,t.bounds.top+n.top,n.right-n.left,n.bottom-n.top]]),t.clip=U(t)?t.parent.clip.concat(e):e,t.backgroundClip="hidden"!==t.css("overflow")?t.clip.concat([t.borders.clip]):t.clip,dt(t)&&t.cleanDOM()}else ft(t)&&(t.clip=U(t)?t.parent.clip:[]);dt(t)||(t.bounds=null)},this)},z.prototype.asyncRenderer=function(t,e,n){n=n||Date.now(),this.paint(t[this.renderIndex++]),t.length===this.renderIndex?e():n+20>Date.now()?this.asyncRenderer(t,e,n):setTimeout(gt(function(){this.asyncRenderer(t,e)},this),0)},z.prototype.createPseudoHideStyles=function(t){this.createStyles(t,"."+It.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+':before { content: "" !important; display: none !important; }.'+It.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER+':after { content: "" !important; display: none !important; }')},z.prototype.disableAnimations=function(t){this.createStyles(t,"* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")},z.prototype.createStyles=function(t,e){var n=t.createElement("style");n.innerHTML=e,t.body.appendChild(n)},z.prototype.getPseudoElements=function(t){var e=[[t]];if(t.node.nodeType===Node.ELEMENT_NODE){var n=this.getPseudoElement(t,":before"),r=this.getPseudoElement(t,":after");n&&e.push(n),r&&e.push(r)}return bt(e)},z.prototype.getPseudoElement=function(t,n){var r=t.computedStyle(n);if(!r||!r.content||"none"===r.content||"-moz-alt-content"===r.content||"none"===r.display)return null;for(var i=xt(r.content),o="url"===i.substr(0,3),s=e.createElement(o?"img":"html2canvaspseudoelement"),a=new It(s,t,n),c=r.length-1;c>=0;c--){var u=H(r.item(c));s.style[u]=r[u]}if(s.className=It.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+It.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,o)return s.src=D(i)[0].args[0],[a];var l=e.createTextNode(i);return s.appendChild(l),[a,new jt(l,a)]},z.prototype.getChildren=function(t){return bt([].filter.call(t.node.childNodes,ot).map(function(e){var n=[e.nodeType===Node.TEXT_NODE?new jt(e,t):new q(e,t)].filter(vt);return e.nodeType===Node.ELEMENT_NODE&&n.length&&"TEXTAREA"!==e.tagName?n[0].isElementVisible()?n.concat(this.getChildren(n[0])):[]:n},this))},z.prototype.newStackingContext=function(t,e){var n=new Ot(e,t.getOpacity(),t.node,t.parent);t.cloneTo(n);var r=e?n.getParentStack(this):n.parent.stack;r.contexts.push(n),t.stack=n},z.prototype.createStackingContexts=function(){this.nodes.forEach(function(t){ht(t)&&(this.isRootElement(t)||mt(t)||st(t)||this.isBodyWithTransparentRoot(t)||t.hasTransform())?this.newStackingContext(t,!0):ht(t)&&(at(t)&&Z(t)||ut(t)||ct(t))?this.newStackingContext(t,!1):t.assignStack(t.parent.stack)},this)},z.prototype.isBodyWithTransparentRoot=function(t){return"BODY"===t.node.nodeName&&this.renderer.isTransparent(t.parent.css("backgroundColor"))},z.prototype.isRootElement=function(t){return null===t.parent},z.prototype.sortStackingContexts=function(t){t.contexts.sort(pt(t.contexts.slice(0))),t.contexts.forEach(this.sortStackingContexts,this)},z.prototype.parseTextBounds=function(t){return function(e,n,r){if("none"!==t.parent.css("textDecoration").substr(0,4)||0!==e.trim().length){if(this.support.rangeBounds&&!t.parent.hasTransform()){var i=r.slice(0,n).join("").length;return this.getRangeBounds(t.node,i,e.length)}if(t.node&&"string"==typeof t.node.data){var o=t.node.splitText(e.length),s=this.getWrapperBounds(t.node,t.parent.hasTransform());return t.node=o,s}}else this.support.rangeBounds&&!t.parent.hasTransform()||(t.node=t.node.splitText(e.length));return{}}},z.prototype.getWrapperBounds=function(t,e){var n=t.ownerDocument.createElement("html2canvaswrapper"),r=t.parentNode,i=t.cloneNode(!0);n.appendChild(t.cloneNode(!0)),r.replaceChild(n,t);var o=e?M(n):L(n);return r.replaceChild(i,n),o},z.prototype.getRangeBounds=function(t,e,n){var r=this.range||(this.range=t.ownerDocument.createRange());return r.setStart(t,e),r.setEnd(t,e+n),r.getBoundingClientRect()},z.prototype.parse=function(t){var e=t.contexts.filter(K),n=t.children.filter(ht),r=n.filter(lt(ct)),i=r.filter(lt(at)).filter(lt(tt)),o=n.filter(lt(at)).filter(ct),s=r.filter(lt(at)).filter(tt),a=t.contexts.concat(r.filter(at)).filter(Z),c=t.children.filter(ft).filter(nt),u=t.contexts.filter($);e.concat(i).concat(o).concat(s).concat(a).concat(c).concat(u).forEach(function(t){this.renderQueue.push(t),et(t)&&(this.parse(t),this.renderQueue.push(new W))},this)},z.prototype.paint=function(t){try{t instanceof W?this.renderer.ctx.restore():ft(t)?(dt(t.parent)&&t.parent.appendToDOM(),this.paintText(t),dt(t.parent)&&t.parent.cleanDOM()):this.paintNode(t)}catch(e){I(e)}},z.prototype.paintNode=function(t){if(et(t)&&(this.renderer.setOpacity(t.opacity),this.renderer.ctx.save(),t.hasTransform()&&this.renderer.setTransform(t.parseTransform())),"INPUT"===t.node.nodeName&&"checkbox"===t.node.type)this.paintCheckbox(t);else if("INPUT"===t.node.nodeName&&"radio"===t.node.type)this.paintRadio(t);else{if("always"===t.css("page-break-before")){var e=this.options.canvas.getContext("2d");"function"==typeof e._pageBreakAt&&e._pageBreakAt(t.node.offsetTop)}this.paintElement(t)}if(t.node.getAttribute){var n=t.node.getAttribute("name");if(null===n)var n=t.node.getAttribute("id");if(null!==n){var r=this.options.canvas.annotations;r&&r.setName(n,t.bounds)}}},z.prototype.paintElement=function(t){var e=t.parseBounds();this.renderer.clip(t.backgroundClip,function(){this.renderer.renderBackground(t,e,t.borders.borders.map(yt))},this),this.renderer.clip(t.clip,function(){this.renderer.renderBorders(t.borders.borders)},this),this.renderer.clip(t.backgroundClip,function(){switch(t.node.nodeName){case"svg":case"IFRAME":var n=this.images.get(t.node);n?this.renderer.renderImage(t,e,t.borders,n):I("Error loading <"+t.node.nodeName+">",t.node);break;case"IMG":var r=this.images.get(t.node.src);r?this.renderer.renderImage(t,e,t.borders,r):I("Error loading <img>",t.node.src);break;case"CANVAS":this.renderer.renderImage(t,e,t.borders,{image:t.node});break;case"SELECT":case"INPUT":case"TEXTAREA":this.paintFormValue(t)}},this)},z.prototype.paintCheckbox=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height),r={width:n-1,height:n-1,top:e.top,left:e.left},i=[3,3],o=[i,i,i,i],s=[1,1,1,1].map(function(t){return{color:"#A5A5A5",width:t}}),a=Y(r,o,s);this.renderer.clip(t.backgroundClip,function(){this.renderer.rectangle(r.left+1,r.top+1,r.width-2,r.height-2,"#DEDEDE"),this.renderer.renderBorders(V(s,r,a,o)),t.node.checked&&(this.renderer.font("#424242","normal","normal","bold",n-3+"px","arial"),this.renderer.text("✔",r.left+n/6,r.top+n-1))},this)},z.prototype.paintRadio=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height)-2;this.renderer.clip(t.backgroundClip,function(){this.renderer.circleStroke(e.left+1,e.top+1,n,"#DEDEDE",1,"#A5A5A5"),t.node.checked&&this.renderer.circle(Math.ceil(e.left+n/4)+1,Math.ceil(e.top+n/4)+1,Math.floor(n/2),"#424242")},this)},z.prototype.paintFormValue=function(t){if(t.getValue().length>0){var e=t.node.ownerDocument,n=e.createElement("html2canvaswrapper"),r=["lineHeight","textAlign","fontFamily","fontWeight","fontSize","color","paddingLeft","paddingTop","paddingRight","paddingBottom","width","height","borderLeftStyle","borderTopStyle","borderLeftWidth","borderTopWidth","boxSizing","whiteSpace","wordWrap"];r.forEach(function(e){try{n.style[e]=t.css(e)}catch(r){I("html2canvas: Parse: Exception caught in renderFormValue: "+r.message)}});var i=t.parseBounds();n.style.position="fixed",n.style.left=i.left+"px",n.style.top=i.top+"px",n.textContent=t.getValue(),e.body.appendChild(n),this.paintText(new jt(n.firstChild,t)),e.body.removeChild(n)}},z.prototype.paintText=function(e){e.applyTextTransform();var n=t.html2canvas.punycode.ucs2.decode(e.node.data),r=this.options.letterRendering&&!rt(e)||Ct(e.node.data)?n.map(function(e){return t.html2canvas.punycode.ucs2.encode([e])}):kt(n),i=e.parent.fontWeight(),o=e.parent.css("fontSize"),a=e.parent.css("fontFamily"),c=e.parent.parseTextShadows();this.renderer.font(e.parent.css("color"),e.parent.css("fontStyle"),e.parent.css("fontVariant"),i,o,a),c.length?this.renderer.fontShadow(c[0].color,c[0].offsetX,c[0].offsetY,c[0].blur):this.renderer.clearShadow(),this.renderer.clip(e.parent.clip,function(){r.map(this.parseTextBounds(e),this).forEach(function(t,n){t&&(t.left===s&&(t.left=0),t.bottom===s&&(t.bottom=0),this.renderer.text(r[n],t.left,t.bottom),this.renderTextDecoration(e.parent,t,this.fontMetrics.getMetrics(a,o)),0==n&&"LI"===e.parent.node.nodeName&&this.renderBullet(e,t),0==n&&this.renderAnnotation(e.parent,t))},this)},this)},z.prototype.generateListNumber={listAlpha:function(t){var e,n="";do e=t%26,n=String.fromCharCode(e+64)+n,t/=26;while(26*t>26);return n},listRoman:function(t){var e,n=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],r=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],i="",o=n.length;if(0>=t||t>=4e3)return t;for(e=0;o>e;e+=1)for(;t>=r[e];)t-=r[e],i+=n[e];return i}},z.prototype.listItemText=function(t,e){switch(t){case"decimal-leading-zero":text=1===e.toString().length?e="0"+e.toString():e.toString();break;case"upper-roman":text=this.generateListNumber.listRoman(e);break;case"lower-roman":text=this.generateListNumber.listRoman(e).toLowerCase();break;case"lower-alpha":text=this.generateListNumber.listAlpha(e).toLowerCase();break;case"upper-alpha":text=this.generateListNumber.listAlpha(e);break;case"decimal":default:text=e}return text},z.prototype.renderBullet=function(t,e){var n=t.parent.css("listStyleType");if("none"!==n){var r=e.top+(e.bottom-e.top)/2,i=this.renderer.canvas.getContext("2d"),o=i.measureText("M").width,s=o/4,a=.75*o,c=e.left-a;switch(n){case"decimal":case"decimal-leading-zero":case"upper-alpha":case"lower-alpha":case"upper-roman":case"lower-roman":var u=t.parent,l=u.parent,h=Array.prototype.slice.call(l.node.children),d=h.indexOf(u.node)+1,f=this.listItemText(n,d);f+=".";var p=e.left-a;p-=i.measureText(f).width,i.fillText(f,p,e.bottom);break;case"square":var s=o/3;c-=s,r-=s/2,i.fillRect(c,r,s,s);break;case"circle":var s=o/6;c-=s,i.beginPath(),i.arc(c,r,s,0,2*Math.PI),i.closePath(),i.stroke();break;case"disc":default:var s=o/6;c-=s,i.beginPath(),i.arc(c,r,s,0,2*Math.PI),i.closePath(),i.fill()}}},z.prototype.renderTextDecoration=function(t,e,n){switch(t.css("textDecoration").split(" ")[0]){case"underline":this.renderer.rectangle(e.left,Math.round(e.top+n.baseline+n.lineWidth),e.width,1,t.css("color"));break;case"overline":this.renderer.rectangle(e.left,Math.round(e.top),e.width,1,t.css("color"));break;case"line-through":this.renderer.rectangle(e.left,Math.ceil(e.top+n.middle+n.lineWidth),e.width,1,t.css("color"))}},z.prototype.renderAnnotation=function(t,e){if("A"===t.node.nodeName){var n=t.node.getAttribute("href");if(n){var r=this.options.canvas.annotations;r&&r.createAnnotation(n,t.bounds)}}},z.prototype.parseBorders=function(t){var e=t.parseBounds(),n=it(t),r=["Top","Right","Bottom","Left"].map(function(e){return{width:t.cssInt("border"+e+"Width"),color:t.css("border"+e+"Color"),args:null}}),i=Y(e,n,r);return{clip:this.parseBackgroundClip(t,i,r,n,e),borders:V(r,e,i,n)}},z.prototype.parseBackgroundClip=function(t,e,n,r,i){var o=t.css("backgroundClip"),s=[];switch(o){case"content-box":case"padding-box":J(s,r[0],r[1],e.topLeftInner,e.topRightInner,i.left+n[3].width,i.top+n[0].width),J(s,r[1],r[2],e.topRightInner,e.bottomRightInner,i.left+i.width-n[1].width,i.top+n[0].width),J(s,r[2],r[3],e.bottomRightInner,e.bottomLeftInner,i.left+i.width-n[1].width,i.top+i.height-n[2].width),J(s,r[3],r[0],e.bottomLeftInner,e.topLeftInner,i.left+n[3].width,i.top+i.height-n[2].width);break;default:J(s,r[0],r[1],e.topLeftOuter,e.topRightOuter,i.left,i.top),J(s,r[1],r[2],e.topRightOuter,e.bottomRightOuter,i.left+i.width,i.top),J(s,r[2],r[3],e.bottomRightOuter,e.bottomLeftOuter,i.left+i.width,i.top+i.height),J(s,r[3],r[0],e.bottomLeftOuter,e.topLeftOuter,i.left,i.top+i.height)}return s};var Yt=0,Gt="withCredentials"in new XMLHttpRequest,Qt="crossOrigin"in new Image;It.prototype.cloneTo=function(t){It.prototype.cloneTo.call(this,t),t.isPseudoElement=!0,t.before=this.before},It.prototype=Object.create(q.prototype),It.prototype.appendToDOM=function(){this.before?this.parent.node.insertBefore(this.node,this.parent.node.firstChild):this.parent.node.appendChild(this.node),this.parent.node.className+=" "+this.getHideClass()},It.prototype.cleanDOM=function(){this.node.parentNode.removeChild(this.node),this.parent.node.className=this.parent.node.className.replace(this.getHideClass(),"")},It.prototype.getHideClass=function(){return this["PSEUDO_HIDE_ELEMENT_CLASS_"+(this.before?"BEFORE":"AFTER")]},It.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE="___html2canvas___pseudoelement_before",It.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER="___html2canvas___pseudoelement_after",qt.prototype.renderImage=function(t,e,n,r){var i=t.cssInt("paddingLeft"),o=t.cssInt("paddingTop"),s=t.cssInt("paddingRight"),a=t.cssInt("paddingBottom"),c=n.borders,u=e.width-(c[1].width+c[3].width+i+s),l=e.height-(c[0].width+c[2].width+o+a);this.drawImage(r,0,0,r.image.width||u,r.image.height||l,e.left+i+c[3].width,e.top+o+c[0].width,u,l)},qt.prototype.renderBackground=function(t,e,n){e.height>0&&e.width>0&&(this.renderBackgroundColor(t,e),this.renderBackgroundImage(t,e,n))},qt.prototype.renderBackgroundColor=function(t,e){var n=t.css("backgroundColor");this.isTransparent(n)||this.rectangle(e.left,e.top,e.width,e.height,t.css("backgroundColor"))},qt.prototype.renderBorders=function(t){t.forEach(this.renderBorder,this)},qt.prototype.renderBorder=function(t){this.isTransparent(t.color)||null===t.args||this.drawShape(t.args,t.color)},qt.prototype.renderBackgroundImage=function(t,e,n){var r=t.parseBackgroundImages();r.reverse().forEach(function(r,i,o){switch(r.method){case"url":var s=this.images.get(r.args[0]);s?this.renderBackgroundRepeating(t,e,s,o.length-(i+1),n):I("Error loading background-image",r.args[0]);break;case"linear-gradient":case"gradient":var a=this.images.get(r.value);a?this.renderBackgroundGradient(a,e,n):I("Error loading background-image",r.args[0]);break;case"none":break;default:I("Unknown background-image type",r.args[0])}},this)},qt.prototype.renderBackgroundRepeating=function(t,e,n,r,i){var o=t.parseBackgroundSize(e,n.image,r),s=t.parseBackgroundPosition(e,n.image,r,o),a=t.parseBackgroundRepeat(r);switch(a){case"repeat-x":case"repeat no-repeat":this.backgroundRepeatShape(n,s,o,e,e.left+i[3],e.top+s.top+i[0],99999,o.height,i);break;case"repeat-y":case"no-repeat repeat":this.backgroundRepeatShape(n,s,o,e,e.left+s.left+i[3],e.top+i[0],o.width,99999,i);break;case"no-repeat":this.backgroundRepeatShape(n,s,o,e,e.left+s.left+i[3],e.top+s.top+i[0],o.width,o.height,i);break;default:this.renderBackgroundRepeat(n,s,o,{top:e.top,left:e.left},i[3],i[0])}},qt.prototype.isTransparent=function(t){return!t||"transparent"===t||"rgba(0, 0, 0, 0)"===t},Ot.prototype=Object.create(q.prototype),Ot.prototype.getParentStack=function(t){var e=this.parent?this.parent.stack:null;return e?e.ownStacking?e:e.getParentStack(t):t.stack},Rt.prototype.testRangeBounds=function(t){var e,n,r,i,o=!1;return t.createRange&&(e=t.createRange(),e.getBoundingClientRect&&(n=t.createElement("boundtest"),n.style.height="123px",n.style.display="block",t.body.appendChild(n),e.selectNode(n),r=e.getBoundingClientRect(),i=r.height,123===i&&(o=!0),t.body.removeChild(n))),o},Rt.prototype.testCORS=function(){return"undefined"!=typeof(new Image).crossOrigin},Rt.prototype.testSVG=function(){var t=new Image,n=e.createElement("canvas"),r=n.getContext("2d");t.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(t,0,0),n.toDataURL()}catch(i){return!1}return!0},Bt.prototype.hasFabric=function(){return html2canvas.fabric?Promise.resolve():Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))},Bt.prototype.inlineFormatting=function(t){return/^data:image\/svg\+xml;base64,/.test(t)?this.decode64(this.removeContentType(t)):this.removeContentType(t)},Bt.prototype.removeContentType=function(t){return t.replace(/^data:image\/svg\+xml(;base64)?,/,"")},Bt.prototype.isInline=function(t){return/^data:image\/svg\+xml/i.test(t)},Bt.prototype.createCanvas=function(t){var e=this;return function(n,r){var i=new html2canvas.fabric.StaticCanvas("c");e.image=i.lowerCanvasEl,i.setWidth(r.width).setHeight(r.height).add(html2canvas.fabric.util.groupSVGElements(n,r)).renderAll(),t(i.lowerCanvasEl)}},Bt.prototype.decode64=function(e){return"function"==typeof t.atob?t.atob(e):Dt(e)},Nt.prototype=Object.create(Bt.prototype),jt.prototype=Object.create(q.prototype),jt.prototype.applyTextTransform=function(){this.node.data=this.transform(this.parent.css("textTransform"))},jt.prototype.transform=function(t){var e=this.node.data;switch(t){case"lowercase":return e.toLowerCase();case"capitalize":return e.replace(/(^|\s|:|-|\(|\))([a-z])/g,Lt);case"uppercase":return e.toUpperCase();default:return e}},Mt.prototype=Object.create(F.prototype),Ut.prototype=Object.create(qt.prototype),Ut.prototype.setFillStyle=function(t){return this.ctx.fillStyle=t,this.ctx},Ut.prototype.rectangle=function(t,e,n,r,i){this.setFillStyle(i).fillRect(t,e,n,r)},Ut.prototype.circle=function(t,e,n,r){this.setFillStyle(r),this.ctx.beginPath(),this.ctx.arc(t+n/2,e+n/2,n/2,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},Ut.prototype.circleStroke=function(t,e,n,r,i,o){this.circle(t,e,n,r),this.ctx.strokeStyle=o,this.ctx.stroke()},Ut.prototype.drawShape=function(t,e){this.shape(t),this.setFillStyle(e).fill()},Ut.prototype.taints=function(t){if(null===t.tainted){this.taintCtx.drawImage(t.image,0,0);try{this.taintCtx.getImageData(0,0,1,1),t.tainted=!1}catch(n){this.taintCtx=e.createElement("canvas").getContext("2d"),t.tainted=!0}}return t.tainted},Ut.prototype.drawImage=function(t,e,n,r,i,o,s,a,c){this.taints(t)&&!this.options.allowTaint||this.ctx.drawImage(t.image,e,n,r,i,o,s,a,c)},Ut.prototype.clip=function(t,e,n){this.ctx.save(),t.filter(Ht).forEach(function(t){this.shape(t).clip()},this),e.call(n),this.ctx.restore()},Ut.prototype.shape=function(t){return this.ctx.beginPath(),t.forEach(function(t,e){"rect"===t[0]?this.ctx.rect.apply(this.ctx,t.slice(1)):this.ctx[0===e?"moveTo":t[0]+"To"].apply(this.ctx,t.slice(1))},this),this.ctx.closePath(),this.ctx},Ut.prototype.font=function(t,e,n,r,i,o){this.setFillStyle(t).font=[e,n,r,i,o].join(" ").split(",")[0]},Ut.prototype.fontShadow=function(t,e,n,r){this.setVariable("shadowColor",t).setVariable("shadowOffsetY",e).setVariable("shadowOffsetX",n).setVariable("shadowBlur",r)},Ut.prototype.clearShadow=function(){this.setVariable("shadowColor","rgba(0,0,0,0)")},Ut.prototype.setOpacity=function(t){this.ctx.globalAlpha=t},Ut.prototype.setTransform=function(t){this.ctx.translate(t.origin[0],t.origin[1]),this.ctx.transform.apply(this.ctx,t.matrix),this.ctx.translate(-t.origin[0],-t.origin[1])},Ut.prototype.setVariable=function(t,e){return this.variables[t]!==e&&(this.variables[t]=this.ctx[t]=e),this},Ut.prototype.text=function(t,e,n){this.ctx.fillText(t,e,n)},Ut.prototype.backgroundRepeatShape=function(t,e,n,r,i,o,s,a,c){var u=[["line",Math.round(i),Math.round(o)],["line",Math.round(i+s),Math.round(o)],["line",Math.round(i+s),Math.round(a+o)],["line",Math.round(i),Math.round(a+o)]];this.clip([u],function(){this.renderBackgroundRepeat(t,e,n,r,c[3],c[0])},this)},Ut.prototype.renderBackgroundRepeat=function(t,e,n,r,i,o){var s=Math.round(r.left+e.left+i),a=Math.round(r.top+e.top+o);this.setFillStyle(this.ctx.createPattern(this.resizeImage(t,n),"repeat")),this.ctx.translate(s,a),this.ctx.fill(),this.ctx.translate(-s,-a)},Ut.prototype.renderBackgroundGradient=function(t,e){if(t instanceof _){var n=this.ctx.createLinearGradient(e.left+e.width*t.x0,e.top+e.height*t.y0,e.left+e.width*t.x1,e.top+e.height*t.y1);t.colorStops.forEach(function(t){n.addColorStop(t.stop,t.color)}),this.rectangle(e.left,e.top,e.width,e.height,n)}},Ut.prototype.resizeImage=function(t,n){var r=t.image;if(r.width===n.width&&r.height===n.height)return r;var i,o=e.createElement("canvas");return o.width=n.width,o.height=n.height,i=o.getContext("2d"),i.drawImage(r,0,0,r.width,r.height,0,0,n.width,n.height),o}}).call({},window,document);var html2canvasNodeAttribute="data-html2canvas-node",html2canvasCanvasCloneAttribute="data-html2canvas-canvas-clone",html2canvasCanvasCloneIndex=0;window.html2canvas=function(t,e){if(e=e||{},e.logging&&(window.html2canvas.logging=!0,window.html2canvas.start=Date.now()),e.async="undefined"==typeof e.async?!0:e.async,e.allowTaint="undefined"==typeof e.allowTaint?!1:e.allowTaint,e.removeContainer="undefined"==typeof e.removeContainer?!0:e.removeContainer,e.javascriptEnabled="undefined"==typeof e.javascriptEnabled?!1:e.javascriptEnabled,e.imageTimeout="undefined"==typeof e.imageTimeout?1e4:e.imageTimeout,"string"==typeof t)return"string"!=typeof e.proxy?Promise.reject("Proxy must be used when rendering url"):loadUrlDocument(absoluteUrl(t),e.proxy,document,window.innerWidth,window.innerHeight,e).then(function(t){return renderWindow(t.contentWindow.document.documentElement,t,e,window.innerWidth,window.innerHeight)});var n=(void 0===t?[document.documentElement]:t.length?t:[t])[0];return n.setAttribute(html2canvasNodeAttribute,"true"),renderDocument(n.ownerDocument,e,n.ownerDocument.defaultView.innerWidth,n.ownerDocument.defaultView.innerHeight).then(function(t){return"function"==typeof e.onrendered&&(log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),e.onrendered(t)),t})},window.html2canvas.punycode=this.punycode,window.html2canvas.proxy={},"function"==typeof Object.create&&"function"==typeof document.createElement("canvas").getContext||(window.html2canvas=function(){return Promise.reject("No canvas support")}),FontMetrics.prototype.getMetrics=function(t,e){return void 0===this.data[t+"-"+e]&&(this.data[t+"-"+e]=new Font(t,e)),this.data[t+"-"+e]},FrameContainer.prototype.proxyLoad=function(t,e,n){var r=this.src;return loadUrlDocument(r.src,t,r.ownerDocument,e.width,e.height,n)},GradientContainer.prototype.TYPES={LINEAR:1,RADIAL:2},ImageLoader.prototype.findImages=function(t){var e=[];return t.reduce(function(t,e){switch(e.node.nodeName){case"IMG":return t.concat([{args:[e.node.src],method:"url"}]);case"svg":case"IFRAME":return t.concat([{args:[e.node],method:e.node.nodeName}])}return t},[]).forEach(this.addImage(e,this.loadImage),this),e},ImageLoader.prototype.findBackgroundImage=function(t,e){return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t,this.loadImage),this),t},ImageLoader.prototype.addImage=function(t,e){return function(n){n.args.forEach(function(r){this.imageExists(t,r)||(t.splice(0,0,e.call(this,n)),log("Added image #"+t.length,"string"==typeof r?r.substring(0,100):r))},this)}},ImageLoader.prototype.hasImageBackground=function(t){return"none"!==t.method},ImageLoader.prototype.loadImage=function(t){if("url"===t.method){var e=t.args[0];return!this.isSVG(e)||this.support.svg||this.options.allowTaint?e.match(/data:image\/.*;base64,/i)?new ImageContainer(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi,""),!1):this.isSameOrigin(e)||this.options.allowTaint===!0||this.isSVG(e)?new ImageContainer(e,!1):this.support.cors&&!this.options.allowTaint&&this.options.useCORS?new ImageContainer(e,!0):this.options.proxy?new ProxyImageContainer(e,this.options.proxy):new DummyImageContainer(e):new SVGContainer(e)}return"linear-gradient"===t.method?new LinearGradientContainer(t):"gradient"===t.method?new WebkitGradientContainer(t):"svg"===t.method?new SVGNodeContainer(t.args[0],this.support.svg):"IFRAME"===t.method?new FrameContainer(t.args[0],this.isSameOrigin(t.args[0].src),this.options):new DummyImageContainer(t)},ImageLoader.prototype.isSVG=function(t){return"svg"===t.substring(t.length-3).toLowerCase()||SVGContainer.prototype.isInline(t)},ImageLoader.prototype.imageExists=function(t,e){return t.some(function(t){return t.src===e})},ImageLoader.prototype.isSameOrigin=function(t){return this.getOrigin(t)===this.origin},ImageLoader.prototype.getOrigin=function(t){var e=this.link||(this.link=document.createElement("a"));return e.href=t,e.href=e.href,e.protocol+e.hostname+e.port},ImageLoader.prototype.getPromise=function(t){return this.timeout(t,this.options.imageTimeout)["catch"](function(){var e=new DummyImageContainer(t.src);return e.promise.then(function(e){t.image=e})})},ImageLoader.prototype.get=function(t){var e=null;return this.images.some(function(n){return(e=n).src===t})?e:null},ImageLoader.prototype.fetch=function(t){return this.images=t.reduce(bind(this.findBackgroundImage,this),this.findImages(t)),this.images.forEach(function(t,e){t.promise.then(function(){log("Succesfully loaded image #"+(e+1),t)},function(n){log("Failed loading image #"+(e+1),t,n)})}),this.ready=Promise.all(this.images.map(this.getPromise,this)),log("Finished searching images"),this},ImageLoader.prototype.timeout=function(t,e){var n;return Promise.race([t.promise,new Promise(function(r,i){n=setTimeout(function(){log("Timed out loading image",t),i(t)},e)})]).then(function(t){return clearTimeout(n),t})},LinearGradientContainer.prototype=Object.create(GradientContainer.prototype),LinearGradientContainer.prototype.stepRegExp=/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/,NodeContainer.prototype.cloneTo=function(t){t.visible=this.visible,t.borders=this.borders,t.bounds=this.bounds,t.clip=this.clip,t.backgroundClip=this.backgroundClip,t.computedStyles=this.computedStyles,t.styles=this.styles,t.backgroundImages=this.backgroundImages,t.opacity=this.opacity},NodeContainer.prototype.getOpacity=function(){return null===this.opacity?this.opacity=this.cssFloat("opacity"):this.opacity},NodeContainer.prototype.assignStack=function(t){this.stack=t,t.children.push(this)},NodeContainer.prototype.isElementVisible=function(){return this.node.nodeType===Node.TEXT_NODE?this.parent.visible:"none"!==this.css("display")&&"hidden"!==this.css("visibility")&&!this.node.hasAttribute("data-html2canvas-ignore")&&("INPUT"!==this.node.nodeName||"hidden"!==this.node.getAttribute("type"))},NodeContainer.prototype.css=function(t){return this.computedStyles||(this.computedStyles=this.isPseudoElement?this.parent.computedStyle(this.before?":before":":after"):this.computedStyle(null)),
this.styles[t]||(this.styles[t]=this.computedStyles[t])},NodeContainer.prototype.prefixedCss=function(t){var e=["webkit","moz","ms","o"],n=this.css(t);return void 0===n&&e.some(function(e){return n=this.css(e+t.substr(0,1).toUpperCase()+t.substr(1)),void 0!==n},this),void 0===n?null:n},NodeContainer.prototype.computedStyle=function(t){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,t)},NodeContainer.prototype.cssInt=function(t){var e=parseInt(this.css(t),10);return isNaN(e)?0:e},NodeContainer.prototype.cssFloat=function(t){var e=parseFloat(this.css(t));return isNaN(e)?0:e},NodeContainer.prototype.fontWeight=function(){var t=this.css("fontWeight");switch(parseInt(t,10)){case 401:t="bold";break;case 400:t="normal"}return t},NodeContainer.prototype.parseClip=function(){var t=this.css("clip").match(this.CLIP);return t?{top:parseInt(t[1],10),right:parseInt(t[2],10),bottom:parseInt(t[3],10),left:parseInt(t[4],10)}:null},NodeContainer.prototype.parseBackgroundImages=function(){return this.backgroundImages||(this.backgroundImages=parseBackgrounds(this.css("backgroundImage")))},NodeContainer.prototype.cssList=function(t,e){var n=(this.css(t)||"").split(",");return n=n[e||0]||n[0]||"auto",n=n.trim().split(" "),1===n.length&&(n=[n[0],n[0]]),n},NodeContainer.prototype.parseBackgroundSize=function(t,e,n){var r,i,o=this.cssList("backgroundSize",n);if(isPercentage(o[0]))r=t.width*parseFloat(o[0])/100;else{if(/contain|cover/.test(o[0])){var s=t.width/t.height,a=e.width/e.height;return a>s^"contain"===o[0]?{width:t.height*a,height:t.height}:{width:t.width,height:t.width/a}}r=parseInt(o[0],10)}return i="auto"===o[0]&&"auto"===o[1]?e.height:"auto"===o[1]?r/e.width*e.height:isPercentage(o[1])?t.height*parseFloat(o[1])/100:parseInt(o[1],10),"auto"===o[0]&&(r=i/e.height*e.width),{width:r,height:i}},NodeContainer.prototype.parseBackgroundPosition=function(t,e,n,r){var i,o,s=this.cssList("backgroundPosition",n);return i=isPercentage(s[0])?(t.width-(r||e).width)*(parseFloat(s[0])/100):parseInt(s[0],10),o="auto"===s[1]?i/e.width*e.height:isPercentage(s[1])?(t.height-(r||e).height)*parseFloat(s[1])/100:parseInt(s[1],10),"auto"===s[0]&&(i=o/e.height*e.width),{left:i,top:o}},NodeContainer.prototype.parseBackgroundRepeat=function(t){return this.cssList("backgroundRepeat",t)[0]},NodeContainer.prototype.parseTextShadows=function(){var t=this.css("textShadow"),e=[];if(t&&"none"!==t)for(var n=t.match(this.TEXT_SHADOW_PROPERTY),r=0;n&&r<n.length;r++){var i=n[r].match(this.TEXT_SHADOW_VALUES);e.push({color:i[0],offsetX:i[1]?parseFloat(i[1].replace("px","")):0,offsetY:i[2]?parseFloat(i[2].replace("px","")):0,blur:i[3]?i[3].replace("px",""):0})}return e},NodeContainer.prototype.parseTransform=function(){if(!this.transformData)if(this.hasTransform()){var t=this.parseBounds(),e=this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);e[0]+=t.left,e[1]+=t.top,this.transformData={origin:e,matrix:this.parseTransformMatrix()}}else this.transformData={origin:[0,0],matrix:[1,0,0,1,0,0]};return this.transformData},NodeContainer.prototype.parseTransformMatrix=function(){if(!this.transformMatrix){var t=this.prefixedCss("transform"),e=t?parseMatrix(t.match(this.MATRIX_PROPERTY)):null;this.transformMatrix=e?e:[1,0,0,1,0,0]}return this.transformMatrix},NodeContainer.prototype.parseBounds=function(){return this.bounds||(this.bounds=this.hasTransform()?offsetBounds(this.node):getBounds(this.node))},NodeContainer.prototype.hasTransform=function(){return"1,0,0,1,0,0"!==this.parseTransformMatrix().join(",")||this.parent&&this.parent.hasTransform()},NodeContainer.prototype.getValue=function(){var t=this.node.value||"";return t="SELECT"===this.node.tagName?selectionValue(this.node):t,0===t.length?this.node.placeholder||"":t},NodeContainer.prototype.MATRIX_PROPERTY=/(matrix)\((.+)\)/,NodeContainer.prototype.TEXT_SHADOW_PROPERTY=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,NodeContainer.prototype.TEXT_SHADOW_VALUES=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,NodeContainer.prototype.CLIP=/^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,NodeParser.prototype.calculateOverflowClips=function(){this.nodes.forEach(function(t){if(isElement(t)){isPseudoElement(t)&&t.appendToDOM(),t.borders=this.parseBorders(t);var e="hidden"===t.css("overflow")?[t.borders.clip]:[],n=t.parseClip();n&&-1!==["absolute","fixed"].indexOf(t.css("position"))&&e.push([["rect",t.bounds.left+n.left,t.bounds.top+n.top,n.right-n.left,n.bottom-n.top]]),t.clip=hasParentClip(t)?t.parent.clip.concat(e):e,t.backgroundClip="hidden"!==t.css("overflow")?t.clip.concat([t.borders.clip]):t.clip,isPseudoElement(t)&&t.cleanDOM()}else isTextNode(t)&&(t.clip=hasParentClip(t)?t.parent.clip:[]);isPseudoElement(t)||(t.bounds=null)},this)},NodeParser.prototype.asyncRenderer=function(t,e,n){n=n||Date.now(),this.paint(t[this.renderIndex++]),t.length===this.renderIndex?e():n+20>Date.now()?this.asyncRenderer(t,e,n):setTimeout(bind(function(){this.asyncRenderer(t,e)},this),0)},NodeParser.prototype.createPseudoHideStyles=function(t){this.createStyles(t,"."+PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+':before { content: "" !important; display: none !important; }.'+PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER+':after { content: "" !important; display: none !important; }')},NodeParser.prototype.disableAnimations=function(t){this.createStyles(t,"* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")},NodeParser.prototype.createStyles=function(t,e){var n=t.createElement("style");n.innerHTML=e,t.body.appendChild(n)},NodeParser.prototype.getPseudoElements=function(t){var e=[[t]];if(t.node.nodeType===Node.ELEMENT_NODE){var n=this.getPseudoElement(t,":before"),r=this.getPseudoElement(t,":after");n&&e.push(n),r&&e.push(r)}return flatten(e)},NodeParser.prototype.getPseudoElement=function(t,e){var n=t.computedStyle(e);if(!n||!n.content||"none"===n.content||"-moz-alt-content"===n.content||"none"===n.display)return null;for(var r=stripQuotes(n.content),i="url"===r.substr(0,3),o=document.createElement(i?"img":"html2canvaspseudoelement"),s=new PseudoElementContainer(o,t,e),a=n.length-1;a>=0;a--){var c=toCamelCase(n.item(a));o.style[c]=n[c]}if(o.className=PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,i)return o.src=parseBackgrounds(r)[0].args[0],[s];var u=document.createTextNode(r);return o.appendChild(u),[s,new TextContainer(u,s)]},NodeParser.prototype.getChildren=function(t){return flatten([].filter.call(t.node.childNodes,renderableNode).map(function(e){var n=[e.nodeType===Node.TEXT_NODE?new TextContainer(e,t):new NodeContainer(e,t)].filter(nonIgnoredElement);return e.nodeType===Node.ELEMENT_NODE&&n.length&&"TEXTAREA"!==e.tagName?n[0].isElementVisible()?n.concat(this.getChildren(n[0])):[]:n},this))},NodeParser.prototype.newStackingContext=function(t,e){var n=new StackingContext(e,t.getOpacity(),t.node,t.parent);t.cloneTo(n);var r=e?n.getParentStack(this):n.parent.stack;r.contexts.push(n),t.stack=n},NodeParser.prototype.createStackingContexts=function(){this.nodes.forEach(function(t){isElement(t)&&(this.isRootElement(t)||hasOpacity(t)||isPositionedForStacking(t)||this.isBodyWithTransparentRoot(t)||t.hasTransform())?this.newStackingContext(t,!0):isElement(t)&&(isPositioned(t)&&zIndex0(t)||isInlineBlock(t)||isFloating(t))?this.newStackingContext(t,!1):t.assignStack(t.parent.stack)},this)},NodeParser.prototype.isBodyWithTransparentRoot=function(t){return"BODY"===t.node.nodeName&&this.renderer.isTransparent(t.parent.css("backgroundColor"))},NodeParser.prototype.isRootElement=function(t){return null===t.parent},NodeParser.prototype.sortStackingContexts=function(t){t.contexts.sort(zIndexSort(t.contexts.slice(0))),t.contexts.forEach(this.sortStackingContexts,this)},NodeParser.prototype.parseTextBounds=function(t){return function(e,n,r){if("none"!==t.parent.css("textDecoration").substr(0,4)||0!==e.trim().length){if(this.support.rangeBounds&&!t.parent.hasTransform()){var i=r.slice(0,n).join("").length;return this.getRangeBounds(t.node,i,e.length)}if(t.node&&"string"==typeof t.node.data){var o=t.node.splitText(e.length),s=this.getWrapperBounds(t.node,t.parent.hasTransform());return t.node=o,s}}else this.support.rangeBounds&&!t.parent.hasTransform()||(t.node=t.node.splitText(e.length));return{}}},NodeParser.prototype.getWrapperBounds=function(t,e){var n=t.ownerDocument.createElement("html2canvaswrapper"),r=t.parentNode,i=t.cloneNode(!0);n.appendChild(t.cloneNode(!0)),r.replaceChild(n,t);var o=e?offsetBounds(n):getBounds(n);return r.replaceChild(i,n),o},NodeParser.prototype.getRangeBounds=function(t,e,n){var r=this.range||(this.range=t.ownerDocument.createRange());return r.setStart(t,e),r.setEnd(t,e+n),r.getBoundingClientRect()},NodeParser.prototype.parse=function(t){var e=t.contexts.filter(negativeZIndex),n=t.children.filter(isElement),r=n.filter(not(isFloating)),i=r.filter(not(isPositioned)).filter(not(inlineLevel)),o=n.filter(not(isPositioned)).filter(isFloating),s=r.filter(not(isPositioned)).filter(inlineLevel),a=t.contexts.concat(r.filter(isPositioned)).filter(zIndex0),c=t.children.filter(isTextNode).filter(hasText),u=t.contexts.filter(positiveZIndex);e.concat(i).concat(o).concat(s).concat(a).concat(c).concat(u).forEach(function(t){this.renderQueue.push(t),isStackingContext(t)&&(this.parse(t),this.renderQueue.push(new ClearTransform))},this)},NodeParser.prototype.paint=function(t){try{t instanceof ClearTransform?this.renderer.ctx.restore():isTextNode(t)?(isPseudoElement(t.parent)&&t.parent.appendToDOM(),this.paintText(t),isPseudoElement(t.parent)&&t.parent.cleanDOM()):this.paintNode(t)}catch(e){log(e)}},NodeParser.prototype.paintNode=function(t){isStackingContext(t)&&(this.renderer.setOpacity(t.opacity),this.renderer.ctx.save(),t.hasTransform()&&this.renderer.setTransform(t.parseTransform())),"INPUT"===t.node.nodeName&&"checkbox"===t.node.type?this.paintCheckbox(t):"INPUT"===t.node.nodeName&&"radio"===t.node.type?this.paintRadio(t):this.paintElement(t)},NodeParser.prototype.paintElement=function(t){var e=t.parseBounds();this.renderer.clip(t.backgroundClip,function(){this.renderer.renderBackground(t,e,t.borders.borders.map(getWidth))},this),this.renderer.clip(t.clip,function(){this.renderer.renderBorders(t.borders.borders)},this),this.renderer.clip(t.backgroundClip,function(){switch(t.node.nodeName){case"svg":case"IFRAME":var n=this.images.get(t.node);n?this.renderer.renderImage(t,e,t.borders,n):log("Error loading <"+t.node.nodeName+">",t.node);break;case"IMG":var r=this.images.get(t.node.src);r?this.renderer.renderImage(t,e,t.borders,r):log("Error loading <img>",t.node.src);break;case"CANVAS":this.renderer.renderImage(t,e,t.borders,{image:t.node});break;case"SELECT":case"INPUT":case"TEXTAREA":this.paintFormValue(t)}},this)},NodeParser.prototype.paintCheckbox=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height),r={width:n-1,height:n-1,top:e.top,left:e.left},i=[3,3],o=[i,i,i,i],s=[1,1,1,1].map(function(t){return{color:"#A5A5A5",width:t}}),a=calculateCurvePoints(r,o,s);this.renderer.clip(t.backgroundClip,function(){this.renderer.rectangle(r.left+1,r.top+1,r.width-2,r.height-2,"#DEDEDE"),this.renderer.renderBorders(calculateBorders(s,r,a,o)),t.node.checked&&(this.renderer.font("#424242","normal","normal","bold",n-3+"px","arial"),this.renderer.text("✔",r.left+n/6,r.top+n-1))},this)},NodeParser.prototype.paintRadio=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height)-2;this.renderer.clip(t.backgroundClip,function(){this.renderer.circleStroke(e.left+1,e.top+1,n,"#DEDEDE",1,"#A5A5A5"),t.node.checked&&this.renderer.circle(Math.ceil(e.left+n/4)+1,Math.ceil(e.top+n/4)+1,Math.floor(n/2),"#424242")},this)},NodeParser.prototype.paintFormValue=function(t){if(t.getValue().length>0){var e=t.node.ownerDocument,n=e.createElement("html2canvaswrapper"),r=["lineHeight","textAlign","fontFamily","fontWeight","fontSize","color","paddingLeft","paddingTop","paddingRight","paddingBottom","width","height","borderLeftStyle","borderTopStyle","borderLeftWidth","borderTopWidth","boxSizing","whiteSpace","wordWrap","list-style-type"];r.forEach(function(e){try{n.style[e]=t.css(e)}catch(r){log("html2canvas: Parse: Exception caught in renderFormValue: "+r.message)}});var i=t.parseBounds();n.style.position="fixed",n.style.left=i.left+"px",n.style.top=i.top+"px",n.textContent=t.getValue(),e.body.appendChild(n),this.paintText(new TextContainer(n.firstChild,t)),e.body.removeChild(n)}},NodeParser.prototype.paintText=function(t){t.applyTextTransform();var e=window.html2canvas.punycode.ucs2.decode(t.node.data),n=this.options.letterRendering&&!noLetterSpacing(t)||hasUnicode(t.node.data)?e.map(function(t){return window.html2canvas.punycode.ucs2.encode([t])}):getWords(e),r=t.parent.fontWeight(),i=t.parent.css("fontSize"),o=t.parent.css("fontFamily"),s=t.parent.parseTextShadows();this.renderer.font(t.parent.css("color"),t.parent.css("fontStyle"),t.parent.css("fontVariant"),r,i,o),s.length?this.renderer.fontShadow(s[0].color,s[0].offsetX,s[0].offsetY,s[0].blur):this.renderer.clearShadow(),this.renderer.clip(t.parent.clip,function(){n.map(this.parseTextBounds(t),this).forEach(function(e,r){e&&(this.renderer.text(n[r],e.left,e.bottom),this.renderTextDecoration(t.parent,e,this.fontMetrics.getMetrics(o,i)))},this)},this)},NodeParser.prototype.renderTextDecoration=function(t,e,n){switch(t.css("textDecoration").split(" ")[0]){case"underline":this.renderer.rectangle(e.left,Math.round(e.top+n.baseline+n.lineWidth),e.width,1,t.css("color"));break;case"overline":this.renderer.rectangle(e.left,Math.round(e.top),e.width,1,t.css("color"));break;case"line-through":this.renderer.rectangle(e.left,Math.ceil(e.top+n.middle+n.lineWidth),e.width,1,t.css("color"))}},NodeParser.prototype.parseBorders=function(t){var e=t.parseBounds(),n=getBorderRadiusData(t),r=["Top","Right","Bottom","Left"].map(function(e){return{width:t.cssInt("border"+e+"Width"),color:t.css("border"+e+"Color"),args:null}}),i=calculateCurvePoints(e,n,r);return{clip:this.parseBackgroundClip(t,i,r,n,e),borders:calculateBorders(r,e,i,n)}},NodeParser.prototype.parseBackgroundClip=function(t,e,n,r,i){var o=t.css("backgroundClip"),s=[];switch(o){case"content-box":case"padding-box":parseCorner(s,r[0],r[1],e.topLeftInner,e.topRightInner,i.left+n[3].width,i.top+n[0].width),parseCorner(s,r[1],r[2],e.topRightInner,e.bottomRightInner,i.left+i.width-n[1].width,i.top+n[0].width),parseCorner(s,r[2],r[3],e.bottomRightInner,e.bottomLeftInner,i.left+i.width-n[1].width,i.top+i.height-n[2].width),parseCorner(s,r[3],r[0],e.bottomLeftInner,e.topLeftInner,i.left+n[3].width,i.top+i.height-n[2].width);break;default:parseCorner(s,r[0],r[1],e.topLeftOuter,e.topRightOuter,i.left,i.top),parseCorner(s,r[1],r[2],e.topRightOuter,e.bottomRightOuter,i.left+i.width,i.top),parseCorner(s,r[2],r[3],e.bottomRightOuter,e.bottomLeftOuter,i.left+i.width,i.top+i.height),parseCorner(s,r[3],r[0],e.bottomLeftOuter,e.topLeftOuter,i.left,i.top+i.height)}return s},!function(){var t,e,n,r;!function(){var i={},o={};t=function(t,e,n){i[t]={deps:e,callback:n}},r=n=e=function(t){function n(e){if("."!==e.charAt(0))return e;for(var n=e.split("/"),r=t.split("/").slice(0,-1),i=0,o=n.length;o>i;i++){var s=n[i];if(".."===s)r.pop();else{if("."===s)continue;r.push(s)}}return r.join("/")}if(r._eak_seen=i,o[t])return o[t];if(o[t]={},!i[t])throw new Error("Could not find module "+t);for(var s,a=i[t],c=a.deps,u=a.callback,l=[],h=0,d=c.length;d>h;h++)"exports"===c[h]?l.push(s={}):l.push(e(n(c[h])));var f=u.apply(this,l);return o[t]=s||f}}(),t("promise/all",["./utils","exports"],function(t,e){"use strict";function n(t){var e=this;if(!r(t))throw new TypeError("You must pass an array to all.");return new e(function(e,n){function r(t){return function(e){o(t,e)}}function o(t,n){a[t]=n,0===--c&&e(a)}var s,a=[],c=t.length;0===c&&e([]);for(var u=0;u<t.length;u++)s=t[u],s&&i(s.then)?s.then(r(u),n):o(u,s)})}var r=t.isArray,i=t.isFunction;e.all=n}),t("promise/asap",["exports"],function(t){"use strict";function e(){return function(){process.nextTick(i)}}function n(){var t=0,e=new c(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function r(){return function(){u.setTimeout(i,1)}}function i(){for(var t=0;t<l.length;t++){var e=l[t],n=e[0],r=e[1];n(r)}l=[]}function o(t,e){var n=l.push([t,e]);1===n&&s()}var s,a="undefined"!=typeof window?window:{},c=a.MutationObserver||a.WebKitMutationObserver,u="undefined"!=typeof global?global:this,l=[];s="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?e():c?n():r(),t.asap=o}),t("promise/cast",["exports"],function(t){"use strict";function e(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=this;return new e(function(e){e(t)})}t.cast=e}),t("promise/config",["exports"],function(t){"use strict";function e(t,e){return 2!==arguments.length?n[t]:void(n[t]=e)}var n={instrument:!1};t.config=n,t.configure=e}),t("promise/polyfill",["./promise","./utils","exports"],function(t,e,n){"use strict";function r(){var t="Promise"in window&&"cast"in window.Promise&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var t;return new window.Promise(function(e){t=e}),o(t)}();t||(window.Promise=i)}var i=t.Promise,o=e.isFunction;n.polyfill=r}),t("promise/promise",["./config","./utils","./cast","./all","./race","./resolve","./reject","./asap","exports"],function(t,e,n,r,i,o,s,a,c){"use strict";function u(t){if(!k(t))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof u))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],l(t,this)}function l(t,e){function n(t){m(e,t)}function r(t){w(e,t)}try{t(n,r)}catch(i){r(i)}}function h(t,e,n,r){var i,o,s,a,c=k(n);if(c)try{i=n(r),s=!0}catch(u){a=!0,o=u}else i=r,s=!0;p(e,i)||(c&&s?m(e,i):a?w(e,o):t===I?m(e,i):t===q&&w(e,i))}function d(t,e,n,r){var i=t._subscribers,o=i.length;i[o]=e,i[o+I]=n,i[o+q]=r}function f(t,e){for(var n,r,i=t._subscribers,o=t._detail,s=0;s<i.length;s+=3)n=i[s],r=i[s+e],h(e,n,r,o);t._subscribers=null}function p(t,e){var n,r=null;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(x(e)&&(r=e.then,k(r)))return r.call(e,function(r){return n?!0:(n=!0,void(e!==r?m(t,r):g(t,r)))},function(e){return n?!0:(n=!0,void w(t,e))}),!0}catch(i){return n?!0:(w(t,i),!0)}return!1}function m(t,e){t===e?g(t,e):p(t,e)||g(t,e)}function g(t,e){t._state===P&&(t._state=_,t._detail=e,b.async(y,t))}function w(t,e){t._state===P&&(t._state=_,t._detail=e,b.async(v,t))}function y(t){f(t,t._state=I)}function v(t){f(t,t._state=q)}var b=t.config,x=(t.configure,e.objectOrFunction),k=e.isFunction,A=(e.now,n.cast),C=r.all,E=i.race,S=o.resolve,F=s.reject,T=a.asap;b.async=T;var P=void 0,_=0,I=1,q=2;u.prototype={constructor:u,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(t,e){var n=this,r=new this.constructor(function(){});if(this._state){var i=arguments;b.async(function(){h(n._state,r,i[n._state-1],n._detail)})}else d(this,r,t,e);return r},"catch":function(t){return this.then(null,t)}},u.all=C,u.cast=A,u.race=E,u.resolve=S,u.reject=F,c.Promise=u}),t("promise/race",["./utils","exports"],function(t,e){"use strict";function n(t){var e=this;if(!r(t))throw new TypeError("You must pass an array to race.");return new e(function(e,n){for(var r,i=0;i<t.length;i++)r=t[i],r&&"function"==typeof r.then?r.then(e,n):e(r)})}var r=t.isArray;e.race=n}),t("promise/reject",["exports"],function(t){"use strict";function e(t){var e=this;return new e(function(e,n){n(t)})}t.reject=e}),t("promise/resolve",["exports"],function(t){"use strict";function e(t){var e=this;return new e(function(e){e(t)})}t.resolve=e}),t("promise/utils",["exports"],function(t){"use strict";function e(t){return n(t)||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function r(t){return"[object Array]"===Object.prototype.toString.call(t)}var i=Date.now||function(){return(new Date).getTime()};t.objectOrFunction=e,t.isFunction=n,t.isArray=r,t.now=i}),e("promise/polyfill").polyfill()}();var proxyCount=0,supportsCORS="withCredentials"in new XMLHttpRequest,supportsCORSImage="crossOrigin"in new Image;PseudoElementContainer.prototype.cloneTo=function(t){PseudoElementContainer.prototype.cloneTo.call(this,t),t.isPseudoElement=!0,t.before=this.before},PseudoElementContainer.prototype=Object.create(NodeContainer.prototype),PseudoElementContainer.prototype.appendToDOM=function(){this.before?this.parent.node.insertBefore(this.node,this.parent.node.firstChild):this.parent.node.appendChild(this.node),this.parent.node.className+=" "+this.getHideClass()},PseudoElementContainer.prototype.cleanDOM=function(){this.node.parentNode.removeChild(this.node),this.parent.node.className=this.parent.node.className.replace(this.getHideClass(),"")},PseudoElementContainer.prototype.getHideClass=function(){return this["PSEUDO_HIDE_ELEMENT_CLASS_"+(this.before?"BEFORE":"AFTER")]},PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE="___html2canvas___pseudoelement_before",PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER="___html2canvas___pseudoelement_after",Renderer.prototype.renderImage=function(t,e,n,r){var i=t.cssInt("paddingLeft"),o=t.cssInt("paddingTop"),s=t.cssInt("paddingRight"),a=t.cssInt("paddingBottom"),c=n.borders,u=e.width-(c[1].width+c[3].width+i+s),l=e.height-(c[0].width+c[2].width+o+a);this.drawImage(r,0,0,r.image.width||u,r.image.height||l,e.left+i+c[3].width,e.top+o+c[0].width,u,l)},Renderer.prototype.renderBackground=function(t,e,n){e.height>0&&e.width>0&&(this.renderBackgroundColor(t,e),this.renderBackgroundImage(t,e,n))},Renderer.prototype.renderBackgroundColor=function(t,e){var n=t.css("backgroundColor");this.isTransparent(n)||this.rectangle(e.left,e.top,e.width,e.height,t.css("backgroundColor"))},Renderer.prototype.renderBorders=function(t){t.forEach(this.renderBorder,this)},Renderer.prototype.renderBorder=function(t){this.isTransparent(t.color)||null===t.args||this.drawShape(t.args,t.color)},Renderer.prototype.renderBackgroundImage=function(t,e,n){var r=t.parseBackgroundImages();r.reverse().forEach(function(r,i,o){switch(r.method){case"url":var s=this.images.get(r.args[0]);s?this.renderBackgroundRepeating(t,e,s,o.length-(i+1),n):log("Error loading background-image",r.args[0]);break;case"linear-gradient":case"gradient":var a=this.images.get(r.value);a?this.renderBackgroundGradient(a,e,n):log("Error loading background-image",r.args[0]);break;case"none":break;default:log("Unknown background-image type",r.args[0])}},this)},Renderer.prototype.renderBackgroundRepeating=function(t,e,n,r,i){var o=t.parseBackgroundSize(e,n.image,r),s=t.parseBackgroundPosition(e,n.image,r,o),a=t.parseBackgroundRepeat(r);switch(a){case"repeat-x":case"repeat no-repeat":this.backgroundRepeatShape(n,s,o,e,e.left+i[3],e.top+s.top+i[0],99999,o.height,i);break;case"repeat-y":case"no-repeat repeat":this.backgroundRepeatShape(n,s,o,e,e.left+s.left+i[3],e.top+i[0],o.width,99999,i);break;case"no-repeat":this.backgroundRepeatShape(n,s,o,e,e.left+s.left+i[3],e.top+s.top+i[0],o.width,o.height,i);break;default:this.renderBackgroundRepeat(n,s,o,{top:e.top,left:e.left},i[3],i[0])}},Renderer.prototype.isTransparent=function(t){return!t||"transparent"===t||"rgba(0, 0, 0, 0)"===t},StackingContext.prototype=Object.create(NodeContainer.prototype),StackingContext.prototype.getParentStack=function(t){var e=this.parent?this.parent.stack:null;return e?e.ownStacking?e:e.getParentStack(t):t.stack},Support.prototype.testRangeBounds=function(t){var e,n,r,i,o=!1;return t.createRange&&(e=t.createRange(),e.getBoundingClientRect&&(n=t.createElement("boundtest"),n.style.height="123px",n.style.display="block",t.body.appendChild(n),e.selectNode(n),r=e.getBoundingClientRect(),i=r.height,123===i&&(o=!0),t.body.removeChild(n))),o},Support.prototype.testCORS=function(){return"undefined"!=typeof(new Image).crossOrigin},Support.prototype.testSVG=function(){var t=new Image,e=document.createElement("canvas"),n=e.getContext("2d");t.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(t,0,0),e.toDataURL()}catch(r){return!1}return!0},SVGContainer.prototype.hasFabric=function(){return html2canvas.fabric?Promise.resolve():Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))},SVGContainer.prototype.inlineFormatting=function(t){return/^data:image\/svg\+xml;base64,/.test(t)?this.decode64(this.removeContentType(t)):this.removeContentType(t)},SVGContainer.prototype.removeContentType=function(t){return t.replace(/^data:image\/svg\+xml(;base64)?,/,"")},SVGContainer.prototype.isInline=function(t){return/^data:image\/svg\+xml/i.test(t)},SVGContainer.prototype.createCanvas=function(t){var e=this;return function(n,r){var i=new html2canvas.fabric.StaticCanvas("c");e.image=i.lowerCanvasEl,i.setWidth(r.width).setHeight(r.height).add(html2canvas.fabric.util.groupSVGElements(n,r)).renderAll(),t(i.lowerCanvasEl)}},SVGContainer.prototype.decode64=function(t){return"function"==typeof window.atob?window.atob(t):decode64(t)},SVGNodeContainer.prototype=Object.create(SVGContainer.prototype),TextContainer.prototype=Object.create(NodeContainer.prototype),TextContainer.prototype.applyTextTransform=function(){this.node.data=this.transform(this.parent.css("textTransform"))},TextContainer.prototype.transform=function(t){var e=this.node.data;switch(t){case"lowercase":return e.toLowerCase();case"capitalize":return e.replace(/(^|\s|:|-|\(|\))([a-z])/g,capitalize);case"uppercase":return e.toUpperCase();default:return e}},WebkitGradientContainer.prototype=Object.create(GradientContainer.prototype),function(t){var e;e=function(){function e(t){var e,n,r,i,o,s,a,c,u,l,h,d,f,p,m;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},s=null;;){switch(e=this.readUInt32(),l=function(){var t,e;for(e=[],a=t=0;4>t;a=++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":s&&this.animation.frames.push(s),this.pos+=4,s={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},o=this.readUInt16(),i=this.readUInt16()||100,s.delay=1e3*o/i,s.disposeOp=this.data[this.pos++],s.blendOp=this.data[this.pos++],s.data=[];break;case"IDAT":case"fdAT":for("fdAT"===l&&(this.pos+=4,e-=4),t=(null!=s?s.data:void 0)||this.imgData,a=f=0;e>=0?e>f:f>e;a=e>=0?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if(h=r-this.transparency.indexed.length,h>0)for(a=p=0;h>=0?h>p:p>h;a=h>=0?++p:--p)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":d=this.read(e),c=d.indexOf(0),u=String.fromCharCode.apply(String,d.slice(0,c)),this.text[u]=String.fromCharCode.apply(String,d.slice(c+1));break;case"IEND":return s&&this.animation.frames.push(s),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(m=this.colorType)||6===m,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}var n,r,i,o,s,a,c,u;e.load=function(t,n,r){var i;return"function"==typeof n&&(r=n),i=new XMLHttpRequest,i.open("GET",t,!0),i.responseType="arraybuffer",i.onload=function(){var t,o;return t=new Uint8Array(i.response||i.mozResponseArrayBuffer),o=new e(t),"function"==typeof(null!=n?n.getContext:void 0)&&o.render(n),"function"==typeof r?r(o):void 0},i.send(null)},o=0,i=1,s=2,r=0,n=1,e.prototype.read=function(t){var e,n,r;for(r=[],e=n=0;t>=0?t>n:n>t;e=t>=0?++n:--n)r.push(this.data[this.pos++]);return r},e.prototype.readUInt32=function(){var t,e,n,r;return t=this.data[this.pos++]<<24,e=this.data[this.pos++]<<16,n=this.data[this.pos++]<<8,r=this.data[this.pos++],t|e|n|r},e.prototype.readUInt16=function(){var t,e;return t=this.data[this.pos++]<<8,e=this.data[this.pos++],t|e},e.prototype.decodePixels=function(t){var e,n,r,i,o,s,a,c,u,l,h,d,f,p,m,g,w,y,v,b,x,k,A;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);for(t=new FlateStream(t),t=t.getBytes(),d=this.pixelBitlength/8,g=d*this.width,f=new Uint8Array(g*this.height),s=t.length,m=0,p=0,n=0;s>p;){switch(t[p++]){case 0:for(i=v=0;g>v;i=v+=1)f[n++]=t[p++];break;case 1:for(i=b=0;g>b;i=b+=1)e=t[p++],o=d>i?0:f[n-d],f[n++]=(e+o)%256;break;case 2:for(i=x=0;g>x;i=x+=1)e=t[p++],r=(i-i%d)/d,w=m&&f[(m-1)*g+r*d+i%d],f[n++]=(w+e)%256;break;case 3:for(i=k=0;g>k;i=k+=1)e=t[p++],r=(i-i%d)/d,o=d>i?0:f[n-d],w=m&&f[(m-1)*g+r*d+i%d],f[n++]=(e+Math.floor((o+w)/2))%256;break;case 4:for(i=A=0;g>A;i=A+=1)e=t[p++],r=(i-i%d)/d,o=d>i?0:f[n-d],0===m?w=y=0:(w=f[(m-1)*g+r*d+i%d],y=r&&f[(m-1)*g+(r-1)*d+i%d]),a=o+w-y,c=Math.abs(a-o),l=Math.abs(a-w),h=Math.abs(a-y),u=l>=c&&h>=c?o:h>=l?w:y,f[n++]=(e+u)%256;break;default:throw new Error("Invalid filter algorithm: "+t[p-1])}m++}return f},e.prototype.decodePalette=function(){var t,e,n,r,i,o,s,a,c,u;for(r=this.palette,s=this.transparency.indexed||[],o=new Uint8Array((s.length||0)+r.length),i=0,n=r.length,t=0,e=a=0,c=r.length;c>a;e=a+=3)o[i++]=r[e],o[i++]=r[e+1],o[i++]=r[e+2],o[i++]=null!=(u=s[t++])?u:255;return o},e.prototype.copyToImageData=function(t,e){var n,r,i,o,s,a,c,u,l,h,d;if(r=this.colors,l=null,n=this.hasAlphaChannel,this.palette.length&&(l=null!=(d=this._decodedPalette)?d:this._decodedPalette=this.decodePalette(),r=4,n=!0),i=t.data||t,u=i.length,s=l||e,o=a=0,1===r)for(;u>o;)c=l?4*e[o/4]:a,h=s[c++],i[o++]=h,i[o++]=h,i[o++]=h,i[o++]=n?s[c++]:255,a=c;else for(;u>o;)c=l?4*e[o/4]:a,i[o++]=s[c++],i[o++]=s[c++],i[o++]=s[c++],i[o++]=n?s[c++]:255,a=c},e.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};try{c=t.document.createElement("canvas"),u=c.getContext("2d")}catch(l){return-1}return a=function(t){var e;return u.width=t.width,u.height=t.height,u.clearRect(0,0,t.width,t.height),u.putImageData(t,0,0),e=new Image,e.src=c.toDataURL(),e},e.prototype.decodeFrames=function(t){var e,n,r,i,o,s,c,u;if(this.animation){for(c=this.animation.frames,u=[],n=o=0,s=c.length;s>o;n=++o)e=c[n],r=t.createImageData(e.width,e.height),i=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(r,i),e.imageData=r,u.push(e.image=a(r));return u}},e.prototype.renderFrame=function(t,e){var n,o,a;return o=this.animation.frames,n=o[e],a=o[e-1],0===e&&t.clearRect(0,0,this.width,this.height),(null!=a?a.disposeOp:void 0)===i?t.clearRect(a.xOffset,a.yOffset,a.width,a.height):(null!=a?a.disposeOp:void 0)===s&&t.putImageData(a.imageData,a.xOffset,a.yOffset),n.blendOp===r&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),
t.drawImage(n.image,n.xOffset,n.yOffset)},e.prototype.animate=function(t){var e,n,r,i,o,s,a=this;return n=0,s=this.animation,i=s.numFrames,r=s.frames,o=s.numPlays,(e=function(){var s,c;return s=n++%i,c=r[s],a.renderFrame(t,s),i>1&&o>n/i?a.animation._timeout=setTimeout(e,c.delay):void 0})()},e.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},e.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},e}(),t.PNG=e}("undefined"!=typeof window&&window||this);var DecodeStream=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(n>t)return e;for(var r=512;t>r;)r<<=1;for(var i=new Uint8Array(r),o=0;n>o;++o)i[o]=e[o];return this.buffer=i},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var n=e+t;!this.eof&&this.bufferLength<n;)this.readBlock();var r=this.bufferLength;n>r&&(n=r)}else{for(;!this.eof;)this.readBlock();var n=this.bufferLength}return this.pos=n,this.buffer.subarray(e,n)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),FlateStream=function(){function t(t){throw new Error(t)}function e(e){var n=0,r=e[n++],i=e[n++];-1!=r&&-1!=i||t("Invalid header in flate stream"),8!=(15&r)&&t("Unknown compression method in flate stream"),((r<<8)+i)%31!=0&&t("Bad FCHECK in flate stream"),32&i&&t("FDICT bit set in flate stream"),this.bytes=e,this.bytesPos=n,this.codeSize=0,this.codeBuf=0,DecodeStream.call(this)}if("undefined"!=typeof Uint32Array){var n=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),i=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),o=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],s=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return e.prototype=Object.create(DecodeStream.prototype),e.prototype.getBits=function(e){for(var n,r=this.codeSize,i=this.codeBuf,o=this.bytes,s=this.bytesPos;e>r;)"undefined"==typeof(n=o[s++])&&t("Bad encoding in flate stream"),i|=n<<r,r+=8;return n=i&(1<<e)-1,this.codeBuf=i>>e,this.codeSize=r-=e,this.bytesPos=s,n},e.prototype.getCode=function(e){for(var n=e[0],r=e[1],i=this.codeSize,o=this.codeBuf,s=this.bytes,a=this.bytesPos;r>i;){var c;"undefined"==typeof(c=s[a++])&&t("Bad encoding in flate stream"),o|=c<<i,i+=8}var u=n[o&(1<<r)-1],l=u>>16,h=65535&u;return(0==i||l>i||0==l)&&t("Bad encoding in flate stream"),this.codeBuf=o>>l,this.codeSize=i-l,this.bytesPos=a,h},e.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;e>r;++r)t[r]>n&&(n=t[r]);for(var i=1<<n,o=new Uint32Array(i),s=1,a=0,c=2;n>=s;++s,a<<=1,c<<=1)for(var u=0;e>u;++u)if(t[u]==s){for(var l=0,h=a,r=0;s>r;++r)l=l<<1|1&h,h>>=1;for(var r=l;i>r;r+=c)o[r]=s<<16|u;++a}return[o,n]},e.prototype.readBlock=function(){function e(t,e,n,r,i){for(var o=t.getBits(n)+r;o-- >0;)e[A++]=i}var a=this.getBits(3);if(1&a&&(this.eof=!0),a>>=1,0==a){var c,u=this.bytes,l=this.bytesPos;"undefined"==typeof(c=u[l++])&&t("Bad block header in flate stream");var h=c;"undefined"==typeof(c=u[l++])&&t("Bad block header in flate stream"),h|=c<<8,"undefined"==typeof(c=u[l++])&&t("Bad block header in flate stream");var d=c;"undefined"==typeof(c=u[l++])&&t("Bad block header in flate stream"),d|=c<<8,d!=(65535&~h)&&t("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var f=this.bufferLength,p=this.ensureBuffer(f+h),m=f+h;this.bufferLength=m;for(var g=f;m>g;++g){if("undefined"==typeof(c=u[l++])){this.eof=!0;break}p[g]=c}return void(this.bytesPos=l)}var w,y;if(1==a)w=o,y=s;else if(2==a){for(var v=this.getBits(5)+257,b=this.getBits(5)+1,x=this.getBits(4)+4,k=Array(n.length),A=0;x>A;)k[n[A++]]=this.getBits(3);for(var C=this.generateHuffmanTable(k),E=0,A=0,S=v+b,F=new Array(S);S>A;){var T=this.getCode(C);16==T?e(this,F,2,3,E):17==T?e(this,F,3,3,E=0):18==T?e(this,F,7,11,E=0):F[A++]=E=T}w=this.generateHuffmanTable(F.slice(0,v)),y=this.generateHuffmanTable(F.slice(v,S))}else t("Unknown block type in flate stream");for(var p=this.buffer,P=p?p.length:0,_=this.bufferLength;;){var I=this.getCode(w);if(256>I)_+1>=P&&(p=this.ensureBuffer(_+1),P=p.length),p[_++]=I;else{if(256==I)return void(this.bufferLength=_);I-=257,I=r[I];var q=I>>16;q>0&&(q=this.getBits(q));var E=(65535&I)+q;I=this.getCode(y),I=i[I],q=I>>16,q>0&&(q=this.getBits(q));var O=(65535&I)+q;_+E>=P&&(p=this.ensureBuffer(_+E),P=p.length);for(var R=0;E>R;++R,++_)p[_]=p[_-O]}}},e}}();!function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";"undefined"==typeof t.btoa&&(t.btoa=function(t){var n,r,i,o,s,a,c,u,l=0,h=0,d="",f=[];if(!t)return t;do n=t.charCodeAt(l++),r=t.charCodeAt(l++),i=t.charCodeAt(l++),u=n<<16|r<<8|i,o=u>>18&63,s=u>>12&63,a=u>>6&63,c=63&u,f[h++]=e.charAt(o)+e.charAt(s)+e.charAt(a)+e.charAt(c);while(l<t.length);d=f.join("");var p=t.length%3;return(p?d.slice(0,p-3):d)+"===".slice(p||3)}),"undefined"==typeof t.atob&&(t.atob=function(t){var n,r,i,o,s,a,c,u,l=0,h=0,d="",f=[];if(!t)return t;t+="";do o=e.indexOf(t.charAt(l++)),s=e.indexOf(t.charAt(l++)),a=e.indexOf(t.charAt(l++)),c=e.indexOf(t.charAt(l++)),u=o<<18|s<<12|a<<6|c,n=u>>16&255,r=u>>8&255,i=255&u,64==a?f[h++]=String.fromCharCode(n):64==c?f[h++]=String.fromCharCode(n,r):f[h++]=String.fromCharCode(n,r,i);while(l<t.length);return d=f.join("")}),Array.prototype.map||(Array.prototype.map=function(t){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;for(var e=Object(this),n=e.length>>>0,r=new Array(n),i=arguments.length>1?arguments[1]:void 0,o=0;n>o;o++)o in e&&(r[o]=t.call(i,e[o],o,e));return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){"use strict";if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;for(var n=Object(this),r=n.length>>>0,i=0;r>i;i++)i in n&&t.call(e,n[i],i,n)}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(i){if("object"!=typeof i&&("function"!=typeof i||null===i))throw new TypeError;var o,s,a=[];for(o in i)t.call(i,o)&&a.push(o);if(e)for(s=0;r>s;s++)t.call(i,n[s])&&a.push(n[s]);return a}}()),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")})}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this),"object"==typeof require&&("undefined"==typeof require_baseUrl_override&&(require_baseUrl_override="../"),require.config({baseUrl:require_baseUrl_override,shim:{"plugins/standard_fonts_metrics":{deps:["jspdf"]},"plugins/split_text_to_size":{deps:["jspdf"]},"plugins/annotations":{deps:["jspdf","plugins/standard_fonts_metrics","plugins/split_text_to_size"]},"plugins/outline":{deps:["jspdf"]},"plugins/addimage":{deps:["jspdf"]},"plugins/png_support":{deps:["jspdf","libs/png_support/png","libs/png_support/zlib"]},"plugins/from_html":{deps:["jspdf"]},"plugins/context2d":{deps:["jspdf","plugins/png_support","plugins/addimage","libs/css_colors"]},"libs/html2canvas/dist/html2canvas":{deps:["jspdf"]},"plugins/canvas":{deps:["jspdf"]},"plugins/acroform":{deps:["jspdf","plugins/annotations"]},html2pdf:{deps:["jspdf","plugins/standard_fonts_metrics","plugins/split_text_to_size","plugins/png_support","plugins/context2d","plugins/canvas","plugins/annotations","libs/html2canvas/dist/html2canvas"]},"test/test_harness":{deps:["jspdf","jspdf.plugin.standard_fonts_metrics","jspdf.plugin.split_text_to_size"]}},paths:{html2pdf:"libs/html2pdf"}}));var requirejs,require,define;!function(global){function isFunction(t){return"[object Function]"===ostring.call(t)}function isArray(t){return"[object Array]"===ostring.call(t)}function each(t,e){if(t){var n;for(n=0;n<t.length&&(!t[n]||!e(t[n],n,t));n+=1);}}function eachReverse(t,e){if(t){var n;for(n=t.length-1;n>-1&&(!t[n]||!e(t[n],n,t));n-=1);}}function hasProp(t,e){return hasOwn.call(t,e)}function getOwn(t,e){return hasProp(t,e)&&t[e]}function eachProp(t,e){var n;for(n in t)if(hasProp(t,n)&&e(t[n],n))break}function mixin(t,e,n,r){return e&&eachProp(e,function(e,i){!n&&hasProp(t,i)||(!r||"object"!=typeof e||!e||isArray(e)||isFunction(e)||e instanceof RegExp?t[i]=e:(t[i]||(t[i]={}),mixin(t[i],e,n,r)))}),t}function bind(t,e){return function(){return e.apply(t,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(t){throw t}function getGlobal(t){if(!t)return t;var e=global;return each(t.split("."),function(t){e=e[t]}),e}function makeError(t,e,n,r){var i=new Error(e+"\nhttp://requirejs.org/docs/errors.html#"+t);return i.requireType=t,i.requireModules=r,n&&(i.originalError=n),i}function newContext(t){function e(t){var e,n;for(e=0;e<t.length;e++)if(n=t[e],"."===n)t.splice(e,1),e-=1;else if(".."===n){if(0===e||1==e&&".."===t[2]||".."===t[e-1])continue;e>0&&(t.splice(e-1,2),e-=2)}}function n(t,n,r){var i,o,s,a,c,u,l,h,d,f,p,m,g=n&&n.split("/"),w=A.map,y=w&&w["*"];if(t&&(t=t.split("/"),l=t.length-1,A.nodeIdCompat&&jsSuffixRegExp.test(t[l])&&(t[l]=t[l].replace(jsSuffixRegExp,"")),"."===t[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),t=m.concat(t)),e(t),t=t.join("/")),r&&w&&(g||y)){s=t.split("/");t:for(a=s.length;a>0;a-=1){if(u=s.slice(0,a).join("/"),g)for(c=g.length;c>0;c-=1)if(o=getOwn(w,g.slice(0,c).join("/")),o&&(o=getOwn(o,u))){h=o,d=a;break t}!f&&y&&getOwn(y,u)&&(f=getOwn(y,u),p=a)}!h&&f&&(h=f,d=p),h&&(s.splice(0,d,h),t=s.join("/"))}return i=getOwn(A.pkgs,t),i?i:t}function r(t){isBrowser&&each(scripts(),function(e){return e.getAttribute("data-requiremodule")===t&&e.getAttribute("data-requirecontext")===b.contextName?(e.parentNode.removeChild(e),!0):void 0})}function i(t){var e=getOwn(A.paths,t);return e&&isArray(e)&&e.length>1?(e.shift(),b.require.undef(t),b.makeRequire(null,{skipMap:!0})([t]),!0):void 0}function o(t){var e,n=t?t.indexOf("!"):-1;return n>-1&&(e=t.substring(0,n),t=t.substring(n+1,t.length)),[e,t]}function s(t,e,r,i){var s,a,c,u,l=null,h=e?e.name:null,d=t,f=!0,p="";return t||(f=!1,t="_@r"+(I+=1)),u=o(t),l=u[0],t=u[1],l&&(l=n(l,h,i),a=getOwn(T,l)),t&&(l?p=a&&a.normalize?a.normalize(t,function(t){return n(t,h,i)}):-1===t.indexOf("!")?n(t,h,i):t:(p=n(t,h,i),u=o(p),l=u[0],p=u[1],r=!0,s=b.nameToUrl(p))),c=!l||a||r?"":"_unnormalized"+(q+=1),{prefix:l,name:p,parentMap:e,unnormalized:!!c,url:s,originalName:d,isDefine:f,id:(l?l+"!"+p:p)+c}}function a(t){var e=t.id,n=getOwn(C,e);return n||(n=C[e]=new b.Module(t)),n}function c(t,e,n){var r=t.id,i=getOwn(C,r);!hasProp(T,r)||i&&!i.defineEmitComplete?(i=a(t),i.error&&"error"===e?n(i.error):i.on(e,n)):"defined"===e&&n(T[r])}function u(t,e){var n=t.requireModules,r=!1;e?e(t):(each(n,function(e){var n=getOwn(C,e);n&&(n.error=t,n.events.error&&(r=!0,n.emit("error",t)))}),r||req.onError(t))}function l(){globalDefQueue.length&&(apsp.apply(F,[F.length,0].concat(globalDefQueue)),globalDefQueue=[])}function h(t){delete C[t],delete E[t]}function d(t,e,n){var r=t.map.id;t.error?t.emit("error",t.error):(e[r]=!0,each(t.depMaps,function(r,i){var o=r.id,s=getOwn(C,o);!s||t.depMatched[i]||n[o]||(getOwn(e,o)?(t.defineDep(i,T[o]),t.check()):d(s,e,n))}),n[r]=!0)}function f(){var t,e,n=1e3*A.waitSeconds,o=n&&b.startTime+n<(new Date).getTime(),s=[],a=[],c=!1,l=!0;if(!y){if(y=!0,eachProp(E,function(t){var n=t.map,u=n.id;if(t.enabled&&(n.isDefine||a.push(t),!t.error))if(!t.inited&&o)i(u)?(e=!0,c=!0):(s.push(u),r(u));else if(!t.inited&&t.fetched&&n.isDefine&&(c=!0,!n.prefix))return l=!1}),o&&s.length)return t=makeError("timeout","Load timeout for modules: "+s,null,s),t.contextName=b.contextName,u(t);l&&each(a,function(t){d(t,{},{})}),o&&!e||!c||!isBrowser&&!isWebWorker||k||(k=setTimeout(function(){k=0,f()},50)),y=!1}}function p(t){hasProp(T,t[0])||a(s(t[0],null,!0)).init(t[1],t[2])}function m(t,e,n,r){t.detachEvent&&!isOpera?r&&t.detachEvent(r,e):t.removeEventListener(n,e,!1)}function g(t){var e=t.currentTarget||t.srcElement;return m(e,b.onScriptLoad,"load","onreadystatechange"),m(e,b.onScriptError,"error"),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function w(){var t;for(l();F.length;){if(t=F.shift(),null===t[0])return u(makeError("mismatch","Mismatched anonymous define() module: "+t[t.length-1]));p(t)}}var y,v,b,x,k,A={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},C={},E={},S={},F=[],T={},P={},_={},I=1,q=1;return x={require:function(t){return t.require?t.require:t.require=b.makeRequire(t.map)},exports:function(t){return t.usingExports=!0,t.map.isDefine?t.exports?T[t.map.id]=t.exports:t.exports=T[t.map.id]={}:void 0},module:function(t){return t.module?t.module:t.module={id:t.map.id,uri:t.map.url,config:function(){return getOwn(A.config,t.map.id)||{}},exports:t.exports||(t.exports={})}}},v=function(t){this.events=getOwn(S,t.id)||{},this.map=t,this.shim=getOwn(A.shim,t.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},v.prototype={init:function(t,e,n,r){r=r||{},this.inited||(this.factory=e,n?this.on("error",n):this.events.error&&(n=bind(this,function(t){this.emit("error",t)})),this.depMaps=t&&t.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(t,e){this.depMatched[t]||(this.depMatched[t]=!0,this.depCount-=1,this.depExports[t]=e)},fetch:function(){if(!this.fetched){this.fetched=!0,b.startTime=(new Date).getTime();var t=this.map;return this.shim?void b.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return t.prefix?this.callPlugin():this.load()})):t.prefix?this.callPlugin():this.load()}},load:function(){var t=this.map.url;P[t]||(P[t]=!0,b.load(this.map.id,t))},check:function(){if(this.enabled&&!this.enabling){var t,e,n=this.map.id,r=this.depExports,i=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{i=b.execCb(n,o,r,i)}catch(s){t=s}else i=b.execCb(n,o,r,i);if(this.map.isDefine&&void 0===i&&(e=this.module,e?i=e.exports:this.usingExports&&(i=this.exports)),t)return t.requireMap=this.map,t.requireModules=this.map.isDefine?[this.map.id]:null,t.requireType=this.map.isDefine?"define":"require",u(this.error=t)}else i=o;this.exports=i,this.map.isDefine&&!this.ignore&&(T[n]=i,req.onResourceLoad&&req.onResourceLoad(b,this.map,this.depMaps)),h(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var t=this.map,e=t.id,r=s(t.prefix);this.depMaps.push(r),c(r,"defined",bind(this,function(r){var i,o,l,d=getOwn(_,this.map.id),f=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,m=b.makeRequire(t.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(f=r.normalize(f,function(t){return n(t,p,!0)})||""),o=s(t.prefix+"!"+f,this.map.parentMap),c(o,"defined",bind(this,function(t){this.init([],function(){return t},null,{enabled:!0,ignore:!0})})),l=getOwn(C,o.id),void(l&&(this.depMaps.push(o),this.events.error&&l.on("error",bind(this,function(t){this.emit("error",t)})),l.enable()))):d?(this.map.url=b.nameToUrl(d),void this.load()):(i=bind(this,function(t){this.init([],function(){return t},null,{enabled:!0})}),i.error=bind(this,function(t){this.inited=!0,this.error=t,t.requireModules=[e],eachProp(C,function(t){0===t.map.id.indexOf(e+"_unnormalized")&&h(t.map.id)}),u(t)}),i.fromText=bind(this,function(n,r){var o=t.name,c=s(o),l=useInteractive;r&&(n=r),l&&(useInteractive=!1),a(c),hasProp(A.config,e)&&(A.config[o]=A.config[e]);try{req.exec(n)}catch(h){return u(makeError("fromtexteval","fromText eval for "+e+" failed: "+h,h,[e]))}l&&(useInteractive=!0),this.depMaps.push(c),b.completeLoad(o),m([o],i)}),void r.load(t.name,m,i,A))})),b.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){E[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(t,e){var n,r,i;if("string"==typeof t){if(t=s(t,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[e]=t,i=getOwn(x,t.id))return void(this.depExports[e]=i(this));this.depCount+=1,c(t,"defined",bind(this,function(t){this.defineDep(e,t),this.check()})),this.errback&&c(t,"error",bind(this,this.errback))}n=t.id,r=C[n],hasProp(x,n)||!r||r.enabled||b.enable(t,this)})),eachProp(this.pluginMaps,bind(this,function(t){var e=getOwn(C,t.id);e&&!e.enabled&&b.enable(t,this)})),this.enabling=!1,this.check()},on:function(t,e){var n=this.events[t];n||(n=this.events[t]=[]),n.push(e)},emit:function(t,e){each(this.events[t],function(t){t(e)}),"error"===t&&delete this.events[t]}},b={config:A,contextName:t,registry:C,defined:T,urlFetched:P,defQueue:F,Module:v,makeModuleMap:s,nextTick:req.nextTick,onError:u,configure:function(t){t.baseUrl&&"/"!==t.baseUrl.charAt(t.baseUrl.length-1)&&(t.baseUrl+="/");var e=A.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(t,function(t,e){n[e]?(A[e]||(A[e]={}),mixin(A[e],t,!0,!0)):A[e]=t}),t.bundles&&eachProp(t.bundles,function(t,e){each(t,function(t){t!==e&&(_[t]=e)})}),t.shim&&(eachProp(t.shim,function(t,n){isArray(t)&&(t={deps:t}),!t.exports&&!t.init||t.exportsFn||(t.exportsFn=b.makeShimExports(t)),e[n]=t}),A.shim=e),t.packages&&each(t.packages,function(t){var e,n;t="string"==typeof t?{name:t}:t,n=t.name,e=t.location,e&&(A.paths[n]=t.location),A.pkgs[n]=t.name+"/"+(t.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(C,function(t,e){t.inited||t.map.unnormalized||(t.map=s(e))}),(t.deps||t.callback)&&b.require(t.deps||[],t.callback)},makeShimExports:function(t){function e(){var e;return t.init&&(e=t.init.apply(global,arguments)),e||t.exports&&getGlobal(t.exports)}return e},makeRequire:function(e,i){function o(n,r,c){var l,h,d;return i.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),"string"==typeof n?isFunction(r)?u(makeError("requireargs","Invalid require call"),c):e&&hasProp(x,n)?x[n](C[e.id]):req.get?req.get(b,n,e,o):(h=s(n,e,!1,!0),l=h.id,hasProp(T,l)?T[l]:u(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+t+(e?"":". Use require([])")))):(w(),b.nextTick(function(){w(),d=a(s(null,e)),d.skipMap=i.skipMap,d.init(n,r,c,{enabled:!0}),f()}),o)}return i=i||{},mixin(o,{isBrowser:isBrowser,toUrl:function(t){var r,i=t.lastIndexOf("."),o=t.split("/")[0],s="."===o||".."===o;return-1!==i&&(!s||i>1)&&(r=t.substring(i,t.length),t=t.substring(0,i)),b.nameToUrl(n(t,e&&e.id,!0),r,!0)},defined:function(t){return hasProp(T,s(t,e,!1,!0).id)},specified:function(t){return t=s(t,e,!1,!0).id,hasProp(T,t)||hasProp(C,t)}}),e||(o.undef=function(t){l();var n=s(t,e,!0),i=getOwn(C,t);r(t),delete T[t],delete P[n.url],delete S[t],eachReverse(F,function(e,n){e[0]===t&&F.splice(n,1)}),i&&(i.events.defined&&(S[t]=i.events),h(t))}),o},enable:function(t){var e=getOwn(C,t.id);e&&a(t).enable()},completeLoad:function(t){var e,n,r,o=getOwn(A.shim,t)||{},s=o.exports;for(l();F.length;){if(n=F.shift(),null===n[0]){if(n[0]=t,e)break;e=!0}else n[0]===t&&(e=!0);p(n)}if(r=getOwn(C,t),!e&&!hasProp(T,t)&&r&&!r.inited){if(!(!A.enforceDefine||s&&getGlobal(s)))return i(t)?void 0:u(makeError("nodefine","No define call for "+t,null,[t]));p([t,o.deps||[],o.exportsFn])}f()},nameToUrl:function(t,e,n){var r,i,o,s,a,c,u,l=getOwn(A.pkgs,t);if(l&&(t=l),u=getOwn(_,t))return b.nameToUrl(u,e,n);if(req.jsExtRegExp.test(t))a=t+(e||"");else{for(r=A.paths,i=t.split("/"),o=i.length;o>0;o-=1)if(s=i.slice(0,o).join("/"),c=getOwn(r,s)){isArray(c)&&(c=c[0]),i.splice(0,o,c);break}a=i.join("/"),a+=e||(/^data\:|\?/.test(a)||n?"":".js"),a=("/"===a.charAt(0)||a.match(/^[\w\+\.\-]+:/)?"":A.baseUrl)+a}return A.urlArgs?a+((-1===a.indexOf("?")?"?":"&")+A.urlArgs):a},load:function(t,e){req.load(b,t,e)},execCb:function(t,e,n,r){return e.apply(r,n)},onScriptLoad:function(t){if("load"===t.type||readyRegExp.test((t.currentTarget||t.srcElement).readyState)){interactiveScript=null;var e=g(t);b.completeLoad(e.id)}},onScriptError:function(t){var e=g(t);return i(e.id)?void 0:u(makeError("scripterror","Script error for: "+e.id,t,[e.id]))}},b.require=b.makeRequire(),b}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(t){return"interactive"===t.readyState?interactiveScript=t:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.15",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(t,e,n,r){var i,o,s=defContextName;return isArray(t)||"string"==typeof t||(o=t,isArray(e)?(t=e,e=n,n=r):t=[]),o&&o.context&&(s=o.context),i=getOwn(contexts,s),i||(i=contexts[s]=req.s.newContext(s)),o&&i.configure(o),i.require(t,e,n)},req.config=function(t){return req(t)},req.nextTick="undefined"!=typeof setTimeout?function(t){setTimeout(t,4)}:function(t){t()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(t){req[t]=function(){var e=contexts[defContextName];return e.require[t].apply(e,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(t,e,n){var r=t.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=t.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(t,e,n){var r,i=t&&t.config||{};if(isBrowser)return r=req.createNode(i,e,n),r.setAttribute("data-requirecontext",t.contextName),r.setAttribute("data-requiremodule",e),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",t.onScriptLoad,!1),r.addEventListener("error",t.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",t.onScriptLoad)),r.src=n,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{importScripts(n),t.completeLoad(e)}catch(o){t.onError(makeError("importscripts","importScripts failed for "+e+" at "+n,o,[e]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(t){return head||(head=t.parentNode),dataMain=t.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(t,e,n){var r,i;"string"!=typeof t&&(n=e,e=t,t=null),isArray(e)||(n=e,e=null),!e&&isFunction(n)&&(e=[],n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(t,n){e.push(n)}),e=(1===n.length?["require"]:["require","exports","module"]).concat(e))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(t||(t=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),(i?i.defQueue:globalDefQueue).push([t,e,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),global[""]=exports}({},function(){return this}());

var SAILPLAY = (function () {

  //methods that not supported in old browsers
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
      var len = this.length >>> 0;

      var from = Number(arguments[1]) || 0;
      from = (from < 0) ? Math.ceil(from) : Math.floor(from);
      if (from < 0)
        from += len;

      for (; from < len; from++) {
        if (from in this &&
          this[from] === elt)
          return from;
      }
      return -1;
    };
  }

  var cookies = {
    createCookie: function (name, value, days) {
      var expires;
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      }
      else expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    },
    readCookie: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    eraseCookie: function (name) {
      cookies.createCookie(name, "", -1);
    }
  };

  //simple jsonp service
  var JSONP = {
    currentScript: null,
    get: function (url, data, success, error) {
      var src = url + (url.indexOf("?") + 1 ? "&" : "?");
      var head = document.getElementsByTagName("head")[0];
      var newScript = document.createElement("script");
      var params = [];

      data = data || {};

      //auth_hash checking
      if (!_config.auth_hash) {
        delete data.auth_hash;
      }

      window.JSONP_CALLBACK = window.JSONP_CALLBACK || {};

      var callback_name = 'sailplay_' + new Date().getTime() + Math.random().toString().replace('.', '');

      var jsonpTimeout = setTimeout(function () {
        try {
          head.removeChild(newScript);
        }
        catch (err) {
        }
        delete window.JSONP_CALLBACK[callback_name];
      }, 10000);

      window.JSONP_CALLBACK[callback_name] = function (data) {
        clearTimeout(jsonpTimeout);
        try {
          head.removeChild(newScript);
        }
        catch (err) {
        }
        delete window.JSONP_CALLBACK[callback_name];
        success && success(data);
      };

      data["callback"] = 'JSONP_CALLBACK.' + callback_name;
      if (_config.dep_id) data.dep_id = _config.dep_id;

      for (var param_name in data) {
        params.push(param_name + "=" + encodeURIComponent(data[param_name]));
      }
      src += params.join("&");

      newScript.type = "text/javascript";
      newScript.src = src;
      newScript.onerror = function (ex) {
        try {
          head.removeChild(newScript);
        }
        catch (err) {
        }
        delete window.JSONP_CALLBACK[callback_name];
        error && error(ex);
      };

      head.insertBefore(newScript, head.firstChild);
    },
    success: null
  };

  var sp = {};

  //observer pattern
  var _handlers = {};

  sp.on = function (event, handler) {
    if (typeof (_handlers[event]) == "undefined")
      _handlers[event] = [];
    _handlers[event].push(handler);
  };

  sp.send = function (event, data, callback) {
    if (_handlers[event]) {
      for (var i = 0; i < _handlers[event].length; i++) {
        _handlers[event][i](data, callback);
      }
    }
  };

  //private config
  var _config = {};
  var _remote_login_init = false;

  function initError() {
    alert('Please init SailPlay HUB first!');
  }

  function remoteLogin(opts) {

    var frame;

    opts = opts || {};

    if (opts.node && opts.node.nodeType == 1 && opts.node.tagName == 'IFRAME') {
      frame = opts.node;
    }
    else {
      frame = document.createElement('IFRAME');
      frame.style.border = 'none';
      frame.style.position = 'fixed';
      frame.style.top = '0';
      frame.style.left = '0';
      frame.style.bottom = '0';
      frame.style.right = '0';
      frame.style.width = '410px';
      frame.style.height = '510px';
      frame.created = true;
      frame.style.background = 'transparent';
      frame.style.margin = 'auto';
      frame.style.zIndex = '100000';
      document.body.appendChild(frame);
    }

    var frame_id = frame.id || 'sailplay_login_frame_' + new Date().getTime();

    frame.name = frame_id;
    frame.id = frame_id;

    function onMessage(messageEvent) {

      var data = {};

      if (messageEvent.origin == _config.DOMAIN) {
        try {
          data = JSON.parse(messageEvent.data);
        }
        catch (e) {

        }
      }
      if (data.name == 'login.success') {
        sp.send('login.do', data.auth_hash);
        return;
      }
      if (data.name == 'login.cancel') {
        sp.send('login.cancel');
        cancelLogin();
        return;
      }
      if (data.name == 'login.check') {
        if (data.auth_hash == 'None') {
          sp.send('logout');
        }
        else {
          cancelLogin();
          sp.send('login.do', data.auth_hash)
        }
        return;
      }
      if (data.name == 'logout.success') {
        _config.auth_hash = '';
        sp.send('logout.success');
      }

    }

    function cancelLogin() {
      if (frame.created) {
        try {
          document.body.removeChild(frame)
        }
        catch (e) {

        }
      }
    }

    var params = {};
    params.partner_id = _config.partner.id;
    params.dep_id = _config.dep_id || '';
    params.background = opts.background || '';
    params.partner_info = opts.partner_info || 0;
    if (opts.lang) {
      params.lang = opts.lang;
    }
    params.disabled_options = opts.disabled_options || '';
    params.texts = JSON.stringify(opts.texts || '');


    var params_string = [];

    var src = _config.DOMAIN + '/users/auth-page/?';
    for (var param_name in params) {
      params_string.push(param_name + "=" + encodeURIComponent(params[param_name]));
    }
    src += params_string.join("&");

    frame.setAttribute('src', src);

    if (!_remote_login_init) {
      window.addEventListener("message", onMessage, false);
      _remote_login_init = true;
    }

  }

  //init function
  sp.on('init', function (params) {
    if (!params) {
      alert('SailPlay: provide required parameters');
    }
    if (!params.partner_id) {
      alert('SailPlay: provide partner_id');
      return;
    }
    JSONP.get((params.domain || 'http://sailplay.ru') + '/js-api/' + params.partner_id + '/config/', {
      lang: params.lang || 'ru',
      dep_id: (params.dep_id || '')
    }, function (response) {
      if (response && response.status == 'ok') {

        _config = response.config;
        _config.DOMAIN = (params.domain || 'http://sailplay.ru');
        _config.dep_id = params.dep_id || '';
        _config.env.staticUrl = params.static_url || _config.env.staticUrl;
        _config.social_networks = ['fb', 'vk', 'tw', 'gp', 'ok'];
        _config.platform = params.platform || 'desktop';

        //postmessage events init
        //1. bind action events
        function onActionMessage(messageEvent) {
          var data = {};
          if (messageEvent.origin == _config.DOMAIN) {
            try {
              data = JSON.parse(messageEvent.data);
            }
            catch (e) {

            }

            switch (data && data.name) {
              case 'actions.perform.success':
                sp.send('actions.perform.success', data);
                break;
              case 'actions.perform.error':
                sp.send('actions.perform.error', data);
                break;
              case 'actions.social.connect.complete':
                sp.send('actions.social.connect.complete', data);
                break;
              case 'actions.social.connect.success':
                sp.send('actions.social.connect.success', data);
                break;
              case 'actions.social.connect.error':
                sp.send('actions.social.connect.error', data);
                break;
              case 'friend_invite_cookie':
                break;
              case 'actions.social.gp.like.mouseenter':
                sp.send('actions.social.gp.like.mouseenter');
                break;
              case 'actions.social.gp.like.mouseleave':
                sp.send('actions.social.gp.like.mouseleave');
                break;
            }

          }
        }

        window.addEventListener("message", onActionMessage, false);

        //2. recieve ref_hash info
        _config.ref_hash = sp.url_params().ref_hash || '';
        //var cookie_frame = document.createElement('IFRAME');
        //cookie_frame.style.width = 0;
        //cookie_frame.style.height = 0;
        //cookie_frame.style.top = '-10000px';
        //cookie_frame.style.left = '-10000px';
        //cookie_frame.src = _config.DOMAIN + '/js-api/' + _config.partner.id + '/actions/social-widget/v2/';
        //document.body.appendChild(cookie_frame);
        //cookie_frame.onload = function(){
        //  document.body.removeChild(cookie_frame);
        //};

        sp.send('init.success', _config);
        //        console.dir(_config);
      } else {
        sp.send('init.error', response);
        alert('SailPlay: app load failed!');
      }
    });

  });

  sp.on('login.remote', function (options) {
    remoteLogin(options);
  });

  //////////////////
  //bind hub events
  sp.on('language.set', function (lang) {
    if (_config == {}) {
      initError();
      return;
    }
    if (typeof lang == 'string') {
      JSONP.get(_config.DOMAIN + '/js-api/' + _config.partner.id + '/config/', {lang: lang}, function (response) {
        if (response && response.status == 'ok') {
          _config.lang = response.config.lang;
          sp.send('language.set.success', _config.lang);
          //        console.dir(_config);
        } else {
          sp.send('language.set.error', response);
        }
      });
    }
  });

  //////////////////
  //bind api events

  //LOGIN & LOGOUT
  sp.on('login.do', function (auth_hash) {
    _config.auth_hash = auth_hash;
//    cookies.createCookie('sp_auth_hash', _config.auth_hash);
    var params = {
      auth_hash: _config.auth_hash
    };
    JSONP.get(_config.DOMAIN + _config.urls.users.info, params, function (res) {
      //      console.dir(res);
      if (res.status == 'ok') {
        sp.send('login.success', res.user);
      } else {
        _config.auth_hash = '';
//        cookies.eraseCookie('sp_auth_hash');
        sp.send('login.error', res);
      }
    });
  });

  sp.on('login', function (auth_hash) {

    if (_config == {}) {
      initError();
      return;
    }

    sp.send('login.do', auth_hash);

  });

  sp.on('logout', function () {
    if (_config == {}) {
      initError();
      return;
    }
    var req = document.createElement('iframe');
    req.width = 0;
    req.height = 0;
    req.style.border = 'none';
    req.src = _config.DOMAIN + '/users/logout';
    document.body.appendChild(req);
    req.onload = function () {
      document.body.removeChild(req);
      _config.auth_hash = '';
      cookies.eraseCookie('sp_auth_hash');
      sp.send('logout.success');
    };


  });

  //USER INFO
  sp.on('load.user.info', function (p) {
    if (_config == {}) {
      initError();
      return;
    }
    var params = {
      user_status: 1,
      badges: 1,
      last_badge: 1
    };
    if (p && p.purchases) {
      params.purchases = p.purchases;
    }
    if (p && p.all) {
      params.all = p.all;
    }
    if (p && p.user) {
      for (var param in p.user) {
        params[param] = p.user[param];
      }
    }
    else {
      params.auth_hash = _config.auth_hash;
    }
    JSONP.get(_config.DOMAIN + _config.urls.users.info, params, function (res) {
      if (res.status == 'ok') {
        sp.send('load.user.info.success', res);
      } else {
        sp.send('load.user.info.error', res);
      }
    });
  });

  sp.on('users.update', function (params, callback) {

    if (_config == {}) {
      initError();
      return;
    }

    params = params || {};

    if (_config.auth_hash) {
      params.auth_hash = _config.auth_hash;
    }

    JSONP.get(_config.DOMAIN + '/js-api/' + _config.partner.id + '/users/update/', params, function (res) {

      callback && callback(res);

      if (res.status === 'ok') {
        sp.send('users.update.success', res);
      }
      else {
        sp.send('users.update.error', res);
      }
    });

  });

  //USER HISTORY
  sp.on('load.user.history', function (params) {
    if (_config == {}) {
      initError();
      return;
    }

    params = params || {};

    if (_config.auth_hash) {
      params.auth_hash = _config.auth_hash;
    }

    JSONP.get(_config.DOMAIN + _config.urls.users.history, params, function (res) {
      //      console.dir(res);
      if (res.status == 'ok') {
        sp.send('load.user.history.success', res.history);
      } else {
        sp.send('load.user.history.error', res);
      }
    });
  });

  //GIFTS GET INFO
  sp.on('gifts.get', function (giftId) {
    if (_config == {}) {
      initError();
      return;
    }
    var params = {
      gift_id: giftId,
      auth_hash: _config.auth_hash
    };
    JSONP.get(_config.DOMAIN + _config.urls.gifts.get, params, function (res) {
      //      console.dir(res);
      if (res.status == 'ok') {
        sp.send('gifts.get.success', res.gift);
      } else {
        sp.send('gifts.get.error', res);
      }
    });
  });

  //GIFTS LIST
  sp.on('load.gifts.list', function (params) {

    if (_config == {}) {
      initError();
      return;
    }

    params = params || {};

    if (_config.auth_hash) {
      params.auth_hash = _config.auth_hash;
    }

    JSONP.get(_config.DOMAIN + _config.urls.gifts.list, params, function (res) {
      //      console.dir(res);
      if (res.status == 'ok') {
        sp.send('load.gifts.list.success', res.gifts);
      } else {
        sp.send('load.gifts.list.error', res);
      }
    });
  });

  //GIFT CATEGORIES
  sp.on('load.gifts.categories', function (params) {

    if (_config == {}) {
      initError();
      return;
    }

    params = params || {};

    JSONP.get(_config.DOMAIN + _config.urls.gifts.categories_list, params, function (res) {
      if (res.status == 'ok') {
        sp.send('load.gifts.categories.success', res.categories);
      } else {
        sp.send('load.gifts.categories.error', res);
      }
    });

  });

  //GET GIFT
  function forceCompleteGiftPurchase(giftPurchase, opts) {
    var params = {
      gift_public_key: giftPurchase.gift_public_key,
      auth_hash: _config.auth_hash
    };
    if (opts && opts.no_user_sms) {
      params.no_user_sms = opts.no_user_sms;
    }
    JSONP.get(_config.DOMAIN + _config.urls.gifts.purchase.force_confirm, params, function (res) {
      if (res.status == 'ok') {
        sp.send('gift.purchase.force_complete.success', res);
      } else {
        sp.send('gift.purchase.force_complete.error', res);
      }
      //      console.dir(res);
    });
  }

  //CREATE GIFT PURCHASE V1
  sp.on('gifts.purchase', function (p) {
    if (_config == {}) {
      initError();
      return;
    }
    var gift = p.gift || {};
    if (!_config.auth_hash) {
      sp.send('gifts.purchase.auth.error', gift);
    } else {
      var params = {
        gift_id: gift.id,
        dep_id: _config.dep_id || _config.partner.depId || '',
        auth_hash: _config.auth_hash
      };
      JSONP.get(_config.DOMAIN + _config.urls.gifts.purchase.purchase, params, function (res) {
        if (res.status == 'ok') {
          sp.send('gifts.purchase.success', res);
          if (res.is_completed) {
            var requestedPurchase = res;
            if (!requestedPurchase.request_to_partner_url) {
              forceCompleteGiftPurchase(requestedPurchase, p.options);
            } else {
              var reqGiftPurchase = {
                gift_public_key: requestedPurchase['gift_public_key'],
                gift_sku: requestedPurchase['gift_sku'],
                auth_hash: _config.auth_hash
              };
              if (requestedPurchase['user_phone']) {
                reqGiftPurchase['user_phone'] = requestedPurchase['user_phone'];
              }
              if (requestedPurchase['email']) {
                reqGiftPurchase['email'] = requestedPurchase['email'];
              }
              JSONP.get(requestedPurchase.request_to_partner_url, reqGiftPurchase, function (res) {
                sp.send('gifts.purchase.partner_request.success', res);
              }, function (res) {
                sp.send('gifts.purchase.partner_request.error', res);
                forceCompleteGiftPurchase(requestedPurchase, p.options);
              });
            }
          }
        } else {
          sp.send('gift.purchase.error', res);
        }
        //        console.dir(res);
      });
    }
  });

  //BADGES LIST
  sp.on('load.badges.list', function () {
    if (_config == {}) {
      initError();
      return;
    }
    var params = {
      auth_hash: _config.auth_hash
    };
    JSONP.get(_config.DOMAIN + _config.urls.badges.list, params, function (res) {

      //      console.dir(res);
      if (res.status == 'ok') {

        function create_badge_actions(badge) {
          if (badge && badge.is_received) {

            badge.actions = {};

            for (var sn in _config.social_networks) {

              badge.actions[_config.social_networks[sn]] = {

                socialType: _config.social_networks[sn],
                action: 'badge',
                shortLink: window.location.href,
                pic: badge.thumbs.url_250x250,
                badgeId: badge.id,
                msg: badge.share_msg

              };

            }
          }
        }

        for (var ch in res.multilevel_badges) {

          var multi_line = res.multilevel_badges[ch];

          for (var b in multi_line) {

            create_badge_actions(multi_line[b]);

          }

        }

        for (var olb in res.one_level_badges) {

          create_badge_actions(res.one_level_badges[olb]);

        }

        sp.send('load.badges.list.success', res);
      } else {
        sp.send('load.badges.list.error', res);
      }
    });
  });

  //PROMO-CODES SECTION
  sp.on('promocodes.apply', function (promocode) {
    if (_config == {}) {
      initError();
      return;
    }
    promocode.auth_hash = _config.auth_hash;
    if (_config.auth_hash) {
      JSONP.get(_config.DOMAIN + _config.urls.promocodes.apply, promocode, function (res) {
        if (res.status == 'ok') {
          sp.send('promocodes.apply.success', res);
        } else {
          sp.send('promocodes.apply.error', res);
        }
      });
    } else {
      sp.send('promocodes.apply.auth.error', action);
    }
  });

  // user update
  sp.on("user.update", function (params) {
    if (_config == {}) {
      initError();
      return;
    }
    JSONP.get(_config.DOMAIN + "/js-api/" + _config.partner.id + "/users/update/", params, function (res) {
      if (res.status == 'ok') {
        sp.send('user.update.success', res);
      } else {
        sp.send('user.update.error', res);
      }
    })
  });

  //TAGS SECTIONS
  sp.on('tags.add', function (data, callback) {
    if (_config == {}) {
      initError();
      return;
    }
    if (_config.auth_hash || data.user) {
      var tagsObj = {
        tags: data.tags && data.tags.join(',') || []
      };
      if (data.user) {
        for (var p in data.user) {
          tagsObj[p] = data.user[p];
        }
      }
      else {
        tagsObj.auth_hash = _config.auth_hash;
      }
      JSONP.get(_config.DOMAIN + _config.urls.tags.add, tagsObj, function (res) {
        callback && callback(res);
        if (res.status == 'ok') {
          sp.send('tags.add.success', res);
        } else {
          sp.send('tags.add.error', res);
        }
      });
    } else {
      SAILPLAY.send('tags.add.auth.error', tags);
    }
  });

  sp.on('tags.delete', function (data) {
    if (_config == {}) {
      initError();
      return;
    }
    if (_config.auth_hash || data.user) {
      var tagsObj = {
        tags: data.tags && data.tags.join(',') || []
      };
      if (data.user) {
        for (var p in data.user) {
          tagsObj[p] = data.user[p];
        }
      }
      else {
        tagsObj.auth_hash = _config.auth_hash;
      }
      JSONP.get(_config.DOMAIN + _config.urls.tags.delete, tagsObj, function (res) {
        if (res.status == 'ok') {
          sp.send('tags.delete.success', res);
        } else {
          sp.send('tags.delete.error', res);
        }
      });
    } else {
      SAILPLAY.send('tags.delete.auth.error', data);
    }
  });

  // tag exist
  sp.on("tags.exist", function (data) {
    if (_config == {}) {
      initError();
      return;
    }
    if (_config.auth_hash || data.user) {
      var obj = {
        tags: JSON.stringify(data.tags)
      };
      if (data.user) {
        for (var p in data.user) {
          obj[p] = data.user[p];
        }
      }
      else {
        obj.auth_hash = _config.auth_hash;
      }
      obj.lang = data.lang || _config.lang || 'ru';
      JSONP.get(_config.DOMAIN + _config.urls.tags.exist, obj, function (res) {
        if (res.status == 'ok') {
          sp.send('tags.exist.success', res);
        } else {
          sp.send('tags.exist.error', res);
        }
      });
    } else {
      sp.send('tags.exist.auth.error', tags);
    }

  });

  //ADD CUSTOM VARIABLES
  sp.on('vars.add', function (data, callback) {
    if (_config == {}) {
      initError();
      return;
    }
    if (_config.auth_hash || data.user) {
      var obj = data.custom_vars;
      if (data.user) {
        for (var p in data.user) {
          obj[p] = data.user[p];
        }
      }
      else {
        obj.auth_hash = _config.auth_hash;
      }
      JSONP.get(_config.DOMAIN + '/js-api/' + _config.partner.id + '/users/custom-variables/add/', obj, function (res) {
        if (res.status == 'ok') {
          sp.send('vars.add.success', res);
        } else {
          sp.send('vars.add.error', res);
        }
        callback && callback(res);
      });
    } else {
      sp.send('vars.add.auth.error', data);
    }
  });

  //LEADERBOARD SECTION
  sp.on('leaderboard.load', function () {
    if (_config == {}) {
      initError();
      return;
    }
    var tagsObj = {
      auth_hash: _config.auth_hash
    };
    JSONP.get(_config.DOMAIN + _config.urls.leaderboard.data, tagsObj, function (res) {
      if (res.status == 'ok') {
        sp.send('leaderboard.load.success', res.data);
      } else {
        sp.send('leaderboard.load.error', res);
      }
    });
  });

  //REVIEWS SECTION
  sp.on('load.reviews.list', function (data) {
    if (_config == {}) {
      initError();
      return;
    }

    var req_data = {};

    if (data) {
      req_data.page = data.page || 1
    }

    JSONP.get(_config.DOMAIN + _config.urls.reviews.list, req_data, function (res) {
      if (res.status == 'ok') {
        sp.send('load.reviews.list.success', {page: res.page, pages: res.pages, reviews: res.reviews});
      } else {
        sp.send('load.reviews.list.error', res);
      }
    });
  });

  sp.on('reviews.add', function (data) {
    if (_config == {}) {
      initError();
      return;
    }
    var req_data = {
      auth_hash: _config.auth_hash,
      rating: data.rating || '',
      review: data.review || ''
    };
    JSONP.get(_config.DOMAIN + _config.urls.reviews.add, req_data, function (res) {
      if (res.status == 'ok') {
        sp.send('reviews.add.success', res);
      } else {
        sp.send('reviews.add.error', res);
      }
    });
  });

  sp.on('purchases.add', function (data) {
    if (_config == {}) {
      initError();
      return;
    }
    var req_data = {
      auth_hash: _config.auth_hash,
      price: data.price || '',
      order_num: data.order_num || ''
    };
    JSONP.get(_config.DOMAIN + _config.urls.purchase, req_data, function (res) {
      if (res.status == 'ok') {
        sp.send('purchases.add.success', res);
      } else {
        sp.send('purchases.add.error', res);
      }
    });
  });

  //utils
  sp.config = function () {
    return _config;
  };

  sp.find_by_properties = function (arr, props) {
    var filtered_arr = [];
    for (var i = 0; i < arr.length; i += 1) {
      var seeked = arr[i];
      var good = true;
      for (var p in props) {
        if (props[p] != seeked[p]) {
          good = false;
        }
      }
      if (good) filtered_arr.push(seeked);
    }
    return filtered_arr;
  };

  sp.jsonp = JSONP;

  sp.is_dom = function (obj) {
    //Returns true if it is a DOM node

    function isNode(o) {
      return (
        typeof Node === "object" ? o instanceof Node :
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
      );
    }

    //Returns true if it is a DOM element
    function isElement(o) {
      return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
        o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
      );
    }

    return isNode(obj) || isElement(obj);

  };

  sp.url_params = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var uri_component = pair && pair[1] ? pair[1].replace(/%([^\d].)/, "%25$1") : '';
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(uri_component);
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        query_string[pair[0]] = [query_string[pair[0]], decodeURIComponent(uri_component)];
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(uri_component));
      }
    }
    return query_string;
  };

  return sp;

}());
(function () {

  if(typeof window.SAILPLAY === 'undefined'){
    console.log('Can\'t find main SAILPLAY module');
    return;
  }

  var sp = window.SAILPLAY;

  var JSONP = sp.jsonp;

  var _actions_config = false;

  sp.actions = {};

  sp.actions.config = function(){
    return _actions_config;
  };

  //ACTIONS SECTION

  //LOAD ACTIONS LIST
  sp.on('load.actions.list', function () {
    if(sp.config() == {}){
      alert('Please init SailPlay HUB first!');
      return;
    }
    var params = {
      auth_hash: sp.config().auth_hash
    };

    JSONP.get(sp.config().DOMAIN + sp.config().urls.actions.load, params, function (res) {
      //      console.dir(res);
      if (res.status == 'ok') {
        _actions_config = res.data;
        sp.send('load.actions.list.success', res.data);
      } else {
        sp.send('load.actions.list.error', res);
      }
    });
  });

  sp.on('set.actions.list', function (actions) {
    _actions_config = actions;
  });

  //PERFORM ACTION

  sp.actions.parse = function(dom, action){

    if(!sp.is_dom(dom)) {
      console.error('sp.actions.parse() need DOM element as first parameter');
      return;
    }

    if(!action) {
      console.error('sp.actions.parse() need Action object as second parameter');
      return;
    }

    if(!_actions_config.connectedAccounts && !action.force) {

      console.error('sp.actions.parse() must execute after event load.actions.list.success');
      return;

    }

    if(!action.socialType){

      //console.dir(action);
      dom.addEventListener('click', function(){
        sp.send('actions.perform', action);
      });

      return;

    }

    if(sp.config().platform === 'mobile' && action.socialType){

      dom.addEventListener('click', function(){
        sp.send('actions.perform', action);
      });

    }

    else {

      parse_frame();

    }

    function parse_frame(){
      var styles = dom.getAttribute('data-styles');
      var text = dom.getAttribute('data-text');

      var action_frame = document.createElement('IFRAME');
      action_frame.style.border = 'none';
      action_frame.style.width = '150px';
      action_frame.style.height = '30px';
      action_frame.style.background = 'transparent';
      action_frame.style.overflow = 'hidden';
      action_frame.setAttribute('scrolling', 'no');
      action_frame.className = 'sailplay_action_frame';

      function EncodeQueryData(data)
      {
        var ret = [];
        for (var d in data)
          ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
      }

      var frame_params = {
        auth_hash: sp.config().auth_hash,
        socialType: action.socialType,
        action: action.action,
        link: action.shortLink,
        pic: (action.pic || _actions_config.partnerCustomPic || sp.config().partner.logo),
        msg: (action.msg || _actions_config.messages[action.action] || sp.config().partner.name),
        account_connected: action.force ? true : (_actions_config.connectedAccounts[action.socialType] || false) ,
        force: action.force
      };

      if(action['_actionId']) frame_params._actionId = action._actionId;
      if(styles) frame_params.styles = styles;
      if(text) frame_params.text = text;

      if (action.action == 'purchase') {
        frame_params.purchasePublicKey = _actions_config.purchasePublicKey;
      }

      if (action.action == 'badge') {
        frame_params.badgeId= action.badgeId;
      }

      action_frame.src = sp.config().DOMAIN + '/js-api/' + sp.config().partner.id + '/actions/social-widget/v2/?' + EncodeQueryData(frame_params);
      dom.innerHTML = '';
      dom.appendChild(action_frame);

      action_frame.onload = function() {
        sp.send('actions.parse.success', action);
      }      
    }



  };

  sp.on('actions.parse', function (actions) {

    if(sp.config() == {}){
      return;
    }

    if(actions && Array.isArray(actions)) {
      Actions.social_init(actions);
    }
    else {
      sp.send('actions.parse.error', { message: 'Actions list needed' });
    }

  });

  // SOCIAL GOOGLE PLUS CHANGE HEIGHT
  sp.on('actions.social.gp.like.mouseenter', function(){
    var elms = document.querySelectorAll('iframe[iframe-action-gp-like]');
    var originWidth,
      w,
      h = 500;
    for(var i = 0, len = elms.length; i < len; i++){
      elms[i].removeAttribute("style");
      originWidth = elms[i].parentNode. offsetWidth;
      w = +originWidth + 70;
      elms[i].style.cssText = 'width: ' + w + 'px !important;height: ' + h + 'px !important;margin-left: -35px !important;z-index: 10 !important;';
      elms[i].parentNode.style.setProperty ("overflow", "visible", "important");
    }
  });

  sp.on('actions.social.gp.like.mouseleave', function(){
    var elms = document.querySelectorAll('iframe[iframe-action-gp-like]');
    var w = 150,
      h = 27;
    for(var i = 0, len = elms.length; i < len; i++){
      elms[i].removeAttribute("style");
      elms[i].style.cssText = 'width: ' + w + 'px !important;height: ' + h + 'px !important;margin-left: auto !important;';
      elms[i].parentNode.style.setProperty ("overflow", "hidden", "important");
    }
  });

  var Actions = {};

  Actions.social_init = function(actions){

    var social_buttons = document.querySelectorAll('[data-sp-action]');

    for(var i = 0; i < social_buttons.length; i+=1) {

      (function(){
        var btn = social_buttons[i];
        var action_id = Number(btn.getAttribute('data-sp-action'));
        var action = sp.find_by_properties((actions || _actions_config.actions), { _actionId: action_id })[0];
        sp.actions.parse(btn, action);
      }());

    }

  };

  //actions v1 section

  Actions.openSocialRegNeedPopup = function (action) {
    var w;
    if (action.socialType == 'vk')
      w = Actions.popupWindow(_actions_config.social.vk.authUrl, 'social_reg', 840, 400);
    else
      w = Actions.popupWindow(_actions_config.social[action.socialType].authUrl, 'social_reg');

    var checkPopupInterval = setInterval(function () {
      if (w == null || w.closed) {
        sp.send('actions.social.connect.complete');
        clearInterval(checkPopupInterval);
      }
    }, 100);

  };

  Actions.popupWindow = function (url, title, w, h) {
    var width, height, left, top;
    if (w !== undefined && h !== undefined) {
      width = w;
      height = h;
      left = (screen.width / 2) - (w / 2);
      top = (screen.height / 2) - (h / 2);
    } else {
      width = screen.width / 2;
      height = screen.height / 2;
      left = width - (width / 2);
      top = height - (height / 2);
    }

    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);

  };

  Actions.share = function (action) {

    var frameUrl = sp.config().DOMAIN + '/js-api/' + sp.config().partner.id + '/actions/social-widget/?auth_hash=' + sp.config().auth_hash;
    frameUrl += '&socialType=' + action.socialType + '&action=' + action.action + '&link=' + action.shortLink + '&pic=' + (_actions_config.partnerCustomPic ? _actions_config.partnerCustomPic : sp.config().partner.logo);

    frameUrl += '&msg=' + _actions_config.messages[action.action];
    frameUrl += '&_actionId=' + action['_actionId'];

    if (action.action == 'purchase') {
      frameUrl += '&purchasePublicKey=' + _actions_config.purchasePublicKey;
    }

    var socialFrame = Actions.popupWindow(frameUrl, 'social_action', 200, 210);
    var checkPopupInterval = setInterval(function () {
      if (socialFrame == null || socialFrame.closed) {
        sp.send('actions.perform.complete', action);
        clearInterval(checkPopupInterval);
      }
    }, 200);

  };

  Actions.perform = function(action){

    if(sp.config().platform === 'mobile') {

      end_share(action);
      return;

    }

    sp.send('actions.perform.start', action);

    if (action.socialType && _actions_config.connectedAccounts) {
      if (!_actions_config.connectedAccounts[action.socialType]) {
        Actions.openSocialRegNeedPopup(action);
      } else {
        Actions.share(action);
      }
    }
    else if(!action.socialType){
      var frameUrl = sp.config().DOMAIN + '/popup/' + sp.config().partner.id + '/widgets/custom/' + action.type  + '/?auth_hash=' + sp.config().auth_hash;
      frameUrl += '&lang=' + sp.config().lang;
      frameUrl += '&from_sdk=0';
      var actionFrame = Actions.popupWindow(frameUrl, 'SailPlay', 600, 400);
      var checkPopupInterval = setInterval(function () {
        if (actionFrame == null || actionFrame.closed) {
          sp.send('actions.perform.complete', action);
          clearInterval(checkPopupInterval);
        }
      }, 200);
    }

  };

  sp.on('actions.perform', function (action, callback) {
    if(sp.config() == {}){
      return;
    }
    if (sp.config().auth_hash) {
      Actions.perform(action, callback);
    } else {
      sp.send('actions.perform.auth.error', action);
    }
  });

  function repair_pic_url(url){
    console.log(url);
    if(/^((http|https|ftp):\/\/)/.test(url)){
      return url;
    }
    if(url.indexOf('//') === 0){
      return window.location.protocol + url;
    }
    else {
      return sp.config().DOMAIN + url;
    }
  }

  function end_share(action){

    var handle_params = {
      partner_id: sp.config().partner.id,
      social_type: action.socialType,
      action: action.action,
      purchase_public_key: _actions_config.purchasePublicKey || '',
      badge_id: action.badgeId || '',
      auth_hash: sp.config().auth_hash,
      platform: sp.config().platform
    };

    sp.jsonp.get(sp.config().DOMAIN + sp.config().urls.actions.handle_social_action, handle_params,

      function(res){
        sp.send('actions.perform.success', { response: res, action: action });
      },
      function(res){
        sp.send('actions.perform.error', { error: res, action: action });
      })

  }


}());

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.7/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function oa(a){if(null==a||Wa(a))return!1;if(J(a)||F(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return S(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function r(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(J(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Zd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&H(n)?ia(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(H(a[m])||(a[m]=J(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Pb(a,ta.call(arguments,1),!1)}function $d(a){return Pb(a,ta.call(arguments,1),!0)}function aa(a){return parseInt(a,10)}function Rb(a,b){return R(Object.create(a),b)}function A(){}function Ya(a){return a}function da(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ka}function w(a){return"undefined"===typeof a}function x(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function F(a){return"string"===typeof a}function S(a){return"number"===typeof a}function ia(a){return"[object Date]"===ka.call(a)}function z(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ka.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function ae(a){return a&&S(a.length)&&
be.test(ka.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ce(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Z(a,b){function d(a,b){var d=b.$$hashKey,e;if(J(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=J(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ka.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if(ae(b)||"[object ArrayBuffer]"===ka.call(b))throw za("cpta");if(a===b)throw za("cpi");J(b)?b.length=0:r(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(J(a)){if(!J(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?na(a.getTime(),b.getTime()):
!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||J(b)||ia(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!z(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ta.call(b,d))}function bb(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,
0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function de(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&E.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return S(b)||(b=b?2:null),JSON.stringify(a,de,b)}function xc(a){return F(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(ee,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,b,d){d=d?
-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function va(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),
-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),x(e)&&(f=x(f)?zc(f):!0,sa.call(b,e)?J(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];r(a,function(a,c){J(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function fe(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,F(d=a.getAttribute(d)))return d;return null}function ge(a,b){var d,c,e={};r(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==fe(d,"strict-di"),b(d,c?[c]:[],e))}function Bc(a,
b,d){H(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===E.document?"document":va(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);
return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;E&&e.test(E.name)&&(d.debugInfoEnabled=!0,E.name=E.name.replace(e,""));if(E&&!f.test(E.name))return c();E.name=E.name.replace(f,"");ea.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};z(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function he(){E.name="NG_ENABLE_DEBUG_INFO!"+E.name;E.location.reload()}function ie(a){a=ea.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Cc(a,
b){b=b||"_";return a.replace(je,function(a,c){return(c?b:"")+a.toLowerCase()})}function ke(){var a;if(!Dc){var b=rb();(pa=w(b)?E.jQuery:b?E[b]:void 0)&&pa.fn.on?(B=pa,R(pa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Dc=!0}}function sb(a,b,d){if(!a)throw za("areq",
b||"?",d||"required");return a}function Qa(a,b,d){d&&J(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ta.call(a,0,e))),
c.push(b);return c||a}function T(){return Object.create(null)}function le(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return V}}function b(a,d){return function(b,e){e&&
z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return V}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],s=a("$injector","invoke","push",e),V={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){p.push(a);return this}};h&&s(h);return V})}})}function ga(a,b){if(J(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function me(a){R(a,{bootstrap:Bc,copy:Z,extend:R,merge:$d,equals:na,element:B,forEach:r,injector:db,noop:A,bind:bb,toJson:cb,fromJson:xc,identity:Ya,isUndefined:w,
isDefined:x,isString:F,isFunction:z,isObject:H,isNumber:S,isElement:Qb,isArray:J,version:ne,isDate:ia,lowercase:M,uppercase:ub,callbacks:{counter:0},getTestability:ie,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:he});Ub=le(E);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:oe});a.provider("$compile",Fc).directive({a:pe,input:Gc,textarea:Gc,form:qe,script:re,select:se,style:te,option:ue,ngBind:ve,ngBindHtml:we,ngBindTemplate:xe,ngClass:ye,ngClassEven:ze,ngClassOdd:Ae,ngCloak:Be,ngController:Ce,
ngForm:De,ngHide:Ee,ngIf:Fe,ngInclude:Ge,ngInit:He,ngNonBindable:Ie,ngPluralize:Je,ngRepeat:Ke,ngShow:Le,ngStyle:Me,ngSwitch:Ne,ngSwitchWhen:Oe,ngSwitchDefault:Pe,ngOptions:Qe,ngTransclude:Re,ngModel:Se,ngList:Te,ngChange:Ue,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ve,ngModelOptions:We}).directive({ngInclude:Xe}).directive(vb).directive(Lc);a.provider({$anchorScroll:Ye,$animate:Ze,$animateCss:$e,$$animateJs:af,$$animateQueue:bf,
$$AnimateRunner:cf,$$animateAsyncRun:df,$browser:ef,$cacheFactory:ff,$controller:gf,$document:hf,$exceptionHandler:jf,$filter:Mc,$$forceReflow:kf,$interpolate:lf,$interval:mf,$http:nf,$httpParamSerializer:of,$httpParamSerializerJQLike:pf,$httpBackend:qf,$xhrFactory:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function eb(a){return a.replace(Kf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=W(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new U(a)}if(b){b=E.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Rc(a,
b,d,c){if(x(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&$a(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};r(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Pf,d=gb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=x(d),e=!c&&b&&!H(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&r(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=J(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||E;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[ua(a)]&&d}function Rf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Sf;1<g&&(f=ga(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Zd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}r(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(H(b))r(b,uc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||J(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=I.invoke(b,this);if(w(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(w(a)||J(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):J(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);J(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=J(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;s[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=I.invoke(d,c);return I.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),s={},V=h(s,function(a,b){var c=p.get(a+"Provider",b);return I.invoke(c.$get,c,void 0,a)}),I=V;n.$injectorProvider={$get:da(V)};var q=g(a),I=V.get("$injector");I.strictDi=b;r(q,function(a){a&&I.invoke(a)});return I}function Ye(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):S(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;J(a)&&(a=a.join(" "));J(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){F(a)&&(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return H(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(V--,0===V)for(;I.length;)try{I.pop()()}catch(b){d.error(b)}}}function f(){y=null;g();h()}function g(){q=P();
q=w(q)?null:q;na(q,D)&&(q=D);D=q}function h(){if(v!==k.url()||K!==q)v=k.url(),K=q,r(L,function(a){a(k.url(),q)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,s={};k.isMock=!1;var V=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){V++};k.notifyWhenNoOutstandingRequests=function(a){0===V?a():I.push(a)};var q,K,v=l.href,u=b.find("base"),y=null,P=c.history?function(){try{return m.state}catch(a){}}:A;g();K=q;k.url=function(b,d,e){w(e)&&(e=null);l!==
a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;K=e;!c.history||h&&f?(h||(y=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=q);y&&(y=b);return k}return y||l.href.replace(/%27/g,"'")};k.state=function(){return q};var L=[],C=!1,D=null;k.onUrlChange=function(b){if(!C){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
f);C=!0}L.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=u.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;V++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(A),!0):!1}}function ef(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,d)}]}function ff(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Fc(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();r(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!J(b)&&H(b)&&r(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=ce("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function I(b,d){Ra(b,"directive");F(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:da(h)}:
!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):r(b,uc(I));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||J(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return x(a)?(p=a,this):p};var s=10;this.onChangesTtl=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,y,P,L,C,D){function G(){try{if(!--oa)throw Z=void 0,fa("infchng",s);P.$apply(function(){for(var a=
[],b=0,c=Z.length;b<c;++b)try{Z[b]()}catch(d){a.push(d)}Z=void 0;if(a.length)throw a;})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&Pc(k,a[g]=E.document.createElement("span"))}var l=t(a,b,a,c,d,e);ba.$$addScopeClass(a);var n=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);n||(n=(d=d&&d[0])?"foreignobject"!==ua(d)&&ka.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==n?B(ca(n,B("<div>").append(a).html())):
c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function t(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,m,v,q;if(p)for(q=Array(c.length),n=0;n<h.length;n+=3)f=h[n],q[f]=c[f];else q=c;n=0;for(m=h.length;n<m;)k=q[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,v=c.transcludeOnThisElement?wa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?wa(a,b):null,c(f,l,k,d,v)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,n,m,p,v=0;v<a.length;v++){k=new Aa;l=$b(a[v],[],k,0===v?d:void 0,e);(f=l.length?Ta(l,a[v],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:t(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(v,f,k),m=!0,p=p||f;f=null}return m?g:null}function wa(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?wa(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,xa(ua(a)),"E",d,e);for(var l,n,m,p=a.attributes,v=0,q=p&&p.length;v<q;v++){var s=!1,L=!1;l=p[v];k=l.name;n=W(l.value);l=xa(k);if(m=ya.test(l))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&S(l[1])&&(s=k,L=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));l=xa(k.toLowerCase());f[l]=k;if(m||!c.hasOwnProperty(l))c[l]=n,Uc(a,l)&&(c[l]=!0);ia(a,b,n,l,m);Da(b,l,"A",d,e,s,L)}a=a.className;H(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=h.exec(a);)l=xa(k[2]),Da(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);aa(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=
xa(k[1]),Da(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(C){}}b.sort(Y);return b}function Zc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function O(a,b,c){return function(d,e,f,g,h){e=Zc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,
arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function n(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=u.require;a.directiveName=G;if(s===u||u.$$isolateScope)a=ga(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=u.require;b.directiveName=G;if(s===u||u.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function m(a,e,f,g,l){function n(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);y&&(e=N);c||(c=y?G.parent():G);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,t);if(w(f))throw fa("noslot",d,va(G));
}else return l(a,b,e,c,t)}var p,C,u,D,I,N,Q,G;b===f?(g=d,G=d.$$element):(G=B(f),g=new Aa(G,d));I=e;s?D=e.$new(!0):v&&(I=e.$parent);l&&(Q=n,Q.$$boundTransclude=l,Q.isSlotFilled=function(a){return!!l.$$slots[a]});q&&(N=ag(G,g,Q,q,D,e,s));s&&(ba.$$addScopeInfo(G,D,!0,!(L&&(L===s||L===s.$$originalDirective))),ba.$$addScopeClass(G,!0),D.$$isolateBindings=s.$$isolateBindings,C=ha(e,g,D,D.$$isolateBindings,s),C.removeWatches&&D.$on("$destroy",C.removeWatches));for(p in N){C=q[p];u=N[p];var Zb=C.$$bindings.bindToController;
u.bindingInfo=u.identifier&&Zb?ha(I,g,u.instance,Zb,C):{};var P=u();P!==u.instance&&(u.instance=P,G.data("$"+C.name+"Controller",P),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=ha(I,g,u.instance,Zb,C))}r(q,function(a,b){var c=a.require;a.bindToController&&!J(c)&&H(c)&&R(N[b].instance,ib(b,c,G,N))});r(N,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$onDestroy)&&
I.$on("$destroy",function(){b.$onDestroy()})});p=0;for(C=h.length;p<C;p++)u=h[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);var t=e;s&&(s.template||null===s.templateUrl)&&(t=D);a&&a(t,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);r(N,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,v=l.newScopeDirective,q=l.controllerDirectives,s=l.newIsolateScopeDirective,
L=l.templateDirective,C=l.nonTlbTranscludeDirective,D=!1,I=!1,y=l.hasElementTranscludeDirective,N=d.$$element=B(b),u,G,Q,P=e,t,Ca=!1,wa=!1,x,A=0,E=a.length;A<E;A++){u=a[A];var F=u.$$start,Ta=u.$$end;F&&(N=Zc(b,F,Ta));Q=void 0;if(p>u.priority)break;if(x=u.scope)u.templateUrl||(H(x)?(X("new/isolated scope",s||v,u,N),s=u):X("new/isolated scope",s,u,N)),v=v||u;G=u.name;if(!Ca&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(x=A+1;Ca=a[x++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&
(Ca.templateUrl||Ca.template)){wa=!0;break}Ca=!0}!u.templateUrl&&u.controller&&(x=u.controller,q=q||T(),X("'"+G+"' controller",q[G],u,N),q[G]=u);if(x=u.transclude)if(D=!0,u.$$tlb||(X("transclusion",C,u,N),C=u),"element"==x)y=!0,p=u.priority,Q=N,N=d.$$element=B(ba.$$createComment(G,d[G])),b=N[0],da(f,ta.call(Q,0),b),Q[0].$$parentNode=Q[0].parentNode,P=ac(wa,Q,e,p,g&&g.name,{nonTlbTranscludeDirective:C});else{var M=T();Q=B(Xb(b)).contents();if(H(x)){Q=[];var S=T(),Da=T();r(x,function(a,b){var c="?"===
a.charAt(0);a=c?a.substring(1):a;S[a]=b;M[b]=null;Da[b]=c});r(N.contents(),function(a){var b=S[xa(ua(a))];b?(Da[b]=!0,M[b]=M[b]||[],M[b].push(a)):Q.push(a)});r(Da,function(a,b){if(!a)throw fa("reqslot",b);});for(var Y in M)M[Y]&&(M[Y]=ac(wa,M[Y],e))}N.empty();P=ac(wa,Q,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});P.$$slots=M}if(u.template)if(I=!0,X("template",L,u,N),L=u,x=z(u.template)?u.template(N,d):u.template,x=ra(x),u.replace){g=u;Q=Vb.test(x)?$c(ca(u.templateNamespace,W(x))):
[];b=Q[0];if(1!=Q.length||1!==b.nodeType)throw fa("tplrt",G,"");da(f,N,b);E={$attr:{}};x=$b(b,[],E);var aa=a.splice(A+1,a.length-(A+1));(s||v)&&ad(x,s,v);a=a.concat(x).concat(aa);U(d,E);E=a.length}else N.html(x);if(u.templateUrl)I=!0,X("template",L,u,N),L=u,u.replace&&(g=u),m=$(a.splice(A,a.length-A),N,d,f,D&&P,h,k,{controllerDirectives:q,newScopeDirective:v!==u&&v,newIsolateScopeDirective:s,templateDirective:L,nonTlbTranscludeDirective:C}),E=a.length;else if(u.compile)try{t=u.compile(N,d,P);var Z=
u.$$originalDirective||u;z(t)?n(null,bb(Z,t),F,Ta):t&&n(bb(Z,t.pre),bb(Z,t.post),F,Ta)}catch(ea){c(ea,va(N))}u.terminal&&(m.terminal=!0,p=Math.max(p,u.priority))}m.scope=v&&!0===v.scope;m.transcludeOnThisElement=D;m.templateOnThisElement=I;m.transclude=P;l.hasElementTranscludeDirective=y;return m}function ib(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):
c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else H(b)&&(e={},r(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],n={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);n=y(m,n,!0,l.controllerAs);h[l.name]=n;a.data("$"+l.name+"Controller",n.instance)}return h}function ad(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],
{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,n){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var m;e=a.get(e+"Directive");for(var p=0,v=e.length;p<v;p++)try{if(m=e[p],(w(h)||h>m.priority)&&-1!=m.restrict.indexOf(g)){l&&(m=Rb(m,{$$start:l,$$end:n}));if(!m.$$bindings){var q=m,s=m,L=m.name,u={isolateScope:null,bindToController:null};H(s.scope)&&(!0===s.bindToController?(u.bindToController=d(s.scope,L,!0),u.isolateScope={}):u.isolateScope=d(s.scope,L,!1));H(s.bindToController)&&(u.bindToController=
d(s.bindToController,L,!0));if(H(u.bindToController)){var C=s.controller,D=s.controllerAs;if(!C)throw fa("noctrl",L);if(!Xc(C,D))throw fa("noident",L);}var N=q.$$bindings=u;H(N.isolateScope)&&(m.$$isolateBindings=N.isolateScope)}b.push(m);k=m}}catch(G){c(G)}}return k}function S(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===
e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function $(a,b,c,d,f,g,h,k){var l=[],n,m,p=b[0],s=a.shift(),q=Rb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),L=z(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,u=s.templateNamespace;b.empty();e(L).then(function(e){var v,C;e=ra(e);if(s.replace){e=Vb.test(e)?$c(ca(u,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw fa("tplrt",
s.name,L);e={$attr:{}};da(d,b,v);var D=$b(v,[],e);H(s.scope)&&ad(D,!0);a=D.concat(a);U(c,e)}else v=p,b.html(e);a.unshift(q);n=Ta(a,v,c,f,b,s,g,h,k);r(d,function(a,c){a==v&&(d[c]=b[0])});for(m=t(b[0].childNodes,f);l.length;){e=l.shift();C=l.shift();var I=l.shift(),G=l.shift(),D=b[0];if(!e.$$destroyed){if(C!==p){var y=C.className;k.hasElementTranscludeDirective&&s.replace||(D=Xb(v));da(I,B(C),D);N(B(D),y)}C=n.transcludeOnThisElement?wa(e,n.transclude,G):G;n(m,e,D,d,C)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=wa(b,n.transclude,e)),n(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function aa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=E.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function ia(a,
c,d,e,f){var g=ea(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ua(a))throw fa("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=T());if(m.test(e))throw fa("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=E.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ga(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function ha(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(G),Z=[]),m||(m={},Z.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,p=e.optional,v,s,L,C;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;v=c[m];F(v)?d[h]=
b(v)(a):Ea(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;s=n(c[m]);C=s.literal?na:function(a,b){return a===b||a!==a&&b!==b};L=s.assign||function(){v=d[h]=s(a);throw fa("nonassign",c[m],m,f.name);};v=d[h]=s(a);p=function(b){C(b,d[h])||(C(b,v)?L(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,s.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
s=n(c[m]);var D=d[h]=s(a);l[h]=new Fb(bc,d[h]);p=a.$watch(s,function(a,b){if(b===a){if(b===D)return;b=D}g(h,a,b);d[h]=a},s.literal);k.push(p);break;case "&":s=c.hasOwnProperty(m)?n(c[m]):A;if(s===A&&p)break;d[h]=function(b){return s(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=E.document.createElement("div"),oa=s,Z;Aa.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=cd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=ua(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===
f&&"srcset"===a&&x(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var n=2*l,f=f+D(W(g[n]),!0),f=f+(" "+W(g[n+1]));g=W(g[2*l]).split(/\s/);f+=D(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);P.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},ya=/^ngAttr[A-Z]/,za=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;ba.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
A;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;ba.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:A;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return E.document.createComment(c)};return ba}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return eb(a.replace(Yc,""))}function bd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&F(b))return b;if(F(a)){var d=dd.exec(a);if(d)return d[3]}}function gf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");H(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!H(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(dd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(J(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),R(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function hf(){this.$get=["$window",function(a){return B(a.document)}]}function jf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return H(a)?ia(a)?a.toISOString():cb(a):a}function of(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||w(a)||(J(a)?r(a,function(a){b.push(ja(c)+"="+ja(cc(a)))}):b.push(ja(c)+"="+ja(cc(a))))});return b.join("&")}}}function pf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||w(a)||(J(a)?r(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!ia(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(F(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ed))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function fd(a){var b=T(),d;F(a)?r(a.split("\n"),function(a){d=
a.indexOf(":");var e=M(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&r(a,function(a,d){var f=M(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function gd(a){var b;return function(d){b||(b=fd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function hd(a,b,d,c){if(z(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function nf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return H(a)&&"[object File]"!==ka.call(a)&&"[object Blob]"!==
ka.call(a)&&"[object FormData]"!==ka.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(ec),put:ga(ec),patch:ga(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=R({},a);b.data=hd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};r(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!H(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ga(b))}(b);f.method=ub(f.method);f.paramSerializer=F(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=hd(b.data,gd(d),void 0,b.transformRequest);w(e)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(r(V,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=id("success"),h.error=id("error"));return h}function n(c,d){function g(a){if(a){var c=
{};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}D&&(200<=a&&300>a?D.put(Q,[a,c,fd(d),e]):D.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:gd(d),config:c,statusText:e})}function y(a){n(a.data,a.status,ga(a.headers()),a.statusText)}function V(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var L=k.defer(),C=L.promise,D,G,Aa=c.headers,Q=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(V,V);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=H(c.cache)?c.cache:H(a.cache)?a.cache:s);D&&(G=D.get(Q),x(G)?G&&z(G.then)?G.then(y,y):J(G)?n(G[1],G[0],ga(G[2]),G[3]):n(G,200,{},"OK"):D.put(Q,C));w(G)&&((G=jd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=G),e(c.method,Q,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return C}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var V=[];r(c,function(a){V.unshift(F(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){r(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){m[a]=function(b,
c,d){return m(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function rf(){this.$get=function(){return function(){return new E.XMLHttpRequest}}}function qf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b.angular.callbacks,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,s,V,I){function q(){u&&u();y&&y.abort()}function K(b,c,e,f,g){x(L)&&d.cancel(L);u=y=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var v="_"+(c.counter++).toString(36);
c[v]=function(a){c[v].data=a;c[v].called=!0};var u=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){K(l,a,c[v].data,"",b);c[v]=A})}else{var y=b(e,h);y.open(e,h,!0);r(m,function(a,b){x(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"==qa(h).protocol?404:0);K(l,c,b,y.getAllResponseHeaders(),a)};e=function(){K(l,-1,null,null,"")};y.onerror=e;y.onabort=e;r(V,function(a,
b){y.addEventListener(b,a)});r(I,function(a,b){y.upload.addEventListener(b,a)});p&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(P){if("json"!==s)throw P;}y.send(w(k)?null:k)}if(0<n)var L=d(q,n);else n&&z(n.then)&&n.then(q)}}function lf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function r(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=da(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}p=!!p;var u,y,P=0,L=[],C=[];v=f.length;for(var D=[],G=[];P<
v;)if(-1!=(u=f.indexOf(a,P))&&-1!=(y=f.indexOf(b,u+l)))P!==u&&D.push(g(f.substring(P,u))),P=f.substring(u+l,y),L.push(P),C.push(d(P,r)),P=y+m,G.push(D.length),D.push("");else{P!==v&&D.push(g(f.substring(P)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!k||L.length){var Aa=function(a){for(var b=0,c=L.length;b<c;b++){if(p&&w(a[b]))return;D[G[b]]=a[b]}return D.join("")};return R(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=C[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:L,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(C,function(d,e){var f=Aa(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function mf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,s):f(q)}var p=4<arguments.length,s=p?ta.call(arguments,4):
[],r=b.setInterval,I=b.clearInterval,q=0,K=x(m)&&!m,v=(K?c:d).defer(),u=v.promise;l=x(l)?l:0;u.$$intervalId=r(function(){K?e.defer(n):a.$evalAsync(n);v.notify(q++);0<l&&q>=l&&(v.resolve(q),I(u.$$intervalId),delete g[u.$$intervalId]);K||a.$apply()},k);g[u.$$intervalId]=v;return u}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function kd(a,b){var d=qa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=aa(d.port)||hg[d.protocol]||null}function ld(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=qa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";kd(a,this);this.$$parse=function(a){var d=la(b,a);if(!F(d))throw Gb("ipthprfx",a,b);ld(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;x(f=la(a,c))?(g=f,g=x(f=la(d,f))?b+(la("/",f)||f):a+g):x(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){kd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=la(d,e),w(f)&&(f=e));ld(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function md(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function nd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):H(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:md}else p=Ja(n),m=hc;var s=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var r=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
qa(h.animVal).href);r.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var I=!0;c.onUrlChange(function(a,b){w(la(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(I=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,n=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(I||n)I=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(n&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ca("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function od(a,
b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===jg||a===kg||a===lg)throw ca("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function pd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function $(a,b){var d,c;switch(a.type){case t.Program:d=!0;r(a.body,function(a){$(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:$(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:$(a.test,
b);$(a.alternate,b);$(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:$(a.object,b);a.computed&&$(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];r(a.arguments,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case t.AssignmentExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];r(a.elements,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];r(a.properties,function(a){$(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function qd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function rd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function sd(a){if(1===a.body.length&&rd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function td(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function ud(a,b){this.astBuilder=a;this.$filter=b}function vd(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,C;e=e||K;switch(typeof c){case "string":C=c=c.trim();var D=e?b:a;g=D[C];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?q:I;var G=new jc(g);g=(new kc(G,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));D[C]=g}return s(g,d);case "function":return s(c,d);default:return s(A,d)}}function h(a){function b(c,d,e,f){var g=
K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],n=[],m=0,p=f.length;m<p;m++)l[m]=k,n[m]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))n[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,n));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;r(a,function(a){x(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var V=Fa().noUnsafeEval,I={csp:V,expensiveChecks:!1,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},q={csp:V,expensiveChecks:!0,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function wf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return wd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return wd(function(b){a.defer(b)},b)}]}function wd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(H(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return h(e,!1)}return d&&z(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=J(a)?[]:{};r(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function I(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=h.defer(function(){K.$apply(I)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:t,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(H(e))if(oa(e))for(f!==n&&(f=n,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},q=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)sa.call(e,b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,q=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(H(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,s,q,r=b,y,x=[],w,A;n("$digest");h.$$checkUrlChange();this===K&&null!==e&&(h.defer.cancel(e),I());c=null;do{q=!1;y=this;for(p=0;p<v.length;p++){try{A=v[p],A.scope.$eval(A.expression,A.locals)}catch(E){f(E)}c=null}v.length=0;a:do{if(p=y.$$watchers)for(s=p.length;s--;)try{if(a=p[s])if(m=a.get,(g=m(y))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?Z(g,null):g,l=a.fn,l(g,k===t?g:k,y),5>r&&(w=4-r,x[w]||(x[w]=[]),x[w].push({msg:z(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(B){f(B)}if(!(p=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(p=y.$$nextSibling);)y=y.$parent}while(y=p);if((q||v.length)&&!r--)throw K.$$phase=null,d("infdig",b,x);}while(q||v.length);for(K.$$phase=null;P<u.length;)try{u[P++]()}catch(F){f(F)}u.length=P=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
K&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=
function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||v.length||h.defer(function(){v.length&&K.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){f(b)}finally{try{K.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);
a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var K=new m,v=K.$$asyncQueue=[],u=K.$$postDigestQueue=[],y=K.$$applyAsyncQueue=[],P=0;return K}]}function oe(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=qa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=xd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ya("imatcher");}function yd(a){var b=[];x(a)&&r(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=yd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=yd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?jd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||w(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
qa(e.toString()),n,p,s=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){s=!1;break}if(s)return e;throw ya("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ya("iequirks");var c=ga(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(ma,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=aa((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=F(l.webkitTransition),n=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!F(g)||w(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;J(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var c=ea.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+xd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=ta.call(arguments,3),n=x(l)&&!l,p=(n?c:d).defer(),s=p.promise,r;r=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=r;g[r]=p;return s}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function qa(a){Ba&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function jd(a){a=F(a)?qa(a):a;return a.protocol===zd.protocol&&a.host===zd.host}function Ff(){this.$get=da(E)}function Ad(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Jf(){this.$get=Ad}function Mc(a){function b(d,c){if(H(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Bd);b("date",Cd);
b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Dd);b("orderBy",Ed);b("uppercase",ug)}function qg(){return function(a,b,d){if(!oa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=vg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=na:z(b)||(b=function(a,b){if(w(a))return!1;if(null===
a||null===b)return a===b;if(H(b)||H(a)&&!vc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(J(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!w(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Fd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Dd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Fd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Gd))&&(a=a.replace(Gd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Hd&&(d=d.splice(0,Hd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Fd(a,b,d,c,e){if(!F(a)&&!S(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function X(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Id(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Jd(a){return function(b){var d=Id(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Cd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=yg.test(c)?aa(c):b(c));S(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=zg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));r(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function sg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):aa(b);if(isNaN(b))return a;S(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:aa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return F(a)?a.slice(b,d):ta.call(a,b,d)}function Ed(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(z(b))d=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(H(k)&&(k=a.index),H(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!oa(a))throw O("orderBy")("notarray",a);J(f)||(f=[f]);0===f.length&&
(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ma(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Kd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Lb};Ld({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?
-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);c.addClass(a,Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");
f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",
l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Md[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ia(d))return d;if(F(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return x(a)&&!ia(a)?d(a)||void 0:a}Nd(e,f,g,h);lb(e,f,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),s&&(a=Sb(a,s)),a});h.$formatters.push(function(a){if(a&&!ia(a))throw nb("datefmt",a);if(n(a))return(r=a)&&
s&&(r=Sb(r,s,!0)),m("date")(a,c,s);r=null;return""});if(x(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!n(a)||w(t)||d(a)>=t};g.$observe("min",function(a){t=p(a);h.$validate()})}if(x(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||w(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Nd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Od(a,
b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(r(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):H(a)?(r(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}
function l(a,b){var c=g.data("$classCounts")||T(),d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=J(a)?a.map(function(a){return ga(a)}):ga(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});
"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Ld(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Pd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Pd]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){w(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Qd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Rd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Rd,!1),c.$valid=Qd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Qd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=
/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,M=function(a){return F(a)?a.toLowerCase():a},ub=function(a){return F(a)?a.toUpperCase():a},Ba,B,pa,ta=[].slice,bg=[].splice,Dg=[].push,ka=Object.prototype.toString,wc=Object.getPrototypeOf,za=O("ng"),ea=E.angular||(E.angular={}),Ub,pb=0;Ba=E.document.documentMode;A.$inject=[];Ya.$inject=[];var J=Array.isArray,be=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return F(a)?a.trim():a},xd=
function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var a=E.document.querySelector("[ng-csp]")||E.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},
rb=function(){if(x(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=E.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},ee=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],je=/[A-Z]/g,Dc=!1,Na=3,ne={full:"1.5.7",major:1,minor:5,dot:7,codeName:"hexagonal-circumvolution"};U.expando="ng339";var gb=U.cache={},Pf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",
mouseenter:"mouseover"},Wb=O("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;
ha.th=ha.td;var Uf=E.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===E.document.readyState?E.setTimeout(b):(this.on("DOMContentLoaded",b),U(E).on("load",b))},toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Eb[M(a)]=a});var Vc={};r("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var cd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Yb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){U[b]=a});r({data:Yb,inheritedData:Cb,scope:function(a){return B.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope",
"$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=M(b),Eb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?
c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;
wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&w(2==a.length&&a!==zb&&a!==Sc?b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:fb,on:function(a,b,d,c){if(x(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=
Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];
r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,B(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=
0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;w(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=
!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=R(c,b)),b=ga(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):
Qc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Sa.prototype={put:function(a,b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Sa}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=
function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);b=Wc(a);r(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else J(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Sd=O("$animate"),af=function(){this.$get=A},bf=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):J(b)?
b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,
k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ze=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Sd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Sd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);
f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?
R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],df=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},cf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=
[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,
c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=
this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},$e=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}
var g=e||{};g.$$prepared||(g=Z(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=O("$compile"),bc=new function(){};Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=O("$controller"),dd=/^(\S+)(\s+as\s+([\w$]+))?$/,kf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;
return b.offsetWidth+1}}]},ed="application/json",ec={"Content-Type":ed+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=O("$http"),id=function(a){return function(){throw Gg("legacy",a);}},Ka=ea.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=O("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,
absUrl:Hb("$$absUrl"),url:function(a){if(w(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:nd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||S(a))a=a.toString(),this.$$search=Ac(a);else if(H(a))a=
Z(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:nd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([md,hc,gc],function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=w(b)?null:
b;return this}});var ca=O("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=
a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=
a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression="ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal=
"Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&
(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=",
"===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*",
"/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Z(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?
a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,
property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},
constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):
this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));
},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=
this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};$(c,d.$filter);var e="",f;this.stage="assign";if(f=sd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign",
"s,v,l");f=qd(c.body);d.stage="inputs";r(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,ra,od,ig,Ib,mg,pd,a);this.state=this.stage=void 0;e.literal=td(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case t.Program:r(a.body,
function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?
this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=
d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,
a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=
k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);r(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g=
{};if(!rd(a.left))throw ca("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];r(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=
[];n=!1;r(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));
return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?
a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),
";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,
b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
vd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;$(c,d.$filter);var e,f;if(e=sd(c))f=this.recurse(e);e=qd(c.body);var g;e&&(g=[],r(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];r(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;r(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=
td(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,b);case t.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case t.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),
this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case t.CallExpression:return g=[],r(a.arguments,
function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);od(n.value,f.expression);p=[];for(var s=0;s<g.length;++s)p.push(ra(g[s](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?
{value:p}:p};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),
computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},
"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=pd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(x(h)?h:0)-(x(c)?c:0);return d?
{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:
c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,
b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||
Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new vd(this.ast,b):new ud(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,ya=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},
pg=O("$compile"),Y=E.document.createElement("a"),zd=qa(E.location.href);Ad.$inject=["$document"];Mc.$inject=["$provide"];var Hd=22,Gd=".",mc="0";Bd.$inject=["$locale"];Dd.$inject=["$locale"];var Ag={yyyy:X("FullYear",4,0,!1,!0),yy:X("FullYear",2,0,!0,!0),y:X("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),LLLL:kb("Month",!1,!0),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",
1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Jd(2),w:Jd(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Cd.$inject=["$locale"];
var tg=da(M),ug=da(ub);Ed.$inject=["$parse"];var pe=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ka.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,
e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(cd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=xa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ka.call(c.prop("href"))&&
(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};Kd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Td=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?
"EAC":"E",require:["form","^^?form"],controller:Kd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):A;g&&(s(a,n),e.$observe(g,
function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Lb)})}}}}}]},qe=Td(),De=Td(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Ud=/^(\d{4,})-(\d{2})-(\d{2})$/,Vd=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Wd=/^(\d{4,})-(\d\d)$/,Xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md=T();r(["date","datetime-local","month","time","week"],function(a){Md[a]=!0});var Yd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Ud,Nb(Ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Vd,Nb(Vd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Xd,Nb(Xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(ia(a))return a;if(F(a)){rc.lastIndex=0;var d=rc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Id(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Wd,Nb(Wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Nd(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName=
"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!S(a))throw nb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g};d.$observe("min",function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));g=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h};d.$observe("max",
function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));h=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){w(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Od(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Od(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,
file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Yd[M(g.type)]||Yd.text)(e,f,g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ve=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ve=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=w(a)?"":a})}}}}],xe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],we=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Ue=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ye=qc("",!0),Ae=qc("Odd",0),ze=qc("Even",1),Be=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ce=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Lc={},Og={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Fe=["$animate","$compile",function(a,
b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ge=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var s=0,r,t,q,w=function(){t&&(t.remove(),t=null);r&&(r.$destroy(),r=null);q&&(d.leave(q).then(function(){t=null}),t=q,q=null)};c.$watch(f,function(f){var m=function(){!x(h)||h&&!c.$eval(h)||b()},t=++s;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===s){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).then(m)});r=b;q=a;r.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||t!==s||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],Xe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ka.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,E.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],He=Ma({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),Te=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(J(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Pd="ng-invalid",Va="ng-pristine",Mb="ng-dirty",Rd="ng-pending",nb=O("ngModel"),Pg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,s=n,t=null,I,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,va(c));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){q.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var K=0;Ld({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Va)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Mb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!S(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(e){d||b===e||(q.$modelValue=e?a:void 0,q.$modelValue!==c&&q.$$writeModelToScope())})}};
this.$$runValidators=function(a,b,c){function d(){var c=!0;r(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(r(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===K&&q.$setValidity(a,b)}function g(a){h===K&&c(a)}K++;var h=
K;(function(){var a=q.$$parserName||"parse";if(w(I))f(a,null);else return I||(r(q.$validators,function(a,b){f(b,null)}),r(q.$asyncValidators,function(a,b){f(b,null)})),f(a,I),I;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$updateEmptyClasses(a),q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;
if(I=w(b)?void 0:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),w(b)){I=!1;break}S(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=p(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:void 0,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);r(q.$viewChangeListeners,
function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&x(d.debounce)&&(d=d.debounce,S(d)?c=d:S(d[b])?c=d[b]:S(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==q.$modelValue&&(q.$modelValue===
q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;I=void 0;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$$updateEmptyClasses(e),q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,A))}return b})}],Se=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,We=function(){return{restrict:"A",
controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Z(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ie=Ma({terminal:!0,priority:1E3}),Rg=O("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Qe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,va(b));var p=n[5]||n[7],r=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:p);var x=a&&d(a)||b,q=t&&d(t),w=t?function(a,b){return q(c,b)}:function(a){return Ga(a)},
v=function(a,b){return w(a,D(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),A=d(n[4]||""),z=d(n[8]),C={},D=r?function(a,b){C[r]=b;C[p]=a;return C}:function(a){C[p]=a;return C};return{trackBy:t,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=D(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=u(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=D(d[p],p),r=x(c,q),p=w(r,q),s=u(c,q),C=y(c,q),q=A(c,q),r=new e(p,r,s,C,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return t?ea.copy(a.viewValue):a.viewValue}}}}}var e=E.document.createElement("option"),f=E.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=
b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=y&&p.readValue();if(y)for(var b=y.items.length-1;0<=b;b--){var c=y.items[b];c.group?Db(c.element.parentNode):Db(c.element)}y=z.getOptions();var d={};v&&h.prepend(w);y.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
m(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=p.readValue(),(z.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=l[0],s=l[1],t=k.multiple,w;l=0;for(var q=h.children(),A=q.length;l<A;l++)if(""===q[l].value){w=q.eq(l);break}var v=!!w,u=B(e.cloneNode(!1));u.val("?");var y,z=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();t?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){y.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
y.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];r(a,function(a){(a=y.selectValueMap[a])&&!a.disabled&&b.push(y.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(J(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=y.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(u.remove(),v||w.remove(),h[0].value=b.selectValue,b.element.selected=
!0),b.element.setAttribute("selected","selected")):null===a||v?(u.remove(),v||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(v||w.remove(),h.prepend(u),h.val("?"),u.prop("selected",!0),u.attr("selected",!0))},p.readValue=function(){var a=y.selectValueMap[h.val()];return a&&!a.disabled?(v||w.remove(),u.remove(),y.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
w=B(e.cloneNode(!1));h.empty();n();d.$watchCollection(z.getWatchables,n)}}}}],Je=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},t=b.startSymbol(),x=b.endSymbol(),q=t+l+"-"+n+x,z=ea.noop,v;r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),p[c]=g.attr(h.$attr[b]))});r(p,function(a,d){s[d]=b(a.replace(c,q))});f.$watch(l,
function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&S(v)&&isNaN(v)||(z(),e=s[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Ke=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",
p);var q,x,v,u,y={$id:Ga};s?q=a(s):(v=function(a,b){return Ga(b)},u=function(a){return a});return function(a,d,f,g,l){q&&(x=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=d;return q(a,y)});var m=T();a.$watchCollection(n,function(f){var g,n,q=d[0],s,y=T(),z,A,E,C,D,B,F;p&&(a[p]=f);if(oa(f))D=f,n=x||v;else for(F in n=x||u,D=[],f)sa.call(f,F)&&"$"!==F.charAt(0)&&D.push(F);z=D.length;F=Array(z);for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],C=n(A,E,g),m[C])B=m[C],delete m[C],y[C]=B,F[g]=B;else{if(y[C])throw r(F,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,E);F[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(s in m){B=m[s];C=tb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],B=F[g],B.scope){s=q;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(tb(B.clone),null,q);q=B.clone[B.clone.length-1];e(B.scope,g,t,E,w,A,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,q);q=d;B.clone=a;y[B.id]=B;e(B.scope,g,t,E,w,A,z)});m=y})}}}}],Le=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Me=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ne=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var t=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Pe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Tg=O("ngTransclude"),Re=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Tg("orphan",va(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),re=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},
Vg=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Ug;d.unknownOption=B(E.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],se=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);r(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ga(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},ue=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],te=da({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,va(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
aa(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=aa(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};E.angular.bootstrap?E.console&&console.log("WARNING: Tried to load angular more than once."):(ke(),me(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(E.document).ready(function(){ge(E.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

angular.module("ivpusic.cookie",["ipCookie"]),angular.module("ipCookie",["ng"]).factory("ipCookie",["$document",function(e){"use strict";function i(e){try{return decodeURIComponent(e)}catch(i){}}return function(){function t(t,n,r){var o,s,p,u,a,c,d,x,f;r=r||{};var g=r.decode||i,l=r.encode||encodeURIComponent;if(void 0!==n)return n="object"==typeof n?JSON.stringify(n):n+"","number"==typeof r.expires&&(f=r.expires,r.expires=new Date,-1===f?r.expires=new Date("Thu, 01 Jan 1970 00:00:00 GMT"):void 0!==r.expirationUnit?"hours"===r.expirationUnit?r.expires.setHours(r.expires.getHours()+f):"minutes"===r.expirationUnit?r.expires.setMinutes(r.expires.getMinutes()+f):"seconds"===r.expirationUnit?r.expires.setSeconds(r.expires.getSeconds()+f):"milliseconds"===r.expirationUnit?r.expires.setMilliseconds(r.expires.getMilliseconds()+f):r.expires.setDate(r.expires.getDate()+f):r.expires.setDate(r.expires.getDate()+f)),e[0].cookie=[l(t),"=",l(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("");for(s=[],x=e[0].cookie,x&&(s=x.split("; ")),o={},d=!1,p=0;s.length>p;++p)if(s[p]){if(u=s[p],a=u.indexOf("="),c=u.substring(0,a),n=g(u.substring(a+1)),angular.isUndefined(n))continue;if(void 0===t||t===c){try{o[c]=JSON.parse(n)}catch(m){o[c]=n}if(t===c)return o[c];d=!0}}return d&&void 0===t?o:void 0}return t.remove=function(e,i){var n=void 0!==t(e);return n&&(i||(i={}),i.expires=-1,t(e,"",i)),n},t}()}]);
/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function() {

    /**
     * Config
     */
    var moduleName = 'angularUtils.directives.dirPagination';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    angular.module(moduleName, [])
        .directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective])
        .directive('dirPaginateNoCompile', noCompileDirective)
        .directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective])
        .filter('itemsPerPage', ['paginationService', itemsPerPageFilter])
        .service('paginationService', paginationService)
        .provider('paginationTemplate', paginationTemplateProvider)
        .run(['$templateCache',dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return  {
            terminal: true,
            multiElement: true,
            priority: 100,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs){

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngRepeat.js#L339
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs){

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;
                
                // (TODO: this seems sound, but I'm reverting as many bug reports followed it's introduction in 0.11.0.
                // Needs more investigation.)
                // In case rawId != paginationId we deregister using rawId for the sake of general cleanliness
                // before registering using paginationId
                // paginationService.deregisterInstance(rawId);
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled =  $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function() {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    paginationService.setAsyncModeFalse(paginationId);
                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            var collectionLength = (collection instanceof Array) ? collection.length : Object.keys(collection).length;
                            paginationService.setCollectionLength(paginationId, collectionLength);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);
                 
                // (TODO: Reverting this due to many bug reports in v 0.11.0. Needs investigation as the
                // principle is sound)
                // When the scope is destroyed, we make sure to remove the reference to it in paginationService
                // so that it can be properly garbage collected
                // scope.$on('$destroy', function destroyDirPagination() {
                //     paginationService.deregisterInstance(paginationId);
                // });
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // If the current-page attribute was not set, we'll make our own.
                // Replace any non-alphanumeric characters which might confuse
                // the $parse service and give unexpected results.
                // See https://github.com/michaelbromley/angularUtils/issues/233
                var defaultCurrentPage = (paginationId + '__currentPage').replace(/\W/g, '_');
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        var DDO = {
            restrict: 'AE',
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?',
                autoHide: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        // We need to check the paginationTemplate service to see whether a template path or
        // string has been specified, and add the `template` or `templateUrl` property to
        // the DDO as appropriate. The order of priority to decide which template to use is
        // (highest priority first):
        // 1. paginationTemplate.getString()
        // 2. attrs.templateUrl
        // 3. paginationTemplate.getPath()
        var templateString = paginationTemplate.getString();
        if (templateString !== undefined) {
            DDO.template = templateString;
        } else {
            DDO.templateUrl = function(elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            };
        }
        return DDO;

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId ||  DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId ||  DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = (paginationId !== DEFAULT_ID) ? ' (id: ' + paginationId + ') ' : ' ';
                if (window.console) {
                    console.warn('Pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive, which was not found at link time.');
                }
            }

            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.autoHide = scope.autoHide === undefined ? true : scope.autoHide;
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch('maxSize', function(val) {
                if (val) {
                    paginationRange = Math.max(scope.maxSize, 5);
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
                }
            }, function(length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getItemsPerPage(paginationId));
                }
            }, function(current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return paginationService.getCurrentPage(paginationId);
                }
            }, function(currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            /**
             * Custom "track by" function which allows for duplicate "..." entries on long lists,
             * yet fixes the problem of wrongly-highlighted links which happens when using
             * "track by $index" - see https://github.com/michaelbromley/angularUtils/issues/153
             * @param id
             * @param index
             * @returns {string}
             */
            scope.tracker = function(id, index) {
                return id + '_' + index;
            };

            function goToPage(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    var oldPageNumber = scope.pagination.current;

                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as the first argument
                    // and the previous page number as a second argument
                    if (scope.onPageChange) {
                        scope.onPageChange({
                            newPageNumber : num,
                            oldPageNumber : oldPageNumber
                        });
                    }
                }
            }

            function generatePagination() {
                if (paginationService.isRegistered(paginationId)) {
                    var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;
                    scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = page;
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    } else {
                        updateRangeValues();
                    }
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                if (paginationService.isRegistered(paginationId)) {
                    var currentPage = paginationService.getCurrentPage(paginationId),
                        itemsPerPage = paginationService.getItemsPerPage(paginationId),
                        totalItems = paginationService.getCollectionLength(paginationId);

                    scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                    scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                    scope.range.total = totalItems;
                }
            }
            function isValidPageNumber(num) {
                return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function(collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (angular.isObject(collection)) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                if (collection instanceof Array) {
                    // the array just needs to be sliced
                    return collection.slice(start, end);
                } else {
                    // in the case of an object, we need to get an array of keys, slice that, then map back to
                    // the original object.
                    var slicedObject = {};
                    angular.forEach(keys(collection).slice(start, end), function(key) {
                        slicedObject[key] = collection[key];
                    });
                    return slicedObject;
                }
            } else {
                return collection;
            }
        };
    }

    /**
     * Shim for the Object.keys() method which does not exist in IE < 9
     * @param obj
     * @returns {Array}
     */
    function keys(obj) {
        if (!Object.keys) {
            var objKeys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    objKeys.push(i);
                }
            }
            return objKeys;
        } else {
            return Object.keys(obj);
        }
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function(instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.deregisterInstance = function(instanceId) {
            delete instances[instanceId];
        };
        
        this.isRegistered = function(instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function() {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function(instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function(instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function(instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function(instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function(instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function(instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function(instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function(instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.setAsyncModeFalse = function(instanceId) {
            instances[instanceId].asyncMode = false;
        };

        this.isAsyncMode = function(instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'angularUtils.directives.dirPagination.template';
        var templateString;

        /**
         * Set a templateUrl to be used by all instances of <dir-pagination-controls>
         * @param {String} path
         */
        this.setPath = function(path) {
            templatePath = path;
        };

        /**
         * Set a string of HTML to be used as a template by all instances
         * of <dir-pagination-controls>. If both a path *and* a string have been set,
         * the string takes precedence.
         * @param {String} str
         */
        this.setString = function(str) {
            templateString = str;
        };

        this.$get = function() {
            return {
                getPath: function() {
                    return templatePath;
                },
                getString: function() {
                    return templateString;
                }
            };
        };
    }
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/app.html',
    '<div data-sailplay-profile="" data-sailplay-history="" style="margin: 20px;" data-ng-cloak=""><div class="bns_wrap clearfix" data-ng-show="!user()"><div class="bns_top bns_top_nologin"><div class="iner_block"><h2>Join the <strong>KEY CLUB</strong></h2><div class="bns_top_right_btn"><a href="#" class="bns_logun" data-ng-click="$event.preventDefault(); show_login = true;">Login/Sign Up</a></div></div></div><div class="bns_content"><div class="iner_block clearfix"><div class="bns_top_right"><div class="bns_top_item" style="background-image: url(dist/img/top_icon1_bl.png);"><span>Download a virtual membership card that is good for discounts at local shops and restaurants</span></div><div class="bns_top_item" style="background-image: url(dist/img/top_icon2_bl.png);"><span>Review your vacation home on our website, share on social media, and participate in tasks to earn bonus points</span></div><div class="bns_top_item" style="background-image: url(dist/img/top_icon3_bl.png);"><span>Redeem your points for gifts and services to make your Tahoe stay perfect</span></div><div class="bns_top_item" style="background-image: url(dist/img/top_icon4_bl.png);"><span>Earn points for every night you stay</span></div></div><div class="bns_right_content bns_right_content_nl"><div class="bns_card" style="cursor: pointer;" data-ng-click="show_login = true;"><span class="bns_c_text1">Tahoe Luxury Properties<br>Key Club</span> <span class="bns_c_text2">Join the Key Club</span></div></div><h3 class="bns_head">Get Your Key Club Card</h3><div class="bns_nlpage_content" data-ng-controller="CompaniesList"><div class="bns_nlpage_item" data-ng-repeat="company in companies"><div class="bns_nlpage_item_img"><a href="{{ company.link }}" target="_blank" style="background-image: url(\'{{ company.logo }}\');"></a></div><div class="bns_left_content_text"><p>{{ company.description }}</p></div></div></div></div></div></div><div class="bns_wrap" data-ng-show="user()"><div class="bns_top"><div class="iner_block"><h2>Welcome to the<br><strong>Key Club</strong></h2><div class="bns_top_right"><div class="bns_top_item" style="background-image: url(dist/img/top_icon1.png);"><span>Download a virtual membership card that is good for discounts at local shops and restaurants</span></div><div class="bns_top_item" style="background-image: url(dist/img/top_icon2.png);"><span>Review your vacation home on our website, share on social media, and participate in tasks to earn bonus points</span></div><div class="bns_top_item" style="background-image: url(dist/img/top_icon3.png);"><span>Redeem your points for gifts and services to make your Tahoe stay perfect</span></div><div class="bns_top_item" style="background-image: url(dist/img/top_icon4.png);"><span>Earn points for every night you stay</span></div></div><div class="bns_top_mid"><a class="ava" data-ng-show="has_avatar()"><img data-ng-src="{{ user().user.pic | sailplay_pic }}" alt=""></a><div class="bns_info_block"><span class="bns_name">{{ user().user.name || \'&nbsp;\' }}</span> <span class="bns_email">{{ user().user.email }}</span> <span class="bns_phone" data-masked-phone-number="+1 (000) 000-00-00" data-phone="user().user.phone"></span> <a href="#" class="bns_edit_prof" data-ng-click="$event.preventDefault(); open_profile();">edit your profile</a> <a href="#" class="bns_info_btn bns_logout" data-ng-click="$event.preventDefault(); logout();">Log out</a></div><div class="bns_info_block"><span class="bns_num_point">{{ user().user_points.confirmed }}</span> <span class="bns_text">bonus points available</span> <a href="#" class="bns_info_btn bns_hist" data-ng-click="$event.preventDefault(); show_history = true;">History</a></div><div class="bns_info_block"><span class="bns_num_point">{{ user().user_points.confirmed + user().user_points.spent }}</span> <span class="bns_text">points earned since joining the Key Club</span></div></div></div></div><div class="bns_content"><div class="iner_block"><div><h3 class="bns_head">Get Your Key Club Card</h3><div class="bns_left_content_text"><p>Use your Tahoe Luxury Properties Key Card for discounts and benefits at local businesses</p><a href="#" class="bns_show_all" data-ng-click="$event.preventDefault(); show_companies = true; body_lock(true);">Find out more>></a></div><div class="bns_right_content"><div class="bns_card" style="cursor: pointer;" data-ng-click="show_companies = true; body_lock(true);"><span class="bns_c_text1">Tahoe Luxury Properties<br>Key Club</span> <span class="bns_c_text2">Join the Key Club</span></div><span class="bns_ch">Choose how you want to get your Key Club Card</span><div class="bns_card_btn"><a href="#" class="bns_info_btn bns_downl" data-ng-click="$event.preventDefault(); show_download = true;">Save as PDF</a> <a href="#" class="bns_info_btn bns_sent" data-ng-click="$event.preventDefault(); tags_add({ tags: [\'KC card emailed\'] }, on_email_sent)">Send to my email</a></div></div></div><div data-sailplay-gifts="" data-ng-init="selected_gift = false; gift_confirmation = false;"><h3 class="bns_head">Redeem Your Points</h3><div class="bns_redeem_main"><div class="bns_reedem_item" data-ng-repeat="gift in gifts()"><img data-ng-src="{{ gift.thumbs.url_250x250 | sailplay_pic }}" alt=""><div class="bns_reedem_item_over"><span class="bns_name">{{ gift.name }}</span> <span class="bns_point">{{ gift.points }} {{ gift.points | sailplay_pluralize:locale.points_pluralize }}</span> <a href="#" data-ng-click="$event.preventDefault(); $parent.selected_gift = gift; body_lock(true);">Get</a></div></div></div><div class="bns_overlay bns_over_get_gift" data-ng-class="{ hidden: !selected_gift || gift_confirmation }" data-overlay-click="selected_gift = false; body_lock(false);"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); selected_gift = false; body_lock(false);"></a> <img data-ng-src="{{ selected_gift.pic_full | sailplay_pic }}" alt=""><h4>{{ selected_gift.name }}</h4><span class="bns_over_get_gift_info">{{ selected_gift.descr | descr }}</span><div class="bns_over_get_gift_disc"><h5>Disclaimer</h5><span>{{ selected_gift.descr | disclaimer }}</span></div><div class="bns_sign_form"><div data-ng-show="selected_gift.points > user().user_points.confirmed"><span class="bns_over_get_gift_notify">You need {{ selected_gift.points - user().user_points.confirmed }} more points to get this gift</span></div><div class="bns_input_block"><a href="#" class="bns_over_get_gift disabled" data-ng-show="selected_gift.points > user().user_points.confirmed" data-ng-click="$event.preventDefault(); gift_points_notify();">Get</a> <a href="#" class="bns_over_get_gift" data-ng-show="selected_gift.points <= user().user_points.confirmed" data-ng-click="$event.preventDefault(); gift_confirmation = true;">Get</a> <a href="#" class="bns_over_cancel_btn" data-ng-click="$event.preventDefault(); selected_gift = false; body_lock(false);">Cancel</a></div></div></div></div><div class="bns_overlay bns_over_get_gift_confirm" data-ng-class="{ hidden: !gift_confirmation }"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); selected_gift = false; gift_confirmation = false; body_lock(false);"></a><h3>You are about to spent {{ selected_gift.points }} {{ selected_gift.points | sailplay_pluralize:locale.points_pluralize }} on</h3><div class="bns_reedem_item"><img data-ng-src="{{ selected_gift.pic_full | sailplay_pic }}" alt=""><div class="bns_reedem_item_over"><span class="bns_name">{{ selected_gift.name }}</span></div></div><span class="bns_pass_info">Are you sure?</span><div class="bns_sign_form"><div class="bns_input_block"><a href="#" class="bns_over_get_gift_conf" data-ng-click="$event.preventDefault(); gift_purchase(selected_gift); selected_gift = false; gift_confirmation = false; body_lock(false);">Yes</a> <a href="#" class="bns_over_cancel_btn" data-ng-click="$event.preventDefault(); selected_gift = false; gift_confirmation = false; body_lock(false);">Cancel</a></div></div></div></div></div><div data-sailplay-actions="" data-ng-init="selected_action = false; custom_action = false; link_action = false;"><h3 class="bns_head">Earn More Points</h3><div class="bns_earn_more_main"><div class="bns_earn_more_item" data-ng-repeat="action in actions().actions"><div class="bemi_left"><img data-ng-src="{{ action_data(action).pic }}" alt=""></div><div class="bemi_right"><span class="bnmi_name">{{ action_data(action).name }}</span> <span class="bnmi_point">{{ action.points }} {{ action.points | sailplay_pluralize:locale.points_pluralize }}</span></div><div class="bns_emm_over"><a href="#" data-ng-click="$event.preventDefault(); $parent.selected_action = action;">Get bonus points!</a></div></div><div class="bns_earn_more_item" data-ng-init="night_action = { name: \'Earn 100 points for each night you stay in a TLUXP home\', pic: \'dist/img/actions/5.png\', descr: \'Points will be applied upon booking. Call or book online.\' }"><div class="bemi_left"><img data-ng-src="{{ night_action.pic }}" alt=""></div><div class="bemi_right"><span class="bnmi_name">{{ night_action.name }}</span> <span class="bnmi_point">100 {{ 100 | sailplay_pluralize:locale.points_pluralize }}</span></div><div class="bns_emm_over"><a href="#" data-ng-click="$event.preventDefault(); custom_action = night_action;">Get bonus points!</a></div></div><div class="bns_earn_more_item" data-ng-init="review_action = { name: \'Review your vacation rental on TLUXP.com\', pic: \'dist/img/actions/3.png\', descr: \'http://www.tluxp.com/lake-tahoe-vacation-rentals\', url: \'http://www.tluxp.com/lake-tahoe-vacation-rentals\' }"><div class="bemi_left"><img data-ng-src="{{ review_action.pic }}" alt=""></div><div class="bemi_right"><span class="bnmi_name">{{ review_action.name }}</span> <span class="bnmi_point">100 {{ 100 | sailplay_pluralize:locale.points_pluralize }}</span></div><div class="bns_emm_over"><a href="#" data-ng-click="$event.preventDefault(); link_action = review_action;">Get bonus points!</a></div></div><div class="bns_earn_more_item" data-ng-init="refer_action = { name: \'Refer a friend and earn 500 points when they book a TLUXP home\', pic: \'dist/img/actions/2.png\', descr: \'Points will be applied upon booking. Friend must mention referral points to Agent.\' }"><div class="bemi_left"><img data-ng-src="{{ refer_action.pic }}" alt=""></div><div class="bemi_right"><span class="bnmi_name">{{ refer_action.name }}</span> <span class="bnmi_point">500 {{ 500 | sailplay_pluralize:locale.points_pluralize }}</span></div><div class="bns_emm_over"><a href="#" data-ng-click="$event.preventDefault(); custom_action = refer_action;">Get bonus points!</a></div></div></div><div class="bns_overlay bns_tell_about" data-ng-class="{ hidden: !custom_action }" data-overlay-click="custom_action = false;"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); custom_action = false;"></a><h3>{{ custom_action.name }}</h3><div class="bns_tell_about_main"><div class="bns_tell_about_main_left"><img data-ng-src="{{ custom_action.pic }}" alt=""></div><div class="bns_tell_about_main_right"><p class="btamr_text">{{ custom_action.descr }}</p></div></div></div></div><div class="bns_overlay bns_tell_about" data-ng-class="{ hidden: !link_action }" data-overlay-click="link_action = false;"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); link_action = false;"></a><h3>{{ link_action.name }}</h3><div class="bns_tell_about_main"><div class="bns_tell_about_main_left"><img data-ng-src="{{ link_action.pic }}" alt=""></div><div style="margin-top: 20px;"><a class="" href="{{ link_action.url }}" target="_blank">{{ link_action.descr }}</a></div></div></div></div><div class="bns_overlay bns_tell_about" data-ng-class="{ hidden: !selected_action }" data-overlay-click="selected_action = false;"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); selected_action = false;"></a><h3>{{ action_data(selected_action).name }}</h3><div class="bns_tell_about_main"><div class="bns_tell_about_main_left"><img data-ng-src="{{ action_data(selected_action).pic }}" alt=""></div><div class="bns_tell_about_main_right"><div style="position: relative; height: 32px; float: left; width: 100%; margin-top: 6px;" href="#" data-sailplay-action="" data-action="selected_action" data-text="Get bonus points!" data-styles="{{ config.social_styles }}"><a class="sp_cmn-btn-sm sp_task-slider__btn" style="margin-top: 0; cursor: pointer;">Get bonus points!</a></div></div></div></div></div></div><div class="bns_footer">Check your Key Club emails for more ways to earn!</div></div></div></div><div class="bns_overlay bns_over_hist" data-ng-class="{ hidden: !show_history }" data-overlay-click="show_history = false;"><div class="bns_over_iner" data-sailplay-history=""><h3>History</h3><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); $parent.show_history = false;"></a><div class="bns_hist_table"><div class="bns_hist_table_item" data-dir-paginate="item in history() | itemsPerPage:9" data-pagination-id="history_pages"><span class="bhti_left">{{ item | history_item }} <strong>({{ item.action_date | date:\'MM/dd/yyyy\' }})</strong></span> <span class="bhti_right">{{ item.points_delta || 0 }} {{ item.points_delta | sailplay_pluralize:\'point,points,points\' }}</span></div></div><dir-pagination-controls data-max-size="6" data-pagination-id="history_pages" data-template-url="/html/ui/ui.pagination.controls.html" data-auto-hide="true"></dir-pagination-controls></div></div><div class="bns_overlay bns_over_signin" data-ng-class="{ hidden: !show_login }"><div class="bns_over_iner"><h3>Sign in to continue</h3><a href="" class="bns_close" data-ng-click="$event.preventDefault(); show_login = false;"></a><div class="bns_sign_form pn" style="min-height: 341px;" data-ng-controller="RemoteLoginConfig" data-sailplay-remote-login="remote_login_options"></div></div></div><div data-fill-profile="" class="bns_overlay bns_compl_prof" data-ng-class="{ hidden: !show_profile_info }" data-overlay-click="close_profile(); revert_profile_form();"><div class="bns_over_iner"><h3>Complete Your Profile</h3><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); close_profile(); revert_profile_form();"></a> <span class="bns_pass_info">Click on the field you\'d like to edit</span><form novalidate="" name="profile" class="bns_sign_form padded" data-ng-submit="$event.preventDefault(); submit_profile(profile, $parent.on_submit_profile)"><div class="bns_input_block bns_input_block_prof"><input type="text" name="first_name" data-ng-model="profile_form.user.firstName" required=""> <span class="bns_span_over">{{ profile_form.user.firstName || \'Name\' }}</span> <span class="bib_er" data-ng-show="profile.first_name.$invalid && profile.first_name.$touched">Field is required</span></div><div class="bns_input_block bns_input_block_prof"><input type="text" name="last_name" data-ng-model="profile_form.user.lastName" required=""> <span class="bns_span_over">{{ profile_form.user.lastName || \'Surname\' }}</span> <span class="bib_er" data-ng-show="profile.last_name.$invalid && profile.last_name.$touched">Field is required</span></div><div class="bns_input_block bns_input_block_prof"><input type="email" name="email" data-ng-model="profile_form.user.addEmail" required=""> <span class="bns_span_over">{{ profile_form.user.addEmail || \'Email\' }}</span> <span class="bib_er" data-ng-show="profile.email.$invalid && profile.email.$touched">Field is required</span></div><div class="bns_input_block bns_input_block_prof"><input type="text" name="phone" data-phone-mask="+1 (999) 999-99-99" placeholder="+1 (___) ___-__-__" data-ng-model="profile_form.user.addPhone" required=""> <span class="bns_span_over" data-masked-phone-number="+1 (000) 000-00-00" data-phone="profile_form.user.addPhone" data-no-value="Phone number"></span> <span class="bib_er" data-ng-show="profile.phone.$invalid && profile.phone.$touched">Field is required</span></div><div class="bns_input_block bns_input_block_prof"><input type="text" name="address" data-ng-model="profile_form.custom_vars.Address"> <span class="bns_span_over">{{ profile_form.custom_vars.Address || \'Address\' }}</span> <span class="bib_er" data-ng-show="profile.address.$invalid && profile.address.$touched">Field is required</span></div><div class="bns_input_block" data-date-selector="" data-ng-model="$parent.profile_form.user.birthDate" required=""><label>Birthdate</label><div class="bns_select bns_select_date"><span>{{ selected_date[0] || \'Date\' }}</span> <input type="hidden"><div class="bns_select_popup"><a href="" data-ng-repeat="day in date_data.days track by $index" data-ng-click="$event.preventDefault(); $parent.selected_date[0] = ($index+1)">{{ $index+1 }}</a></div></div><div class="bns_select bns_select_man" style="width: 100px; text-align: left;"><span>{{ locale.date.months[selected_date[1]] || \'Month\' }}</span> <input type="hidden"><div class="bns_select_popup" style="text-align: left;"><a style="margin-left: 6px;" href="" data-ng-repeat="month in date_data.months track by $index" data-ng-click="$event.preventDefault(); $parent.selected_date[1] = ($index+1)">{{ locale.date.months[$index+1] }}</a></div></div><div class="bns_select bns_select_year"><span>{{ selected_date[2] || \'Year\' }}</span> <input type="hidden"><div class="bns_select_popup"><a href="" data-ng-repeat="year in date_data.years track by $index" data-ng-click="$event.preventDefault(); $parent.selected_date[2] = year;">{{ year }}</a></div></div></div><div class="bns_input_block bns_input_block_check"><div class="bns_radio"><input type="radio" name="sex" data-ng-value="1" id="man" data-ng-model="profile_form.user.sex"> <label for="man">Male</label></div><div class="bns_radio"><input type="radio" name="sex" data-ng-value="2" id="fam" data-ng-model="profile_form.user.sex"> <label for="fam">Female</label></div></div><div class="bns_input_block"><button type="submit" class="bns_input_block_prof_btn" data-ng-disabled="profile.$invalid">Submit</button> <a href="#" class="bns_over_cancel_btn" data-ng-click="$event.preventDefault(); close_profile(); revert_profile_form(profile)">Cancel</a></div></form></div></div><div class="bns_overlay bns_learn" data-ng-class="{ hidden: !show_companies }" data-overlay-click="show_companies = false; body_lock(false);"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); show_companies = false; body_lock(false);"></a><h3>Learn about special offers available to<br>our Virtual Card holder</h3><div class="bns_over_scrolblock" data-ng-controller="CompaniesList"><div class="bns_nlpage_content"><div class="bns_nlpage_item" data-ng-repeat="company in companies"><div class="bns_nlpage_item_img"><a href="{{ company.link }}" target="_blank" style="background-image: url(\'{{ company.logo }}\')"></a></div><div class="bns_left_content_text"><p>{{ company.description }}</p></div></div></div></div><div class="bns_learn_conf"><a href="#" data-ng-click="$event.preventDefault(); show_companies = false; body_lock(false);">Ok</a></div></div></div><div class="bns_overlay bns_over_get_gift_confirm card_popup" data-ng-class="{ hidden: !show_download }" data-overlay-click="show_download = false; body_lock(false);"><div class="bns_over_iner"><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); show_download = false; body_lock(false);"></a><div class="bns_over_scrolblock"><div class="bns_nlpage_content"><div class="bns_card_popup"><span class="bns_c_text1">Tahoe Luxury Properties<br>Key Club</span> <span class="bns_c_text2">Join the Key Club</span></div></div></div><div class="bns_learn_conf"><a href="#" data-ng-click="$event.preventDefault(); save_pdf(); tags_add({ tags: [\'KC card downloaded\'] })">Save</a></div></div></div><notifier></notifier></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/ui/ui.notifier.html',
    '<div class="bns_overlay bns_error" data-ng-show="show_notifier" data-overlay-click="reset_notifier()"><div class="bns_over_iner"><h3>{{ data.header }}</h3><a href="#" class="bns_close" data-ng-click="$event.preventDefault(); reset_notifier();"></a> <span class="bns_pass_info">{{ data.body }}</span><div class="bns_sign_form"><div class="bns_input_block"><a href="#" class="bns_over_cancel_btn" data-ng-click="$event.preventDefault(); reset_notifier();">Ok</a></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/ui/ui.pagination.controls.html',
    '<div class="bns_hist_page" data-ng-if="1 < pages.length || !autoHide"><a data-ng-if="directionLinks" data-ng-class="{ disabled : pagination.current == 1 }" href="" data-ng-click="setCurrent(pagination.current - 1)">&#60;prev</a> <a data-ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" data-ng-class="{ act : pagination.current == pageNumber, disabled : pageNumber == \'...\' }" href="" data-ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a> <a data-ng-if="directionLinks" data-ng-class="{ disabled : pagination.current == pagination.last }" href="" data-ng-click="setCurrent(pagination.current + 1)">next></a></div>');
}]);
})();

(function () {

  angular.module('sailplay.widgets', [ 'core', 'ui', 'sailplay', 'templates' ])

    .config(function(SailPlayProvider, SailPlayActionsDataProvider, SailPlayBadgesProvider, FillProfileProvider){

      //possible values:
      //url,cookie,remote
      SailPlayProvider.set_auth_type('remote');
      SailPlayProvider.set_remote_config({

      });

      SailPlayProvider.set_cookie_name('auth_hash');

      _CONFIG && SailPlayProvider.set_config({
        partner_id: _CONFIG.SAILPLAY.partner_id,
        domain: _CONFIG.SAILPLAY.domain,
        lang: _CONFIG.SAILPLAY.lang
      });

      _LOCALE && SailPlayActionsDataProvider.set_actions_data(_LOCALE.actions);

      SailPlayBadgesProvider.set_limits([ 0, 5000 ]);

      FillProfileProvider.set_cookie_name(_CONFIG.SAILPLAY.partner_id + '_sailplay_profile_form');

      FillProfileProvider.set_tag('Completed Profile');

    })

    .run(function($rootScope, SailPlay){

      $rootScope.locale = _LOCALE || {};

      //$rootScope.$on('sailplay-init-success', function(){
      //  console.log('auth!');
      //  //SailPlay.authorize();
      //
      //});

    })

    .controller('RemoteLoginConfig', function($scope){

      $scope.remote_login_options = {
        background: 'transparent',
        disabled_options: ['socials', 'agreement']
      };

    })

    .controller('CompaniesList', function($scope, $http){

      $scope.companies = [];

      $http.get('config/companies.json').then(function(res){

        $scope.companies = res.data;

      });

    })

    .filter('disclaimer', function(){

      return function (descr){

        return (descr && descr.split('Disclaimer: ')[1]) || '';

      }

    })

    .filter('descr', function(){

      return function (descr){

        return (descr && descr.split('Disclaimer: ')[0]) || '';

      }

    })

    .directive('sailplayWidgets', function(SailPlay, ipCookie, SailPlayApi, $document, $rootScope, $filter){

      return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: '/html/app.html',
        link: function(scope){

          scope.show_history = false;

          scope.show_statuses_list = false;

          scope.show_profile_info = false;

          scope.show_profile_action = true;

          scope.show_login = false;

          scope.show_companies = false;

          scope.show_download = false;

          scope.$on('sailplay-login-cancel', function(){
            scope.show_login = false;
          });

          scope.$on('sailplay-login-success', function(){
            scope.show_login = false;
          });

          scope.$on('sailplay-logout-success', function(){

            SailPlayApi.reset();

          });

          scope.fill_profile = function(){

            scope.show_profile_info = true;

          };

          scope.body_lock = function(state){

            if(state) {
              $document[0].body.classList.add('body_lock');
            }
            else {
              $document[0].body.classList.remove('body_lock');
            }

          };

          scope.close_profile = function(){

            scope.show_profile_info = false;

            scope.body_lock(false);

          };

          scope.on_submit_profile = function(){
            scope.show_profile_action = false;
            scope.close_profile();
          };

          scope.open_profile = function(){
            scope.show_profile_info = true;
            scope.body_lock(true);
          };

          SailPlay.on('tags.exist.success', function(res){

            if(res.status === 'ok' && res.tags[0].exist) {

              scope.show_profile_action = false;
              scope.$apply();

            }

          });

          scope.save_pdf = function(){

            var doc = new jsPDF();

            var image = new Image();
            image.src = 'dist/img/card_pdf.jpg';
            image.onload = function(){

              var canvas = document.createElement('canvas');
              canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
              canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

              canvas.getContext('2d').drawImage(this, 0, 0);

              var rendered = canvas.toDataURL('image/jpeg');

              doc.addImage(rendered, 'JPEG', 60, 40, 90, 52);
              doc.setFontSize(9);
              doc.setTextColor(255, 255, 255);
              doc.text(70, 80, (SailPlayApi.data('load.user.info')().user.first_name || '') + ' ' + (SailPlayApi.data('load.user.info')().user.last_name || ''));
              doc.setFontSize(9);
              doc.setTextColor(255, 255, 255);

              var formatted_date = $filter('date')(SailPlayApi.data('load.user.info')().user.register_date, 'MMMM yyyy');
              doc.text(70, 84, 'Member since ' + formatted_date);

              doc.save('Tahoe.pdf');

            };

          };

          scope.on_email_sent = function(){

            $rootScope.$broadcast('notifier:notify', { header: 'Thank you!', body: 'You KeyClub Card was sent to ' + SailPlayApi.data('load.user.info')().user.email });

          };

          scope.gift_points_notify = function(){
            $rootScope.$broadcast('notifier:notify', { header: '', body: 'You do not currently have enough points to redeem this gift. Earn additional points by staying with us or taking the actions below!' });
          };

          scope.has_avatar = function(){

            var has_avatar = false;

            if(SailPlayApi.data('load.user.info')() && SailPlayApi.data('load.user.info')().user.pic.indexOf('no_avatar') < 0){

              has_avatar = true;

            }

            return has_avatar;

          };

          SailPlay.on('actions.social.connect.error', function(e){
            console.dir(e);
          });

          SailPlay.on('actions.social.connect.success', function(e){
            console.dir(e);
          });

        }
      }

    });

  window.addEventListener('DOMContentLoaded', function(){

    var app_container = document.getElementsByTagName('sailplay-widgets')[0];

    app_container && angular.bootstrap(app_container, [ 'sailplay.widgets' ]);

  });

}());

(function () {

  angular.module('core', [
    'ipCookie'
  ])

  .run(function(SailPlay, ipCookie, SailPlayApi, $rootScope, $window, FillProfile){

    $rootScope.config = $window._CONFIG || {};

    SailPlay.on('login.error', function(){

      $rootScope.loaded = true;
      $rootScope.$apply();

    });

    SailPlay.on('login.success', function(){

      $rootScope.loaded = true;

      //load data for widgets
      SailPlayApi.call('load.user.info', { all: 1 });
      SailPlayApi.call('load.badges.list');
      SailPlayApi.call('load.actions.list');
      SailPlayApi.call('load.user.history');
      SailPlayApi.call('load.gifts.list');
      SailPlayApi.call('tags.exist', { tags: [ FillProfile.tag ] });


      $rootScope.$apply();

    });

    SailPlay.on('actions.perform.success', function(){
      SailPlayApi.call('load.actions.list');
    });

    SailPlay.on('actions.perform.error', function(){
      SailPlayApi.call('load.actions.list');
    });

    SailPlay.on('actions.perform.complete', function(){
      SailPlayApi.call('load.actions.list');
    });

    SailPlay.on('gifts.purchase.success', function(res){

      $rootScope.$broadcast('notifier:notify', {

        header: $rootScope.locale.congratulations,
        body: (res.coupon_number && ($rootScope.locale.coupon_number + ' ' + res.coupon_number)) ||  res.success_message || $rootScope.locale.gift_received

      });

      SailPlayApi.call('load.user.info', { all: 1 });
      SailPlayApi.call('load.user.history');

      $rootScope.$apply();

    });

    SailPlay.on('gift.purchase.error', function(res){

      $rootScope.$broadcast('notifier:notify', {

        header: $rootScope.locale.gift_error,
        body: $rootScope.locale.errors[res.status_code] || $rootScope.locale.error

      });

      $rootScope.$apply();

    });

    //SailPlay.on('actions.social.connect.complete', function(){
    //  SailPlayApi.call('load.actions.list');
    //});

  });

}());

(function () {

  angular.module('sailplay.actions', [])

    .provider('SailPlayActionsData', function(){

      var actions_data = {

        "system": {
          "emailBinding": {
            name: "Enter email"
          },
          "fillProfile":{
            name: "Fill profile"
          },
          "inviteFriend":{
            name: "Invite friend"
          }
        },
        "social": {
          "vk": {
            "like": {
              "name": "Join the group"
            },
            "partner_page": {
              "name": "Share our website on VK"
            },
            "purchase": {
              "name": "Share your purchase on VK"
            }
          },
          "fb": {
            "like": {
              "name": "Like Facebook group"
            },
            "partner_page": {
              "name": "Share our website on Facebook"
            },
            "purchase": {
              "name": "Share your purchase on Facebook"
            }
          },
          "gp": {
            "like": {
              "name": "Like G+ group"
            },
            "partner_page": {
              "name": "Share our website on G+"
            },
            "purchase": {
              "name": "Share your purchase on G+"
            }
          },
          "ok": {
            "like": {
              "name": "Join the group"
            },
            "partner_page": {
              "name": "Share our website on Odnoklassniki"
            },
            "purchase": {
              "name": "Share you purchase on Odnoklassniki"
            }
          },
          "tw": {
            "partner_page": {
              "name": "Share our website on twitter"
            },
            "purchase": {
              "name": "Share your purchase on twitter"
            }
          }
        }
      };

      return {

        set_actions_data: function(data){

          angular.merge(actions_data, data);

        },

        $get: function(){

          return actions_data;

        }

      };

    })

    /**
     * @ngdoc directive
     * @name sailplay.actions.directive:sailplayActions
     * @scope
     * @restrict A
     *
     * @description
     * SailPlay profile directive used for rendering sailplay actions, sush as: fill profile, invite friend and social sharing. =)
     *
     */
    .directive('sailplayActions', function(SailPlayApi, SailPlay, SailPlayActionsData){

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function(scope){

          scope.actions = SailPlayApi.data('load.actions.list');

          scope.perform_action = function(action){

            SailPlay.send('actions.perform', action);

          };

          SailPlay.on('actions.perform.success', function(res){

            scope.$apply(function(){

              scope.on_perform && scope.on_perform(res);

            });


          });

          scope.action_data = function(action){

            var data = {};

            if(!action) return data;

            data = action;

            if(action.socialType) data = SailPlayActionsData.social[action.socialType] && SailPlayActionsData.social[action.socialType][action.action];

            if(SailPlayActionsData.system[action.type]) data = SailPlayActionsData.system[action.type];

            return data;

          };

        }

      };

    })

    /**
     * @ngdoc directive
     * @name sailplay.actions.directive:sailplayAction
     * @scope
     * @restrict A
     *
     * @description
     * Simple directive for parsing dom element as SailPlay action.
     *
     * @param {object}  action   A SailPlay action object, received from api.
     * @param {string}  styles   Not required attribute, used for custom styling iframe buttons.
     * @param {string}  text   Not required attribute, used for custom text in iframe buttons.
     *
     */
    .directive('sailplayAction', function(SailPlay, $timeout, $compile){

      var init_state;

      return {

        restrict: 'A',
        replace: false,
        scope: {
          action: '='
        },
        link: function(scope, elm, attrs){

          init_state = elm[0].innerHTML;

          elm.on('click', function(e){
            e.preventDefault();
          });

          function parse_action(action){
            $timeout(function(){
              attrs.styles && elm.attr('data-styles', attrs.styles);
              attrs.text && elm.attr('data-text', attrs.text);
              SailPlay.actions && action && SailPlay.actions.parse(elm[0], action);
            }, 0);
          }

          scope.$watch('action', function(new_value){
            if(new_value){
              elm.html(init_state);
              parse_action(new_value);
            }
          });

        }

      };

    });

}());

(function () {

  angular.module('sailplay.badges', [])

    .provider('SailPlayBadges', function(){

      var limits = [];

      return {

        set_limits: function(new_limits){

          if(new_limits) limits = new_limits;

        },
        $get: function(){

          var self = this;

          self.limits = limits;

          return self;

        }

      };

    })


    /**
     * @ngdoc directive
     * @name sailplay.badges.directive:sailplayBadges
     * @scope
     * @restrict A
     *
     * @description
     * SailPlay profile directive used for rendering and operating with badges. =)
     *
     */
    .directive('sailplayBadges', function(SailPlayApi, SailPlayBadges){

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function(scope){

          scope.badges = SailPlayApi.data('load.badges.list');

          var user = SailPlayApi.data('load.user.info');

          scope.get_next = function () {

            var badges = scope.badges;

            var statuses = badges && badges() && badges().multilevel_badges && badges().multilevel_badges[0];
            if (!statuses) return;
            var received = statuses.filter(function (status) {
              return status.is_received;
            });
            if (received.length == statuses.length) return null;
            var result = statuses.filter(function (status) {
              return !status.is_received;
            });
            return result[0] || statuses[0];

          };

          scope.get_offset = function () {

            var arr = SailPlayBadges.limits;

            var limit = user && user() ? user().user_points.confirmed + user().user_points.spent + user().user_points.spent_extra : 0;
            var result = [];
            for (var i = 0, len = arr.length; i < len; i++) {
              var current_limit = arr[i];
              if (limit < current_limit) {
                result.push(current_limit);
              }
            }
            return Math.round(result[0] ? result[0] - limit : 0);
          };

          scope.get_streak = function(badges_arr){

            var streak = {
              streak: [],
              progress: 0
            };

            if(!badges_arr) return streak;

            for(var i = 0; i < badges_arr.length; i+=1){

              var badge = badges_arr[i];
              if(badge.is_received) streak.streak.push(badge);
              else break;

            }

            streak.progress = badges_arr.length/streak.streak.length*100;

            if(scope.get_offset)

            return streak;

          };

          scope.get_progress = function(){

            var balance = user && user() ? user().user_points.confirmed + user().user_points.spent + user().user_points.spent_extra : 0;

            var target = parseInt(angular.copy(SailPlayBadges.limits).pop());

            var progress = balance/target*100;

            return progress <= 100 ? progress : 100;

          };

        }

      };

    });

}());

(function () {

  angular.module('sailplay.gifts', [])

    /**
     * @ngdoc directive
     * @name sailplay.gifts.directive:sailplayGifts
     * @scope
     * @restrict A
     *
     * @description
     * Simple directive for rendering and operating with SailPlay gifts.
     *
     */
    .directive('sailplayGifts', function(SailPlay, SailPlayApi){

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function(scope){

          scope.gifts = SailPlayApi.data('load.gifts.list');

          scope.gift_purchase = function(gift){

            SailPlay.send('gifts.purchase', { gift: gift });

          };

        }

      };

    });

}());

(function () {

  angular.module('sailplay.history', [])

    /**
     * @ngdoc directive
     * @name sailplay.history.directive:sailplayHistory
     * @scope
     * @restrict A
     *
     * @description
     * Simple directive for rendering and operating with SailPlay user's history.
     *
     */
    .directive('sailplayHistory', function(SailPlayApi){

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function(scope){

          scope.history = SailPlayApi.data('load.user.history');

          scope.history_current_page = 0;

          scope.set_current_page = function(page){
            scope.history_current_page = page;
          };

        }

      };

    })

    .service('history_texts', function($rootScope){

      return $rootScope.locale.history_items;

    })

    .filter('history_item', function(history_texts) {

      return function(historyItem) {
        switch (historyItem.action) {
          case 'gift_purchase':
            return history_texts.gift_purchase + ': ' + historyItem.name;
          case 'event':
            return historyItem.name || history_texts.custom_action;
          case 'extra':
            return historyItem.name || history_texts.custom_action;
          case 'sharing':
            switch (historyItem.social_action) {
              case 'like':
                return history_texts.enter_group + historyItem.social_type;
              case 'purchase':
                return history_texts.share_purchase + historyItem.social_type;
              case 'partner_page':
                return history_texts.social_share + historyItem.social_type;
              case 'badge':
                return history_texts.share_badge + historyItem.social_type;
            }
        }
        return history_texts[historyItem.action];
      }
    });

}());

(function () {

  angular.module('sailplay', [
    'sailplay.profile',
    'sailplay.gifts',
    'sailplay.history',
    'sailplay.actions',
    'sailplay.badges'
  ])

    .run(function(SailPlay, $rootScope, ipCookie){

      SailPlay.send('init', SailPlay.CONFIG);

      SailPlay.on('init.success', function(res){

        $rootScope.$broadcast('sailplay-init-success', res);
        $rootScope.$apply();
      });

      SailPlay.on('login.error', function (res) {

        $rootScope.$broadcast('sailplay-login-error', res);
        $rootScope.$apply();

      });

      SailPlay.on('login.success', function (res) {

        $rootScope.$broadcast('sailplay-login-success', res);
        $rootScope.$apply();

      });

      SailPlay.on('login.cancel', function (res) {

        $rootScope.$broadcast('sailplay-login-cancel', res);
        $rootScope.$apply();

      });

      SailPlay.on('logout.success', function (res) {

        $rootScope.$broadcast('sailplay-logout-success', res);
        $rootScope.$apply();

      });

    })
    
    .service('sailplay_config', function($window){
      
      return typeof $window._CONFIG !== 'undefined' && $window._CONFIG.SAILPLAY || { partner_id: 1, domain: 'https://sailplay.net' };
      
    })

    .provider('SailPlay', function(){

      var auth_type = 'url';

      var auth_options = {};

      var auth_hash_cookie_name = 'sailplay_auth_hash';

      var config = {
        partner_id: 1,
        domain: 'https://sailplay.net'
      };

      return {

        set_auth_type: function(type, options){

          if(type) auth_type = type;

          if(options) auth_options = options;

        },

        set_cookie_name: function(name){

          if(name) auth_hash_cookie_name = name;

        },

        set_config: function(new_config){

          angular.merge(config, new_config);

        },

        set_remote_config: function(new_config){

          angular.merge(auth_options, new_config);

        },

        $get: function($window, $rootScope, ipCookie){

          var sp = $window.SAILPLAY || {};

          sp.CONFIG = config;

          switch (auth_type){

            case 'url':

              sp.authorize = function(){

                var params = sp.url_params();

                if (params) {
                  sp.send('login', params.auth_hash);
                }
                else {
                  $rootScope.$broadcast('sailplay-login-error', { status: 'error', message: 'No auth_hash found' });
                }

              };
              break;

            case 'cookie':

              var auth_hash = ipCookie(auth_hash_cookie_name);
              if(auth_hash){
                sp.send('login', auth_hash);
              }
              else {
                $rootScope.$broadcast('sailplay-login-error', { status: 'error', message: 'No auth_hash found' });
              }
              break;

            case 'remote':
              sp.authorize = function() {
                sp.send('login.remote', auth_options);
              };


          }

          sp.auth_hash_cookie_name = auth_hash_cookie_name;

          return sp;

        }

      };


    })

    .service('SailPlayApi', function($q, SailPlay, $rootScope){

      var self = this;

      var data = {};

      var points = [

        'load.user.info',
        'load.gifts.list',
        'load.user.history',
        'load.actions.list',
        'load.badges.list',
        'tags.exist',
        'tags.add'

      ];

      self.points = [];

      angular.forEach(points, function(point){

        SailPlay.on(point+'.success', function(res){

          $rootScope.$apply(function(){
            self.data(point, res);
            console.log('sailplay.api:' + point + '.success');
            console.dir(self.data(point)());
            //console.log(JSON.stringify(self.data(point)()));

          });

        });

        SailPlay.on(point+'.error', function(res){
          $rootScope.$apply(function() {
            console.log('sailplay.api:' + point + '.error');
            console.dir(res);
            self.data(point, null);
          });
        });

      });

      self.data = function(key, value){

        if(typeof value !== 'undefined'){

          data[key] = angular.copy(value);

        }

        return function (){
          return data[key];
        };

      };

      self.call = function(name, params, callback){

        SailPlay.send(name, params);

      };

      self.reset = function(){
        data = {};
      };

    })

    .filter('sailplay_pluralize', function () {
      var cases = [2, 0, 1, 1, 1, 2];
      return function (input, titles) {
        input = Math.abs(input);
        titles = titles.split(',');
        return titles[(input % 100 > 4 && input % 100 < 20) ? 2 : cases[(input % 10 < 5) ? input % 10 : 5]];
      }
    })

    .filter('sailplay_pic', function(SailPlay, $window){

      function repair_pic_url(url){
        if(/^((http|https|ftp):\/\/)/.test(url)){
          return url;
        }
        if(url.indexOf('//') === 0){
          return $window.location.protocol + url;
        }
        else {
          return SailPlay.config().DOMAIN + url;
        }
      }

      return function(pic_url) {

        if(!pic_url) return '';

        return repair_pic_url(pic_url);

      };

    })

    .directive('sailplayRemoteLogin', function(SailPlay){

      return {
        restrict: 'A',
        replace: true,
        template: '<iframe></iframe>',
        link: function(scope, elm, attrs){

          var opts = scope.$eval(attrs.sailplayRemoteLogin);

          var options = {
            node: elm[0]
          };

          var logged = false;

          console.dir(opts);
          angular.merge(options, opts);
          console.dir(options);

          scope.$on('sailplay-init-success', function(){
            SailPlay.send('login.remote', options);
          });

          scope.$on('sailplay-login-success', function(){
            logged = true;
          });

          scope.$on('sailplay-logout-success', function(){

            if(logged) {

              logged = false;

              var src = elm[0].src;

              elm[0].src = '';

              elm[0].src = src;

            }

          });

          SailPlay.config() && SailPlay.config().partner && SailPlay.send('login.remote', options);

        }
      }

    });

}());

(function () {

  angular.module('sailplay.profile', [])

    /**
     * @ngdoc directive
     * @name sailplay.profile.directive:sailplayProfile
     * @scope
     * @restrict A
     *
     * @description
     * SailPlay profile directive used for rendering user's profile. =)
     *
     */
    .directive('sailplayProfile', function(SailPlayApi, SailPlay, $q){

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function(scope){

          /**
           * @ngdoc method
           * @name user
           * @methodOf sailplay.profile.directive:sailplayProfile
           * @description
           * Returns user's data stored in API service with key: 'load.user.info'
           *
           * @returns {Object} User's profile data
           */
          scope.user = SailPlayApi.data('load.user.info');

          /**
           * @ngdoc method
           * @name logout
           * @methodOf sailplay.profile.directive:sailplayProfile
           * @description
           * Logout current user, clear session cookies
           */
          scope.logout = function(){

            SailPlay.send('logout');

          };

          /**
           * @ngdoc method
           * @name tags_add
           * @methodOf sailplay.profile.directive:sailplayProfile
           * @description
           * Add array of tags to current_user or user in params
           * @param {object}  params   Object with params:  tags - array of tag names, user (optional)
           * @param {function}  callback   Not required attribute, used for callback action after success
           */
          scope.tags_add = function(params, callback){

            if(!params) return;

            var tags = params.tags || [];

            if(tags.length > 0){

              function chunk(array, chunkSize) {
                return [].concat.apply([],
                  array.map(function(elem,i) {
                    return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
                  })
                );
              }

              var chunked_tags = chunk(tags, 10);

              var tag_promises = [];

              angular.forEach(chunked_tags, function(chunk){

                var promise = $q(function(resolve, reject){

                  SailPlay.send('tags.add', { tags: chunk }, function(tags_res){
                    if(tags_res.status === 'ok') {

                      resolve(tags_res);

                      //sp.send('leads.submit.success', { lead: self, response: user_res, tags: res });
                    }
                    else {
                      reject(tags_res);
                      //sp.send('leads.submit.error', { lead: self, response: user_res, tags: res });
                    }
                  });

                });

                tag_promises.push(promise);

              });

              $q.all(tag_promises).then(function(tags_res){

                callback && callback(tags_res);

              });
            }

          };

        }

      };

    });

}());

(function () {

  angular.module('ui', [
    'angularUtils.directives.dirPagination'
  ])


    .provider('FillProfile', function(){

      var profile_tag = 'Completed Profile';
      var cookie_name = 'sailplay_profile_form';

      return {

        set_tag: function(tag){

          profile_tag = tag || profile_tag;

        },

        set_cookie_name: function(name){

          cookie_name = name || cookie_name;

        },

        $get: function(){

          this.tag = profile_tag;

          this.cookie_name = cookie_name;

          return this;

        }

      };

    })

    .directive('fillProfile', function(SailPlay, $rootScope, $q, ipCookie, SailPlayApi, FillProfile){

      return {

        restrict: 'A',
        scope: true,
        link: function(scope){

          var saved_form = false;

          var new_form = {

            user: {

              addPhone: '',
              addEmail: '',
              birthDate: '',
              firstName: '',
              lastName: '',
              sex: ''

            },
            custom_vars: {
              'Address': ''
            },
            tags: [],
            hide_hist: false

          };

          scope.$watch(function(){
            return angular.toJson([ SailPlayApi.data('load.user.info')() ]);
          }, function(){

            var user = SailPlayApi.data('load.user.info')();

            if(!user) return;
            scope.profile_form = angular.copy(new_form);
            scope.profile_form.user.auth_hash = SailPlay.config().auth_hash;
            //angular.extend(scope.profile_form.user, user.user);
            scope.profile_form.user.addPhone = user.user.phone;
            scope.profile_form.user.addEmail = user.user.email;
            scope.profile_form.user.firstName = user.user.first_name;
            scope.profile_form.user.lastName = user.user.last_name;
            scope.profile_form.user.birthDate = user.user.birth_date || '';
            if(ipCookie(FillProfile.cookie_name) && SailPlay.config().auth_hash === ipCookie(FillProfile.cookie_name).user.auth_hash ){
              angular.extend(scope.profile_form, ipCookie(FillProfile.cookie_name));
            }

            saved_form = angular.copy(scope.profile_form);

          });

          scope.revert_profile_form = function(form){
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
            scope.profile_form = angular.copy(saved_form);
          };

          scope.toggle_tag = function(arr, tag){

            if(!tag) return;

            var index = arr.indexOf(tag);

            if(index > -1){

              arr.splice(index, 1);

            }
            else {

              arr.push(tag);

            }

          };

          scope.submit_profile = function(form, callback){

            if(!form || !form.$valid) {
              return;
            }

            var data_user = SailPlayApi.data('load.user.info')() && SailPlayApi.data('load.user.info')().user;

            var req_user = angular.copy(scope.profile_form.user);
            //console.log(data_user.phone, req_user.addPhone);

            if(data_user && data_user.phone && data_user.phone.replace(/\D/g,'') == req_user.addPhone.replace(/\D/g,'')){
              delete req_user.addPhone;
            }

            if(data_user && data_user.email && data_user.email == req_user.addEmail){
              delete req_user.addEmail;
            }

            SailPlay.send('users.update', req_user, function(user_res){

              if(user_res.status === 'ok'){

                var req_tags = angular.copy(scope.profile_form.tags);

                if(!scope.profile_form.user.sex || !scope.profile_form.custom_vars.Address){
                  req_tags.push('Profile Uncompleted');
                }
                else {
                  req_tags.push(FillProfile.tag);
                }

                function chunk(array, chunkSize) {
                  return [].concat.apply([],
                    array.map(function(elem,i) {
                      return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
                    })
                  );
                }

                var chunked_tags = chunk(req_tags, 10);

                var tag_promises = [];

                angular.forEach(chunked_tags, function(chunk){

                  var promise = $q(function(resolve, reject){

                    SailPlay.send('tags.add', { tags: chunk }, function(tags_res){
                      if(tags_res.status === 'ok') {

                        resolve(tags_res);

                        //sp.send('leads.submit.success', { lead: self, response: user_res, tags: res });
                      }
                      else {
                        reject(tags_res);
                        //sp.send('leads.submit.error', { lead: self, response: user_res, tags: res });
                      }
                    });

                  });

                  tag_promises.push(promise);

                });

                $q.all(tag_promises).then(function(tags_res){

                  SailPlay.send('vars.add', { custom_vars: scope.profile_form.custom_vars }, function(vars_res){

                    var response = {
                      user: user_res,
                      tags: tags_res,
                      vars: vars_res
                    };

                    if(vars_res.status === 'ok') {

                      ipCookie(FillProfile.cookie_name, scope.profile_form);

                      $rootScope.$broadcast('notifier:notify', {

                        header: $rootScope.locale.thanks,
                        body: $rootScope.locale.notifications.fill_profile_success

                      });

                      SailPlayApi.call('load.user.info', { all: 1 });

                      callback && callback(response);
                      scope.$apply();


                    }
                    else {

                      $rootScope.$broadcast('notifier:notify', {

                        header: $rootScope.locale.error,
                        body: user_res.message || $rootScope.locale.notifications.default_error

                      });
                      scope.$apply();

                    }

                  });

                });



              }

              else {

                $rootScope.$broadcast('notifier:notify', {

                  header: $rootScope.locale.error,
                  body: ($rootScope.locale.errors && $rootScope.locale.errors[user_res.status_code] || $rootScope.locale.errors[user_res.message]) || $rootScope.locale.notifications.default_error

                });
                $rootScope.$apply();

              }

            });

          };

        }

      };

    })

    .directive('overlayClick', function(){

      return {
        restrict: 'A',
        replace: false,
        scope: false,
        link: function(scope, elm, attrs){

          elm.on('click', function(e){
            if(e.target === elm[0]){
              scope.$apply(function () {
                scope.$eval(attrs.overlayClick);
              });
            }
          });

        }
      };

    })

    .controller('slick_config', function($scope){

      $scope.gift_slider_config = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 150,
        infinite: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

      $scope.action_slider_config = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 150,
        infinite: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

    })

    .directive('slickCarousel', function ($compile, $timeout) {
      return {
        restrict:'A',
        link: function (scope, element, attrs) {

          scope.hidden = true;

          var $element = $(element);

          function toggle(state){

            if(state){
              $element.css('opacity', 1);
            }
            else {
              $element.css('opacity', 0);
            }

          }

          var options = scope.$eval(attrs.options) || {
            infinite: false,
            nextArrow: '<img class="slider_arrow right" src="dist/img/right.png"/>',
            prevArrow: '<img class="slider_arrow left" src="dist/img/left.png"/>',
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 880,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          };

          scope.process = false;

          scope.$watchCollection(function(){
            return $element.find('[data-slick-slide]').not('.ng-hide');
          }, function(){
            if(!scope.process){
              scope.process = true;
              toggle(false);
              if($element.hasClass('slick-initialized')){
                $element.slick('removeSlide', null, null, true);
                $element.slick('unslick');
              }
              $timeout(function(){

                $element.slick(options);
                $element.slick('slickUnfilter');
                $element.slick('slickFilter', ':not(.ng-hide)');
                toggle(true);
                scope.process = false;
              }, 500);
            }

          });

          //var parent = $(element).parent();
          //console.dir(parent);



        }

      };
    })

    .directive('notifier', function(){

       return {

         restrict: 'E',
         replace: true,
         scope: true,
         templateUrl: '/html/ui/ui.notifier.html',
         link: function(scope){

           var new_data = {

             header: '',
             body: ''

           };

           scope.$on('notifier:notify', function(e, data){

            scope.data = data;
            scope.show_notifier = true;
            console.log('notifier: ' + data.body);

           });

           scope.reset_notifier = function(){
             scope.data = angular.copy(new_data);
             scope.show_notifier = false;
           };

           scope.reset_notifier();

         }

       }

    })

    .directive('phoneMask', function($timeout){

      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ngModel){

          function valid_phone(value){

            return value && /^[0-9]{11}$/.test(value);

          }

          ngModel.$render = function(){

            ngModel.$setValidity('phone', valid_phone(ngModel.$modelValue));

            $(elm).unmask();
            $(elm).val(ngModel.$modelValue);
            $(elm).mask(attrs.phoneMask || '+7(000) 000-00-00',
              {
                placeholder: attrs.placeholder || "+7(___)___-__-__",
                onComplete: function(cep) {
                  ngModel.$setViewValue(cep);
                  ngModel.$setValidity('phone', true);
                  scope.$digest();
                },
                onChange: function(cep){
                  var value = (cep || '').replace(/\D/g,'');
                  if(!valid_phone(cep)){
                    ngModel.$setViewValue('');
                    ngModel.$setValidity('phone', false);
                    scope.$digest();
                  }
                },
                onInvalid: function(val, e, f, invalid, options){
                  ngModel.$setViewValue('');
                  ngModel.$setValidity('phone', false);
                  scope.$digest();
                }
              });
          };

        }
      };

    })

    .directive('maskedPhoneNumber', function(){
      return {
        restrict: 'A',
        scope: {
          phone: '=?'
        },
        link: function(scope, elm, attrs){

          scope.$watch('phone', function(new_value){

            if(new_value){
              $(elm).text(new_value);
              $(elm).unmask();
              $(elm).mask(attrs.maskedPhoneNumber || '+7(000) 000-00-00');
            }
            else {
              $(elm).text(attrs.noValue || '');
            }


          });

        }
      }
    })

    .directive('selectize', function($timeout){

      return {
        restrict: 'A',
        link: function(scope, elm){

          $timeout(function(){
            $(elm).selectize({});
          }, 0);

        }
      };

    })

    .directive('dateSelector', function($parse){

      return {
        restrict: 'A',
        require: 'ngModel',
        scope: true,
        link: function(scope, elm, attrs, ngModelCtrl){

          var years = function(startYear) {
            var currentYear = new Date().getFullYear(), years = [];
            startYear = startYear || 1980;

            while ( startYear <= currentYear ) {
              years.push(startYear++);
            }

            return years.reverse();
          };

          scope.date_data = {
            days: new Array(31),
            months: new Array(12),
            years: years(1930)
          };

          scope.selected_date = [ '', '', '' ];

          ngModelCtrl.$formatters.push(function(modelValue) {
            return modelValue ? angular.copy(modelValue).split('-').reverse() : [ '', '', '' ];
          });

          ngModelCtrl.$render = function() {
            scope.selected_date = angular.copy(ngModelCtrl.$viewValue);
          };

          ngModelCtrl.$parsers.push(function(viewValue) {

            return viewValue && angular.copy(viewValue).reverse().join('-');

          });

          ngModelCtrl.$validators.required = function(modelValue, viewValue){

            var valid = true;

            angular.forEach(viewValue, function(val){
              if(!val || val === '') valid = false;
            });

            return valid;

          };

          scope.$watchCollection('selected_date', function(){
            ngModelCtrl.$setViewValue(angular.copy(scope.selected_date));

          });


        }
      };

    });

}());

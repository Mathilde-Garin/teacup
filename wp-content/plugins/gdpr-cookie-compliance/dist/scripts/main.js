!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.postscribe=t():e.postscribe=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var r=o(1),n=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=n.default},function(e,t,o){"use strict";function r(){}function n(){var e=f.shift();if(e){var t=l.last(e);t.afterDequeue(),e.stream=i.apply(void 0,e),t.afterStreamStart()}}function i(e,t,o){function i(e){e=o.beforeWrite(e),m.write(e),o.afterWrite(e)}m=new c.default(e,o),m.id=u++,m.name=o.name||m.id,s.streams[m.name]=m;var d=e.ownerDocument,p={close:d.close,open:d.open,write:d.write,writeln:d.writeln};a(d,{close:r,open:r,write:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return i(t.join(""))},writeln:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return i(t.join("")+"\n")}});var l=m.win.onerror||r;return m.win.onerror=function(e,t,r){o.error({msg:e+" - "+t+": "+r}),l.apply(m.win,[e,t,r])},m.write(t,function(){a(d,p),m.win.onerror=l,o.done(),m=null,n()}),m}function s(e,t,o){if(l.isFunction(o))o={done:o};else if("clear"===o)return f=[],m=null,void(u=0);o=l.defaults(o,_),e=/^#/.test(e)?window.document.getElementById(e.substr(1)):e.jquery?e[0]:e;var i=[e,t,o];return e.postscribe={cancel:function(){i.stream?i.stream.abort():i[1]=r}},o.beforeEnqueue(i),f.push(i),m||n(),e.postscribe}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};t.default=s;var d=o(2),c=function(e){return e&&e.__esModule?e:{default:e}}(d),p=o(4),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(p),_={afterAsync:r,afterDequeue:r,afterStreamStart:r,afterWrite:r,autoFix:!0,beforeEnqueue:r,beforeWriteToken:function(e){return e},beforeWrite:function(e){return e},done:r,error:function(e){throw new Error(e.msg)},releaseAsync:!1},u=0,f=[],m=null;a(s,{streams:{},queue:f,WriteStream:c.default})},function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){var o=l+t,r=e.getAttribute(o);return p.existy(r)?String(r):r}function i(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=l+t;p.existy(o)&&""!==o?e.setAttribute(r,o):e.removeAttribute(r)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a=o(3),d=function(e){return e&&e.__esModule?e:{default:e}}(a),c=o(4),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(c),l="data-ps-",_="ps-style",u="ps-script",f=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.root=t,this.options=o,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new d.default("",{autoFix:o.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],i(this.proxyRoot,"proxyof",0)}return e.prototype.write=function(){var e;for((e=this.writeQueue).push.apply(e,arguments);!this.deferredRemote&&this.writeQueue.length;){var t=this.writeQueue.shift();p.isFunction(t)?this._callFunction(t):this._writeImpl(t)}},e.prototype._callFunction=function(e){var t={type:"function",value:e.name||e.toString()};this._onScriptStart(t),e.call(this.win,this.doc),this._onScriptDone(t)},e.prototype._writeImpl=function(e){this.parser.append(e);for(var t=void 0,o=void 0,r=void 0,n=[];(t=this.parser.readToken())&&!(o=p.isScript(t))&&!(r=p.isStyle(t));)(t=this.options.beforeWriteToken(t))&&n.push(t);n.length>0&&this._writeStaticTokens(n),o&&this._handleScriptToken(t),r&&this._handleStyleToken(t)},e.prototype._writeStaticTokens=function(e){var t=this._buildChunk(e);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,this._walkChunk(),t):null},e.prototype._buildChunk=function(e){for(var t=this.actuals.length,o=[],r=[],n=[],i=e.length,s=0;s<i;s++){var a=e[s],d=a.toString();if(o.push(d),a.attrs){if(!/^noscript$/i.test(a.tagName)){var c=t++;r.push(d.replace(/(\/?>)/," "+l+"id="+c+" $1")),a.attrs.id!==u&&a.attrs.id!==_&&n.push("atomicTag"===a.type?"":"<"+a.tagName+" "+l+"proxyof="+c+(a.unary?" />":">"))}}else r.push(d),n.push("endTag"===a.type?d:"")}return{tokens:e,raw:o.join(""),actual:r.join(""),proxy:n.join("")}},e.prototype._walkChunk=function(){for(var e=void 0,t=[this.proxyRoot];p.existy(e=t.shift());){var o=1===e.nodeType;if(!(o&&n(e,"proxyof"))){o&&(this.actuals[n(e,"id")]=e,i(e,"id"));var r=e.parentNode&&n(e.parentNode,"proxyof");r&&this.actuals[r].appendChild(e)}t.unshift.apply(t,p.toArray(e.childNodes))}},e.prototype._handleScriptToken=function(e){var t=this,o=this.parser.clear();o&&this.writeQueue.unshift(o),e.src=e.attrs.src||e.attrs.SRC,(e=this.options.beforeWriteToken(e))&&(e.src&&this.scriptStack.length?this.deferredRemote=e:this._onScriptStart(e),this._writeScriptToken(e,function(){t._onScriptDone(e)}))},e.prototype._handleStyleToken=function(e){var t=this.parser.clear();t&&this.writeQueue.unshift(t),e.type=e.attrs.type||e.attrs.TYPE||"text/css",e=this.options.beforeWriteToken(e),e&&this._writeStyleToken(e),t&&this.write()},e.prototype._writeStyleToken=function(e){var t=this._buildStyle(e);this._insertCursor(t,_),e.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=e.content:t.appendChild(this.doc.createTextNode(e.content)))},e.prototype._buildStyle=function(e){var t=this.doc.createElement(e.tagName);return t.setAttribute("type",e.type),p.eachKey(e.attrs,function(e,o){t.setAttribute(e,o)}),t},e.prototype._insertCursor=function(e,t){this._writeImpl('<span id="'+t+'"/>');var o=this.doc.getElementById(t);o&&o.parentNode.replaceChild(e,o)},e.prototype._onScriptStart=function(e){e.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(e)},e.prototype._onScriptDone=function(e){return e!==this.scriptStack[0]?void this.options.error({msg:"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,e.outerWrites),void(!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)))},e.prototype._writeScriptToken=function(e,t){var o=this._buildScript(e),r=this._shouldRelease(o),n=this.options.afterAsync;e.src&&(o.src=e.src,this._scriptLoadHandler(o,r?n:function(){t(),n()}));try{this._insertCursor(o,u),o.src&&!r||t()}catch(e){this.options.error(e),t()}},e.prototype._buildScript=function(e){var t=this.doc.createElement(e.tagName);return p.eachKey(e.attrs,function(e,o){t.setAttribute(e,o)}),e.content&&(t.text=e.content),t},e.prototype._scriptLoadHandler=function(e,t){function o(){e=e.onload=e.onreadystatechange=e.onerror=null}function r(){o(),null!=t&&t(),t=null}function n(e){o(),a(e),null!=t&&t(),t=null}function i(e,t){var o=e["on"+t];null!=o&&(e["_on"+t]=o)}var a=this.options.error;i(e,"load"),i(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){n({msg:"onload handler failed "+t+" @ "+e.src})}r()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void n({msg:"onerror handler failed "+t+" @ "+e.src})}n({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&r()}})},e.prototype._shouldRelease=function(e){return!/^script$/i.test(e.nodeName)||!!(this.options.releaseAsync&&e.src&&e.hasAttribute("async"))},e}();t.default=f},function(e,t,o){!function(t,o){e.exports=function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var r=o(1),n=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=n.default},function(e,t,o){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var i=o(2),s=r(i),a=o(3),d=r(a),c=o(6),p=function(e){return e&&e.__esModule?e:{default:e}}(c),l=o(5),_={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},u=function(){function e(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this.stream=o;var i=!1,a={};for(var d in s)s.hasOwnProperty(d)&&(r.autoFix&&(a[d+"Fix"]=!0),i=i||a[d+"Fix"]);i?(this._readToken=(0,p.default)(this,a,function(){return t._readTokenImpl()}),this._peekToken=(0,p.default)(this,a,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return e.prototype.append=function(e){this.stream+=e},e.prototype.prepend=function(e){this.stream=e+this.stream},e.prototype._readTokenImpl=function(){var e=this._peekTokenImpl();if(e)return this.stream=this.stream.slice(e.length),e},e.prototype._peekTokenImpl=function(){for(var e in _)if(_.hasOwnProperty(e)&&_[e].test(this.stream)){var t=d[e](this.stream);if(t)return"startTag"===t.type&&/script|style/i.test(t.tagName)?null:(t.text=this.stream.substr(0,t.length),t)}},e.prototype.peekToken=function(){return this._peekToken()},e.prototype.readToken=function(){return this._readToken()},e.prototype.readTokens=function(e){for(var t=void 0;t=this.readToken();)if(e[t.type]&&!1===e[t.type](t))return},e.prototype.clear=function(){var e=this.stream;return this.stream="",e},e.prototype.rest=function(){return this.stream},e}();t.default=u,u.tokenToString=function(e){return e.toString()},u.escapeAttributes=function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=(0,l.escapeQuotes)(e[o],null));return t},u.supports=s;for(var f in s)s.hasOwnProperty(f)&&(u.browserHasFlaw=u.browserHasFlaw||!s[f]&&f)},function(e,t){"use strict";t.__esModule=!0;var o=!1,r=!1,n=window.document.createElement("div");try{var i="<P><I></P></I>";n.innerHTML=i,t.tagSoup=o=n.innerHTML!==i}catch(e){t.tagSoup=o=!1}try{n.innerHTML="<P><i><P></P></i></P>",t.selfClose=r=2===n.childNodes.length}catch(e){t.selfClose=r=!1}n=null,t.tagSoup=o,t.selfClose=r},function(e,t,o){"use strict";function r(e){var t=e.indexOf("--\x3e");if(t>=0)return new c.CommentToken(e.substr(4,t-1),t+3)}function n(e){var t=e.indexOf("<");return new c.CharsToken(t>=0?t:e.length)}function i(e){if(-1!==e.indexOf(">")){var t=e.match(p.startTag);if(t){var o=function(){var e={},o={},r=t[2];return t[2].replace(p.attr,function(t,n){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(e[arguments[5]]="",o[arguments[5]]=!0):e[n]=arguments[2]||arguments[3]||arguments[4]||p.fillAttr.test(n)&&n||"":e[n]="",r=r.replace(t,"")}),{v:new c.StartTagToken(t[1],t[0].length,e,o,!!t[3],r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if("object"===(void 0===o?"undefined":d(o)))return o.v}}}function s(e){var t=i(e);if(t){var o=e.slice(t.length);if(o.match(new RegExp("</\\s*"+t.tagName+"\\s*>","i"))){var r=o.match(new RegExp("([\\s\\S]*?)</\\s*"+t.tagName+"\\s*>","i"));if(r)return new c.AtomicTagToken(t.tagName,r[0].length+t.length,t.attrs,t.booleanAttrs,r[1])}}}function a(e){var t=e.match(p.endTag);if(t)return new c.EndTagToken(t[1],t[0].length)}t.__esModule=!0;var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.comment=r,t.chars=n,t.startTag=i,t.atomicTag=s,t.endTag=a;var c=o(4),p={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i}},function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0,t.EndTagToken=t.AtomicTagToken=t.StartTagToken=t.TagToken=t.CharsToken=t.CommentToken=t.Token=void 0;var n=o(5),i=(t.Token=function e(t,o){r(this,e),this.type=t,this.length=o,this.text=""},t.CommentToken=function(){function e(t,o){r(this,e),this.type="comment",this.length=o||(t?t.length:0),this.text="",this.content=t}return e.prototype.toString=function(){return"\x3c!--"+this.content},e}(),t.CharsToken=function(){function e(t){r(this,e),this.type="chars",this.length=t,this.text=""}return e.prototype.toString=function(){return this.text},e}(),t.TagToken=function(){function e(t,o,n,i,s){r(this,e),this.type=t,this.length=n,this.text="",this.tagName=o,this.attrs=i,this.booleanAttrs=s,this.unary=!1,this.html5Unary=!1}return e.formatTag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o="<"+e.tagName;for(var r in e.attrs)if(e.attrs.hasOwnProperty(r)){o+=" "+r;var i=e.attrs[r];void 0!==e.booleanAttrs&&void 0!==e.booleanAttrs[r]||(o+='="'+(0,n.escapeQuotes)(i)+'"')}return e.rest&&(o+=" "+e.rest),o+=e.unary&&!e.html5Unary?"/>":">",void 0!==t&&null!==t&&(o+=t+"</"+e.tagName+">"),o},e}());t.StartTagToken=function(){function e(t,o,n,i,s,a){r(this,e),this.type="startTag",this.length=o,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=i,this.html5Unary=!1,this.unary=s,this.rest=a}return e.prototype.toString=function(){return i.formatTag(this)},e}(),t.AtomicTagToken=function(){function e(t,o,n,i,s){r(this,e),this.type="atomicTag",this.length=o,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=s}return e.prototype.toString=function(){return i.formatTag(this,this.content)},e}(),t.EndTagToken=function(){function e(t,o){r(this,e),this.type="endTag",this.length=o,this.text="",this.tagName=t}return e.prototype.toString=function(){return"</"+this.tagName+">"},e}()},function(e,t){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?e.replace(/([^"]*)"/g,function(e,t){return/\\/.test(t)?t+'"':t+'\\"'}):t}t.__esModule=!0,t.escapeQuotes=o},function(e,t){"use strict";function o(e){return e&&"startTag"===e.type&&(e.unary=a.test(e.tagName)||e.unary,e.html5Unary=!/\/>$/.test(e.text)),e}function r(e,t){var r=e.stream,n=o(t());return e.stream=r,n}function n(e,t){var o=t.pop();e.prepend("</"+o.tagName+">")}function i(){var e=[];return e.last=function(){return this[this.length-1]},e.lastTagNameEq=function(e){var t=this.last();return t&&t.tagName&&t.tagName.toUpperCase()===e.toUpperCase()},e.containsTagName=function(e){for(var t,o=0;t=this[o];o++)if(t.tagName===e)return!0;return!1},e}function s(e,t,s){function a(){var t=r(e,s);t&&p[t.type]&&p[t.type](t)}var c=i(),p={startTag:function(o){var r=o.tagName;"TR"===r.toUpperCase()&&c.lastTagNameEq("TABLE")?(e.prepend("<TBODY>"),a()):t.selfCloseFix&&d.test(r)&&c.containsTagName(r)?c.lastTagNameEq(r)?n(e,c):(e.prepend("</"+o.tagName+">"),a()):o.unary||c.push(o)},endTag:function(o){c.last()?t.tagSoupFix&&!c.lastTagNameEq(o.tagName)?n(e,c):c.pop():t.tagSoupFix&&(s(),a())}};return function(){return a(),o(s())}}t.__esModule=!0,t.default=s;var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,d=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i}])}()}()},function(e,t){"use strict";function o(e){return void 0!==e&&null!==e}function r(e){return"function"==typeof e}function n(e,t,o){var r=void 0,n=e&&e.length||0;for(r=0;r<n;r++)t.call(o,e[r],r)}function i(e,t,o){for(var r in e)e.hasOwnProperty(r)&&t.call(o,r,e[r])}function s(e,t){return e=e||{},i(t,function(t,r){o(e[t])||(e[t]=r)}),e}function a(e){try{return Array.prototype.slice.call(e)}catch(o){var t=function(){var t=[];return n(e,function(e){t.push(e)}),{v:t}}();if("object"===(void 0===t?"undefined":_(t)))return t.v}}function d(e){return e[e.length-1]}function c(e,t){return!(!e||"startTag"!==e.type&&"atomicTag"!==e.type||!("tagName"in e)||!~e.tagName.toLowerCase().indexOf(t))}function p(e){return c(e,"script")}function l(e){return c(e,"style")}t.__esModule=!0;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.existy=o,t.isFunction=r,t.each=n,t.eachKey=i,t.defaults=s,t.toArray=a,t.last=d,t.isTag=c,t.isScript=p,t.isStyle=l}])}),function(e){var t={common:{init:function(){"use strict";function t(e){}function o(){e.post(moove_frontend_gdpr_scripts.ajaxurl,{action:"moove_gdpr_get_scripts",strict:0,thirdparty:0,advanced:0},function(e){})}function r(e,t){try{jQuery().gdpr_cookie_compliance_analytics(e,t)}catch(e){}}function n(e){try{jQuery().gdpr_cookie_compliance_consent_log(e)}catch(e){}}function i(){var e=u("moove_gdpr_popup"),t={};return t.strict="0",t.thirdparty="0",t.advanced="0",e&&(e=JSON.parse(e),t.strict=e.strict,t.thirdparty=e.thirdparty,t.advanced=e.advanced,c(t),r("script_inject",e)),void 0!==moove_frontend_gdpr_scripts.ifbc?("strict"===moove_frontend_gdpr_scripts.ifbc&&e&&1===parseInt(e.strict)&&s(),"thirdparty"===moove_frontend_gdpr_scripts.ifbc&&e&&1===parseInt(e.thirdparty)&&s(),"advanced"===moove_frontend_gdpr_scripts.ifbc&&e&&1===parseInt(e.advanced)&&s()):"1"!==moove_frontend_gdpr_scripts.strict_init&&s(),t}function s(){e(document).find("iframe[data-gdpr-iframesrc]").each(function(){e(this).attr("src",e(this).attr("data-gdpr-iframesrc"))})}function a(e){_("moove_gdpr_popup",JSON.stringify({strict:"1",thirdparty:"1",advanced:"1"}),g),d("enabled-all"),r("accept_all","")}function d(o){var r=!1;try{void 0!==moove_frontend_gdpr_scripts.force_reload&&"true"===moove_frontend_gdpr_scripts.force_reload&&(r=!0)}catch(e){}var n=i(),s=moove_frontend_gdpr_scripts.enabled_default.third_party,a=moove_frontend_gdpr_scripts.enabled_default.advanced;if(document.cookie.indexOf("moove_gdpr_popup")>=0||1==s||1==a){u("moove_gdpr_popup");1==s&&(b.strict=1,b.thirdparty=s),1==a&&(b.strict=1,b.advanced=a),b&&(parseInt(n.strict)-parseInt(b.strict)<0&&(r=!0),parseInt(n.thirdparty)-parseInt(b.thirdparty)<0&&(r=!0),parseInt(n.advanced)-parseInt(b.advanced)<0&&(r=!0))}if(r)location.reload(!0);else{var d=u("moove_gdpr_popup");t("dbg - inject - 4"),f(d),p(),e("#moove_gdpr_save_popup_settings_button").show()}}function c(t){t&&(1===parseInt(t.strict)?e("#moove_gdpr_strict_cookies").is(":checked")||(e("#moove_gdpr_strict_cookies").click(),e("#third_party_cookies fieldset").removeClass("fl-disabled"),e("#moove_gdpr_performance_cookies").prop("disabled",!1),e("#third_party_cookies .moove-gdpr-strict-secondary-warning-message").slideUp(),e("#advanced-cookies fieldset").removeClass("fl-disabled"),e("#advanced-cookies .moove-gdpr-strict-secondary-warning-message").slideUp(),e("#moove_gdpr_advanced_cookies").prop("disabled",!1)):e("#moove_gdpr_strict_cookies").is(":checked")&&(e("#moove_gdpr_strict_cookies").click().prop("checked",!0),e("#third_party_cookies fieldset").addClass("fl-disabled").closest(".moove-gdpr-status-bar").removeClass("checkbox-selected"),e("#moove_gdpr_performance_cookies").prop("disabled",!0).prop("checked",!1),e("#advanced-cookies fieldset").addClass("fl-disabled").closest(".moove-gdpr-status-bar").removeClass("checkbox-selected"),e("#moove_gdpr_advanced_cookies").prop("disabled",!0).prop("checked",!1)),1===parseInt(t.thirdparty)?e("#moove_gdpr_performance_cookies").is(":checked")||e("#moove_gdpr_performance_cookies").click():e("#moove_gdpr_performance_cookies").is(":checked")&&e("#moove_gdpr_performance_cookies").click(),1===parseInt(t.advanced)?e("#moove_gdpr_advanced_cookies").is(":checked")||e("#moove_gdpr_advanced_cookies").click():e("#moove_gdpr_advanced_cookies").is(":checked")&&e("#moove_gdpr_advanced_cookies").click(),e('input[data-name="moove_gdpr_performance_cookies"]').prop("checked",e("#moove_gdpr_performance_cookies").is(":checked")),e('input[data-name="moove_gdpr_strict_cookies"]').prop("checked",e("#moove_gdpr_strict_cookies").is(":checked")),e('input[data-name="moove_gdpr_advanced_cookies"]').prop("checked",e("#moove_gdpr_advanced_cookies").is(":checked")))}function p(){e("#moove_gdpr_cookie_info_bar").length>0&&(e("#moove_gdpr_cookie_info_bar").addClass("moove-gdpr-info-bar-hidden"),e("body").removeClass("gdpr-infobar-visible"))}function l(){if(void 0!==moove_frontend_gdpr_scripts.display_cookie_banner){if("true"===moove_frontend_gdpr_scripts.display_cookie_banner)e("#moove_gdpr_cookie_info_bar").length>0&&(e("#moove_gdpr_cookie_info_bar").removeClass("moove-gdpr-info-bar-hidden"),e("#moove_gdpr_save_popup_settings_button:not(.button-visible)").hide(),e("body").addClass("gdpr-infobar-visible"),r("show_infobar",""));else if(e("#moove_gdpr_cookie_info_bar").length>0){e("#moove_gdpr_cookie_info_bar").addClass("moove-gdpr-info-bar-hidden"),e("body").removeClass("gdpr-infobar-visible");var o={strict:1,thirdparty:1,advanced:1};t("dbg - inject - 5"),f(JSON.stringify(o))}}else e("#moove_gdpr_cookie_info_bar").length>0&&(e("#moove_gdpr_cookie_info_bar").removeClass("moove-gdpr-info-bar-hidden"),e("#moove_gdpr_save_popup_settings_button:not(.button-visible)").hide(),e("body").addClass("gdpr-infobar-visible"),r("show_infobar",""))}function _(e,t,o){var r;if(o>0){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3),r="; expires="+i.toGMTString()}else r="";var s="SameSite=Lax";void 0!==moove_frontend_gdpr_scripts.cookie_attributes&&(s=moove_frontend_gdpr_scripts.cookie_attributes),void 0!==moove_frontend_gdpr_scripts.gdpr_consent_version&&(t=JSON.parse(t),t.version=moove_frontend_gdpr_scripts.gdpr_consent_version,t=JSON.stringify(t)),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+"; path=/; "+s,JSON.parse(t),n(t)}function u(e){for(var t=encodeURIComponent(e)+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var n=o[r];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t)){var i=decodeURIComponent(n.substring(t.length,n.length)),s=JSON.parse(i);if(void 0!==s.version){if(void 0!==moove_frontend_gdpr_scripts.gdpr_consent_version){var a=moove_frontend_gdpr_scripts.gdpr_consent_version;if(parseFloat(a)>parseFloat(s.version))return document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",null}}else if(void 0!==moove_frontend_gdpr_scripts.gdpr_consent_version&&parseFloat(moove_frontend_gdpr_scripts.gdpr_consent_version)>1)return document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",null;return i}}return null}function f(t){if(b=i(),t){var n=t;t=JSON.parse(t);i();if(!1!==k){var a=JSON.parse(k);1===parseInt(a.thirdparty)&&1===parseInt(t.thirdparty)&&(t.thirdparty="0"),1===parseInt(a.advanced)&&1===parseInt(t.advanced)&&(t.advanced="0")}if(r("script_inject",t),T=!0,void 0!==moove_frontend_gdpr_scripts.ifbc?("strict"===moove_frontend_gdpr_scripts.ifbc&&t&&1===parseInt(t.strict)&&s(),"thirdparty"===moove_frontend_gdpr_scripts.ifbc&&t&&1===parseInt(t.thirdparty)&&s(),"advanced"===moove_frontend_gdpr_scripts.ifbc&&t&&1===parseInt(t.advanced)&&s()):1===parseInt(t.strict)&&s(),void 0!==moove_frontend_gdpr_scripts.scripts_defined)try{var d=JSON.parse(moove_frontend_gdpr_scripts.scripts_defined);if(1===parseInt(t.strict))1===parseInt(t.thirdparty)&&void 0===y.thirdparty&&(d.thirdparty.header&&postscribe(document.head,d.thirdparty.header),d.thirdparty.body&&e(d.thirdparty.body).prependTo(document.body),d.thirdparty.footer&&postscribe(document.body,d.thirdparty.footer),y.thirdparty=!0),1===parseInt(t.advanced)&&void 0===y.advanced&&(d.advanced.header&&postscribe(document.head,d.advanced.header),d.advanced.body&&e(d.advanced.body).prependTo(document.body),d.advanced.footer&&postscribe(document.body,d.advanced.footer),y.advanced=!0);else{var t=u("moove_gdpr_popup");t&&(v(),o())}}catch(e){console.error(e)}else void 0!==y.thirdparty&&void 0!==y.advanced||(1===t.thirdparty&&(y.thirdparty=!0),1===t.advanced&&(y.advanced=!0),e.post(moove_frontend_gdpr_scripts.ajaxurl,{action:"moove_gdpr_get_scripts",strict:t.strict,thirdparty:t.thirdparty,advanced:t.advanced},function(t){k=n;var o=JSON.parse(t);o.header&&postscribe(document.head,o.header),o.body&&e(o.body).prependTo(document.body),o.footer&&postscribe(document.body,o.footer)}))}else l()}function m(){var t=!1;e(document).find("#moove_gdpr_cookie_modal input[type=checkbox]").each(function(){e(this).is(":checked")&&(t=!0)}),t?(e(".moove-gdpr-button-holder .moove-gdpr-modal-allow-all").hide().removeClass("button-visible"),e(".moove-gdpr-button-holder .moove-gdpr-modal-save-settings").show().addClass("button-visible")):e(".moove-gdpr-button-holder .moove-gdpr-modal-save-settings").is(":visible")?e(".moove-gdpr-button-holder .moove-gdpr-modal-allow-all").hide().removeClass("button-visible"):e(".moove-gdpr-button-holder .moove-gdpr-modal-allow-all").show().addClass("button-visible")}function v(){for(var e=document.cookie.split("; "),t=0;t<e.length;t++)for(var o=window.location.hostname.split(".");o.length>0;){var r=encodeURIComponent(e[t].split(";")[0].split("=")[0])+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain="+o.join(".")+" ; path=",n=location.pathname.split("/");for(document.cookie=r+"/";n.length>0;)document.cookie=r+n.join("/"),n.pop();o.shift()}"undefined"!=typeof sessionStorage&&sessionStorage.removeItem("gdpr_session")}function h(){var t=u("moove_gdpr_popup");v();var o="0",r="0",n="0",i=!1;t&&(t=JSON.parse(t),o=t.strict,r=t.advanced,n=t.thirdparty),e("#moove_gdpr_strict_cookies").length>0?e("#moove_gdpr_strict_cookies").is(":checked")?(o="1",i=!0):o="0":(i=!0,o="1"),e("#moove_gdpr_performance_cookies").is(":checked")?(n="1",i=!0):n="0",e("#moove_gdpr_advanced_cookies").is(":checked")?(r="1",i=!0):r="0",!t&&i?(_("moove_gdpr_popup",JSON.stringify({strict:o,thirdparty:n,advanced:r}),g),p(),e("#moove_gdpr_save_popup_settings_button").show()):t&&_("moove_gdpr_popup",JSON.stringify({strict:o,thirdparty:n,advanced:r}),g);var t=u("moove_gdpr_popup");t&&(t=JSON.parse(t),"0"==t.strict&&"0"==t.advanced&&"0"==t.thirdparty&&v())}var g=365,y=[];void 0!==moove_frontend_gdpr_scripts.cookie_expiration&&(g=moove_frontend_gdpr_scripts.cookie_expiration),e(document).on("click","#moove_gdpr_cookie_info_bar .moove-gdpr-infobar-reject-btn",function(t){t.preventDefault(),_("moove_gdpr_popup",JSON.stringify({strict:"1",thirdparty:"0",advanced:"0"}),g),e("#moove_gdpr_cookie_info_bar").length>0&&(e("#moove_gdpr_cookie_info_bar").addClass("moove-gdpr-info-bar-hidden"),e("body").removeClass("gdpr-infobar-visible"),location.reload(!0))}),e.fn.moove_gdpr_read_cookies=function(e){var t=u("moove_gdpr_popup"),o={};return o.strict="0",o.thirdparty="0",o.advanced="0",t&&(t=JSON.parse(t),o.strict=t.strict,o.thirdparty=t.thirdparty,o.advanced=t.advanced),o};var b=i(),k=!1,T=!1;if(e.fn.moove_gdpr_save_cookie=function(t){var n=u("moove_gdpr_popup"),i=e(window).scrollTop();if(!n){if(t.thirdParty)var a="1";else var a="0";if(t.advanced)var d="1";else var d="0";if(t.scrollEnable){var p=t.scrollEnable;e(window).scroll(function(){!T&&e(this).scrollTop()-i>p&&("undefined"===t.thirdparty&&"undefined"===t.advanced||(_("moove_gdpr_popup",JSON.stringify({strict:"1",thirdparty:a,advanced:d}),g),n=JSON.parse(n),c(n)))})}else"undefined"===t.thirdparty&&"undefined"===t.advanced||(_("moove_gdpr_popup",JSON.stringify({strict:"1",thirdparty:a,advanced:d}),g),n=JSON.parse(n),c(n));if(n=u("moove_gdpr_popup"))if(n=JSON.parse(n),r("script_inject",n),T=!0,void 0!==moove_frontend_gdpr_scripts.ifbc?("strict"===moove_frontend_gdpr_scripts.ifbc&&n&&1===parseInt(n.strict)&&s(),"thirdparty"===moove_frontend_gdpr_scripts.ifbc&&n&&1===parseInt(n.thirdparty)&&s(),"advanced"===moove_frontend_gdpr_scripts.ifbc&&n&&1===parseInt(n.advanced)&&s()):1===parseInt(n.strict)&&s(),void 0!==moove_frontend_gdpr_scripts.scripts_defined)try{var l=JSON.parse(moove_frontend_gdpr_scripts.scripts_defined);if(1===parseInt(n.strict))1===parseInt(n.thirdparty)&&void 0===y.thirdparty&&(l.thirdparty.header&&postscribe(document.head,l.thirdparty.header),l.thirdparty.body&&e(l.thirdparty.body).prependTo(document.body),l.thirdparty.footer&&postscribe(document.body,l.thirdparty.footer),y.thirdparty=!0),1===parseInt(n.advanced)&&void 0===y.advanced&&(l.advanced.header&&postscribe(document.head,l.advanced.header),l.advanced.body&&e(l.advanced.body).prependTo(document.body),l.advanced.footer&&postscribe(document.body,l.advanced.footer),y.advanced=!0);else{var n=u("moove_gdpr_popup");n&&(v(),o())}}catch(e){console.error(e)}else void 0!==y.thirdparty&&void 0!==y.advanced||(1===n.thirdparty&&(y.thirdparty=!0),1===n.advanced&&(y.advanced=!0),e.post(moove_frontend_gdpr_scripts.ajaxurl,{action:"moove_gdpr_get_scripts",strict:n.strict,thirdparty:n.thirdparty,advanced:n.advanced},function(t){k=cookie_input;var o=JSON.parse(t);o.header&&postscribe(document.head,o.header),o.body&&e(o.body).prependTo(document.body),o.footer&&postscribe(document.body,o.footer)}))}},"undefined"==typeof lity&&"true"===moove_frontend_gdpr_scripts.load_lity){var w=moove_frontend_gdpr_scripts.plugin_dir+"/dist/scripts/lity.js",S=moove_frontend_gdpr_scripts.plugin_dir+"/dist/styles/lity.css";postscribe(document.body,'<script src="'+w+'"><\/script>'),postscribe(document.head,'<link href="'+S+'" rel="stylesheet">')}var x="",N=!1;if(window.location.hash){var C=window.location.hash.substring(1);"moove_gdpr_cookie_modal"===C&&(N=!0,r("opened_modal_from_link",""),setTimeout(function(){e("#moove_gdpr_cookie_modal").length>0&&(x=lity("#moove_gdpr_cookie_modal"),e(".lity").addClass("moove_gdpr_cookie_modal_open"),e(document).moove_lity_open())},500))}if(window.location.hash){var C=window.location.hash.substring(1);"gdpr_cookie_modal"===C&&(N=!0,r("opened_modal_from_link",""),setTimeout(function(){e("#moove_gdpr_cookie_modal").length>0&&(x=lity("#moove_gdpr_cookie_modal"),e(".lity").addClass("moove_gdpr_cookie_modal_open"),e(document).moove_lity_open())},500))}!function(){var o=(location.pathname,e(window).scrollTop());e("#moove_gdpr_save_popup_settings_button").show();var r=moove_frontend_gdpr_scripts.enabled_default.third_party,n=moove_frontend_gdpr_scripts.enabled_default.advanced;if(void 0!==moove_frontend_gdpr_scripts.enable_on_scroll&&"true"===moove_frontend_gdpr_scripts.enable_on_scroll&&1!==parseInt(r)&&1!==parseInt(n)&&(r=1,n=1),document.cookie.indexOf("moove_gdpr_popup")>=0||1==r||1==n){var s=u("moove_gdpr_popup");if(s){var a=i();"0"==a.strict&&"0"==a.advanced&&"0"==a.thirdparty&&(v(),l())}else{var d=!1;if("undefined"!=typeof sessionStorage&&(d=sessionStorage.getItem("gdpr_session")),void 0!==moove_frontend_gdpr_scripts.enable_on_scroll&&"true"===moove_frontend_gdpr_scripts.enable_on_scroll){if(d)try{c(JSON.parse(d)),T=!0,t("dbg - inject - 1"),f(d),_("moove_gdpr_popup",d,g),p()}catch(e){}else if(void 0!==moove_frontend_gdpr_scripts.gdpr_aos_hide&&"1"===moove_frontend_gdpr_scripts.gdpr_aos_hide&&e(window).scroll(function(){if(!T&&e(this).scrollTop()-o>200){s={strict:1,thirdparty:r,advanced:n},u("moove_gdpr_popup")||"undefined"!=typeof sessionStorage&&((d=sessionStorage.getItem("gdpr_session"))||(sessionStorage.setItem("gdpr_session",JSON.stringify(s)),
d=sessionStorage.getItem("gdpr_session")));try{c(s),s=JSON.stringify(s),l(),T=!0,t("dbg - inject - 2"),f(s),_("moove_gdpr_popup",s,g),p()}catch(e){}}}),void 0!==moove_frontend_gdpr_scripts.gdpr_aos_hide&&"2"===moove_frontend_gdpr_scripts.gdpr_aos_hide){var m=30;if(void 0!==moove_frontend_gdpr_scripts.gdpr_aos_hide_seconds)var m=moove_frontend_gdpr_scripts.gdpr_aos_hide_seconds;setTimeout(function(){if(!T&&e(this).scrollTop()-o>200){s={strict:1,thirdparty:r,advanced:n},u("moove_gdpr_popup")||"undefined"!=typeof sessionStorage&&((d=sessionStorage.getItem("gdpr_session"))||(sessionStorage.setItem("gdpr_session",JSON.stringify(s)),d=sessionStorage.getItem("gdpr_session")));try{c(s),s=JSON.stringify(s),l(),T=!0,t("dbg - inject - 2"),f(s),_("moove_gdpr_popup",s,g),p()}catch(e){}}},1e3*m)}}else s={strict:1,thirdparty:r,advanced:n},c(s),s=JSON.stringify(s),l()}t("dbg - inject - 3"),f(s)}else l()}(),e(document).on("click",'[data-href*="#moove_gdpr_cookie_modal"],[href*="#moove_gdpr_cookie_modal"]',function(t){t.preventDefault(),e("#moove_gdpr_cookie_modal").length>0&&(N=!0,x=lity("#moove_gdpr_cookie_modal"),e(".lity").addClass("moove_gdpr_cookie_modal_open"),e(document).moove_lity_open(),r("opened_modal_from_link",""))}),e(document).on("click",'[data-href*="#gdpr_cookie_modal"],[href*="#gdpr_cookie_modal"]',function(t){t.preventDefault(),e("#moove_gdpr_cookie_modal").length>0&&(N=!0,x=lity("#moove_gdpr_cookie_modal"),e(".lity").addClass("moove_gdpr_cookie_modal_open"),e(document).moove_lity_open(),r("opened_modal_from_link",""))}),e(document).on("click","#moove_gdpr_cookie_info_bar .moove-gdpr-close-modal-button a, #moove_gdpr_cookie_info_bar .moove-gdpr-close-modal-button button",function(e){e.preventDefault()}),e(document).on("click",".moove-gdpr-modal-close",function(t){t.preventDefault(),e(".lity .lity-close").click(),e(document).moove_lity_close()}),e(document).on("click","#moove-gdpr-menu .moove-gdpr-tab-nav",function(t){t.preventDefault(),t.stopPropagation(),e("#moove-gdpr-menu li").removeClass("menu-item-selected"),e(this).parent().addClass("menu-item-selected"),e(".moove-gdpr-tab-content .moove-gdpr-tab-main").hide(),e(e(this).attr("href")).show(),e(e(this).attr("data-href")).show(),r("clicked_to_tab",e(this).attr("data-href"))}),e(document).on("lity:close",function(t,o){e(document).moove_lity_close()}),e.fn.moove_lity_close=function(t){N&&(e("body").removeClass("moove_gdpr_overflow"),N=!1)},e.fn.moove_lity_open=function(t){if(N){e("body").addClass("moove_gdpr_overflow");var o=u("moove_gdpr_popup");e(".moove-gdpr-status-bar input[type=checkbox]").each(function(){e(this).is(":checked")?e(this).closest(".moove-gdpr-tab-main").find(".moove-gdpr-strict-warning-message").slideUp():e(this).closest(".moove-gdpr-tab-main").find(".moove-gdpr-strict-warning-message").slideDown()}),o&&(o=JSON.parse(o),c(o)),e(".moove-gdpr-modal-save-settings").hide().removeClass("button-visible"),m()}},e(document).on("lity:open",function(t,o){e(document).moove_lity_open()}),e(document).on("click",".fl-disabled",function(t){e("#moove_gdpr_cookie_modal .moove-gdpr-modal-content").is(".moove_gdpr_modal_theme_v2")?(e("#moove_gdpr_strict_cookies").click(),e(this).click()):e(this).closest(".moove-gdpr-tab-main-content").find(".moove-gdpr-strict-secondary-warning-message").slideDown()}),e(document).on("change",".moove-gdpr-status-bar input[type=checkbox]",function(t){e(".moove-gdpr-modal-save-settings").show().addClass("button-visible"),e(".moove-gdpr-modal-allow-all").hide().removeClass("button-visible");var o=e(this).closest(".moove-gdpr-tab-main").attr("id");e(this).closest(".moove-gdpr-status-bar").toggleClass("checkbox-selected"),e(this).closest(".moove-gdpr-tab-main").toggleClass("checkbox-selected"),e("#moove-gdpr-menu .menu-item-"+o).toggleClass("menu-item-off"),e(this).is(":checked")?e(this).closest(".moove-gdpr-tab-main").find(".moove-gdpr-strict-warning-message").slideUp():e(this).closest(".moove-gdpr-tab-main").find(".moove-gdpr-strict-warning-message").slideDown(),e(this).is("#moove_gdpr_strict_cookies")&&(e(this).is(":checked")?(e("#third_party_cookies fieldset").removeClass("fl-disabled"),e("#moove_gdpr_performance_cookies").prop("disabled",!1),e("#third_party_cookies .moove-gdpr-strict-secondary-warning-message").slideUp(),e("#advanced-cookies fieldset").removeClass("fl-disabled"),e("#advanced-cookies .moove-gdpr-strict-secondary-warning-message").slideUp(),e("#moove_gdpr_advanced_cookies").prop("disabled",!1)):(e(".gdpr_cookie_settings_shortcode_content").find("input").each(function(){e(this).prop("checked",!1)}),e("#third_party_cookies fieldset").addClass("fl-disabled").closest(".moove-gdpr-status-bar").removeClass("checkbox-selected"),e("#moove_gdpr_performance_cookies").prop("disabled",!0).prop("checked",!1),e("#advanced-cookies fieldset").addClass("fl-disabled").closest(".moove-gdpr-status-bar").removeClass("checkbox-selected"),e("#moove_gdpr_advanced_cookies").prop("disabled",!0).prop("checked",!1))),e('input[data-name="'+e(this).attr("name")+'"]').prop("checked",e(this).is(":checked")),m()}),e(document).on("click",".gdpr_cookie_settings_shortcode_content a.gdpr-shr-save-settings",function(t){t.preventDefault(),h(),e(".lity .lity-close").click(),e(document).moove_lity_close(),d("modal-save-settings")}),e(document).on("change",".gdpr_cookie_settings_shortcode_content input[type=checkbox]",function(t){var o=e(this).attr("data-name"),r=e("#"+o);e(this).is(":checked")?(e('input[data-name="'+o+'"]').prop("checked",!0),"moove_gdpr_strict_cookies"!==e(this).attr("data-name")&&(e(this).closest(".gdpr_cookie_settings_shortcode_content").find('input[data-name="moove_gdpr_strict_cookies"]').is(":checked")||(e('input[data-name="'+o+'"]').prop("checked",!1),e('.gdpr_cookie_settings_shortcode_content input[data-name="moove_gdpr_strict_cookies"]').closest(".gdpr-shr-switch").css("transform","scale(1.2)"),setTimeout(function(){e('.gdpr_cookie_settings_shortcode_content input[data-name="moove_gdpr_strict_cookies"]').closest(".gdpr-shr-switch").css("transform","scale(1)")},300)))):(e('input[data-name="'+o+'"]').prop("checked",e(this).is(":checked")),"moove_gdpr_strict_cookies"===e(this).attr("data-name")&&e(".gdpr_cookie_settings_shortcode_content").find('input[type="checkbox"]').prop("checked",!1)),r.click()}),e(document).on("click",".moove-gdpr-modal-allow-all",function(t){t.preventDefault(),e("#moove_gdpr_cookie_modal").find("input[type=checkbox]").each(function(){var t=e(this);t.is(":checked")||t.click()}),a("enable_all enable-all-button"),e(".lity .lity-close").click(),p(),h(),e(document).moove_lity_close()}),e(document).on("click",".moove-gdpr-infobar-allow-all",function(e){e.preventDefault(),a("enable_all allow-btn")}),e(document).on("click",".moove-gdpr-modal-save-settings",function(t){t.preventDefault(),h(),e(".lity .lity-close").click(),e(document).moove_lity_close(),d("modal-save-settings")})},finalize:function(){}}},o={fire:function(e,o,r){var n,i=t;o=void 0===o?"init":o,n=""!==e,n=n&&i[e],(n=n&&"function"==typeof i[e][o])&&i[e][o](r)},loadEvents:function(){var t=!1;void 0!==moove_frontend_gdpr_scripts.geo_location&&"true"===moove_frontend_gdpr_scripts.geo_location?jQuery.post(moove_frontend_gdpr_scripts.ajaxurl,{action:"moove_gdpr_localize_scripts"},function(e){var r=JSON.parse(e);void 0!==r.display_cookie_banner&&(moove_frontend_gdpr_scripts.display_cookie_banner=r.display_cookie_banner),void 0!==r.enabled_default&&(moove_frontend_gdpr_scripts.enabled_default=r.enabled_default),t||(t=!0,o.fire("common"))}):o.fire("common"),e.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(e,t){o.fire(t),o.fire(t,"finalize")}),o.fire("common","finalize")}};e(document).ready(o.loadEvents)}(jQuery);
"use strict";((t,e)=>{if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var s in n)("object"==typeof exports?exports:t)[s]=n[s]}})(self,(function(){return(self.webpackChunkjodit_pro=self.webpackChunkjodit_pro||[]).push([[92],{51424(t,e,n){n.r(e),n.d(e,{PasteFromWordPro:()=>V});var s=n(11868),r=n(26937),i=n(17994),a=n(23698);function l(t){if(!t)return[0,0,0,0];const e=t.match(/(0|auto|(-?[.\d]+(?:\w+|%)))/g)||["0px"];switch(e.length){case 2:return[0,1,0,1].map((t=>e[t]));case 3:return[0,1,2,1].map((t=>e[t]));case 4:return[0,1,2,3].map((t=>e[t]));default:return[0,0,0,0].map((t=>e[t]))}}let o;function u(t){if("number"==typeof t)return t;if(/%$/.test(t))return 0;o||(o=document.createElement("div"),Object.assign(o.style,{position:"absolute",left:"-9999px",top:"-9999px",margin:"0",padding:"0",border:"0"}),document.body.append(o),setTimeout((()=>{null==o||o.remove(),o=null})));const e=0>parseFloat(t);e&&(t=t.replace("-","")),o.style.width=t;const n=o.clientWidth;return e?-n:n}function c(t){const{style:e}=t;let n=[0,0,0,0];const s=e.keys.filter((t=>/margin/.test(t))),r=Math.max(s.indexOf("margin-left"),s.indexOf("margin")),i=r>0?s[r]:"margin-left";let a;return"margin"===i?(n=l(e.get("margin")),a=n[3]||0):a=e.get(i)||0,u(a)}var d=n(61273),p=n(45972);function h(t,e=(()=>!0),n=!0,s){switch(!0){case t.isComment:case t.isText:{if(!e(t))return"";const{nodeValue:n}=t.attributes;return t.isComment?`\x3c!--${n}--\x3e`:n}case t.isElement:{const{attributes:r}=t,i=m(t,e,n,s);if(!t.attributes["jd-safe"]&&n&&0===i.replace(/[\n\t]/g,"").length&&!t.isSingle)return"";const a=Object.keys(r).map((t=>"style"===t||null==r[t]||/^jd-/.test(t)?"":`${t}="${g(r[t])}"`)).filter(Boolean),{str:l}=t.style,o=g(l((t=>f(t,s))));if(o&&a.push(`style="${o}"`),n&&0===a.length&&["span","a"].includes(t.name))return i;const u=a.length?" "+a.join(" "):"";return e(t)?t.isSingle?`<${t.name}${u}/>`:`<${t.name}${u}>${i}</${t.name}>`:i}}return""}function f(t,e){var n;if(!e)return!0;if(f.cache.has(e)){const s=null===(n=f.cache.get(e))||void 0===n?void 0:n.get(t);if((0,d.isBoolean)(s))return s}const s=e.some((e=>RegExp(e).test(t))),r=f.cache.get(e)||new Map;return r.set(t,s),f.cache.set(e,r),s}function m(t,e=(()=>!0),n=!0,s){let r=t.map((t=>h(t,e,n,s))).join("");return"p"===t.name&&0===(0,d.trim)(r).length&&(r="&nbsp;"),r}function g(t){return(""+t).replace(/"/g,"&quot;")}f.cache=new WeakMap;const b="jd-list-level",y="jd-list-type",v="jd-list-style-type",x="list-style-type",E={"·":"disc",o:"circle","§":"square","[ivx]":"lower-roman","[IVX]":"upper-roman","[a-z]":"lower-alpha","[A-Z]":"upper-alpha","\\d":"decimal"};function j(t){return!(!t||"ol"!==t.name&&"ul"!==t.name)}function k(t){return!(!t||"li"!==t.name)}function $(t){return"li"!==t.name&&/mso-list:\s*l\d+ level\d+ lfo\d+/i.test(t.attributes.style)||/msolistparagraph/i.test(t.attributes.class)&&!!t.find((t=>t.isComment&&h(t).includes("supportLists"))).length}function w(t,e){return!(e.name!==t.attributes[y]||e.attributes[v]!==t.attributes[v]||t.attributes[b]!==e.attributes[b])}var T=n(70655),_=n(53909);let O=class{constructor(t){this._data=S(t)}get keys(){return Object.keys(this._data)}forEach(t){this.keys.forEach((e=>t(e)))}clear(){this._data={}}set(t,e){this._data[t]=e}get(t){var e;return null!==(e=this._data[t])&&void 0!==e?e:null}has(t){return void 0!==this._data[t]}add(t,e){return this._data=S(this.str()+";"+`${t}:${e}`),this}str(t=(t=>!0)){const e=Object.keys(this._data).filter((e=>e&&!/^mso-/.test(e)&&t(e)&&null!=this.get(e))),n=t=>(0,d.isString)(t)?/^0[a-z]+$/i.test(t)?"0":t:""+t;return["padding","margin"].forEach((t=>{if(this._data[t]){const s=e.indexOf(t),r=l(this._data[t]);["top","right","bottom","left"].forEach(((i,a)=>{const l=`${t}-${i}`;void 0===this._data[l]||e.indexOf(l)>=s&&n(r[a])!==n(this._data[l])||-1!==e.indexOf(l)&&e.splice(e.indexOf(l),1)}))}})),e.length?e.map((t=>`${(0,d.kebabCase)(t)}:${this.get(t)}`)).join(";"):""}};function S(t){return(t=>{const e={},n=[];for(let s=t.length-1;s>=0;s-=1){const r=t[s][0];e[r]||(e[r]=!0,n.unshift(t[s]))}return n})((null!=t?t:"").replace(/&quot;/g,'"').split(";").filter(Boolean).map((t=>(0,d.trim)(t).split(":").map(d.trim)))).reduce(((t,[e,n])=>(e&&n&&(t[e]=n),t)),{})}O=(0,T.gn)([_.autobind],O);const C=new Set(r.INSEPARABLE_TAGS);class M{constructor(t,e){this.parent=e,this.name=t.nodeName.toLowerCase(),this.type=t.nodeType,this.attributes=(t=>{const e={};if(p.i.isElement(t))for(let n=0,s=t.attributes;s.length>n;n+=1)e[s[n].name]=s[n].value;else e.nodeValue=t.nodeValue;return e})(t),this.style=new O(this.attributes.style),this.children=[],t.childNodes.forEach((t=>this.children.push(M.make(t,this))))}get isText(){return this.type===Node.TEXT_NODE}get isElement(){return this.type===Node.ELEMENT_NODE}get isComment(){return this.type===Node.COMMENT_NODE}get isSingle(){return C.has(this.name)}get length(){return this.children.length}static make(t,e=null){return new M(t,e)}wrap(t){var e;(0,d.assert)(null!=this.parent,"You can't wrap the root element");const n=M.make(document.createElement(t),this.parent),s=null!==(e=this.parent.children.indexOf(this))&&void 0!==e?e:-1;return-1===s?this.parent.append(n):this.parent.children[s]=n,n.append(this),n}append(t){return(0,d.assert)(t!==this,"Forbidden to add to yourself"),t.remove(),this.children.push(t),t.parent=this,this}get previousElement(){if(!this.parent)return null;const{children:t}=this.parent,e=t.indexOf(this);if(-1!==e)for(let n=e-1;n>=0;n-=1)if(t[n].isElement)return t[n];return null}get lastElement(){const{children:t}=this;for(let e=t.length-1;e>=0;e-=1)if(t[e].isElement)return t[e];return null}get previous(){var t,e,n;return null!==(n=null!==(t=this.sibling(!1))&&void 0!==t?t:null===(e=this.parent)||void 0===e?void 0:e.previous)&&void 0!==n?n:null}get next(){var t,e,n;return null!==(n=null!==(t=this.sibling(!0))&&void 0!==t?t:null===(e=this.parent)||void 0===e?void 0:e.next)&&void 0!==n?n:null}sibling(t){if(!this.parent)return null;const{children:e}=this.parent,n=e.indexOf(this);return-1!==n&&e[n+(t?1:-1)]?e[n+(t?1:-1)]:null}forEach(t,e=!1){const n=[...this.children];for(const s of n){if(!1===t(s))return!1;if(e&&!1===s.forEach(t,!0))return!1}}find(t,e=!0){const n=[];return this.forEach((e=>{t(e)&&n.push(e)}),e),n}map(t){return this.children.map(t)}remove(){var t,e;const n=null===(t=this.parent)||void 0===t?void 0:t.children.indexOf(this);return null!=n&&-1!==n&&(null===(e=this.parent)||void 0===e||e.children.splice(n,1)),this}textBetween(t,e){let n=!1;const s=[];return this.forEach((r=>{if(!n&&t(r)&&(n=!0),n&&r.isText&&s.push(h(r)),n&&e(r))return!1}),!0),s.join("")}}const N=["cellspacing","cellpadding","border","v:shapes","o:spid"],L=new Set(["o:p","xml","script","meta","link","v:imagedata","style"]),W={i:"em",b:"strong"};let A=0;var F=n(95609);function P(t,e,n,s){const r=t.split(n);for(const t of r){const n=t.split("shplid");if(n.length>1){const t=n[1];let r="";for(let e=0;t.length>e&&!/[{ \r\n\\]/.test(t[e]);e++)r+=t[e];const i=t.split("bliptag");if(i&&2>i.length)continue;let a=null;if(i[0].indexOf("pngblip")?a="image/png":-1!==i[0].indexOf("jpegblip")&&(a="image/jpeg"),!a)continue;const l=i[1].split("}");if(l&&2>l.length)continue;let o;if(l.length>2&&l[0].includes("blipuid"))o=l[1].split(" ");else{if(o=l[0].split(" "),o&&2>o.length)continue;o.shift()}s[e+r]={hex:o.join(""),type:a}}}}const B={"text-justify":["inter-ideograph"]},R=[(t,e)=>{var n;if(e.rtf&&"#comment"===t.name&&t.attributes.nodeValue&&-1!==t.attributes.nodeValue.indexOf("<v:shape")){e.shapes||(e.shapes={});const n=e.jodit.create.fromHTML(t.attributes.nodeValue);return(0,d.toArray)(n.getElementsByTagName("v:shape")).forEach((t=>{e.shapes[t.id]=t.getAttribute("o:spid")})),t}if("img"!==t.name)return t;if(e.rtf&&t.attributes["v:shapes"]){const s=null===(n=e.shapes)||void 0===n?void 0:n[t.attributes["v:shapes"]];if(s){e.imageMap||(e.imageMap={},P(e.rtf,"i","\\shppict",e.imageMap),P(e.rtf,"s","\\shp{",e.imageMap));const n=e.imageMap[s.substring(7)];if(n){const e=[],s=n.hex.match(/[0-9a-f]{2}/gi);if(s){for(let t=0;s.length>t;t++)e.push(String.fromCharCode(parseInt(s[t],16)));t.attributes.src="data:"+n.type+";base64,"+btoa(e.join(""))}}}}return t},t=>((t.isElement&&"always"===t.style.get("page-break-before")||"page"===t.style.get("break-before"))&&(t.attributes["jd-safe"]=!0,t.style.add("page-break-before","always"),t.isSingle&&(t.name="div")),t),t=>"none"===t.style.get("display")||0===t.length&&"span"===t.name||L.has(t.name)?(t.remove(),null):t,t=>{const{name:e}=t;return e in W&&(t.name=W[e]),t},t=>{if(/^OLE_LINK\d+$/.test(t.attributes.name)&&(t.attributes.name=null,0===t.length))return t.remove(),null;"_GoBack"===t.attributes.name&&(t.attributes.name=null);for(const e of N)t.attributes[e]&&(t.attributes[e]=null);return t},t=>{var e;if($(t)){t.name="li",t.style.set("text-indent",null);const n=(t=>t.textBetween((t=>t.isComment&&/\[if.*supportLists.*]/.test(h(t))),(t=>t.isComment&&/\[endif]/.test(h(t)))).replace(/&nbsp;/g,"").replace((0,r.SPACE_REG_EXP)(),""))(t),s=/[\da-np-zA-NP-Z].?/.test(n)?"ol":"ul",i=((t,e)=>{for(const e in E)if(RegExp(e).test(t))return E[e];return"ol"===e?"decimal":"disc"})(n,s);t.attributes[y]=s,t.attributes[v]=i,(t=>{if(void 0!==t.attributes[b])return;const e=[c(t)],n=[t];let s=t.next;for(;s;){if(s.isElement&&!s.attributes[b]&&$(s)){const t=c(s);t&&(e.push(t),n.push(s))}s=s.next}const r=Math.min(...e.filter((t=>t>0)));let i=e.map((t=>Math.ceil(t/10)));-1!==i.indexOf(0)&&(i=i.map((t=>t+1))),n.forEach(((t,e)=>{t.attributes[b]=i[e],t.style.add("margin-left",Math.max(c(t)-10*i[e]/r*40,0)+"px")}))})(t),(t=>{for(;t;){const e=t.previousElement;if(!k(e)&&!j(e))break;if(k(e)){if(e.attributes[b]>t.attributes[b])break;if(t.attributes[b]===e.attributes[b]&&t.parent&&w(t,t.parent))break;e.append(t);continue}const n=e;if(n.attributes[b]>t.attributes[b])break;if(t.attributes[b]===n.attributes[b]&&!w(t,n))break;n.append(t)}})(t);const{parent:a}=t;if(!j(a)||!w(t,a)){const r=((t,e,n,s)=>{const r=t.wrap(e);return r.attributes.start=(t=>/\d.\d/.test(t)?t.split(".").pop()||null:/^\d/.test(t)?""+(parseInt(t,10)||1):null)(n),r.attributes[b]=t.attributes[b],r.attributes[v]=t.attributes[v],r.attributes["data-list-style-type"]=t.attributes[v],r.style.set(x,s),(t=>{var e;!j(t)||"li"===(null===(e=t.parent)||void 0===e?void 0:e.name)||"disc"!==t.style.get(x)&&"decimal"!==t.style.get(x)||t.style.set(x,null)})(r),r})(t,s,n,i);return j(a)&&(r.remove(),null===(e=a.lastElement)||void 0===e||e.append(r)),t}}return t},(t,e)=>{var n;const s=null!==(n=e.links)&&void 0!==n?n:{};if(t.attributes.href&&t.attributes.href.match(/#.+$/)&&(s[t.attributes.href.match(/#(.+)$/)[1]]=t),t.attributes.name&&s[t.attributes.name]){const e=s[t.attributes.name];e.attributes.href=e.attributes.href.replace(/.*#(.*)$/,"#$1")}return e.links=s,t},t=>(t.isComment&&/\[if.*(supportLists|gte vml).*]/.test(h(t))&&(A++,t.remove()),t.isComment&&A>0&&h(t).includes("[endif]")&&(A=A>0?A-1:0,t.remove()),A&&(t.isText||"img"===t.name&&(!t.attributes.src||/^file:/.test(t.attributes.src)))?(t.remove(),null):t),(t,{jodit:e})=>{if(!e.o.pasteFromWord.convertUnitsToPixel)return t;const{style:n}=t;return n.forEach((t=>{const e=n.get(t);e&&n.set(t,(""+e).replace(/\d+(\.\d+)?(pt|cm)/g,(t=>u(t)+"px")))})),t},t=>(t.attributes.class&&(t.attributes.class=t.attributes.class.replace(/(el\d+)|(font\d+)|msonormal|msolistparagraph\w*/gi,""),(0,F.f)(t.attributes.class)||(t.attributes.class=null)),t),t=>t.isElement?("img"===t.name&&(t.attributes.align&&(t.style.add("float",t.attributes.align),t.attributes.align=null),t.attributes.hspace&&(t.style.add("marginLeft",t.attributes.hspace+"px"),t.style.add("marginRight",t.attributes.hspace+"px"),t.attributes.hspace=null)),t):t,t=>(!t.attributes.width||"th"!==t.name&&"td"!==t.name||(t.attributes.width=null),t),t=>(t.isElement&&t.attributes.style&&Object.keys(B).forEach((e=>{const n=B[e];t.style.has(e)&&n.includes(""+t.style.get(e))&&t.style.set(e,null)})),t)];n(96065).D.prototype.pasteFromWord={enable:!1,convertUnitsToPixel:!1,allowedStyleProps:["background","background-color","border","border-.*","color","float","font-family","font-size","font-style","font-weight","height","line-height","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","padding","text-align","text-justify","text-decoration","text-indent","vertical-align","width"]};var I=n(21151);class V extends a.L{insertFromWordByType(t,e,n,s){var a;if(!this.j.o.pasteFromWord.enable||n!==r.INSERT_AS_HTML&&n!==r.INSERT_AS_TEXT)return super.insertFromWordByType(t,e,n,s);if(e=((t,e,n,s="")=>{var r,i;const a=document.createElement("iframe");a.style.display="none",document.body.appendChild(a);try{const l=null!==(r=a.contentDocument)&&void 0!==r?r:null===(i=a.contentWindow)||void 0===i?void 0:i.document;if(!l)return e;l.open(),l.write(e),l.close();const o="jd-style";for(let t=0;l.styleSheets.length>t;t+=1)try{const e=l.styleSheets[t].cssRules;for(let t=0;e.length>t;t+=1)e[t].selectorText&&(0,d.$$)(e[t].selectorText,l.body).forEach((n=>{(0,d.attr)(n,o)||((0,d.attr)(n,o,(0,d.attr)(n,"style")||""),(0,d.attr)(n,"style","")),(0,d.attr)(n,"style",`${(0,d.attr)(n,"style")};${e[t].style.cssText}`)}))}catch(t){}return(0,d.$$)(`[${o}]`,l.body).forEach((t=>{(0,d.attr)(t,"style",`${(0,d.attr)(t,"style")};${(0,d.attr)(t,o)}`)})),((t,e,n,s)=>{const r={jodit:t,rtf:s};return e.forEach((function t(e){if(e){for(const t of R)if(null==(e=t(e,r)))break;null==e||e.forEach(t)}})),n&&e.forEach((t=>{t.style.clear()}),!0),(0,F.f)(m(e,(t=>!t.isComment),!0,t.o.pasteFromWord.allowedStyleProps))})(t,M.make(l.body),n,s)}finally{p.i.safeRemove(a)}return e})(this.j,e,n===r.INSERT_AS_TEXT,s.rtf),this.j.o.beautifyHTML){const t=null===(a=this.j.events)||void 0===a?void 0:a.fire("beautifyHTML",e);(0,i.H)(t)&&(e=t)}(0,I.kU)(t,this.j,e)}}s.Jodit.plugins.remove("pasteFromWord"),s.Jodit.plugins.add("pasteFromWordPro",V)}},t=>t(t.s=51424)])}));
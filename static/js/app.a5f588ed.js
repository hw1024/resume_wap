(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],d=0,l=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function u(e){return s.p+"static/js/"+({}[e]||e)+"."+{"chunk-4f6ccf8c":"7b72ec64"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4f6ccf8c":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-4f6ccf8c":"d4d66b80"}[e]+".css",a=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3276:function(e,t,n){"use strict";n("dc65")},"43ae":function(e,t){e.exports="data:image/png;base64,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"},"449a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r);n("ac14");var i=n("b766"),a=(n("2df3"),n("4516")),o=(n("c28a"),n("8917")),u=(n("8ee5"),n("8c39")),s=(n("5fce"),n("c0b7")),c=(n("114f"),n("7f2c")),d=(n("21ad"),n("59d3"),n("48f2"),n("1176"),n("430a")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},f=[],h={name:"App"},m=h,A=n("cba8"),p=Object(A["a"])(m,l,f,!1,null,null,null),v=p.exports,g=n("0344"),b=n("a5e4"),w=(n("0b10"),n("2806"),n("bb8c"),[{path:"/",redirect:"/home"},{path:"/home",name:"home",title:"视讯宝",component:function(){return n.e("chunk-4f6ccf8c").then(n.bind(null,"bb51"))}}]),y=Object(g["a"])(w);d["default"].use(b["a"]);var E={mode:"hash",base:"/ljt/",routes:y},C=new b["a"](E);C.afterEach((function(){window.scrollTo(0,0)}));var k=n("d02f"),S=n.n(k),T=(n("eaa7"),n("6861"),n("6d83"));n("ed2c");function B(e){var t=n("5fa7")("./"+e),r=new Audio;r.src=t,r.play(),setTimeout((function(){r.pause()}),15e3)}d["default"].directive("horizontal-screen",{bind:function(e){var t=function(){return[document.documentElement.clientWidth,document.documentElement.clientHeight]},n=function(){var n=t(),r=Object(T["a"])(n,2),i=r[0],a=r[1];e.style.transform="rotate(90deg)",e.style.transformOrigin=i/2+"px center",e.style.width=a+"px",e.style.height=i+"px"},r=function(){var n=t(),r=Object(T["a"])(n,2),i=r[0],a=r[1];e.style.transform="rotate(0deg)",e.style.width="".concat(i,"px"),e.style.height="".concat(a,"px")};e.resize=function(){"INPUT"!==document.activeElement.nodeName&&(window.calcFontSize(),[null,180,0].includes(window.orientation)?n():[90,-90].includes(window.orientation)&&r())},e.resize(),e.click=function(e){"INPUT"===e.target.nodeName?r():[90,-90].includes(window.orientation)||n()},window.addEventListener("click",e.click,!1),window.addEventListener("resize",e.resize,!1),window.addEventListener("orientationchange",e.resize,!1)},unbind:function(e){window.removeEventListener("click",e.click,!1),window.removeEventListener("resize",e.resize,!1),window.removeEventListener("orientationchange",e.resize,!1)}});n("aa0c"),n("d835"),n("8a82");var L=n("9302");L.keys().forEach((function(e){var t=L(e),n=e.replace(/^\.\//,"").replace(/\.vue/,""),r=t.default||t;d["default"].component(n,r)}));n("d5b9");d["default"].prototype.voicePrompt=B,d["default"].use(S.a),d["default"].use(c["a"]),d["default"].use(s["a"]),d["default"].use(u["a"]),d["default"].use(o["a"]),d["default"].use(a["a"]),d["default"].use(i["a"]),d["default"].use(r),d["default"].config.productionTip=!1,new d["default"]({router:C,render:function(e){return e(v)}}).$mount("#app")},"5fa7":function(e,t,n){var r={"./falling-star.mp3":"c1b4"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="5fa7"},6861:function(e,t,n){},"7ec2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAoCAYAAABXRRJPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAChklEQVRYw+2ZPUscURSG3zP3zjhx1qgpLFLlQ0HBYAIOEsiUIRJkC2Et0qTabVKksbFPY0ga/4CdIFj5BwKCEEIwhRA1JilsFgMGUyzr7s49J8UsiwbXNbsDOwvzwGW4MzD3febjDHMvPcznJ002+6ra1+cSs0EvQKT6q9UzXSx+/1QovNeSzy9XfP+56naw/3EA8Ke+nTg4+KyN63oShqCVFcjeHuC63c54NcyAUujP5VALAjARtMVsiBnh9jawtQV4XrdjtpSwHAe270OCAMRstIgYEIEcB+I4gON0O2ZLCbguYNuNXRpKORCJekRRSzKX5LNYazvhsVtidTtAKpFKJIxUIimkEkkhlUgKqURSSCWSQiqRFFKJpKAv9ETQ+N9OKucyCgAQqUiCOTpgWVFLOkSQWq3R1TCmRo4Dmp+H+P6FqZBEIgJSCjw1BQvR3dBgNmJZwMJCt+Nd3wNADWhI9MCzcznnp5ksIVI9P++klFLyj1lPoZTStw4Pd36Mjj7JEIFE0FaBJYLUSx9dp0QTRVWw3XJen8rkavUUJydFAoCZpaVnodZOJQyr7ZxTiMDGsDo7K4F5u6WwUgG5rgei9kSIQLZ9wzs6+vpxdfVbrE/RVKEwWR4e3qUwbD6+UsD+fmZ/c7MU59ix8DiXG5k+Pv55X0QmmrTx+vbBxsa7OMfWnZ8iwvK8mxgYuCtA0/dKABgAmcHBkTglYvtOqJmZuZLrXnlVqC4hY2OPnmazsS1JdbzeOD07q+4tLr7+XSi8LVuW0oiueLNGAMpDQyP2+Lh/h/nL0c7Or04zdPxiz62tvdkNgheZSuVUMZuWtYYIFrOpMpvb5XKJl5dfflhfL3aS4S/lNvbTvzIS7QAAAABJRU5ErkJggg=="},"87ba":function(e,t,n){},9302:function(e,t,n){var r={"./DttSwitch.vue":"97ef","./Header.vue":"fd6e","./Slider.vue":"a155"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="9302"},"97ef":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weui-div",on:{click:function(t){return t.stopPropagation(),e.toggle.apply(null,arguments)}}},[n("span",{staticClass:"weui-switch",class:{"weui-switch-on":e.me_checked},attrs:{value:e.value}},[n("span",{staticClass:"weui-switch-inner"},[e._v(e._s(e.my_text))])]),n("div",{staticClass:"weui-div-2"},[e._v("OFF")]),n("div",{staticClass:"weui-div-1"},[e._v("ON")])])},i=[],a=n("8955"),o=(n("3828"),{name:"DttSwitch",props:{value:{type:Boolean,default:!0},text:{type:String,default:""},FId:{type:String,default:""},index:{type:Number,default:11090},handle:{type:Boolean,default:!0}},data:function(){return{me_checked:this.value,my_text:this.text}},watch:Object(a["a"])({value:function(){this.me_checked=this.value}},"value",(function(){this.my_text=this.text})),methods:{toggle:function(){!0===this.handle&&(this.me_checked=!this.me_checked,this.$emit("changeSwitch",this.me_checked,this.FId,this.index))}}}),u=o,s=(n("a92e"),n("cba8")),c=Object(s["a"])(u,r,i,!1,null,"67fbb40e",null);t["default"]=c.exports},a155:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mint-range",class:{"mint-range--disabled":e.disabled},style:{height:e.height+"rem"}},[e._t("start"),n("div",{ref:"content",staticClass:"mint-range-content",style:{"margin-right":e.btnWidth+"rem"}},[n("div",{staticClass:"mint-range-runway",style:{height:e.height+"rem",right:-e.btnWidth+"rem"}}),n("div",{staticClass:"mint-range-progress",style:{width:e.progress+"%",height:e.height+"rem"}}),n("div",{ref:"thumb",staticClass:"mint-range-thumb",class:{"thumb-round":e.btnRound},style:{left:e.progress+"%",width:e.btnWidth+"rem",height:e.btnHeight+"rem",top:-(e.btnHeight-e.height)/2+"rem"}})]),e._t("end"),n("div",{staticClass:"mint-range-progress-real",style:{width:e.progress+"%",height:e.height+"rem"}})],2)},i=[],a=(n("3828"),n("430a")),o=!1,u=!a["default"].prototype.$isServer&&"ontouchstart"in window,s=function(e,t){var n=function(e){t.drag&&t.drag(u?e.changedTouches[0]||e.touches[0]:e)},r=function e(r){u||(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)),document.onselectstart=null,document.ondragstart=null,o=!1,t.end&&t.end(u?r.changedTouches[0]||r.touches[0]:r)};e.addEventListener(u?"touchstart":"mousedown",(function(e){o||(e.preventDefault(),document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},u||(document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)),o=!0,t.start&&t.start(u?e.changedTouches[0]||e.touches[0]:e))})),u&&(e.addEventListener("touchmove",n),e.addEventListener("touchend",r),e.addEventListener("touchcancel",r))},c={name:"mint-range",props:{min:{type:Number,default:0},max:{type:Number,default:100},height:{type:Number,default:.1},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},value:{type:Number},btnWidth:{type:Number,default:.3},btnHeight:{type:Number,default:.3},btnRound:{type:Boolean,default:!0}},computed:{progress:function(){var e=this.value;return"undefined"===typeof e||null===e?0:Math.floor((e-this.min)/(this.max-this.min)*100)}},mounted:function(){var e=this,t=this.$refs.thumb,n=this.$refs.content,r=function(){var e=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{left:r.left-e.left,top:r.top-e.top,thumbBoxLeft:r.left}},i={};s(t,{start:function(t){if(!e.disabled){var n=r(),a=t.clientX-n.thumbBoxLeft;i={thumbStartLeft:n.left,thumbStartTop:n.top,thumbClickDetalX:a}}},drag:function(t){if(!e.disabled){var r=n.getBoundingClientRect(),a=t.pageX-r.left-i.thumbStartLeft-i.thumbClickDetalX,o=Math.ceil((e.max-e.min)/e.step),u=i.thumbStartLeft+a-(i.thumbStartLeft+a)%(r.width/o),s=u/r.width;s<0?s=0:s>1&&(s=1),e.$emit("input",Math.round(e.min+s*(e.max-e.min)))}},end:function(){e.disabled||(e.$emit("change",e.value),i={})}})}},d=c,l=(n("3276"),n("cba8")),f=Object(l["a"])(d,r,i,!1,null,null,null);t["default"]=f.exports},a92e:function(e,t,n){"use strict";n("449a")},c1b4:function(e,t,n){e.exports=n.p+"static/media/falling-star.cdaf73a8.mp3"},dc65:function(e,t,n){},ec07:function(e,t,n){"use strict";n("87ba")},fd6e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-logo",staticStyle:{"font-size":"24px","text-align":"center"}},[e._v("珠江视讯")]),n("div",{staticClass:"header-date"},[n("span",{staticClass:"now-time"},[e._v(e._s(e.nowTime))]),n("span",{staticClass:"now-date"},[e._v(e._s(e.nowDate))])]),e._m(0)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-right"},[r("img",{staticClass:"header-icon",attrs:{src:n("43ae"),alt:"wifi"}}),r("img",{staticClass:"header-icon",attrs:{src:n("7ec2"),alt:"computer"}}),r("p",{staticClass:"header-text"},[e._v("广电超清融媒管理控制平台")])])}],a={name:"Header",data:function(){return{nowDate:null,nowTime:null,timer:"",currentTime:new Date}},created:function(){this.timer=setInterval(this.getTime,1e3)},methods:{getTime:function(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),r=e.getHours(),i=e.getMinutes(),a=e.getSeconds(),o=e.getDay(),u=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];function s(e){return e<10?"0"+e:e}this.month=s(t),this.day=s(n),this.hour=s(r),this.minute=s(i),this.second=s(a),this.nowDate=this.month+"月"+this.day+"日"+u[o],this.nowTime=this.hour+":"+this.minute+":"+this.second}},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},o=a,u=(n("ec07"),n("cba8")),s=Object(u["a"])(o,r,i,!1,null,"5e02e3a6",null);t["default"]=s.exports}});
(function(t){function e(e){for(var a,r,o=e[0],u=e[1],c=e[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);h&&h(e);while(l.length)l.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return u.p+"static/js/"+({}[t]||t)+"."+{"chunk-115753df":"5310eadc","chunk-2f58c818":"4de88abb"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-115753df":1,"chunk-2f58c818":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="static/css/"+({}[t]||t)+"."+{"chunk-115753df":"2856e16e","chunk-2f58c818":"5f795991"}[t]+".css",i=u.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],d=c.getAttribute("data-href");if(d===a||d===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],h.parentNode.removeChild(h),n(s)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(t);var l=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2877:function(t,e,n){},3276:function(t,e,n){"use strict";n("dc65")},"43ae":function(t,e){t.exports="data:image/png;base64,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"},"449a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a);n("ac14");var r=n("b766"),i=(n("2df3"),n("4516")),s=(n("c28a"),n("8917")),o=(n("8ee5"),n("8c39")),u=(n("5fce"),n("c0b7")),c=(n("114f"),n("7f2c")),d=(n("b85f"),n("8f04")),l=(n("0d12"),n("bdab")),h=(n("5f04"),n("dafe")),f=(n("1b85"),n("4ea0")),m=(n("5d45"),n("8caa")),p=(n("458d"),n("df68")),A=(n("21ad"),n("59d3"),n("48f2"),n("1176"),n("d835"),n("8a82"),n("b4ea"),n("9940"),n("430a")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},g=[],b={name:"App"},w=b,y=n("cba8"),C=Object(y["a"])(w,v,g,!1,null,null,null),E=C.exports,k=n("0344"),S=n("a5e4"),x=(n("0b10"),n("2806"),n("bb8c"),[{path:"/",redirect:"/home"},{path:"/home",name:"home",title:"视讯宝",component:function(){return n.e("chunk-115753df").then(n.bind(null,"bb51"))}},{path:"/task",name:"task",title:"视讯宝",component:function(){return n.e("chunk-2f58c818").then(n.bind(null,"1d21"))}}]),T=Object(k["a"])(x);A["default"].use(S["a"]);var B={mode:"hash",base:"/ljt/",routes:T},L=new S["a"](B);L.afterEach((function(){window.scrollTo(0,0)}));var O=n("d02f"),R=n.n(O),P=(n("6861"),n("6d83"));n("ed2c");function j(t){var e="";e=t?n("5fa7")("./"+t):"https://www.runoob.com/try/demo_source/horse.mp3";var a=new Audio;a.src=e,a.play(),setTimeout((function(){a.pause()}),15e3)}A["default"].directive("horizontal-screen",{bind:function(t){var e=function(){return[document.documentElement.clientWidth,document.documentElement.clientHeight]},n=function(){var n=e(),a=Object(P["a"])(n,2),r=a[0],i=a[1];t.style.transform="rotate(90deg)",t.style.transformOrigin=r/2+"px center",t.style.width=i+"px",t.style.height=r+"px"},a=function(){var n=e(),a=Object(P["a"])(n,2),r=a[0],i=a[1];t.style.transform="rotate(0deg)",t.style.width="".concat(r,"px"),t.style.height="".concat(i,"px")};t.resize=function(){"INPUT"!==document.activeElement.nodeName&&(window.calcFontSize(),[null,180,0].includes(window.orientation)?n():[90,-90].includes(window.orientation)&&a())},t.resize(),t.click=function(t){"INPUT"===t.target.nodeName?a():[90,-90].includes(window.orientation)||n()},window.addEventListener("click",t.click,!1),window.addEventListener("resize",t.resize,!1),window.addEventListener("orientationchange",t.resize,!1)},unbind:function(t){window.removeEventListener("click",t.click,!1),window.removeEventListener("resize",t.resize,!1),window.removeEventListener("orientationchange",t.resize,!1)}});n("aa0c");var N=n("9302");N.keys().forEach((function(t){var e=N(t),n=t.replace(/^\.\//,"").replace(/\.vue/,""),a=e.default||e;A["default"].component(n,a)}));n("d5b9");A["default"].prototype.voicePrompt=j,A["default"].use(R.a),A["default"].use(p["a"]),A["default"].use(m["a"]),A["default"].use(f["a"]),A["default"].use(h["a"]),A["default"].use(l["a"]),A["default"].use(d["a"]),A["default"].use(c["a"]),A["default"].use(u["a"]),A["default"].use(o["a"]),A["default"].use(s["a"]),A["default"].use(i["a"]),A["default"].use(r["a"]),A["default"].use(a),Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},A["default"].config.productionTip=!1,new A["default"]({router:L,render:function(t){return t(E)}}).$mount("#app")},"5fa7":function(t,e,n){var a={"./falling-star.mp3":"c1b4"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="5fa7"},6861:function(t,e,n){},"7ec2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAoCAYAAABXRRJPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAChklEQVRYw+2ZPUscURSG3zP3zjhx1qgpLFLlQ0HBYAIOEsiUIRJkC2Et0qTabVKksbFPY0ga/4CdIFj5BwKCEEIwhRA1JilsFgMGUyzr7s49J8UsiwbXNbsDOwvzwGW4MzD3febjDHMvPcznJ002+6ra1+cSs0EvQKT6q9UzXSx+/1QovNeSzy9XfP+56naw/3EA8Ke+nTg4+KyN63oShqCVFcjeHuC63c54NcyAUujP5VALAjARtMVsiBnh9jawtQV4XrdjtpSwHAe270OCAMRstIgYEIEcB+I4gON0O2ZLCbguYNuNXRpKORCJekRRSzKX5LNYazvhsVtidTtAKpFKJIxUIimkEkkhlUgKqURSSCWSQiqRFFKJpKAv9ETQ+N9OKucyCgAQqUiCOTpgWVFLOkSQWq3R1TCmRo4Dmp+H+P6FqZBEIgJSCjw1BQvR3dBgNmJZwMJCt+Nd3wNADWhI9MCzcznnp5ksIVI9P++klFLyj1lPoZTStw4Pd36Mjj7JEIFE0FaBJYLUSx9dp0QTRVWw3XJen8rkavUUJydFAoCZpaVnodZOJQyr7ZxTiMDGsDo7K4F5u6WwUgG5rgei9kSIQLZ9wzs6+vpxdfVbrE/RVKEwWR4e3qUwbD6+UsD+fmZ/c7MU59ix8DiXG5k+Pv55X0QmmrTx+vbBxsa7OMfWnZ8iwvK8mxgYuCtA0/dKABgAmcHBkTglYvtOqJmZuZLrXnlVqC4hY2OPnmazsS1JdbzeOD07q+4tLr7+XSi8LVuW0oiueLNGAMpDQyP2+Lh/h/nL0c7Or04zdPxiz62tvdkNgheZSuVUMZuWtYYIFrOpMpvb5XKJl5dfflhfL3aS4S/lNvbTvzIS7QAAAABJRU5ErkJggg=="},9302:function(t,e,n){var a={"./DttSwitch.vue":"97ef","./Header.vue":"fd6e","./Slider.vue":"a155"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="9302"},"97ef":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-div",on:{click:function(e){return e.stopPropagation(),t.toggle.apply(null,arguments)}}},[n("span",{staticClass:"weui-switch",class:{"weui-switch-on":t.me_checked},attrs:{value:t.value}},[n("span",{staticClass:"weui-switch-inner"},[t._v(t._s(t.my_text))])]),n("div",{staticClass:"weui-div-2"},[t._v("OFF")]),n("div",{staticClass:"weui-div-1"},[t._v("ON")])])},r=[],i=n("8955"),s=(n("3828"),{name:"DttSwitch",props:{value:{type:Boolean,default:!0},text:{type:String,default:""},FId:{type:String,default:""},index:{type:Number,default:11090},handle:{type:Boolean,default:!0}},data:function(){return{me_checked:this.value,my_text:this.text}},watch:Object(i["a"])({value:function(){this.me_checked=this.value}},"value",(function(){this.my_text=this.text})),methods:{toggle:function(){!0===this.handle&&(this.me_checked=!this.me_checked,this.$emit("changeSwitch",this.me_checked,this.FId,this.index))}}}),o=s,u=(n("a92e"),n("cba8")),c=Object(u["a"])(o,a,r,!1,null,"67fbb40e",null);e["default"]=c.exports},"9d64":function(t,e,n){t.exports=n.p+"static/img/logo.0e2cd137.png"},a155:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mint-range",class:{"mint-range--disabled":t.disabled},style:{height:t.height+"rem"}},[t._t("start"),n("div",{ref:"content",staticClass:"mint-range-content",style:{"margin-right":t.btnWidth+"rem"}},[n("div",{staticClass:"mint-range-runway",style:{height:t.height+"rem",right:-t.btnWidth+"rem"}}),n("div",{staticClass:"mint-range-progress",style:{width:t.progress+"%",height:t.height+"rem"}}),n("div",{ref:"thumb",staticClass:"mint-range-thumb",class:{"thumb-round":t.btnRound},style:{left:t.progress+"%",width:t.btnWidth+"rem",height:t.btnHeight+"rem",top:-(t.btnHeight-t.height)/2+"rem"}})]),t._t("end"),n("div",{staticClass:"mint-range-progress-real",style:{width:t.progress+"%",height:t.height+"rem"}})],2)},r=[],i=(n("3828"),n("430a")),s=!1,o=!i["default"].prototype.$isServer&&"ontouchstart"in window,u=function(t,e){var n=function(t){e.drag&&e.drag(o?t.changedTouches[0]||t.touches[0]:t)},a=function t(a){o||(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t)),document.onselectstart=null,document.ondragstart=null,s=!1,e.end&&e.end(o?a.changedTouches[0]||a.touches[0]:a)};t.addEventListener(o?"touchstart":"mousedown",(function(t){s||(t.preventDefault(),document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},o||(document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)),s=!0,e.start&&e.start(o?t.changedTouches[0]||t.touches[0]:t))})),o&&(t.addEventListener("touchmove",n),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a))},c={name:"mint-range",props:{min:{type:Number,default:0},max:{type:Number,default:100},height:{type:Number,default:.1},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},value:{type:Number},btnWidth:{type:Number,default:.3},btnHeight:{type:Number,default:.3},btnRound:{type:Boolean,default:!0}},computed:{progress:function(){var t=this.value;return"undefined"===typeof t||null===t?0:Math.floor((t-this.min)/(this.max-this.min)*100)}},mounted:function(){var t=this,e=this.$refs.thumb,n=this.$refs.content,a=function(){var t=n.getBoundingClientRect(),a=e.getBoundingClientRect();return{left:a.left-t.left,top:a.top-t.top,thumbBoxLeft:a.left}},r={};u(e,{start:function(e){if(!t.disabled){var n=a(),i=e.clientX-n.thumbBoxLeft;r={thumbStartLeft:n.left,thumbStartTop:n.top,thumbClickDetalX:i}}},drag:function(e){if(!t.disabled){var a=n.getBoundingClientRect(),i=e.pageX-a.left-r.thumbStartLeft-r.thumbClickDetalX,s=Math.ceil((t.max-t.min)/t.step),o=r.thumbStartLeft+i-(r.thumbStartLeft+i)%(a.width/s),u=o/a.width;u<0?u=0:u>1&&(u=1),t.$emit("input",Math.round(t.min+u*(t.max-t.min)))}},end:function(){t.disabled||(t.$emit("change",t.value),r={})}})}},d=c,l=(n("3276"),n("cba8")),h=Object(l["a"])(d,a,r,!1,null,null,null);e["default"]=h.exports},a92e:function(t,e,n){"use strict";n("449a")},c1b4:function(t,e,n){t.exports=n.p+"static/media/falling-star.cdaf73a8.mp3"},c328:function(t,e,n){"use strict";n("2877")},dc65:function(t,e,n){},fd6e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header wp"},[a("div",{staticClass:"header-left"},[a("img",{staticClass:"header-logo",attrs:{src:n("9d64"),alt:"tips"}}),a("div",{staticClass:"header-date"},[a("span",{staticClass:"now-time"},[t._v(t._s(t.nowTime))]),a("span",{staticClass:"now-date"},[t._v(t._s(t.nowDate))])])]),t._m(0)]),a("div",{staticClass:"header phone"},[t._m(1),a("div",{staticClass:"header-right"},[t._m(2),a("div",{staticClass:"header-date",staticStyle:{"margin-top":"10px"}},[a("span",{staticClass:"now-time"},[t._v(t._s(t.nowTime))]),a("span",{staticClass:"now-date"},[t._v(t._s(t.nowDate))])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-right"},[a("img",{staticClass:"header-icon",attrs:{src:n("43ae"),alt:"wifi"}}),a("img",{staticClass:"header-icon",attrs:{src:n("7ec2"),alt:"computer"}}),a("p",{staticClass:"header-text"},[t._v("广电超清融媒管理控制平台")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-left"},[a("img",{staticClass:"header-logo",attrs:{src:n("9d64"),alt:"tips"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticClass:"header-icon",attrs:{src:n("43ae"),alt:"wifi"}}),a("img",{staticClass:"header-icon",attrs:{src:n("7ec2"),alt:"computer"}}),a("p",{staticClass:"header-text"},[t._v("广电超清融媒管理控制平台")])])}],i={name:"Header",data:function(){return{nowDate:null,nowTime:null,timer:"",currentTime:new Date}},created:function(){this.timer=setInterval(this.getTime,1e3)},methods:{getTime:function(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),a=t.getHours(),r=t.getMinutes(),i=t.getSeconds(),s=t.getDay(),o=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];function u(t){return t<10?"0"+t:t}this.month=u(e),this.day=u(n),this.hour=u(a),this.minute=u(r),this.second=u(i),this.nowDate=this.month+"月"+this.day+"日"+o[s],this.nowTime=this.hour+":"+this.minute+":"+this.second}},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},s=i,o=(n("c328"),n("cba8")),u=Object(o["a"])(s,a,r,!1,null,"560c3332",null);e["default"]=u.exports}});
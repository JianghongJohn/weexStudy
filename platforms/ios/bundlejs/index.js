// { "framework": "Vue"}

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){e.exports={header:{backgroundColor:"#FF0000",borderWidth:2,borderStyle:"solid",borderColor:"#bbbbbb",paddingTop:15,paddingBottom:15,paddingLeft:15,paddingRight:15,marginBottom:30},"top-text":{lines:1,color:"#ffffff",fontSize:55,textAlign:"center"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["header"]},[o("text",{staticClass:["top-text"],attrs:{lines:"1"}},[e._v("江弘-navigation-江弘-navigation-江弘-navigation-江弘-navigation江弘-navigation-江弘-navigation-江弘-navigation-江弘-navigation")])])}]},e.exports.render._withStripped=!0},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=weex.requireModule("modal");t.default={data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World"},created:function(){console.log("start"),s.toast({message:"页面初始化成功",duration:3})},components:{header:r.default},methods:{update:function(e){this.target="Weex",console.log("target:",this.target)}}}},function(e,t){e.exports={wrapper:{alignItems:"center",marginTop:0,background:"rebeccapurple"},title:{paddingTop:40,paddingBottom:40,fontSize:48},logo:{width:360,height:156},desc:{paddingTop:20,color:"#888888",fontSize:24},testInput:{height:50,paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,fontSize:15,width:750,borderBottomWidth:1}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("header"),o("div",[o("input",{staticClass:["testInput"],attrs:{autofocus:!0,type:"text",placeholder:"瞎写的..."}})]),o("div",{staticClass:["wrapper"],on:{click:e.update}},[o("image",{staticClass:["logo"],attrs:{src:e.logoUrl}}),o("text",{staticClass:["title"]},[e._v("Hello Man "+e._s(e.target))]),o("text",{staticClass:["desc"]},[e._v("Now, let's use vue to build your weex app.")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,o){var n,r,s=[];s.push(o(4)),n=o(3);var i=o(5);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/hyjt/Desktop/source/weex/test-project/src/index.vue",r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-520045cf",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)},function(e,t,o){var n,r,s=[];s.push(o(1)),n=o(0);var i=o(2);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/hyjt/Desktop/source/weex/test-project/src/topHeader.vue",r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-c4e7b282",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=n}]);

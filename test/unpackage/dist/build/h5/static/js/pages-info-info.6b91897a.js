(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-info"],{2840:function(t,n,i){"use strict";var e=i("5b64"),s=i.n(e);s.a},"5b64":function(t,n,i){var e=i("b460");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("55508291",e,!0,{sourceMap:!1,shadowMode:!1})},"7b48":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"info"},[i("titles",{attrs:{titles:t.titles,showIcon:!1}}),i("v-uni-view",{staticClass:"info_content"},[i("v-uni-view",{staticClass:"info_list"},[i("v-uni-view",{staticClass:"list_box border_bottom flex"},[i("v-uni-text",[t._v("姓名")]),i("v-uni-text",[t._v("秦长青")])],1),i("v-uni-view",{staticClass:"list_box  flex"},[i("v-uni-text",[t._v("手机")]),i("v-uni-text",[t._v("155****6936")])],1)],1),i("v-uni-view",{staticClass:"info_list"},[i("v-uni-view",{staticClass:"list_box border_bottom flex"},[i("v-uni-text",[t._v("部门")]),i("v-uni-text",[t._v("人事部")])],1),i("v-uni-view",{staticClass:"list_box  flex"},[i("v-uni-text",[t._v("职位")]),i("v-uni-text",[t._v("人事部部长")])],1)],1),i("v-uni-view",{staticClass:"info_list"},[i("v-uni-view",{staticClass:"list_history  flex",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gohistory.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("评测历史")]),i("uni-icons",{attrs:{type:"arrowright",size:"22"}})],1)],1)],1)],1)},s=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return s})},"994e":function(t,n,i){"use strict";i.r(n);var e=i("b877"),s=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=s.a},b460:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.info .info_content .info_list[data-v-6cab06a4]{margin-top:8px;padding-left:15px;background-color:#fff}.info .info_content .info_list .list_box[data-v-6cab06a4]{padding:12px 0 13px;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.info .info_content .info_list .list_box uni-text[data-v-6cab06a4]{margin-right:20px;font-size:.85rem}.info .info_content .info_list .list_history[data-v-6cab06a4]{padding:12px 17px 13px 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.85rem}',""])},b877:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{titles:"我的"}},methods:{gohistory:function(){uni.navigateTo({url:"/pages/info/evaluationHistory/evaluationHistory"})}}};n.default=e},bdd0:function(t,n,i){"use strict";i.r(n);var e=i("7b48"),s=i("994e");for(var o in s)"default"!==o&&function(t){i.d(n,t,function(){return s[t]})}(o);i("2840");var a=i("2877"),r=Object(a["a"])(s["default"],e["a"],e["b"],!1,null,"6cab06a4",null);n["default"]=r.exports}}]);
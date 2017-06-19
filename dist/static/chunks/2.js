webpackJsonp([2],{4:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=o(n),i=s(9),c=o(i);e.default={replace:!0,props:{pageType:String,fixHead:Boolean,messageCount:Number,needAdd:{type:Boolean,default:!0},from:String},data:function(){return{nickname:"",profileimgurl:"",show:!1}},methods:{openMenu:function(){(0,a.default)("html, body, #page").addClass("scroll-hide"),this.show=!this.show},showMenus:function(){this.show=!this.show,(0,a.default)("html, body, #page").removeClass("scroll-hide")}},components:{nvMenu:c.default}}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,props:["showMenu","from"],methods:{goTopic:function(t,e){"single"===e?this.$router.push({name:"list",query:{tab:t}}):window.location.href="list.html?tab="+t}}}},6:function(t,e){},7:function(t,e){},8:function(t,e,s){s(6);var o=s(1)(s(4),s(10),null,null);t.exports=o.exports},9:function(t,e,s){s(7);var o=s(1)(s(5),s(11),null,null);t.exports=o.exports},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show&&t.fixHead?s("div",{staticClass:"page-cover",on:{click:t.showMenus}}):t._e(),t._v(" "),s("header",{class:{show:t.show&&t.fixHead,"fix-header":t.fixHead,"no-fix":!t.fixHead},attrs:{id:"hd"}},[s("div",{staticClass:"nv-toolbar"},[t.fixHead?s("div",{staticClass:"toolbar-nav",on:{click:t.openMenu}}):t._e(),t._v(" "),s("span",{domProps:{textContent:t._s(t.pageType)}}),t._v(" "),t.messageCount>0?s("i",{staticClass:"num"},[t._v(" "+t._s(t.messageCount))]):t._e(),t._v(" "),t.needAdd?s("i",{directives:[{name:"show",rawName:"v-show",value:!t.messageCount||t.messageCount<=0,expression:"!messageCount || messageCount <= 0"}],staticClass:"iconfont add-icon"},[t._v("")]):t._e()])]),t._v(" "),t.fixHead?s("nv-menu",{attrs:{"show-menu":t.show,"page-type":t.pageType,"nick-name":t.nickname,from:t.from}}):t._e()],1)},staticRenderFns:[]}},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"nav-list",class:{show:t.showMenu},attrs:{id:"sideBar"}},[s("section",{staticClass:"list-ul"},[s("a",{staticClass:"icon-quanbu iconfont item",on:{click:function(e){t.goTopic("all",t.from)}}},[t._v("全部")]),t._v(" "),s("a",{staticClass:"icon-hao iconfont item",on:{click:function(e){t.goTopic("good",t.from)}}},[t._v("精华")]),t._v(" "),s("a",{staticClass:"icon-fenxiang iconfont item",on:{click:function(e){t.goTopic("share",t.from)}}},[t._v("分享")]),t._v(" "),s("a",{staticClass:"icon-wenda iconfont item",on:{click:function(e){t.goTopic("ask",t.from)}}},[t._v("问答")]),t._v(" "),s("a",{staticClass:"icon-zhaopin iconfont item",on:{click:function(e){t.goTopic("job",t.from)}}},[t._v("招聘")])])])},staticRenderFns:[]}},23:function(t,e,s){s(52);var o=s(1)(s(46),s(64),null,null);t.exports=o.exports},46:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(13),a=o(n),i=s(8),c=o(i);e.default={data:function(){return{showMenu:!1,topic:{},noData:!1,topicId:""}},filters:{getLastTimeStr:function(t){return a.default.getLastTimeStr(t)}},mounted:function(){var t=this;t.showMenu=!1,t.topicId=t.$route.params.id,t.$http.get("https://cnodejs.org/api/v1/topic/"+t.topicId).then(function(e){t.topic=e.data.data}).catch(function(e){console.log(e),t.noData=!0})},methods:{getTabInfo:function(t,e,s,o){var n="",a="";if(s)n="置顶",a="top";else if(e)n="精华",a="good";else switch(t){case"share":n="分享",a="share";break;case"ask":n="问答",a="ask";break;case"job":n="招聘",a="job";break;default:n="暂无",a="default"}return o?a:n},getLastTimeStr:function(t,e){return a.default.getLastTimeStr(t,e)},isUps:function(t){return!1}},components:{nvHead:c.default}}},52:function(t,e){},64:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nv-head",{attrs:{"page-type":"主题","show-menu":t.showMenu,"need-add":!0,"fix-head":!0}}),t._v(" "),t.topic.title?s("div",{class:{"show-menu":t.showMenu},attrs:{id:"page"}},[s("h2",{staticClass:"topic-title",domProps:{textContent:t._s(t.topic.title)}}),t._v(" "),s("section",{staticClass:"author-info"},[s("img",{staticClass:"avatar",attrs:{src:t.topic.author.avatar_url}}),t._v(" "),s("div",{staticClass:"col"},[s("span",[t._v(t._s(t.topic.author.loginname))]),t._v(" "),s("time",[t._v("\n                    发布于:"+t._s(t._f("getLastTimeStr")(t.topic.create_at,!0))+"\n                ")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",{staticClass:"tag",class:t.getTabInfo(t.topic.tab,t.topic.good,t.topic.top,!0),domProps:{textContent:t._s(t.getTabInfo(t.topic.tab,t.topic.good,t.topic.top,!1))}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(t.topic.visit_count)+"次浏览")])])]),t._v(" "),s("section",{staticClass:"markdown-body topic-content",domProps:{innerHTML:t._s(t.topic.content)}}),t._v(" "),s("h3",{staticClass:"topic-reply"},[s("strong",[t._v(t._s(t.topic.reply_count))]),t._v(" 回复\n        ")]),t._v(" "),s("section",{staticClass:"reply-list"},[s("ul",t._l(t.topic.replies,function(e){return s("li",[s("section",{staticClass:"user"},[s("img",{staticClass:"head",attrs:{src:e.author.avatar_url}}),t._v(" "),s("div",{staticClass:"info"},[s("span",{staticClass:"cl"},[s("span",{staticClass:"name",domProps:{textContent:t._s(e.author.loginname)}}),t._v(" "),s("span",{staticClass:"name mt10"},[s("span"),t._v("\n                                    发布于:"+t._s(t._f("getLastTimeStr")(e.create_at,!0)))])])])]),t._v(" "),s("div",{staticClass:"reply_content",domProps:{innerHTML:t._s(e.content)}})])}))])]):t._e(),t._v(" "),t.noData?s("div",{staticClass:"no-data"},[s("i",{staticClass:"iconfont icon-empty"},[t._v("")]),t._v("\n        该话题不存在!\n    ")]):t._e()],1)},staticRenderFns:[]}}});
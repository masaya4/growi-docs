(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{126:function(t,e,a){"use strict";a.r(e);a(76);var i=a(75),n={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:a(127).a},beforeCreate:function(){this.$options.components.SidebarLinks=a(126).default},methods:{isActive:i.e}},s=(a(171),a(7)),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?a("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):a("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),a("DropdownTransition",[t.open||!t.collapsable?a("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;a(113),a(172);function o(t,e,a,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},a)}function l(t,e,a,n,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.e)(n,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,a+"#"+e.slug,e.title,c),l(t,e.children,a,n,s,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var a=e.parent,n=a.$page,s=(a.$site,a.$route),r=a.$themeConfig,c=a.$themeLocaleConfig,u=e.props,d=u.item,h=u.sidebarDepth,p=Object(i.e)(s,d.path),b="auto"===d.type?p||d.children.some(function(t){return Object(i.e)(s,d.basePath+"#"+t.slug)}):p,f="external"===d.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a,t("OutboundLink")])}(t,d.path,d.title||d.path):o(t,d.path,d.title||d.path,b),m=[n.frontmatter.sidebarDepth,h,c.sidebarDepth,r.sidebarDepth,1].find(function(t){return void 0!==t}),v=c.displayAllHeaders||r.displayAllHeaders;return"auto"===d.type?[f,l(t,d.children,d.basePath,s,m)]:(b||v)&&d.headers&&!i.d.test(d.path)?[f,l(t,Object(i.c)(d.headers),d.path,s,m)]:f}};a(173);function u(t,e){return"group"===e.type&&e.children.some(function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)})}var d={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var i=e[a];if(u(t,i))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.items.length?a("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return a("li",{key:i},["group"===e.type?a("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):a("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},133:function(t,e,a){"use strict";var i=a(79);a.n(i).a},171:function(t,e,a){"use strict";var i=a(89);a.n(i).a},172:function(t,e,a){"use strict";var i=a(17),n=a(77)(5),s=!0;"find"in[]&&Array(1).find(function(){s=!1}),i(i.P+i.F*s,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(42)("find")},173:function(t,e,a){"use strict";var i=a(90);a.n(i).a},174:function(t,e,a){"use strict";var i=a(91);a.n(i).a},375:function(t,e,a){"use strict";a.r(e);var i={components:{NavLink:a(99).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(a(133),a(7)),s=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return a("div",{key:i,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports,r=a(125),o=a(123),l=a(126),c=a(124),u={name:"Sidebar",components:{SidebarLinks:l.default,NavLinks:c.a},props:["items"]},d=(a(174),Object(n.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports),h=a(75),p={components:{Home:s,Page:o.a,Sidebar:d,Navbar:r.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(h.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},b=Object(n.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)},[],!1,null,null,null);e.default=b.exports},79:function(t,e,a){},89:function(t,e,a){},90:function(t,e,a){},91:function(t,e,a){}}]);
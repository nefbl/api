(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{24:function(a,e,t){"use strict";var c=[],i=null;e.a=function(a,e){e=e||60;var t=document.getElementById("root-view");if(a){var n=document.getElementById("fixed-"+a);if(n){var o=n.offsetTop-e,d=t.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var n={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return c.push({id:i,createTime:new Date,tick:a,duration:e,callback:t}),n.start(),i},start:function(){i||(i=setInterval(n.tick,13))},tick:function(){var a,e,t,i,o,d,r,u=c;for((c=[]).length=0,e=0;e<u.length;e++)a=(o=u[e]).createTime,t=o.tick,d=o.duration,i=o.callback,!1,(r=(+new Date-a)/d)>=1&&!0,t(r=r>1?1:r),r<1&&o.id?c.push(o):i&&i(r);c.length<=0&&n.stop()},stop:function(){i&&(clearInterval(i),i=null)}},o=n.timer((function(e){a(e)}),e,t)}((function(a){t.scrollTop=(o-d)*a+d}),500,(function(){t.scrollTop=o}))}}else t.scrollTop=0}},29:function(a,e,t){var c=t(30);"string"==typeof c&&(c=[[a.i,c,""]]),c.locals&&(a.exports=c.locals);(0,t(1).default)("data-quickpaper-d7d5c330",c,!0)},30:function(a,e,t){(a.exports=t(0)(!1)).push([a.i,"",""])},47:function(a,e,t){"use strict";t.r(e);var c=t(24),i={basic:function(){return t.e(10).then(t.bind(null,54))}},n={data:function(){return{page:null,pagename:""}},mounted:function(){var a=this.urlFormat(window.location.href);this.openPage(a.router[1]in i?a.router[1]:"basic",a.params.fixed||"top")},methods:{openPage:function(a,e,t){var n=this;i[a]().then((function(i){n.page=i.default,n.pagename=a,"no"==t&&(window.location.href="#/course/"+a+"?fixed="+e),Object(c.a)(e)}))},doScroll:function(a){window.location.href="#/course/"+this.pagename+"?fixed="+a,Object(c.a)(a)}}};t(29);n.render=function(a){return a("div",{class:"nav-view",quickpaper:"","data-quickpaper-d7d5c330":""},[a("div",{class:"menu","data-quickpaper-d7d5c330":""},[a("ul",{":active":'pagename=="basic"?"yes":"no"',"data-quickpaper-d7d5c330":""},[a("li",{"data-quickpaper-d7d5c330":""},[a("h3",{"@click":'openPage("basic","top","no")',"data-quickpaper-d7d5c330":""},["入门"]),a("ul",{"data-quickpaper-d7d5c330":""},[a("li",{"data-quickpaper-d7d5c330":""},[a("h4",{"@click":'doScroll("basic-begin")',"data-quickpaper-d7d5c330":""},["基本说明"])]),a("li",{"data-quickpaper-d7d5c330":""},[a("h4",{"@click":'doScroll("basic-environment")',"data-quickpaper-d7d5c330":""},["搭建开发环境"])]),a("li",{"data-quickpaper-d7d5c330":""},[a("h4",{"@click":'doScroll("basic-demo")',"data-quickpaper-d7d5c330":""},["例子项目"])])])])])]),a("div",{id:"root-view",class:"view","data-quickpaper-d7d5c330":""},[a("div",{"data-quickpaper-d7d5c330":""},[a("component",{":is":"page","data-quickpaper-d7d5c330":""},[])])])])};e.default=n}}]);
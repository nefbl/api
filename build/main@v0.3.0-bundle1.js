
/*************************** [bundle] ****************************/
// Original file:./src/pages/begin/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('31');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('38');


    script.render=function(createElement){

        return createElement('div',{"class":"nav-view","quickpaper":"","data-quickpaper-b6ec1c8a":""},[createElement('div',{"class":"menu","data-quickpaper-b6ec1c8a":""},[createElement('ul',{":active":"pagename==\"introduction\"?\"yes\":\"no\"","data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h3',{"@click":"openPage(\"introduction\",\"top\",\"no\")","data-quickpaper-b6ec1c8a":""},["介绍"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"dev-background\")","data-quickpaper-b6ec1c8a":""},["开发背景"])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"issue\")","data-quickpaper-b6ec1c8a":""},["反馈"])])])])]),createElement('ul',{":active":"pagename==\"started\"?\"yes\":\"no\"","data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h3',{"@click":"openPage(\"started\",\"top\",\"no\")","data-quickpaper-b6ec1c8a":""},["开始使用"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"new\")","data-quickpaper-b6ec1c8a":""},["创建项目"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h5',{"@click":"doScroll(\"cli\")","data-quickpaper-b6ec1c8a":""},["安装cli命令"])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h5',{"@click":"doScroll(\"new-project\")","data-quickpaper-b6ec1c8a":""},["创建"])])])])])])]),createElement('ul',{":active":"pagename==\"understanding\"?\"yes\":\"no\"","data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h3',{"@click":"openPage(\"understanding\",\"top\",\"no\")","data-quickpaper-b6ec1c8a":""},["理解 Nefbl"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"startup\")","data-quickpaper-b6ec1c8a":""},["启动流程"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h5',{"@click":"doScroll(\"startup-platform\")","data-quickpaper-b6ec1c8a":""},["获取平台实例"])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h5',{"@click":"doScroll(\"startup-main-module\")","data-quickpaper-b6ec1c8a":""},["启动主模块"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h6',{"@click":"doScroll(\"startup-component\")","data-quickpaper-b6ec1c8a":""},["组件"])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h6',{"@click":"doScroll(\"startup-module\")","data-quickpaper-b6ec1c8a":""},["模块"])])])])])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"more\")","data-quickpaper-b6ec1c8a":""},["更多"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h5',{"@click":"doScroll(\"more-directive\")","data-quickpaper-b6ec1c8a":""},["指令"])])])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"module\")","data-quickpaper-b6ec1c8a":""},["多模块开发"])])])])]),createElement('ul',{":active":"pagename==\"guides\"?\"yes\":\"no\"","data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h3',{"@click":"openPage(\"guides\",\"top\",\"no\")","data-quickpaper-b6ec1c8a":""},["开发指南"]),createElement('ul',{"data-quickpaper-b6ec1c8a":""},[createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"community\")","data-quickpaper-b6ec1c8a":""},["开发者社区"])]),createElement('li',{"data-quickpaper-b6ec1c8a":""},[createElement('h4',{"@click":"doScroll(\"thanks\")","data-quickpaper-b6ec1c8a":""},["感谢"])])])])])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-b6ec1c8a":""},[createElement('div',{"data-quickpaper-b6ec1c8a":""},[createElement('component',{":is":"page","data-quickpaper-b6ec1c8a":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/begin/index.paper?QuickPaper&type=script&lang=js&hash=b6ec1c8a
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('32');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        introduction: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle3.js','34'),
        started: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle4.js','35'),
        understanding: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle5.js','36'),
        guides: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle6.js','37')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                pagename: ""
            };
        },
        mounted() {
            let urlJson = this.urlFormat(window.location.href);
            this.openPage(urlJson.router[1] in pages ? urlJson.router[1] : "introduction", urlJson.params.fixed || "top");
        },
        methods: {
            openPage(pagename, fixedName, flag) {
                pages[pagename]().then(data => {
                    this.page = data.default;
                    this.pagename = pagename;
                    if (flag == 'no') window.location.href = "#/begin/" + pagename + "?fixed=" + fixedName;
                    fixedScroll(fixedName);
                });
            },
            doScroll(fixedName) {
                window.location.href = "#/begin/" + this.pagename + "?fixed=" + fixedName;
                fixedScroll(fixedName);
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('33');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (fixed, overValue) {
  overValue = overValue || 60;
  var element = document.getElementById('root-view');

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/animation.js
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = [];
//唯一定时器的定时间隔
var $interval = 13;
//指定了动画时长duration默认值
var $speeds = 400;
//定时器ID
var $timerId = null;

/*!
 * 💡 - 动画轮播
 * https://github.com/hai2007/tool.js/blob/master/animation.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
__etcpack__scope_bundle__.default= function (doback, duration, callback) {

    // 如果没有传递时间，使用内置默认值
    if (arguments.length < 2) duration = $speeds;

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('Tick is required!');
            }
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            $timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!$timerId) {
                $timerId = setInterval(clock.tick, $interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime, needStop,
                timers = $timers;
            $timers = [];
            $timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;
                needStop = false;

                //执行
                passTime = (+new Date() - createTime) / duration;
                if (passTime >= 1) {
                    needStop = true;
                }
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    $timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if ($timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if ($timerId) {
                clearInterval($timerId);
                $timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in $timers) {
            if ($timers[i].id == id) {
                $timers[i].id = undefined;
                return;
            }
        }
    };

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/begin/index.paper?QuickPaper&type=style&lang=css&hash=b6ec1c8a
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

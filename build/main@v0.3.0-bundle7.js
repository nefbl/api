
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/basic.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('50');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('51');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-297a8048":""},[createElement('header',{"id":"fixed-top","data-quickpaper-297a8048":""},["基础"]),createElement('h2',{"id":"fixed-platform","data-quickpaper-297a8048":""},["启动"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["import { platform } from 'nefbl';"]),createElement('p',{"data-quickpaper-297a8048":""},["\"platform\"是一个用于屏蔽平台差异的方法，它会根据当前浏览器的环境来初始化后续需要使用的相关内容。其上有一些方法或属性可以使用，首先，需要获取其实例："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["let pf = platform(options);"]),createElement('h3',{"id":"fixed-platform-options","data-quickpaper-297a8048":""},["options"]),createElement('p',{"data-quickpaper-297a8048":""},["这是一个json，你可以通过这个配置项来告诉框架在屏蔽浏览器差异的时候你的一些额外意图。"]),createElement('h4',{"id":"fixed-platform-options-el","data-quickpaper-297a8048":""},["el"]),createElement('p',{"data-quickpaper-297a8048":""},["必输，值需要是一个结点对象，表示此框架后续需要管理的区域。"]),createElement('h4',{"id":"fixed-platform-options-styles","data-quickpaper-297a8048":""},["styles"]),createElement('p',{"data-quickpaper-297a8048":""},["一个数组，数组的内容应该是css字符串，用以设置全局css。"]),createElement('h3',{"id":"fixed-platform-return","data-quickpaper-297a8048":""},["实例"]),createElement('p',{"data-quickpaper-297a8048":""},["\"platform\"执行后的实例\"pf\"，是一个对象，下面列出其中可用的方法或属性。"]),createElement('h4',{"id":"fixed-platform-return-bootstrap","data-quickpaper-297a8048":""},["bootstrap"]),createElement('p',{"data-quickpaper-297a8048":""},["这是一个方法，用于启动模块（主模块）："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["import appModule from \"./app.module\";↵pf.bootstrap(appModule);"]),createElement('h2',{"id":"fixed-module","data-quickpaper-297a8048":""},["模块"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["@Module(options)↵export default class {↵    // todo↵};"]),createElement('h3',{"id":"fixed-module-options","data-quickpaper-297a8048":""},["options"]),createElement('p',{"data-quickpaper-297a8048":""},["这是一个json，你可以通过这个配置项来配置模块，下面是所有可用的配置项。"]),createElement('h4',{"id":"fixed-module-options-bootstrap","data-quickpaper-297a8048":""},["bootstrap"]),createElement('p',{"data-quickpaper-297a8048":""},["值应该是一个组件，表示当前模块的启动组件，只有主模块需要配置。"]),createElement('h4',{"id":"fixed-module-options-declarations","data-quickpaper-297a8048":""},["declarations"]),createElement('p',{"data-quickpaper-297a8048":""},["值应该是一个数组，用于声明本模块具有的组件、指令。"]),createElement('h4',{"id":"fixed-module-options-imports","data-quickpaper-297a8048":""},["imports"]),createElement('p',{"data-quickpaper-297a8048":""},["值应该是一个数组，在这里引入别的模块，引入就意味着，本模块具有引入模块的组件、指令（需要在exports中登记）。"]),createElement('h4',{"id":"fixed-module-options-exports","data-quickpaper-297a8048":""},["exports"]),createElement('p',{"data-quickpaper-297a8048":""},["值应该是一个数组，暴露的内容，如果别的模块想用本模块的内容，需要本模块这此处暴露。"]),createElement('h2',{"id":"fixed-define","data-quickpaper-297a8048":""},["自定义"]),createElement('p',{"data-quickpaper-297a8048":""},["在大部分情况，你都需要自定义一些扩展，自定义扩展需要遵循一定的规则。"]),createElement('h3',{"id":"fixed-component","data-quickpaper-297a8048":""},["组件"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["@Component({↵    selector: string,↵    template: string,↵    styles: Array<string>↵})↵export default class {↵    // todo↵};"]),createElement('h4',{"id":"fixed-component-setup","data-quickpaper-297a8048":""},["$setup"]),createElement('p',{"data-quickpaper-297a8048":""},["一个方法，应该返回一个json，用于定义双向绑定的数据和方法。"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["$setup(){↵    return {↵        doit(){↵            // todo↵        }↵    };↵}"]),createElement('p',{"data-quickpaper-297a8048":""},["我们可以看到，我们定义了一个方法doit，这样，你就可以通过this.doit在定义的别的方法或生命周期钩子中调用了。"]),createElement('p',{"data-quickpaper-297a8048":""},["对于双向绑定的数据，你需要借助两个方法："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["import { reactive, ref } from 'nefbl';↵...↵    @setup(){↵↵        let info = ref('1');↵        let infoObj = reactive({});↵↵        return {↵            info,↵            infoObj↵        };↵    }↵..."]),createElement('p',{"data-quickpaper-297a8048":""},["在对象方法或者生命周期中修改数据（我们把info举例子），只需要这样："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["this.info=新值;"]),createElement('p',{"data-quickpaper-297a8048":""},["如果是在普通的方法中修复，需要这样："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["info.value=新值;"]),createElement('h4',{"id":"fixed-component-hook","data-quickpaper-297a8048":""},["钩子"]),createElement('p',{"data-quickpaper-297a8048":""},["class里面可以定义启动方法和生命周期钩子等方法。"]),createElement('h5',{"id":"fixed-component-mounted","data-quickpaper-297a8048":""},["$mounted"]),createElement('p',{"data-quickpaper-297a8048":""},["组件挂载完成执行。"]),createElement('h5',{"id":"fixed-component-beforeUpdate","data-quickpaper-297a8048":""},["$beforeUpdate"]),createElement('p',{"data-quickpaper-297a8048":""},["数据改变导致的更新执行前触发。"]),createElement('h5',{"id":"fixed-component-updated","data-quickpaper-297a8048":""},["$updated"]),createElement('p',{"data-quickpaper-297a8048":""},["数据改变导致的更新执行后触发。"]),createElement('h3',{"id":"fixed-directive","data-quickpaper-297a8048":""},["指令"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["@Directive({↵    selector: string↵})↵export default class {↵    // todo↵};"]),createElement('h4',{"id":"fixed-directive-hook","data-quickpaper-297a8048":""},["钩子"]),createElement('p',{"data-quickpaper-297a8048":""},["class里面可以定义生命周期钩子等方法。"]),createElement('h5',{"id":"fixed-directive-inserted","data-quickpaper-297a8048":""},["$inserted"]),createElement('p',{"data-quickpaper-297a8048":""},["指令第一次生效的时候执行。"]),createElement('h5',{"id":"fixed-directive-update","data-quickpaper-297a8048":""},["$update"]),createElement('p',{"data-quickpaper-297a8048":""},["数据改变导致的更新触发。"]),createElement('p',{"data-quickpaper-297a8048":""},["所有的生命周期钩子，其实就是一个方法，语法如下："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["function(el, binding){↵    // todo↵}"]),createElement('p',{"data-quickpaper-297a8048":""},["其中el表示指令所在的DOM结点，binding是一个json，记录着一些信息。"]),createElement('p',{"data-quickpaper-297a8048":""},["指令使用的时候，基本格式如下："]),createElement('pre',{"q-code":"html","data-quickpaper-297a8048":""},["<XXX ui-demo:type='exp'></XXX>"]),createElement('p',{"data-quickpaper-297a8048":""},["binding就记录了指令在使用的时候的详细信息："]),createElement('ul',{"data-quickpaper-297a8048":""},[createElement('li',{"data-quickpaper-297a8048":""},[createElement('span',{"class":"important","data-quickpaper-297a8048":""},["type"]),"：ui-demo是指令的名字，type是补充的额外信息。"]),createElement('li',{"data-quickpaper-297a8048":""},[createElement('span',{"class":"important","data-quickpaper-297a8048":""},["exp"]),"：指令本身就是属性，exp相当于属性值。"]),createElement('li',{"data-quickpaper-297a8048":""},[createElement('span',{"class":"important","data-quickpaper-297a8048":""},["value"]),"：属性值在当前组件对象上作为表达式解析后的值。"]),createElement('li',{"data-quickpaper-297a8048":""},[createElement('span',{"class":"important","data-quickpaper-297a8048":""},["target"]),"：当前组件对象实例。"])]),createElement('div',{"class":"doc-view more-view","data-quickpaper-297a8048":""},[createElement('h1',{"id":"fixed-more","@click":"doScroll(\"more\")","data-quickpaper-297a8048":""},["更多"]),createElement('p',{"data-quickpaper-297a8048":""},["在这里，我们对基础部分中一些不常用的进行补充，这些内容可能会对你更深入的使用本框架或者进行更灵活的设计有所帮助。"]),createElement('h2',{"id":"fixed-more-attribute","@click":"doScroll(\"more-attribute\")","data-quickpaper-297a8048":""},["对象属性"]),createElement('p',{"data-quickpaper-297a8048":""},["就是实例化的时候，当前对象上自动具有的属性值。"]),createElement('h3',{"id":"fixed-more-attribute-_module","@click":"doScroll(\"more-attribute-_module\")","data-quickpaper-297a8048":""},["_module"]),createElement('p',{"data-quickpaper-297a8048":""},["存在于组件和指令对象上，表示当前所在的模块实例。"]),createElement('h2',{"id":"fixed-more-method","@click":"doScroll(\"more-method\")","data-quickpaper-297a8048":""},["导出方法"]),createElement('p',{"data-quickpaper-297a8048":""},["也就是可以通过nefbl直接导入的方法，语法如下（比如XXX方法）："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["import { XXX } from 'nefbl';"]),createElement('h3',{"id":"fixed-more-method-mountComponent","@click":"doScroll(\"more-method-mountComponent\")","data-quickpaper-297a8048":""},["mountComponent"]),createElement('p',{"data-quickpaper-297a8048":""},["此方法用于在指定的结点主动挂载组件："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["mountComponent(el, Component, module);"]),createElement('p',{"data-quickpaper-297a8048":""},["el和module分别表示挂载点DOM和当前模块实例，而Component表示组件（非实例对象）。"]),createElement('h3',{"id":"fixed-more-method-evalExpress","@click":"doScroll(\"more-method-evalExpress\")","data-quickpaper-297a8048":""},["evalExpress"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["let value = evalExpress(target, express, scope = {});"]),createElement('p',{"data-quickpaper-297a8048":""},["在指定对象target上求解表达式express的值。一个可选参数scope表示，如果scope有值，会拦截target。"]),createElement('h3',{"id":"fixed-more-method-getValue","@click":"doScroll(\"more-method-getValue\")","data-quickpaper-297a8048":""},["getValue"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["let value=getValue(target, express, scope = {});"]),createElement('p',{"data-quickpaper-297a8048":""},["获取对象上字符串表达式对应的值。一个可选参数scope表示，如果scope有值，会拦截target。"]),createElement('h3',{"id":"fixed-more-method-setValue","@click":"doScroll(\"more-method-setValue\")","data-quickpaper-297a8048":""},["setValue"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["let newTarget=setValue(target, express, value, scope = {});"]),createElement('p',{"data-quickpaper-297a8048":""},["设置对象上字符串表达式对应的值，虽然会返回新的值，不过旧的值也同步修改了。一个可选参数scope表示，如果scope有值，会拦截target。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/basic.paper?QuickPaper&type=script&lang=js&hash=297a8048
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('32');
var fixedScroll =__etcpack__scope_args__.default;


    __etcpack__scope_bundle__.default= {
        methods: {
            doScroll(fixedName) {
                window.location.href = "#/api/basic?fixed=" + fixedName;
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
// Original file:./src/pages/api/basic.paper?QuickPaper&type=style&lang=css&hash=297a8048
/*****************************************************************/
window.__etcpack__bundleSrc__['51']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .more-view[data-quickpaper-297a8048]{\n\nbackground-color: #efebea;\n\nmargin: 40px 0;\n\npadding: 50px;\n\n}\n\n .more-view[data-quickpaper-297a8048]::before{\n\nbackground-image: url(./image/paper.png);\n\ntransform: rotate(96deg);\n\nbackground-size: auto auto;\n\nwidth: 200px;\n\nheight: 250px;\n\nbackground-position: 0 0;\n\nbackground-repeat: no-repeat;\n\ncontent: \" \";\n\nfloat: right;\n\nmargin-top: -44px;\n\n}\n\n .more-view pre[data-quickpaper-297a8048]{\n\nbackground-color: #fefefe !important;\n\n}\n\n .more-view h1[data-quickpaper-297a8048], .more-view h2[data-quickpaper-297a8048], .more-view h3[data-quickpaper-297a8048]{\n\ncursor: pointer;\n\n}\n\n .more-view h1[data-quickpaper-297a8048]:hover, .more-view h2[data-quickpaper-297a8048]:hover, .more-view h3[data-quickpaper-297a8048]:hover{\n\ntext-decoration: underline;\n\n}\n\n .more-view h1[data-quickpaper-297a8048]{\n\npadding: 30px 0;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

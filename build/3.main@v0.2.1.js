(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{37:function(e,a,p){var d=p(38);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,p(1).default)("data-quickpaper-34810deb",d,!0)},38:function(e,a,p){(e.exports=p(0)(!1)).push([e.i,"",""])},45:function(e,a,p){"use strict";p.r(a);var d={};p(37);d.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-34810deb":""},[e("header",{id:"fixed-top","data-quickpaper-34810deb":""},["基础"]),e("h2",{id:"fixed-platform","data-quickpaper-34810deb":""},["启动"]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["import { platform } from 'nefbl';"]),e("p",{"data-quickpaper-34810deb":""},['"platform"是一个用于屏蔽平台差异的方法，它会根据当前浏览器的环境来初始化后续需要使用的相关内容。其上有一些方法或属性可以使用，首先，需要获取其实例：']),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["let pf = platform(options);"]),e("h3",{id:"fixed-platform-options","data-quickpaper-34810deb":""},["options"]),e("p",{"data-quickpaper-34810deb":""},["这是一个json，你可以通过这个配置项来告诉框架在屏蔽浏览器差异的时候你的一些额外意图。"]),e("h4",{id:"fixed-platform-options-el","data-quickpaper-34810deb":""},["el"]),e("p",{"data-quickpaper-34810deb":""},["必输，值需要是一个结点对象，表示此框架后续需要管理的区域。"]),e("h4",{id:"fixed-platform-options-styles","data-quickpaper-34810deb":""},["styles"]),e("p",{"data-quickpaper-34810deb":""},["一个数组，数组的内容应该是css字符串，用以设置全局css。"]),e("h3",{id:"fixed-platform-return","data-quickpaper-34810deb":""},["实例"]),e("p",{"data-quickpaper-34810deb":""},['"platform"执行后的实例"pf"，是一个对象，下面列出其中可用的方法或属性。']),e("h4",{id:"fixed-platform-return-bootstrap","data-quickpaper-34810deb":""},["bootstrap"]),e("p",{"data-quickpaper-34810deb":""},["这是一个方法，用于启动模块（主模块）："]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},['import appModule from "./app.module";↵pf.bootstrap(appModule);']),e("h2",{id:"fixed-module","data-quickpaper-34810deb":""},["模块"]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["@Module(options)↵export default class {↵    // todo↵};"]),e("h3",{id:"fixed-module-options","data-quickpaper-34810deb":""},["options"]),e("p",{"data-quickpaper-34810deb":""},["这是一个json，你可以通过这个配置项来配置模块，下面是所有可用的配置项。"]),e("h4",{id:"fixed-module-options-bootstrap","data-quickpaper-34810deb":""},["bootstrap"]),e("p",{"data-quickpaper-34810deb":""},["值应该是一个组件，表示当前模块的启动组件，只有主模块需要配置。"]),e("h4",{id:"fixed-module-options-declarations","data-quickpaper-34810deb":""},["declarations"]),e("p",{"data-quickpaper-34810deb":""},["值应该是一个数组，用于声明本模块具有的组件、指令。"]),e("h4",{id:"fixed-module-options-imports","data-quickpaper-34810deb":""},["imports"]),e("p",{"data-quickpaper-34810deb":""},["值应该是一个数组，在这里引入别的模块，引入就意味着，本模块具有引入模块的组件、指令（需要在exports中登记）。"]),e("h4",{id:"fixed-module-options-exports","data-quickpaper-34810deb":""},["exports"]),e("p",{"data-quickpaper-34810deb":""},["值应该是一个数组，暴露的内容，如果别的模块想用本模块的内容，需要本模块这此处暴露。"]),e("h2",{id:"fixed-define","data-quickpaper-34810deb":""},["自定义"]),e("p",{"data-quickpaper-34810deb":""},["在大部分情况，你都需要自定义一些扩展，自定义扩展需要遵循一定的规则。"]),e("h3",{id:"fixed-component","data-quickpaper-34810deb":""},["组件"]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["@Component({↵    selector: string,↵    template: string,↵    styles: Array<string>↵})↵export default class {↵    // todo↵};"]),e("h4",{id:"fixed-component-setup","data-quickpaper-34810deb":""},["$setup"]),e("p",{"data-quickpaper-34810deb":""},["一个方法，应该返回一个json，用于定义双向绑定的数据和方法。"]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["$setup(){↵    return {↵        doit(){↵            // todo↵        }↵    };↵}"]),e("p",{"data-quickpaper-34810deb":""},["我们可以看到，我们定义了一个方法doit，这样，你就可以通过this.doit在定义的别的方法或生命周期钩子中调用了。"]),e("p",{"data-quickpaper-34810deb":""},["对于双向绑定的数据，你需要借助两个方法："]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["import { reactive, ref } from 'nefbl';↵...↵    @setup(){↵↵        let info = ref('1');↵        let infoObj = reactive({});↵↵        return {↵            info,↵            infoObj↵        };↵    }↵..."]),e("h4",{id:"fixed-component-hook","data-quickpaper-34810deb":""},["钩子"]),e("p",{"data-quickpaper-34810deb":""},["class里面可以定义启动方法和生命周期钩子等方法。"]),e("h5",{id:"fixed-component-mounted","data-quickpaper-34810deb":""},["$mounted"]),e("p",{"data-quickpaper-34810deb":""},["组件挂载完成执行。"]),e("h5",{id:"fixed-component-beforeUpdate","data-quickpaper-34810deb":""},["$beforeUpdate"]),e("p",{"data-quickpaper-34810deb":""},["数据改变导致的更新执行前触发。"]),e("h5",{id:"fixed-component-updated","data-quickpaper-34810deb":""},["$updated"]),e("p",{"data-quickpaper-34810deb":""},["数据改变导致的更新执行后触发。"]),e("h3",{id:"fixed-directive","data-quickpaper-34810deb":""},["指令"]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["@Directive({↵    selector: string↵})↵export default class {↵    // todo↵};"]),e("h4",{id:"fixed-directive-hook","data-quickpaper-34810deb":""},["钩子"]),e("p",{"data-quickpaper-34810deb":""},["class里面可以定义生命周期钩子等方法。"]),e("h5",{id:"fixed-directive-inserted","data-quickpaper-34810deb":""},["$inserted"]),e("p",{"data-quickpaper-34810deb":""},["指令第一次生效的时候执行。"]),e("h5",{id:"fixed-directive-update","data-quickpaper-34810deb":""},["$update"]),e("p",{"data-quickpaper-34810deb":""},["数据改变导致的更新触发。"]),e("p",{"data-quickpaper-34810deb":""},["所有的生命周期钩子，其实就是一个方法，语法如下："]),e("pre",{"q-code":"","data-quickpaper-34810deb":""},["function(el, binding){↵    // todo↵}"]),e("p",{"data-quickpaper-34810deb":""},["其中el表示指令所在的DOM结点，binding是一个json，记录着一些信息。"]),e("p",{"data-quickpaper-34810deb":""},["指令使用的时候，基本格式如下："]),e("pre",{"q-code":"html","data-quickpaper-34810deb":""},["<XXX ui-demo:type='exp'></XXX>"]),e("p",{"data-quickpaper-34810deb":""},["binding就记录了指令在使用的时候的详细信息："]),e("ul",{"data-quickpaper-34810deb":""},[e("li",{"data-quickpaper-34810deb":""},[e("span",{class:"important","data-quickpaper-34810deb":""},["type"]),"：ui-demo是指令的名字，type是补充的额外信息。"]),e("li",{"data-quickpaper-34810deb":""},[e("span",{class:"important","data-quickpaper-34810deb":""},["exp"]),"：指令本身就是属性，exp相当于属性值。"]),e("li",{"data-quickpaper-34810deb":""},[e("span",{class:"important","data-quickpaper-34810deb":""},["value"]),"：属性值在当前组件对象上作为表达式解析后的值。"])])])};a.default=d}}]);
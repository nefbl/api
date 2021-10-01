(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{39:function(a,e,d){var p=d(40);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,d(1).default)("data-quickpaper-f8f3deaa",p,!0)},40:function(a,e,d){(a.exports=d(0)(!1)).push([a.i,"",""])},48:function(a,e,d){"use strict";d.r(e);var p={};d(39);p.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-f8f3deaa":""},[a("header",{id:"fixed-top","data-quickpaper-f8f3deaa":""},["高级"]),a("h2",{id:"fixed-define","data-quickpaper-f8f3deaa":""},["自定义"]),a("p",{"data-quickpaper-f8f3deaa":""},["在大部分情况，你都需要自定义一些扩展，自定义扩展需要遵循一定的规则。"]),a("h3",{id:"fixed-component","data-quickpaper-f8f3deaa":""},["组件"]),a("pre",{"q-code":"","data-quickpaper-f8f3deaa":""},["@Component({↵    selector: string,↵    template: string,↵    styles: Array<string>↵})↵export default class {↵    // todo↵};"]),a("p",{"data-quickpaper-f8f3deaa":""},["class里面可以定义启动方法和生命周期钩子等方法。"]),a("h4",{id:"fixed-component-setup","data-quickpaper-f8f3deaa":""},["$setup"]),a("p",{"data-quickpaper-f8f3deaa":""},["一个方法，应该返回一个json，用于定义双向绑定的数据和方法。"]),a("pre",{"q-code":"","data-quickpaper-f8f3deaa":""},["$setup(){↵    return {↵        doit(){↵            // todo↵        }↵    };↵}"]),a("p",{"data-quickpaper-f8f3deaa":""},["我们可以看到，我们定义了一个方法doit，这样，你就可以通过this.doit在定义的别的方法或生命周期钩子中调用了。"]),a("p",{"data-quickpaper-f8f3deaa":""},["对于双向绑定的数据，你需要借助两个方法："]),a("pre",{"q-code":"","data-quickpaper-f8f3deaa":""},["import { reactive, ref } from 'nefbl';↵...↵    @setup(){↵↵        let info = ref('1');↵        let infoObj = reactive({});↵↵        return {↵            info,↵            infoObj↵        };↵    }↵..."]),a("h4",{id:"fixed-component-mounted","data-quickpaper-f8f3deaa":""},["$mounted"]),a("p",{"data-quickpaper-f8f3deaa":""},["组件挂载完成执行。"]),a("h4",{id:"fixed-component-beforeUpdate","data-quickpaper-f8f3deaa":""},["$beforeUpdate"]),a("p",{"data-quickpaper-f8f3deaa":""},["数据改变导致的更新执行前触发。"]),a("h4",{id:"fixed-component-updated","data-quickpaper-f8f3deaa":""},["$updated"]),a("p",{"data-quickpaper-f8f3deaa":""},["数据改变导致的更新执行后触发。"]),a("h3",{id:"fixed-directive","data-quickpaper-f8f3deaa":""},["指令"]),a("pre",{"q-code":"","data-quickpaper-f8f3deaa":""},["@Directive({↵    selector: string↵})↵export default class {↵    // todo↵};"]),a("p",{"data-quickpaper-f8f3deaa":""},["class里面可以定义生命周期钩子等方法。"]),a("h4",{id:"fixed-directive-inserted","data-quickpaper-f8f3deaa":""},["$inserted"]),a("p",{"data-quickpaper-f8f3deaa":""},["指令第一次生效的时候执行。"]),a("h4",{id:"fixed-directive-update","data-quickpaper-f8f3deaa":""},["$update"]),a("p",{"data-quickpaper-f8f3deaa":""},["数据改变导致的更新触发。"]),a("p",{"data-quickpaper-f8f3deaa":""},["所有的生命周期钩子，其实就是一个方法，语法如下："]),a("pre",{"q-code":"","data-quickpaper-f8f3deaa":""},["function(el, binding){↵    // todo↵}"]),a("p",{"data-quickpaper-f8f3deaa":""},["其中el表示指令所在的DOM结点，binding是一个json，记录着一些信息。"]),a("p",{"data-quickpaper-f8f3deaa":""},["指令使用的时候，基本格式如下："]),a("pre",{"q-code":"html","data-quickpaper-f8f3deaa":""},["<XXX ui-demo:type='exp'></XXX>"]),a("p",{"data-quickpaper-f8f3deaa":""},["binding就记录了指令在使用的时候的详细信息："]),a("ul",{"data-quickpaper-f8f3deaa":""},[a("li",{"data-quickpaper-f8f3deaa":""},[a("span",{class:"important","data-quickpaper-f8f3deaa":""},["type"]),"：ui-demo是指令的名字，type是补充的额外信息。"]),a("li",{"data-quickpaper-f8f3deaa":""},[a("span",{class:"important","data-quickpaper-f8f3deaa":""},["exp"]),"：指令本身就是属性，exp相当于属性值。"]),a("li",{"data-quickpaper-f8f3deaa":""},[a("span",{class:"important","data-quickpaper-f8f3deaa":""},["value"]),"：属性值在当前组件对象上作为表达式解析后的值。"])]),a("h2",{id:"fixed-module","data-quickpaper-f8f3deaa":""},["模块"]),a("p",{"data-quickpaper-f8f3deaa":""},["虽然一个模块也是可以的，不过如果项目规模越来越大的时候，多模块会是更好的选择。"]),a("pre",{"q-code":"","data-quickpaper-f8f3deaa":""},["@Module(options)↵export default class {↵    // todo↵};"]),a("h3",{id:"fixed-module-options","data-quickpaper-f8f3deaa":""},["options"]),a("p",{"data-quickpaper-f8f3deaa":""},["这是一个json，你可以通过这个配置项来配置模块，下面是所有可用的配置项。"]),a("h4",{id:"fixed-module-options-bootstrap","data-quickpaper-f8f3deaa":""},["bootstrap"]),a("p",{"data-quickpaper-f8f3deaa":""},["值应该是一个组件，表示当前模块的启动组件，只有主模块需要配置。"]),a("h4",{id:"fixed-module-options-declarations","data-quickpaper-f8f3deaa":""},["declarations"]),a("p",{"data-quickpaper-f8f3deaa":""},["值应该是一个数组，用于声明本模块具有的组件、指令。"]),a("h4",{id:"fixed-module-options-imports","data-quickpaper-f8f3deaa":""},["imports"]),a("p",{"data-quickpaper-f8f3deaa":""},["值应该是一个数组，在这里引入别的模块，引入就意味着，本模块具有引入模块的组件、指令（需要在exports中登记）。"]),a("h4",{id:"fixed-module-options-exports","data-quickpaper-f8f3deaa":""},["exports"]),a("p",{"data-quickpaper-f8f3deaa":""},["值应该是一个数组，暴露的内容，如果别的模块想用本模块的内容，需要本模块这此处暴露。"])])};e.default=p}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{35:function(a,p,d){var e=d(36);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,d(1).default)("data-quickpaper-15090d70",e,!0)},36:function(a,p,d){(a.exports=d(0)(!1)).push([a.i,"",""])},50:function(a,p,d){"use strict";d.r(p);var e={};d(35);e.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-15090d70":""},[a("header",{id:"fixed-top","data-quickpaper-15090d70":""},["理解 Nefbl"]),a("h2",{id:"fixed-startup","data-quickpaper-15090d70":""},["启动流程"]),a("h3",{id:"fixed-startup-platform","data-quickpaper-15090d70":""},["获取平台实例"]),a("p",{"data-quickpaper-15090d70":""},['由于不同浏览器存在差异，可是，这些差异在浏览器确定以后，就确定了，因此，在框架真正启动前，我们通过下面的方法获取一个"了解"当前浏览器的对象，就像这样：']),a("pre",{"q-code":"","data-quickpaper-15090d70":""},["import { platform } from 'nefbl';↵let pf = platform(config);"]),a("p",{"data-quickpaper-15090d70":""},["你可以传递一个config来包含你的一些原始意图。后续框架的所有浏览器相关操作，都会直接或间接的使用此对象实现。"]),a("h3",{id:"fixed-startup-main-module","data-quickpaper-15090d70":""},["启动主模块"]),a("p",{"data-quickpaper-15090d70":""},["我们通过把项目按照一定的规律（比如业务规则和复用情况，划分不同的业务模块和通用的技术模块）划分成不同的模块，这样利于代码的管理。"]),a("p",{"data-quickpaper-15090d70":""},["模块直接可以互相依赖，不过，需要一个模块来作为项目启动入口，这就是主模块。"]),a("pre",{"q-code":"","data-quickpaper-15090d70":""},['import appModule from "./app.module";↵pf.bootstrap(appModule);']),a("p",{"data-quickpaper-15090d70":""},["通过刚刚获取的",a("span",{class:"important","data-quickpaper-15090d70":""},["对象pf"]),"上的方法启动主模块，然后通过模块之间的依赖，就启动了整个项目。"]),a("h4",{id:"fixed-startup-component","data-quickpaper-15090d70":""},["组件"]),a("p",{"data-quickpaper-15090d70":""},["简单的理解就是标签，比如div、a、p等，通过自定义组件的方式，可以提供更强功能的标签。"]),a("pre",{"q-code":"","data-quickpaper-15090d70":""},["@Component({↵    selector: string,↵    template: string,↵    style: string↵})↵export default class {↵    // todo↵};"]),a("p",{"data-quickpaper-15090d70":""},["如上所示，我们通过",a("span",{class:"important","data-quickpaper-15090d70":""},["装饰器"]),'来规定了当前组件的标签名、模板和样式，然后，你可以在"// todo"的位置编辑逻辑代码。']),a("h4",{id:"fixed-startup-module","data-quickpaper-15090d70":""},["模块"]),a("p",{"data-quickpaper-15090d70":""},["模块就是一个负责管理资源的对象，主模块也是模块。"]),a("pre",{"q-code":"","data-quickpaper-15090d70":""},["@Module({})↵export default class {↵    // todo↵};"]),a("p",{"data-quickpaper-15090d70":""},["类似的，可以通过",a("span",{class:"important","data-quickpaper-15090d70":""},["装饰器"]),'来定义模块的一些基本行为，比如依赖关系等，更复杂的内容在"// todo"的位置编辑。']),a("h2",{id:"fixed-more","data-quickpaper-15090d70":""},["更多"]),a("p",{"data-quickpaper-15090d70":""},["模块和组件是一个项目必须的，除此之外，还有别的特殊功能的抽象。"]),a("h3",{id:"fixed-more-directive","data-quickpaper-15090d70":""},["指令"]),a("pre",{"q-code":"","data-quickpaper-15090d70":""},["@Directive({})↵export default class {↵    // todo↵};"]),a("p",{"data-quickpaper-15090d70":""},["和组件类似，指令对应着浏览器的属性，用于自定义具有特殊功能的标签属性。"]),a("h2",{id:"fixed-module","data-quickpaper-15090d70":""},["多模块开发"]),a("p",{"data-quickpaper-15090d70":""},["不同的模块用于不同的组件、指令、服务等，比如不同模块的服务无法直接互相调用，需要借助模块的依赖关系，这样的好处是，益于维护，特别是当项目特别庞大的时候。"])])};p.default=e}}]);
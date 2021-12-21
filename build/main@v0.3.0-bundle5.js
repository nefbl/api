
/*************************** [bundle] ****************************/
// Original file:./src/pages/begin/understanding.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('46');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('47');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-551e20e6":""},[createElement('header',{"id":"fixed-top","data-quickpaper-551e20e6":""},["理解 Nefbl"]),createElement('h2',{"id":"fixed-startup","data-quickpaper-551e20e6":""},["启动流程"]),createElement('h3',{"id":"fixed-startup-platform","data-quickpaper-551e20e6":""},["获取平台实例"]),createElement('p',{"data-quickpaper-551e20e6":""},["由于不同浏览器存在差异，可是，这些差异在浏览器确定以后，就确定了，因此，在框架真正启动前，我们通过下面的方法获取一个\"了解\"当前浏览器的对象，就像这样："]),createElement('pre',{"q-code":"","data-quickpaper-551e20e6":""},["import { platform } from 'nefbl';↵let pf = platform(config);"]),createElement('p',{"data-quickpaper-551e20e6":""},["你可以传递一个config来包含你的一些原始意图。后续框架的所有浏览器相关操作，都会直接或间接的使用此对象实现。"]),createElement('h3',{"id":"fixed-startup-main-module","data-quickpaper-551e20e6":""},["启动主模块"]),createElement('p',{"data-quickpaper-551e20e6":""},["我们通过把项目按照一定的规律（比如业务规则和复用情况，划分不同的业务模块和通用的技术模块）划分成不同的模块，这样利于代码的管理。"]),createElement('p',{"data-quickpaper-551e20e6":""},["模块直接可以互相依赖，不过，需要一个模块来作为项目启动入口，这就是主模块。"]),createElement('pre',{"q-code":"","data-quickpaper-551e20e6":""},["import appModule from \"./app.module\";↵pf.bootstrap(appModule);"]),createElement('p',{"data-quickpaper-551e20e6":""},["通过刚刚获取的",createElement('span',{"class":"important","data-quickpaper-551e20e6":""},["对象pf"]),"上的方法启动主模块，然后通过模块之间的依赖，就启动了整个项目。"]),createElement('h4',{"id":"fixed-startup-component","data-quickpaper-551e20e6":""},["组件"]),createElement('p',{"data-quickpaper-551e20e6":""},["简单的理解就是标签，比如div、a、p等，通过自定义组件的方式，可以提供更强功能的标签。"]),createElement('pre',{"q-code":"","data-quickpaper-551e20e6":""},["@Component({↵    selector: string,↵    template: string,↵    styles: Array<string>↵})↵export default class {↵    // todo↵};"]),createElement('p',{"data-quickpaper-551e20e6":""},["如上所示，我们通过",createElement('span',{"class":"important","data-quickpaper-551e20e6":""},["装饰器"]),"来规定了当前组件的标签名、模板和样式，然后，你可以在\"// todo\"的位置编辑逻辑代码。"]),createElement('h4',{"id":"fixed-startup-module","data-quickpaper-551e20e6":""},["模块"]),createElement('p',{"data-quickpaper-551e20e6":""},["模块就是一个负责管理资源的对象，主模块也是模块。"]),createElement('pre',{"q-code":"","data-quickpaper-551e20e6":""},["@Module({})↵export default class {↵    // todo↵};"]),createElement('p',{"data-quickpaper-551e20e6":""},["类似的，可以通过",createElement('span',{"class":"important","data-quickpaper-551e20e6":""},["装饰器"]),"来定义模块的一些基本行为，比如依赖关系等，更复杂的内容在\"// todo\"的位置编辑。"]),createElement('h2',{"id":"fixed-more","data-quickpaper-551e20e6":""},["更多"]),createElement('p',{"data-quickpaper-551e20e6":""},["模块和组件是一个项目必须的，除此之外，还有别的特殊功能的抽象。"]),createElement('h3',{"id":"fixed-more-directive","data-quickpaper-551e20e6":""},["指令"]),createElement('pre',{"q-code":"","data-quickpaper-551e20e6":""},["@Directive({})↵export default class {↵    // todo↵};"]),createElement('p',{"data-quickpaper-551e20e6":""},["和组件类似，指令对应着浏览器的属性，用于自定义具有特殊功能的标签属性。"]),createElement('h2',{"id":"fixed-module","data-quickpaper-551e20e6":""},["多模块开发"]),createElement('p',{"data-quickpaper-551e20e6":""},["不同的模块用于不同的组件、指令、服务等，比如不同模块的服务无法直接互相调用，需要借助模块的依赖关系，这样的好处是，益于维护，特别是当项目特别庞大的时候。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/begin/understanding.paper?QuickPaper&type=script&lang=js&hash=551e20e6
/*****************************************************************/
window.__etcpack__bundleSrc__['46']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/begin/understanding.paper?QuickPaper&type=style&lang=css&hash=551e20e6
/*****************************************************************/
window.__etcpack__bundleSrc__['47']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

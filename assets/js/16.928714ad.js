(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{194:function(s,t,a){s.exports=a.p+"assets/img/13.c169d66d.png"},195:function(s,t,a){s.exports=a.p+"assets/img/14.7f1fb5f3.png"},196:function(s,t,a){s.exports=a.p+"assets/img/15.8b4eb9dc.png"},197:function(s,t,a){s.exports=a.p+"assets/img/16.f10d3daa.png"},198:function(s,t,a){s.exports=a.p+"assets/img/17.20f19fea.png"},389:function(s,t,a){"use strict";a.r(t);var n=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"flutter-集成到已有的项目中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-集成到已有的项目中","aria-hidden":"true"}},[s._v("#")]),s._v(" Flutter  - 集成到已有的项目中")]),s._v(" "),n("h2",{attrs:{id:"创建一个-flutter-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-flutter-module","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建一个 Flutter module")]),s._v(" "),n("p",[s._v("让我们假设你有一个已经存在的iOS项目在 如下如位置：\n"),n("img",{attrs:{src:a(194),alt:""}})]),s._v(" "),n("p",[s._v("并且你想要你的Flutter项目跟iOS项目在同一级目录，执行如下命令：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("$ cd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Users"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Desktop"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("flutterExisting"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("MyFlutterDemo \n\n$ flutter create "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t module my_flutter\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这里会创建一个 Flutter module 项目，包含一下Dart代码在隐藏的文件夹.ios/ 里面。\n执行完命令后会创建如下目录结构：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(195),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"让主项目依赖flutter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#让主项目依赖flutter","aria-hidden":"true"}},[s._v("#")]),s._v(" 让主项目依赖Flutter")]),s._v(" "),n("p",[s._v("添加以下代码到你的 Podfile文件中:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("source "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git@github.com/CocoaPods/Specs.git'")]),s._v("\nplatform "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8.0'")]),s._v("\n\n#inhibit_all_warnings"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n flutter_application_path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_flutter/'")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("File"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("File"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flutter_application_path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.ios'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Flutter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'podhelper.rb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" binding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ndef common\n\n    pod "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SDWebImage'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.7.5'")]),s._v("\nend\n\ntarget "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyFlutterDemo'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    common\nend\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("执行：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("$ pod install\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果你要在/my_flutter/pubspec.yaml 修改Flutter插件的依赖，你需要在/my_flutter下执行‘flutter packages get’，通过 podhelp.rb 脚本来刷新插件列表。然后再次运行‘pod install’ 在iOS的Podfile目录下。\n这个 podhelper.rb 脚本会确保你的插件和Flutter.framework添加到你的项目中。")]),s._v(" "),n("h2",{attrs:{id:"添加-build-phase-用来构建dart代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加-build-phase-用来构建dart代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加 build phase 用来构建Dart代码")]),s._v(" "),n("p",[s._v("在MyFlutterDemo->TARGETS->Build Phases\n点击加号，选择 New Run Script Phase，复制下面内容")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$FLUTTER_ROOT/packages/flutter_tools/bin/xcode_backend.sh"')]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$FLUTTER_ROOT/packages/flutter_tools/bin/xcode_backend.sh"')]),s._v(" embed\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:a(196),alt:""}})]),s._v(" "),n("p",[s._v("然后commadn+B编译项目。")]),s._v(" "),n("h2",{attrs:{id:"编写代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 编写代码")]),s._v(" "),n("p",[s._v("首先 AppDelegate 继承于FlutterAppDelegate")]),s._v(" "),n("p",[s._v("在 ‘AppDelegate.h’")]),s._v(" "),n("div",{staticClass:"language-swift line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[s._v("#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIKit")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIKit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Flutter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Flutter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n@interface "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppDelegate")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("FlutterAppDelegate")]),s._v("\n\n@end\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("在 ‘AppDelegate.m’")]),s._v(" "),n("div",{staticClass:"language-swift line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[s._v("#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("FlutterPluginRegistrant")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("GeneratedPluginRegistrant")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Only if you have Flutter Plugins")]),s._v("\n\n#include "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AppDelegate.h"')]),s._v("\n\n@implementation "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("AppDelegate")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This override can be omitted if you do not have any Flutter Plugins.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BOOL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIApplication")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("application\n    didFinishLaunchingWithOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("NSDictionary")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("launchOptions "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("GeneratedPluginRegistrant")]),s._v(" registerWithRegistry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("application didFinishLaunchingWithOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("launchOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n@end\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("在 ViewController.m")]),s._v(" "),n("div",{staticClass:"language-swift line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[s._v("#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ViewController.h"')]),s._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Flutter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Flutter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n@interface "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ViewController")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n@end\n\n@implementation "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("ViewController")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("void"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("viewDidLoad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIButton")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("button "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIButton")]),s._v(" buttonWithType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIButtonTypeCustom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("button addTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),s._v("\n               action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handleButtonAction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     forControlEvents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIControlEventTouchUpInside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("button setTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Press me"')]),s._v(" forState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIControlStateNormal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("button setBackgroundColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIColor")]),s._v(" blueColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("frame "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("CGRectMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("160.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view addSubview"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("void"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("handleButtonAction "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("FlutterViewController")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" flutterViewController "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("FlutterViewController")]),s._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),s._v(" presentViewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("flutterViewController animated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" completion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n@end\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("点击按钮就可以进入flutter 页面")]),s._v(" "),n("p",[s._v("修改main.dart文件")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package:flutter/material.dart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package:flutter/services.dart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("runApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyApp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StatelessWidget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\n  @override\n\n  Widget "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BuildContext context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("MaterialApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\n      title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Text widget"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Scaffold")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\n        body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Center")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\n              "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, Flutter!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("TextStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n              fontSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromARGB")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        floatingActionButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("FloatingActionButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          onPressed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 点击pop出当前页面")]),s._v("\n            SystemNavigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("p",[s._v("热更新 debugging Dart code")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("$ cd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my_flutter\n$ flutter attach\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("运行效果：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(197),alt:""}})]),s._v(" "),n("p",[s._v("点击蓝色按钮就会返回出示页面：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(198),alt:""}})])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="flutter-existing.md";t.default=r.exports}}]);
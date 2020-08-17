(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{409:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/43d55ae49f59",target:"_blank",rel:"noopener noreferrer"}},[t._v("原链接地址"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("最近因为项目中的聊天SDK，需要封装成静态库，所以实践了一下创建静态库的步骤，做下记录。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("库从本质上来说是一种可执行代码的二进制格式，可以被载入内存中执行。库分静态库和动态库两种。\niOS中的静态库有 .a 和 .framework两种形式；动态库有.dylib 和 .framework 形式，后来.dylib动态库又被苹果替换成.tbd的形式。")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("静态库和动态库是相对编译期和运行期的：静态库在程序编译时会被链接到目标代码中，程序运行时将不再需要改静态库；而动态库在程序编译时并不会被链接到目标代码中，只是在程序运行时才被载入，因为在程序运行期间还需要动态库的存在。\n总结：同一个静态库在不同程序中使用时，每一个程序中都得导入一次，打包时也被打包进去，形成一个程序。而动态库在不同程序中，打包时并没有被打包进去，只在程序运行使用时，才链接载入（如系统的框架如UIKit、Foundation等），所以程序体积会小很多，但是苹果不让使用自己的动态库，否则审核就无法通过。")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("第一步，新建工程。一般使用工程名就使用库的名称，比如我这里用FMDB来创建静态库，我的工程名就取名为FMDB，创建的.a静态库就是libFMDB.a。")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("第六步，编译（快捷键【Command+B】\n编译时，需要用模拟器和真机各编译一次，这样Products目录下的libFMDB.a静态库才会变为黑色，右键show in Finder，可以进入Products目录下。")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("如果想要通用需要将模拟器使用的静态库与真机使用的静态库合并成一个静态库，可以使用终端命令来实现。命令格式：\nlipo -create 第一个.a文件的绝对路径 第二个.a文件的绝对路径 -output 最终的.a文件路径。\n本文中使用的命令如下：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),r("p",[t._v("最后将任何一个framework中的二进制文件替换成合并后的二进制文件即可。\n把framework添加到要使用的项目中即可使用。\n注意：如果创建的framework中使用了category类，则在使用framework的项目配置中【Other Linker Flags】需要添加参数【-ObjC]或者【-all_load】。\n如果使用framework的使用出现【Umbrella header for module 'XXXX' does not include header 'XXXXX.h'】,是因为错把xxxxx.h拖到了public中。\n如果出现【dyld: Library not loaded:XXXXXX】，是因为打包的framework版本太高。比如打包framework时，选择的是iOS 9.0，而实际的工程环境是iOS 8开始的。")]),t._v(" "),r("p",[t._v('如果创建的framework类中使用了.dylib或者.tbd，首先需要在实际项目中导入.dylib或者.tbd动态库，然后需要设置【Allow Non-modular Includes ....】为YES，否则会报错"Include of non-modular header inside framework module"。')]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("上面的注意里提到了一些坑，以及解决办法。这里再记录一些：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),r("p",[t._v("获取的mp3 Path一直为nil。framework，只暴露了一些.h头文件，bundle没有暴露出来，无法获取。那么我们只需要将bundle与framework一起放入目标工程中即可。其实bundle根本不用打包进framework中。")]),t._v(" "),r("p",[t._v("例如：")]),t._v(" "),r("p",[t._v("我们创建了一个叫ABC.framework的静态库。库中使用了Message_system.mp3,那么我们创建一个bundle，命名为ABC.bundle，然后将Message_system.mp3放入bundle中。打包的时候，framework并不包含ABC.bundle。最后在要使用ABC.framework的工程中，新建一个文件夹or group,然后把ABC.framework和ABC.bundle一起拖进去，就可以啦。")]),t._v(" "),r("p",[t._v("Have Fun!")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"静态库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态库","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态库")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"库介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#库介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 库介绍")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"静态库与动态库的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态库与动态库的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态库与动态库的区别")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"创建-a静态库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-a静态库","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建.a静态库")])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("p",[r("img",{attrs:{src:"/img/framework/1.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"/img/framework/2.png",alt:""}}),t._v("\n第二步，删除系统默认创建的【FMDB.h】和【FMDB.m】文件，导入需要打包的源文件。\n"),r("img",{attrs:{src:"/img/framework/3.png",alt:""}}),t._v("\n第三步(方式一)，修改项目配置\n"),r("img",{attrs:{src:"/img/framework/4.png",alt:""}}),t._v("\n点击上图中的【3】，弹出的列表中选择【New Headers Phase】,打开【Headers (0 items)】，点击左下角的【+】，选择所有的.h文件。\n"),r("img",{attrs:{src:"/img/framework/5.png",alt:""}}),t._v("\n第三步（方式二），修改项目配置\n"),r("img",{attrs:{src:"/img/framework/6.png",alt:""}}),t._v("\n第四步，修改导出product配置\n"),r("img",{attrs:{src:"/img/framework/7.png",alt:""}}),t._v("\n第五步，修改编译指令集\n"),r("img",{attrs:{src:"/img/framework/8.png",alt:""}}),t._v("\n模拟器：iPhone4s~5 : i386 iPhone5s~6plus : x86_64\n真机：iPhone3gs~4s : armv7 iPhone5~5c : armv7s iPhone5s~6plus : arm64\n如果第五步这里，设置为YES，那么编译出来的.a静态库就只包含当前设备的指令集。\n举个例子：如果我们选择iPhone 5模拟器【Command+B】编译，则编译出来的.a静态库只能用iPhone4s5模拟器跑程序，用iPhone5s6plus，则会报找不到x86_64的libFMDB库。\n设置为NO，则会把所有指令集的都打包合并。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"/img/framework/9.png",alt:""}}),this._v("\n为什么需要用模拟器和真机各编译一次呢？\n可以看到Products目录下有【Release-iphoneos】和【Release-iphonesimulator】两个文件件。前者里面是真机使用的.a静态库，后者是模拟器使用的.a静态库。\n注意：如果步骤四中，不将Build Configuration改为Release,则打包出来的静态库会存于【Debug-iphoneos】和【Debug-iphonesimulator】两个文件夹下。\n我们一般都使用Release模式，因为程序最终发布之后是Release版的，所以静态库也是在Release模式下使用。")])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("\tlipo "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("create "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("harvey"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Developer"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Xcode"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DerivedData"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ctegiztcjikewoeprxxtmryzetfa"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Build"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Products"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Release"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iphoneos"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("libFMDB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("harvey"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Developer"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Xcode"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DerivedData"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ctegiztcjikewoeprxxtmryzetfa"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Build"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Products"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Release"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iphonesimulator"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("libFMDB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("output "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("harvey"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Desktop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("libFMDB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("补充：经过多次实践，第三步的操作省略，依然可以导出可正常使用的包。\n如果静态库中有category类，则在使用静态库的项目配置中【Other Linker Flags】需要添加参数【-ObjC]或者【-all_load】。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"创建framework静态库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建framework静态库","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建framework静态库")])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("p",[t._v("第一步，新建项目\n"),r("img",{attrs:{src:"/img/framework/10.png",alt:""}}),t._v("\n第二步，删除系统默认创建的【FMDB.h】和【FMDB.m】文件，导入需要打包的源文件。\n"),r("img",{attrs:{src:"/img/framework/11.png",alt:""}}),t._v("\n第三步，修改项目配置\n首先，设置需要暴漏的头文件\n"),r("img",{attrs:{src:"/img/framework/12.png",alt:""}}),t._v("\n这里需要注意的是暴露出来的头文件中import的其他类也得添加到public中暴露出来。\n如果不想将import的类暴露出来，那么在头文件中用@class 然后在对应的.m文件中再import。\n然后设置编译模式，在Xcode菜单【Product】---\x3e【Scheme】---\x3e【Edit Scheme...】中\n"),r("img",{attrs:{src:"/img/framework/13.png",alt:""}}),t._v("\n设置编译出的静态库包含的指令集\n"),r("img",{attrs:{src:"/img/framework/14.png",alt:""}}),t._v("\n最后修改生成的Mach-O格式\n"),r("img",{attrs:{src:"/img/framework/15.png",alt:""}}),t._v("\n第四步，编译生成静态库\n编译时，需要用模拟器和真机各编译一次，这样Products目录下的libFMDB.a静态库才会变为黑色，右键show in Finder，可以进入Products目录下。\n"),r("img",{attrs:{src:"/img/framework/16.png",alt:""}}),t._v("\n第五步，合并模拟器版framework和真机版framework\n合并的命令同上面相似，不同之处是：framework静态库合并的不是framework,而是framework下的一个二进制文件，即上一步图中标记的文件。\nlipo -create 第一个framework下二进制文件的绝对路径 第二个framework下二进制文件的绝对路径 -output 最终的二进制文件路径。\n本文中使用的命令如下：")])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("\tlipo "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("create "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("harvey"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Developer"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Xcode"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DerivedData"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("clvayfrjgytqrbdkyqrtcjkxfeuz"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Build"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Products"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Release"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iphonesimulator"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("framework"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("harvey"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Developer"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Xcode"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DerivedData"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("clvayfrjgytqrbdkyqrtcjkxfeuz"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Build"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Products"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Release"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iphoneos"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Release"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iphoneos"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("framework"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("output "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("harvey"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Desktop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMDB")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("补充：打包成的静态库肯定是比源码类要大很多的，因为是由不同指令集不同设备的版本合并成的。所以如果你很在意你的app大小，并且也不是很需要打包成静态库的话，还是用原始类吧。\nframework静态库中是可以包含图片资源的；而.a静态库中不能包含图片资源，只能另外创建一个目录存放。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"填坑记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#填坑记录","aria-hidden":"true"}},[this._v("#")]),this._v(" 填坑记录")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("framework中用到了NSClassFromString，但是转换出来的class 一直为nil。\n先来看一下这个API的官方描述")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"/img/framework/17.png",alt:""}}),this._v("\n什么意思呢？如果转换出来的class为nil，有两种情况：一种情况是这个类不存在；第二种情况是这个类还没有被load。所以一般出现问题，都是第二种情况。\n怎么解决这个问题呢？在主工程的【Other Linker Flags】需要添加参数【-ObjC]即可。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"2"}},[a("li",[this._v("framework中把图片、音频打包进bundle中，但是一直加载不到。\n打包的framework中有一个bundle,bundle里有一些图片、音频等资源。但是用如下方式：")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"language-swift line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-swift"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bundlePath "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSBundle")]),t._v(" mainBundle"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pathForResource"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXX"')]),t._v(" ofType"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mp3Path "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSBundle")]),t._v(" bundleWithPath"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bundlePath"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pathForResource"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Message_system"')]),t._v(" ofType"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mp3"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])])}],!1,null,null,null);e.options.__file="aframework.md";a.default=e.exports}}]);
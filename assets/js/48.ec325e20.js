(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{407:function(e,t,n){"use strict";n.r(t);var i=n(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("因为网上教程多是依靠Github，而且很多是在Jenkins中配置Xcode参数，相当的麻烦，我们是用Shell 脚本，非常的easy。在这里记录下环境搭建的过程，希望能帮他人减少一点坑。")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Jenkins是基于Java开发的一种持续集成工具。所以呢，要使用Jenkins必须使用先安装JDK。")]),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("JDK "),n("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),n("OutboundLink")],1),e._v(" "),n("img",{attrs:{src:"/img/jen/1.png",alt:""}}),e._v("\n安装JDK的过程略，别说你不会安装（如有不会安装的，自行百度）。")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("Jenkins "),n("a",{attrs:{href:"http://jenkins-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("安装过程如下：")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),n("p",[e._v("重启以后，自动以Jenkins登录了。找到/Users/Shared/Jenkins/Home/ 这个目录下，打开initialAdminPassword文件，复制出密码，就可以填到网页上去重置密码了。如下图")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),n("p",[e._v("因为要使用Xcode命令，所以必须保证Xcode command Line已安装。")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),n("p",[e._v("同样需要在Jenkins用户下，安装好打包需要的手机描述文件。")]),e._v(" "),e._m(22),e._v(" "),n("p",[e._v("下面讲解构建项目的配置，可以使用本地的项目，也可以使用SVN上的项目（只需要填入svn上工程地址即可），然后输入shell 脚本就可以开始构建了。")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),n("p",[e._v("点击保存，然后点击左侧菜单，立即构建，即可开始构建。")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),n("p",[e._v("第一步，新建项目，与上面的一样。\n第二步，不用将工程拷贝到jobs目录下了，直接在配置里源码管理那一栏设置svn地址")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),n("p",[e._v("使用cocoapods后，因为启动项目的工程文件已经由【xxx.xcodeproj】变为【xxx.xcworkspace】,所以在build时，需要添加【-workspace】和【-scheme】，同时去掉【-target】,如果不修改这些参数，构建会报错也会提示设置这些项。")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),n("p",[e._v("上传成功后，会返回相应的json数据。失败提示，可以参考蒲公英官网说明。")]),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),n("p",[e._v("虽然5.1设置了证书所有应用可用，但是还是可能会遇到User interaction is not allowed，这是因为Jenkins使用的是一个独立的用户环境。解决方法是在你的打包脚本的签名前加上")]),e._v(" "),e._m(41),e._v(" "),n("p",[e._v('构建成功之后，这句就可以删掉了，只需运行一次。\n如果还是出错，可以使用\nsecurity show-keychain-info ~/Library/Keychains/login.keychain\n查看一下具体情况，有可能提示\nKeychain "/Users/Shared/Jenkins/Library/Keychains/login.keychain" lock-on-sleep timeout=300s，\n即只有5分钟有效。可以将时间设置长一点来解决\nsecurity set-keychain-settings -t 3600 -l ~/Library/Keychains/login.keychain')]),e._v(" "),e._m(42),e._v(" "),n("p",[e._v("如果使用到了Python脚本，可能会遇到“UnicodeEncodeError: ‘ascii’ codec can’t encode characters ”的错误，可以在Python文件的开头加上")]),e._v(" "),e._m(43),e._v(" "),n("p",[e._v("参考文献：\n"),n("a",{attrs:{href:"http://www.jianshu.com/p/c0955ff67c91",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac下Jenkins+SVN+Xcode构建持续导出环境"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://www.jianshu.com/p/45c3fbc6924a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac下Jenkins构建+蒲公英分发"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://www.cimgf.com/2015/05/26/setting-up-jenkins-ci-on-a-mac-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SETTING UP JENKINS CI ON A MAC"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://www.cocoachina.com/ios/20160804/17281.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("手把手教你利用Jenkins持续集成iOS项目"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://blog.csdn.net/liqinghai2015/article/details/49469263",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于xcodebuild和xcrun的自动化打包"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://www.egeek.me/2013/02/23/jenkins-and-xcode-user-interaction-is-not-allowed/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins and Xcode: “User Interaction Is Not Allowed”"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://www.iteye.com/topic/699510",target:"_blank",rel:"noopener noreferrer"}},[e._v("python UnicodeEncodeError: ‘ascii’ codec can’t encode characters 解决方法"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"http://www.cnblogs.com/linjiqin/p/3674825.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python字符串的编码与解码(encode与decode)"),n("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"jenkins-在mac上的配置使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-在mac上的配置使用","aria-hidden":"true"}},[this._v("#")]),this._v(" Jenkins 在MAC上的配置使用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装jenkins","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装Jenkins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"jdk安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk安装","aria-hidden":"true"}},[this._v("#")]),this._v(" JDK安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"jenkins安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins安装","aria-hidden":"true"}},[this._v("#")]),this._v(" Jenkins安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/2.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/3.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/4.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/5.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/6.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/7.png",alt:""}}),this._v("\n也可以下载jenkins.war, 然后运行Java -jar jenkins.war，进行安装。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("安装完成之后，Safari可能会自动打开，如果没有自动打开，打开浏览器，输入http://localhost:8080\n"),t("img",{attrs:{src:"/img/jen/8.png",alt:""}}),this._v("\n这个时候可能会报一个错误。如果出现了上面的问题，原因可能是Java环境有问题，重新安装JDK环境即可。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("正常的话，应该会看到下面这个重设初始密码的界面\n"),t("img",{attrs:{src:"/img/jen/9.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("注意： \n1、Jenkins 安装成功后,会创建一个Jenkins用户，而Jenkins的工作区间默认是在【/用户/共享/Jenkins/Home/jobs】目录下，可以用Finder–>前往，进入。 \n2、Jenkins目录下的文件夹的读写权限只对Jenkins用户开放，所以后面apple证书等必须在Jenkins用户下安装，项目的ipa导出也得在Jenkins用户下操作。（或者用管理员权限修改该目录针对用户的权限) \n3、Jenkins的使用是每一个用户都可以使用，所以有可能导致构建版本的时候报错，还是老老实实在Jenkins用户下操作吧。\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"设置jenkins用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置jenkins用户","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置Jenkins用户")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"进入-系统偏好设置-用户与群组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入-系统偏好设置-用户与群组","aria-hidden":"true"}},[this._v("#")]),this._v(" 进入 系统偏好设置->用户与群组")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"点击左下角的解锁，输入当前用户的密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击左下角的解锁，输入当前用户的密码","aria-hidden":"true"}},[this._v("#")]),this._v(" 点击左下角的解锁，输入当前用户的密码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"此时jenkins用户还是一个空的无名用户，可以在用户列表中选择jenkins用户，右击并选择“高级选项”，输入全名并确定。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#此时jenkins用户还是一个空的无名用户，可以在用户列表中选择jenkins用户，右击并选择“高级选项”，输入全名并确定。","aria-hidden":"true"}},[this._v("#")]),this._v(" 此时Jenkins用户还是一个空的无名用户，可以在用户列表中选择Jenkins用户，右击并选择“高级选项”，输入全名并确定。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"点击“更改密码”重设jenkins用户的密码。为了后期方便，可勾选“运行用户管理这台电脑”，将jenkins用户设为管理员。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击“更改密码”重设jenkins用户的密码。为了后期方便，可勾选“运行用户管理这台电脑”，将jenkins用户设为管理员。","aria-hidden":"true"}},[this._v("#")]),this._v(" 点击“更改密码”重设Jenkins用户的密码。为了后期方便，可勾选“运行用户管理这台电脑”，将Jenkins用户设为管理员。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"选择用户列表下方的登录选项，将自动登录用户设为jenkins。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择用户列表下方的登录选项，将自动登录用户设为jenkins。","aria-hidden":"true"}},[this._v("#")]),this._v(" 选择用户列表下方的登录选项，将自动登录用户设为Jenkins。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"初始化jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化jenkins","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化Jenkins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/10.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/11.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/12.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/13.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/14.png",alt:""}}),this._v("\n一路安装过来，输入用户名，密码，邮件这些，就算安装完成了。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装插件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("正常情况下，常用的插件都已经安装了，如果有插件安装失败或者需要特殊的插件，可以自行安装。\n"),t("img",{attrs:{src:"/img/jen/15.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/16.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/17.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/18.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"xcode以及开发证书设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode以及开发证书设置","aria-hidden":"true"}},[this._v("#")]),this._v(" Xcode以及开发证书设置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("###设置apple development 证书\n在原来Xcode开发所在用户下，导出发布证书，然后拷贝到Jenkins用户环境下，双击安装到Mac 的钥匙串中。\n"),t("img",{attrs:{src:"/img/jen/19.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("注意： \n因为用户访问钥匙串中的证书需要权限，而用jenkins构建时，不管是用Xcode插件配置还是shell 脚本，都不能输入用户密码，所以必须设置证书的【访问控制】为允许所有应用程序访问此项目。\n\n### 安装mobileprovision描述文件 \n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"配置构建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置构建项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置构建项目")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用本地项目构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用本地项目构建","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用本地项目构建")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("步骤如下：\n"),t("img",{attrs:{src:"/img/jen/20.png",alt:""}}),this._v("\n点击OK，在【/用户/共享/Jenkins/Home/jobs】目录下会生成HelloJenkins的目录。\n"),t("img",{attrs:{src:"/img/jen/21.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/22.png",alt:""}}),this._v("\n其他的设置项，均不用设置，只需要设置下脚本即可，脚本详细的内容如下：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('# 工程名\nAPP_NAME="HelloJenkins"\n# 证书\nCODE_SIGN_DISTRIBUTION="iPhone Distribution: XXXXXXXXXXXX"\n# info.plist路径\nproject_infoplist_path="./${APP_NAME}/Info.plist"\n\n#取版本号\nbundleShortVersion=$(/usr/libexec/PlistBuddy -c "print CFBundleShortVersionString" "${project_infoplist_path}")\n\n#取build值\nbundleVersion=$(/usr/libexec/PlistBuddy -c "print CFBundleVersion" "${project_infoplist_path}")\n\nDATE="$(date +%Y%m%d)"\nIPANAME="${APP_NAME}_V${bundleShortVersion}_${DATE}.ipa"\n\necho "=================clean================="\nxcodebuild -target "${APP_NAME}"  -configuration \'Release\' clean\n\necho "+++++++++++++++++build+++++++++++++++++"\nxcodebuild -target "${APP_NAME}" -sdk iphoneos -configuration \'Release\' CODE_SIGN_IDENTITY="${CODE_SIGN_DISTRIBUTION}" SYMROOT=\'$(PWD)\'\n\nxcrun -sdk iphoneos PackageApplication "./Release-iphoneos/${APP_NAME}.app" -o ~/"${IPANAME}"\n\n\n注意1：【-o ~/$IPANAME】表示导出的ipa文件在当前用户的目录下，即【/用户/共享/Jenkins/】下。 \n其中CODE_SIGN_IDENTITY=”iPhone Distribution: \nxxxxxxxxxx”是你打包使用的证书在钥匙串中的常用名称。 \n导出的ipa，叫【HelloJenkins_V1.2_20160118.ipa】。\n注意2：如果如上图【配置项目第二步】那样，在xcodeproj相同目录下，新建一个sh脚本文件，用【sh \nxxx.sh】命令的话，见6.3介绍。 如果你的项目中用到了cocoapods,那脚本有几个参数需要调整一下，详情见下文。\n注意3（2016.02.17更新）：CODE_SIGN_IDENTITY \n这个属性可以不设置，直接设置profile就可以了，编译时会自动去匹配对应的CODE_SIGN_IDENTITY，需要注意的是设置profile时，设置的是其UUID值。例如【PROVISIONING_PROFILE=’f035763e-e847-4db8-ac10-0004809fdc90’】\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/23.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用svn地址构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用svn地址构建","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用svn地址构建")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/24.png",alt:""}}),this._v("\n第三步，设置shell 脚本，与上面的一样。\n第四步，立即构建即可。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"如何使用【sh-jenkins-sh】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用【sh-jenkins-sh】","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何使用【sh jenkins.sh】")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("将打包脚本写在jenkins.sh文件中，并将此文件放在project根目录，Jenkins中按下图修改。\n"),t("img",{attrs:{src:"/img/jen/25.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用cocoapods的项目脚本如何改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用cocoapods的项目脚本如何改","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用cocoapods的项目脚本如何改")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('# 工程名\nAPP_NAME="HelloJenkins"\n# 证书\nCODE_SIGN_DISTRIBUTION="iPhone Distribution: SunEee Weilian Technology Development Co., Ltd."\n# info.plist路径\nproject_infoplist_path="./${APP_NAME}/Info.plist"\n\n#取版本号\nbundleShortVersion=$(/usr/libexec/PlistBuddy -c "print CFBundleShortVersionString" "${project_infoplist_path}")\n\n#取build值\nbundleVersion=$(/usr/libexec/PlistBuddy -c "print CFBundleVersion" "${project_infoplist_path}")\n\nDATE="$(date +%Y%m%d)"\nIPANAME="${APP_NAME}_V${bundleShortVersion}_${DATE}.ipa"\n\n#要上传的ipa文件路径\nIPA_PATH="$HOME/${IPANAME}"\necho ${IPA_PATH}\necho "${IPA_PATH}">> text.txt\n\necho "=================clean================="\nxcodebuild -workspace "${APP_NAME}.xcworkspace" -scheme "${APP_NAME}"  -configuration \'Release\' clean\n\necho "+++++++++++++++++build+++++++++++++++++"\nxcodebuild -workspace "${APP_NAME}.xcworkspace" -scheme "${APP_NAME}" -sdk iphoneos -configuration \'Release\' CODE_SIGN_IDENTITY="${CODE_SIGN_DISTRIBUTION}" SYMROOT=\'$(PWD)\'\n\nxcrun -sdk iphoneos PackageApplication "./Release-iphoneos/${APP_NAME}.app" -o ~/"${IPANAME}"\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"添加构建后自动上传蒲公英的脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加构建后自动上传蒲公英的脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加构建后自动上传蒲公英的脚本")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/26.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/img/jen/27.png",alt:""}}),this._v("\nupload.sh脚本与上面jenkins.sh脚本在同一目录。\n【upload.sh】内容如下：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('#蒲公英上的User Key\nuKey="9743f8cbe9ebef9863912a9d52ac19ce"\n#蒲公英上的API Key\napiKey="0419615fa1ebbe8179ee9978abc3d753"\n#要上传的ipa文件路径\nIPA_PATH=$(cat text.txt)\n\nrm -rf text.txt\n\n#执行上传至蒲公英的命令\necho "++++++++++++++upload+++++++++++++"\ncurl -F "file=@${IPA_PATH}" -F "uKey=${uKey}" -F "_api_key=${apiKey}" http://www.pgyer.com/apiv1/app/upload\n\n注意：脚本中的uKey和apiKey，是自己的账户对应的userKey和apiKey。\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/jen/28.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"没有scheme，导致无法打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有scheme，导致无法打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 没有Scheme，导致无法打包")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("有时候会遇到项目代码拉下来后，执行打包脚本会卡在xcodebuild命令下，通过xcodebuild -list命令查看：如图显示no schems.\n"),t("img",{attrs:{src:"/img/jen/29.png",alt:""}}),this._v("\n原因是本机生成的scheme，在另一台Mac下不可用。又由于我们一般上传SVN或git的时候会把xcuserdata文件删除，这样就找不到scheme了，而用Xcode打开一次工程之后就可以成功执行了，也就是生成了xcuserdata文件。\n具体解决看图：将图上按钮全部勾选，然后xcworkspace中会生成xcshareddata文件，好，我们需要的正是该文件，注意将该文件附带工程中上传至SVN或git，那样在其他电脑上都可执行成功了！\n"),t("img",{attrs:{src:"/img/jen/30.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("注意：其实不需要将所有Scheme都共享，只需共享打包脚本会用到的Scheme即可。\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"命令行调用code-sign时报错：user-interaction-is-not-allowed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行调用code-sign时报错：user-interaction-is-not-allowed","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行调用code sign时报错：User interaction is not allowed")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('security unlock-keychain  -p "你的用户密码" ~/Library/Keychains/login.keychain\n1\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"python-字符编码问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python-字符编码问题","aria-hidden":"true"}},[this._v("#")]),this._v(" Python 字符编码问题")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("import sys \nreload(sys) \nsys.setdefaultencoding('utf-8') \n")])])}],!1,null,null,null);s.options.__file="Jenkins.md";t.default=s.exports}}]);
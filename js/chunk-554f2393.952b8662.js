(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554f2393"],{"0cb2":function(t,e,o){var a=o("7b0b"),l=Math.floor,n="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,r=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,o,s,c,u){var m=o+t.length,d=s.length,p=r;return void 0!==c&&(c=a(c),p=i),n.call(u,p,(function(a,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(m);case"<":i=c[n.slice(1,-1)];break;default:var r=+n;if(0===r)return a;if(r>d){var u=l(r/10);return 0===u?a:u<=d?void 0===s[u-1]?n.charAt(1):s[u-1]+n.charAt(1):a}i=s[r-1]}return void 0===i?"":i}))}},"0d03":function(t,e,o){var a=o("6eeb"),l=Date.prototype,n="Invalid Date",i="toString",r=l[i],s=l.getTime;new Date(NaN)+""!=n&&a(l,i,(function(){var t=s.call(this);return t===t?r.call(this):n}))},"14c3":function(t,e,o){var a=o("c6b6"),l=o("9263");t.exports=function(t,e){var o=t.exec;if("function"===typeof o){var n=o.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(t,e)}},"25f0":function(t,e,o){"use strict";var a=o("6eeb"),l=o("825a"),n=o("d039"),i=o("ad6d"),r="toString",s=RegExp.prototype,c=s[r],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),m=c.name!=r;(u||m)&&a(RegExp.prototype,r,(function(){var t=l(this),e=String(t.source),o=t.flags,a=String(void 0===o&&t instanceof RegExp&&!("flags"in s)?i.call(t):o);return"/"+e+"/"+a}),{unsafe:!0})},"4de4":function(t,e,o){"use strict";var a=o("23e7"),l=o("b727").filter,n=o("1dde"),i=n("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,o){"use strict";var a=o("23e7"),l=o("1c0b"),n=o("7b0b"),i=o("d039"),r=o("a640"),s=[],c=s.sort,u=i((function(){s.sort(void 0)})),m=i((function(){s.sort(null)})),d=r("sort"),p=u||!m||!d;a({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),l(t))}})},5319:function(t,e,o){"use strict";var a=o("d784"),l=o("825a"),n=o("50c4"),i=o("a691"),r=o("1d80"),s=o("8aa5"),c=o("0cb2"),u=o("14c3"),m=Math.max,d=Math.min,p=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,o,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,f=a.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(o,a){var l=r(this),n=void 0==o?void 0:o[t];return void 0!==n?n.call(o,l,a):e.call(String(l),o,a)},function(t,a){if(!h&&f||"string"===typeof a&&-1===a.indexOf(b)){var r=o(e,t,this,a);if(r.done)return r.value}var g=l(t),v=String(this),S="function"===typeof a;S||(a=String(a));var w=g.global;if(w){var y=g.unicode;g.lastIndex=0}var C=[];while(1){var x=u(g,v);if(null===x)break;if(C.push(x),!w)break;var _=String(x[0]);""===_&&(g.lastIndex=s(v,n(g.lastIndex),y))}for(var k="",A=0,R=0;R<C.length;R++){x=C[R];for(var L=String(x[0]),U=m(d(i(x.index),v.length),0),T=[],$=1;$<x.length;$++)T.push(p(x[$]));var E=x.groups;if(S){var N=[L].concat(T,U,v);void 0!==E&&N.push(E);var O=String(a.apply(void 0,N))}else O=c(L,v,U,T,E,a);U>=A&&(k+=v.slice(A,U)+O,A=U+L.length)}return k+v.slice(A)}]}))},6547:function(t,e,o){var a=o("a691"),l=o("1d80"),n=function(t){return function(e,o){var n,i,r=String(l(e)),s=a(o),c=r.length;return s<0||s>=c?t?"":void 0:(n=r.charCodeAt(s),n<55296||n>56319||s+1===c||(i=r.charCodeAt(s+1))<56320||i>57343?t?r.charAt(s):n:t?r.slice(s,s+2):i-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},"8aa5":function(t,e,o){"use strict";var a=o("6547").charAt;t.exports=function(t,e,o){return e+(o?a(t,e).length:1)}},9263:function(t,e,o){"use strict";var a=o("ad6d"),l=o("9f7f"),n=o("5692"),i=RegExp.prototype.exec,r=n("native-string-replace",String.prototype.replace),s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=l.UNSUPPORTED_Y||l.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],d=c||m||u;d&&(s=function(t){var e,o,l,n,s=this,d=u&&s.sticky,p=a.call(s),h=s.source,f=0,b=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(h="(?: "+h+")",b=" "+b,f++),o=new RegExp("^(?:"+h+")",p)),m&&(o=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=s.lastIndex),l=i.call(d?o:s,b),d?l?(l.input=l.input.slice(f),l[0]=l[0].slice(f),l.index=s.lastIndex,s.lastIndex+=l[0].length):s.lastIndex=0:c&&l&&(s.lastIndex=s.global?l.index+l[0].length:e),m&&l&&l.length>1&&r.call(l[0],o,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(l[n]=void 0)})),l}),t.exports=s},"9f7f":function(t,e,o){"use strict";var a=o("d039");function l(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=l("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=l("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,o){"use strict";var a=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&a((function(){o.call(null,e||function(){throw 1},1)}))}},a9c7:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("svg-icon",{staticClass:"gayhub",staticStyle:{float:"left"},attrs:{"icon-class":"github"},on:{click:t.goToProject}}),o("svg-icon",{staticClass:"dianbao",staticStyle:{float:"left","margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:t.gotoTgChannel}}),o("svg-icon",{staticClass:"bilibili",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"bilibili"},on:{click:t.gotoBiliBili}}),o("svg-icon",{staticClass:"youguan",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"youtube"},on:{click:t.gotoYouTuBe}}),o("svg-icon",{staticClass:"channel",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:t.gotoTgChannel}}),o("div",{staticStyle:{"text-align":"center","font-size":"15px"}},[t._v("订 阅 转 换")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:t.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持各种订阅链接或单节点链接，多个链接每行一个或用 | 分隔"},model:{value:t.form.sourceSubUrl,callback:function(e){t.$set(t.form,"sourceSubUrl",e)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"生成类型:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.form.clientType,callback:function(e){t.$set(t.form,"clientType",e)},expression:"form.clientType"}},t._l(t.options.clientTypes,(function(t,e){return o("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入自己的后端"},model:{value:t.form.customBackend,callback:function(e){t.$set(t.form,"customBackend",e)},expression:"form.customBackend"}},t._l(t.options.customBackend,(function(t,e){return o("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"短链选择:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入其他可用短链API"},model:{value:t.form.shortType,callback:function(e){t.$set(t.form,"shortType",e)},expression:"form.shortType"}},t._l(t.options.shortTypes,(function(t,e){return o("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:t.form.remoteConfig,callback:function(e){t.$set(t.form,"remoteConfig",e)},expression:"form.remoteConfig"}},[t._l(t.options.remoteConfig,(function(e){return o("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)})),o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:t.gotoRemoteConfig},slot:"append"},[t._v("配置示例")])],2)],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-collapse",[o("el-collapse-item",[o("template",{slot:"title"},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"高级功能:"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"limr",icon:"el-icon-more-outline"}},[t._v("点击显示/隐藏")])],1)],1),o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"要保留的节点，支持正则"},model:{value:t.form.includeRemarks,callback:function(e){t.$set(t.form,"includeRemarks",e)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"要排除的节点，支持正则"},model:{value:t.form.excludeRemarks,callback:function(e){t.$set(t.form,"excludeRemarks",e)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"节点命名:"}},[o("el-input",{attrs:{placeholder:"举例：`香港@菲律宾``美国@巴西``台湾@俄罗斯`..."},model:{value:t.form.rename,callback:function(e){t.$set(t.form,"rename",e)},expression:"form.rename"}})],1),o("el-form-item",{attrs:{label:"订阅命名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:t.form.filename,callback:function(e){t.$set(t.form,"filename",e)},expression:"form.filename"}})],1),o("el-form-item",{staticClass:"eldiy",attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"仅输出节点信息",border:""},model:{value:t.form.nodeList,callback:function(e){t.$set(t.form,"nodeList",e)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:t.form.extraset,callback:function(e){t.$set(t.form,"extraset",e)},expression:"form.extraset"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:t.form.emoji,callback:function(e){t.$set(t.form,"emoji",e)},expression:"form.emoji"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"网易云"},model:{value:t.form.insert,callback:function(e){t.$set(t.form,"insert",e)},expression:"form.insert"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:t.form.udp,callback:function(e){t.$set(t.form,"udp",e)},expression:"form.udp"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 TFO"},model:{value:t.form.tfo,callback:function(e){t.$set(t.form,"tfo",e)},expression:"form.tfo"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:t.form.tpl.surge.doh,callback:function(e){t.$set(t.form.tpl.surge,"doh",e)},expression:"form.tpl.surge.doh"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"插入节点类型"},model:{value:t.form.appendType,callback:function(e){t.$set(t.form,"appendType",e)},expression:"form.appendType"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:t.form.tpl.clash.doh,callback:function(e){t.$set(t.form.tpl.clash,"doh",e)},expression:"form.tpl.clash.doh"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"展开规则全文"},model:{value:t.form.expand,callback:function(e){t.$set(t.form,"expand",e)},expression:"form.expand"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash新字段名"},model:{value:t.form.new_name,callback:function(e){t.$set(t.form,"new_name",e)},expression:"form.new_name"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"跳过证书验证"},model:{value:t.form.scv,callback:function(e){t.$set(t.form,"scv",e)},expression:"form.scv"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"过滤不支持节点"},model:{value:t.form.fdn,callback:function(e){t.$set(t.form,"fdn",e)},expression:"form.fdn"}})],1)],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("更多选项")])],1)],1)],1)],2)],1)],1),o("div",{staticStyle:{"margin-top":"30px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("el-button",{attrs:{type:"zhuti"},on:{click:t.change}},[o("i",{staticClass:"el-icon-sunny",attrs:{id:"rijian"}}),o("i",{staticClass:"el-icon-moon",attrs:{id:"yejian"}})])],1),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:t.customSubUrl,callback:function(e){t.customSubUrl=e},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[t._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:t.curtomShortSubUrl,callback:function(e){t.curtomShortSubUrl=e},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[t._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===t.form.sourceSubUrl.length},on:{click:t.makeUrl}},[t._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:t.loading,disabled:0===t.customSubUrl.length},on:{click:t.makeShortUrl}},[t._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:t.loading},on:{click:function(e){t.dialogUploadConfigVisible=!0}}},[t._v("上传自定义配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===t.customSubUrl.length},on:{click:t.clashInstall}},[t._v("一键导入Clash")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"250px"},attrs:{type:"warning",icon:"el-icon-video-play"},on:{click:t.gotovideo}},[t._v("保姆级视频教程")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"250px"},attrs:{type:"success",icon:"el-icon-download"},on:{click:t.cldown}},[t._v("Clash For Android 客户端")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:t.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%"},on:{"update:visible":function(e){t.dialogUploadConfigVisible=e}}},[o("div",{attrs:{slot:"title"},slot:"title"},[t._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:t.sampleConfig,target:"_blank",icon:"el-icon-info"}},[t._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:t.uploadConfig,callback:function(e){t.uploadConfig=e},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.uploadConfig="",t.dialogUploadConfigVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===t.uploadConfig.length},on:{click:t.confirmUploadConfig}},[t._v("确 定")])],1)],1)],1)},l=[],n=(o("4de4"),o("c975"),o("4e82"),o("0d03"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/youshandefeiyang/sub-web-modify"),i="https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini",r="https://github.com/tindy2013/subconverter/releases",s="https://sub.d1.mk/sub?",c="https://d1.mk/short",u="https://api.wcc.best/config/upload",m="https://t.me/subconverter",d="https://youtube.com/channel/UCKHJ2UPlkNsDRj1cVXi0UsA",p="https://space.bilibili.com/138129883",h="https://github.com/Kr328/ClashForAndroid/releases/download/v2.1.6/app-universal-release.apk",f="https://www.youtube.com/watch?v=C4WV4223uYw",b={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",V2Ray:"v2ray",Trojan:"trojan",ShadowsocksR:"ssr","混合订阅（mixed）":"mixed",Surfboard:"surfboard",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",ClashR:"clashr","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksD:"ssd","自动判断客户端":"auto"},shortTypes:{"ml1.one":"https://ml1.one/short","v1.mk":"https://v1.mk/short","d1.mk":"https://d1.mk/short","dlj.tf":"https://dlj.tf/short","suo.yt":"https://suo.yt/short","sub.cm":"https://sub.cm/short"},customBackend:{"白月光【半官方后端】":"https://api.bygcloud.cyou/sub?","肥羊增强型后端【负载均衡】":"https://api.v1.mk/sub?","sub-web作者提供":"https://api.wcc.best/sub?","nameless13提供":"https://www.nameless13.com/sub?","subconverter作者提供":"https://subcon.dlj.tf/sub?","sub作者&lhie1提供":"https://api.dler.io/sub?","品云提供":"https://sub.id9.cc/sub?"},backendOptions:[{value:"https://api.bygcloud.cyou/sub?"},{value:"https://api.v1.mk/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://www.nameless13.com/sub?"},{value:"https://sub.xeton.dev/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://sub.id9.cc/sub?"}],remoteConfig:[{label:"自用配置",options:[{label:"自用(NoDnsLeak)",value:"https://raw.githubusercontent.com/huage59420/BYG-ini/main/NoDnsLeak.ini"},{label:"自选-URLTest",value:"https://raw.githubusercontent.com/huage59420/BYG-ini/main/BYG-URLTest.ini"},{label:"手选-NoURLTest",value:"https://raw.githubusercontent.com/huage59420/BYG-ini/main/BYG-NoURLTest.ini"}]},{label:"通用",options:[{label:"默认",value:"https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/Area_Media_NoAuto.ini"},{label:"默认（自动测速）",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"默认（索尼电视专用）",value:"https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/SONY.ini"},{label:"默认（附带用于 Clash 的 AdGuard DNS）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/default_with_clash_adg.yml"}]},{label:"ACL规则",options:[{label:"ACL_默认版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL_无测速版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL_去广告版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL_多国家版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini"},{label:"ACL_无Reject版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL_无测速精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL_全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL_全分组谷歌版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"},{label:"ACL_全分组多模式版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL_全分组奈飞版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL_全分组无测速版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL_精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL_去广告精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL_Fallback精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL_多国家精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL_多模式精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"}]},{label:"全网搜集规则",options:[{label:"常规规则",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG.ini"},{label:"分区域故障转移",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Fallback.ini"},{label:"分区域自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Urltest.ini"},{label:"分区域无自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_NoAuto.ini"},{label:"OoHHHHHHH",value:"https://raw.githubusercontent.com/OoHHHHHHH/ini/master/config.ini"},{label:"CFW-TAP",value:"https://raw.githubusercontent.com/OoHHHHHHH/ini/master/cfw-tap.ini"},{label:"lhl77全分组（定期更新）",value:"https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-full.ini"},{label:"lhl77简易版（定期更新）",value:"https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-mini-gfw.ini"},{label:"ConnersHua 神机规则 Outbound",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_new.ini"},{label:"ConnersHua 神机规则 Inbound 回国专用",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_backtocn.ini"},{label:"lhie1 洞主规则（使用 Clash 分组规则）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_clash.ini"},{label:"lhie1 洞主规则完整版",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_dler.ini"},{label:"eHpo1 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/ehpo1_main.ini"},{label:"多策略组默认白名单模式",value:"https://raw.nameless13.com/api/public/dl/ROzQqi2S/white.ini"},{label:"多策略组可以有效减少审计触发",value:"https://raw.nameless13.com/api/public/dl/ptLeiO3S/mayinggfw.ini"},{label:"精简策略默认白名单",value:"https://raw.nameless13.com/api/public/dl/FWSh3dXz/easy3.ini"},{label:"多策略增加SMTP策略",value:"https://raw.nameless13.com/api/public/dl/L_-vxO7I/youtube.ini"},{label:"无策略入门推荐",value:"https://raw.nameless13.com/api/public/dl/zKF9vFbb/easy.ini"},{label:"无策略入门推荐国家分组",value:"https://raw.nameless13.com/api/public/dl/E69bzCaE/easy2.ini"},{label:"无策略仅IPIP CN + Final",value:"https://raw.nameless13.com/api/public/dl/XHr0miMg/ipip.ini"},{label:"无策略魅影vip分组",value:"https://raw.nameless13.com/api/public/dl/BBnfb5lD/MAYINGVIP.ini"},{label:"品云专属配置（仅香港区域分组）",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine.ini"},{label:"品云专属配置（全地域分组）",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine_Full.ini"},{label:"nzw9314 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/nzw9314_custom.ini"},{label:"maicoo-l 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/maicoo-l_custom.ini"},{label:"DlerCloud Platinum 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_platinum.ini"},{label:"DlerCloud Gold 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_gold.ini"},{label:"DlerCloud Silver 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_silver.ini"}]},{label:"特殊",options:[{label:"NeteaseUnblock",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/netease.ini"},{label:"Basic",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",shortType:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",rename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,expand:!0,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:m,sampleConfig:i}},created:function(){document.title="在线订阅转换工具",this.isPC=this.$getOS().isPc},mounted:function(){var t=this;this.notify(),this.form.clientType="clash",this.getBackendVersion(),this.anhei();var e=window.matchMedia("(prefers-color-scheme: light)"),o=window.matchMedia("(prefers-color-scheme: dark)"),a=function(e){e.matches&&t.anhei()};"function"!==typeof o.addEventListener&&"function"!==typeof e.addEventListener||(e.addEventListener("change",a),o.addEventListener("change",a))},methods:{anhei:function(){var t=window.localStorage.getItem("localTheme"),e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)"),o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");t?document.getElementsByTagName("body")[0].className=t:null!=t&&"undefined"!=t&&""!=t||((new Date).getHours()>=19||(new Date).getHours()<7?document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"):document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),e&&e.matches&&document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),o&&o.matches&&document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"))},change:function(){var t=document.getElementsByTagName("body")[0].className;"light-mode"===t&&(document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"),window.localStorage.setItem("localTheme","dark-mode")),"dark-mode"===t&&(document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),window.localStorage.setItem("localTheme","light-mode"))},notify:function(){this.$notify({title:"温馨提示",type:"warning",position:"top-left",customClass:"msgbox",message:"本站自定义配置上传功能已恢复！"})},onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(n)},gotoTgChannel:function(){window.open(m)},gotoGayhub:function(){window.open(r)},gotoBiliBili:function(){window.open(p)},gotoYouTuBe:function(){window.open(d)},cldown:function(){window.open(h)},gotoRemoteConfig:function(){window.open(i)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var t="clash://install-config?url=";window.open(t+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var t="surge://install-config?url=";window.open(t+this.customSubUrl)},gotovideo:function(){this.$alert("别忘了关注友善的肥羊哦！",{type:"warning",confirmButtonText:"确定",customClass:"msgbox",showClose:!1}).then((function(){window.open(f)}))},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;if(-1!==this.form.sourceSubUrl.indexOf("losadhwse")&&-1!==this.form.customBackend.indexOf("api.wcc.best"))return this.$alert("薯条已将该后端屏蔽，请更换其他后端进行转换！",{type:"warning",confirmButtonText:"确定",customClass:"msgbox",showClose:!1}),!1;var t=""===this.form.customBackend?s:this.form.customBackend,e=this.form.sourceSubUrl;e=e.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(e)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),""!==this.form.rename&&(this.customSubUrl+="&rename="+encodeURIComponent(this.form.rename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&expand="+this.form.expand.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var t=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;var e=""===this.form.shortType?c:this.form.shortType;this.loading=!0;var o=new FormData;o.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(e,o,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(e){1===e.data.Code&&""!==e.data.ShortUrl?(t.curtomShortSubUrl=e.data.ShortUrl,t.$copyText(e.data.ShortUrl),t.$message.success("短链接已复制到剪贴板")):t.$message.error("短链接获取失败："+e.data.Message)}))["catch"]((function(){t.$message.error("短链接获取失败")}))["finally"]((function(){t.loading=!1}))},confirmUploadConfig:function(){var t=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var e=new FormData;e.append("password",this.uploadPassword),e.append("config",this.uploadConfig),this.$axios.post(u,e,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(e){0===e.data.code&&""!==e.data.data.url?(t.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),t.form.remoteConfig=e.data.data.url,t.$copyText(t.form.remoteConfig),t.dialogUploadConfigVisible=!1):t.$message.error("远程配置上传失败: "+e.data.msg)}))["catch"]((function(){t.$message.error("远程配置上传失败")}))["finally"]((function(){t.loading=!1}))},backendSearch:function(t,e){var o=this.options.backendOptions,a=t?o.filter(this.createFilter(t)):o;e(a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},getBackendVersion:function(){var t=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(e){t.backendVersion=e.data.replace(/backend\n$/gm,""),t.backendVersion=t.backendVersion.replace("subconverter","")}))}}},g=b,v=o("2877"),S=Object(v["a"])(g,a,l,!1,null,null,null);e["default"]=S.exports},ac1f:function(t,e,o){"use strict";var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(t,e,o){"use strict";var a=o("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c975:function(t,e,o){"use strict";var a=o("23e7"),l=o("4d64").indexOf,n=o("a640"),i=[].indexOf,r=!!i&&1/[1].indexOf(1,-0)<0,s=n("indexOf");a({target:"Array",proto:!0,forced:r||!s},{indexOf:function(t){return r?i.apply(this,arguments)||0:l(this,t,arguments.length>1?arguments[1]:void 0)}})},d784:function(t,e,o){"use strict";o("ac1f");var a=o("6eeb"),l=o("9263"),n=o("d039"),i=o("b622"),r=o("9112"),s=i("species"),c=RegExp.prototype,u=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),m=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var o="ab".split(t);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));t.exports=function(t,e,o,d){var f=i(t),b=!n((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=b&&!n((function(){var e=!1,o=/a/;return"split"===t&&(o={},o.constructor={},o.constructor[s]=function(){return o},o.flags="",o[f]=/./[f]),o.exec=function(){return e=!0,null},o[f](""),!e}));if(!b||!g||"replace"===t&&(!u||!m||p)||"split"===t&&!h){var v=/./[f],S=o(f,""[t],(function(t,e,o,a,n){var i=e.exec;return i===l||i===c.exec?b&&!n?{done:!0,value:v.call(e,o,a)}:{done:!0,value:t.call(o,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:m,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),w=S[0],y=S[1];a(String.prototype,t,w),a(c,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&r(c[f],"sham",!0)}}}]);
//# sourceMappingURL=chunk-554f2393.952b8662.js.map
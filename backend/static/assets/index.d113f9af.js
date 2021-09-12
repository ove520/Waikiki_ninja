var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,n=(e,a)=>{for(var s in a||(a={}))o.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))c.call(a,s)&&r(e,s,a[s]);return e},d=(e,t)=>a(e,s(t));"undefined"!=typeof require&&require;import{p as l,a as i,o as p,c as u,r as m,b as f,d as k,F as y,k as v,u as g,e as w,f as h,g as x,t as b,h as C,w as j,i as S,_ as P,j as _,l as K,m as A,n as W,q as I,s as L,v as O,x as V}from"./vendor.4eb73c88.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();l("data-v-4b23e37a"),i();const Q={},q={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};Q.render=function(e,a){return p(),u("img",q)};const R={components:{Logo:Q}};l("data-v-1f23ce5f");const U={class:"header"},z={class:"header-wrapper"},D={class:"flex items-center"},N=f("p",{class:"pl-3 select-none"},"Ninja",-1);i(),R.render=function(e,a,s,t,o,c){const r=m("Logo");return p(),u("div",U,[f("div",z,[f("div",D,[k(r,{class:"h-10 w-10"}),N])])])},R.__scopeId="data-v-1f23ce5f";const T={class:"main"},E={setup:e=>(e,a)=>{const s=m("router-view");return p(),u(y,null,[k(R),f("div",T,[k(s)])],64)}};const J=v.create({prefixUrl:"/api",retry:{limit:0}});function $(e){return J.post("WSCKLogin",{json:e}).json()}const Z={setup(){const e=g();w();let a=h({remark:"",WSCKbody:void 0,jdwsck:void 0,nickName:void 0,timestamp:void 0});const s=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const s=await function(e){const a=new URLSearchParams;return a.set("eid",e),J.get("userinfo",{searchParams:a}).json()}(e);if(!s)return P.error("获取用户信息失败，请重重新登录"),void t();a.nickName=s.data.nickName,a.timestamp=new Date(s.data.timestamp).toLocaleString()}catch(e){console.error(e)}};x(s);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return d(n({},b(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:s,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return J.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?P.error(a.message):(P.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},changeremark:async()=>{try{const e=localStorage.getItem("eid"),s=a.remark,t=await function(e){return J.post("update/remark",{json:e}).json()}({eid:e,remark:s});200!==t.code?P.success(t.message):P.error(t.message)}catch(e){console.error(e)}},WSCKLogin:async()=>{try{const e=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],s=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(e&&s){const a=await $({wskey:e,pin:s});a.data.eid?(localStorage.setItem("eid",a.data.eid),P.success(a.message)):P.error(a.message||"wskey 解析失败，请检查后重试！")}else P.error("wskey 解析失败，请检查后重试！")}catch(e){console.error(e)}},delWSCKAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return J.post("WSCKDelaccount",{json:e}).json()}({eid:e});200!==a.code?P.error(a.message):(P.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}};l("data-v-3788d263");const B={class:"content"},G={class:"card"},H=f("div",{class:"card-header"},[f("p",{class:"card-title"},"个人中心")],-1),F={class:"card-body"},M={class:"card-footer"},X=A("退出登录"),Y=A("删除CK"),ee={class:"card"},ae=_('<div class="card-header" data-v-3788d263><p class="card-title" data-v-3788d263>WSCK 录入</p><div class="card-body text-base leading-6" data-v-3788d263><b data-v-3788d263>wskey有效期长达一年，请联系管理员确认使用，慎重！</b><p data-v-3788d263>删WSCK在下方。</p><b data-v-3788d263>也可以保持pin不变，随意更改wskey，等同于删除WSCK。改密码解决一切CK泄露问题。</b><p data-v-3788d263>用户须手动提取pin和wskey，格式如：&quot;pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-3788d263>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-3788d263>点击跳转安装</a></p><p class="card-subtitle" data-v-3788d263>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-3788d263>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-3788d263>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div></div>',1),se={class:"card-body text-center"},te={class:"card-footer"},oe=A("重新录入"),ce=A("删除WSCK"),re={class:"card"},ne=f("div",{class:"card-header"},[f("p",{class:"card-title"},"修改备注")],-1),de={class:"card-body text-center"},le={class:"card-footer"},ie=A("修改"),pe={class:"card"},ue=f("div",{class:"card-header"},[f("p",{class:"card-title"},"常见活动位置"),f("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),me={class:"card-body"},fe={class:"pr-2"},ke=["onClick"];i(),Z.render=function(e,a,s,t,o,c){const r=m("el-button"),n=m("el-input");return p(),u("div",B,[f("div",G,[H,f("div",F,[f("p",null,"昵称："+C(e.nickName),1),f("p",null,"更新时间："+C(e.timestamp),1)]),f("div",M,[k(r,{size:"small",auto:"",onClick:t.logout},{default:j((()=>[X])),_:1},8,["onClick"]),k(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:j((()=>[Y])),_:1},8,["onClick"])])]),f("div",ee,[ae,f("div",se,[k(n,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),f("div",te,[k(r,{type:"success",size:"small",auto:"",onClick:t.WSCKLogin},{default:j((()=>[oe])),_:1},8,["onClick"]),k(r,{type:"danger",size:"small",auto:"",onClick:t.delWSCKAccount},{default:j((()=>[ce])),_:1},8,["onClick"])])]),f("div",re,[ne,f("div",de,[k(n,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),f("div",le,[k(r,{type:"success",size:"small",auto:"",onClick:t.changeremark},{default:j((()=>[ie])),_:1},8,["onClick"])])]),f("div",pe,[ue,f("div",me,[f("ul",null,[(p(!0),u(y,null,S(t.activity,((e,a)=>(p(),u("li",{key:a,class:"leading-normal"},[f("span",null,C(e.name)+"：",1),f("span",fe,C(e.address),1),e.href?(p(),u("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,ke)):K("",!0)])))),128))])])])])},Z.__scopeId="data-v-3788d263";const ye={setup(){const e=g();w();let a=h({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:void 0,showQR:!1,showWSCK:!1,showCK:!0});const s=async()=>{try{const e=(await J.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}},t=async()=>{if(this.showQR)try{const e=await J.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(o,3e3))}catch(e){console.error(e),P.error("生成二维码失败！请重试或放弃")}else P.warning("扫码已禁用请手动抓包")},o=async()=>{try{const s=await function(e){return J.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==s?void 0:s.data.errcode){case 0:localStorage.setItem("eid",s.data.eid),P.success(s.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:P.error(s.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(s){clearInterval(a.timer),a.waitLogin=!1}};return x((()=>{s(),t()})),d(n({},b(a)),{getInfo:s,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:o,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const s=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],t=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(s&&t){const a=await function(e){return J.post("cklogin",{json:e}).json()}({pt_key:s,pt_pin:t});a.data.eid?(localStorage.setItem("eid",a.data.eid),P.success(a.message),e.push("/")):P.error(a.message||"cookie 解析失败，请检查后重试！")}else P.error("cookie 解析失败，请检查后重试！")}catch(s){console.error(s)}},WSCKLogin:async()=>{try{const s=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],t=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(s&&t){const a=await $({wskey:s,pin:t});a.data.eid?(localStorage.setItem("eid",a.data.eid),P.success(a.message),e.push("/")):P.error(a.message||"wskey 解析失败，请检查后重试！")}else P.error("wskey 解析失败，请检查后重试！")}catch(s){console.error(s)}}})}};l("data-v-a84ffe56");const ve={class:"content"},ge=_('<div class="card" data-v-a84ffe56><div class="card-header" data-v-a84ffe56><div class="flex items-center justify-between" data-v-a84ffe56><p class="card-title" data-v-a84ffe56>Waikiki提醒您</p></div></div><div class="card-body text-base leading-6" data-v-a84ffe56><p data-v-a84ffe56>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-a84ffe56>建议京东账户绑定微信以保证提现能到账。</p><p data-v-a84ffe56>由于京东异地登录限制，扫码获取cookie只有2小时有效期，因此暂时关闭扫码功能，现需手动抓取Cookie。</p><p data-v-a84ffe56>且有效期不长，平均3-5天，因此需要及时更新。</p><b data-v-a84ffe56>安全起见，WSCK可以在CK登录后录入，期限半永久。</b></div><div class="card-footet" data-v-a84ffe56></div></div>',1),we={key:0,class:"card"},he={class:"card-header"},xe={class:"flex items-center justify-between"},be=f("p",{class:"card-title"},"扫码登录",-1),Ce={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},je=f("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),Se={class:"card-body text-center"},Pe={key:0,class:"flex flex-col w-48 m-auto mt-4"},_e=A("扫描二维码登录"),Ke=A("跳转到京东 App 登录"),Ae=["src"],We=f("div",{class:"card-footer"},null,-1),Ie={key:1,class:"card"},Le={class:"card-header"},Oe={class:"flex items-center justify-between"},Ve=f("p",{class:"card-title"},"WSCK 录入",-1),Qe={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},qe=_('<div class="card-body text-base leading-6" data-v-a84ffe56><b data-v-a84ffe56>wskey有效期长达一年，请联系管理员确认使用（删不掉，慎用）</b><p data-v-a84ffe56>用户须手动提取pin和wskey，格式如：&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-a84ffe56>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-a84ffe56>点击跳转安装</a></p><p class="card-subtitle" data-v-a84ffe56>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-a84ffe56>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-a84ffe56>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div><span class="card-subtitle" data-v-a84ffe56> 请在下方输入您的 WSCK </span>',2),Re={class:"card-body text-center"},Ue=A("录入"),ze=f("div",{class:"card-footet"},null,-1),De={key:2,class:"card"},Ne={class:"card-header"},Te={class:"flex items-center justify-between"},Ee=f("p",{class:"card-title"},"CK 登录",-1),Je={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},$e=f("div",{class:"card-body text-base leading-6"},[f("p",null,[A("PC用户建议使用开源工具"),f("a",{style:{},href:"https://github.com/Waikkii/JD_Get_Cookie",target:"_blank",id:"waikiki"},"JD_Get_Cookie"),A("获取cookie并在下方填写。")]),f("p",null,[A("手机用户可以使用Alook浏览器登录"),f("a",{style:{},href:"https://m.jd.com/",target:"_blank",id:"jd"},"JD官网"),A("，并在菜单-工具箱-开发者工具-Cookies中获取（Android和iPhone通用）。")]),f("p",null,"另外也可以使用抓包工具（iPhone：Stream，Android：HttpCanary）抓取京东app的ck，要注意pt_key和pt_pin字段是以app_open开头的。"),f("p",null,"cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。")],-1),Ze=f("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),Be={class:"card-body text-center"},Ge=A("登录"),He=f("div",{class:"card-footet"},null,-1);i(),ye.render=function(e,a,s,t,o,c){const r=m("el-button"),n=m("el-input");return p(),u("div",ve,[ge,e.showQR?(p(),u("div",we,[f("div",he,[f("div",xe,[be,f("span",Ce,"余量："+C(e.marginCount),1)]),je]),f("div",Se,[e.qrCodeVisibility?(p(),u("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,Ae)):(p(),u("div",Pe,[k(r,{type:"primary",round:"",onClick:t.showQrcode},{default:j((()=>[_e])),_:1},8,["onClick"]),k(r,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:j((()=>[Ke])),_:1},8,["onClick"])]))]),We])):K("",!0),e.showWSCK?(p(),u("div",Ie,[f("div",Le,[f("div",Oe,[Ve,f("span",Qe,"余量："+C(e.marginWSCKCount),1)]),qe]),f("div",Re,[k(n,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),k(r,{type:"primary",size:"small",round:"",onClick:t.WSCKLogin},{default:j((()=>[Ue])),_:1},8,["onClick"])]),ze])):K("",!0),e.showCK?(p(),u("div",De,[f("div",Ne,[f("div",Te,[Ee,f("span",Je,"余量："+C(e.marginCount),1)]),$e,Ze]),f("div",Be,[k(n,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),k(r,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:j((()=>[Ge])),_:1},8,["onClick"])]),He])):K("",!0)])},ye.__scopeId="data-v-a84ffe56";const Fe=[{path:"/",component:Z},{path:"/login",component:ye}],Me=W({history:I(),routes:Fe}),Xe=[O,V,P],Ye=[P],ea=L(E);Xe.forEach((e=>{ea.component(e.name,e)})),Ye.forEach((e=>{ea.use(e)})),ea.use(Me),ea.mount("#app");

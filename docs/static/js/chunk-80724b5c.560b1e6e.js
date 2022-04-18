(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80724b5c","chunk-692ffa76","chunk-0a03029c","chunk-31ec8bc8","chunk-2d226cab","chunk-2d0e4e1f","chunk-2d0c8bf7","chunk-2d0cfaef","chunk-2d2104c6","chunk-2d0e944c","chunk-2d229205","chunk-2d230fe7","chunk-2d0e4b0c","chunk-2d0d0f79"],{"05d0":function(e,t,n){"use strict";n("0a05")},"0a05":function(e,t,n){},"12aa":function(e,t,n){},2017:function(e,t,n){"use strict";n("b12d")},"371d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Activity name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity zone"}},[n("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),e._v(" "),n("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity time"}},[n("el-col",{attrs:{span:11}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Instant delivery"}},[n("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity type"}},[n("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Resources"}},[n("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[n("el-radio",{attrs:{label:"Sponsor"}}),e._v(" "),n("el-radio",{attrs:{label:"Venue"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity form"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)},r=[],i={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}},s=i,l=(n("7275"),n("2877")),o=Object(l["a"])(s,a,r,!1,null,"32c0383a",null);t["default"]=o.exports},4984:function(e,t,n){"use strict";n("d9be")},"55cd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 1-2",type:"success"}},[n("router-view")],1)],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=l.exports},5750:function(e,t,n){},6582:function(e,t,n){"use strict";n.r(t);var a=function(e,t){var n=t._c;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 1-2-1",type:"warning"}})],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!0,null,null,null);t["default"]=l.exports},"69dd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Filter keyword"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),n("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.data2,props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""}})],1)},r=[],i={data:function(){return{filterText:"",data2:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(e){this.$refs.tree2.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)}}},s=i,l=n("2877"),o=Object(l["a"])(s,a,r,!1,null,null,null);t["default"]=o.exports},"6f27":function(e,t,n){var a={"./dashboard/index":"9406","./form/index":"371d","./login/index":"9ed6","./nested/menu1/index":"e9bc","./nested/menu1/menu1-1/index":"91b3","./nested/menu1/menu1-2/index":"55cd","./nested/menu1/menu1-2/menu1-2-1/index":"6582","./nested/menu1/menu1-2/menu1-2-2/index":"b6fb","./nested/menu1/menu1-3/index":"8d8b","./nested/menu2/index":"dbb3","./redirect/index":"ef3c","./table/index":"90fe","./tree/index":"69dd"};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="6f27"},7275:function(e,t,n){"use strict";n("5750")},"8d8b":function(e,t,n){"use strict";n.r(t);var a=function(e,t){var n=t._c;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 1-3",type:"success"}})],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!0,null,null,null);t["default"]=l.exports},"90fe":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Pageviews",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.pageviews)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Display_time",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(t.row.display_time))])]}}])})],1)],1)},r=[],i=n("b775");function s(e){return Object(i["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}var l={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,s().then((function(t){e.list=t.data.items,e.listLoading=!1}))}}},o=l,c=n("2877"),u=Object(c["a"])(o,a,r,!1,null,null,null);t["default"]=u.exports},"91b3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 1-1",type:"success"}},[n("router-view")],1)],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=l.exports},9406:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"dashboard-text"},[e._v("name(用户权限等级):"+e._s(e.name))]),e._v(" "),n("div",{staticClass:"dashboard-text"},[e._v("roles(按钮级别权限):"+e._s(e.roles))]),e._v(" "),n("h2",[e._v("关于路由")]),e._v(" "),n("div",{staticClass:"dashboard-text"},[e._v("\n    权限标签"+e._s(e.name)+" 的路由为 "+e._s(e.showRouter)+"\n  ")]),e._v(" "),n("div",[e._v("未解析路由信息请看NetWork的,解析完成的路由信息请看控制台")]),e._v(" "),n("h2",[e._v("关于权限")]),e._v(" "),n("p",[e._v("这里做了简单的权限区分,")]),e._v(" "),n("p",[e._v('\n    admin 用户存在 "add", "delete", "edit", "view"\n    ,所以根据自定义指令管理员可以操作的按钮都会被渲染出来\n  ')]),e._v(" "),n("p",[e._v('\n    editor 用户只存在 "edit", "view" ,所以自定义指令/v-if不会渲染 增加 与 删除\n  ')]),e._v(" "),n("h3",[e._v("自定义指令的实现")]),e._v(" "),n("el-button",{directives:[{name:"permit",rawName:"v-permit",value:"add",expression:"'add'"}],attrs:{type:"primary"}},[e._v("增加")]),e._v(" "),n("el-button",{directives:[{name:"permit",rawName:"v-permit",value:"delete",expression:"'delete'"}],attrs:{type:"danger"}},[e._v("删除")]),e._v(" "),n("el-button",{directives:[{name:"permit",rawName:"v-permit",value:"edit",expression:"'edit'"}],attrs:{type:"warning"}},[e._v("修改")]),e._v(" "),n("el-button",{directives:[{name:"permit",rawName:"v-permit",value:"view",expression:"'view'"}],attrs:{type:"success"}},[e._v("查看")]),e._v(" "),n("h3",[e._v("v-if的实现")]),e._v(" "),e.basePermit("add")?n("el-button",{attrs:{type:"primary"}},[e._v("增加")]):e._e(),e._v(" "),e.basePermit("delete")?n("el-button",{attrs:{type:"danger"}},[e._v("删除")]):e._e(),e._v(" "),e.basePermit("edit")?n("el-button",{attrs:{type:"warning"}},[e._v("修改")]):e._e(),e._v(" "),e.basePermit("view")?n("el-button",{attrs:{type:"success"}},[e._v("查看")]):e._e(),e._v(" "),n("div",{staticClass:"toggle"},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.toggleShow}},[e._v("\n      代码思路\n    ")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.toggleUser}},[e._v("\n      切换用户\n    ")])],1),e._v(" "),n("user-show",{attrs:{show:e.show},on:{closeDialog:e.toggleShow}})],1)},r=[],i=(n("6762"),n("2fdb"),n("7f7f"),n("5530")),s=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"思路",visible:e.show,width:"800px","before-close":e.closeDialog},on:{"update:visible":function(t){e.show=t}}},[n("div",[n("h2",[e._v("\n      代码运行思路(已经登录,刷新页面的情况下)\n    ")]),e._v(" "),n("div",{staticClass:"item"},[n("div",[e._v("1. 在路由钩子里面判断是否首次进入系统(permission.js)")]),e._v(" "),n("div",[e._v("\n        2.\n        init为true说明已经获取过路由,就直接放行,init为false则向后台请求用户路由\n      ")]),e._v(" "),n("div",[e._v("3. 获取路由")]),e._v(" "),n("div",[e._v("4. 解析路由,存储权限")]),e._v(" "),n("div",[e._v("5. 使用router的api,addRouter拼接路由")]),e._v(" "),n("div",[e._v("6. 存储路由")]),e._v(" "),n("div",[e._v("7. init改为true,路由初始化完成")]),e._v(" "),n("div",[e._v("8. 放行路由")])])])])},o=[],c={props:{show:{type:Boolean,default:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")}}},u=c,d=(n("4984"),n("2877")),v=Object(d["a"])(u,l,o,!1,null,"5ed9789f",null),m=v.exports,f={name:"Dashboard",components:{userShow:m},data:function(){return{show:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["name","roles"])),{},{showRouter:function(){return console.log("全部路由信息",this.$store.getters.routerList),this.$store.getters.routerList.length>0?this.$store.getters.routerList.reduce((function(e,t){return e.concat(t.path)}),[]):""}}),methods:{toggleUser:function(){var e=this;"Normal Editor"===this.name?this.$store.dispatch("user/login",{username:"admin",password:""}).then((function(){location.reload()})).catch((function(){e.$message("接口出现了一些问题....")})):"Super Admin"===this.name&&this.$store.dispatch("user/login",{username:"editor",password:""}).then((function(){location.reload()})).catch((function(){e.$message("接口出现了一些问题....")}))},basePermit:function(e){return this.$store.getters.roles.includes(e)},toggleShow:function(){this.show=!this.show}}},p=f,h=(n("05d0"),Object(d["a"])(p,a,r,!1,null,"224e3679",null));t["default"]=h.exports},"9ed6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("Login Form")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),e._v(" "),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),e._v(" "),n("span",{staticStyle:{"margin-right":"23px"}},[e._v("password: 随意")]),e._v(" "),n("br"),e._v(" "),n("span",{staticStyle:{"margin-right":"23px"}},[e._v("admin的与editor渲染的路由不一样,数据来源于 easy-mock")])]),e._v(" "),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"23px"}},[e._v("username: editor")]),e._v(" "),n("span",{staticStyle:{"margin-right":"23px"}},[e._v("password: 随意")])])],1)],1)},r=[],i=n("61f7"),s={name:"Login",data:function(){var e=function(e,t,n){Object(i["b"])(t)?n():n(new Error("Please enter the correct user name"))},t=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},l=s,o=(n("2017"),n("c7d2"),n("2877")),c=Object(o["a"])(l,a,r,!1,null,"311362a7",null);t["default"]=c.exports},b12d:function(e,t,n){},b6fb:function(e,t,n){"use strict";n.r(t);var a=function(e,t){var n=t._c;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 1-2-2",type:"warning"}})],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!0,null,null,null);t["default"]=l.exports},c7d2:function(e,t,n){"use strict";n("12aa")},d9be:function(e,t,n){},dbb3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 2"}})],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=l.exports},e9bc:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"30px"}},[n("el-alert",{attrs:{closable:!1,title:"menu 1"}},[n("router-view")],1)],1)},r=[],i=n("2877"),s={},l=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=l.exports},ef3c:function(e,t,n){"use strict";n.r(t);n("a481");var a,r,i={created:function(){var e=this.$route,t=e.params,n=e.query,a=t.path;this.$router.replace({path:"/"+a,query:n})},render:function(e){return e()}},s=i,l=n("2877"),o=Object(l["a"])(s,a,r,!1,null,null,null);t["default"]=o.exports}}]);
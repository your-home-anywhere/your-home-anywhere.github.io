(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{367:function(e,t,n){"use strict";n.r(t);n(22);var r=n(133),l=n(68),o={middleware:"auth",mixins:[r.a],data:function(){return{name:"",serial:"",nameRules:[function(e){return!!e||"Tên là bắt buộc"},function(e){return e&&e.length<=50||"Phải nhập ít hơn 50 ký tự"}],serialRules:[function(e){return!!e||"Số serial là bắt buộc"},function(e){return e&&e.length<=10||"Phải nhập ít hơn 10 ký tự"}],valid:!0,lazy:!1}},methods:{onSave:function(){this.$refs.form.validate(),l.c.collection("devices").add({serial:this.serial,name:this.name,state:!1,createdDate:new Date,userId:this.loginUser.id}).then((function(){alert("Write succeeded!")}))},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}},components:{}},c=n(44),d=n(60),m=n.n(d),v=n(323),f=n(335),h=n(363),w=n(364),x=n(336),k=n(369),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticClass:"ml-3 mr-3",staticStyle:{"margin-top":"100px"},attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-form",{ref:"form",staticStyle:{width:"100%"},attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{outlined:"",label:"Tên thiết bị",counter:50,rules:e.nameRules,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{outlined:"",label:"Số seri",counter:10,rules:e.serialRules,required:""},model:{value:e.serial,callback:function(t){e.serial=t},expression:"serial"}}),e._v(" "),n("v-divider",{staticClass:"mt-3 mb-5"}),e._v(" "),n("div",{attrs:{align:"center"}},[n("v-btn",{attrs:{color:"primary",width:"200",height:"40"},on:{click:e.onSave}},[e._v("Lưu")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCol:f.a,VDivider:h.a,VForm:w.a,VRow:x.a,VTextField:k.a})}}]);
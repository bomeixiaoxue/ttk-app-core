{"source":"webpackJsonp([46],{663:function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var n,a=m(r(0)),o=m(r(9)),u=m(r(7)),c=m(r(8)),s=m(r(10)),i=m(r(11)),d=r(1),p=(m(d),r(54)),f=m(r(216));function m(e){return e&&e.__esModule?e:{default:e}}var l=(0,p.wrapper)(f.default)(n=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,c.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:\"root\"}))}}]),t}(d.Component))||n;t.default=l,e.exports=t.default},664:function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var n,a,o=f(r(0)),u=f(r(55)),c=f(r(56)),s=f(r(7));t.default=function(e){var t=new i.action(e),r=p.FormDecorator.actionCreator((0,o.default)({},e,{metaAction:t})),n=new m((0,o.default)({},e,{metaAction:t,voucherAction:r})),a=(0,o.default)({},t,r,n);return t.config({metaHandlers:a}),a};f(r(1));var i=r(54),d=(r(13),f(r(15)),f(r(162))),p=r(40);function f(e){return e&&e.__esModule?e:{default:e}}var m=(n=function e(t){(0,s.default)(this,e),a.call(this),this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=d.default.current,this.webapi=this.config.webapi},a=function(){var t,a=this;this.onInit=function(e){var t=e.component,r=e.injections;a.voucherAction.onInit({component:t,injections:r}),a.component=t,a.injections=r,a.component.props.setOkListener&&a.component.props.setOkListener(a.onOk),r.reduce(\"init\",{isPop:a.component.props.isPop}),a.load()},this.load=(0,c.default)(u.default.mark(function e(){var t,r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},r={},n=void 0,a.component.props.personId||0===a.component.props.personId)return e.next=4,a.webapi.customer.query(a.component.props.personId);e.next=7;break;case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,a.webapi.customer.getCode();case 9:n=e.sent;case 10:n&&(t.code=n),r&&(t.response=r),a.injections.reduce(\"load\",t);case 13:case\"end\":return e.stop()}},e,a)})),this.onOk=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.save();case 2:return e.abrupt(\"return\",e.sent);case 3:case\"end\":return e.stop()}},e,a)})),this.save=(0,c.default)(u.default.mark(function e(){var t,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf(\"data.form\").toJS(),e.next=3,a.voucherAction.check([{path:\"data.form.code\",value:t.code},{path:\"data.form.name\",value:t.name}],a.check);case 3:if(e.sent){e.next=6;break}return e.abrupt(\"return\",!1);case 6:if(r=void 0,t.code=t.code?t.code.trim():\"\",t.name=t.name?t.name.trim():\"\",t.taxNumber=t.taxNumber?t.taxNumber.trim():\"\",t.linkman=t.linkman?t.linkman.trim():\"\",t.contactNumber=t.contactNumber?t.contactNumber.trim():\"\",t.openingBank=t.openingBank?t.openingBank.trim():\"\",t.bankAccout=t.bankAccout?t.bankAccout.trim():\"\",t.addressAndTel=t.addressAndTel?t.addressAndTel.trim():\"\",t.remark=t.remark?t.remark.trim():\"\",t.isReturnValue=!0,a.component.props.personId||0===a.component.props.personId)return t.id=a.component.props.personId,e.next=21,a.webapi.customer.update(t);e.next=24;break;case 21:r=e.sent,e.next=27;break;case 24:return e.next=26,a.webapi.customer.create(t);case 26:r=e.sent;case 27:if(r&&r.error)return a.metaAction.toast(\"error\",r.error.message),e.abrupt(\"return\",!1);e.next=32;break;case 32:return a.metaAction.toast(\"success\",\"保存成功\"),e.abrupt(\"return\",r);case 34:case\"end\":return e.stop()}},e,a)})),this.check=(t=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.path){e.next=2;break}return e.abrupt(\"return\");case 2:if(\"data.form.code\"==t.path)return e.abrupt(\"return\",{errorPath:\"data.other.error.code\",message:t.value&&t.value.trim()?\"\":\"请录入编码\"});e.next=6;break;case 6:if(\"data.form.name\"==t.path)return e.abrupt(\"return\",{errorPath:\"data.other.error.name\",message:t.value&&t.value.trim()?\"\":\"请录入名称\"});e.next=8;break;case 8:case\"end\":return e.stop()}},e,a)})),function(e){return t.apply(this,arguments)}),this.fieldChange=function(e,t){a.voucherAction.fieldChange(e,t,a.check)}},n);e.exports=t.default},665:function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var n,a,o=p(r(0)),u=p(r(18)),c=p(r(7));t.default=function(e){var t=new i.reducer(e),r=new f((0,o.default)({},e,{metaReducer:t}));return(0,o.default)({},t,r)};var s=r(13),i=r(54),d=(p(r(162)),p(r(15)),r(217));function p(e){return e&&e.__esModule?e:{default:e}}var f=(n=function e(t){(0,c.default)(this,e),a.call(this),this.metaReducer=t.metaReducer},a=function(){var r=this;this.init=function(e){return r.metaReducer.init(e,(0,d.getInitState)())},this.load=function(e,t){return t.response&&(e=(0==(0,u.default)(t.response).length&&(t.response.isEnable=!0),r.metaReducer.sf(e,\"data.form\",(0,s.fromJS)(t.response)))),t.code&&(e=r.metaReducer.sf(e,\"data.form.code\",(0,s.fromJS)(t.code))),e}},n);e.exports=t.default}});"}
{"source":"webpackJsonp([38],{696:function(e,t,a){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,n=l(a(0)),o=l(a(9)),s=l(a(7)),c=l(a(8)),u=l(a(10)),i=l(a(11)),f=a(1),d=(l(f),a(54)),p=l(a(238));function l(e){return e&&e.__esModule?e:{default:e}}var m=(0,d.wrapper)(p.default)(r=function(e){function t(){return(0,s.default)(this,t),(0,u.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,c.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,n.default)({},this.props,{path:\"root\"}))}}]),t}(f.Component))||r;t.default=m,e.exports=t.default},697:function(e,t,a){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,n,m=u(a(16)),h=u(a(0)),g=u(a(55)),p=u(a(56)),o=u(a(7));t.default=function(e){var t=new s.action(e),a=b.FormDecorator.actionCreator((0,h.default)({},e,{metaAction:t})),r=new i((0,h.default)({},e,{metaAction:t,voucherAction:a})),n=(0,h.default)({},t,a,r);return t.config({metaHandlers:n}),n};u(a(1));var s=a(54),c=(a(13),u(a(15)),u(a(173))),v=a(71),x=u(a(101)),b=a(40);function u(e){return e&&e.__esModule?e:{default:e}}var i=(r=function e(t){(0,o.default)(this,e),n.call(this),this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=c.default.current,this.webapi=this.config.webapi},n=function(){var t,a,r,n,o,s,c,u,i,f,d,l=this;this.onInit=function(e){var t=e.component,a=e.injections;l.voucherAction.onInit({component:t,injections:a}),l.component=t,l.injections=a,l.component.props.setOkListener&&l.component.props.setOkListener(l.onOk),a.reduce(\"init\",{isPop:l.component.props.isPop}),l.loadSelect();var r=sessionStorage.getItem(\"currentOrgStatus\");1!=r&&2!=r&&l.load()},this.load=(t=(0,p.default)(g.default.mark(function e(t){var a,r,n;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.GetPropertyList();case 2:return a=e.sent,e.next=5,l.getData();case 5:return r=e.sent,e.next=8,l.webapi.portal.init();case 8:return e.next=10,l.webapi.portal.portal();case 10:(n=e.sent).list=r,n.payload=a,t&&(n.org=t),n.user?l.metaAction.context.set(\"currentUser\",n.user):(l.metaAction.context.set(\"currentUser\",void 0),l.component.props.onRedirect&&l.config.goAfterLogout&&l.component.props.onRedirect(l.config.goAfterLogout)),n.org?l.metaAction.context.set(\"currentOrg\",n.org):(l.metaAction.context.set(\"currentOrg\",void 0),l.component.props.onRedirect&&l.config.goAfterLogout&&l.component.props.onRedirect(l.config.goAfterLogout)),l.injections.reduce(\"load\",n),l.metaAction.sf(\"data.isShowSearch\",!1),x.default.setAccessToken(sessionStorage.getItem(\"_accessToken\")),localStorage.setItem(\"token\",sessionStorage.getItem(\"_accessToken\"));case 20:case\"end\":return e.stop()}},e,l)})),function(e){return t.apply(this,arguments)}),this.loadSelect=(0,p.default)(g.default.mark(function e(){var t,a,r;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=[]).push(v.consts.enum.VATTAXPAYER),t.push(v.consts.enum.ACCOUNTINGSTANDARDS),e.next=5,l.webapi.enumDetail.batchQuery(t);case 5:return a=e.sent,e.next=8,l.webapi.enableDate.getServerDate();case 8:r=e.sent,l.injections.reduce(\"loadSelect\",a[v.consts.enum.VATTAXPAYER],a[v.consts.enum.ACCOUNTINGSTANDARDS],r);case 10:case\"end\":return e.stop()}},e,l)})),this.getData=(a=(0,p.default)(g.default.mark(function e(t){var a;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.webapi.org.queryList();case 2:return a=e.sent,e.abrupt(\"return\",a);case 4:case\"end\":return e.stop()}},e,l)})),function(e){return a.apply(this,arguments)}),this.GetPropertyList=(0,p.default)(g.default.mark(function e(){return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt(\"return\",{list:[{enumId:v.consts.VATTAXPAYER_generalTaxPayer,name:\"一般纳税人\"},{enumId:v.consts.VATTAXPAYER_smallScaleTaxPayer,name:\"小规模纳税人\"}]});case 1:case\"end\":return e.stop()}},e,l)})),this.create=(0,p.default)(g.default.mark(function e(){var t,a,r,n,o;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.metaAction.gf(\"data.form\").toJS(),a=l.metaAction.context.get(\"currentUser\")||{},t=(0,h.default)(t,{creator:a.id}),e.next=5,l.check([{path:\"data.form.name\",value:t.name},{path:\"data.form.vatTaxpayer\",value:t.vatTaxpayer},{path:\"data.form.enabledDate\",value:t.enabledDate},{path:\"data.form.accountingStandards\",value:t.accountingStandards}],\"create\");case 5:if(e.sent){e.next=8;break}return e.abrupt(\"return\",!1);case 8:return r={creator:t.creator,name:t.name,vatTaxpayer:t.vatTaxpayer,enabledYear:t.enabledDate.split(\"-\")[0],enabledMonth:t.enabledDate.split(\"-\")[1],accountingStandards:t.accountingStandards,industry:2000030001},b.LoadingMask.show({background:\"rgba(230,247,255,0.5)\"}),e.next=12,l.webapi.org.create(r);case 12:return n=e.sent,e.next=15,l.webapi.org.updateCurrentOrg({orgId:n.id});case 15:if(o=e.sent,!n||!o){e.next=25;break}if(e.t0=l.component.props.onPortalReload,e.t0)return e.next=21,l.component.props.onPortalReload();e.next=21;break;case 21:l.metaAction.toast(\"success\",\"创建成功\"),b.LoadingMask.hide(),sessionStorage.currentOrgStatus=null,l.component.props.setPortalContent(\"门户首页\",\"edfx-app-portal\",{isShowMenu:!1,isTabsStyle:!1});case 25:case\"end\":return e.stop()}},e,l)})),this.cancel=(0,p.default)(g.default.mark(function e(){return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.component.props.setPortalContent(\"企业管理\",\"ttk-edf-app-company-manage\");case 1:case\"end\":return e.stop()}},e,l)})),this.goRegister=function(e){if(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!l.config.apps[\"edfx-app-register\"])throw\"不存在edfx-app-register应用，该功能不能使用\";l.component.props.onRedirect({appName:\"ttk-edf-app-company-manage-add\"})},this.goCompanyManage=function(e){if(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!l.config.apps[\"ttk-edf-app-company-manage\"])throw\"ttk-edf-app-company-manage应用，该功能不能使用\";l.component.props.onRedirect({appName:\"ttk-edf-app-company-manage\"})},this.searchVisibleToogle=function(){l.metaAction.sf(\"data.isShowSearch\",!l.metaAction.gf(\"data.isShowSearch\"))},this.getSearchVisible=function(){return l.metaAction.gf(\"data.isShowSearch\")},this.fieldChange=(r=(0,p.default)(g.default.mark(function e(t,a,r){return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.check([{path:t,value:a}],r);case 2:case\"end\":return e.stop()}},e,l)})),function(e,t,a){return r.apply(this,arguments)}),this.check=(n=(0,p.default)(g.default.mark(function e(t,a){var r,n,o,s,c,u,i,f,d,p;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt(\"return\");case 2:r=[],o=!(n=!0),s=void 0,e.prev=6,c=(0,m.default)(t);case 8:if(n=(u=c.next()).done){e.next=49;break}if(i=u.value,f=(0,h.default)({},i),\"data.form.name\"==i.path)return e.t0=h.default,e.t1=f,e.next=16,l.checkName(i.value,a);e.next=20;break;case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=45;break;case 20:if(\"data.form.vatTaxpayer\"==i.path)return e.t3=h.default,e.t4=f,e.next=25,l.checkVatTaxpayer(i.value);e.next=29;break;case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=45;break;case 29:if(\"data.form.enabledDate\"==i.path)return e.t6=h.default,e.t7=f,e.next=34,l.checkEnableDate(i.value);e.next=38;break;case 34:e.t8=e.sent,(0,e.t6)(e.t7,e.t8),e.next=45;break;case 38:if(\"data.form.accountingStandards\"==i.path)return e.t9=h.default,e.t10=f,e.next=43,l.checkAccountingStandards(i.value);e.next=45;break;case 43:e.t11=e.sent,(0,e.t9)(e.t10,e.t11);case 45:r.push(f);case 46:n=!0,e.next=8;break;case 49:e.next=55;break;case 51:e.prev=51,e.t12=e.catch(6),o=!0,s=e.t12;case 55:e.prev=55,e.prev=56,!n&&c.return&&c.return();case 58:if(e.prev=58,o)throw s;e.next=61;break;case 61:return e.finish(58);case 62:return e.finish(55);case 63:return d={},p=!0,r.forEach(function(e){d[e.path]=e.value,d[e.errorPath]=e.message,e.message&&(p=!1)}),l.metaAction.sfs(d),e.abrupt(\"return\",p);case 68:case\"end\":return e.stop()}},e,l,[[6,51,55,63],[56,,58,62]])})),function(e,t){return n.apply(this,arguments)}),this.checkName=(o=(0,p.default)(g.default.mark(function e(t,a){var r;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&\"create\"==a)return e.next=3,l.webapi.org.existsSysOrg(t);e.next=5;break;case 3:if(e.sent)return e.abrupt(\"return\",{errorPath:\"data.other.error.name\",message:\"该企业名称已注册\"});e.next=5;break;case 5:return t?200<t.length&&(r=\"企业名称不能超过200个字\"):r=\"请输入企业名称\",e.abrupt(\"return\",{errorPath:\"data.other.error.name\",message:r});case 7:case\"end\":return e.stop()}},e,l)})),function(e,t){return o.apply(this,arguments)}),this.checkVatTaxpayer=(s=(0,p.default)(g.default.mark(function e(t){var a;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a=\"纳税人身份不能为空\"),e.abrupt(\"return\",{errorPath:\"data.other.error.vatTaxpayer\",message:a});case 2:case\"end\":return e.stop()}},e,l)})),function(e){return s.apply(this,arguments)}),this.checkEnableDate=(c=(0,p.default)(g.default.mark(function e(t){var a;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a=\"启用日期不能为空\"),e.abrupt(\"return\",{errorPath:\"data.other.error.enableDate\",message:a});case 2:case\"end\":return e.stop()}},e,l)})),function(e){return c.apply(this,arguments)}),this.checkAccountingStandards=(u=(0,p.default)(g.default.mark(function e(t){var a;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a=\"企业会计准则不能为空\"),e.abrupt(\"return\",{errorPath:\"data.other.error.accountingStandards\",message:a});case 2:case\"end\":return e.stop()}},e,l)})),function(e){return u.apply(this,arguments)}),this.topMenuClick=(i=(0,p.default)(g.default.mark(function e(t){return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.key,e.next=\"mySetting\"===e.t0?3:\"logout\"===e.t0?7:13;break;case 3:if(l.config.apps[\"edfx-app-my-setting\"]){e.next=5;break}throw\"不存在edfx-app-my-setting应用，该功能不能使用\";case 5:return l.setContent(\"个人设置\",\"edfx-app-my-setting\"),e.abrupt(\"break\",13);case 7:if(l.component.props.onRedirect&&l.config.goAfterLogout)return e.next=10,l.webapi.user.logout();e.next=12;break;case 10:e.sent&&(l.metaAction.context.set(\"currentUser\",void 0),l.metaAction.context.set(\"currentOrg\",void 0),sessionStorage.removeItem(\"mobile\"),sessionStorage.removeItem(\"username\"),sessionStorage.removeItem(\"_accessToken\"),sessionStorage.removeItem(\"password\"),l.component.props.onRedirect(l.config.goAfterLogout));case 12:return e.abrupt(\"break\",13);case 13:case\"end\":return e.stop()}},e,l)})),function(e){return i.apply(this,arguments)}),this.setField=(f=(0,p.default)(g.default.mark(function e(t,a){return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.voucherAction.fieldChange(t,a);case 1:case\"end\":return e.stop()}},e,l)})),function(e,t){return f.apply(this,arguments)}),this.checkOrg=(d=(0,p.default)(g.default.mark(function e(t){return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.webapi.enumDetail.checkOrg({name:t});case 2:e.sent;case 3:case\"end\":return e.stop()}},e,l)})),function(e){return d.apply(this,arguments)}),this.changeDateState=function(){var e=l.metaAction.gf(\"data.other\").toJS().editDate;l.metaAction.sf(\"data.other.editDate\",!e)},this.changeStandardState=function(){var e=l.metaAction.gf(\"data.other\").toJS().editStandard;l.metaAction.sf(\"data.other.editStandard\",!e)},this.toAddCompany=function(){l.metaAction.sf(\"data.showAdd\",!l.metaAction.gf(\"data.showAdd\"))},this.importCompany=function(){}},r);e.exports=t.default},698:function(e,t,a){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r=s(a(0)),n=s(a(7));t.default=function(e){var t=new o.reducer(e),a=new p((0,r.default)({},e,{metaReducer:t}));return(0,r.default)({},t,a)};var c=a(13),o=a(54),u=s(a(173)),i=a(239),f=a(6),d=a(71);s(a(15));function s(e){return e&&e.__esModule?e:{default:e}}var p=function e(t){var s=this;(0,n.default)(this,e),this.init=function(e,t){var a=(0,i.getInitState)();return s.metaReducer.init(e,a)},this.load=function(e,t){if(t.list&&t.list.length){var a=t.payload.list.map(function(e){return{label:e.name,value:e.enumId}});e=s.metaReducer.sf(e,\"data.form.vatTaxpayer\",(0,c.fromJS)(a[0]&&Number(a[0].value))),e=s.metaReducer.sf(e,\"data.other.vatTaxpayer\",(0,c.fromJS)(a))}return e},this.loadSelect=function(e,t,a,r){e=s.metaReducer.sf(e,\"data.vatTaxpayer\",(0,c.fromJS)(t)),e=s.metaReducer.sf(e,\"data.accountingStandards\",(0,c.fromJS)(a));var n=\"\";a.forEach(function(e){e.id!=d.consts.ACCOUNTINGSTANDARDS_2013||(n=e.name)}),e=s.metaReducer.sf(e,\"data.form.accountingStandards\",Number(d.consts.ACCOUNTINGSTANDARDS_2013)),e=s.metaReducer.sf(e,\"data.form.accountingStandardsName\",n);var o=f.moment.stringToMoment(r).format(\"YYYY-MM\");return e=s.metaReducer.sf(e,\"data.form.vatTaxpayer\",t[0].id),e=s.metaReducer.sf(e,\"data.form.enabledDate\",o)},this.metaReducer=t.metaReducer,this.config=u.default.current};e.exports=t.default}});"}
{"source":"webpackJsonp([24],{744:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var a,o=p(n(0)),r=p(n(9)),i=p(n(7)),s=p(n(8)),u=p(n(10)),d=p(n(11)),c=n(1),l=(p(c),n(54)),f=p(n(270));function p(e){return e&&e.__esModule?e:{default:e}}var v=(0,l.wrapper)(f.default)(a=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:\"root\"}))}}]),t}(c.Component))||a;t.default=v,e.exports=t.default},745:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var o=a(n(0)),r=a(n(7));t.default=function(e){var t=new i.action(e),n=new u((0,o.default)({},e,{metaAction:t})),a=(0,o.default)({},t,n);return t.config({metaHandlers:a}),a};a(n(1));var i=n(54),s=a(n(189));function a(e){return e&&e.__esModule?e:{default:e}}var u=function e(t){var a=this;(0,r.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,(a.injections=n).reduce(\"init\"),a.onLoad(t,n)},this.onLoad=function(e,t){var n=e.props.groupNo||\"10341037\",a=e.props.eno||\"anyone\",o=e.props.thirdPartySession||\"123\",r=0,i=void 0;function s(){if(1<(r+=1))layer.msg(\"只能发起一个会话\"),r--;else{var e=\"http://119.29.162.83:8082/Web/Im/Gz/Index.html?groupNo=\"+n+\"&eno=\"+a+\"&thirdPartySession=\"+o;layer.open({type:2,title:\" \",shadeClose:!0,shade:!1,maxmin:!1,area:[\"600px\",\"556px\"],offset:\"rb\",content:[e,\"no\"],end:function(){r--}})}}$(function(){window.addEventListener?($(\"#starConversation\").html(\"点我咨询\"),$(\"#starConversation\").attr(\"class\",\"ttk-edf-app-im-chat\"),$(\"#starConversation\").click(function(){s()}),window.addEventListener(\"message\",function(e){var t=JSON.parse(e.data),n=t.url;switch(t.method){case\"closeLayer\":case\"closeAllLayer\":layer.closeAll();break;case\"openNav\":layer.closeAll(),s();break;case\"layerMessageAction\":!function(e){var t=\"\";-1!=e.indexOf(\"msgManage.do\")?t=\"请您留言\":-1!=e.indexOf(\"msgReply.do\")?t=\"查看留言回复\":-1!=e.indexOf(\"eval.do\")&&(t=\"评价\");i=layer.open({type:2,title:t,shadeClose:!0,shade:!1,maxmin:!1,area:[\"600px\",\"556px\"],offset:\"r\",move:!1,content:[e]})}(n);break;case\"closeLayerByIndex\":layer.close(i)}},!1)):window.attachEvent&&window.attachEvent(\"onmessage\",function(e){JSON.parse(e.data)})})},this.render=function(){},this.metaAction=t.metaAction,this.config=s.default.current};e.exports=t.default},746:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var a=u(n(0)),o=u(n(7));t.default=function(e){var t=new r.reducer(e),n=new d((0,a.default)({},e,{metaReducer:t}));return(0,a.default)({},t,n)};n(13);var r=n(54),i=u(n(189)),s=n(271);function u(e){return e&&e.__esModule?e:{default:e}}var d=function e(t){var a=this;(0,o.default)(this,e),this.init=function(e,t){var n=(0,s.getInitState)();return a.metaReducer.init(e,n)},this.metaReducer=t.metaReducer,this.config=i.default.current};e.exports=t.default}});"}
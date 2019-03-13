webpackJsonp([54,60],{"401":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function config(options){options&&(0,_extends3["default"])(_options,options)}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_webapi=__webpack_require__(1642),_webapi2=_interopRequireDefault(_webapi),_options={"webapi":_webapi2["default"]};config.current=_options,exports["default"]=config,module.exports=exports["default"]},"678":function(module,exports){"use strict";function getMeta(){return{"name":"root","component":"Layout","className":"ttk-edf-app-card-supplier","children":[{"name":"codeItem","component":"Form.Item","label":"\u7f16\u7801","required":!0,"validateStatus":"{{data.other.error.code?'error':'success'}}","help":"{{data.other.error.code}}","children":[{"name":"code","component":"Input","maxlength":"50","value":"{{data.form.code}}","onChange":"{{function(e){$sf('data.form.code',e.target.value);$changeCheck(1)}}}"}]},{"name":"nameItem","component":"Form.Item","label":"\u540d\u79f0","required":!0,"validateStatus":"{{data.other.error.name?'error':'success'}}","help":"{{data.other.error.name}}","children":[{"name":"name","component":"Input","maxlength":"200","value":"{{data.form.name}}","onChange":"{{function(e){$sf('data.form.name',e.target.value);$changeCheck()}}}"}]},{"name":"taxNumberItem","component":"Form.Item","label":"\u7a0e\u53f7","validateStatus":"{{data.other.error.taxNumber?'error':'success'}}","help":"{{data.other.error.taxNumber}}","children":[{"name":"taxNumber","component":"Input","maxlength":"20","value":"{{data.form.taxNumber}}","onChange":"{{function(e){$fieldChange('data.form.taxNumber',e.target.value)}}}"}]},{"name":"linkmanItem","component":"Form.Item","label":"\u8054\u7cfb\u4eba","children":[{"name":"linkman","component":"Input","maxlength":"50","value":"{{data.form.linkman}}","onChange":"{{function(e){$sf('data.form.linkman',e.target.value)}}}"}]},{"name":"contactNumberItem","component":"Form.Item","label":"\u8054\u7cfb\u7535\u8bdd","children":[{"name":"contactNumber","component":"Input","maxlength":"20","value":"{{data.form.contactNumber}}","onChange":"{{function(e){$sf('data.form.contactNumber',e.target.value)}}}"}]},{"name":"openingBankItem","component":"Form.Item","label":"\u5f00\u6237\u94f6\u884c","children":[{"name":"openingBank","component":"Input","maxlength":"50","value":"{{data.form.openingBank}}","onChange":"{{function(e){$sf('data.form.openingBank',e.target.value)}}}"}]},{"name":"bankAccoutItem","component":"Form.Item","label":"\u8d26\u53f7","children":[{"name":"bankAccout","component":"Input","maxlength":"50","value":"{{data.form.bankAccout}}","onChange":"{{function(e){$sf('data.form.bankAccout',e.target.value)}}}"}]},{"name":"addressAndTelItem","component":"Form.Item","label":"\u5730\u5740\u53ca\u7535\u8bdd","children":[{"name":"addressAndTel","component":"Input.TextArea","maxlength":"200","value":"{{data.form.addressAndTel}}","onChange":"{{function(e){$sf('data.form.addressAndTel',e.target.value)}}}"}]},{"name":"remarkItem","component":"Form.Item","label":"\u5907\u6ce8","children":[{"name":"remark","component":"Input.TextArea","maxlength":"200","value":"{{data.form.remark}}","onChange":"{{function(e){$sf('data.form.remark',e.target.value)}}}"}]},{"name":"statusItem","component":"Form.Item","label":"\u505c\u7528","children":[{"name":"isEnable","component":"Checkbox","checked":"{{!data.form.isEnable}}","onChange":"{{function(e){$sf('data.form.isEnable',!e.target.checked)}}}"}]}]}}function getInitState(){return{"data":{"form":{"code":"","name":"","isEnable":!0},"other":{"error":{}}}}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports.getMeta=getMeta,exports.getInitState=getInitState},"1639":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaAction=new _edfMetaEngine.action(option),voucherAction=_edfComponent.FormDecorator.actionCreator((0,_extends3["default"])({},option,{"metaAction":metaAction})),o=new action((0,_extends3["default"])({},option,{"metaAction":metaAction,"voucherAction":voucherAction})),ret=(0,_extends3["default"])({},metaAction,voucherAction,o);return metaAction.config({"metaHandlers":ret}),ret}Object.defineProperty(exports,"__esModule",{"value":!0});var _class,_temp,_initialiseProps,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_regenerator=__webpack_require__(19),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(18),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_config=__webpack_require__(401),_config2=_interopRequireDefault(_config),_edfComponent=__webpack_require__(22),action=(_temp=_class=function action(option){(0,_classCallCheck3["default"])(this,action),_initialiseProps.call(this),this.metaAction=option.metaAction,this.config=_config2["default"].current,this.voucherAction=option.voucherAction,this.webapi=this.config.webapi},_initialiseProps=function _initialiseProps(){var _this=this;this.onInit=function(_ref){var component=_ref.component,injections=_ref.injections;_this.voucherAction.onInit({"component":component,"injections":injections}),_this.component=component,_this.injections=injections,_this.component.props.setOkListener&&_this.component.props.setOkListener(_this.onOk),injections.reduce("init",{"isPop":_this.component.props.isPop}),_this.load()},this.load=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee(){var data,response,code;return _regenerator2["default"].wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(data={},response={},code=void 0,!_this.component.props.personId&&0!==_this.component.props.personId){_context.next=7;break}return _context.next=4,_this.webapi.vendor.query(_this.component.props.personId);case 4:response=_context.sent,_context.next=10;break;case 7:return _context.next=9,_this.webapi.vendor.getCode();case 9:code=_context.sent;case 10:code&&(data.code=code),response&&(data.response=response),_this.injections.reduce("load",data);case 13:case"end":return _context.stop()}},_callee,_this)})),this.onOk=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee2(){return _regenerator2["default"].wrap(function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,_this.save();case 2:return _context2.abrupt("return",_context2.sent);case 3:case"end":return _context2.stop()}},_callee2,_this)})),this.save=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee3(){var form,ok,response;return _regenerator2["default"].wrap(function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return form=_this.metaAction.gf("data.form").toJS(),_context3.next=3,_this.voucherAction.check([{"path":"data.form.code","value":form.code},{"path":"data.form.name","value":form.name},{"path":"data.form.taxNumber","value":form.taxNumber}],_this.check);case 3:if(ok=_context3.sent){_context3.next=7;break}return _this.metaAction.toast("warning","\u8bf7\u6309\u9875\u9762\u63d0\u793a\u4fe1\u606f\u4fee\u6539\u4fe1\u606f\u540e\u624d\u53ef\u63d0\u4ea4"),_context3.abrupt("return",!1);case 7:if(response=void 0,form.code=form.code?form.code.trim():"",form.name=form.name?form.name.trim():"",form.taxNumber=form.taxNumber?form.taxNumber.trim():"",form.linkman=form.linkman?form.linkman.trim():"",form.contactNumber=form.contactNumber?form.contactNumber.trim():"",form.openingBank=form.openingBank?form.openingBank.trim():"",form.bankAccout=form.bankAccout?form.bankAccout.trim():"",form.addressAndTel=form.addressAndTel?form.addressAndTel.trim():"",form.remark=form.remark?form.remark.trim():"",form.isReturnValue=!0,!_this.component.props.personId&&0!==_this.component.props.personId){_context3.next=25;break}return form.id=_this.component.props.personId,_context3.next=22,_this.webapi.vendor.update(form);case 22:response=_context3.sent,_context3.next=28;break;case 25:return _context3.next=27,_this.webapi.vendor.create(form);case 27:response=_context3.sent;case 28:if(!response||!response.error){_context3.next=33;break}return _this.metaAction.toast("error",response.error.message),_context3.abrupt("return",!1);case 33:return _this.metaAction.toast("success","\u4fdd\u5b58\u6210\u529f"),_context3.abrupt("return",response);case 35:case"end":return _context3.stop()}},_callee3,_this)})),this.changeCheck=function(num){var form=_this.metaAction.gf("data.form").toJS();1==num?_this.voucherAction.check([{"path":"data.form.code","value":form.code}],_this.check):_this.voucherAction.check([{"path":"data.form.name","value":form.name}],_this.check)},this.check=function(option){if(option&&option.path)return"data.form.code"==option.path?{"errorPath":"data.other.error.code","message":option.value&&option.value.trim()?"":"\u8bf7\u5f55\u5165\u7f16\u7801"}:"data.form.name"==option.path?{"errorPath":"data.other.error.name","message":option.value&&option.value.trim()?"":"\u8bf7\u5f55\u5165\u540d\u79f0"}:"data.form.taxNumber"==option.path&&option.value?{"errorPath":"data.other.error.taxNumber","message":!option.value||20!=option.value.length&&15!=option.value.length&&18!=option.value.length?"\u7a0e\u53f7\u5e94\u4e3a15\uff0c18\u621620\u4f4d":""}:void 0},this.fieldChange=function(path,value){_this.voucherAction.fieldChange(path,value,_this.check)}},_temp);module.exports=exports["default"]},"1640":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports["default"]=void 0;var _dec,_class,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_possibleConstructorReturn2=__webpack_require__(7),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(6),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_index=__webpack_require__(679),_index2=_interopRequireDefault(_index),C=(_dec=(0,_edfMetaEngine.wrapper)(_index2["default"]),_dec(_class=function(_Component){function C(){return(0,_classCallCheck3["default"])(this,C),(0,_possibleConstructorReturn3["default"])(this,_Component.apply(this,arguments))}return(0,_inherits3["default"])(C,_Component),C.prototype.render=function render(){return this.props.monkeyKing((0,_extends3["default"])({},this.props,{"path":"root"}))},C}(_react.Component))||_class);exports["default"]=C,module.exports=exports["default"]},"1641":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaReducer=new _edfMetaEngine.reducer(option),o=new reducer((0,_extends3["default"])({},option,{"metaReducer":metaReducer}));return(0,_extends3["default"])({},metaReducer,o)}Object.defineProperty(exports,"__esModule",{"value":!0});var _class,_temp,_initialiseProps,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_keys=__webpack_require__(41),_keys2=_interopRequireDefault(_keys),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _immutable=__webpack_require__(11),_edfMetaEngine=__webpack_require__(5),_config=__webpack_require__(401),_config2=_interopRequireDefault(_config),_data=__webpack_require__(678),reducer=(_temp=_class=function reducer(option){(0,_classCallCheck3["default"])(this,reducer),_initialiseProps.call(this),this.metaReducer=option.metaReducer,this.config=_config2["default"].current},_initialiseProps=function _initialiseProps(){var _this=this;this.init=function(state,option){var initState=(0,_data.getInitState)();return _this.metaReducer.init(state,initState)},this.load=function(state,option){return option.response&&(0==(0,_keys2["default"])(option.response).length?(option.response.isEnable=!0,state=_this.metaReducer.sf(state,"data.form",(0,_immutable.fromJS)(option.response))):state=_this.metaReducer.sf(state,"data.form",(0,_immutable.fromJS)(option.response))),option.code&&(state=_this.metaReducer.sf(state,"data.form.code",(0,_immutable.fromJS)(option.code))),state},this.modifyContent=function(state){var content=_this.metaReducer.gf(state,"data.content");return _this.metaReducer.sf(state,"data.content",content+"!")}},_temp);module.exports=exports["default"]},"1642":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{"value":!0});var _edfUtils=__webpack_require__(12);exports["default"]={"vendor":{"getCode":function getCode(){return _edfUtils.fetch.post("/v1/ba/basearchive/getAutoCode",{"archiveName":"ba_supplier"})},"query":function query(id){return _edfUtils.fetch.post("/v1/ba/supplier/query",{"id":id})},"create":function create(option){return _edfUtils.fetch.post("/v1/ba/supplier/create",option)},"update":function update(option){return _edfUtils.fetch.post("/v1/ba/supplier/update",option)},"queryList":function queryList(option){return _edfUtils.fetch.post("/v1/ba/supplier/queryList",option)}}},module.exports=exports["default"]}});
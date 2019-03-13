webpackJsonp([50,60],{"404":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function config(options){options&&(0,_extends3["default"])(_options,options)}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_webapi=__webpack_require__(1655),_webapi2=_interopRequireDefault(_webapi),_options={"webapi":_webapi2["default"]};config.current=_options,exports["default"]=config,module.exports=exports["default"]},"684":function(module,exports){"use strict";function getMeta(){return{"name":"root","component":"Layout","className":"edfx-app-setting","children":[{"name":"content","className":"edfx-app-setting-content","component":"Card","children":[{"name":"dataGrid","component":"DataGrid","headerHeight":35,"rowHeight":35,"enableSequence":!0,"startSequence":1,"rowsCount":"{{$getListRowsCount()}}","columns":"{{$getListColumns()}}"}]}]}}function getInitState(){return{"data":{"list":[],"other":{}}}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports.getMeta=getMeta,exports.getInitState=getInitState},"1652":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaAction=new _edfMetaEngine.action(option),o=new action((0,_extends3["default"])({},option,{"metaAction":metaAction})),ret=(0,_extends3["default"])({},metaAction,o);return metaAction.config({"metaHandlers":ret}),ret}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_regenerator=__webpack_require__(19),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(18),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_edfMetaEngine=__webpack_require__(5),_moment=(__webpack_require__(11),__webpack_require__(14)),_config=(_interopRequireDefault(_moment),__webpack_require__(404)),_config2=_interopRequireDefault(_config),_edfComponent=__webpack_require__(22),action=function action(option){var _this=this;(0,_classCallCheck3["default"])(this,action),this.onInit=function(_ref){var component=_ref.component,injections=_ref.injections;_this.component=component,_this.injections=injections,_this.component.props.setOkListener&&_this.component.props.setOkListener(_this.onOk),injections.reduce("init"),_this.load()},this.load=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee(){var response;return _regenerator2["default"].wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this.webapi.columnDetail.findByColumnCode(_this.component.props.columnCode);case 2:response=_context.sent,_this.injections.reduce("load",response);case 4:case"end":return _context.stop()}},_callee,_this)})),this.getListRowsCount=function(){return _this.metaAction.gf("data.list").size},this.getListColumns=function(){var list=_this.metaAction.gf("data.list").toJS(),Column=_edfComponent.DataGrid.Column,Cell=_edfComponent.DataGrid.Cell,cols=[_react2["default"].createElement(Column,{"name":"caption","columnKey":"caption","flexGrow":1,"width":200,"header":_react2["default"].createElement(Cell,{"name":"header"},"\u5b57\u6bb5\u540d\u79f0"),"cell":function cell(ps){return _react2["default"].createElement(Cell,null,list[ps.rowIndex].caption)}}),_react2["default"].createElement(Column,{"name":"isVisible","columnKey":"isVisible","flexGrow":1,"width":200,"header":_react2["default"].createElement(Cell,{"name":"header"},_react2["default"].createElement(_edfComponent.Checkbox,{"checked":_this.isSelectAll(list),"onChange":_this.selectAll()},"\u663e\u793a")),"cell":function cell(ps){return 1==list[ps.rowIndex].isMustSelect?_react2["default"].createElement(Cell,null,_react2["default"].createElement(_edfComponent.Checkbox,{"checked":list[ps.rowIndex].isVisible,"onChange":_this.selectColumn(list[ps.rowIndex]),"disabled":"disabled"})):_react2["default"].createElement(Cell,null,_react2["default"].createElement(_edfComponent.Checkbox,{"checked":list[ps.rowIndex].isVisible,"onChange":_this.selectColumn(list[ps.rowIndex])}))}})];return cols},this.isSelectAll=function(list){return list.length==list.filter(function(o){return o&&1==o.isVisible}).length},this.selectAll=function(){return function(e){var list=_this.metaAction.gf("data.list").toJS();list.forEach(function(o){1!=o.isMustSelect&&(e.target.checked?o.isVisible=1:o.isVisible=0)}),_this.injections.reduce("loadColumns",{"list":list})}},this.selectColumn=function(column){return function(e){var list=_this.metaAction.gf("data.list").toJS();list.forEach(function(o){if(o.id==column.id)return e.target.checked?void(o.isVisible=1):void(o.isVisible=0)}),_this.injections.reduce("loadColumns",{"list":list})}},this.onOk=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee2(){return _regenerator2["default"].wrap(function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,_this.save();case 2:return _context2.abrupt("return",_context2.sent);case 3:case"end":return _context2.stop()}},_callee2,_this)})),this.save=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee3(){var list,response;return _regenerator2["default"].wrap(function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(list=_this.metaAction.gf("data.list").toJS(),!list){_context3.next=7;break}return _context3.next=4,_this.webapi.columnDetail.batchUpdate(list);case 4:return response=_context3.sent,_this.metaAction.toast("success","\u4fee\u6539\u6210\u529f"),_context3.abrupt("return",response);case 7:case"end":return _context3.stop()}},_callee3,_this)})),this.metaAction=option.metaAction,this.config=_config2["default"].current,this.webapi=this.config.webapi};module.exports=exports["default"]},"1653":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports["default"]=void 0;var _dec,_class,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_possibleConstructorReturn2=__webpack_require__(7),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(6),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_index=__webpack_require__(685),_index2=_interopRequireDefault(_index),C=(_dec=(0,_edfMetaEngine.wrapper)(_index2["default"]),_dec(_class=function(_Component){function C(){return(0,_classCallCheck3["default"])(this,C),(0,_possibleConstructorReturn3["default"])(this,_Component.apply(this,arguments))}return(0,_inherits3["default"])(C,_Component),C.prototype.render=function render(){return this.props.monkeyKing((0,_extends3["default"])({},this.props,{"path":"root"}))},C}(_react.Component))||_class);exports["default"]=C,module.exports=exports["default"]},"1654":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaReducer=new _edfMetaEngine.reducer(option),o=new reducer((0,_extends3["default"])({},option,{"metaReducer":metaReducer}));return(0,_extends3["default"])({},metaReducer,o)}Object.defineProperty(exports,"__esModule",{"value":!0});var _class,_temp,_initialiseProps,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_from=__webpack_require__(247),_from2=_interopRequireDefault(_from),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _immutable=__webpack_require__(11),_edfMetaEngine=__webpack_require__(5),_config=__webpack_require__(404),_moment=(_interopRequireDefault(_config),__webpack_require__(14)),_data=(_interopRequireDefault(_moment),__webpack_require__(684)),reducer=(_temp=_class=function reducer(option){(0,_classCallCheck3["default"])(this,reducer),_initialiseProps.call(this),this.metaReducer=option.metaReducer},_initialiseProps=function _initialiseProps(){var _this=this;this.init=function(state,option){var initState=(0,_data.getInitState)();return option&&option.columnCode&&(initState.data.form.columnCode=option.columnCode),_this.metaReducer.init(state,initState)},this.load=function(state,response){return _this.metaReducer.sf(state,"data.list",(0,_immutable.fromJS)(response))},this.loadColumns=function(state,_ref){var list=_ref.list;return state=_this.metaReducer.sf(state,"data.list",(0,_immutable.fromJS)((0,_from2["default"])(list)))}},_temp);module.exports=exports["default"]},"1655":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{"value":!0});var _edfUtils=__webpack_require__(12);exports["default"]={"columnDetail":{"batchUpdate":function batchUpdate(option){return _edfUtils.fetch.post("/v1/edf/columnDetail/batchUpdate",option)},"findByColumnCode":function findByColumnCode(code){return _edfUtils.fetch.post("/v1/edf/columnDetail/findByColumnCode",code)}}},module.exports=exports["default"]}});
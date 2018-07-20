(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./client/components/Graphic/Graphic.js":
/*!**********************************************!*\
  !*** ./client/components/Graphic/Graphic.js ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _GraphicModule = __webpack_require__(/*! ./Graphic.module.sass */ \"./client/components/Graphic/Graphic.module.sass\");\n\nvar _GraphicModule2 = _interopRequireDefault(_GraphicModule);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Graphic = function (_React$Component) {\n\t_inherits(Graphic, _React$Component);\n\n\tfunction Graphic() {\n\t\t_classCallCheck(this, Graphic);\n\n\t\treturn _possibleConstructorReturn(this, (Graphic.__proto__ || Object.getPrototypeOf(Graphic)).apply(this, arguments));\n\t}\n\n\t_createClass(Graphic, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _GraphicModule2.default.Graphic },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _GraphicModule2.default.GraphicCell },\n\t\t\t\t\tthis.props.children\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Graphic;\n}(_react2.default.Component);\n\nexports.default = Graphic;\n\n//# sourceURL=webpack:///./client/components/Graphic/Graphic.js?");

/***/ }),

/***/ "./client/components/Graphic/Graphic.module.sass":
/*!*******************************************************!*\
  !*** ./client/components/Graphic/Graphic.module.sass ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/sass-loader/lib/loader.js!./Graphic.module.sass */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/components/Graphic/Graphic.module.sass\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Graphic/Graphic.module.sass?");

/***/ }),

/***/ "./client/components/InteractiveGraphic/InteractiveGraphic.js":
/*!********************************************************************!*\
  !*** ./client/components/InteractiveGraphic/InteractiveGraphic.js ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Graphic = __webpack_require__(/*! ../Graphic/Graphic */ \"./client/components/Graphic/Graphic.js\");\n\nvar _Graphic2 = _interopRequireDefault(_Graphic);\n\nvar _InteractiveGraphicModule = __webpack_require__(/*! ./InteractiveGraphic.module.sass */ \"./client/components/InteractiveGraphic/InteractiveGraphic.module.sass\");\n\nvar _InteractiveGraphicModule2 = _interopRequireDefault(_InteractiveGraphicModule);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar InteractiveGraphic = function (_React$Component) {\n\t_inherits(InteractiveGraphic, _React$Component);\n\n\tfunction InteractiveGraphic() {\n\t\t_classCallCheck(this, InteractiveGraphic);\n\n\t\treturn _possibleConstructorReturn(this, (InteractiveGraphic.__proto__ || Object.getPrototypeOf(InteractiveGraphic)).apply(this, arguments));\n\t}\n\n\t_createClass(InteractiveGraphic, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_Graphic2.default,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _InteractiveGraphicModule2.default.InteractiveGraphic },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'h3',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'I\\'m interactive!'\n\t\t\t\t\t),\n\t\t\t\t\tthis.props.children\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn InteractiveGraphic;\n}(_react2.default.Component);\n\nexports.default = InteractiveGraphic;\n\n//# sourceURL=webpack:///./client/components/InteractiveGraphic/InteractiveGraphic.js?");

/***/ }),

/***/ "./client/components/InteractiveGraphic/InteractiveGraphic.module.sass":
/*!*****************************************************************************!*\
  !*** ./client/components/InteractiveGraphic/InteractiveGraphic.module.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/sass-loader/lib/loader.js!./InteractiveGraphic.module.sass */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/components/InteractiveGraphic/InteractiveGraphic.module.sass\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/InteractiveGraphic/InteractiveGraphic.module.sass?");

/***/ }),

/***/ "./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.js":
/*!****************************************************************************!*\
  !*** ./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _gsap = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _reactGsapEnhancer = __webpack_require__(/*! react-gsap-enhancer */ \"./node_modules/react-gsap-enhancer/lib/index.js\");\n\nvar _reactGsapEnhancer2 = _interopRequireDefault(_reactGsapEnhancer);\n\nvar _TestAnimationModule = __webpack_require__(/*! ./TestAnimation.module.css */ \"./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css\");\n\nvar _TestAnimationModule2 = _interopRequireDefault(_TestAnimationModule);\n\nvar _InteractiveGraphic = __webpack_require__(/*! ../../../components/InteractiveGraphic/InteractiveGraphic */ \"./client/components/InteractiveGraphic/InteractiveGraphic.js\");\n\nvar _InteractiveGraphic2 = _interopRequireDefault(_InteractiveGraphic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction GSAPAnimation(_ref) {\n\tvar target = _ref.target;\n\n\tvar square = target.find({ name: 'testSquare' });\n\n\tvar tl = new _gsap.TimelineMax({ repeat: -1 });\n\ttl.to(square, 2, { scale: 2 });\n\n\treturn tl;\n}\n\nvar TestAnimation = function (_React$Component) {\n\t_inherits(TestAnimation, _React$Component);\n\n\tfunction TestAnimation() {\n\t\tvar _ref2;\n\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, TestAnimation);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TestAnimation.__proto__ || Object.getPrototypeOf(TestAnimation)).call.apply(_ref2, [this].concat(args))), _this), _this.pause = function () {\n\t\t\t_this.animation.paused(!_this.animation.paused());\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\n\t_createClass(TestAnimation, [{\n\t\tkey: 'componentDidMount',\n\n\n\t\t// When React mounts the component, add an animation as a property of this component\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.animation = this.addAnimation(GSAPAnimation);\n\t\t}\n\n\t\t// Custom event handler\n\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_InteractiveGraphic2.default,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'test-animation' },\n\t\t\t\t\t_react2.default.createElement('div', { className: _TestAnimationModule2.default.square, name: 'testSquare' }),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ className: _TestAnimationModule2.default.pause, onClick: this.pause },\n\t\t\t\t\t\t'Pause'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn TestAnimation;\n}(_react2.default.Component);\n\nexports.default = (0, _reactGsapEnhancer2.default)()(TestAnimation);\n\n//# sourceURL=webpack:///./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.js?");

/***/ }),

/***/ "./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css":
/*!************************************************************************************!*\
  !*** ./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css ***!
  \************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./TestAnimation.module.css */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/components/Graphic/Graphic.module.sass":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js!./client/components/Graphic/Graphic.module.sass ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".🇲🇷🚴🏾‍♂️👷🏿‍♂️🇸🇧client-components-Graphic-Graphic-module__Graphic--Ftx69 {\\n  margin: 0 auto;\\n  text-align: center; }\\n\\n.👧🏻🙅🏻‍♂️🐋🎅client-components-Graphic-Graphic-module__GraphicCell--Bqwb2 {\\n  margin: 1rem;\\n  padding: 5px; }\\n\\n.👧🏻🙅🏻‍♂️🐋🎅client-components-Graphic-Graphic-module__GraphicCell--Bqwb2 img, p {\\n  width: 100%; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"Graphic\": \"🇲🇷🚴🏾‍♂️👷🏿‍♂️🇸🇧client-components-Graphic-Graphic-module__Graphic--Ftx69\",\n\t\"GraphicCell\": \"👧🏻🙅🏻‍♂️🐋🎅client-components-Graphic-Graphic-module__GraphicCell--Bqwb2\"\n};\n\n//# sourceURL=webpack:///./client/components/Graphic/Graphic.module.sass?./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/components/InteractiveGraphic/InteractiveGraphic.module.sass":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js!./client/components/InteractiveGraphic/InteractiveGraphic.module.sass ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".🏧😠🇹🇹⛷🏽client-components-InteractiveGraphic-InteractiveGraphic-module__InteractiveGraphic--1mHd1 {\\n  max-width: 100%; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"InteractiveGraphic\": \"🏧😠🇹🇹⛷🏽client-components-InteractiveGraphic-InteractiveGraphic-module__InteractiveGraphic--1mHd1\"\n};\n\n//# sourceURL=webpack:///./client/components/InteractiveGraphic/InteractiveGraphic.module.sass?./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js!./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".🇲🇨🤦🏽🤡🇰🇷client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__square--3L7W2 {\\n  background-color: blue;\\n  width: 50px;\\n  height: 50px;\\n  margin: 40px auto; }\\n\\n.🇫🇮👧👶🏼🤦🏻‍♂️client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__pause--3iF7a {\\n  display: block;\\n  margin: 0 auto;\\n  background-color: #eaeaea; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"square\": \"🇲🇨🤦🏽🤡🇰🇷client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__square--3L7W2\",\n\t\"pause\": \"🇫🇮👧👶🏼🤦🏻‍♂️client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__pause--3iF7a\"\n};\n\n//# sourceURL=webpack:///./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.module.css?./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js");

/***/ })

}]);
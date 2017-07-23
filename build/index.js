/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createElement = __webpack_require__(1);

	var _createElement2 = _interopRequireDefault(_createElement);

	var _renderVDOM = __webpack_require__(2);

	var _Component3 = __webpack_require__(3);

	var _Component4 = _interopRequireDefault(_Component3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	///Test app
	var App2 = function () {
	    function App2(props) {
	        _classCallCheck(this, App2);

	        this.props = props;
	    }

	    _createClass(App2, [{
	        key: 'render',
	        value: function render() {
	            return (0, _createElement2.default)(
	                'div',
	                { style: { color: 'red' } },
	                this.props.text || 'hello world'
	            );
	        }
	    }]);

	    return App2;
	}();

	var App3 = function () {
	    function App3(props) {
	        _classCallCheck(this, App3);

	        this.props = props;
	    }

	    _createClass(App3, [{
	        key: 'render',
	        value: function render() {
	            return (0, _createElement2.default)(
	                'div',
	                null,
	                (0, _createElement2.default)(App2, { text: this.props.text }),
	                (0, _createElement2.default)(App2, null),
	                (0, _createElement2.default)(App2, null)
	            );
	        }
	    }]);

	    return App3;
	}();

	var App4 = function (_Component) {
	    _inherits(App4, _Component);

	    function App4(props) {
	        _classCallCheck(this, App4);

	        return _possibleConstructorReturn(this, (App4.__proto__ || Object.getPrototypeOf(App4)).call(this, props));
	    }

	    _createClass(App4, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return (0, _createElement2.default)(
	                'div',
	                null,
	                (0, _createElement2.default)(App3, { text: this.state.text }),
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this2.setState({
	                                text: parseInt(Math.random() * 10000) + ""
	                            });
	                        } },
	                    'click me'
	                )
	            );
	        }
	    }]);

	    return App4;
	}(_Component4.default);

	var AppWithNoVDOM = function (_Component2) {
	    _inherits(AppWithNoVDOM, _Component2);

	    function AppWithNoVDOM(props) {
	        _classCallCheck(this, AppWithNoVDOM);

	        return _possibleConstructorReturn(this, (AppWithNoVDOM.__proto__ || Object.getPrototypeOf(AppWithNoVDOM)).call(this, props));
	    }

	    _createClass(AppWithNoVDOM, [{
	        key: 'testApp3',
	        value: function testApp3(num) {
	            var result = [];
	            for (var i = 0; i < num; i++) {
	                result.push((0, _createElement2.default)(App3, null));
	            }
	            return result;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return (0, _createElement2.default)(
	                'div',
	                null,
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this4.setState({});
	                        } },
	                    'click me'
	                ),
	                this.testApp3(10000)
	            );
	        }
	    }]);

	    return AppWithNoVDOM;
	}(_Component4.default);

	/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
	console.log("app1:", app1)


	var app2 = renderVDOM(createElement(App2))
	console.log("app2:", app2)

	var app3 = renderVDOM(<App3/>)
	console.log("app3:", app3)*/

	console.log("enter:");
	(0, _renderVDOM.renderInBrowser)((0, _createElement2.default)(AppWithNoVDOM, null), document.getElementById('root'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createElement;
	/**
	 * Created by apple on 2017/7/16.
	 */

	/**
	 *
	 * @param comp func or div/p/span/..
	 * @param props {}
	 * @param children
	 */
	function createElement(comp, props) {
	    var children = [];

	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }

	    for (var i = 0; i < args.length; i++) {
	        if (args[i] instanceof Array) {
	            children = children.concat(args[i]);
	        } else {
	            children.push(args[i]);
	        }
	    }

	    return {
	        nodeName: comp,
	        props: props || {},
	        children: children
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.renderVDOM = renderVDOM;
	exports.renderInBrowser = renderInBrowser;
	/**
	 * Created by apple on 2017/7/16.
	 */

	/**
	 *
	 * @param vnode
	 */
	function renderVDOM(vnode) {
	    if (typeof vnode == "string") {
	        return vnode;
	    } else if (typeof vnode.nodeName == "string") {
	        var result = {
	            nodeName: vnode.nodeName,
	            props: vnode.props,
	            children: []
	        };
	        for (var i = 0; i < vnode.children.length; i++) {
	            result.children.push(renderVDOM(vnode.children[i]));
	        }
	        return result;
	    } else if (typeof vnode.nodeName == "function") {
	        var func = vnode.nodeName;
	        var inst = new func(vnode.props);
	        var innerVnode = func.prototype.render.call(inst);
	        return renderVDOM(innerVnode);
	    }
	}

	function renderInBrowser(vnode, parent, comp, olddom) {
	    var dom = void 0;
	    if (typeof vnode == "string") {
	        dom = document.createTextNode(vnode);
	        comp && (comp.__rendered = dom);
	        parent.appendChild(dom);

	        if (olddom) {
	            olddom.parentNode.replaceChild(dom, olddom);
	        } else {
	            parent.appendChild(dom);
	        }
	    } else if (typeof vnode.nodeName == "string") {
	        dom = document.createElement(vnode.nodeName);

	        comp && (comp.__rendered = dom);
	        setAttrs(dom, vnode.props);

	        if (olddom) {
	            olddom.parentNode.replaceChild(dom, olddom);
	        } else {
	            parent.appendChild(dom);
	        }

	        for (var i = 0; i < vnode.children.length; i++) {
	            renderInBrowser(vnode.children[i], dom, null, null);
	        }
	    } else if (typeof vnode.nodeName == "function") {
	        var func = vnode.nodeName;
	        var inst = new func(vnode.props);

	        comp && (comp.__rendered = inst);

	        var innerVnode = func.prototype.render.call(inst);
	        renderInBrowser(innerVnode, parent, inst, olddom);
	    }
	}

	function setAttrs(dom, props) {
	    var allKeys = Object.keys(props);
	    allKeys.forEach(function (k) {
	        var v = props[k];

	        if (k == "className") {
	            dom.setAttribute("class", v);
	            return;
	        }

	        if (k == "style") {
	            if (typeof v == "string") {
	                dom.style.cssText = v;
	            }

	            if ((typeof v === "undefined" ? "undefined" : _typeof(v)) == "object") {
	                for (var i in v) {
	                    dom.style[i] = v[i];
	                }
	            }
	            return;
	        }

	        if (k[0] == "o" && k[1] == "n") {
	            var capture = k.indexOf("Capture") != -1;
	            dom.addEventListener(k.substring(2).toLowerCase(), v, capture);
	            return;
	        }

	        dom.setAttribute(k, v);
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apple on 2017/7/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _renderVDOM = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component(props) {
	        _classCallCheck(this, Component);

	        this.props = props;
	        this.state = {};
	    }

	    _createClass(Component, [{
	        key: "setState",
	        value: function setState(state) {
	            var _this = this;

	            this.state = state;

	            setTimeout(function () {
	                var vnode = _this.render();
	                var olddom = getDOM(_this);

	                var startTime = new Date().getTime();
	                (0, _renderVDOM.renderInBrowser)(vnode, olddom.parentNode, _this, olddom);
	                console.log("render duration:", new Date().getTime() - startTime);
	            }, 0);
	        }
	    }]);

	    return Component;
	}();

	exports.default = Component;


	function getDOM(comp) {
	    var rendered = comp.__rendered;
	    while (!rendered.nodeType) {
	        //判断对象是否是dom
	        rendered = rendered.__rendered;
	    }
	    return rendered;
	}

/***/ }
/******/ ]);
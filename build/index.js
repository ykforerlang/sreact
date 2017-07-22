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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	///Test app
	var App2 = function () {
	    function App2(props) {
	        _classCallCheck(this, App2);

	        this.props = props;
	        console.log('app2:', props);
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
	        console.log('app3:', props);
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

	var App4 = function () {
	    function App4(props) {
	        _classCallCheck(this, App4);

	        this.props = props;
	    }

	    _createClass(App4, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            return (0, _createElement2.default)(
	                'div',
	                null,
	                (0, _createElement2.default)(App3, { text: this.state.text }),
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this.setState({
	                                text: parseInt(Math.random() * 10000) + ""
	                            });
	                        } },
	                    'click me'
	                )
	            );
	        }
	    }]);

	    return App4;
	}();

	/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
	console.log("app1:", app1)


	var app2 = renderVDOM(createElement(App2))
	console.log("app2:", app2)

	var app3 = renderVDOM(<App3/>)
	console.log("app3:", app3)*/

	console.log("enter:");
	(0, _renderVDOM.renderInBrowser)((0, _createElement2.default)(App3, { text: 'app3' }), document.getElementById('root'));

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
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  return {
	    nodeName: comp,
	    props: props || {},
	    children: args || []
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

	function renderInBrowser(vnode, parent) {
	    var dom = void 0;
	    if (typeof vnode == "string") {
	        dom = document.createTextNode(vnode);
	        parent.appendChild(dom);
	    } else if (typeof vnode.nodeName == "string") {
	        dom = document.createElement(vnode.nodeName);
	        setAttrs(dom, vnode.props);
	        parent.appendChild(dom);

	        for (var i = 0; i < vnode.children.length; i++) {
	            renderInBrowser(vnode.children[i], dom);
	        }
	    } else if (typeof vnode.nodeName == "function") {
	        var func = vnode.nodeName;
	        var inst = new func(vnode.props);
	        inst.__parentDOM = parent;
	        var innerVnode = func.prototype.render.call(inst);
	        renderInBrowser(innerVnode, parent);
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
	            dom.addEventListener(k.substring(2).toLowerCase(), capture);
	            return;
	        }

	        dom.setAttribute(k, v);
	    });
	}

/***/ }
/******/ ]);
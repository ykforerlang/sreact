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

	var _Component4 = __webpack_require__(4);

	var _Component5 = _interopRequireDefault(_Component4);

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
	}(_Component5.default);

	var AppWithNoVDOM = function (_Component2) {
	    _inherits(AppWithNoVDOM, _Component2);

	    function AppWithNoVDOM(props) {
	        _classCallCheck(this, AppWithNoVDOM);

	        return _possibleConstructorReturn(this, (AppWithNoVDOM.__proto__ || Object.getPrototypeOf(AppWithNoVDOM)).call(this, props));
	    }

	    _createClass(AppWithNoVDOM, [{
	        key: 'testApp3',
	        value: function testApp3() {
	            var result = [];
	            var count = 10000;
	            for (var i = 0; i < count; i++) {
	                result.push((0, _createElement2.default)(App3, { text: i }));
	            }
	            return result;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return (0, _createElement2.default)(
	                'div',
	                {
	                    width: 100 },
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this4.setState({});
	                        } },
	                    'click me'
	                ),
	                this.testApp3()
	            );
	        }
	    }]);

	    return AppWithNoVDOM;
	}(_Component5.default);

	var AppWithLifecycle = function (_Component3) {
	    _inherits(AppWithLifecycle, _Component3);

	    function AppWithLifecycle(props) {
	        _classCallCheck(this, AppWithLifecycle);

	        var _this5 = _possibleConstructorReturn(this, (AppWithLifecycle.__proto__ || Object.getPrototypeOf(AppWithLifecycle)).call(this, props));

	        console.log("constructor");
	        return _this5;
	    }

	    _createClass(AppWithLifecycle, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log("componentWillMount");
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log("componentDidMount");
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            console.log("componentWillReceiveProps");
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            console.log("shouldComponentUpdate");
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            console.log("componentWillUpdate");
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            console.log("componentDidUpdate");
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("componentWillUnmount");
	        }
	    }, {
	        key: 'testApp3',
	        value: function testApp3() {
	            var result = [];
	            var count = 10;
	            for (var i = 0; i < count; i++) {
	                result.push((0, _createElement2.default)(App3, { text: i }));
	            }
	            return result;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            return (0, _createElement2.default)(
	                'div',
	                {
	                    width: 100 },
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this6.setState({});
	                        } },
	                    'click me'
	                ),
	                this.testApp3()
	            );
	        }
	    }]);

	    return AppWithLifecycle;
	}(_Component5.default);

	/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
	console.log("app1:", app1)


	var app2 = renderVDOM(createElement(App2))
	console.log("app2:", app2)

	var app3 = renderVDOM(<App3/>)
	console.log("app3:", app3)*/

	var startTime = new Date().getTime();
	console.log("enter:");
	(0, _renderVDOM.renderInBrowser)((0, _createElement2.default)(AppWithLifecycle, null), document.getElementById('root'));
	console.log("first duration:", new Date().getTime() - startTime);

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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by apple on 2017/7/16.
	                                                                                                                                                                                                                                                                               */


	exports.renderVDOM = renderVDOM;
	exports.renderInBrowser = renderInBrowser;

	var _index = __webpack_require__(3);

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
	    if (typeof vnode == "string" || typeof vnode == "number" || typeof vnode == "boolean") {
	        if (olddom && olddom.splitText) {
	            if (olddom.nodeValue !== vnode) {
	                olddom.nodeValue = vnode;
	            }
	        } else {
	            dom = document.createTextNode(vnode);
	            if (olddom) {
	                olddom.parentNode.replaceChild(dom, olddom);
	            } else {
	                parent.appendChild(dom);
	            }
	        }
	    } else if (typeof vnode.nodeName == "string") {
	        if (!olddom || olddom.nodeName.toLowerCase() != vnode.nodeName) {
	            createNewDom(vnode, parent, comp, olddom);
	        } else {
	            diffDOM(vnode, parent, comp, olddom);
	        }
	    } else if (typeof vnode.nodeName == "function") {
	        var func = vnode.nodeName;
	        var inst = new func(vnode.props);

	        comp && (comp.__rendered = inst);

	        func.prototype.componentWillMount && func.prototype.componentWillMount.call(this);

	        var innerVnode = func.prototype.render.call(inst);
	        renderInBrowser(innerVnode, parent, inst, olddom);

	        func.prototype.componentDidMount && func.prototype.componentDidMount.call(this);
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
	                dom.style.cssText = v; //IE
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

	function removeAttrs(dom, props) {
	    for (var k in props) {
	        if (k == "className") {
	            dom.removeAttribute("class");
	            continue;
	        }

	        if (k == "style") {
	            dom.style.cssText = ""; //IE
	            continue;
	        }

	        if (k[0] == "o" && k[1] == "n") {
	            var capture = k.indexOf("Capture") != -1;
	            var v = props[k];
	            dom.removeEventListener(k.substring(2).toLowerCase(), v, capture);
	            continue;
	        }

	        dom.removeAttribute(k);
	    }
	}

	/**
	 *  调用者保证newProps 与 oldProps 的keys是相同的
	 * @param dom
	 * @param newProps
	 * @param oldProps
	 */
	function diffAttrs(dom, newProps, oldProps) {
	    for (var k in newProps) {
	        var v = newProps[k];
	        var ov = oldProps[k];
	        if (v === ov) continue;

	        if (k == "className") {
	            dom.setAttribute("class", v);
	            continue;
	        }

	        if (k == "style") {
	            if (typeof v == "string") {
	                dom.style.cssText = v;
	            } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) == "object" && (typeof ov === "undefined" ? "undefined" : _typeof(ov)) == "object") {
	                for (var vk in v) {
	                    if (v[vk] !== ov[vk]) {
	                        dom.style[vk] = v[vk];
	                    }
	                }

	                for (var ovk in ov) {
	                    if (v[ovk] === undefined) {
	                        dom.style[ovk] = "";
	                    }
	                }
	            } else {
	                //typeof v == "object" && typeof ov == "string"
	                dom.style = {};
	                for (var _vk in v) {
	                    dom.style[_vk] = v[_vk];
	                }
	            }
	            continue;
	        }

	        if (k[0] == "o" && k[1] == "n") {
	            var capture = k.indexOf("Capture") != -1;
	            var eventKey = k.substring(2).toLowerCase();
	            dom.removeEventListener(eventKey, ov, capture);
	            dom.addEventListener(eventKey, v, capture);
	            continue;
	        }

	        dom.setAttribute(k, v);
	    }
	}

	function createNewDom(vnode, parent, comp, olddom) {
	    var dom = document.createElement(vnode.nodeName);

	    dom.__vnode = vnode;
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
	}

	function diffDOM(vnode, parent, comp, olddom) {
	    var _diffObject = (0, _index.diffObject)(vnode.props, olddom.__vnode.props),
	        onlyInLeft = _diffObject.onlyInLeft,
	        bothIn = _diffObject.bothIn,
	        onlyInRight = _diffObject.onlyInRight;

	    setAttrs(olddom, onlyInLeft);
	    removeAttrs(olddom, onlyInRight);
	    diffAttrs(olddom, bothIn.left, bothIn.right);

	    var olddomChild = olddom.firstChild;
	    for (var i = 0; i < vnode.children.length; i++) {
	        renderInBrowser(vnode.children[i], olddom, null, olddomChild);
	        olddomChild = olddomChild && olddomChild.nextSibling;
	    }

	    while (olddomChild) {
	        //删除多余的子节点
	        var next = olddomChild.nextSibling;
	        olddom.removeChild(olddomChild);
	        olddomChild = next;
	    }
	    olddom.__vnode = vnode;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.diffObject = diffObject;
	/**
	 * Created by apple on 2017/7/24.
	 */
	function diffObject(leftObj, rightObj) {
	    var onlyInLeft = {};
	    var bothLeft = {};
	    var bothRight = {};
	    var onlyInRight = {};

	    for (var key in leftObj) {
	        if (rightObj[key] === undefined) {
	            onlyInLeft[key] = leftObj[key];
	        } else {
	            bothLeft[key] = leftObj[key];
	            bothRight[key] = rightObj[key];
	        }
	    }

	    for (var _key in rightObj) {
	        if (leftObj[_key] === undefined) {
	            onlyInRight[_key] = rightObj[_key];
	        }
	    }

	    return {
	        onlyInRight: onlyInRight,
	        onlyInLeft: onlyInLeft,
	        bothIn: {
	            left: bothLeft,
	            right: bothRight
	        }
	    };
	}

/***/ },
/* 4 */
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
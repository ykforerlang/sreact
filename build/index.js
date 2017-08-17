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

	var _Component6 = __webpack_require__(4);

	var _Component7 = _interopRequireDefault(_Component6);

	var _TestUnmout = __webpack_require__(5);

	var _TestUnmout2 = _interopRequireDefault(_TestUnmout);

	var _TestUnmount = __webpack_require__(6);

	var _TestUnmount2 = _interopRequireDefault(_TestUnmount);

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
	}(_Component7.default);

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
	            for (var _i = 0; _i < count; _i++) {
	                result.push((0, _createElement2.default)(App3, { text: _i }));
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
	}(_Component7.default);

	var AppReuseComp = function (_Component3) {
	    _inherits(AppReuseComp, _Component3);

	    function AppReuseComp(props) {
	        _classCallCheck(this, AppReuseComp);

	        var _this5 = _possibleConstructorReturn(this, (AppReuseComp.__proto__ || Object.getPrototypeOf(AppReuseComp)).call(this, props));

	        _this5.state = {
	            obb: false
	        };
	        return _this5;
	    }

	    _createClass(AppReuseComp, [{
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            return (0, _createElement2.default)(
	                'div',
	                null,
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this6.setState({
	                                obb: !_this6.state.obb
	                            });
	                        } },
	                    'click me'
	                ),
	                this.state.obb ? [(0, _createElement2.default)(App2, null)] : [(0, _createElement2.default)(App2, null), (0, _createElement2.default)(App2, null)]
	            );
	        }
	    }]);

	    return AppReuseComp;
	}(_Component7.default);

	/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
	console.log("app1:", app1)


	var app2 = renderVDOM(createElement(App2))
	console.log("app2:", app2)

	var app3 = renderVDOM(<App3/>)
	console.log("app3:", app3)*/

	var SubApp = function (_Component4) {
	    _inherits(SubApp, _Component4);

	    function SubApp(props) {
	        _classCallCheck(this, SubApp);

	        var _this7 = _possibleConstructorReturn(this, (SubApp.__proto__ || Object.getPrototypeOf(SubApp)).call(this, props));

	        _this7.state = {
	            text: props.text
	        };
	        console.log("SubApp constructor");
	        return _this7;
	    }

	    _createClass(SubApp, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log("SubApp componentWillMount");
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log("SubApp componentDidMount");
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.state.text = nextProps.text;
	            console.log("SubApp componentWillReceiveProps");
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            console.log("SubApp shouldComponentUpdate", nextProps, nextState);
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            console.log("SubApp componentWillUpdate");
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            console.log("SubApp componentDidUpdate");
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("SubApp componentWillUnmount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log("SubApp render...");
	            return (0, _createElement2.default)(
	                'div',
	                null,
	                'SubApp'
	            );
	        }
	    }]);

	    return SubApp;
	}(_Component7.default);

	var AppWithLifecycle = function (_Component5) {
	    _inherits(AppWithLifecycle, _Component5);

	    function AppWithLifecycle(props) {
	        _classCallCheck(this, AppWithLifecycle);

	        var _this8 = _possibleConstructorReturn(this, (AppWithLifecycle.__proto__ || Object.getPrototypeOf(AppWithLifecycle)).call(this, props));

	        _this8.state = {
	            num: 0
	        };
	        console.log("AppWithLifecycle constructor");
	        return _this8;
	    }

	    _createClass(AppWithLifecycle, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log("AppWithLifecycle componentWillMount");
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log("AppWithLifecycle componentDidMount");
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            console.log("AppWithLifecycle componentWillReceiveProps");
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            console.log("AppWithLifecyclev shouldComponentUpdate", this.state.num);
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            console.log("AppWithLifecycle componentWillUpdate", this.state.num);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            console.log("AppWithLifecycle componentDidUpdate", this.state.num);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("AppWithLifecycle componentWillUnmount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this9 = this;

	            console.log("AppWithLifecycle render...");
	            return (0, _createElement2.default)(
	                'div',
	                {
	                    width: 100 },
	                (0, _createElement2.default)(
	                    'a',
	                    { onClick: function onClick(e) {
	                            _this9.setState({
	                                num: 10
	                            });
	                            console.log('AppWithLifecycle setState:', _this9.state.num);
	                        } },
	                    'click me'
	                ),
	                (0, _createElement2.default)(SubApp, { text: this.state.num })
	            );
	        }
	    }]);

	    return AppWithLifecycle;
	}(_Component7.default);

	function TT() {}
	var s = new Date().getTime();
	for (var i = 0; i < 100000; i++) {
	    new TT();
	}
	console.log("xx:", new Date().getTime() - s);

	var startTime = new Date().getTime();
	console.log("enter:");
	(0, _renderVDOM.render)((0, _createElement2.default)(_TestUnmount2.default, null), document.getElementById('root'));
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by apple on 2017/7/16.
	                                                                                                                                                                                                                                                                               */


	exports.renderVDOM = renderVDOM;
	exports.render = render;
	exports.renderInBrowser = renderInBrowser;

	var _index = __webpack_require__(3);

	var _Component = __webpack_require__(4);

	var _Component2 = _interopRequireDefault(_Component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	function render(vnode, parent) {
	    parent.__childDomOrComp = [];
	    renderInBrowser(vnode, parent, null, null, 0);
	}

	/**
	 * comp 为null的时候 就是根的时候
	 * @param vnode
	 * @param parent
	 * @param comp
	 * @param olddomOrComp
	 */
	function renderInBrowser(vnode, parent, comp, olddomOrComp, meOrder) {
	    console.log("vnode:", vnode, " parent:", parent, " comp:", comp, " olddomOrComp:", olddomOrComp, " meOrder:", meOrder);
	    var dom = void 0;
	    if (typeof vnode == "string" || typeof vnode == "number") {
	        if (olddomOrComp && olddomOrComp.splitText) {
	            if (olddomOrComp.nodeValue !== vnode) {
	                olddomOrComp.nodeValue = vnode;
	            }
	        } else {
	            if (olddomOrComp) {
	                recoveryComp(olddomOrComp);
	            }

	            dom = document.createTextNode(vnode);
	            meOrder >= 0 && (parent.__childDomOrComp[meOrder] = dom);
	            if (olddomOrComp) {
	                parent.replaceChild(dom, olddomOrComp);
	            } else {
	                parent.appendChild(dom);
	            }
	        }
	    } else if (typeof vnode.nodeName == "string") {
	        if (!olddomOrComp || olddomOrComp.nodeName != vnode.nodeName.toUpperCase()) {
	            createNewDom(vnode, parent, comp, olddomOrComp, meOrder);
	        } else {
	            diffDOM(vnode, parent, comp, olddomOrComp);
	        }
	    } else if (typeof vnode.nodeName == "function") {
	        var func = vnode.nodeName;
	        var inst = void 0;
	        if (olddomOrComp && olddomOrComp instanceof func) {
	            inst = olddomOrComp;
	            inst.componentWillReceiveProps && inst.componentWillReceiveProps(vnode.props);

	            var shoudUpdate = void 0;
	            if (inst.shouldComponentUpdate) {
	                shoudUpdate = inst.shouldComponentUpdate(vnode.props, olddomOrComp.state);
	            } else {
	                shoudUpdate = true;
	            }

	            if (shoudUpdate) {
	                inst.componentWillUpdate && inst.componentWillUpdate();
	            } else {
	                return; // do nothing just return
	            }

	            //inst = olddomOrComp
	        } else {
	            if (olddomOrComp) {
	                recoveryComp(olddomOrComp);
	            }

	            inst = new func(vnode.props);
	            inst.componentWillMount && inst.componentWillMount();
	            comp && (comp.__rendered = inst);

	            meOrder >= 0 && (parent.__childDomOrComp[meOrder] = inst);
	        }

	        var innerVnode = inst.render();
	        renderInBrowser(innerVnode, parent, inst, inst.__rendered, -1);

	        if (olddomOrComp && olddomOrComp instanceof func) {
	            inst.componentDidUpdate && inst.componentDidUpdate();
	        } else {
	            inst.componentDidMount && inst.componentDidMount();
	        }
	    }
	}

	function recoveryComp(comp) {
	    if (comp instanceof _Component2.default) {
	        comp.componentWillUnmount && comp.componentWillUnmount();
	        recoveryComp(comp.__rendered);
	    } else if (comp.__childDomOrComp) {
	        //dom like div
	        comp.parentNode.removeChild(comp);
	        comp.__childDomOrComp.forEach(function (element) {
	            recoveryComp(element);
	        });
	    } else {
	        //TextNode
	        comp.parentNode.removeChild(comp);
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

	            if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) == "object") {
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
	            } else if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) == "object" && (typeof ov === 'undefined' ? 'undefined' : _typeof(ov)) == "object") {
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

	function createNewDom(vnode, parent, comp, olddom, meOrder) {
	    if (olddom) {
	        recoveryComp(olddom);
	    }

	    var dom = document.createElement(vnode.nodeName);
	    meOrder >= 0 && (parent.__childDomOrComp[meOrder] = dom);

	    dom.__childDomOrComp = [];
	    dom.__vnode = vnode;
	    comp && (comp.__rendered = dom);
	    setAttrs(dom, vnode.props);

	    if (olddom) {
	        parent.replaceChild(dom, olddom);
	    } else {
	        parent.appendChild(dom);
	    }

	    for (var i = 0; i < vnode.children.length; i++) {
	        renderInBrowser(vnode.children[i], dom, null, null, i);
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

	    olddom.__childDomOrComp.slice(vnode.children.length).forEach(function (element) {
	        return recoveryComp(element);
	    });

	    var domOrComp = olddom.__childDomOrComp = olddom.__childDomOrComp.slice(0, vnode.children.length);
	    var olddomChild = olddom.firstChild;
	    for (var i = 0; i < vnode.children.length; i++) {
	        renderInBrowser(vnode.children[i], olddom, null, domOrComp[i], i);
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

	            console.log("setState:");
	            setTimeout(function () {
	                var shoudUpdate = void 0;
	                if (_this.shouldComponentUpdate) {
	                    shoudUpdate = _this.shouldComponentUpdate(_this.props, state);
	                } else {
	                    shoudUpdate = true;
	                }

	                if (shoudUpdate) {
	                    _this.componentWillUpdate && _this.componentWillUpdate();

	                    _this.state = state;

	                    var vnode = _this.render();
	                    var olddom = getDOM(_this);
	                    var startTime = new Date().getTime();
	                    (0, _renderVDOM.renderInBrowser)(vnode, olddom.parentNode, _this, _this.__rendered, -1);
	                    console.log("render duration:", new Date().getTime() - startTime);
	                    _this.componentDidUpdate && _this.componentDidUpdate();
	                }
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component4 = __webpack_require__(4);

	var _Component5 = _interopRequireDefault(_Component4);

	var _createElement = __webpack_require__(1);

	var _createElement2 = _interopRequireDefault(_createElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apple on 2017/8/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SubSubApp = function (_Component) {
	    _inherits(SubSubApp, _Component);

	    function SubSubApp() {
	        _classCallCheck(this, SubSubApp);

	        return _possibleConstructorReturn(this, (SubSubApp.__proto__ || Object.getPrototypeOf(SubSubApp)).apply(this, arguments));
	    }

	    _createClass(SubSubApp, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("SubSubApp componentWillUnmount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return (0, _createElement2.default)(
	                'div',
	                null,
	                'subsubapp'
	            );
	        }
	    }]);

	    return SubSubApp;
	}(_Component5.default);

	var SubApp = function (_Component2) {
	    _inherits(SubApp, _Component2);

	    function SubApp() {
	        _classCallCheck(this, SubApp);

	        return _possibleConstructorReturn(this, (SubApp.__proto__ || Object.getPrototypeOf(SubApp)).apply(this, arguments));
	    }

	    _createClass(SubApp, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("SubApp componentWillUnmount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return (0, _createElement2.default)(
	                'div',
	                null,
	                (0, _createElement2.default)(SubSubApp, null)
	            );
	        }
	    }]);

	    return SubApp;
	}(_Component5.default);

	var TestUnmout = function (_Component3) {
	    _inherits(TestUnmout, _Component3);

	    function TestUnmout(props) {
	        _classCallCheck(this, TestUnmout);

	        var _this3 = _possibleConstructorReturn(this, (TestUnmout.__proto__ || Object.getPrototypeOf(TestUnmout)).call(this, props));

	        _this3.state = {
	            odd: false
	        };
	        return _this3;
	    }

	    _createClass(TestUnmout, [{
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return (0, _createElement2.default)(
	                'div',
	                { onClick: function onClick(e) {
	                        return _this4.setState({
	                            odd: !_this4.state.odd
	                        });
	                    } },
	                this.state.odd ? [(0, _createElement2.default)(SubApp, null), (0, _createElement2.default)(SubApp, null)] : [(0, _createElement2.default)(SubApp, null)]
	            );
	        }
	    }]);

	    return TestUnmout;
	}(_Component5.default);

	exports.default = TestUnmout;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component4 = __webpack_require__(4);

	var _Component5 = _interopRequireDefault(_Component4);

	var _createElement = __webpack_require__(1);

	var _createElement2 = _interopRequireDefault(_createElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apple on 2017/8/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SubApp1 = function (_Component) {
	    _inherits(SubApp1, _Component);

	    function SubApp1() {
	        _classCallCheck(this, SubApp1);

	        return _possibleConstructorReturn(this, (SubApp1.__proto__ || Object.getPrototypeOf(SubApp1)).apply(this, arguments));
	    }

	    _createClass(SubApp1, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log("subapp1 will mount");
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("subapp1 will unmount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return (0, _createElement2.default)(
	                'div',
	                { id: 'app1' + parseInt(Math.random() * 10000) },
	                'app1'
	            );
	        }
	    }]);

	    return SubApp1;
	}(_Component5.default);

	var SubApp2 = function (_Component2) {
	    _inherits(SubApp2, _Component2);

	    function SubApp2() {
	        _classCallCheck(this, SubApp2);

	        return _possibleConstructorReturn(this, (SubApp2.__proto__ || Object.getPrototypeOf(SubApp2)).apply(this, arguments));
	    }

	    _createClass(SubApp2, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log("subapp2 will mount");
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("subapp2 will unmount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return (0, _createElement2.default)(
	                'div',
	                { id: 'app2' + parseInt(Math.random() * 10000) },
	                'app2'
	            );
	        }
	    }]);

	    return SubApp2;
	}(_Component5.default);

	var TestUnmout = function (_Component3) {
	    _inherits(TestUnmout, _Component3);

	    function TestUnmout(props) {
	        _classCallCheck(this, TestUnmout);

	        var _this3 = _possibleConstructorReturn(this, (TestUnmout.__proto__ || Object.getPrototypeOf(TestUnmout)).call(this, props));

	        _this3.state = {
	            odd: false
	        };
	        return _this3;
	    }

	    _createClass(TestUnmout, [{
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return (0, _createElement2.default)(
	                'div',
	                { id: 'father' + parseInt(Math.random() * 10000), onClick: function onClick(e) {
	                        return _this4.setState({
	                            odd: !_this4.state.odd
	                        });
	                    } },
	                this.state.odd ? [(0, _createElement2.default)(SubApp1, null)] : [(0, _createElement2.default)(SubApp2, null)]
	            );
	        }
	    }]);

	    return TestUnmout;
	}(_Component5.default);

	exports.default = TestUnmout;

/***/ }
/******/ ]);
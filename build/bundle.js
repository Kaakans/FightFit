/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
    'use strict';

    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple,
            child,
            simple,
            i,
            children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2;) {
            stack.push(arguments[i]);
        }if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) {
            if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--;) {
                stack.push(child[i]);
            } else {
                if (child === !0 || child === !1) child = null;
                if (simple = 'function' != typeof nodeName) if (null == child) child = '';else if ('number' == typeof child) child = String(child);else if ('string' != typeof child) simple = !1;
                if (simple && lastSimple) children[children.length - 1] += child;else if (children === EMPTY_CHILDREN) children = [child];else children.push(child);
                lastSimple = simple;
            }
        }var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) {
            obj[i] = props[i];
        }return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p,
            list = items;
        items = [];
        while (p = list.pop()) {
            if (p.__d) renderComponent(p);
        }
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) {
            if (void 0 === props[i]) props[i] = defaultProps[i];
        }return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ;else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == (typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
                if ('string' != typeof old) for (var i in old) {
                    if (!(i in value)) node.style[i] = '';
                }for (var i in value) {
                    node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
                }
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) {
                if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
            } else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (! --diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom,
            prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) {
                    out.appendChild(dom.firstChild);
                }if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild,
            props = out.__preactattr_ || (out.__preactattr_ = {}),
            vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j,
            c,
            vchild,
            child,
            originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i],
                props = _child.__preactattr_,
                key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child);else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) {
            if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        }while (min <= childrenLen) {
            if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component);else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) {
            if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        }for (name in attrs) {
            if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
        }
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst,
            list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--;) {
            if (list[i].constructor === Ctor) {
                inst.__b = list[i].__b;
                list.splice(i, 1);
                break;
            }
        }return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll);else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered,
                inst,
                cbase,
                props = component.props,
                state = component.state,
                context = component.context,
                previousProps = component.__p || props,
                previousState = component.__s || state,
                previousContext = component.__c || context,
                isUpdate = component.base,
                nextBase = component.__b,
                initialBase = isUpdate || nextBase,
                initialChildComponent = component._component,
                skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0;else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount,
                    base,
                    childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1);else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component,
                        t = component;
                    while (t = t.__u) {
                        (componentRef = t).base = base;
                    }base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component);else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) {
                component.__h.pop().call(component);
            }if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component,
            originalComponent = c,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) {
            isOwner = c.constructor === vnode.nodeName;
        }if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner);else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function setState(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function forceUpdate(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function render() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact;else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _navbar = __webpack_require__(7);

var _navbar2 = _interopRequireDefault(_navbar);

var _fightfit = __webpack_require__(5);

var _fightfit2 = _interopRequireDefault(_fightfit);

var _trainers = __webpack_require__(9);

var _trainers2 = _interopRequireDefault(_trainers);

var _sessions = __webpack_require__(8);

var _sessions2 = _interopRequireDefault(_sessions);

var _gym = __webpack_require__(6);

var _gym2 = _interopRequireDefault(_gym);

var _about = __webpack_require__(3);

var _about2 = _interopRequireDefault(_about);

var _contact = __webpack_require__(4);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return (0, _preact.h)(
				'div',
				{ className: 'app' },
				(0, _preact.h)(_navbar2.default, null),
				(0, _preact.h)('img', { src: 'src/images/boxing.jpg', 'class': 'fit-screen-image' }),
				(0, _preact.h)(_fightfit2.default, null),
				(0, _preact.h)(_trainers2.default, null),
				(0, _preact.h)(_sessions2.default, null),
				(0, _preact.h)(_gym2.default, null),
				(0, _preact.h)(
					'div',
					{ className: 'tiny-info-container' },
					(0, _preact.h)(_about2.default, null),
					(0, _preact.h)(_contact2.default, null)
				)
			);
		}
	}]);

	return App;
}(_preact.Component);

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _preact = __webpack_require__(0);

// this holds our rendered root element so we can re-render in response to HMR updates.
var root = void 0;

// Making our app's initialization a function means it's repeatable.
// This is the entry file, which kicks off all rendering.
//
// We import h() here because that's the function our JSX elements transpile to.
// That is to say - this:
//     <div a="b">foo</div>
// ... is converted to this:
//     h('div', { a: 'b' }, 'foo')

function init() {
	// HMR requires that this be a require()
	var App = __webpack_require__(1).default;

	// render the app and save the new root element:
	root = (0, _preact.render)((0, _preact.h)(App, null), document.body, root);
}

// initial render!
init();

// If this is webpack-dev-server, set up HMR :)
if (false) module.hot.accept('./src/components/app', init);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
	_inherits(About, _Component);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	}

	_createClass(About, [{
		key: "render",
		value: function render() {
			return (0, _preact.h)(
				"div",
				{ id: "about" },
				(0, _preact.h)(
					"h1",
					{ className: "secondary-title" },
					"Om oss"
				),
				(0, _preact.h)(
					"p",
					null,
					"Individanpassad cirkeltr\xE4ning f\xF6r hela familjen! Vi finns i Wir\xE9ns \xE5keris lokal bredvid bilpoolen. All tr\xE4ning sker p\xE5 egen risk. V\xE4lkomna!"
				)
			);
		}
	}]);

	return About;
}(_preact.Component);

exports.default = About;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: "render",
        value: function render() {
            return (0, _preact.h)(
                "div",
                { id: "contact" },
                (0, _preact.h)(
                    "h1",
                    { className: "secondary-title" },
                    "Kontakt"
                ),
                (0, _preact.h)(
                    "table",
                    null,
                    (0, _preact.h)(
                        "thead",
                        null,
                        (0, _preact.h)(
                            "tr",
                            null,
                            (0, _preact.h)("th", { width: "40" }),
                            (0, _preact.h)("th", null)
                        )
                    ),
                    (0, _preact.h)(
                        "tbody",
                        null,
                        (0, _preact.h)(
                            "tr",
                            null,
                            (0, _preact.h)(
                                "td",
                                null,
                                (0, _preact.h)("i", { className: "fa fa-facebook-official" })
                            ),
                            (0, _preact.h)(
                                "td",
                                null,
                                (0, _preact.h)(
                                    "a",
                                    { href: "http://facebook.com/fightfitkristinehamn" },
                                    "FightFit p\xE5 facebook"
                                )
                            )
                        ),
                        (0, _preact.h)(
                            "tr",
                            null,
                            (0, _preact.h)(
                                "td",
                                null,
                                (0, _preact.h)("i", { className: "fa fa-phone" })
                            ),
                            (0, _preact.h)(
                                "td",
                                null,
                                "076-046 69 94"
                            )
                        ),
                        (0, _preact.h)(
                            "tr",
                            null,
                            (0, _preact.h)(
                                "td",
                                null,
                                (0, _preact.h)("i", { className: "fa fa-map-marker" })
                            ),
                            (0, _preact.h)(
                                "td",
                                null,
                                "Tredje Industrigatan 2, Kristinehamn"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
}(_preact.Component);

exports.default = Contact;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fightfit = function (_Component) {
    _inherits(Fightfit, _Component);

    function Fightfit() {
        _classCallCheck(this, Fightfit);

        return _possibleConstructorReturn(this, (Fightfit.__proto__ || Object.getPrototypeOf(Fightfit)).apply(this, arguments));
    }

    _createClass(Fightfit, [{
        key: "render",
        value: function render() {
            return (0, _preact.h)(
                "div",
                { id: "fightfit" },
                (0, _preact.h)(
                    "h1",
                    { className: "secondary-title" },
                    "FightFit"
                ),
                (0, _preact.h)(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut risus accumsan, pretium justo in, blandit diam. Donec porta enim at sapien euismod pretium. In fermentum, ante non pharetra hendrerit, massa sapien fermentum neque, sit amet efficitur dui magna eget sapien. Nam eget finibus tortor, et ornare orci. Quisque ut fermentum nunc. Pellentesque tristique lectus sed fringilla convallis. Nullam porta orci blandit, cursus erat et, rhoncus lectus. Phasellus sit amet massa tincidunt, tincidunt dolor a, aliquet felis. Mauris nec leo erat. Vivamus fermentum diam a metus pellentesque, vitae interdum justo tempus. Vivamus quis metus in nisi aliquam condimentum. Aenean congue nulla ornare nisi aliquam, sed aliquet risus aliquet. Suspendisse bibendum arcu eget condimentum ultrices. Donec ante massa, tempus at fringilla et, mattis ac arcu. Morbi faucibus luctus augue, sed imperdiet lectus finibus a."
                ),
                (0, _preact.h)(
                    "p",
                    null,
                    "Praesent vitae euismod tortor. Nullam venenatis dolor ipsum, vel mollis odio rhoncus in. Donec tempor a dolor ac aliquam. Phasellus tempor convallis nibh quis porttitor. Mauris nisi elit, fringilla non feugiat vel, imperdiet at urna. Sed sodales at dui vitae porttitor. Integer placerat sagittis magna, ac varius lectus pretium vitae. Donec semper, purus eget malesuada condimentum, orci sapien ullamcorper elit, quis bibendum sapien sem eu tortor. Nullam nisl diam, bibendum id diam vulputate, iaculis tristique ex. Nunc malesuada, turpis quis hendrerit semper, magna nulla feugiat nisl, a luctus dolor nibh vel nisl. Praesent nec mollis diam. Suspendisse dignissim faucibus nulla eu feugiat. Pellentesque quis turpis id dolor consectetur malesuada."
                ),
                (0, _preact.h)(
                    "p",
                    null,
                    "Nunc ac laoreet velit. Donec luctus volutpat risus non fermentum. Fusce blandit nec purus sed tristique. Curabitur venenatis hendrerit massa sit amet lacinia. Cras accumsan est eu nisi laoreet mollis. Etiam blandit tellus nisl, sit amet tincidunt nisi imperdiet a. Cras a commodo sapien, eget vulputate arcu. Nullam non tempus libero. Suspendisse nec varius ligula. Maecenas non felis et dui pharetra facilisis at ac tellus. Suspendisse vel velit at massa posuere condimentum. Nullam a ex nec sapien placerat varius. Proin nec enim nec sapien sagittis blandit non eget mi. Suspendisse feugiat lectus lectus, ut vestibulum ante sollicitudin in."
                )
            );
        }
    }]);

    return Fightfit;
}(_preact.Component);

exports.default = Fightfit;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gym = function (_Component) {
	_inherits(Gym, _Component);

	function Gym() {
		_classCallCheck(this, Gym);

		return _possibleConstructorReturn(this, (Gym.__proto__ || Object.getPrototypeOf(Gym)).apply(this, arguments));
	}

	_createClass(Gym, [{
		key: "render",
		value: function render() {
			return (0, _preact.h)(
				"div",
				{ id: "gym" },
				(0, _preact.h)(
					"h1",
					{ className: "secondary-title" },
					"Athletics Gym"
				),
				(0, _preact.h)(
					"p",
					null,
					"Suspendisse tristique sit amet leo et consectetur. Integer ut elit nec augue lacinia viverra vel vitae ligula. Nam ullamcorper fermentum lorem sed ultrices. Praesent at arcu hendrerit, tincidunt eros id, posuere nisi. Suspendisse rutrum erat et aliquam dictum. In hac habitasse platea dictumst. Aenean eget iaculis nunc. Sed in faucibus ligula. Proin ac dolor suscipit, dignissim est in, dapibus ligula. Praesent libero neque, fermentum a vulputate at, pellentesque et libero. Fusce blandit, turpis a finibus eleifend, nulla felis ultrices ligula, in porttitor arcu nulla ut ipsum. Praesent auctor ex vitae massa lobortis, at maximus augue varius. Aliquam tincidunt, magna ornare sodales vehicula, sem purus interdum risus, at bibendum massa est a lectus."
				)
			);
		}
	}]);

	return Gym;
}(_preact.Component);

exports.default = Gym;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
    _inherits(Navbar, _Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return (0, _preact.h)(
                "nav",
                { role: "navigation", id: "nav" },
                (0, _preact.h)("input", { className: "trigger", type: "checkbox", id: "mainNavButton" }),
                (0, _preact.h)(
                    "label",
                    { "for": "mainNavButton", onclick: true },
                    (0, _preact.h)("img", { src: "src/images/favicon.png", className: "icon" })
                ),
                (0, _preact.h)(
                    "ul",
                    null,
                    (0, _preact.h)(
                        "li",
                        { className: "nav-filler" },
                        (0, _preact.h)("img", { src: "src/images/favicon.png", className: "icon" })
                    ),
                    (0, _preact.h)(
                        "li",
                        null,
                        (0, _preact.h)(
                            "a",
                            { href: "#fightfit" },
                            "FightFit"
                        )
                    ),
                    (0, _preact.h)(
                        "li",
                        null,
                        (0, _preact.h)(
                            "a",
                            { href: "#trainers" },
                            "Instrukt\xF6rer"
                        )
                    ),
                    (0, _preact.h)(
                        "li",
                        null,
                        (0, _preact.h)(
                            "a",
                            { href: "#sessions" },
                            "Pass"
                        )
                    ),
                    (0, _preact.h)(
                        "li",
                        null,
                        (0, _preact.h)(
                            "a",
                            { href: "#gym" },
                            "Gym"
                        )
                    ),
                    (0, _preact.h)(
                        "li",
                        null,
                        (0, _preact.h)(
                            "a",
                            { href: "#about" },
                            "Om oss"
                        )
                    ),
                    (0, _preact.h)(
                        "li",
                        null,
                        (0, _preact.h)(
                            "a",
                            { href: "#contact" },
                            "Kontakt"
                        )
                    ),
                    (0, _preact.h)("li", { className: "nav-filler-2" })
                )
            );
        }
    }]);

    return Navbar;
}(_preact.Component);

exports.default = Navbar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sessions = function (_Component) {
    _inherits(Sessions, _Component);

    function Sessions() {
        _classCallCheck(this, Sessions);

        return _possibleConstructorReturn(this, (Sessions.__proto__ || Object.getPrototypeOf(Sessions)).apply(this, arguments));
    }

    _createClass(Sessions, [{
        key: 'sessions',
        value: function sessions() {
            return [{ day: 'Måndag', sessions: [{ time: '16.15 - 17.00', type: 'FightFit' }] }, {
                day: 'Tisdag',
                sessions: [{ time: '16.15 - 17.00', type: 'FightFit' }, { time: '17.15 - 18.00', type: 'Reps' }, { time: '18.15 - 19.15', type: 'Kick and  box' }]
            }, { day: 'Onsdag', sessions: [{ time: '16.15 - 17.00', type: 'FightFit' }] }, {
                day: 'Torsdag',
                sessions: [{ time: '17.15 - 18.00', type: 'FightFit' }, { time: '18.15 - 19.00', type: 'Barbell Hell' }]
            }, { day: 'Fredag', sessions: [{ time: '16.15 - 17.00', type: 'FightFit' }] }, { day: 'Lördag', sessions: [{ time: '10.00 - 11.00', type: 'Kick and  box' }] }, { day: 'Söndag', sessions: [{ time: '10.00 - 10.45', type: 'Tabata' }] }];
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _preact.h)(
                'div',
                { id: 'sessions' },
                (0, _preact.h)(
                    'h1',
                    { className: 'secondary-title' },
                    'Pass'
                ),
                (0, _preact.h)(
                    'div',
                    { className: 'flex-container' },
                    this.renderSchedules()
                )
            );
        }
    }, {
        key: 'renderSchedules',
        value: function renderSchedules() {
            var _this2 = this;

            return this.sessions().map(function (x) {
                return _this2.renderDay(x);
            });
        }
    }, {
        key: 'renderDay',
        value: function renderDay(data) {
            var _this3 = this;

            return (0, _preact.h)(
                'div',
                { className: 'session' },
                (0, _preact.h)(
                    'span',
                    { className: 'sub-title' },
                    data.day
                ),
                (0, _preact.h)(
                    'table',
                    null,
                    (0, _preact.h)(
                        'tbody',
                        null,
                        data.sessions.map(function (x) {
                            return _this3.renderSession(x);
                        })
                    )
                )
            );
        }
    }, {
        key: 'renderSession',
        value: function renderSession(session) {
            return (0, _preact.h)(
                'tr',
                null,
                (0, _preact.h)(
                    'td',
                    null,
                    (0, _preact.h)(
                        'span',
                        { style: 'margin-left: -3px;' },
                        session.time
                    )
                ),
                (0, _preact.h)(
                    'td',
                    null,
                    (0, _preact.h)(
                        'span',
                        { style: 'margin-left: -3px; padding-left: 5px;' },
                        session.type
                    )
                )
            );
        }
    }]);

    return Sessions;
}(_preact.Component);

exports.default = Sessions;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trainers = function (_Component) {
	_inherits(Trainers, _Component);

	function Trainers() {
		_classCallCheck(this, Trainers);

		return _possibleConstructorReturn(this, (Trainers.__proto__ || Object.getPrototypeOf(Trainers)).apply(this, arguments));
	}

	_createClass(Trainers, [{
		key: "render",
		value: function render() {
			return (0, _preact.h)(
				"div",
				{ id: "trainers" },
				(0, _preact.h)(
					"h1",
					{ className: "secondary-title inline-block" },
					"Instrukt\xF6rer"
				),
				(0, _preact.h)(
					"div",
					{ className: "tab-container rounded" },
					(0, _preact.h)(
						"div",
						{ className: "tabs" },
						(0, _preact.h)(
							"div",
							{ "class": "tab-3" },
							(0, _preact.h)(
								"label",
								{ "for": "tab3-1", className: "sub-title" },
								"Morgan"
							),
							" ",
							(0, _preact.h)("input", { checked: true, id: "tab3-1", name: "tabs-two", type: "radio" }),
							(0, _preact.h)(
								"div",
								null,
								(0, _preact.h)("img", { src: "src/images/morgan_profile.jpg", alt: "Morgan", "class": "profile-picture" }),
								(0, _preact.h)(
									"h4",
									null,
									"Pass, gym, r\xE5dgivning"
								),
								(0, _preact.h)(
									"p",
									null,
									"FightFit, Reps, Barbell hell, Core"
								),
								(0, _preact.h)(
									"p",
									null,
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								)
							)
						),
						(0, _preact.h)(
							"div",
							{ "class": "tab-3" },
							(0, _preact.h)(
								"label",
								{ "for": "tab3-2", className: "sub-title" },
								"Malin"
							),
							" ",
							(0, _preact.h)("input", { id: "tab3-2", name: "tabs-two", type: "radio" }),
							(0, _preact.h)(
								"div",
								null,
								(0, _preact.h)("img", { src: "src/images/malin_profile.jpg", alt: "Morgan", "class": "profile-picture" }),
								(0, _preact.h)(
									"h4",
									null,
									"Pass, gym, r\xE5dgivning"
								),
								(0, _preact.h)(
									"p",
									null,
									"FightFit, Core"
								),
								(0, _preact.h)(
									"p",
									null,
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								)
							)
						),
						(0, _preact.h)(
							"div",
							{ "class": "tab-3" },
							(0, _preact.h)(
								"label",
								{ "for": "tab3-3", className: "sub-title" },
								"Thord"
							),
							" ",
							(0, _preact.h)("input", { id: "tab3-3", name: "tabs-two", type: "radio" }),
							(0, _preact.h)(
								"div",
								null,
								(0, _preact.h)("img", { src: "src/images/default_profile.jpg", alt: "Morgan", "class": "profile-picture" }),
								(0, _preact.h)(
									"h4",
									null,
									"Pass"
								),
								(0, _preact.h)(
									"p",
									null,
									"FightFit"
								),
								(0, _preact.h)(
									"p",
									null,
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Trainers;
}(_preact.Component);

exports.default = Trainers;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("view"));
	else if(typeof define === 'function' && define.amd)
		define(["view"], factory);
	else if(typeof exports === 'object')
		exports["view"] = factory(require("view"));
	else
		root["view"] = factory(root["view"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
exports.Invoker = {
    get: function get(V) {
        return Reflect.construct(V, []);
    }
};
function setInvoker(i) {
    exports.Invoker = i;
}
exports.setInvoker = setInvoker;
var Events;
(function (Events) {
    Events.BeforeRender = "before:render";
    Events.Render = "render";
    Events.BeforeSetElement = "before:set:element";
    Events.SetElement = "set:element";
    Events.BeforeDelegateEvents = "before:delegate:events";
    Events.DelegateEvents = "delegate:events";
    Events.BeforeUndelegateEvents = "before:undelegate:events";
    Events.UndelegateEvents = "undelegate:events";
    Events.BeforeDestroy = "before:destroy";
    Events.Destroy = "destroy";
})(Events = exports.Events || (exports.Events = {}));
var ModelEvents;
(function (ModelEvents) {
    ModelEvents.Add = "add";
    ModelEvents.Remove = "remove";
    ModelEvents.Clear = "clear";
    ModelEvents.Sort = "sort";
    ModelEvents.Change = "change";
    ModelEvents.Reset = "reset";
})(ModelEvents = exports.ModelEvents || (exports.ModelEvents = {}));
var MetaKeys;
(function (MetaKeys) {
    MetaKeys.Attributes = Symbol("attributes");
})(MetaKeys = exports.MetaKeys || (exports.MetaKeys = {}));
function isDestroyable(a) {
    return a && view_1.isFunction(a.destroy);
}
exports.isDestroyable = isDestroyable;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Mixins = __webpack_require__(3);
// Typescript typesystem quirk.

var EventEmitterBase = function EventEmitterBase() {
  _classCallCheck(this, EventEmitterBase);
};

exports.EventEmitterBase = EventEmitterBase;

var EventEmitter = function (_Mixins$EventEmitter) {
  _inherits(EventEmitter, _Mixins$EventEmitter);

  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    return _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).apply(this, arguments));
  }

  return EventEmitter;
}(Mixins.EventEmitter(EventEmitterBase));

exports.EventEmitter = EventEmitter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(12));
__export(__webpack_require__(16));
__export(__webpack_require__(13));
__export(__webpack_require__(5));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function equal(a, b) {
    return eq(a, b, [], []);
}
exports.equal = equal;
var _has = Object.prototype.hasOwnProperty;
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    //if (a instanceof _) a = a._wrapped;
    //if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
        // Strings, numbers, dates, and booleans are compared by value.
        case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return a == String(b);
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
            // other numeric values.
            return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
        case '[object Date]':
        case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a == +b;
        // RegExps are compared by their source patterns and flags.
        case '[object RegExp]':
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) != 'object' || (typeof b === "undefined" ? "undefined" : _typeof(b)) != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor,
        bCtor = b.constructor;
    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor)) {
        return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0,
        result = true;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
        // Compare array lengths to determine if a deep comparison is necessary.
        size = a.length;
        result = size === b.length;
        if (result) {
            // Deep compare the contents, ignoring non-numeric properties.
            while (size--) {
                if (!(result = eq(a[size], b[size], aStack, bStack))) break;
            }
        }
    } else {
        // Deep compare objects.
        for (var key in a) {
            if (_has.call(a, key)) {
                // Count the expected number of properties.
                size++;
                // Deep compare each member.
                if (!(result = _has.call(b, key) && eq(a[key], b[key], aStack, bStack))) break;
            }
        }
        // Ensure that both objects contain the same number of properties.
        if (result) {
            for (key in b) {
                if (_has.call(b, key) && !size--) break;
            }
            result = !size;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
}
;
function isPropertyKey(a) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) === 'symbol' || typeof a === 'number' || typeof a === 'string';
}
exports.isPropertyKey = isPropertyKey;
/**
 * Get value from HTML Elemement
 *
 * @export
 * @param {HTMLElement} el
 * @param {boolean} [coerce=false]
 * @returns
 */
function getValue(el) {
    var coerce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var tagName = el.tagName.toLocaleLowerCase(),
        type = el.type,
        isInput = tagName,
        isCheckbox = /checkbox/.test(type),
        isSelect = /select/.test(el.nodeName);
    if (isCheckbox) {
        Boolean(el.checked);
    } else if (isSelect) {
        if (!coerce) return el.value || '';
        var option = el.options[el.selectedIndex];
        return { value: option.value, text: option.innerText };
    } else if (isInput) {
        var input = el;
        var _type = input.type;
        switch (_type) {
            case "number":
                return coerce ? 'valueAsNumber' in input ? input.valueAsNumber : parseInt(input.value) : input.value;
            case "date":
                return coerce ? 'valueAsDate' in input ? input.valueAsDate : new Date(input.value) : input.value;
            default:
                return input.value;
        }
    }
    return el.textContent;
}
exports.getValue = getValue;
/**
 * Set value on an HTMLElmenet
 *
 * @export
 * @param {HTMLElement} el
 * @param {*} [value]
 */
function setValue(el, value) {
    var tagName = el.tagName.toLocaleLowerCase(),
        type = el.type,
        isInput = tagName,
        isCheckbox = /checkbox/.test(type),
        isRadio = /radio/.test(type),
        isRadioOrCheckbox = isRadio || isCheckbox,
        isSelect = /select/.test(el.nodeName);
    if (value == null) {
        value = "";
    }
    if (isRadioOrCheckbox) {
        if (isRadio) {
            if (String(value) === String(el.value)) {
                el.checked = true;
            }
        } else {
            el.checked = value;
        }
    } else if (String(value) !== getValue(el)) {
        if (isInput || isSelect) {
            el.value = value;
        } else {
            el.innerHTML = value;
        }
    }
}
exports.setValue = setValue;
var _slice = Array.prototype.slice;
function slice(a, index, end) {
    return _slice.call(a, index, end);
}
exports.slice = slice;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
function removeFromListener(listeners, fn, ctx) {
    for (var i = 0; i < listeners.length; i++) {
        var e = listeners[i];
        if (fn == null && ctx != null && e.ctx === ctx || fn != null && ctx == null && e.handler === fn || fn != null && ctx != null && e.handler === fn && e.ctx === ctx) {
            listeners.splice(i, 1);
        }
    }
    return listeners;
}
function isEventEmitter(a) {
    return a && (a instanceof EventEmitter || view_1.isFunction(a.on) && view_1.isFunction(a.once) && view_1.isFunction(a.off) && view_1.isFunction(a.trigger));
}
exports.isEventEmitter = isEventEmitter;
/**
 * Makes target, Base, an EventEmitter
 *
 * @export
 * @param {T} Base
 * @template
 * @returns {(Constructor<IEventEmitter> & T)}
 */
function EventEmitter(Base) {
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "on",
            value: function on(event, fn, ctx) {
                var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                var events = (this._listeners || (this._listeners = new Map())).get(event) || [];
                events.push({
                    name: event,
                    once: once,
                    handler: fn,
                    ctx: ctx || this
                });
                if (!this._listeners.has(event)) this._listeners.set(event, events);
                return this;
            }
        }, {
            key: "once",
            value: function once(event, fn, ctx) {
                return this.on(event, fn, ctx, true);
            }
        }, {
            key: "off",
            value: function off(eventName, fn, ctx) {
                this._listeners = this._listeners || new Map();
                if (eventName == null && ctx == null) {
                    this._listeners = new Map();
                } else if (this._listeners.has(eventName)) {
                    var events = this._listeners.get(eventName);
                    if (fn == null && ctx == null) {
                        this._listeners.set(eventName, []);
                    } else {
                        removeFromListener(events, fn, ctx);
                    }
                } else {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = this._listeners.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var en = _step.value;

                            removeFromListener(en, fn, ctx);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                return this;
            }
        }, {
            key: "trigger",
            value: function trigger(eventName) {
                this._listeners = this._listeners || new Map();
                var events = (this._listeners.get(eventName) || []).concat(this._listeners.get("*") || []);
                var event = void 0,
                    a = void 0,
                    index = void 0;
                var calls = [];
                var alls = [];

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                for (var i = 0, ii = events.length; i < ii; i++) {
                    event = events[i];
                    a = args;
                    if (events[i].name === '*') {
                        alls.push(events[i]);
                    } else {
                        calls.push(events[i]);
                    }
                    if (events[i].once === true) {
                        index = this._listeners.get(events[i].name).indexOf(events[i]);
                        this._listeners.get(events[i].name).splice(index, 1);
                    }
                }
                if (alls.length) {
                    var _a = [eventName].concat(args);
                    this._executeListener(alls, _a);
                }
                if (calls.length) this._executeListener(calls, args);else if (eventName === 'error' && EventEmitter.throwOnError) {
                    if (args.length) {
                        var _a2 = args[0];
                        if (!(_a2 instanceof Error)) {
                            _a2 = new Error(String(_a2));
                        }
                        EventEmitter.throwError(_a2);
                    }
                }
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                if (typeof Base.prototype.destroy === 'function') Base.prototype.destroy.call(this);
                this.off();
            }
        }, {
            key: "_executeListener",
            value: function _executeListener(func, args) {
                EventEmitter.executeListenerFunction(func, args);
            }
        }, {
            key: "listeners",
            get: function get() {
                return this._listeners;
            }
        }]);

        return _class;
    }(Base);
}
exports.EventEmitter = EventEmitter;
(function (EventEmitter) {
    /**
     * If true EventEmitter will call throwError, when when no listeners for the "error" event
     */
    EventEmitter.throwOnError = false;
    function throwError(error) {
        throw error;
    }
    EventEmitter.throwError = throwError;
    function executeListenerFunction(func, args) {
        view_1.callFunc(func, args);
    }
    EventEmitter.executeListenerFunction = executeListenerFunction;
})(EventEmitter = exports.EventEmitter || (exports.EventEmitter = {}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(4);
var types_1 = __webpack_require__(1);
var event_emitter_1 = __webpack_require__(2);

var Model = function (_event_emitter_1$Even) {
    _inherits(Model, _event_emitter_1$Even);

    function Model() {
        _classCallCheck(this, Model);

        var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

        _this[types_1.MetaKeys.Attributes] = new Map();
        return _this;
    }

    _createClass(Model, [{
        key: "set",
        value: function set(key, value) {
            var old = this.get(key);
            if (utils_1.equal(old, value)) {
                return this;
            }
            this[types_1.MetaKeys.Attributes].set(key, value);
            this.trigger("change:" + key, old, value);
            this.trigger('change', _defineProperty({}, key, value));
        }
    }, {
        key: "get",
        value: function get(key) {
            return this[types_1.MetaKeys.Attributes].get(key);
        }
    }, {
        key: "has",
        value: function has(key) {
            return this[types_1.MetaKeys.Attributes].has(key);
        }
    }, {
        key: "unset",
        value: function unset(key) {
            if (this.has(key)) {
                var val = this.get(key);
                this[types_1.MetaKeys.Attributes].delete(key);
                this.trigger("remove:" + key, val);
                this.trigger('remove', key, val);
                return val;
            }
            return void 0;
        }
    }, {
        key: "clear",
        value: function clear() {
            this[types_1.MetaKeys.Attributes] = new Map();
            this.trigger('clear');
            return this;
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var out = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this[types_1.MetaKeys.Attributes].entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    out[entry[0]] = entry[1];
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return out;
        }
    }]);

    return Model;
}(event_emitter_1.EventEmitter);

exports.Model = Model;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    Deprecated Decorator v0.1
    https://github.com/vilic/deprecated-decorator
*/

/** @internal */

exports.options = {
    getWarner: undefined
};
function createWarner(type, name, alternative, version, url) {
    var warnedPositions = {};
    return function () {
        var stack = new Error().stack || '';
        var at = (stack.match(/(?:\s+at\s.+){2}\s+at\s(.+)/) || [undefined, ''])[1];
        if (/\)$/.test(at)) {
            at = at.match(/[^(]+(?=\)$)/)[0];
        } else {
            at = at.trim();
        }
        if (at in warnedPositions) {
            return;
        }
        warnedPositions[at] = true;
        var message;
        switch (type) {
            case 'class':
                message = 'Class';
                break;
            case 'property':
                message = 'Property';
                break;
            case 'method':
                message = 'Method';
                break;
            case 'function':
                message = 'Function';
                break;
        }
        message += " `" + name + "` has been deprecated";
        if (version) {
            message += " since version " + version;
        }
        if (alternative) {
            message += ", use `" + alternative + "` instead";
        }
        message += '.';
        if (at) {
            message += "\n    at " + at;
        }
        if (url) {
            message += "\nCheck out " + url + " for more information.";
        }
        console.warn(message);
    };
}
function decorateProperty(type, name, descriptor, alternative, version, url) {
    var warner = (exports.options.getWarner || createWarner)(type, name, alternative, version, url);
    descriptor = descriptor || {
        writable: true,
        enumerable: false,
        configurable: true
    };
    var deprecatedDescriptor = {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable
    };
    if (descriptor.get || descriptor.set) {
        if (descriptor.get) {
            deprecatedDescriptor.get = function () {
                warner();
                return descriptor.get.call(this);
            };
        }
        if (descriptor.set) {
            deprecatedDescriptor.set = function (value) {
                warner();
                return descriptor.set.call(this, value);
            };
        }
    } else {
        var propertyValue_1 = descriptor.value;
        deprecatedDescriptor.get = function () {
            warner();
            return propertyValue_1;
        };
        if (descriptor.writable) {
            deprecatedDescriptor.set = function (value) {
                warner();
                propertyValue_1 = value;
            };
        }
    }
    return deprecatedDescriptor;
}
function decorateFunction(type, target, alternative, version, url) {
    var name = target.name;
    var warner = (exports.options.getWarner || createWarner)(type, name, alternative, version, url);
    var fn = function fn() {
        warner();
        return target.apply(this, arguments);
    };
    for (var _i = 0, _a = Object.getOwnPropertyNames(target); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyName);
        if (descriptor.writable) {
            fn[propertyName] = target[propertyName];
        } else if (descriptor.configurable) {
            Object.defineProperty(fn, propertyName, descriptor);
        }
    }
    return fn;
}
function deprecated() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var fn = args[args.length - 1];
    if (typeof fn === 'function') {
        fn = args.pop();
    } else {
        fn = undefined;
    }
    var options = args[0];
    var alternative;
    var version;
    var url;
    if (typeof options === 'string') {
        alternative = options;
        version = args[1];
        url = args[2];
    } else if (options) {
        alternative = options.alternative, version = options.version, url = options.url, options;
    }
    if (fn) {
        return decorateFunction('function', fn, alternative, version, url);
    }
    return function (target, name, descriptor) {
        if (typeof name === 'string') {
            var type = descriptor && typeof descriptor.value === 'function' ? 'method' : 'property';
            return decorateProperty(type, name, descriptor, alternative, version, url);
        } else if (typeof target === 'function') {
            var constructor = decorateFunction('class', target, alternative, version, url);
            var className = target.name;
            for (var _i = 0, _a = Object.getOwnPropertyNames(constructor); _i < _a.length; _i++) {
                var propertyName = _a[_i];
                var descriptor_1 = Object.getOwnPropertyDescriptor(constructor, propertyName);
                descriptor_1 = decorateProperty('class', className, descriptor_1, alternative, version, url);
                if (descriptor_1.writable) {
                    constructor[propertyName] = target[propertyName];
                } else if (descriptor_1.configurable) {
                    Object.defineProperty(constructor, propertyName, descriptor_1);
                }
            }
            return constructor;
        }
    };
}
exports.deprecated = deprecated;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deprecated;
//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(1);
var event_emitter_1 = __webpack_require__(2);
var deprecated_decorator_1 = __webpack_require__(7);

var ArrayCollection = function (_event_emitter_1$Even) {
    _inherits(ArrayCollection, _event_emitter_1$Even);

    function ArrayCollection() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, ArrayCollection);

        var _this = _possibleConstructorReturn(this, (ArrayCollection.__proto__ || Object.getPrototypeOf(ArrayCollection)).call(this));

        _this.a = a;
        return _this;
    }
    /**
     * The length of the array
     *
     * @readonly
     * @type {number}
     * @memberof ArrayCollection
     */


    _createClass(ArrayCollection, [{
        key: "item",

        /**
         * Get item at index
         *
         * @param {number} index
         * @returns {(T | undefined)}
         *
         * @memberof ArrayCollection
         */
        value: function item(index) {
            if (index >= this.a.length) return undefined;
            return this.a[index];
        }
        /**
         * Push an item and optionally trigger a change event
         *
         * @param {T} m
         * @param {boolean} [trigger=true]
         *
         * @memberof ArrayCollection
         */

    }, {
        key: "push",
        value: function push(m) {
            var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.a.push(m);
            if (trigger) this.trigger(types_1.ModelEvents.Add, m, this.a.length - 1);
        }
        /**
         * Pop a item from the array and optinally trigger a change event
         *
         * @param {boolean} [trigger=true]
         * @returns {(T | undefined)}
         *
         * @memberof ArrayCollection
         */

    }, {
        key: "pop",
        value: function pop() {
            var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            var m = this.a.pop();
            if (trigger) this.trigger(types_1.ModelEvents.Remove, m, this.a.length);
            return m;
        }
    }, {
        key: "insert",
        value: function insert(m, index) {
            if (index >= this.length) return;
            this.a.splice(index, 0, m);
            this.trigger(types_1.ModelEvents.Add, m, index);
        }
    }, {
        key: "indexOf",
        value: function indexOf(m) {
            return this.a.indexOf(m);
        }
    }, {
        key: "remove",
        value: function remove(index) {
            var m = this.item(index);
            if (!m) return undefined;
            this.a.splice(index, 1);
            this.trigger(types_1.ModelEvents.Remove, m, index);
            return m;
        }
    }, {
        key: "find",
        value: function find(fn) {
            return this.a.find(fn);
        }
    }, {
        key: "sort",
        value: function sort(fn) {
            this.a.sort(fn);
            this.trigger(types_1.ModelEvents.Sort);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.a = [];
            this.trigger(types_1.ModelEvents.Reset);
        }
        /**
         * Reset the array
         *
         * @param {T[]} [a]
         *
         * @memberof ArrayCollection
         */

    }, {
        key: "reset",
        value: function reset(a) {
            this.a = a || [];
            this.trigger(types_1.ModelEvents.Reset);
        }
    }, {
        key: "filter",
        value: function filter(fn) {
            return new this.constructor(this.a.filter(fn));
        }
    }, {
        key: "destroy",
        value: function destroy() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (types_1.isDestroyable(i)) i.destroy();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.a = [];
        }
        /**
         * Returns a copy of the array
         *
         * @returns
         *
         * @memberof ArrayCollection
         */

    }, {
        key: "array",
        value: function array() {
            return [].concat(_toConsumableArray(this.a));
        }
    }, {
        key: "length",
        get: function get() {
            return this.a.length;
        }
    }]);

    return ArrayCollection;
}(event_emitter_1.EventEmitter);

__decorate([deprecated_decorator_1.default("reset"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ArrayCollection.prototype, "clear", null);
exports.ArrayCollection = ArrayCollection;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var mixins_1 = __webpack_require__(3);

var BaseCollectionView = function (_view_1$BaseView) {
    _inherits(BaseCollectionView, _view_1$BaseView);

    function BaseCollectionView() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BaseCollectionView);

        options.eventProxyName = options.eventProxyName || "childView";
        return _possibleConstructorReturn(this, (BaseCollectionView.__proto__ || Object.getPrototypeOf(BaseCollectionView)).call(this, options));
    }

    _createClass(BaseCollectionView, [{
        key: "render",
        value: function render() {
            this.undelegateEvents();
            this._removeChildViews();
            _get(BaseCollectionView.prototype.__proto__ || Object.getPrototypeOf(BaseCollectionView.prototype), "render", this).call(this);
            if (!this.collection || !this.el) return this;
            this._renderCollection();
            this.delegateEvents();
            return this;
        }
    }, {
        key: "setCollection",
        value: function setCollection(collection) {
            if (this._collection == collection) return;
            if (this.collection) {
                this._removeModelEvents();
                this._removeChildViews();
            }
            this._collection = collection;
            if (this.collection) {
                this._addModelEvents();
            }
        }
    }, {
        key: "_removeChildViews",
        value: function _removeChildViews() {
            if (!this._childViews) {
                this._childViews = [];
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._childViews[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    v.destroy();
                    v.el.remove();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this._childViews = [];
        }
    }, {
        key: "_renderCollection",
        value: function _renderCollection(collection) {
            var col = collection || this.collection;
            var container = this._getChildViewContainer();
            container.innerHTML = '';
            var frag = document.createDocumentFragment();
            for (var i = 0, ii = col.length; i < ii; i++) {
                var item = col.item(i);
                if (!item) throw RangeError("invalid index");
                var view = this._createChildView(item);
                this._renderChildView(view);
                this._attachChildView(frag, view, i);
            }
            container.appendChild(frag);
        }
    }, {
        key: "_renderChildView",
        value: function _renderChildView(view) {
            view.render();
        }
    }, {
        key: "_attachChildView",
        value: function _attachChildView(container, view, index) {
            if (index >= this._childViews.length) {
                container.appendChild(view.el);
                this._childViews.push(view);
            } else {
                var after = this._childViews[index];
                this._childViews.splice(index, 0, view);
                container.insertBefore(view.el, after.el);
            }
            if (mixins_1.isEventEmitter(view)) this._proxyChildViewEvents(view);
        }
    }, {
        key: "_createChildView",
        value: function _createChildView(model) {
            var Vi = this.options.childView || this.childView || view_1.View;
            var el = types_1.Invoker.get(Vi);
            el.data = model;
            el.options.attachId = true;
            return el;
        }
    }, {
        key: "_destroyChildView",
        value: function _destroyChildView(view) {
            var index = this._childViews.indexOf(view);
            this._childViews.splice(index, 1);
            var container = this._getChildViewContainer();
            container.removeChild(view.el);
            view.destroy();
        }
    }, {
        key: "_modelAdded",
        value: function _modelAdded(item, index) {
            if (!this.el) return;
            var view = this._createChildView(item);
            this._renderChildView(view);
            this._attachChildView(this._getChildViewContainer(), view, index);
        }
    }, {
        key: "_modelRemoved",
        value: function _modelRemoved(_, index) {
            if (!this.el) return;
            var view = this._childViews[index];
            this._destroyChildView(view);
        }
    }, {
        key: "_addModelEvents",
        value: function _addModelEvents() {
            if (mixins_1.isEventEmitter(this.collection)) {
                this.collection.on(types_1.ModelEvents.Add, this._modelAdded, this);
                this.collection.on(types_1.ModelEvents.Remove, this._modelRemoved, this);
                this.collection.on(types_1.ModelEvents.Reset, this.render, this);
                this.collection.on(types_1.ModelEvents.Sort, this.render, this);
            }
        }
    }, {
        key: "_removeModelEvents",
        value: function _removeModelEvents() {
            if (mixins_1.isEventEmitter(this.collection)) {
                this.collection.off(void 0, void 0, this);
            }
        }
    }, {
        key: "_getChildViewContainer",
        value: function _getChildViewContainer() {
            var sel = this.options.childViewContainer || this.childViewContainer;
            if (!sel) return this.el;
            var el = this.el.querySelector(sel);
            if (!el) throw new Error("tag not found: " + sel);
            return el;
        }
    }, {
        key: "_proxyChildViewEvents",
        value: function _proxyChildViewEvents(view) {
            var _this2 = this;

            var fn = function fn(eventName) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                eventName = _this2.options.eventProxyName + ':' + eventName;
                view_1.triggerMethodOn.apply(view_1, [_this2, eventName].concat(_toConsumableArray([view].concat(args))));
            };
            view.on('*', fn);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this._removeChildViews();
            _get(BaseCollectionView.prototype.__proto__ || Object.getPrototypeOf(BaseCollectionView.prototype), "destroy", this).call(this);
        }
    }, {
        key: "collection",
        set: function set(collection) {
            this.setCollection(collection);
        },
        get: function get() {
            return this._collection;
        }
    }, {
        key: "childViews",
        get: function get() {
            return this._childViews;
        }
    }]);

    return BaseCollectionView;
}(view_1.BaseView);

exports.BaseCollectionView = BaseCollectionView;

var CollectionView = function (_BaseCollectionView) {
    _inherits(CollectionView, _BaseCollectionView);

    function CollectionView() {
        _classCallCheck(this, CollectionView);

        return _possibleConstructorReturn(this, (CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).apply(this, arguments));
    }

    return CollectionView;
}(BaseCollectionView);

exports.CollectionView = CollectionView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(6);
var utils_1 = __webpack_require__(4);
var deprecated_decorator_1 = __webpack_require__(7);
/**
 * Mount a view on the target and bind matched element
 *
 * @export
 * @param {string} selector
 * @returns
 */
function mount(selector) {
    return function (target, prop) {
        var View = Reflect.getOwnMetadata("design:type", target, prop);
        if (!View) throw new Error('design:type does not exists');
        if (!target._views) target._views = {};
        target._views[prop] = {
            selector: selector,
            view: View
        };
    };
}
exports.mount = mount;
exports.view = deprecated_decorator_1.default('Use mount instead', mount);
function setter(target, prop) {
    if (!(target instanceof model_1.Model)) {
        throw new TypeError("Target must be a EventEmitter");
    }
    return function $observableSetter(value) {
        if (this instanceof model_1.Model) {
            return this.set(prop, value);
        }
    };
}
function getter(_, prop) {
    return function () {
        return this.get(prop);
    };
}
/**
 *
 * @export
 * @template
 * @param {T} target
 * @param {*} prop
 * @param {TypedPropertyDescriptor<U>} [descriptor]
 */
function property(target, prop, descriptor) {
    descriptor = descriptor || Object.getOwnPropertyDescriptor(target, prop);
    if (!descriptor) {
        descriptor = {
            get: getter(target, prop),
            set: setter(target, prop),
            enumerable: false,
            configurable: false
        };
        Object.defineProperty(target, prop, descriptor);
    } else if (descriptor.set) {
        var oSet = descriptor.set;
        descriptor.set = function $observableSet(value) {
            var old = this[prop];
            if (utils_1.equal(old, value)) {
                return;
            }
            oSet(value);
            this.trigger("change:" + prop, old, value);
            this.trigger('change', _defineProperty({}, prop, value));
        };
    }
}
exports.property = property;
exports.observable = deprecated_decorator_1.default('Use property', property);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var Mixins = __webpack_require__(3);
exports.Mixins = Mixins;
__export(__webpack_require__(1));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(6));
__export(__webpack_require__(2));
__export(__webpack_require__(4));
var types_1 = __webpack_require__(1);
var view_1 = __webpack_require__(0);
function create(View, element) {
    if (view_1.isString(element)) {
        element = document.querySelector(element);
    }
    var view = types_1.Invoker.get(View);
    view.el = element;
    return view;
}
exports.create = create;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
var event_emitter_1 = __webpack_require__(5);
function EventListener(Base) {
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "listenTo",
            value: function listenTo(obj, event, fn, ctx) {
                var once = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                if (!event_emitter_1.isEventEmitter(obj)) {
                    //if (EventEmitter.throwOnError)
                    //    throw new EventEmitterError("obj is not an EventEmitter", once ? "listenToOnce" : "listenTo", this, obj);
                    return this;
                }
                var listeningTo = void 0,
                    id = void 0,
                    meth = void 0;
                listeningTo = this._listeningTo || (this._listeningTo = {});
                id = obj.listenId || (obj.listenId = view_1.uniqueId());
                listeningTo[id] = obj;
                meth = once ? 'once' : 'on';
                obj[meth](event, fn, ctx || this);
                return this;
            }
        }, {
            key: "listenToOnce",
            value: function listenToOnce(obj, event, fn, ctx) {
                return this.listenTo(obj, event, fn, ctx, true);
            }
        }, {
            key: "stopListening",
            value: function stopListening(obj, event, callback) {
                if (obj && !event_emitter_1.isEventEmitter(obj)) {
                    //if (EventEmitter.throwOnError)
                    //    throw new EventEmitterError("obj is not an EventEmitter", "stopListening", this, obj);
                    return this;
                }
                var listeningTo = this._listeningTo;
                if (!listeningTo) return this;
                var remove = !event && !callback;
                if (!callback && (typeof event === "undefined" ? "undefined" : _typeof(event)) === 'object') callback = this;
                if (obj) (listeningTo = {})[obj.listenId] = obj;
                for (var id in listeningTo) {
                    obj = listeningTo[id];
                    obj.off(event, callback, this);
                    if (remove || !Object.keys(obj.listeners).length) delete this._listeningTo[id];
                }
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                if (typeof Base.prototype.destroy === 'function') Base.prototype.destroy.call(this);
                this.stopListening();
            }
        }]);

        return _class;
    }(Base);
}
exports.EventListener = EventListener;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
function ViewElement(Base) {
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            var _ref;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

            if (!_this.el) _this._ensureElement();
            return _this;
        }

        _createClass(_class, [{
            key: "_ensureElement",
            value: function _ensureElement() {
                if (this._el) return;
                var tagName = view_1.getOption('tagName', [this.options, this]) || 'div',
                    className = view_1.getOption('className', [this.options, this]),
                    attr = view_1.getOption('attributes', [this.options, this]),
                    el = document.createElement(tagName);
                if (className) {
                    var _el$classList;

                    var classes = className.split(' ').map(function (m) {
                        return m.trim();
                    });
                    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
                }
                if (attr) {
                    for (var key in attr) {
                        el.setAttribute(key, attr[key]);
                    }
                }
                this.setElement(el);
            }
        }, {
            key: "remove",
            value: function remove() {
                if (this.el && this.el.parentNode) {
                    this.undelegateEvents();
                    this.el.parentNode.removeChild(this.el);
                    this.el = void 0;
                }
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "destroy", this).call(this);
                if (this.el && this.__created) {
                    this.remove();
                }
            }
        }]);

        return _class;
    }(Base);
}
exports.ViewElement = ViewElement;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
function ViewMountable(Base) {
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            var _ref;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

            if (_this._views) _this._bindViews(_this._views);
            return _this;
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "render", this).call(this);
                this._renderViews(this._views);
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                if (this._views) {
                    this._unbindViews(this._views);
                }
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "destroy", this).call(this);
            }
        }, {
            key: "_bindViews",
            value: function _bindViews(views) {
                var o = void 0;
                for (var key in views) {
                    o = views[key];
                    var view = types_1.Invoker.get(o.view);
                    this[key] = view;
                }
            }
        }, {
            key: "_unbindViews",
            value: function _unbindViews(views) {
                var self = this;
                for (var key in views) {
                    if (self[key] && self[key] instanceof view_1.BaseView) {
                        self[key].destroy();
                        self[key] = void 0;
                    }
                }
            }
        }, {
            key: "_renderViews",
            value: function _renderViews(views) {
                var el = void 0,
                    o = void 0;
                for (var key in views) {
                    o = views[key];
                    var sel = view_1.normalizeUIString(o.selector, this._ui || {});
                    el = this.el.querySelector(sel);
                    if (!el) throw new ReferenceError("selector \"" + sel + "\" for view " + o.view.name + " not found in dom");
                    var view = this[key];
                    if (!view) throw new ReferenceError("view \"" + o.view.name + "\" not mount");
                    view.setElement(el, false);
                    view.render();
                }
            }
        }]);

        return _class;
    }(Base);
}
exports.ViewMountable = ViewMountable;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
var event_emitter_1 = __webpack_require__(5);
var types_1 = __webpack_require__(1);
function ViewObservable(Base) {
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                view_1.triggerMethodOn(this, types_1.Events.BeforeRender);
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "render", this).call(this);
                view_1.triggerMethodOn(this, types_1.Events.Render);
                return this;
            }
        }, {
            key: "setElement",
            value: function setElement(el, trigger) {
                view_1.triggerMethodOn(this, types_1.Events.BeforeSetElement);
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "setElement", this).call(this, el, trigger);
                view_1.triggerMethodOn(this, types_1.Events.SetElement);
                return this;
            }
        }, {
            key: "delegateEvents",
            value: function delegateEvents(events) {
                view_1.triggerMethodOn(this, types_1.Events.BeforeDelegateEvents);
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "delegateEvents", this).call(this, events);
                view_1.triggerMethodOn(this, types_1.Events.DelegateEvents);
                return this;
            }
        }, {
            key: "undelegateEvents",
            value: function undelegateEvents() {
                view_1.triggerMethodOn(this, types_1.Events.BeforeUndelegateEvents);
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "undelegateEvents", this).call(this);
                view_1.triggerMethodOn(this, types_1.Events.UndelegateEvents);
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var _this2 = this;

                view_1.triggerMethodOn(this, types_1.Events.BeforeDestroy);
                if (event_emitter_1.isEventEmitter(this)) {
                    var off = this.off;
                    this.off = function () {
                        return _this2;
                    };
                    _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "destroy", this).call(this);
                    this.off = off;
                }
                view_1.triggerMethodOn(this, types_1.Events.Destroy);
                if (event_emitter_1.isEventEmitter(this)) this.off();
            }
        }]);

        return _class;
    }(Base);
}
exports.ViewObservable = ViewObservable;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(0);
function ViewTemplate(Base) {
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "getTemplateData",
            value: function getTemplateData() {
                var data = view_1.result(this, 'data') || {};
                return data;
            }
        }, {
            key: "render",
            value: function render() {
                if (!this.el) return this;
                this.undelegateEvents();
                this.renderTemplate();
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "render", this).call(this);
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var data = this.getTemplateData();
                var template = view_1.result(this, 'template', data);
                if (template) this.el.innerHTML = '';
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "destroy", this).call(this);
            }
        }, {
            key: "renderTemplate",
            value: function renderTemplate() {
                if (!this.el) return;
                var data = this.getTemplateData();
                var template = view_1.result(this, 'template', data);
                if (!template) return;
                this.el.innerHTML = template;
            }
        }]);

        return _class;
    }(Base);
}
exports.ViewTemplate = ViewTemplate;

/***/ })
/******/ ]);
});
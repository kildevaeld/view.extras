"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const equaljs_1 = require("equaljs");
/**
 * Mount a view on the target and bind matched element
 *
 * @export
 * @param {string} selector
 * @returns
 */
function mount(selector, options = {}) {
    return function (target, prop) {
        let View = Reflect.getOwnMetadata("design:type", target, prop);
        if (!View)
            throw new Error('design:type does not exists');
        if (!target._views)
            target._views = {};
        target._views[prop] = {
            selector: selector,
            view: View,
            optional: options.optional || false
        };
    };
}
exports.mount = mount;
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
    }
    else if (descriptor.set) {
        let oSet = descriptor.set;
        descriptor.set = function $observableSet(value) {
            let old = this[prop];
            if (equaljs_1.equal(old, value)) {
                return;
            }
            oSet(value);
            this.trigger(`change:${prop}`, old, value);
            this.trigger('change', { [prop]: value });
        };
    }
}
exports.property = property;

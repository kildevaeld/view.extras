"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equaljs_1 = require("equaljs");
const types_1 = require("./types");
const event_emitter_1 = require("./event-emitter");
const utils_1 = require("./utils");
class Model extends event_emitter_1.EventEmitter {
    constructor() {
        super();
        this.lastChanged = {};
        this[types_1.MetaKeys.Attributes] = new Map();
    }
    //set<U>(key: PropertyDecorator, value: U)
    set(key, value, options) {
        let values;
        if (utils_1.isPropertyKey(key)) {
            if (arguments.length == 1)
                throw new TypeError('invalid arguments');
            values = { [`${key}`]: value };
        }
        else {
            values = key;
            options = value;
        }
        options = options || {};
        let changes = {};
        for (const key in values) {
            const old = this.get(key), value = values[key];
            if (equaljs_1.equal(old, value)) {
                continue;
            }
            this[types_1.MetaKeys.Attributes].set(key, value);
            changes[key] = [old, value];
        }
        this.lastChanged = changes;
        if (options.silent)
            return;
        for (const key in changes) {
            this.trigger(`change:${key}`, ...changes[key]);
        }
        this.trigger('change', Object.assign({}, changes));
    }
    get(key) {
        return this[types_1.MetaKeys.Attributes].get(key);
    }
    has(key) {
        return this[types_1.MetaKeys.Attributes].has(key);
    }
    clear() {
        this[types_1.MetaKeys.Attributes] = new Map();
        this.trigger('clear');
        return this;
    }
    toJSON(_ = false) {
        let out = {};
        this[types_1.MetaKeys.Attributes].forEach((value, key) => {
            out[key] = value;
        });
        return out;
    }
}
exports.Model = Model;

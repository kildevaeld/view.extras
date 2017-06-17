"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const types_1 = require("./types");
const event_emitter_1 = require("./event-emitter");
class Model extends event_emitter_1.EventEmitter {
    constructor() {
        super();
        this[types_1.MetaKeys.Attributes] = new Map();
    }
    set(key, value) {
        let old = this.get(key);
        if (utils_1.equal(old, value)) {
            return this;
        }
        this[types_1.MetaKeys.Attributes].set(key, value);
        this.trigger(`change:${key}`, old, value);
        this.trigger('change', { [key]: value });
    }
    get(key) {
        return this[types_1.MetaKeys.Attributes].get(key);
    }
    has(key) {
        return this[types_1.MetaKeys.Attributes].has(key);
    }
    unset(key) {
        if (this.has(key)) {
            let val = this.get(key);
            this[types_1.MetaKeys.Attributes].delete(key);
            this.trigger(`remove:${key}`, val);
            this.trigger('remove', key, val);
            return val;
        }
        return void 0;
    }
    toJSON() {
        return this[types_1.MetaKeys.Attributes] || {};
    }
}
exports.Model = Model;

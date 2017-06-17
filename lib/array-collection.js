"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const event_emitter_1 = require("./event-emitter");
class ArrayCollection extends event_emitter_1.EventEmitter {
    constructor(a = []) {
        super();
        this.a = a;
    }
    get length() {
        return this.a.length;
    }
    item(index) {
        if (index >= this.a.length)
            return undefined;
        return this.a[index];
    }
    push(m) {
        this.a.push(m);
        this.trigger(types_1.ModelEvents.Add, m, this.a.length - 1);
    }
    pop() {
        let m = this.a.pop();
        this.trigger(types_1.ModelEvents.Remove, m, this.a.length);
        return m;
    }
    insert(m, index) {
        if (index >= this.length)
            return;
        this.a.splice(index, 0, m);
        this.trigger(types_1.ModelEvents.Add, m, index);
    }
    indexOf(m) {
        return this.a.indexOf(m);
    }
    remove(index) {
        let m = this.item(index);
        if (!m)
            return undefined;
        this.a.splice(index, 1);
        this.trigger(types_1.ModelEvents.Remove, m, index);
        return m;
    }
    find(fn) {
        return this.a.find(fn);
    }
    sort(fn) {
        this.a.sort(fn);
        this.trigger(types_1.ModelEvents.Sort);
    }
    clear() {
        this.a = [];
        this.trigger(types_1.ModelEvents.Reset);
    }
    reset(a) {
        this.a = a || [];
        this.trigger(types_1.ModelEvents.Reset);
    }
    destroy() {
        for (let i of this.a) {
            if (types_1.isDestroyable(i))
                i.destroy();
        }
        this.a = [];
    }
    array() { return [...this.a]; }
}
exports.ArrayCollection = ArrayCollection;

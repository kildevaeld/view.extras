"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const event_emitter_1 = require("./event-emitter");
//import deprecated from 'deprecated-decorator';
class ArrayCollection extends event_emitter_1.EventEmitter {
    constructor(a = []) {
        super();
        this.a = a;
    }
    /**
     * The length of the array
     *
     * @readonly
     * @type {number}
     * @memberof ArrayCollection
     */
    get length() {
        return this.a.length;
    }
    /**
     * Get item at index
     *
     * @param {number} index
     * @returns {(T | undefined)}
     *
     * @memberof ArrayCollection
     */
    item(index) {
        if (index >= this.a.length)
            return undefined;
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
    push(m, trigger = true) {
        this.a.push(m);
        if (trigger)
            this.trigger(types_1.ModelEvents.Add, m, this.a.length - 1);
    }
    /**
     * Pop a item from the array and optinally trigger a change event
     *
     * @param {boolean} [trigger=true]
     * @returns {(T | undefined)}
     *
     * @memberof ArrayCollection
     */
    pop(trigger = true) {
        let m = this.a.pop();
        if (trigger)
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
    /**
     * Reset the array
     *
     * @param {T[]} [a]
     *
     * @memberof ArrayCollection
     */
    reset(a) {
        this.a = a || [];
        this.trigger(types_1.ModelEvents.Reset);
    }
    filter(fn) {
        return new this.constructor(this.a.filter(fn));
    }
    map(fn) {
        return new ArrayCollection(this.a.map(fn));
    }
    destroy() {
        for (let i = 0, ii = this.a.length; i < ii; i++) {
            if (types_1.isDestroyable(this.a[i]))
                this.a[i].destroy();
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
    array() { return [...this.a]; }
}
exports.ArrayCollection = ArrayCollection;

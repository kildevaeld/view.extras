"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
function removeFromListener(listeners, fn, ctx) {
    for (let i = 0; i < listeners.length; i++) {
        let e = listeners[i];
        if ((fn == null && ctx != null && e.ctx === ctx) ||
            (fn != null && ctx == null && e.handler === fn) ||
            (fn != null && ctx != null && e.handler === fn && e.ctx === ctx)) {
            listeners.splice(i, 1);
        }
    }
    return listeners;
}
function isEventEmitter(a) {
    return a && (a instanceof EventEmitter || (view_1.isFunction(a.on) && view_1.isFunction(a.once) && view_1.isFunction(a.off) && view_1.isFunction(a.trigger)));
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
    return class extends Base {
        get listeners() {
            return this._listeners;
        }
        on(event, fn, ctx, once = false) {
            let events = (this._listeners || (this._listeners = new Map())).get(event) || [];
            events.push({
                name: event,
                once: once,
                handler: fn,
                ctx: ctx || this
            });
            if (!this._listeners.has(event))
                this._listeners.set(event, events);
            return this;
        }
        once(event, fn, ctx) {
            return this.on(event, fn, ctx, true);
        }
        off(eventName, fn, ctx) {
            this._listeners = this._listeners || new Map();
            if (eventName == null && ctx == null) {
                this._listeners = new Map();
            }
            else if (this._listeners.has(eventName)) {
                let events = this._listeners.get(eventName);
                if (fn == null && ctx == null) {
                    this._listeners.set(eventName, []);
                }
                else {
                    removeFromListener(events, fn, ctx);
                }
            }
            else {
                /*for (let en of this._listeners.values()) {
                    removeFromListener(en, fn, ctx);
                }*/
                this._listeners.forEach((value) => {
                    removeFromListener(value, fn, ctx);
                });
            }
            return this;
        }
        trigger(eventName, ...args) {
            this._listeners = this._listeners || new Map();
            let events = (this._listeners.get(eventName) || []).concat(this._listeners.get("*") || []);
            let event, a, index;
            let calls = [];
            let alls = [];
            for (let i = 0, ii = events.length; i < ii; i++) {
                event = events[i];
                a = args;
                if (events[i].name === '*') {
                    alls.push(events[i]);
                }
                else {
                    calls.push(events[i]);
                }
                if (events[i].once === true) {
                    index = this._listeners.get(events[i].name).indexOf(events[i]);
                    this._listeners.get(events[i].name).splice(index, 1);
                }
            }
            if (alls.length) {
                let a = [eventName].concat(args);
                this._executeListener(alls, a);
            }
            if (calls.length)
                this._executeListener(calls, args);
            else if (eventName === 'error' && EventEmitter.throwOnError) {
                if (args.length) {
                    let a = args[0];
                    if (!(a instanceof Error)) {
                        a = new Error(String(a));
                    }
                    EventEmitter.throwError(a);
                }
            }
            return this;
        }
        destroy() {
            if (typeof Base.prototype.destroy === 'function')
                Base.prototype.destroy.call(this);
            this.off();
        }
        _executeListener(func, args) {
            EventEmitter.executeListenerFunction(func, args);
        }
    };
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

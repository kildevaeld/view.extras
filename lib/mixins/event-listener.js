"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const event_emitter_1 = require("./event-emitter");
function EventListener(Base) {
    return class extends Base {
        listenTo(obj, event, fn, ctx, once = false) {
            if (!event_emitter_1.isEventEmitter(obj)) {
                //if (EventEmitter.throwOnError)
                //    throw new EventEmitterError("obj is not an EventEmitter", once ? "listenToOnce" : "listenTo", this, obj);
                return this;
            }
            let listeningTo, id, meth;
            listeningTo = this._listeningTo || (this._listeningTo = {});
            id = obj.listenId || (obj.listenId = view_1.uniqueId());
            listeningTo[id] = obj;
            meth = once ? 'once' : 'on';
            obj[meth](event, fn, ctx || this);
            return this;
        }
        listenToOnce(obj, event, fn, ctx) {
            return this.listenTo(obj, event, fn, ctx, true);
        }
        stopListening(obj, event, callback) {
            if (obj && !event_emitter_1.isEventEmitter(obj)) {
                //if (EventEmitter.throwOnError)
                //    throw new EventEmitterError("obj is not an EventEmitter", "stopListening", this, obj);
                return this;
            }
            let listeningTo = this._listeningTo;
            if (!listeningTo)
                return this;
            var remove = !event && !callback;
            if (!callback && typeof event === 'object')
                callback = this;
            if (obj)
                (listeningTo = {})[obj.listenId] = obj;
            for (var id in listeningTo) {
                obj = listeningTo[id];
                obj.off(event, callback, this);
                if (remove || !Object.keys(obj.listeners).length)
                    delete this._listeningTo[id];
            }
            return this;
        }
        destroy() {
            if (typeof Base.prototype.destroy === 'function')
                Base.prototype.destroy.call(this);
            this.stopListening();
        }
    };
}
exports.EventListener = EventListener;

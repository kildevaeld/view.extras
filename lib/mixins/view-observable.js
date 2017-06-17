"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const event_emitter_1 = require("./event-emitter");
const types_1 = require("../types");
function ViewObservable(Base) {
    return class extends Base {
        render() {
            view_1.triggerMethodOn(this, types_1.Events.BeforeRender);
            super.render();
            view_1.triggerMethodOn(this, types_1.Events.Render);
            return this;
        }
        setElement(el, trigger) {
            view_1.triggerMethodOn(this, types_1.Events.BeforeSetElement);
            super.setElement(el, trigger);
            view_1.triggerMethodOn(this, types_1.Events.SetElement);
            return this;
        }
        delegateEvents(events) {
            view_1.triggerMethodOn(this, types_1.Events.BeforeDelegateEvents);
            super.delegateEvents(events);
            view_1.triggerMethodOn(this, types_1.Events.DelegateEvents);
            return this;
        }
        undelegateEvents() {
            view_1.triggerMethodOn(this, types_1.Events.BeforeUndelegateEvents);
            super.undelegateEvents();
            view_1.triggerMethodOn(this, types_1.Events.UndelegateEvents);
            return this;
        }
        destroy() {
            view_1.triggerMethodOn(this, types_1.Events.BeforeDestroy);
            if (event_emitter_1.isEventEmitter(this)) {
                const off = this.off;
                this.off = (..._) => { return this; };
                super.destroy();
                this.off = off;
            }
            view_1.triggerMethodOn(this, types_1.Events.Destroy);
            if (event_emitter_1.isEventEmitter(this))
                this.off();
        }
    };
}
exports.ViewObservable = ViewObservable;

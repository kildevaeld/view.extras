import { Constructor, BaseView, triggerMethodOn, EventsMap } from 'view';
import { isEventEmitter } from './event-emitter';
import { Events } from '../types';

export function ViewObservable<T extends Constructor<BaseView<U>>, U extends Element>(Base: T): T {
    return class extends Base {

        render() {
            triggerMethodOn(this, Events.BeforeRender);
            super.render();
            triggerMethodOn(this, Events.Render);
            return this;
        }

        setElement(el: U | undefined, trigger?: boolean) {
            triggerMethodOn(this, Events.BeforeSetElement);
            super.setElement(el, trigger);
            triggerMethodOn(this, Events.SetElement);
            return this;
        }

        delegateEvents(events?: EventsMap) {
            triggerMethodOn(this, Events.BeforeDelegateEvents);
            super.delegateEvents(events)
            triggerMethodOn(this, Events.DelegateEvents);
            return this;
        }

        undelegateEvents() {
            triggerMethodOn(this, Events.BeforeUndelegateEvents);
            super.undelegateEvents();
            triggerMethodOn(this, Events.UndelegateEvents);
            return this;
        }

        destroy() {
            triggerMethodOn(this, Events.BeforeDestroy);
            if (isEventEmitter(this)) {
                const off = this.off;
                this.off = (..._: any[]): any => { return this; }
                super.destroy();
                this.off = off;
            }
            triggerMethodOn(this, Events.Destroy);
            if (isEventEmitter(this)) this.off();
        }

    }
}
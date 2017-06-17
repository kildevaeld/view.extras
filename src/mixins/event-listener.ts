
import { IEventEmitter, Constructor, EventHandler, uniqueId } from 'view';
import { IEventListener } from '../types';
import { isEventEmitter } from './event-emitter';


export function EventListener<T extends Constructor<{}>>(Base: T): Constructor<IEventListener> & T {
    return class extends Base {
        _listeningTo: { [key: string]: any }
        listenTo(obj: IEventEmitter, event: string, fn: EventHandler, ctx?: any, once: boolean = false) {
            if (!isEventEmitter(obj)) {
                //if (EventEmitter.throwOnError)
                //    throw new EventEmitterError("obj is not an EventEmitter", once ? "listenToOnce" : "listenTo", this, obj);
                return this;
            }

            let listeningTo, id, meth;
            listeningTo = this._listeningTo || (this._listeningTo = {});
            id = obj.listenId || (obj.listenId = uniqueId())
            listeningTo[id] = obj;
            meth = once ? 'once' : 'on';

            (<any>obj)[meth](event, fn, ctx || this);

            return this;
        }


        listenToOnce(obj: IEventEmitter, event: string, fn: EventHandler, ctx?: any) {
            return this.listenTo(obj, event, fn, ctx, true)
        }


        stopListening(obj?: IEventEmitter, event?: string, callback?: EventHandler) {
            if (obj && !isEventEmitter(obj)) {
                //if (EventEmitter.throwOnError)
                //    throw new EventEmitterError("obj is not an EventEmitter", "stopListening", this, obj);
                return this;
            }

            let listeningTo: any = this._listeningTo;
            if (!listeningTo) return this;
            var remove = !event && !callback;
            if (!callback && typeof event === 'object') callback = <any>this;
            if (obj) (<any>(listeningTo = {}))[obj.listenId!] = obj;

            for (var id in listeningTo) {
                obj = listeningTo[id];
                obj!.off(event, callback, this);

                if (remove || !Object.keys((<any>obj).listeners).length) delete this._listeningTo[id];
            }
            return this;
        }

        destroy() {
            if (typeof Base.prototype.destroy === 'function')
                Base.prototype.destroy.call(this);
            this.stopListening();
        }
    }
}
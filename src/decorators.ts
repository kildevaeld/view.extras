import { IViewMountable } from './types';
import { Model } from './model';
import { equal } from './utils';

export function view(selector: string) {
    return function <T extends IViewMountable>(target: T, prop: PropertyKey) {
        let View = Reflect.getOwnMetadata("design:type", target, prop as string);
        if (!View) throw new Error('design:type does not exists');
        if (!(<any>target)._views) (<any>target)._views = {};
        (<any>target)._views[prop as string] = {
            selector: selector,
            view: View
        };
    }
}



function setter<T extends Model, U>(target: T, prop: PropertyKey) {
    if (!(target instanceof Model)) {
        throw new TypeError("Target must be a EventEmitter")
    }


    return function $observableSetter(this: T, value: U) {
        if (this instanceof Model) {
            return this.set(prop, value)
        }
    }
}

function getter<T extends Model, U>(_: T, prop: PropertyKey) {
    return function (this: T): U {
        return this.get<U>(prop)
    }
}


export function observable<T extends Model, U>(target: T, prop: any, descriptor?: TypedPropertyDescriptor<U>) {
    descriptor = descriptor || Object.getOwnPropertyDescriptor(target, prop);
    if (!descriptor) {

        descriptor = {
            get: getter<T, U>(target, prop),
            set: setter<T, U>(target, prop),
            enumerable: false,
            configurable: false
        }
        Object.defineProperty(target, prop, descriptor);
    } else if (descriptor.set) {
        let oSet = descriptor.set;

        descriptor.set = function $observableSet(this: Model, value: U) {

            let old = this[prop];
            if (equal(old, value)) {
                return;
            }
            oSet(value);
            this.trigger(`change:${prop}`, old, value)
            this.trigger('change', { [prop]: value })
        }
    }
}

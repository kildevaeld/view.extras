
import { equal } from './utils';
import { MetaKeys } from './types';
import { EventEmitter } from './event-emitter';

export class Model extends EventEmitter {

    [key: string]: any;

    constructor() {
        super();
        this[MetaKeys.Attributes] = new Map<PropertyKey, any>();
    }

    set<U>(key: PropertyKey, value: U) {
        let old = this.get(key)
        if (equal(old, value)) {
            return this;
        }

        this[MetaKeys.Attributes].set(key, value);
        this.trigger(`change:${key}`, old, value)
        this.trigger('change', { [key]: value })

    }

    get<U>(key: PropertyKey): U {
        return this[MetaKeys.Attributes].get(key);
    }

    has(key: PropertyKey): boolean {
        return this[MetaKeys.Attributes].has(key);
    }

    unset<U>(key: PropertyKey): U | undefined {
        if (this.has(key)) {
            let val = this.get<U>(key);
            this[MetaKeys.Attributes].delete(key);
            this.trigger(`remove:${key}`, val);
            this.trigger('remove', key, val);
            return val;

        }
        return void 0;
    }

    toJSON() {
        let out = {};
        for (let entry of this[MetaKeys.Attributes].entries()) {
            out[entry[0]] = entry[1];
        }
        return out;
    }
}
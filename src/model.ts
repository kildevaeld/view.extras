
import { equal } from './utils';
import { MetaKeys } from './types';
import { EventEmitter } from './event-emitter';

export interface ModelSetOptions {
    silent?: boolean;
}

export class Model extends EventEmitter {

    [key: string]: any;

    constructor() {
        super();
        this[MetaKeys.Attributes] = new Map<PropertyKey, any>();
    }

    set<U>(key: PropertyKey, value: U, options?: ModelSetOptions) {
        let old = this.get(key)
        if (equal(old, value)) {
            return this;
        }

        this[MetaKeys.Attributes].set(key, value);

        if (options && options.silent) return;

        this.trigger(`change:${key}`, old, value)
        this.trigger('change', { [key]: value })

    }

    get<U>(key: PropertyKey): U {
        return this[MetaKeys.Attributes].get(key);
    }

    has(key: PropertyKey): boolean {
        return this[MetaKeys.Attributes].has(key);
    }

    clear() {
        this[MetaKeys.Attributes] = new Map<PropertyKey, any>();
        this.trigger('clear');
        return this;
    }

    toJSON(_ = false) {
        let out = {};

        this[MetaKeys.Attributes].forEach((value, key) => {
            out[key] = value;
        });
        /*
        for (let entry of this[MetaKeys.Attributes].entries()) {
            out[entry[0]] = entry[1];
        }*/

        return out;
    }
}
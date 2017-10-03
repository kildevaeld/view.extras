
import { equal } from 'equaljs';
import { MetaKeys } from './types';
import { EventEmitter } from './event-emitter';
import { isObject } from 'view';
import { isPropertyKey } from './utils';
export interface ModelSetOptions {
    silent?: boolean;
}

export type ChangeHash = { [key: string]: [any, any] };

export class Model extends EventEmitter {

    [key: string]: any;

    lastChanged: ChangeHash = {};

    constructor() {
        super();
        this[MetaKeys.Attributes] = new Map<PropertyKey, any>();
    }


    set<U>(key: PropertyKey | { [key: string]: any }, value?: U | ModelSetOptions, options?: ModelSetOptions) {

        let values: { [key: string]: any };
        if (isPropertyKey(key)) {
            if (arguments.length == 1) throw new TypeError('invalid arguments');
            values = { [`${key}`]: value };
        } else {
            values = key;
            options = value;
        }

        options = options || {};
        let changes: { [key: string]: [any, any] } = {};

        for (const key in values) {
            const old = this.get(key),
                value = values[key];
            if (equal(old, value)) {
                continue;
            }

            this[MetaKeys.Attributes].set(key, value);
            changes[key] = [old, value];
        }

        this.lastChanged = changes;

        if (options.silent) return;

        for (const key in changes) {
            this.trigger(`change:${key}`, ...changes[key])
        }

        this.trigger('change', Object.assign({}, changes));

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

        return out;
    }
}
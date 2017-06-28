import { EventEmitter } from './event-emitter';
export declare class Model extends EventEmitter {
    [key: string]: any;
    constructor();
    set<U>(key: PropertyKey, value: U): this;
    get<U>(key: PropertyKey): U;
    has(key: PropertyKey): boolean;
    unset<U>(key: PropertyKey): U | undefined;
    clear(): this;
    toJSON(_?: boolean): {};
}

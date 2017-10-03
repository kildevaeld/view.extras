import { EventEmitter } from './event-emitter';
export interface ModelSetOptions {
    silent?: boolean;
}
export declare type ChangeHash = {
    [key: string]: [any, any];
};
export declare class Model extends EventEmitter {
    [key: string]: any;
    lastChanged: ChangeHash;
    constructor();
    set<U>(key: PropertyKey | {
        [key: string]: any;
    }, value?: U | ModelSetOptions, options?: ModelSetOptions): void;
    get<U>(key: PropertyKey): U;
    has(key: PropertyKey): boolean;
    clear(): this;
    toJSON(_?: boolean): {};
}

import { ICollection } from './types';
import { EventEmitter } from './event-emitter';
export declare class ArrayCollection<T> extends EventEmitter implements ICollection<T> {
    private a;
    constructor(a?: Array<T>);
    readonly length: number;
    item(index: number): T | undefined;
    push(m: T): void;
    pop(): T | undefined;
    insert(m: T, index: number): void;
    indexOf(m: T): number;
    remove(index: number): T | undefined;
    find(fn: (m: T) => boolean): T;
    sort(fn: (a: T, b: T) => number): void;
    clear(): void;
    destroy(): void;
    array(): T[];
}

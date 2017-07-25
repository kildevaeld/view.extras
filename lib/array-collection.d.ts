import { ICollection } from './types';
import { EventEmitter } from './event-emitter';
export declare class ArrayCollection<T> extends EventEmitter implements ICollection<T> {
    private a;
    constructor(a?: Array<T>);
    /**
     * The length of the array
     *
     * @readonly
     * @type {number}
     * @memberof ArrayCollection
     */
    readonly length: number;
    /**
     * Get item at index
     *
     * @param {number} index
     * @returns {(T | undefined)}
     *
     * @memberof ArrayCollection
     */
    item(index: number): T | undefined;
    /**
     * Push an item and optionally trigger a change event
     *
     * @param {T} m
     * @param {boolean} [trigger=true]
     *
     * @memberof ArrayCollection
     */
    push(m: T, trigger?: boolean): void;
    /**
     * Pop a item from the array and optinally trigger a change event
     *
     * @param {boolean} [trigger=true]
     * @returns {(T | undefined)}
     *
     * @memberof ArrayCollection
     */
    pop(trigger?: boolean): T | undefined;
    insert(m: T, index: number): void;
    indexOf(m: T): number;
    remove(index: number): T | undefined;
    find(fn: (model: T) => boolean): T | undefined;
    find(fn: (model: T, index: number) => boolean): T | undefined;
    sort(fn: (a: T, b: T) => number): void;
    /**
     * Reset the array
     *
     * @param {T[]} [a]
     *
     * @memberof ArrayCollection
     */
    reset(a?: T[]): void;
    filter(fn: (a: T) => boolean): this;
    destroy(): void;
    /**
     * Returns a copy of the array
     *
     * @returns
     *
     * @memberof ArrayCollection
     */
    array(): T[];
}

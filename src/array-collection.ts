
import { ICollection, ModelEvents, isDestroyable } from './types';
import { EventEmitter } from './event-emitter';
//import deprecated from 'deprecated-decorator';

export class ArrayCollection<T> extends EventEmitter implements ICollection<T> {
    constructor(private a: Array<T> = []) {
        super();
    }

    /**
     * The length of the array
     * 
     * @readonly
     * @type {number}
     * @memberof ArrayCollection
     */
    get length(): number {
        return this.a.length;
    }

    /**
     * Get item at index
     * 
     * @param {number} index 
     * @returns {(T | undefined)} 
     * 
     * @memberof ArrayCollection
     */
    item(index: number): T | undefined {
        if (index >= this.a.length) return undefined;
        return this.a[index];
    }

    /**
     * Push an item and optionally trigger a change event
     * 
     * @param {T} m 
     * @param {boolean} [trigger=true] 
     * 
     * @memberof ArrayCollection
     */
    push(m: T, trigger = true) {
        this.a.push(m);
        if (trigger)
            this.trigger(ModelEvents.Add, m, this.a.length - 1);
    }

    /**
     * Pop a item from the array and optinally trigger a change event
     * 
     * @param {boolean} [trigger=true] 
     * @returns {(T | undefined)} 
     * 
     * @memberof ArrayCollection
     */
    pop(trigger = true): T | undefined {
        let m = this.a.pop()
        if (trigger)
            this.trigger(ModelEvents.Remove, m, this.a.length);
        return m;
    }


    insert(m: T, index: number) {
        if (index >= this.length) return;
        this.a.splice(index, 0, m);
        this.trigger(ModelEvents.Add, m, index);
    }

    indexOf(m: T) {
        return this.a.indexOf(m);
    }

    remove(index: number): T | undefined {
        let m = this.item(index);
        if (!m) return undefined;
        this.a.splice(index, 1);
        this.trigger(ModelEvents.Remove, m, index);
        return m;
    }

    find(fn: (model: T) => boolean): T | undefined
    find(fn: (model: T, index: number) => boolean): T | undefined
    find(fn: (model: T, index: number, obj: T[]) => boolean): T | undefined {
        return this.a.find(fn);
    }

    sort(fn: (a: T, b: T) => number) {
        this.a.sort(fn);
        this.trigger(ModelEvents.Sort);
    }

    /**
     * Reset the array
     * 
     * @param {T[]} [a] 
     * 
     * @memberof ArrayCollection
     */
    reset(a?: T[]) {
        this.a = a || [];
        this.trigger(ModelEvents.Reset);
    }

    filter(fn: (a: T) => boolean): this {
        return new (<any>this).constructor(this.a.filter(fn));
    }

    map<U>(fn: (a: T) => U): ArrayCollection<U> {
        return new ArrayCollection(this.a.map(fn));
    }

    destroy() {
        for (let i = 0, ii = this.a.length; i < ii; i++) {
            if (isDestroyable(this.a[i])) (<any>this.a[i]).destroy();
        }
        this.a = [];
    }

    /**
     * Returns a copy of the array
     * 
     * @returns 
     * 
     * @memberof ArrayCollection
     */
    array() { return [...this.a]; }
}


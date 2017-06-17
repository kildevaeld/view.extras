
import { ICollection, ModelEvents, isDestroyable } from './types';
import { EventEmitter } from './event-emitter';

export class ArrayCollection<T> extends EventEmitter implements ICollection<T> {

    constructor(private a: Array<T> = []) {
        super();

    }

    get length(): number {
        return this.a.length;
    }

    item(index: number): T | undefined {
        if (index >= this.a.length) return undefined;

        return this.a[index];
    }

    push(m: T) {
        this.a.push(m);
        this.trigger(ModelEvents.Add, m, this.a.length - 1);
    }

    pop(): T | undefined {
        let m = this.a.pop()
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

    find(fn: (m: T) => boolean) {
        return this.a.find(fn);
    }

    sort(fn: (a: T, b: T) => number) {
        this.a.sort(fn);
        this.trigger(ModelEvents.Sort);
    }

    clear() {
        this.a = [];
        this.trigger(ModelEvents.Reset);
    }

    reset(a?: T[]) {
        this.a = a || [];
        this.trigger(ModelEvents.Reset);
    }

    destroy() {
        for (let i of this.a) {
            if (isDestroyable(i)) i.destroy();
        }
        this.a = [];
    }



    array() { return [...this.a]; }
}


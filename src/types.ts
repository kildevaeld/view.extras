
import { IView, Constructor, isFunction } from 'view';

export interface IInvoker {
    get<T>(key: any): T
}

export var Invoker = {
    get<T extends IView>(V: Constructor<T>): T {
        return Reflect.construct(V, []);
    }
}

export function setInvoker(i: IInvoker) {
    Invoker = i;
}

export interface IViewMountable {
    //_views: ViewMap;
}

export namespace Events {
    export const BeforeRender = "before:render";
    export const Render = "render";
    export const BeforeSetElement = "before:set:element";
    export const SetElement = "set:element";
    export const BeforeDelegateEvents = "before:delegate:events";
    export const DelegateEvents = "delegate:events";
    export const BeforeUndelegateEvents = "before:undelegate:events";
    export const UndelegateEvents = "undelegate:events";
    export const BeforeDestroy = "before:destroy";
    export const Destroy = "destroy";

}

export interface IEventListener {
    listenTo(obj: IEventEmitter, event: string, fn: EventHandler, ctx?: any): any;
    listenToOnce(obj: IEventEmitter, event: string, fn: EventHandler, ctx?: any): any;
    stopListening(obj?: IEventEmitter, event?: string, fn?: EventHandler): any;
}


export interface EventHandler {
    (...args: any[]): void
}

export interface AllEventHandler {
    (eventName: string, ...args: any[]): void;
}

export interface Event {
    name: string
    once: boolean
    handler: EventHandler
    ctx?: any
}


/**
 * 
 * 
 * @export
 * @interface IEventEmitter
 */
export interface IEventEmitter {
    /**
     * 
     * 
     * @type {{ [key: string]: Events[] }}
     * @memberOf IEventEmitter
     */
    listeners?: Map<any, Event[]>
    /**
     * 
     * 
     * @type {string}
     * @memberOf IEventEmitter
     */
    listenId?: string
    /**
     * 
     * 
     * @param {string} event
     * @param {EventHandler} fn
     * @param {*} [ctx]
     * @returns {*}
     * 
     * @memberOf IEventEmitter
     */
    on(event: '*', fn: AllEventHandler, ctx?: any): this
    on(event: string, fn: EventHandler, ctx?: any): this
    /**
     * 
     * 
     * @param {string} event
     * @param {EventHandler} fn
     * @param {*} [ctx]
     * @returns {*}
     * 
     * @memberOf IEventEmitter
     */
    once(event: string, fn: EventHandler, ctx?: any): this
    /**
     * 
     * 
     * @param {string} event
     * @param {EventHandler} [fn]
     * @param {*} [ctx]
     * @returns {*}
     * 
     * @memberOf IEventEmitter
     */
    off(event?: string, fn?: EventHandler, ctx?: any): this
    /**
     * 
     * 
     * @param {string} event
     * @param {...any[]} args
     * @returns {*}
     * 
     * @memberOf IEventEmitter
     */
    trigger(event: string, ...args: any[]): this
}

export interface IViewElement {
    tagName?: string;
    className?: string;
    attributes?: { [key: string]: string };

    remove(): any;

}

export interface IViewTemplate {
    template?: string | ((data: any) => string);
    getTemplateData(): any;
    renderTemplate(): void
}

export interface ICollection<T> {
    length: number;
    item(index: number): T | undefined;
    //indexOf(item: T): number;
}

export namespace ModelEvents {
    export const Add = "add";
    export const Remove = "remove";
    export const Clear = "clear";
    export const Sort = "sort";
    export const Change = "change";
    export const Reset = "reset";
}

export namespace MetaKeys {
    export const Attributes = Symbol("attributes");

}

export interface Destroyable {
    destroy(): void;
}

export function isDestroyable(a: any): a is Destroyable {
    return a && isFunction(a.destroy);
}
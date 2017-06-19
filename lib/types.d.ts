import { IView, Constructor } from 'view';
export interface IInvoker {
    get<T>(key: any): T;
}
export declare var Invoker: {
    get<T extends IView>(V: Constructor<T>): T;
};
export declare function setInvoker(i: IInvoker): void;
export interface IViewMountable {
}
export declare namespace Events {
    const BeforeRender = "before:render";
    const Render = "render";
    const BeforeSetElement = "before:set:element";
    const SetElement = "set:element";
    const BeforeDelegateEvents = "before:delegate:events";
    const DelegateEvents = "delegate:events";
    const BeforeUndelegateEvents = "before:undelegate:events";
    const UndelegateEvents = "undelegate:events";
    const BeforeDestroy = "before:destroy";
    const Destroy = "destroy";
}
export interface IEventListener {
    listenTo(obj: IEventEmitter, event: string, fn: EventHandler, ctx?: any): any;
    listenToOnce(obj: IEventEmitter, event: string, fn: EventHandler, ctx?: any): any;
    stopListening(obj?: IEventEmitter, event?: string, fn?: EventHandler): any;
}
export interface EventHandler {
    (...args: any[]): void;
}
export interface AllEventHandler {
    (eventName: string, ...args: any[]): void;
}
export interface Event {
    name: string;
    once: boolean;
    handler: EventHandler;
    ctx?: any;
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
    listeners?: Map<any, Event[]>;
    /**
     *
     *
     * @type {string}
     * @memberOf IEventEmitter
     */
    listenId?: string;
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
    on(event: '*', fn: AllEventHandler, ctx?: any): this;
    on(event: string, fn: EventHandler, ctx?: any): this;
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
    once(event: string, fn: EventHandler, ctx?: any): this;
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
    off(event?: string, fn?: EventHandler, ctx?: any): this;
    /**
     *
     *
     * @param {string} event
     * @param {...any[]} args
     * @returns {*}
     *
     * @memberOf IEventEmitter
     */
    trigger(event: string, ...args: any[]): this;
}
export interface IViewElement {
    tagName?: string;
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    remove(): any;
}
export interface IViewTemplate {
    template?: string | ((data: any) => string);
    getTemplateData(): any;
    renderTemplate(): void;
}
export interface ICollection<T> {
    length: number;
    item(index: number): T | undefined;
}
export declare namespace ModelEvents {
    const Add = "add";
    const Remove = "remove";
    const Clear = "clear";
    const Sort = "sort";
    const Change = "change";
    const Reset = "reset";
}
export declare namespace MetaKeys {
    const Attributes: symbol;
}
export interface Destroyable {
    destroy(): void;
}
export declare function isDestroyable(a: any): a is Destroyable;

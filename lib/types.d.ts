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
/**
 * An EventListener listens for events on a EventEmitter
 *
 * @export
 * @interface IEventListener
 */
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
    listeners?: Map<any, Event[]>;
    listenId?: string;
    /**
     *
     *
     * @param {'*'} event
     * @param {AllEventHandler} fn
     * @param {*} [ctx]
     * @returns {this}
     *
     * @memberof IEventEmitter
     */
    on(event: '*', fn: AllEventHandler, ctx?: any): this;
    on(event: any, fn: EventHandler, ctx?: any): this;
    /**
     *
     *
     * @param {*} event
     * @param {EventHandler} fn
     * @param {*} [ctx]
     * @returns {this}
     *
     * @memberof IEventEmitter
     */
    once(event: any, fn: EventHandler, ctx?: any): this;
    /**
     *
     *
     * @param {*} [event]
     * @param {EventHandler} [fn]
     * @param {*} [ctx]
     * @returns {this}
     *
     * @memberof IEventEmitter
     */
    off(event?: any, fn?: EventHandler, ctx?: any): this;
    /**
     *
     *
     * @param {*} event
     * @param {...any[]} args
     * @returns {this}
     *
     * @memberof IEventEmitter
     */
    trigger(event: any, ...args: any[]): this;
}
export interface IViewElement {
    /**
     * Tagname of element. This should be set with @attributes decorator
     *
     * @type {string}
     * @memberof IViewElement
     */
    tagName?: string;
    /**
     * This should be set with the @attributes decorator
     *
     * @type {string}
     * @memberof IViewElement
     */
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    /**
     * Remove element from dom
     *
     * @returns {this}
     *
     * @memberof IViewElement
     */
    remove(): this;
}
export interface IViewTemplate {
    /**
     * Template
     *
     *
     * @memberof IViewTemplate
     */
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

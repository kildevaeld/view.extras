import { Constructor } from 'view';
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
export declare function isEventEmitter(a: any): a is IEventEmitter;
export declare function EventEmitter<T extends Constructor<{}>>(Base: T): Constructor<IEventEmitter> & T;
export declare namespace EventEmitter {
    /**
     * If true EventEmitter will call throwError, when when no listeners for the "error" event
     */
    var throwOnError: boolean;
    function throwError(error: Error): void;
    function executeListenerFunction(func: Event[], args?: any[]): void;
}

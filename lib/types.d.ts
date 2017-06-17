import { IView, Constructor, IEventEmitter, EventHandler } from 'view';
export interface IInvoker {
    get<T>(key: any): T;
}
export declare var Invoker: {
    get<T extends IView>(V: Constructor<T>): T;
};
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

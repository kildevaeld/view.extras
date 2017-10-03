
import { Constructor, isFunction } from 'view';

export interface IInvoker {
    get<T>(key: any): T
}

export var Invoker = {
    get<T>(V: Constructor<T>): T {
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
    attributes?: { [key: string]: string };

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
    renderTemplate(): void
}

export interface IViewModel {

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
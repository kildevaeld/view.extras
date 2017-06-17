import { Constructor, BaseView } from 'view';
export interface IViewElement {
    tagName?: string;
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    remove(): any;
}
export declare function ViewElement<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewElement> & T;

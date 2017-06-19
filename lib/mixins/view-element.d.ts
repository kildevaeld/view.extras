import { Constructor, BaseView } from 'view';
import { IViewElement } from '../types';
export declare function ViewElement<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewElement> & T;

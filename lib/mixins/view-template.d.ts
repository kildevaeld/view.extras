import { Constructor, BaseView } from 'view';
import { IViewTemplate } from '../types';
export declare function ViewTemplate<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewTemplate> & T;

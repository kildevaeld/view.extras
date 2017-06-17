import { Constructor, IView } from 'view';
import { IViewMountable } from '../types';
export declare function ViewMountable<T extends Constructor<IView>>(Base: T): Constructor<IViewMountable> & T;

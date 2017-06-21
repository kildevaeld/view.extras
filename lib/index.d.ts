import * as Mixins from './mixins';
export * from './types';
export * from './array-collection';
export * from './collection-view';
export * from './decorators';
export * from './model';
export * from './event-emitter';
export * from './utils';
export { Mixins };
import { IView, Constructor } from 'view';
export declare function mount<T extends IView>(View: Constructor<T>, element: Element | string): T;

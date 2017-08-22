import * as Mixins from './mixins';
export * from './types';
export * from './array-collection';
export * from './collection-view';
export * from './decorators';
export * from './model';
export * from './event-emitter';
export * from './utils';
export * from './controller';
export * from './html';
export { Mixins };
import { IView, Constructor, View } from 'view';
export declare function create<T extends IView>(View: Constructor<T>, element: Element | string): T;
import { IViewTemplate, IViewElement } from './types';
declare const TemplateView_base: Constructor<IViewTemplate> & Constructor<IViewElement> & typeof View;
export declare class TemplateView extends TemplateView_base implements IViewTemplate, IViewElement {
}

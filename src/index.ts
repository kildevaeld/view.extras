
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
export { Mixins }

import { Invoker } from './types'
import { IView, Constructor, isString, View, BaseViewOptions } from 'view';

export function create<T extends IView>(View: Constructor<T>, element: Element | string): T {
	if (isString(element)) {
		element = document.querySelector(element);
	}

	const view = Invoker.get(View);
	view.el = element;

	return view;
}

import { IViewTemplate, IViewElement } from './types'

export interface TemplateViewOptions extends BaseViewOptions<HTMLElement> {
	template?: string | ((data: any) => string)
	model?: any;
}


export class TemplateView extends Mixins.ViewTemplate(Mixins.ViewElement(View)) implements IViewTemplate, IViewElement {

	constructor(options?: TemplateViewOptions) {
		super(options);
		if (options && options.template) {
			this.template = options.template;
		}

		if (options && options.model) {

		}
	}

}


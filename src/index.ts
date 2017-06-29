
import * as Mixins from './mixins';

export * from './types';
export * from './array-collection';
export * from './collection-view';
export * from './decorators';
export * from './model';
export * from './event-emitter';
export * from './utils';
export * from './controller';
//export * from './html';
export { Mixins }

import { Invoker } from './types'
import { IView, Constructor, isString } from 'view';

export function create<T extends IView>(View: Constructor<T>, element: Element | string): T {
	if (isString(element)) {
		element = document.querySelector(element);
	}

	const view = Invoker.get(View);
	view.el = element;

	return view;
}
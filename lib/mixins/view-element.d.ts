import { Constructor, BaseView } from 'view';
import { IViewElement } from '../types';
/**
 *  Ensures the view has an element.
 *  control `tagName`, `className` and `attributes` with the attribute decorator or options argument
 *
 * @export
 * @template T
 * @template E
 * @param {T} Base
 * @returns {(Constructor<IViewElement> & T)}
 */
export declare function ViewElement<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewElement> & T;

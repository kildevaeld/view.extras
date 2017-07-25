import { IViewMountable } from './types';
import { Model } from './model';
/**
 * Mount a view on the target and bind matched element
 *
 * @export
 * @param {string} selector
 * @returns
 */
export declare function mount(selector: string): <T extends IViewMountable>(target: T, prop: PropertyKey) => void;
/**
 *
 * @export
 * @template
 * @param {T} target
 * @param {*} prop
 * @param {TypedPropertyDescriptor<U>} [descriptor]
 */
export declare function property<T extends Model, U>(target: T, prop: any, descriptor?: TypedPropertyDescriptor<U>): void;

import { IViewMountable } from './types';
import { Model } from './model';
export declare function view(selector: string): <T extends IViewMountable>(target: T, prop: PropertyKey) => void;
export declare function observable<T extends Model, U>(target: T, prop: any, descriptor?: TypedPropertyDescriptor<U>): void;

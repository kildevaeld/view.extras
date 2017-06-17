import { Constructor } from 'view';
import { IEventListener } from '../types';
export declare function EventListener<T extends Constructor<{}>>(Base: T): Constructor<IEventListener> & T;

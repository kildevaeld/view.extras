import { IEventEmitter } from 'mixins.events';
export declare class EventEmitterBase {
}
declare const EventEmitter_base: (new (...args: any[]) => IEventEmitter) & typeof EventEmitterBase;
export declare class EventEmitter extends EventEmitter_base implements IEventEmitter {
}

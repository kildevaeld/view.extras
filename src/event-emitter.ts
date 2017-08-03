import { EventEmitter as EE, IEventEmitter } from 'mixins.events';

// Typescript typesystem quirk.
export class EventEmitterBase { }
export class EventEmitter extends EE(EventEmitterBase) implements IEventEmitter {

}
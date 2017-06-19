import { IEventEmitter } from './types';
import * as Mixins from './mixins';

// Typescript typesystem quirk.
export class EventEmitterBase { }
export class EventEmitter extends Mixins.EventEmitter(EventEmitterBase) implements IEventEmitter {

}
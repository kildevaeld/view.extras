"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixins_events_1 = require("mixins.events");
// Typescript typesystem quirk.
class EventEmitterBase {
}
exports.EventEmitterBase = EventEmitterBase;
class EventEmitter extends mixins_events_1.EventEmitter(EventEmitterBase) {
}
exports.EventEmitter = EventEmitter;

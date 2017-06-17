"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mixins = require("./mixins");
// Typescript typesystem quirk.
class EventEmitterBase {
}
exports.EventEmitterBase = EventEmitterBase;
class EventEmitter extends Mixins.EventEmitter(EventEmitterBase) {
}
exports.EventEmitter = EventEmitter;

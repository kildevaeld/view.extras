"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
exports.Invoker = {
    get(V) {
        return Reflect.construct(V, []);
    }
};
var Events;
(function (Events) {
    Events.BeforeRender = "before:render";
    Events.Render = "render";
    Events.BeforeSetElement = "before:set:element";
    Events.SetElement = "set:element";
    Events.BeforeDelegateEvents = "before:delegate:events";
    Events.DelegateEvents = "delegate:events";
    Events.BeforeUndelegateEvents = "before:undelegate:events";
    Events.UndelegateEvents = "undelegate:events";
    Events.BeforeDestroy = "before:destroy";
    Events.Destroy = "destroy";
})(Events = exports.Events || (exports.Events = {}));
var ModelEvents;
(function (ModelEvents) {
    ModelEvents.Add = "add";
    ModelEvents.Remove = "remove";
    ModelEvents.Clear = "clear";
    ModelEvents.Sort = "sort";
})(ModelEvents = exports.ModelEvents || (exports.ModelEvents = {}));
var MetaKeys;
(function (MetaKeys) {
    MetaKeys.Attributes = Symbol("attributes");
})(MetaKeys = exports.MetaKeys || (exports.MetaKeys = {}));
function isDestroyable(a) {
    return a && view_1.isFunction(a.destroy);
}
exports.isDestroyable = isDestroyable;

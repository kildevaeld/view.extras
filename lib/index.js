"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Mixins = require("./mixins");
exports.Mixins = Mixins;
__export(require("./types"));
__export(require("./array-collection"));
__export(require("./collection-view"));
__export(require("./decorators"));
__export(require("./model"));
__export(require("./event-emitter"));
__export(require("./utils"));
__export(require("./controller"));
__export(require("./html"));
const types_1 = require("./types");
const view_1 = require("view");
function create(View, element) {
    if (view_1.isString(element)) {
        element = document.querySelector(element);
    }
    const view = types_1.Invoker.get(View);
    view.el = element;
    return view;
}
exports.create = create;
class TemplateView extends Mixins.ViewTemplate(Mixins.ViewElement(view_1.View)) {
}
exports.TemplateView = TemplateView;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_view_1 = require("view/lib/abstract-view");
class Controller extends abstract_view_1.AbstractView {
    setElement(el, _) {
        this._el = el;
    }
}
exports.Controller = Controller;

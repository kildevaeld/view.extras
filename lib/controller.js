"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
class Controller extends view_1.AbstractView {
    setElement(el, _) {
        this._el = el;
    }
}
exports.Controller = Controller;

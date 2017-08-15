"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const types_1 = require("../types");
function ViewMountable(Base) {
    return class extends Base {
        constructor(...args) {
            super(...args);
            if (this._views)
                this._bindViews(this._views);
        }
        render() {
            super.render();
            this._renderViews(this._views);
            return this;
        }
        destroy() {
            if (this._views) {
                this._unbindViews(this._views);
            }
            super.destroy();
        }
        _bindViews(views) {
            let o;
            for (const key in views) {
                o = views[key];
                let view = types_1.Invoker.get(o.view);
                this[key] = view;
            }
        }
        _unbindViews(views) {
            const self = this;
            for (const key in views) {
                if (self[key] && self[key] instanceof view_1.BaseView) {
                    self[key].destroy();
                    self[key] = void 0;
                }
            }
        }
        _renderViews(views) {
            let el, o;
            for (const key in views) {
                o = views[key];
                let sel = view_1.normalizeUIString(o.selector, this._ui || {});
                el = this.el.querySelector(sel);
                if (!el && !o.optional)
                    throw new ReferenceError(`selector "${sel}" for view ${o.view.name} not found in dom`);
                let view = this[key];
                if (!view)
                    throw new ReferenceError(`view "${o.view.name}" not mount`);
                view.setElement(el, false);
                view.render();
            }
        }
    };
}
exports.ViewMountable = ViewMountable;

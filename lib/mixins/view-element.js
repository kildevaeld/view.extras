"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
function ViewElement(Base) {
    return class extends Base {
        constructor(...args) {
            super(...args);
            if (!this.el)
                this._ensureElement();
        }
        _ensureElement() {
            if (this._el)
                return;
            const tagName = view_1.getOption('tagName', [this.options, this]) || 'div', className = view_1.getOption('className', [this.options, this]), attr = view_1.getOption('attributes', [this.options, this]), el = document.createElement(tagName);
            if (className) {
                let classes = className.split(' ').map(m => m.trim());
                el.classList.add(...classes);
            }
            if (attr) {
                for (let key in attr) {
                    el.setAttribute(key, attr[key]);
                }
            }
            this.setElement(el);
        }
        remove() {
            if (this.el && this.el.parentNode) {
                this.undelegateEvents();
                this.el.parentNode.removeChild(this.el);
                this.el = void 0;
            }
            return this;
        }
        destroy() {
            super.destroy();
            if (this.el && this.__created) {
                this.remove();
            }
        }
    };
}
exports.ViewElement = ViewElement;

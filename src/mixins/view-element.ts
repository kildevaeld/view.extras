
import { Constructor, BaseView, getOption } from 'view';
import { IViewElement } from '../types'


export function ViewElement<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewElement> & T {
    return class extends Base {
        __created: boolean;
        constructor(...args: any[]) {
            super(...args);
            if (!this.el) this._ensureElement();
        }

        protected _ensureElement() {
            if (this._el) return;
            const tagName = getOption<string>('tagName', [this.options, this]) || 'div',
                className = getOption<string>('className', [this.options, this]),
                attr = getOption<{ [key: string]: string }>('attributes', [this.options, this]),
                el = document.createElement(tagName);

            if (className) {
                let classes = className.split(' ').map(m => m.trim());
                el.classList.add(...classes);
            }
            if (attr) {
                for (let key in attr) {
                    el.setAttribute(key, attr[key]);
                }
            }
            this.setElement(el as any);
        }

        remove() {
            if (this.el && this.el!.parentNode) {
                this.undelegateEvents();
                this.el!.parentNode!.removeChild(this.el);
                this.el = void 0;
            }
            return this;
        }

        destroy() {
            super.destroy()
            if (this.el && this.__created) {
                this.remove();
            }
        }
    }
}
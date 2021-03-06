
import { Constructor, BaseView, getOption } from 'view';
import { IViewElement } from '../types'


/**
 *  Ensures the view has an element.
 *  control `tagName`, `className` and `attributes` with the attribute decorator or options argument
 * 
 * @export
 * @template T 
 * @template E 
 * @param {T} Base 
 * @returns {(Constructor<IViewElement> & T)} 
 */
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
                // IE < 11 does not support multiple arguments in add/remove
                className.split(' ').map(m => m.trim())
                    .forEach(cl => el.classList.add(cl))
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
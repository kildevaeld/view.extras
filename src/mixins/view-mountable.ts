import { Constructor, BaseView, BaseViewConstructor, IView, normalizeUIString } from 'view'
import { Invoker, IViewMountable } from '../types';

interface ViewMapOptions<T extends BaseView<U>, U extends Element> {
    selector: string;
    view: BaseViewConstructor<T, U>
    [key: string]: any;
}

interface ViewMap {
    [key: string]: ViewMapOptions<any, any>;
}


export function ViewMountable<T extends Constructor<IView>>(Base: T): Constructor<IViewMountable> & T {
    return class extends Base {
        _views: ViewMap
        constructor(...args: any[]) {
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

        private _bindViews(views: ViewMap) {
            let o: ViewMapOptions<any, any>;
            for (const key in views) {
                o = views[key];
                let view = Invoker.get<BaseView<Element>>(o.view);
                (<any>this)[key] = view;
            }
        }

        private _unbindViews(views: ViewMap) {
            const self = this as any;
            for (const key in views) {
                if (self[key] && self[key] instanceof BaseView) {
                    self[key].destroy();
                    self[key] = void 0;
                }
            }
        }

        private _renderViews(views: ViewMap) {
            let el: Element | null, o: ViewMapOptions<any, any>;
            for (const key in views) {
                o = views[key];

                let sel = normalizeUIString(o.selector, (<any>this)._ui || {})

                el = this.el!.querySelector(sel);
                if (!el) throw new ReferenceError(`selector "${sel}" for view ${o.view.name} not found in dom`);

                let view: BaseView<Element> = (<any>this)[key];
                if (!view) throw new ReferenceError(`view "${o.view.name}" not mount`);
                view.setElement(el, false);
                view.render();
            }
        }
    }
}
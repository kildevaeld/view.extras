import { Constructor, BaseView, result } from 'view';

export interface IViewTemplate {
    template?: string | ((data: any) => string);
    getTemplateData(): any;
    renderTemplate(): void
}

export function ViewTemplate<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewTemplate> & T {
    return class extends Base {
        data: any
        getTemplateData() {
            let data = result(this, 'data') || {};
            return data;
        }

        render() {
            if (!this.el) return this;
            this.undelegateEvents();
            this.renderTemplate();
            super.render();
            return this;
        }

        destroy() {
            let data = this.getTemplateData();
            let template = result(this, 'template', data);
            if (template)
                this.el!.innerHTML = ''
            super.destroy();
        }

        renderTemplate() {

            if (!this.el) return;
            let data = this.getTemplateData();
            let template = result(this, 'template', data);
            if (!template) return;

            this.el.innerHTML = template;

        }

    }
}
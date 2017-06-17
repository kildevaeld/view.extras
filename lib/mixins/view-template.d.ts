import { Constructor, BaseView } from 'view';
export interface IViewTemplate {
    template?: string | ((data: any) => string);
    getTemplateData(): any;
    renderTemplate(): void;
}
export declare function ViewTemplate<T extends Constructor<BaseView<E>>, E extends Element>(Base: T): Constructor<IViewTemplate> & T;

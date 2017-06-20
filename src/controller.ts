import { AbstractView } from 'view/lib/abstract-view'

export class Controller extends AbstractView<HTMLElement> {

    setElement(el: HTMLElement, _?: boolean) {
        this._el = el;
    }

}
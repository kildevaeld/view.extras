import { AbstractView } from 'view'

export class Controller extends AbstractView<HTMLElement> {

    setElement(el: HTMLElement, _?: boolean) {
        this._el = el;
    }

}
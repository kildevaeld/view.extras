import { Constructor, BaseView } from 'view';
import { IViewModel } from '../types';


export function ViewModel<T extends Constructor<BaseView<E>>, E extends Element, M extends Constructor<M>>(Base: T, Model: M): Constructor<IViewModel> & T {

    return class extends Base {
        model: M


    }
}
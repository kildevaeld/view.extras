import { Constructor } from 'view';
import { ArrayCollection } from '../array-collection';
import { RestModel, IRestModel } from './rest-model';
export interface IRestCollection<T extends IRestModel> {
    url: string;
    Model: Constructor<T>;
    fetch(): Promise<T[]>;
    create(options: T | object): Promise<T>;
    parseModel(options: T | object): T | undefined;
}
export declare function restCollection<T extends Constructor<ArrayCollection<E>>, E extends RestModel = RestModel>(Base: T): Constructor<IRestCollection<E>> & T;
export interface RestCollectionOptions<M> {
    url: string;
    Model?: Constructor<M>;
}
declare const RestCollection_base: Constructor<IRestCollection<T>> & Constructor<ArrayCollection<T>>;
export declare class RestCollection<T extends RestModel = RestModel> extends RestCollection_base {
    readonly options: RestCollectionOptions<T>;
    constructor(options?: RestCollectionOptions<T>);
}

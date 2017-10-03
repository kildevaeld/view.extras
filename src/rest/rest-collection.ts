import { Constructor, triggerMethodOn } from 'view';
import { ICollection } from '../types';
import { ArrayCollection } from '../array-collection';
import { Model } from '../model';
import { Invoker } from '../types';
import { FetchRequest, RequestResult } from './request';
import { RestModel, IRestModel } from './rest-model';

export interface IRestCollection<T extends IRestModel> {
    url: string;
    Model: Constructor<T>;
    fetch(): Promise<T[]>;
    create(options: T | object): Promise<T>;
    parseModel(options: T | object): T | undefined;


}


export function restCollection<T extends Constructor<ArrayCollection<E>>, E extends RestModel = RestModel>(Base: T): Constructor<IRestCollection<E>> & T {

    return class extends Base implements IRestCollection<E> {
        private _rootUrl: string | undefined;

        Model: Constructor<E> = RestModel as Constructor<E>;

        set url(path: string) {
            this._rootUrl = path;
        }

        get url() { return this._rootUrl; }



        fetch(): Promise<E[]> {
            triggerMethodOn(this, 'will:fetch');
            return FetchRequest("GET", this.url)
                .then(m => {

                    const result = this.parseResponse(m),
                        models = result.map(m => this.parseModel(m));

                    triggerMethodOn(this, 'fetch', models);

                    this.reset(models);

                    return models;
                })
        }


        create(options: E | object): Promise<E> {

            if (options instanceof Model) {
                options = options.toJSON();
            }

            let model = this.parseModel(options);

            return model.save()
                .then(() => {
                    this.push(model);
                    return model;
                });

        }

        parseResponse(data: RequestResult): any[] {
            return data.body;
        }

        parseModel(data: E | object) {

            if (data instanceof this.Model) {
                return data;
            } else if (data instanceof Model) {
                data = data.toJSON();
            }


            const model = Invoker.get(this.Model);
            model.set(data, { silent: true });
            model.rootUrl = this.url;
            console.log(model)
            return model;
        }

    }

}




export interface RestCollectionOptions<M> {
    url: string;
    Model?: Constructor<M>;
}

export class RestCollection<T extends RestModel = RestModel> extends restCollection<Constructor<ArrayCollection<T>>, T>(ArrayCollection) {


    constructor(public readonly options?: RestCollectionOptions<T>) {
        super();
        this.options = options || { url: void 0 };
        if (this.options.url) this.url = options.url;
        this.Model = options.Model || this.Model;
    }

}
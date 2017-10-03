
import { Model } from '../model';
import { triggerMethodOn } from 'view';
import { FetchRequest, RequestResult, Method } from './request';

export interface IRestModel extends Model {

    rootUrl: string;
    idAttribute: string;
    updateMethod: string;

    readonly id: string | undefined;

    save(): Promise<void>;
    fetch(): Promise<void>;

}

export class RestModel extends Model implements IRestModel {
    rootUrl: string;
    idAttribute: string = "id";
    updateMethod: "PUT" | "PATCH";

    get id(): string | undefined {
        return this.get(this.idAttribute);
    }



    save(): Promise<void> {

        triggerMethodOn(this, 'will:save');
        let method: Method = this.id ? (this.updateMethod || 'PUT') : 'POST';

        let data: any = this.toJSON();
        if (method === "PATCH") {
            let changes = this.lastChanged;
            if (Object.keys(changes).length == 0) {
                return Promise.resolve();
            }
            data = {};
            for (let k in changes) {
                data[k] = changes[k][1];
            }
        }

        console.log('DATA', data);

        return FetchRequest(method, this.getUrl(), data)
            .then(resp => {
                triggerMethodOn(this, 'save', resp);
                const data = this.parse(resp);
                this.set(data);
            });

    }

    fetch(): Promise<void> {
        triggerMethodOn(this, 'will:fetch');
        if (!this.id) {
            return Promise.reject(new Error("no id"));
        }

        if (!this.rootUrl) return Promise.reject(new Error('no url'));

        return FetchRequest("GET", this.getUrl())
            .then(m => {

                const data = this.parse(m);
                triggerMethodOn(this, 'fetch', data);

                this.set(data);

            });
    }

    parse(resp: RequestResult): { [key: string]: any } {
        return resp.body;
    }

    protected getUrl() {
        let url = this.rootUrl;
        if (!url) throw Error('no url');
        if (url[url.length - 1] !== '/') url += '/';
        if (this.id) url += this.id;

        return url;
    }


}
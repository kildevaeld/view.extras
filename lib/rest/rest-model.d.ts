import { Model } from '../model';
import { RequestResult } from './request';
export interface IRestModel extends Model {
    rootUrl: string;
    idAttribute: string;
    updateMethod: string;
    readonly id: string | undefined;
    save(): Promise<void>;
    fetch(): Promise<void>;
}
export declare class RestModel extends Model implements IRestModel {
    rootUrl: string;
    idAttribute: string;
    updateMethod: "PUT" | "PATCH";
    readonly id: string | undefined;
    save(): Promise<void>;
    fetch(): Promise<void>;
    parse(resp: RequestResult): {
        [key: string]: any;
    };
    protected getUrl(): string;
}

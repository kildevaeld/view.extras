export declare type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
export interface RequestResult {
    headers: [string, string][];
    status: number;
    body: any;
}
export interface RequestFunc {
    (method: Method, url: string, data?: object): Promise<RequestResult>;
}
export declare var FetchRequest: RequestFunc;

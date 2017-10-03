


export type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE";

export interface RequestResult {
    headers: [string, string][]
    status: number;
    body: any;
}

export interface RequestFunc {
    (method: Method, url: string, data?: object): Promise<RequestResult>;
}

export var FetchRequest: RequestFunc = (method: Method, url: string, data?: object) => {

    return fetch(url, {
        method: method,
        body: (data && ~['POST', 'PUT', 'PATCH'].indexOf(method)) ? JSON.stringify(data) : void 0
    }).then(m => {
        if (m.status > 100 && m.status <= 300) {
            return m.json().then(json => {
                return {
                    headers: [...m.headers.entries()],
                    status: m.status,
                    body: json
                }
            })
        }
        return Promise.reject(new Error("error"));
    })
}
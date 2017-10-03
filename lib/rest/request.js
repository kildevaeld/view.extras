"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRequest = (method, url, data) => {
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
                };
            });
        }
        return Promise.reject(new Error("error"));
    });
};

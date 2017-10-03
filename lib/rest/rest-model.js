"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const view_1 = require("view");
const request_1 = require("./request");
class RestModel extends model_1.Model {
    constructor() {
        super(...arguments);
        this.idAttribute = "id";
    }
    get id() {
        return this.get(this.idAttribute);
    }
    save() {
        view_1.triggerMethodOn(this, 'will:save');
        let method = this.id ? (this.updateMethod || 'PUT') : 'POST';
        let data = this.toJSON();
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
        return request_1.FetchRequest(method, this.getUrl(), data)
            .then(resp => {
            view_1.triggerMethodOn(this, 'save', resp);
            const data = this.parse(resp);
            this.set(data);
        });
    }
    fetch() {
        view_1.triggerMethodOn(this, 'will:fetch');
        if (!this.id) {
            return Promise.reject(new Error("no id"));
        }
        if (!this.rootUrl)
            return Promise.reject(new Error('no url'));
        return request_1.FetchRequest("GET", this.getUrl())
            .then(m => {
            const data = this.parse(m);
            view_1.triggerMethodOn(this, 'fetch', data);
            this.set(data);
        });
    }
    parse(resp) {
        return resp.body;
    }
    getUrl() {
        let url = this.rootUrl;
        if (!url)
            throw Error('no url');
        if (url[url.length - 1] !== '/')
            url += '/';
        if (this.id)
            url += this.id;
        return url;
    }
}
exports.RestModel = RestModel;

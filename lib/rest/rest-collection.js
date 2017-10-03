"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const array_collection_1 = require("../array-collection");
const model_1 = require("../model");
const types_1 = require("../types");
const request_1 = require("./request");
const rest_model_1 = require("./rest-model");
function restCollection(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.Model = rest_model_1.RestModel;
        }
        set url(path) {
            this._rootUrl = path;
        }
        get url() { return this._rootUrl; }
        fetch() {
            view_1.triggerMethodOn(this, 'will:fetch');
            return request_1.FetchRequest("GET", this.url)
                .then(m => {
                const result = this.parseResponse(m), models = result.map(m => this.parseModel(m));
                view_1.triggerMethodOn(this, 'fetch', models);
                this.reset(models);
                return models;
            });
        }
        create(options) {
            if (options instanceof model_1.Model) {
                options = options.toJSON();
            }
            let model = this.parseModel(options);
            return model.save()
                .then(() => {
                this.push(model);
                return model;
            });
        }
        parseResponse(data) {
            return data.body;
        }
        parseModel(data) {
            if (data instanceof this.Model) {
                return data;
            }
            else if (data instanceof model_1.Model) {
                data = data.toJSON();
            }
            const model = types_1.Invoker.get(this.Model);
            model.set(data, { silent: true });
            model.rootUrl = this.url;
            return model;
        }
    };
}
exports.restCollection = restCollection;
class RestCollection extends restCollection(array_collection_1.ArrayCollection) {
    constructor(options) {
        super();
        this.options = options;
        this.options = options || { url: void 0 };
        if (this.options.url)
            this.url = options.url;
        this.Model = options.Model || this.Model;
    }
}
exports.RestCollection = RestCollection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
function Routable(Base) {
    return class extends Base {
        constructor(...args) {
            super(...args);
        }
        destroy() {
            if (view_1.isFunction(Base.prototype.destroy)) {
                Base.prototype.destroy.call(this);
            }
            this.destroyRoutes();
        }
        createRoutes() {
            this.destroyRoutes();
            for (let route of this.routes) {
                this._createRoute(route);
            }
        }
        destroyRoutes() {
            this.router.removeAllRoutes();
        }
        _createRoute(route) {
            this.router.route(route.path, (path, ...args) => {
                if (view_1.isFunction(route.handler))
                    route.handler.call(route.ctx || this, [path, ...args]);
                else if (view_1.isFunction(this[route.handler]))
                    this[route.handler].call(route.ctx || this, [path, ...args]);
            });
        }
    };
}
exports.Routable = Routable;
function route(route) {
    return function (target, property, desc) {
        let routes = (target.routes ? target.routes : target.routes = []);
        if (!desc || !view_1.isFunction(desc.value))
            throw new TypeError('property must be a function');
        routes.push({
            handler: property,
            path: route
        });
    };
}
exports.route = route;

import { Constructor, isFunction, isString } from 'view';
import { RouteHandler, BaseRouter } from './router'

export interface Route {
    handler: RouteHandler | PropertyKey;
    path: string | RegExp;
    ctx?: any;
}

export interface IRoutable {
    routes: Route[];
    createRoutes();
    destroyRoutes();
}

export function Routable<T extends Constructor<{}>>(Base: T): Constructor<IRoutable> & T {
    return class extends Base {
        routes: Route[];
        router: BaseRouter;
        constructor(...args: any[]) {
            super(...args);

        }

        destroy() {
            if (isFunction(Base.prototype.destroy)) {
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

        private _createRoute(route: Route) {
            this.router.route(route.path, (path: string, ...args: any[]) => {
                if (isFunction(route.handler)) route.handler.call(route.ctx || this, [path, ...args]);
                else if (isFunction(this[route.handler]))
                    this[route.handler].call(route.ctx || this, [path, ...args]);
            });
        }
    }
}

export function route(route: string | RegExp) {
    return function <T extends IRoutable>(target: T, property: PropertyKey, desc?: TypedPropertyDescriptor<RouteHandler>) {
        let routes = (target.routes ? target.routes : target.routes = []);
        if (!desc || !isFunction(desc.value)) throw new TypeError('property must be a function');
        routes.push({
            handler: property,
            path: route
        });
    }
}
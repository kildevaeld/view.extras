import { Constructor } from 'view';
import { RouteHandler } from './router';
export interface Route {
    handler: RouteHandler | PropertyKey;
    path: string | RegExp;
    ctx?: any;
}
export interface IRoutable {
    routes: Route[];
    createRoutes(): any;
    destroyRoutes(): any;
}
export declare function Routable<T extends Constructor<{}>>(Base: T): Constructor<IRoutable> & T;
export declare function route(route: string | RegExp): <T extends IRoutable>(target: T, property: PropertyKey, desc?: TypedPropertyDescriptor<RouteHandler>) => void;

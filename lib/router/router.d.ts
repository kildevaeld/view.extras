import { HistoryApi, NavigateOptions } from './history';
import { EventEmitter } from 'eventsjs';
export interface RouteHandler {
    (path: string, ...args: string[]): void;
}
export interface IRouterOptions {
    execute?: (callback: RouteHandler, name: string, args: any[]) => void;
    pushState?: boolean;
}
export declare class BaseRouter extends EventEmitter {
    options: IRouterOptions;
    history: HistoryApi;
    constructor(options?: IRouterOptions);
    route(route: RegExp | string, name: RouteHandler | string, handler?: RouteHandler): this;
    protected execute(callback: RouteHandler, name: string, route: string | RegExp, args: any[]): void;
    navigate(fragment: string, options?: NavigateOptions): this;
    start(): void;
    private _routeToRegExp(route);
    private _extractParameters(route, fragment);
    drop(): void;
}

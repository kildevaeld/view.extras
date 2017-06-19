import { EventEmitter } from '../event-emitter';
export declare class Handler {
    route: RegExp;
    callback: (path: string) => void;
}
export interface NavigateOptions {
    trigger?: boolean;
    replace?: boolean;
}
export declare class HistoryApi extends EventEmitter {
    handlers: Handler[];
    location: Location;
    history: History;
    private _started;
    private _wantsPushState;
    private _wantsHashChange;
    root: string;
    options: any;
    fragment: string;
    readonly started: boolean;
    constructor(options?: any);
    atRoot(): boolean;
    getHash(window?: Window): string;
    getFragment(fragment?: string, _?: boolean): string;
    start(options?: any): boolean;
    stop(): void;
    route(route: any, callback: any): void;
    checkUrl(): boolean;
    loadUrl(fragment?: string): boolean;
    navigate(fragment: string, options?: NavigateOptions): any;
    _updateHash(location: Location, fragment: string, replace: boolean): void;
}

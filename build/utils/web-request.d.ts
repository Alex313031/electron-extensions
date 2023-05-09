import { Session } from 'electron';
declare type WebRequestWithCallback = 'onBeforeRequest' | 'onBeforeSendHeaders' | 'onHeadersReceived';
declare type WebRequestWithoutCallback = 'onSendHeaders' | 'onResponseStarted' | 'onBeforeRedirect' | 'onCompleted' | 'onErrorOccurred';
export declare type WebRequestMethod = WebRequestWithCallback | WebRequestWithoutCallback;
export declare type URLPattern = string;
export interface IFilter {
    urls: string[];
}
export interface IListener {
    id: string;
    urls: string[];
    action: Function;
    context: IContext;
}
export interface IContext {
    priority?: number;
    origin?: string;
    order: number;
}
export interface IApplier {
    apply: Function;
    context: IContext;
}
export interface IAliasParameters {
    unbind: boolean;
    filter: IFilter;
    action: Function | null;
    context: Record<string, any>;
}
export declare type IListenerCollection = Map<IListener['id'], IListener>;
export declare class BetterWebRequest {
    webRequest: any;
    private orderIndex;
    private listeners;
    private filters;
    private resolvers;
    constructor(webRequest: any);
    private get nextIndex();
    getListeners(): Map<WebRequestMethod, IListenerCollection>;
    getListenersFor(method: WebRequestMethod): IListenerCollection;
    getFilters(): Map<WebRequestMethod, Set<string>>;
    getFiltersFor(method: WebRequestMethod): Set<string>;
    hasCallback(method: WebRequestMethod): boolean;
    alias(method: WebRequestMethod, parameters: any): void | {
        id: string;
        urls: string[];
        action: Function;
        context: {
            order: number;
            priority?: number;
            origin?: string;
        };
    };
    addListener(method: WebRequestMethod, filter: IFilter, action: Function, outerContext?: Partial<IContext>): {
        id: string;
        urls: string[];
        action: Function;
        context: {
            order: number;
            priority?: number;
            origin?: string;
        };
    };
    removeListener(method: WebRequestMethod, id: IListener['id']): void;
    clearListeners(method: WebRequestMethod): void;
    setResolver(method: WebRequestMethod, resolver: Function): void;
    matchListeners(url: string, listeners: IListenerCollection): IListener[];
    private listenerFactory;
    private processRequests;
    private makeApplier;
    private mergeFilters;
    private parseArguments;
    private identifyAction;
}
declare const extendElectronWebRequest: (session: Session) => Session;
export default extendElectronWebRequest;

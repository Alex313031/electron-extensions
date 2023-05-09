export declare class WebRequestEvent {
    private name;
    private callbackIdMap;
    constructor(name: string);
    addListener(callback: Function, filters?: string[]): void;
    removeListener(callback: Function): void;
}

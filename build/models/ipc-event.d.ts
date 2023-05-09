export declare class IpcEvent {
    private name;
    constructor(name: string);
    addListener(callback: any): void;
    removeListener(callback: any): void;
}

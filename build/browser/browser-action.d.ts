/// <reference types="node" />
import { EventEmitter } from 'events';
declare type IconType = string | {
    [key: string]: string;
};
interface IBrowserActionInfo {
    icon?: IconType;
    popup?: string;
    title?: string;
    badgeText?: string;
    badgeBackgroundColor?: string | number[];
}
interface IBrowserAction extends IBrowserActionInfo {
    baseUrl: string;
    extensionId: string;
    tabs: Map<number, IBrowserActionInfo>;
}
export declare interface BrowserActionAPI {
    on(event: 'updated', listener: (action: IBrowserAction) => void): this;
    on(event: 'loaded', listener: (action: IBrowserAction) => void): this;
    on(event: string, listener: Function): this;
}
export declare class BrowserActionAPI extends EventEmitter {
    private sessionActionMap;
    constructor();
    private getAllHandler;
    private getOrCreate;
    loadFromManifest(session: Electron.Session, extension: Electron.Extension): IBrowserAction;
    getAllInSession(session: Electron.Session): IBrowserAction[];
    getAllInTab(tabId: number): IBrowserAction[];
    onClicked(extensionId: string): void;
}
export {};

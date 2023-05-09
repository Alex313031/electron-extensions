/// <reference types="node" />
/// <reference types="electron" />
import { EventEmitter } from 'events';
export declare const sendToExtensionPages: (channel: string, ...args: any[]) => void;
export declare interface BackgroundPages {
    on(event: 'created', listener: (webContents: Electron.WebContents) => void): this;
    on(event: string, listener: Function): this;
}
export declare class BackgroundPages extends EventEmitter {
    constructor();
    get(extensionId: string, session: Electron.Session): Electron.WebContents;
}

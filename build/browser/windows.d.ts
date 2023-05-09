/// <reference types="chrome" />
/// <reference types="node" />
import { BrowserWindow } from 'electron';
import { EventEmitter } from 'events';
interface IWindowsEvents {
    onCreateDetails: (window: BrowserWindow, details: chrome.windows.Window) => void;
    onBeforeFocusNextZOrder: (windowId: number) => number;
    onCreate: (details: chrome.windows.CreateData) => Promise<number>;
}
export declare interface WindowsAPI {
    on(event: 'focused', listener: (windowId: number) => void): this;
    on(event: 'created', listener: (window: chrome.windows.Window) => void): this;
    on(event: 'will-remove', listener: (windowId: number) => void): this;
    on(event: string, listener: Function): this;
}
export declare class WindowsAPI extends EventEmitter implements IWindowsEvents {
    private windows;
    private detailsCache;
    private lastFocused;
    constructor();
    onBeforeFocusNextZOrder: (windowId: number) => number;
    onCreateDetails: (window: BrowserWindow, details: chrome.windows.Window) => void;
    onCreate: (details: chrome.windows.CreateData) => Promise<number>;
    update(windowId: number, updateInfo: chrome.windows.UpdateInfo): chrome.windows.Window;
    focus(windowId: number): void;
    remove(windowId: number): void;
    observe(window: BrowserWindow): void;
    getWindowById(id: number): BrowserWindow;
    create(details: chrome.windows.CreateData): Promise<chrome.windows.Window>;
    getLastFocused(getInfo: chrome.windows.GetInfo): chrome.windows.Window;
    get(id: number, getInfo: chrome.windows.GetInfo): chrome.windows.Window;
    getAll(getInfo: chrome.windows.GetInfo): chrome.windows.Window[];
    private getHandler;
    private getCurrent;
    private createDetails;
    private getDetails;
    private getDetailsMatchingGetInfo;
    private onRemoved;
    private onCreated;
}
export {};

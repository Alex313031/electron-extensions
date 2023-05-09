/// <reference types="chrome" />
/// <reference types="node" />
import { Tab } from '../interfaces/tabs';
import { EventEmitter } from 'events';
export declare const getParentWindowOfTab: (tab: Tab) => any;
interface ITabsEvents {
    onCreateDetails: (tab: Tab, details: chrome.tabs.Tab) => void;
    onCreate: (details: chrome.tabs.CreateProperties) => Promise<number>;
}
export declare interface TabsAPI {
    on(event: 'updated', listener: (tabId: number, changeInfo: chrome.tabs.TabChangeInfo, details: chrome.tabs.Tab) => void): this;
    on(event: 'activated', listener: (tabId: number, windowId: number, ...additionalArgs: any[]) => void): this;
    on(event: 'will-remove', listener: (tabId: number) => void): this;
    on(event: string, listener: Function): this;
}
export declare class TabsAPI extends EventEmitter implements ITabsEvents {
    private tabs;
    private detailsCache;
    constructor();
    onCreateDetails: (tab: Tab, details: chrome.tabs.Tab) => void;
    onCreate: (details: chrome.tabs.CreateProperties) => Promise<number>;
    update(tabId: number, updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
    activate(tabId: number, ...additionalArgs: any[]): void;
    get(tabId: number): chrome.tabs.Tab;
    remove(tabIds: number | number[]): void;
    getAllInWindow(windowId: number): chrome.tabs.Tab[];
    getSelected(windowId: number): chrome.tabs.Tab;
    query(info?: chrome.tabs.QueryInfo): chrome.tabs.Tab[];
    create(details: chrome.tabs.CreateProperties): Promise<chrome.tabs.Tab>;
    observe(tab: Tab): void;
    reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties): void;
    getTabById(id: number): Tab;
    getDetails: (tab: Tab) => chrome.tabs.Tab;
    private getCurrent;
    private insertCSS;
    private createDetails;
    private onUpdated;
    private onRemoved;
    private onCreated;
}
export {};

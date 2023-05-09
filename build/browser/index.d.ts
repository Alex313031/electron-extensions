import { CookiesAPI } from './cookies';
import { TabsAPI } from './tabs';
import { BackgroundPages } from './background-pages';
import { WindowsAPI } from './windows';
import { WebRequestAPI } from './web-request-api';
import { BrowserActionAPI } from './browser-action';
export declare class Extensions {
    static instance: Extensions;
    tabs: TabsAPI;
    cookies: CookiesAPI;
    windows: WindowsAPI;
    webRequest: WebRequestAPI;
    browserAction: BrowserActionAPI;
    backgroundPages: BackgroundPages;
    initializeSession(session: Electron.Session, preloadPath: string): void;
}
export declare const extensions: Extensions;
export * from '../utils/session';

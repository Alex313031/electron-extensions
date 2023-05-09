/// <reference types="electron" />
export declare const isBackgroundPage: (wc: Electron.WebContents) => boolean;
export declare const webContentsInvoke: (wc: Electron.WebContents, channel: string, ...args: any[]) => Promise<any>;

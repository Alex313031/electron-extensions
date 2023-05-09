interface IInvokeOptions {
    noop?: boolean;
    noopValue?: any;
    includeId?: boolean;
    serialize?: (...args: any[]) => any[];
}
export declare const ipcInvoker: (name: string, { noop, noopValue, includeId, serialize }?: IInvokeOptions) => (...args: any[]) => Promise<any>;
export {};

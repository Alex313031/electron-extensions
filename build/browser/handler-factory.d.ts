export declare class HandlerFactory {
    static create(scope: string, bind: any): (name: string, fn: (...args: any[]) => void, includeEvent?: boolean) => void;
}

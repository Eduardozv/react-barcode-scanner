export declare const indempotent: <T extends (...args: any[]) => any>(action: T) => (...args: any) => ReturnType<T>;
export declare const eventListener: <T extends HTMLElement>(target: T, event: string, errorEvent?: string) => Promise<unknown>;
export declare const timeout: (milliseconds: number) => Promise<void>;

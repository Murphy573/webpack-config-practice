;

export interface ICar {
    move(): void;
}

export interface IVoice {
    sound(): void;
}

interface IDemo {
    param: number;
    param1?: string;
    param2: Array<object>;
    readonly param3: boolean;
    readonly param4?: number[];

    exct(str: string): string;
}

interface IType {
    n: number;
    s?: string;
    readonly b: boolean;
}

export {IType};
export default IDemo;
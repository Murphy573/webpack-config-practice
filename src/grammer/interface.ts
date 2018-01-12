
interface label {
    label?: string;
    count?: number;
}

interface label1 {
    label: number;
    count: number;

    cons(a: number, b: string, c?: Date);
}

interface IPeople extends label{
    name: string;
    age?: number;

    run(meters: number): void;
}

export {label, label1 as labelNumber, IPeople};//as重命名

interface IDemo {
    param: number;
    param1?: string;
    param2: Array<object>;
    readonly param3: boolean;
    readonly param4?: number[];
    exct(str: string): string;
}

interface AnyProps {
    width?: number;
    height?: number;
    [prop: string]: number;//加上此索引签名后，那么这个接口就只校验width和height是否正确;如果加上只读(readonly)，那么不能修改此属性

}

interface ComponentMetaData {
    selector: string;
    url?: string;
}
declare const Type: FunctionConstructor;
interface ComponentBack {

}


export interface Component {
    //(obj: ComponentMetaData): any;
    new (name: string, age: number);
}


let a = 1;
export {a, IDemo, AnyProps};
//export default a;
// export let a = 1
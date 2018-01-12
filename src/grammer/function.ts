let myAdd = function (x: number, y: number): number {
    return x + y;
};

//完整的类型
let myAddWhole: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y;
    };

let myAddPlus: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number {
        return x + y;
    };

let myAdd1 = function (x: number, y?: number): number {//可选参数一定要放在必须参数的后面
    return x;
};

let myAdd2 = function (x: number, y = 50): number {//默认值参数
    return x + y;
};

function buildName(firstName: string, ...restOfName: Array<string>) {//剩余参数
    return firstName + " " + restOfName.join(" ");
}

//函数重载

function add(x: number, y: number): number;

function add(x: string): string;

function add(x): any {
    if (typeof x == "number") {
        console.log(`数字`)
    } else {
        console.log(`字符串`)
    }
}

add(1, 2);
add('s');
export default myAdd;
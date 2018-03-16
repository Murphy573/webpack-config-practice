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

function load(datas: any[], condition?: any) {
    let _count = 0;
    const _MAX = datas.length;

    let _load = function() {
        setTimeout(() => {
			console.log(`${_count} loaded`);
            if(_count < _MAX - 1){
				_count++;
				_load();
            }
        }, 2000);
    };

    if(_MAX) {
		_load()
    }
}

load([1,2,3,4,5,6]);

add(1, 2);
add('s');
export default myAdd;
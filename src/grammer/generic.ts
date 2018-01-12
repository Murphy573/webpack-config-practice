//泛型


let identity: <T>(arg: T) => T =
    function <T>(arg: T): T {
        return arg;
    };


let identity1: <T>(arg: T[]) => T[] = function <T>(a: T[]): T[]{
    return a;
};

interface IGeneric {
    <T>( arg: T ): T;
}

//let _i: IGeneric<> = identity;

/**
 * 泛型类
 */
class GenericAny<T> {
    value: T;
    add: (x: T, y: number) => T;
}

let myGc = new GenericAny<number[]>();
let myGc1 = new GenericAny<string>();


/**
 * 泛型约束
 */
interface RestrictLength {
    length: number;
}

function restrictFn<T extends RestrictLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

restrictFn({value: 3, length: 1});


/*function getProp(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProp(x, "a"); // okay
getProp(x, "m");*/

export {identity};

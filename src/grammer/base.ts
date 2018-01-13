export default function () {
    let a: number = 1;
    let b: string = 'b';
    let c: boolean = !'';

    let str: string = 'peter';
    console.log(`${str} is a boy!`);

    let num_arr: number[] = [1, 2, 3];
    let num_arr1: Array<number> = [1, 2, 3];

    /**
     * 元组类型：表示一个已知元素数量和类型的数组，各元素的类型不必相同;
     *          当访问一个越界的元素，会使用联合类型替代，如下的例子只能是'数字、字符串、日期'类型中的一种
     * @type {[number , string , Date]}
     */
    let mix_arr: [number, string, Date] = [1, '2', new Date()];
    mix_arr[3] = 1;
    mix_arr[4] = '2';
    mix_arr[5] = new Date().getTime();
    //mix_arr[7] = true;
    for(let mix of mix_arr){
        console.log(`iterator: logged ${mix}`);
    }

    enum Color {
        Red = 'red',
        Green = 'green',
        Blue = 'blue',
        Black = 'black'
    }

    let color: Color = Color.Green;
    console.log(`头顶->${color}, 脚底${Color['Black']}`);


    let notSure: any = 4;

    //断言
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    let strLength1: number = (<string>someValue).length;


    let {first, ...others} = {first: 1, a: 2, c: 3};
}

type a = string;
let s: a = '123';
console.log(s);

//export default a = 1;//一个文件只能存在一个default
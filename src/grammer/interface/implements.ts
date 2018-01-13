import {ICar, IType, IVoice} from "./IDemo";
import IDemo from './IDemo';
import {AnyProps, Component} from "../interface";

class Car implements ICar{
    move() {
        console.log('汽车移动!');
    }
}

//不使用接口
export function start(obj: Car){
    obj.move();
}
start(new Car());

//实现多借口
class LCar implements ICar, IVoice {
    move() {
        console.log('小汽车移动!');
    }

    sound() {
        console.log('小汽车鸣笛!');
    }
}
//使用接口
function start1(obj: ICar){
    obj.move();
}
start1(new Car());
start1(new LCar());
//start1(new Object());//报错，没有实现ICar接口

//接口使用
let a: IType = {
    n: 1,
    s: '2',
    b: false
};
let b: IType = {
    n: 1,
    b: true
};
//a.b = true;//不可修改

let d: IDemo = {//
    param: 1,
    param2: [{}],
    param3: false,
    exct(s: string): string{
        return s;
    }
};

let _anyProps: AnyProps = {
    width: 1,
    height: 2,
    length: 3
};
_anyProps.length = 4;
export default  _anyProps;


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

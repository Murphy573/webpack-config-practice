import {IPeople} from "../interface";

class People implements IPeople {
    static type: string = 'People';
    name: string;
    private _age?: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
        console.log(`新建people对象，人名：${this.name}, 年龄：${this._age}`);
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
        console.log(`'` + `${this.name}` + `'的年龄被改为--> ${value}`);
    }

    run(meters: number) {
        console.log(`${this.name}跑了${meters}公里！`);
    }
}

/**
 * 抽象类：抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 *          不同于接口，抽象类可以包含成员的实现细节，abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
 *          抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 */
abstract class Animals {
    constructor(private type: string) {
    }//参数即构造成员

    run(meters: number): void {
        console.log(`${this.type}动物跑了${meters}米`);
    }

    protected abstract move():void;

}

export {People, Animals};
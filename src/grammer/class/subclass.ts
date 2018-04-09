import { ClassDecorator, FunctionDecorator, PropDecorator } from "../decorator/common";

;
import {People, Animals}                                    from "./class";

/**
 * public(默认):任何地方都能访问
 * private: 只能在声明类的内部访问，他的实例化对象也无法访问
 * protected: 只能在声明类的内部或者他的子类内部访问
 * */
@ClassDecorator({
    imports: [1,2,3],
    exports: [1,2,3],
    providers: ['provide1', 'provide2', 'provide3']
})
class Student extends People {
    private _sex: string;//私有属性：只能在当前类内部访问,可以通过设置get&set进行修改和访问
    protected readonly stage: string;//只读属性
	stage: string;
    constructor(name: string, age: number, sex: string, stage: string) {
        console.log(Student.type);//继承了People类的静态成员
        super(name, age);
        this._sex = sex;
        this.stage = stage;
    }

    //@override: 重写People的run方法

    run(meters: number) {
        console.log(this.move());
        console.log(`${this.stage}${this._sex}学生${this.name}跑了${meters}公里！！`);
    }

    //添加私有方法：只能在类内部访问
	@FunctionDecorator('')
    private move(): string {//返回string类型
        console.log(`${this.name}起跑了！！！`);
        return 'start';
    }
}

class Mouse extends Animals {

    move(): void {//抽象方法必须实现
        console.log('start');

    }

    go(): void {
        this.move();//子类内部可以访问到父类的protect方法
        this.run(123);
    }
}

export {Student, Mouse};
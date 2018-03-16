import { label, labelNumber, a as aa } from './grammer/interface';
import func                            from './grammer/base';
import { People }                      from './grammer/class/class';
import { Student, Mouse }              from './grammer/class/subclass';
import * as identity                   from './grammer/generic';
import MyNameSpace                     from './grammer/namespace';
import myAdd                           from './grammer/function';
import anyprops                        from './grammer/interface/implements';
import { TestSetterAndGetter }         from "./grammer/class/setter&getter";
console.log('开始学习ts!!!');

let a: label = {
	label: 'a'
};
let b: labelNumber = {
	label: 1,
	count: 3,
	cons ( a: number, b: string, c?: Date ) {
		console.log(a + b + 'print at' + c);
	}
};
b.cons(1, '2', new Date());
console.log(a, b, aa);

func();

let jack = new People('Jack', 12);
jack.age = 15;//setter
console.log(jack.age);//getter
jack.run(15);


let lucy = new Student('Lucy', 15, '女', '高三');
lucy.run(10);

let mouse = new Mouse('老鼠');
mouse.go();


//泛型使用
console.log(identity.identity('myString'));
//namespace
console.log(`面积为：${MyNameSpace.calcSquare(3)}`);
let myShape = new MyNameSpace.MyShape(5, 1);
console.log(`矩形myShape的面积为: ${myShape.calcSquare()}`);
//console.log(identity('myString'), identity<number>(1));
myAdd(1, 2);

console.log(anyprops);

{
	let _t = new TestSetterAndGetter();
	_t.name = 'admin';
	_t.name = 'admin1';
	console.log(_t.name);
}
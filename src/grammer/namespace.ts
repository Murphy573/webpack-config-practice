namespace MyNameSpace {
    export const PII: number = 3.1415926;
    const DATE_START: string = '1970-01-01 00:00:00';

    export function calcSquare(radius: number): number {
        return PII * radius;
    }
    interface Shape {
        width: number;
        height: number;
        calcSquare();
    }

    export class MyShape implements Shape{
        width: number;
        height: number;
        constructor(width: number = 0, height: number = 0){
            this.width = width;
            this.height = height;
        }
        calcSquare (){
            return this.width * this.height;
        }
    }

    //export {PI};不能这样导出
}

/*class MyShape {//可以和在命名空间内的定义同时存在

}*/
export default MyNameSpace;//export {MyNameSpace};
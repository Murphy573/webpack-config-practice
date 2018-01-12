import Rx from 'rxjs/Rx';

//一个或者多个值转换为流
export const multiValues = Rx.Observable.of(1,2,3).map(v =>  v * v );

//数组转换为流
export const ArrayFlow = Rx.Observable.from([1, 2, 3]);
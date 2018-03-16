import AA from './observable.create';
import Operators from './observable.operators';
import { Observable  } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";

//一个或者多个值转换为流
export const multiValues =Observable.of(1,2,3).map(v =>  v * v );


//数组转换为流
export const ArrayFlow = Observable.from([1, 2, 3]);

const aa = AA;


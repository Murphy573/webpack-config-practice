import Rx from 'rxjs/Rx';

//of: 将一组由','分割的值转化为流
let _ofStream = Rx.Observable.of(1, 2, 3, { a: 1 }, [ 1111 ]).subscribe(
( data ) => {
	console.log('of操作符', data);
}
);

export default 3;

//from操作符:将数组转化为流
let _fromStream = Rx.Observable.from([ 1, 2, 3, 4, 5, { a: 1 }, [ 11111 ] ]).subscribe(
( data ) => {
	console.log('from操作符', data);
}
);

//interval操作符：从0开始，每秒一个值，逐渐递增
/*let _intervalStream = Rx.Observable.interval(1000).subscribe(
(data) => {
	console.log('interval操作符', data);
}
);*/

//filter：对流中的每一项数据进行条件过滤
let _filter = Rx.Observable.from([ 1, 2, 3, 4, 5, { a: 1 }, [ 11111 ] ]).filter(v => !Array.isArray(v)).subscribe(
( data ) => {
	console.log('filter操作符', data);
}
);

//do:可以查看流中每一条数据项，用于调试
let _doStream = Rx.Observable.of(1, 2, 3).do(( value ) => {
	console.log('do操作符', value)
}).subscribe(( data ) => {
	console.log('do操作符之后', data);
});

let source1 = Rx.Observable.interval(100)
.map(val => "source1 " + val).take(5);

let source2 = Rx.Observable.interval(50)
.map(val => "source2 " + val).take(2);

let stream$ = Rx.Observable.combineLatest(
source1,
source2
);

stream$.subscribe(data => console.log('combineLatest', data));

// 发出 source1: 0, source2 : 0 |  source1 : 0, source2 : 1 | source1 : 1, source2 : 1, 等等


//merge
let merged$ = Rx.Observable.merge(
Rx.Observable.of(1).delay(500),
Rx.Observable.of(3, 2, 5)
);

let observer = {
	next: data => console.log('merge', data)
};

merged$.subscribe(observer);


//
let _operatorsUse = Rx.Observable.interval(1000)
					.filter(v => v % 2 === 0)
					.debounceTime(2000)
					.subscribe(( v ) => {
						console.log('多个操作符连用', v)
					});


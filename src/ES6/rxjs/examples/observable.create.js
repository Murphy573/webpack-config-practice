import Rx from "rxjs/Rx";
//
Rx.Observable.create( (observer) => {
	observer.next(999);
	observer.error('出现错误！！！！');
	//observer.complete(56565656);
} ).subscribe(
	(data) => {
		console.log(`rx.create => ${data}`);
	},
	(error) => {
		console.log(`rx.create => ${error}`);
	},
	(complete) => {
		console.log(`rx.create => ${complete}`);
	}
);

//结束后清理Observer
let stream$ = new Rx.Observable.create((observer) => {
	let i = 0;
	let id = setInterval(() => {
		observer.next(i++);
	},1000);

	return function(){
		//取消观察后调用此函数
		clearInterval( id );
	}
});

let subscription = stream$.subscribe((value) => {
	console.log('stream$===>', value)
});

setTimeout(() => {
	subscription.unsubscribe() // 在这我们调用了清理函数

}, 3000);

export default 3;
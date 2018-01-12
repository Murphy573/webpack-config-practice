(function () {
    /**
     *Generator函数特点
     *1、分段执行，可以暂停
     *2、可以控制阶段和每个阶段的返回值
     *3、可以知道是否执行到结尾
     */

    function* G() {
        console.log('G->start');
        yield 1;//状态1
        console.log('G->1');
        console.log('G->1 repeat1');
        console.log('G->1 repeat2');
        //return;//终止执行
        yield 2;//状态2
        console.log('G->2');
        yield 3;//状态3
        console.log('G->3');
    }

    let g = G();//调用函数后不执行，而是返回指向内部状态的指针对象

    //指针依次往下移动，直到为done: true
    console.log(g.next());//移到下一个状态（yield）之前：本次状态和下次状态之间的代码都会执行
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());

    /**
     * next方法的运行逻辑:
     *1.遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
     *2.下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
     *3.如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
     *4.如果该函数没有return语句，则返回的对象的value属性值为undefined。
     */


    function* foo(x) {
        let y = 2 * (yield (x + 1));
        let z = yield (y / 3);
        return (x + y + z);
    }


    let b = foo(5);
    console.log(b.next());
    console.log(b.next(12));//yield本身没有返回值，next带参数表示上一个yield的返回值
    console.log(b.next(13));


    //Generator函数与for..of循环
    /*function iterator(){
        for(let g of G()){
            console.log(g);
        }
    }
    iterator();*/

    /*//给对象部署iterator
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        [Symbol.iterator]: function* (){
            let _props = Object.keys(this);
            for(let _prop of _props){
                yield [_prop, this[_prop]]
            }
        }
    };

    for(let [_key, _value] of obj){
        console.log(_key + '-->' + _value);
    }*/


    //generator之间调用
    function* First() {
        yield 'a';
        yield 'b';
        yield* Second();
        yield 'e';
    }

    function* Second() {
        yield 'c';
        yield 'd';
    }

    for (let a of First()) {
        console.log(a);
    }

    //yield* 取出嵌套数组内的所有成员
    const mockDataList = [
        {
            'id': "1",
            "name": "1",
            "child": [
                {
                    "id": "1-1",
                    "name": "1-1"
                },
                {
                    "id": "1-2",
                    "name": "1-2",
                    "child": [
                        {
                            "id": "1-2-1",
                            "name": "1-2-1"
                        }
                    ]
                }
            ]
        },
        {
            "id": "2",
            "name": "2",
            "child": [
                {
                    "id": "2-1",
                    "name": "2-1"
                },
                {
                    "id": "2-2",
                    "name": "2-2"
                }
            ]
        }
    ];

    function* buildTree(tree) {
        if (Array.isArray(tree)) {
            for (let i = 0, len = tree.length; i < len; i++) {
                yield {
                    id: tree[i].id,
                    name: tree[i].name
                };
                if (Array.isArray(tree[i].child)) {
                    yield* buildTree(tree[i].child);
                }
            }
        }
    }

    for (let _tree of buildTree(mockDataList)) {
        console.log(_tree);
    }
    console.log([...buildTree(mockDataList)]);

    //流程控制
    function* WorkFlow() {
        var result1 = yield asyncSleep1();
        console.log(result1);
        var result2 = yield asyncSleep2();
        console.log(result1 + '-' + result2);
    }

    function asyncSleep1(){
        new Promise(function(rev, rej){
            setTimeout(function(){
                rev('success1')
            }, 2000)
        })
        .then(function(data){
            wf.next(data);
        })
    }

    function asyncSleep2(){
        new Promise(function(resolve, reject){
            setTimeout(function(){
                reject('error2')
            }, 2000)
        })
        .then(function(data){
            wf.next(data);
        })
        .catch(function(data){
            wf.next(data);
        })
    }

    let wf = WorkFlow();
    wf.next();

})();
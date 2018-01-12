
;
let o1 = {
};

let o2 = {
    c: 3,
    proxy: function() {
        
    }
};

let proxy1 = new Proxy(o1, {
    set: function(target, key, value, receiver) {
        if(key === 'a'){
            target[key] = value;
            console.log(`对象o1设置了属性${key}`);
        }
        else {
            throw `对象o1只能设置属性a`
        }
    },
    get: function(target, key, receiver) {
        if(key in target){
            return target[key];
        }
        return `不存在${key}属性的值，返回默认值00000!!!`
    }
}, o2);

proxy1.a = 2;
console.log(o1);
console.log(proxy1.b);//返回默认值
console.log(o1.b);//undefined

let _p = Object.create(proxy1);
_p.a = 3;
console.log(_p.ccc);

{
    let a = {
        double : n => n * 2,
        pow    : n => n * n,
        reverseInt: n => n.toString().split("").reverse().join("") | 0
    };

    let pipe = (function () {
        return function (value) {
            let funcStack = [];
            let oproxy = new Proxy({} , {
                get : function (pipeObject, fnName) {
                    if (fnName === 'get') {
                        return funcStack.reduce(function (val, fn) {
                            return fn(val);
                        },value);
                    }
                    funcStack.push(a[fnName]);
                    return oproxy;
                }
            });

            return oproxy;
        }
    }());

    let double = n => n * 2;
    let pow    = n => n * n;
    let reverseInt = n => n.toString().split("").reverse().join("") | 0;

    console.log(pipe(3).double.pow.reverseInt.get);
}

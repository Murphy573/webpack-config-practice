import {multiValues, ArrayFlow} from "./examples/Observable";

//import md5 from 'md5';
import moment from 'moment';
//const moment = require('moment');
/**
 * 数值流
 */
multiValues.subscribe((v) => {console.log(`数值流==>${v}`)});

/**
 * 数组流
 */
let _ArrayObservable = ArrayFlow.filter((v, i) => {
    console.log(`数组第${i + 1}项的值为${v},打印时间为${moment().valueOf()}`);
});
_ArrayObservable.subscribe();


export const RX_INDEX = 2;
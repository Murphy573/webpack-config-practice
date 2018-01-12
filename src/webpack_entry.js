import './styles/specials/sp-1.scss';
import {RX_INDEX}    from './ES6/rxjs/rx_index';
import SSS           from './async-load/b';

import moment from 'moment';
import MD5 from 'md5';
//const moment = require('moment');
//const MD5 = require('md5');

debugger;
let _d = moment();
console.log(_d.format('YYYY-MM-DD'));
console.log('admin加密后==>' + MD5('admin'));
console.log(SSS);
console.log(RX_INDEX);
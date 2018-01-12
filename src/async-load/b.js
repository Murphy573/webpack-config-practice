
import asyncFn from "./loader";

/*asyncFn('moment').then(
    (a) => {
        a('+++++++++++++++++++++++++a文件已经被按需载入');
    }
);*/

import('moment').then((a) => {
    //a.log('+++++++++++++++++++++++++a文件已经被按需载入')
    console.log(`模块moment已经被载入`);
});

export default '这是按需加载例子的B模块!!'
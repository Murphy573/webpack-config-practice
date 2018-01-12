/**
 * write by @pengfei.li
 */

export class TestSetterAndGetter {
    private _name: string;

    set name(name: string) {
        if(name === 'admin') {
            console.log(`当前对象的name属性不能为==>${name}`);
            return;
        }
        this._name = name;
    }

    get name() {
        return this._name;
    }
}
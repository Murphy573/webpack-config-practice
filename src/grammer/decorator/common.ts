/**
 * write by @pengfei.li
 */

export interface ClassMetadata {
	imports?: any[];
	exports?: any[];
	providers?: any[];
}

export function ClassDecorator ( meta: ClassMetadata ) {
	let _keys = Object.keys(meta);
	let _props = {};
	for ( let _key of _keys) {
		_props[_key] = {
			value: meta[_key]
		}
	}

	return function decorator ( Class ) {
		Object.defineProperties(Class.prototype, _props);
		Object.defineProperty(Class.prototype, 'abcd1', {
			value: function () {
				return `通过装饰器定义的方法`;
			}
		});

		Object.defineProperty(Class.prototype, 'abcd2', {
			value: '通过装饰器定义的属性--->123'
		});

		console.log(`Arguments for ${name}: args`);

		return Class;
	};

}
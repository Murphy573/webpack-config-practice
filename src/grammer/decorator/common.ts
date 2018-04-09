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

export function FunctionDecorator(meta: any) {
	debugger;
	return (func, props, desc) => {
		console.log(`方法装饰器开始执行=======================`);
		let _oldValue = desc.value;
		desc.value = function(...args) {
			let _self = this;
			return _oldValue.apply(_self, args) + ', 这是由方法装饰器修饰的！！！！';
		};
	}
}

export function PropDecorator() {
	debugger;
	return (target, props, desc: PropertyDescriptor) => {
		desc = {
			value: '',
			get() {
				console.log(`${props}===>获取的值为${this.value}`)
			},
			set(param) {
				console.log(`${props}===>设置的值为${param}`)
			}
		};

		Object.defineProperties(target, { [props]: desc })
	}
}
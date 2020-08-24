import formatUnicorn from "format-unicorn/safe";

export function get(url: string) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		descriptor.value = async function (param: any): Promise<any> {
			const axois = (this as any)._axios;
			const fmtUrl = formatUnicorn(url, param);
			const rt = await axois.get(fmtUrl, undefined);
			return rt.data;
		};
		return descriptor;
	};
}

export function post(url: string) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		descriptor.value = async function (param: any): Promise<any> {
			const axois = (this as any)._axios;
			const rt = await axois.post(url, param);
			return rt.data;
		};
		return descriptor;
	};
}

export function put(url: string) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		descriptor.value = async function (param: any, body?: any): Promise<any> {
			const axois = (this as any)._axios;
			const fmtUrl = formatUnicorn(url, param);
			const rt = await axois.put(fmtUrl, body);
			return rt.data;
		};
		return descriptor;
	};
}

export function del(url: string) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		descriptor.value = async function (param: any): Promise<any> {
			const axois = (this as any)._axios;
			const fmtUrl = formatUnicorn(url, param);
			const rt = await axois.delete(fmtUrl, undefined);
			return rt.data;
		};
		return descriptor;
	};
}

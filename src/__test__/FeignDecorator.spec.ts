import { default as axios } from "axios";
import MockAdapter from "axios-mock-adapter";
import { FeignBuilder } from "../FeignBuilder";
import { get, post, put, del } from "../FeignDecorator";

var mock = new MockAdapter(axios);

class RestApi {
	@get("/get/{a}?b={b}")
	public async getTest(param: object):Promise<void> {
		throw -1;
	}
	@post("/post/{a}?b={b}")
	public async postTest(param: object, body: any):Promise<object> {
		throw -1;
	}
	@put("/put/{a}?b={b}")
	public async putTest(param: object, body: any):Promise<object> {
		throw -1;
	}
	@del("/delete/{a}?b={b}")
	public async deleteTest(param: object, body: any):Promise<object> {
		throw -1;
	}
}

const feign = new FeignBuilder(axios);
const oTest = feign.target(RestApi);

test("get", async () => {
	const body = {data: 1};
	const dataReturn = {ret : 300};
	mock.onGet("/get/a%20b?b=200").reply(200, JSON.stringify(dataReturn));
	const rt = await oTest.getTest( {a: "a b", b:200});
	expect(rt).toStrictEqual(dataReturn);
});
test("post", async () => {
	const body = {data: 1};
	const dataReturn = {ret : 300};
	mock.onPost("/post/100?b=200", body).reply(200, JSON.stringify(dataReturn));
	const rt = await oTest.postTest( {a:100, b:200}, body);
	expect(rt).toStrictEqual(dataReturn);
});

test("put", async () => {
	const body = {data: 1};
	const dataReturn = {ret : 300};
	mock.onPut("/put/100?b=200", body).reply(200, JSON.stringify(dataReturn));
	const rt = await oTest.putTest( {a:100, b:200}, body);
	expect(rt).toStrictEqual(dataReturn);
});

test("delete", async () => {
	const body = {data: 1};
	const dataReturn = {ret : 300};
	mock.onDelete("/delete/100?b=200", body).reply(200, JSON.stringify(dataReturn));
	const rt = await oTest.deleteTest( {a:100, b:200}, body);
	expect(rt).toStrictEqual(dataReturn);
});
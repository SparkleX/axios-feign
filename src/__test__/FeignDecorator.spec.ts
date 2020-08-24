import { default as axios } from "axios";
import MockAdapter from "axios-mock-adapter";
import { FeignBuilder } from "../FeignBuilder";
import { get } from "../FeignDecorator";

var mock = new MockAdapter(axios);

class Test {
	@get("/test")
	public async getTest():Promise<void> {
		return ;
	}
}

const feign = new FeignBuilder(axios as any);
const oTest = feign.target(Test);

test("get", async () => {
	mock.onGet("/test", {}).reply(200, {users: [{ id: 1, name: "John Smith" }]});
	await oTest.getTest();
});
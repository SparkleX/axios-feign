import { FeignBuilder } from "../FeignBuilder.js";
import { default as axios, AxiosInstance } from "axios";


const axiosInstance = axios.create();

class Test {

}

test("target", async () => {
	const feign = new FeignBuilder(axiosInstance);
	const oTest = feign.target(Test);
});
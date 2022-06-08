import {sayHelloAsync} from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("aaa");
    expect(result).toBe("Hello aaa");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("aaa")).resolves.toBe("Hello aaa");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
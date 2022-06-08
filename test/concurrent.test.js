import {sayHelloAsync} from "../src/async.js";

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("aaa")).resolves.toBe("Hello aaa");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("aaa")).resolves.toBe("Hello aaa");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("aaa")).resolves.toBe("Hello aaa");
});
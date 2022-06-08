import {sayHi} from "../src/sayHi.js";

test("sayHi success", () => {
    expect(sayHi("aaa")).toBe("Hi aaa");
});

test.failing("sayHi error", () => {
    sayHi(null);
});

test("sayHi error matchers", () => {
    expect(() => sayHi(null)).toThrow();
});
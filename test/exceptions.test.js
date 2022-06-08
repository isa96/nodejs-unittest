import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("aaa")).toThrow();
    expect(() => callMe("aaa")).toThrow(MyException);
    expect(() => callMe("aaa")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
    expect(callMe("bbb")).toBe("OK");
});
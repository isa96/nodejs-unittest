test("string.not", () => {
    const name = "aaa bbb ccc";

    expect(name).not.toBe("ddd");
    expect(name).not.toEqual("ddd");
    expect(name).not.toMatch(/ddd/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});
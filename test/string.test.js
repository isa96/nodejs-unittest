test("string", () => {
    const name = "aaa";

    expect(name).toBe("aaa");
    expect(name).toMatch(/a/);
});
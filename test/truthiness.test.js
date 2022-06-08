
test("truthinesss", () => {

    let value = null;

    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();

    value = undefined;
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();

    value = "aaa";
    expect(value).toBeTruthy();
    expect(value).toBe("aaa");

});
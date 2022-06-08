test("array simple", () => {
    const names = ["aaa", "bbb", "ccc"];
    expect(names).toEqual(["aaa", "bbb", "ccc"]);
    expect(names).toContain("aaa");
});

test("array object", () => {
    const persons = [
        {
            name: "aaa"
        },
        {
            name: "bbb"
        }
    ];
    expect(persons).toContainEqual({
        name: "aaa"
    });
});
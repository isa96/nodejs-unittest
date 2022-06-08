// jest --runTestsByPath test/equal.test.js

test("test to Be", () => {
    const name = "aaa";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello aaa");
});

test("test to Equal", () => {
    const person = {id: "aaa"};
    Object.assign(person, {name:"aaa"});

    expect(person).toEqual({id: "aaa", name:"aaa"});

});
const Intern = require("../lib/Intern");

test("sets school via constructor", () => {
    const testValue = "MTSU";
    const e = new Intern("Foo", 1, "testing@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "testing@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
})

test("getSchool() should return school entered", () => {
    const testValue = "MTSU";
    const e = new Intern("Foo", 1, "testing@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})
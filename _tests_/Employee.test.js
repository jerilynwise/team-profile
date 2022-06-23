const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("create new employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    })
});

it("sets name via constuctor srgumets", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});




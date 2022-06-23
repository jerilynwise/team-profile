const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("create new employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

it("sets name via constuctor arguments", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

it("set d via constuctor arguments", () => {
    const testValue= 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

it("set email via constructor srguments", () => {
    const testValue = "testing@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
})

describe("getName", () => {
    it("gets name via getName()", () => {
        const testValue = "John";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});

describe("getId", () => {
    it("gets id vis getId()", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.getId()).toBe(testValue);
    });
});

describe("getEmail", () => {
    it("gets email via getEmail()", () => {
        const testValue = "testing@test.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
});

describe("getRole", () => {
    it("getRole() returns employee", () => {
        const testValue = "Employee";
        const e = new Employee("Alice", 1, "testing@test.com");
        expect(e.getRole()).toBe(testValue);
    });
});
});

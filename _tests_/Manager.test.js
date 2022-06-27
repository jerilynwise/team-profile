const Manager = require('../lib/Manager');

test('set office number via constructor arugment', () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "testing@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return Manager', () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "testing@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("officeNumber() works when called", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "testing@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})
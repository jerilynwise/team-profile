const Engineer = require('../lib/Engineer');

test('set github via consturtor argument', () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "testing@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "testing@tes.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("getGitHub() pulls github user when called", () => { 
    const testValue = "gitHubUser";
    const e = new Engineer("Foo", 1, "testing@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
})
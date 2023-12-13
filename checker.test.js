const checkPassword = require("./checker")

// first test
//  expect is from mjest (it takes the function we want to test, which in this case is checkPassword)
// toBe refers to what comes back from the function being tested

test("return false when given an empty string", () => {
    expect(checkPassword("")).toBe(false)
})

test("return false when the password length is not 8 chars or more", () => {
    expect(checkPassword(12345678)).toBe(false);
})

test("return false when the password doesn't contain a letter", () => {
    expect(checkPassword("123456789")).toBe(false)
})

test("return false when the password doesn't contain a number", () => {
    expect(checkPassword("aaaaaaaaaaaaa")).toBe(false)
})

test("return true when the pw is 8 chars or more, contains a letter, contains a number", () => {
    expect(checkPassword("helloWorld123")).toBe(false)
})

test("Returns false when the password does not contain at least one uppercase letter", () => {
    expect(checkPassword("f5hutTyfk3")).toBe(false);
})

test("Returns true when the password contains at least one special character or symbol", () => {
    expect(checkPassword("f5hutTyfk3%$")).toBe(true);
})

test("Returns false when the password length is greater than or equal to 20 chars", () => {
    expect(checkPassword("f5hutTyfk3%sdfsdfsdfsdf4534sd$")).toBe(false);
})


// check now to see if it fails when given a passwordo f 8 characters but has no letters

// test("returns false when given a password of 8 characters but has no letters", () => {
//     expect(checkPassword("12345678")).toBe(false)
// })
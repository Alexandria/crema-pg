import { CamelCase } from "."

describe("CamelCase", () => {
  it("Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.", () => {
    // Arrange
    const valA = "test case"

    // Act
    const received = CamelCase(valA)

    // Assert
    const expected = "TestCase"
    expect(received).toEqual(expected)
  })

  it("Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.", () => {
    // Arrange
    const valA = "this is great"

    // Act
    const received = CamelCase(valA)

    // Assert
    const expected = "ThisIsGreat"
    expect(received).toEqual(expected)
  })

  it("Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.", () => {
    // Arrange
    const valA = "Lex sanders"

    // Act
    const received = CamelCase(valA)

    // Assert
    const expected = "LexSanders"
    expect(received).toEqual(expected)
  })

})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
